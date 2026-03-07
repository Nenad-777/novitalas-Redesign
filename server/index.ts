import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";
import { getMetaForRoute, injectOgTags } from "./routes-meta.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlRateLimiter = rateLimit({
  windowMs: 60_000, // 1 minute
  max: 120, // max requests per window per IP
  standardHeaders: true,
  legacyHeaders: false,
});

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Load the base HTML once at startup to avoid repeated disk reads
  const indexPath = path.join(staticPath, "index.html");
  let baseHtml: string | null = null;
  try {
    baseHtml = fs.readFileSync(indexPath, "utf-8");
  } catch {
    // Will fall back to sendFile if reading fails
  }

  // Handle client-side routing - serve index.html with injected OG tags
  app.get("*", htmlRateLimiter, (req, res) => {
    // Normalize trailing slashes for route lookup
    const urlPath = req.path.replace(/\/+$/, "") || "/";
    const meta = getMetaForRoute(urlPath);

    if (baseHtml) {
      const modifiedHtml = injectOgTags(baseHtml, meta);
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.send(modifiedHtml);
    } else {
      res.sendFile(indexPath);
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
