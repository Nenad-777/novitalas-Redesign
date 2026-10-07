import { z } from "zod";
import { generatePrivateStructure, freeProviderReady } from "../server/sofia/groq.js";
import {
  DraftSchema,
  InputSchema,
  INSTRUMENT,
  MODEL_TASK,
  SHIFT_TASK,
  TransformationSchema,
  selectShift,
  validateTransformation,
} from "../server/sofia/model.js";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "private, no-store, max-age=0",
  "X-Robots-Tag": "noindex, noarchive, nofollow, nosnippet",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers });

export default {
  async fetch(request: Request): Promise<Response> {
    const preview =
      process.env.VERCEL_ENV === "preview" ||
      (process.env.NODE_ENV !== "production" &&
        process.env.SOFIA_LOCAL_PREVIEW === "1");
    // Fail before reading any participant data when this branch is accidentally deployed to production.
    if (!preview)
      return json(
        {
          available: false,
          message:
            "Eksperiment je dostupan samo u privatnom preview okruženju.",
        },
        404
      );
    const configured = freeProviderReady();
    if (request.method === "GET")
      return json({
        experiment: "0001",
        available: configured,
        commit: process.env.VERCEL_GIT_COMMIT_SHA || "local",
        retention: "memory-only; groq-zdr-required",
        message: configured ? null : "Besplatna AI veza još nije povezana. Unos je isključen dok ne završimo aktivaciju.",
      });
    if (request.method !== "POST")
      return json({ message: "Metod nije podržan." }, 405);
    const origin = request.headers.get("origin");
    if (
      (origin && origin !== new URL(request.url).origin) ||
      request.headers.get("x-sofia-experiment") !== "0001"
    )
      return json(
        { message: "Otvori eksperiment kroz njegov privatni link." },
        403
      );
    if (!request.headers.get("content-type")?.startsWith("application/json"))
      return json({ message: "Potreban je JSON zahtev." }, 415);
    if (!configured)
      return json(
        {
          code: "AI_NOT_CONFIGURED",
          message:
            "Besplatna AI veza još nije povezana. Tvoja misao nije poslata AI pružaocu.",
        },
        503
      );
    if (Number(request.headers.get("content-length") || 0) > 32000)
      return json(
        { message: "Misao je preduga za ovaj mali eksperiment." },
        413
      );
    try {
      const raw = await request.text();
      if (new TextEncoder().encode(raw).length > 32000)
        return json(
          { message: "Misao je preduga za ovaj mali eksperiment." },
          413
        );
      let body: unknown;
      try {
        body = JSON.parse(raw);
      } catch {
        return json({ message: "Zahtev nije ispravan." }, 400);
      }
      const parsed = InputSchema.safeParse(body);
      if (!parsed.success)
        return json(
          {
            message:
              "Napiši jednu misao od 8 do 1800 znakova ili ispravi unos.",
          },
          400
        );
      const input = parsed.data;
      if (
        input.action === "shift" &&
        (!input.model.shift ||
          (input.intervention === "replace" && input.replacement.length < 4))
      )
        return json(
          { message: "Prvo izaberi ili ispravi moguću pretpostavku." },
          400
        );
      const signal = AbortSignal.any([request.signal, AbortSignal.timeout(65000)]);
      if (input.action === "model") {
        const output = DraftSchema.parse(await generatePrivateStructure(
          INSTRUMENT, `${MODEL_TASK}\nPARTICIPANT DATA (JSON):\n${JSON.stringify(input)}`,
          z.toJSONSchema(DraftSchema), signal
        ));
        return json({
          model: selectShift(
            output,
            input.thought,
            input.correction,
            input.rejected
          ),
        });
      }
      const output = TransformationSchema.parse(await generatePrivateStructure(
        INSTRUMENT, `${SHIFT_TASK}\nPARTICIPANT DATA AND PROVISIONAL MODEL (JSON):\n${JSON.stringify(input)}`,
        z.toJSONSchema(TransformationSchema), signal
      ));
      return json({ result: validateTransformation(input, output) });
    } catch (error) {
      // Never log SDK errors: they can contain prompts, request bodies, or generated personal text.
      // Do not return upstream messages, headers, stack traces, or raw response bodies.
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
          ? "Besplatna AI veza nije aktivna. Potrebno je proveriti ključ i pristup modelu."
          : code === "AI_CREDITS_REQUIRED"
            ? "Besplatna AI obrada trenutno nije dostupna. Nije uključen drugi servis."
            : code === "AI_BUSY"
              ? "Dostignut je limit besplatnog servisa. Pokušaj kasnije; nema automatskog prelaska na drugi servis."
              : "Nisam dobila dovoljno pouzdan odgovor. Pokušaj ponovo ili završi eksperiment.";
      return json({ code, message }, 503);
    }
  },
};
