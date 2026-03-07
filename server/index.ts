import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { BASE_URL, getRouteMeta } from "../shared/seo.js";

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

function injectMeta(html: string, pathname: string): string {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const meta = getRouteMeta(normalized);

  const absUrl = normalized === "/" ? BASE_URL : `${BASE_URL}${normalized}`;
  const absImage = `${BASE_URL}${meta.image}`;

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const url = escapeHtml(absUrl);
  const image = escapeHtml(absImage);

  return html
    .replace(
      /<title data-dynamic="1">[^<]*<\/title>/,
      `<title data-dynamic="1">${title}</title>`,
    )
    .replace(
      /(<meta name="description" data-dynamic="1" content=")[^"]*(")/,
      `$1${description}$2`,
    )
    .replace(
      /(<meta property="og:title" data-dynamic="1" content=")[^"]*(")/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta property="og:description" data-dynamic="1" content=")[^"]*(")/,
      `$1${description}$2`,
    )
    .replace(
      /(<meta property="og:url" data-dynamic="1" content=")[^"]*(")/,
      `$1${url}$2`,
    )
    .replace(
      /(<meta property="og:image" data-dynamic="1" content=")[^"]*(")/,
      `$1${image}$2`,
    )
    .replace(
      /(<meta name="twitter:title" data-dynamic="1" content=")[^"]*(")/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta name="twitter:description" data-dynamic="1" content=")[^"]*(")/,
      `$1${description}$2`,
    )
    .replace(
      /(<meta name="twitter:image" data-dynamic="1" content=")[^"]*(")/,
      `$1${image}$2`,
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

  // Cache index.html content in memory after the first read
  let indexHtmlCache: string | null = null;

  function getIndexHtml(): Promise<string> {
    if (indexHtmlCache !== null) {
      return Promise.resolve(indexHtmlCache);
    }
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(staticPath, "index.html"), "utf-8", (err, data) => {
        if (err) return reject(err);
        indexHtmlCache = data;
        resolve(data);
      });
    });
  }

  // Handle client-side routing - serve index.html with injected meta tags
  app.get("*", (req, res) => {
    getIndexHtml()
      .then((data) => {
        const html = injectMeta(data, req.path);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.send(html);
      })
      .catch(() => {
        res.status(500).send("Internal Server Error");
      });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
