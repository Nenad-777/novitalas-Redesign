# Original media transfer, verified 2026-10-26

Terminal git push in this environment lacks GitHub credentials. The connected GitHub create_blob tool accepts base64 and preserves binary bytes. Tested with the 6,858,107-byte original MP4; local and remote Git blob SHA: da9d9cbad052cc2700112d6b899ab46768800656.

Read local bytes in 750,000-byte chunks (divisible by 3), base64 encode each, collect tool outputs programmatically without displaying them, validate lengths and alphabet, concatenate, call create_blob with encoding=base64. Compare the result with git hash-object. Never commit base64 text as a media file. The same byte-preserving procedure applies to PNG, JPEG and WebP.

Resume by checking the target branch, PR and existing blob SHA. Blobs are content-addressed: reuploading identical bytes returns the same SHA. Build a tree from the current base tree, add media and related code in one commit, create a PR, require successful preview, then merge with expected head SHA. Verify production READY and download/hash the served file.

An ordinary chat must expose BOTH an executor that can read the attachment and the authenticated GitHub tools. Tool availability is session-specific. This session verifies Work mode only; ordinary-chat execution has NOT been tested and is not claimed repaired. Existing Actions workflows are specific to earlier publications, not generic attachment transfer services. Do not send private attachments to third-party temporary hosting.
