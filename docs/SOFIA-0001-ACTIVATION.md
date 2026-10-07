# SOFIA Experiment 0001 — free-plan activation

Status: implementation prepared; real inference is NOT verified until the owner supplies a Groq Free-tier key. Do not present the preview as a working experiment before live verification.

## Account steps (owner only)

1. Create/sign in at https://console.groq.com . Keep the Free plan. Do not add a payment method or upgrade.
2. Enable Zero Data Retention in Settings / Data Controls. This is a provider setting; the application cannot set or verify it through the inference API.
3. Create an API key. Never send it in chat, commit it, or add it to a client-side variable.
4. In the existing Vercel project, add encrypted `GROQ_API_KEY`, restricted to Preview and branch `experiment/sofia-free-0001`.
5. After verifying the Free plan and ZDR settings, add branch-scoped Preview variables `SOFIA_GROQ_FREE_CONFIRMED=1` and `SOFIA_GROQ_ZDR_CONFIRMED=1`.
6. Redeploy only this branch preview. Never promote or merge to production.

The application has no billing or upgrade actions and no fallback provider. Quota errors end processing. Staying on the provider's Free plan is an account-level requirement; the flags do not enforce account billing if the owner later upgrades it.

## Verification before Participant 0001

- Confirm all three prerequisites and exact deployment commit.
- Submit synthetic beliefs only until privacy configuration is confirmed.
- Verify genuine model creation, source-quote grounding, one selected premise, rejection with correction, replacement/removal, preserved evidence and final neutral feedback.
- Test physical iPhone Safari. Chromium mobile emulation is not an iPhone test.
- Verify private protection and noindex/noarchive, and that no thought or upstream error body enters logs.

## Investigated alternative

A separate local WebLLM 0.2.85 / Qwen3.5-0.8B probe downloaded public weights and started real inference, but failed on the software WebGPU adapter with GPUBuffer mapAsync / device loss. It is not shipped as a reliable phone solution.

Sources checked 2026-10-08:
- https://console.groq.com/docs/billing-faqs
- https://console.groq.com/docs/your-data
- https://console.groq.com/docs/structured-outputs
- https://console.groq.com/docs/rate-limits
