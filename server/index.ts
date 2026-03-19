import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { seoData } from "../shared/seo.js";
import {
  articleMeta,
  buildSEOFromArticleMeta,
  buildJsonLd,
} from "../shared/articleMeta.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build a merged lookup: seo.ts (explicit) takes priority over articleMeta.
const mergedSeoLookup: Record<string, ReturnType<typeof buildSEOFromArticleMeta>> = {};
for (const meta of articleMeta) {
  mergedSeoLookup[meta.path] = buildSEOFromArticleMeta(meta);
}
for (const [route, data] of Object.entries(seoData)) {
  mergedSeoLookup[route] = data as ReturnType<typeof buildSEOFromArticleMeta>;
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

  let result = html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeHtml(seo.description)}$2`,
    )
    .replace(
      /(<meta\s+property="og:type"\s+content=")[^"]*(")/,
      `$1article$2`,
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

  // Derive MIME type from the image URL's file extension.
  const ext = seo.ogImage.split(".").pop()?.toLowerCase() ?? "jpg";
  const mimeTypes: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
  };
  const ogImageMime = mimeTypes[ext] ?? "image/jpeg";

  // Insert extra OG image tags for Viber/WhatsApp compatibility.
  const extraOgImageTags = [
    `    <meta property="og:image:secure_url" content="${escapeHtml(seo.ogImage)}" />`,
    `    <meta property="og:image:type" content="${ogImageMime}" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
  ].join("\n");

  result = result.replace(
    /(<meta\s+property="og:image"[^>]*>)/,
    `$1\n${extraOgImageTags}`,
  );

  // Add og:article:published_time when a publish date is available.
  if (seo.datePublished) {
    const publishedTimeTag = `    <meta property="og:article:published_time" content="${escapeHtml(seo.datePublished)}T00:00:00+01:00" />`;
    result = result.replace(/(<\/head>)/, `${publishedTimeTag}\n  $1`);
  }

  // Add a canonical link element.
  const canonicalTag = `    <link rel="canonical" href="${escapeHtml(seo.ogUrl)}" />`;
  result = result.replace(/(<\/head>)/, `${canonicalTag}\n  $1`);

  // Inject NewsArticle JSON-LD structured data before </body>.
  const jsonLdData = buildJsonLd({
    title: seo.ogTitle,
    description: seo.description,
    ogUrl: seo.ogUrl,
    ogImage: seo.ogImage,
    datePublished: seo.datePublished,
    author: seo.author,
  });
  const jsonLdScript = `  <script type="application/ld+json">\n    ${JSON.stringify(jsonLdData, null, 2).replace(/\n/g, "\n    ")}\n  </script>`;
  result = result.replace(/(<\/body>)/, `${jsonLdScript}\n  $1`);

  return result;
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
