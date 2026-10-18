import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const assets = [
  {
    // Approved Wikimedia Commons photograph, Jorge Jaramillo, 17 October 2026.
    // License CC BY-SA 4.0; original photo page linked in article credit.
    target: resolve(root, "client/public/news/france-protests-paris-jj-20261017.jpg"),
    sources: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg/1280px-Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg/960px-Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg",
    ],
  },
  {
    target: resolve(root, "client/public/news/mouse-human-brain-organoid.png"),
    sources: [
      "https://novitalas.org/news/mouse-human-brain-organoid.png",
      "https://d2jqrm6oza8nb6.cloudfront.net/datasets/41303ea3-67c9-416e-8ad8-950c4b0f3840.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiYzc2ZjEzZWYyODUwOTE5YSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc4OTg4MTU4M30.DrZajApvryZQrRMxQZQLUsGz7oqnsHiwkzvxiQxqLXc",
    ],
  },
  {
    target: resolve(root, "client/public/news/greenland-us-arctic.jpg"),
    sources: [
      "https://novitalas.org/news/greenland-us-arctic.jpg",
      "https://d2jqrm6oza8nb6.cloudfront.net/datasets/2b700586-d915-4924-a286-5513360bf913.jpeg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNGM2ZmIzMThhNTExZmE4ZSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc4OTk4ODc2MH0.MSlUDMvCQiLKzUh5a2iVKsCcbqJNpkercpyJpWbHLRA",
    ],
  },
];

for (const asset of assets) {
  await mkdir(dirname(asset.target), { recursive: true });

  let finalError;
  for (const source of asset.sources) {
    try {
      const response = await fetch(source, { redirect: "follow" });
      const type = response.headers.get("content-type") || "";
      if (!response.ok || !type.toLowerCase().startsWith("image/")) {
        throw new Error(`HTTP ${response.status}; content-type ${type || "unknown"}`);
      }

      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length < 1000) {
        throw new Error("Image response was unexpectedly small");
      }

      await writeFile(asset.target, bytes);
      console.log(`Editorial asset ready: ${asset.target}`);
      finalError = undefined;
      break;
    } catch (error) {
      finalError = error;
      console.warn(`Editorial asset source unavailable: ${source}`);
    }
  }

  if (finalError) {
    throw new Error(
      `Unable to materialize editorial asset ${asset.target}: ${finalError.message}`
    );
  }
}
