/**
 * Post-build script: generates per-route HTML files with injected OG tags.
 *
 * Vercel (static deployment) serves a `.html` file for `/path` when
 * `cleanUrls: true` is set in vercel.json. This allows each article route
 * to have its own OG image / title / description visible to scrapers
 * (Viber, WhatsApp, Twitter Cards, etc.) without requiring a server.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ROUTES_META, getMetaForRoute, injectOgTags } from "../server/routes-meta.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PUBLIC = path.resolve(__dirname, "..", "dist", "public");

function main() {
  const indexPath = path.join(DIST_PUBLIC, "index.html");

  if (!fs.existsSync(indexPath)) {
    console.error(`[generate-og-html] ERROR: ${indexPath} not found. Run 'vite build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, "utf-8");
  let generated = 0;

  for (const routePath of Object.keys(ROUTES_META)) {
    const meta = getMetaForRoute(routePath);
    const modifiedHtml = injectOgTags(baseHtml, meta);

    // Determine output file path: /geopolitika/iran-protesti-2026 -> dist/public/geopolitika/iran-protesti-2026.html
    const relPath = routePath.replace(/^\//, ""); // strip leading slash
    const outFile = path.join(DIST_PUBLIC, `${relPath}.html`);
    const outDir = path.dirname(outFile);

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(outFile, modifiedHtml, "utf-8");
    console.log(`[generate-og-html] wrote ${outFile}`);
    generated++;
  }

  console.log(`[generate-og-html] Done — ${generated} route HTML files generated.`);
}

main();
