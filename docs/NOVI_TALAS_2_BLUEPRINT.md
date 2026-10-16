# NOVI TALAS 2.0 — Design & Product Blueprint

Status: **experimental prototype only**. Branch: \`feature/novi-talas-2-preview\`. 
Production \`main\` must remain untouched until the editor approves each milestone.

## Thesis
Move from an article listing to a trustworthy editorial **understanding platform**: discover → understand → connect → revisit. Make it inviting, never addictive by exploiting outrage or fear.

## Visual direction
- Continue recognizable NOVI (navy) / TALAS (burgundy) editorial identity.
- White/off-white paper, fine rules, serif headlines, quiet interface text, high-quality licensed media.
- Responsive from 320px mobile to desktop. Respect reduced-motion.
- No stocky card jungle, autoplay, misleading urgency, invasive personalization or dark patterns.

## Current working preview (P1)
Route: \`/novi-talas-lab\` **on preview branch only**:
- Connected to published article inventory.
- New mobile-first masthead, top feature, editorial radar, section filters.
- Full searchable article registry via \`searchArticles\` (Serbian Latin and Cyrillic).
- Three reading modes: summary, existing same-section context, related article paths.
- Local bookmark reading room; no login and no external collection.
- Existing URLs still point to published articles.

Important: current same-section "connections" are **not** evidence of causality. Future knowledge graphs need authored relationships with primary-source provenance.

## Next milestones
### P2 — Category and article experience
- Modular section templates: Geopolitika, Obaveštajni izvori, Srbija, Naša planeta.
- Each article: short brief / complete story / verifiable sources, optional authored timelines; strictly separated fact, analysis, hypothesis.
- Reading progress, typography scale, accessibility, real "Kopiraj link" and share paths.
- Related topics curated with source evidence and full transparency.
- Structured data, canonical links, OG/Twitter, sitemap, archival integrity.

### P3 — Atlas and return loop
- Verified topic hubs with explicit actors/events/timelines and linked sources.
- Follow a topic; see what **materially changed since your last visit**, not clickbait.
- Optional personalized daily digest with user agency; source-grounded AI assistance only after audit.
- Optional short-form audiovisual explainers when original media and rights are available.

### Editorial publishing invariants
- Command **OBJAVA** keeps the approval gate for headline, text and image.
- Home: 1 lead + 8 secondary stories. New lead replaces old lead; previous lead becomes first secondary; oldest secondary leaves home **only**, not category, article or archive.
- Never delete older articles or silently alter canonical routes.
- Do not lose or downsample approved originals. Validate format, dimensions, actual resolution, stable public path, and no broken image/OG paths.
- One-click copy, sharing (including mobile Viber/WhatsApp), correct metadata, accessible captions, and reliable internal search.
- No generic AI phrasing or em-dash habits that violate editorial preferences.
- Each deployment must pass build, mobile checks, URL/image checks, archive/search regressions, robots and SEO checks, and production post-deploy validation.

## Operational safeguards
- Independent branch + private/protected Vercel preview; **never auto-merge to main**.
- Before merge: git snapshot/tag or backup, editor approval, rollback path, screenshot QA and 404 audits.
- Preserve all published assets, source credits, SEO, share images and archives.
- Stage gradual migration; no big-bang copy or destructive schema rewrite.

## Acceptance criteria for final launch
1. All production article URLs and core index routes preserved (or deliberate tested 301).
2. No loss in search index, category membership or article publication workflow.
3. Visual mobile QA at 320/375/390/430px plus 768/1280/1440 desktop.
4. LCP, CLS, accessibility and response quality verified against agreed budgets.
5. Thumbnail and HERO image quality checked at actual rendered sizes.
6. Backups verified and production rollback tested.
7. Explicit editor approval before promotion.
