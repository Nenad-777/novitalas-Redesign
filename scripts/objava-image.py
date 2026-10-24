#!/usr/bin/env python3
"""Read-only PNG validation and bounded transfer chunks. Python standard library only."""
import argparse
import base64
import hashlib
import json
from pathlib import Path
import struct
import sys
import zlib

CHUNK = 49152

def inspect(path):
    data = Path(path).read_bytes()
    if data[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('FORMAT: expected original PNG')
    pos, kinds, width, height = 8, [], 0, 0
    while pos < len(data):
        if pos + 12 > len(data):
            raise ValueError('PNG_TRUNCATED: incomplete chunk')
        size = struct.unpack('>I', data[pos:pos+4])[0]
        kind = data[pos+4:pos+8]
        end = pos + 12 + size
        if end > len(data):
            raise ValueError('PNG_TRUNCATED: incomplete payload')
        payload = data[pos+8:pos+8+size]
        crc = struct.unpack('>I', data[pos+8+size:end])[0]
        if zlib.crc32(kind + payload) & 0xffffffff != crc:
            raise ValueError('PNG_CRC: damaged chunk')
        if not kinds:
            if kind != b'IHDR' or size != 13:
                raise ValueError('PNG_HEADER: invalid IHDR')
            width, height = struct.unpack('>II', payload[:8])
            if not width or not height:
                raise ValueError('PNG_DIMENSIONS: empty image')
        kinds.append(kind)
        pos = end
        if kind == b'IEND':
            if size or pos != len(data):
                raise ValueError('PNG_END: unexpected trailing data')
            break
    if not kinds or kinds[-1] != b'IEND' or b'IDAT' not in kinds:
        raise ValueError('PNG_STRUCTURE: missing image data or end')
    sha = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()
    return data, dict(format='PNG', width=width, height=height, size=len(data),
                      sha=sha, chunk_bytes=CHUNK, chunks=(len(data)+CHUNK-1)//CHUNK)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('path')
    parser.add_argument('--chunk', type=int)
    parser.add_argument('--expected-sha')
    args = parser.parse_args()
    data, meta = inspect(args.path)
    if args.expected_sha and args.expected_sha != meta['sha']:
        raise ValueError('SOURCE_CHANGED: Git blob SHA differs')
    if args.chunk is None:
        print(json.dumps(meta))
    else:
        if not 0 <= args.chunk < meta['chunks']:
            raise ValueError('CHUNK_RANGE: invalid index')
        part = data[args.chunk*CHUNK:(args.chunk+1)*CHUNK]
        print(json.dumps(dict(index=args.chunk, bytes=len(part),
                              base64=base64.b64encode(part).decode())))

if __name__ == '__main__':
    try:
        main()
    except (OSError, ValueError, struct.error) as exc:
        print(str(exc), file=sys.stderr)
        sys.exit(1)
