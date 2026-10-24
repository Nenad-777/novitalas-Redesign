# OBJAVA: original PNG transfer

Use `scripts/objava-image.py` and `scripts/objava-upload.js` with the current
functions.exec tools bridge. Python 3 standard library only; no production build
changes, tokens, image conversion, or new dependencies.

1. Recover the approved original from attachments/Library if its prior session
   path is absent. Never substitute a thumbnail or regenerate it.
2. Run `python3 scripts/objava-image.py /absolute/path/original.png`.
   Compare format, dimensions and Git blob SHA with the approved record.
3. Read `scripts/objava-upload.js` into the orchestration runtime and evaluate
   its function definition. Call `uploadObjavaPng(tools, options)` with absolute
   `path`, absolute Python `helper`, `repository`, `expectedSha`, `width`, `height`.
   Print only its returned metadata. Never print chunk responses or Base64.
4. The function reads 49,152-byte chunks with a generous per-call output budget,
   validates JSON, index and lengths, joins them in order, invokes GitHub
   create_blob directly and requires the returned Git blob SHA to match.
   Output truncation, source mutation, bad PNG CRC or SHA mismatch stops the
   operation before tree/commit creation. A remote mismatch must never be committed.
5. Use the verified SHA as a `100644` blob tree entry under `client/public/news/`.
   Build on the current main tree; create commit, branch and PR. Check preview
   before merge and production READY after merge. Do not force-update main.
6. Download the production image and compare Git blob SHA again.

This helper uploads a blob only. Article text, routes, metadata, sitemap,
ShareButton and homepage 1+8 rotation remain separate required publication steps.
Persist the exact approved text before leaving its conversation; a retrieval
summary is not an approved publication source. Missing text blocks publication,
not recovery/upload of the approved image or repair of this helper.

## Verified run, 23 October 2026

Original: Desert Pipelines Toward a Modern Complex.png (formerly local
wide_minimal_cinematic_painterly_illustration_p.png).
PNG 1672 × 941; 2,651,722 bytes; 54 chunks.
Local and GitHub blob: `2bc113cb3da74eb817b3ba3b9b7f268c99c4472e`.
The actual tools.exec_command → JavaScript → GitHub create_blob transfer passed.
The previous session's local path was absent in this session; Library recovery
restored the exact bytes. This does not establish why an earlier session failed.
No universal connector argument limit is claimed: this exact 3,535,632-character
Base64 payload succeeded. Tools/authentication and original-file availability
remain runtime prerequisites.
