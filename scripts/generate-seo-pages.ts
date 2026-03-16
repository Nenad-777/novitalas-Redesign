/**
 * generate-seo-pages.ts
 *
 * Post-build script that pre-generates a static index.html for every
 * article route defined in shared/seo.ts.
 *
 * Why this is needed:
 *   The project is deployed as a static SPA on Vercel. vercel.json rewrites
 *   all unmatched requests to the root index.html, which has empty og:image
 *   tags. Social crawlers (Viber, WhatsApp, etc.) therefore see no preview
 *   image when someone shares an article URL.
 *
 * How it works:
 *   After `vite build` produces dist/public/index.html, this script reads
 *   that template, injects route-specific OG / Twitter meta tags for each
 *   known article route, and writes the result to
 *   dist/public/<route>/index.html.
 *
 *   Vercel's static-file serving takes precedence over rewrites, so these
 *   pre-generated files are served directly to crawlers while the React SPA
 *   still loads correctly for regular users (all asset paths are absolute).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { seoData } from "../shared/seo.js";
import {
  articleMeta,
  buildSEOFromArticleMeta,
} from "../shared/articleMeta.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function injectSEO(
  html: string,
  route: string,
  seo?: ReturnType<typeof buildSEOFromArticleMeta>,
): string {
  const resolvedSeo = seo ?? seoData[route];
  if (!resolvedSeo) return html;

  let result = html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(resolvedSeo.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.description)}$2`,
    )
    .replace(
      /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
      `$1article$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.ogTitle)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.ogDescription)}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.ogUrl)}$2`,
    )
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.ogImage)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.twitterTitle)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.twitterDescription)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${escapeHtml(resolvedSeo.twitterImage)}$2`,
    );

  // Derive the MIME type from the image URL's file extension.
  const ext = resolvedSeo.ogImage.split(".").pop()?.toLowerCase() ?? "jpg";
  const mimeTypes: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
  };
  const ogImageMime = mimeTypes[ext] ?? "image/jpeg";

  // Insert extra OG image tags for Viber/WhatsApp compatibility right after
  // the og:image tag.  These are not present in the base index.html template.
  // Dimensions default to the widely-supported 1200×630 recommendation; all
  // OG images in this project are expected to match those proportions.
  const extraOgImageTags = [
    `    <meta property="og:image:secure_url" content="${escapeHtml(resolvedSeo.ogImage)}" />`,
    `    <meta property="og:image:type" content="${ogImageMime}" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
  ].join("\n");

  result = result.replace(
    /(<meta\s+property="og:image"[^>]*>)/,
    `$1\n${extraOgImageTags}`,
  );

  // Add a canonical link element so crawlers know the authoritative URL.
  const canonicalTag = `    <link rel="canonical" href="${escapeHtml(resolvedSeo.ogUrl)}" />`;
  result = result.replace(/(<\/head>)/, `${canonicalTag}\n  $1`);

  return result;
}

async function main() {
  const distPublicPath = path.resolve(__dirname, "../dist/public");
  const indexHtmlPath = path.join(distPublicPath, "index.html");

  if (!fs.existsSync(indexHtmlPath)) {
    console.error(
      "ERROR: dist/public/index.html not found. Run `vite build` first.",
    );
    process.exit(1);
  }

  const template = fs.readFileSync(indexHtmlPath, "utf-8");

  // Merge seo.ts routes with articleMeta routes.
  // seo.ts entries (explicit) take priority; articleMeta provides the rest.
  const mergedSeoData: Record<
    string,
    ReturnType<typeof buildSEOFromArticleMeta>
  > = {};

  // 1. Seed with auto-derived articleMeta entries
  for (const meta of articleMeta) {
    mergedSeoData[meta.path] = buildSEOFromArticleMeta(meta);
  }

  // 2. Override with explicit seo.ts entries (higher priority)
  for (const [route, data] of Object.entries(seoData)) {
    mergedSeoData[route] = data;
  }

  const routes = Object.keys(mergedSeoData);
  console.log(`Generating ${routes.length} pre-rendered SEO pages…`);

  for (const route of routes) {
    const seo = mergedSeoData[route];
    // Build a temporary per-route seoData object for injectSEO
    const injectedHtml = injectSEO(template, route, seo);

    // Strip leading slash and create the target directory.
    const routeSegment = route.replace(/^\//, "");
    const routeDir = path.join(distPublicPath, routeSegment);

    fs.mkdirSync(routeDir, { recursive: true });

    const outputPath = path.join(routeDir, "index.html");
    fs.writeFileSync(outputPath, injectedHtml, "utf-8");

    console.log(`  ✓ ${route}`);
  }

  console.log(`\n✅ Done — ${routes.length} SEO pages written to dist/public/`);
}

main().catch((err) => {
  console.error("generate-seo-pages failed:", err);
  process.exit(1);
});
