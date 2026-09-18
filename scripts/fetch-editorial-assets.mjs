import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const target = resolve(root, "client/public/news/mouse-human-brain-organoid.png");
const sources = [
  "https://novitalas.org/news/mouse-human-brain-organoid.png",
  "https://d2jqrm6oza8nb6.cloudfront.net/datasets/41303ea3-67c9-416e-8ad8-950c4b0f3840.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiYzc2ZjEzZWYyODUwOTE5YSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc4OTg4MTU4M30.DrZajApvryZQrRMxQZQLUsGz7oqnsHiwkzvxiQxqLXc",
];

await mkdir(dirname(target), { recursive: true });

let finalError;
for (const source of sources) {
  try {
    const response = await fetch(source, { redirect: "follow" });
    const type = response.headers.get("content-type") || "";
    if (!response.ok || !type.toLowerCase().startsWith("image/")) {
      throw new Error(`HTTP ${response.status}; content-type ${type || "unknown"}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 1000) throw new Error("Image response was unexpectedly small");
    await writeFile(target, bytes);
    console.log(`Editorial asset ready: ${target}`);
    finalError = undefined;
    break;
  } catch (error) {
    finalError = error;
    console.warn(`Editorial asset source unavailable: ${source}`);
  }
}

if (finalError) {
  throw new Error(`Unable to materialize editorial asset: ${finalError.message}`);
}
