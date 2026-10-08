# SOFIA BEYOND — Experiment 0002 / THE OBSERVER

Status: **IMPLEMENTED BUT NOT YET LIVE-VERIFIED WITH REAL AI INFERENCE**

Branch: `experiment/sofia-beyond-0002`

Hidden route: `/sofia/experiment-0002/`

API: `/api/sofia-beyond`

Experiment 0001 remains intact.

## Hypothesis

Experiment 0002 does not test whether AI can persuade a participant or correctly infer a hidden personality trait.

It tests a narrower claim:

> Can one small, reversible transformation of a participant's own reasoning model increase the structural resolution with which they can observe that thought?

The operational target is an **Observer Shift**:

- before: the participant is primarily inside the thought;
- after: the participant can also inspect how reported evidence, inference, assumption and uncertainty are related.

A changed belief is not required. A changed viewpoint may be the more interesting outcome.

## Scientific rationale

The design is intentionally conservative about consciousness science.

Relevant foundations include:

- Stephen M. Fleming, "Metacognition and Confidence: A Review and Synthesis", Annual Review of Psychology 75 (2024), 241–268.
- Rose et al., "Overcoming resistance to belief revision and correction of misinformation beliefs: psychophysiological and behavioral effects of a counterfactual mindset", Scientific Reports 14, 12493 (2024).
- Battich, Pacherie & Grèzes, "Social perspective-taking influences on metacognition", Cognition 254, 105966 (2025).
- Cogitate Consortium, "Adversarial testing of global neuronal workspace and integrated information theories of consciousness", Nature 642, 133–142 (2025).
- Bailey et al., "Causal inference on human behaviour", Nature Human Behaviour 8 (2024), 1448–1459.

The 2025 adversarial consciousness study challenged important predictions of both IIT and GNWT. Experiment 0002 therefore does not treat any consciousness theory as settled and makes no quantum-consciousness or mystical claims.

## Cognitive architecture

The server separates:

1. **Structure extraction** — 2–7 semantic nodes.
2. **Epistemic inventory** — stated, inferred, assumed, unknown.
3. **Candidate transformations** — up to four.
4. **Leverage ranking** — grounding, leverage, specificity, reversibility, speculation penalty.
5. **Human validation** — accept, reject, correct.
6. **Observer Shift** — transform the same field, not a replacement answer.
7. **Second-order analysis** — optional and allowed to return nothing.
8. **Final compression** — user evaluates whether belief, viewpoint, both or neither changed.

Available Observer Shift operators:

- uncertainty
- counterfactual
- causal direction
- alternative model
- timescale
- observer position
- identity/evidence separation

The AI selects only one candidate for the pilot.

## Epistemic invariants

- Participant reports are not verified world facts.
- A report or reported piece of evidence must be grounded in an exact participant quote.
- Reported/evidence nodes cannot be rewritten during a shift.
- A removed or weakened dependency is not declared false.
- A replacement is provisional participant data, not truth.
- Emotional and identity stakes remain unknown unless explicitly supported.
- The model must stop rather than manufacture depth.
- Second-order observations require an exact anchor in the original thought.

## Interface

The thought is rendered as a **semantic field**, not chat, cards, a mind map or a flow chart.

Node weight, distance, stability and dependency are visual properties.

The BEFORE / AFTER comparison reuses the same semantic nodes:

- stable elements stay stable;
- conditional elements move outward;
- weakened elements lose prominence;
- open elements become more distant;
- reframed elements change position;
- links can stay, weaken, disappear or be reinterpreted.

The geometry is the explanation.

No sound is included in this build. This is deliberate: sound remains optional until the cognitive interaction is proven useful and physical iPhone behavior is verified.

## Privacy and deployment

- Preview-only API: production requests return 404 before participant data is read.
- Vercel Preview SSO protection is enabled at the project level.
- noindex / noarchive / nofollow / nosnippet.
- no localStorage.
- no participant-content analytics.
- no session recording.
- no database persistence of raw thoughts.
- no deliberate logging of prompts, model personal text or upstream error bodies.
- pagehide clears in-memory state.
- refresh destroys the active experiment state.

The participant text is sent to an AI provider only after provider readiness has been confirmed.

## Provider

Existing provider adapter: Groq server-side inference.

Model currently configured in code: `openai/gpt-oss-120b`.

As checked on 2026-10-08:

- the model is currently supported by Groq;
- Groq documents Free-plan rate limits for it;
- Groq documents Zero Data Retention as available through Data Controls;
- Groq states that model inputs/outputs are not used for training unless permission is explicitly granted.

The Vercel project currently contains **no environment variables**, so real inference is intentionally disabled.

Required owner actions before live verification:

1. Sign in/create a Groq account on the Free plan.
2. Enable Zero Data Retention in Groq Data Controls.
3. Create a Groq API key.
4. Add the key in Vercel as encrypted/sensitive `GROQ_API_KEY`, Preview-only, restricted to branch `experiment/sofia-beyond-0002`.
5. After personally confirming Free tier and ZDR, add branch-scoped Preview flags:
   - `SOFIA_GROQ_FREE_CONFIRMED=1`
   - `SOFIA_GROQ_ZDR_CONFIRMED=1`
6. Redeploy this branch only.

Never paste the API key into chat, client code, GitHub or a public variable.

## Verification gate

Do not call the experiment complete until all of these pass:

- real participant input
- real server request
- real Groq inference
- schema validation
- semantic field rendering
- rejection and correction
- replacement
- Observer Shift
- BEFORE / AFTER geometry
- second-order stop/insight behavior
- final local evaluation
- session deletion
- provider error behavior
- response privacy headers
- physical iPhone Safari test

Physical iPhone verification must specifically cover:

- keyboard opening and viewport resizing
- safe areas
- touch targets
- orientation
- semantic-field legibility
- transition performance
- network interruption
- slow inference and cancellation
- pagehide / back-forward cache
- reduced motion

Until then the correct status is:

**IMPLEMENTED BUT NOT YET LIVE-VERIFIED.**
