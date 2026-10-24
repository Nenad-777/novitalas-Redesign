// Load this function in functions.exec, then call with the current tools object.
// Never print chunk responses or the assembled Base64 string.
async function uploadObjavaPng(tools, {path, helper, repository, expectedSha, width, height}) {
  const quote = value => "'" + String(value).replace(/'/g, "'\\''") + "'";
  async function read(extra = '') {
    const r = await tools.exec_command({
      cmd: `python3 ${quote(helper)} ${quote(path)} ${extra}`,
      login: false, max_output_tokens: 100000
    });
    if (r.exit_code !== 0 || r.session_id) throw new Error('LOCAL_READ: ' + (r.output || 'unfinished'));
    try { return JSON.parse(r.output); }
    catch { throw new Error('TRUNCATED_OUTPUT: chunk JSON incomplete; no upload attempted'); }
  }
  const meta = await read();
  if (!expectedSha || meta.sha !== expectedSha) throw new Error('SOURCE_SHA: approved original mismatch');
  if (meta.width !== width || meta.height !== height) throw new Error('SOURCE_DIMENSIONS: approved original mismatch');
  const parts = [];
  let bytes = 0;
  for (let i = 0; i < meta.chunks; i++) {
    const part = await read(`--chunk ${i} --expected-sha ${quote(meta.sha)}`);
    const expectedBytes = Math.min(meta.chunk_bytes, meta.size - i * meta.chunk_bytes);
    if (part.index !== i || part.bytes !== expectedBytes ||
        part.base64.length !== 4 * Math.ceil(expectedBytes / 3) ||
        !/^[A-Za-z0-9+/]*={0,2}$/.test(part.base64) ||
        (i < meta.chunks - 1 && part.base64.includes('='))) {
      throw new Error(`CHUNK_INVALID: ${i}; no upload attempted`);
    }
    parts.push(part.base64);
    bytes += part.bytes;
  }
  const content = parts.join('');
  if (bytes !== meta.size || content.length !== 4 * Math.ceil(meta.size / 3))
    throw new Error('TOTAL_LENGTH: no upload attempted');
  const result = await tools.mcp__codex_apps__github_create_blob({
    repository_full_name: repository, encoding: 'base64', content
  });
  if (result.isError) throw new Error('GITHUB_UPLOAD: connector rejected blob');
  let payload = result.structuredContent;
  if (!payload) {
    for (const item of result.content || []) {
      if (item.type === 'text') { try { payload = JSON.parse(item.text); break; } catch {} }
    }
  }
  const sha = payload?.sha || payload?.result?.sha;
  if (sha !== meta.sha) throw new Error(`REMOTE_SHA: expected ${meta.sha}, received ${sha}; do not commit`);
  return {...meta, sha, verified: true};
}
