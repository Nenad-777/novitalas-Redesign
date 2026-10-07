import { generateText, Output } from "ai";
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
    const configured = Boolean(
      process.env.VERCEL_OIDC_TOKEN ||
        process.env.AI_GATEWAY_API_KEY ||
        request.headers.has("x-vercel-oidc-token")
    );
    if (request.method === "GET")
      return json({
        experiment: "0001",
        available: configured,
        commit: process.env.VERCEL_GIT_COMMIT_SHA || "local",
        retention: "memory-only; gateway-zdr-required",
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
            "AI veza za ovaj preview još nije aktivirana. Tvoja misao nije poslata AI pružaocu.",
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
      const options = {
        // Confirmed in the live gateway catalog, 2026-10-07; supports structured outputs and ZDR routing.
        model: process.env.SOFIA_AI_MODEL || "openai/gpt-6.1-sol",
        system: INSTRUMENT,
        maxOutputTokens: 6500,
        maxRetries: 0,
        reasoning: "medium" as const,
        abortSignal: AbortSignal.any([
          request.signal,
          AbortSignal.timeout(65000),
        ]),
        telemetry: {
          isEnabled: false,
          recordInputs: false,
          recordOutputs: false,
        },
        providerOptions: {
          gateway: { zeroDataRetention: true },
          openai: { store: false },
        },
      };
      if (input.action === "model") {
        const { output } = await generateText({
          ...options,
          output: Output.object({ schema: DraftSchema }),
          prompt: `${MODEL_TASK}\nPARTICIPANT DATA (JSON):\n${JSON.stringify(input)}`,
        });
        return json({
          model: selectShift(
            output,
            input.thought,
            input.correction,
            input.rejected
          ),
        });
      }
      const { output } = await generateText({
        ...options,
        output: Output.object({ schema: TransformationSchema }),
        prompt: `${SHIFT_TASK}\nPARTICIPANT DATA AND PROVISIONAL MODEL (JSON):\n${JSON.stringify(input)}`,
      });
      return json({ result: validateTransformation(input, output) });
    } catch (error) {
      // Never log SDK errors: they can contain prompts, request bodies, or generated personal text.
      // Do not return upstream messages, headers, stack traces, or raw response bodies.
      const status =
        typeof error === "object" && error !== null && "statusCode" in error
          ? Number(error.statusCode)
          : 0;
      const diagnosticParts: string[] = [];
      let current: unknown = error;
      for (let depth = 0; depth < 3 && typeof current === "object" && current !== null; depth++) {
        const record = current as Record<string, unknown>;
        for (const key of ["message", "responseBody", "type", "response", "data"]) {
          const value = record[key];
          if (typeof value === "string") diagnosticParts.push(value);
          else if (value && typeof value === "object") {
            try { diagnosticParts.push(JSON.stringify(value)); } catch { /* No diagnostic content is required. */ }
          }
        }
        current = record.cause;
      }
      const details = diagnosticParts.join(" ");
      // Inspect only known error markers in memory; never expose the upstream error text.
      const reason = /customer_verification_required/i.test(details) ? "CUSTOMER_VERIFICATION_REQUIRED"
        : /zero.data.retention|zdr/i.test(details) ? "ZDR_UNAVAILABLE"
        : /restricted access|no_providers_available|routing rule|allowlist|deny.rule/i.test(details) ? "TEAM_POLICY_RESTRICTION"
        : /credit|billing|payment|budget/i.test(details) ? "BILLING_REQUIRED"
        : /access.denied|forbidden|blocked/i.test(details) ? "ACCESS_DENIED"
        : /oidc|authentication|unauthorized/i.test(details) ? "AUTHENTICATION_REQUIRED"
        : "UPSTREAM_ACCESS";
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
          ? "AI pristup ili režim bez zadržavanja sadržaja još nije omogućen za ovaj preview. Analiza je zaustavljena."
          : code === "AI_CREDITS_REQUIRED"
            ? "AI obrada trenutno nema raspoloživ budžet. Analiza je zaustavljena."
            : code === "AI_BUSY"
              ? "AI veza je trenutno zauzeta. Pokušaj ponovo za trenutak."
              : "Nisam dobila dovoljno pouzdan odgovor. Pokušaj ponovo ili završi eksperiment.";
      return json({ code, message, reason, upstreamStatus: status }, 503);
    }
  },
};
