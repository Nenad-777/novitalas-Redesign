import { z } from "zod";
import { generatePrivateStructure, freeProviderReady } from "../server/sofia/groq.js";
import {
  BeyondInputSchema,
  FieldDraftSchema,
  INSTRUMENT_0002,
  META_TASK_0002,
  MetaResultSchema,
  MODEL_TASK_0002,
  SHIFT_TASK_0002,
  ShiftResultSchema,
  selectEdge,
  validateMeta,
  validateShift,
} from "../server/sofia/beyond.js";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "private, no-store, max-age=0",
  "X-Robots-Tag": "noindex, noarchive, nofollow, nosnippet",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers });

const previewOnly = () =>
  process.env.VERCEL_ENV === "preview" ||
  (process.env.NODE_ENV !== "production" &&
    process.env.SOFIA_LOCAL_PREVIEW === "1");

export default {
  async fetch(request: Request): Promise<Response> {
    if (!previewOnly()) {
      return json(
        {
          available: false,
          message: "Eksperiment 0002 postoji samo u privatnom preview okruženju.",
        },
        404
      );
    }

    const configured = freeProviderReady();

    if (request.method === "GET") {
      return json({
        experiment: "0002",
        available: configured,
        provider: configured ? "groq-free" : "not-ready",
        model: "openai/gpt-oss-120b",
        commit: process.env.VERCEL_GIT_COMMIT_SHA || "local",
        retention: "browser-memory-only; groq-zdr-required",
        message: configured
          ? null
          : "AI veza nije spremna. Unos ostaje zaključan dok se privatna obrada ne aktivira.",
      });
    }

    if (request.method !== "POST") {
      return json({ message: "Metod nije podržan." }, 405);
    }

    const origin = request.headers.get("origin");
    if (
      (origin && origin !== new URL(request.url).origin) ||
      request.headers.get("x-sofia-experiment") !== "0002"
    ) {
      return json(
        { message: "Otvori eksperiment kroz njegov privatni preview link." },
        403
      );
    }

    if (!request.headers.get("content-type")?.startsWith("application/json")) {
      return json({ message: "Potreban je JSON zahtev." }, 415);
    }

    if (!configured) {
      return json(
        {
          code: "AI_NOT_CONFIGURED",
          message:
            "AI veza još nije aktivna. Tvoja misao nije poslata AI pružaocu.",
        },
        503
      );
    }

    if (Number(request.headers.get("content-length") || 0) > 48000) {
      return json({ message: "Zahtev je predugačak za ovaj eksperiment." }, 413);
    }

    const started = Date.now();

    try {
      const raw = await request.text();
      if (new TextEncoder().encode(raw).length > 48000) {
        return json({ message: "Zahtev je predugačak za ovaj eksperiment." }, 413);
      }

      let body: unknown;
      try {
        body = JSON.parse(raw);
      } catch {
        return json({ message: "Zahtev nije ispravan." }, 400);
      }

      const parsed = BeyondInputSchema.safeParse(body);
      if (!parsed.success) {
        return json(
          {
            message:
              "Unos nije dovoljan ili je struktura sesije neispravna. Vrati se jedan korak i pokušaj ponovo.",
          },
          400
        );
      }

      const input = parsed.data;
      const signal = AbortSignal.any([
        request.signal,
        AbortSignal.timeout(65000),
      ]);

      if (input.action === "model") {
        const draft = FieldDraftSchema.parse(
          await generatePrivateStructure(
            INSTRUMENT_0002,
            `${MODEL_TASK_0002}\nPARTICIPANT DATA (JSON):\n${JSON.stringify(input)}`,
            z.toJSONSchema(FieldDraftSchema),
            signal
          )
        );
        const field = selectEdge(
          draft,
          input.thought,
          input.correction,
          input.rejected
        );
        return json({
          field,
          diagnostics: {
            latencyMs: Date.now() - started,
            candidateCount: draft.candidates.length,
            operator: field.edge?.operator || null,
            validation: "passed",
          },
        });
      }

      if (input.action === "shift") {
        if (!input.field.edge) {
          return json(
            { message: "Nema dovoljno pouzdanog oslonca za transformaciju." },
            400
          );
        }
        if (
          input.intervention === "replace" &&
          input.replacement.trim().length < 4
        ) {
          return json(
            { message: "Napiši kako želiš da glasi korigovana veza." },
            400
          );
        }

        const draft = ShiftResultSchema.parse(
          await generatePrivateStructure(
            INSTRUMENT_0002,
            `${SHIFT_TASK_0002}\nPARTICIPANT DATA AND FIELD (JSON):\n${JSON.stringify(input)}`,
            z.toJSONSchema(ShiftResultSchema),
            signal
          )
        );
        const shift = validateShift(input, draft);
        return json({
          shift,
          diagnostics: {
            latencyMs: Date.now() - started,
            operator: input.field.edge.operator,
            validation: "passed",
          },
        });
      }

      const draft = MetaResultSchema.parse(
        await generatePrivateStructure(
          INSTRUMENT_0002,
          `${META_TASK_0002}\nPARTICIPANT DATA, FIELD AND FIRST SHIFT (JSON):\n${JSON.stringify(input)}`,
          z.toJSONSchema(MetaResultSchema),
          signal
        )
      );
      const meta = validateMeta(input.thought, draft);
      return json({
        meta,
        diagnostics: {
          latencyMs: Date.now() - started,
          validation: "passed",
          secondOrder: Boolean(meta.insight),
        },
      });
    } catch (error) {
      const status =
        typeof error === "object" && error !== null && "statusCode" in error
          ? Number(error.statusCode)
          : 0;
      const code =
        status === 401 || status === 403
          ? "AI_ACCESS_REQUIRED"
          : status === 402
            ? "AI_CREDITS_REQUIRED"
            : status === 429
              ? "AI_BUSY"
              : "AI_UNAVAILABLE";
      const message =
        code === "AI_ACCESS_REQUIRED"
          ? "Privatna AI veza nije aktivna. Potrebno je proveriti ključ i pristup modelu."
          : code === "AI_CREDITS_REQUIRED"
            ? "Besplatna AI obrada trenutno nije dostupna. Nije uključen drugi servis."
            : code === "AI_BUSY"
              ? "Dostignut je trenutni limit besplatnog servisa. Nema automatskog prelaska na drugi servis."
              : "Nisam dobila dovoljno pouzdan strukturisan odgovor. Možeš pokušati ponovo ili završiti eksperiment.";
      return json({ code, message }, 503);
    }
  },
};
