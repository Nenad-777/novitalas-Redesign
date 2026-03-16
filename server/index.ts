import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { seoData } from "../shared/seo.js";
import {
  articleMeta,
  buildSEOFromArticleMeta,
} from "../shared/articleMeta.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build a merged lookup: seo.ts (explicit) takes priority over articleMeta.
const mergedSeoLookup: Record<string, ReturnType<typeof buildSEOFromArticleMeta>> = {};
for (const meta of articleMeta) {
  mergedSeoLookup[meta.path] = buildSEOFromArticleMeta(meta);
}
for (const [route, data] of Object.entries(seoData)) {
  mergedSeoLookup[route] = data;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function injectSEO(html: string, route: string): string {
  const seo = mergedSeoLookup[route];
  if (!seo) return html;

  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.description)}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.ogTitle)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.ogDescription)}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.ogUrl)}$2`,
    )
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.ogImage)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.twitterTitle)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.twitterDescription)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.twitterImage)}$2`,
    );
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  const htmlPath = path.join(staticPath, "index.html");
  let indexHtmlTemplate: string | null = null;
  try {
    indexHtmlTemplate = fs.readFileSync(htmlPath, "utf-8");
  } catch (e) {
    console.error("Failed to pre-load index.html template:", e);
  }

  // Handle client-side routing - serve index.html for all routes,
  // injecting route-specific OG/Twitter meta tags for known article routes.
  app.get("*", (req, res) => {
    const route = req.path;

    if (indexHtmlTemplate && mergedSeoLookup[route]) {
      const html = injectSEO(indexHtmlTemplate, route);
      res.type("html").send(html);
      return;
    }

    res.sendFile(htmlPath);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
