# Homepage Visual Hierarchy Map

> Source: `client/src/pages/Home.tsx`  
> Design: "Diplomatska Klasika" v3 — Foreign Affairs-inspired homepage

---

```
┌─────────────────────────────────────────────────────────┐
│  <div> · min-h-screen flex-col · bg: #111318 / #ffffff  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  <Header />                                       │  │
│  │  (site-wide navigation bar)                       │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  <section> · HERO BANNER                          │  │
│  │  h: 22 vh (mobile) / 28 vh (desktop)              │  │
│  │  bg-image: /hero/naslovna-novitalas.jpg            │  │
│  │                                                   │  │
│  │   [dark overlay: rgba(13,17,23,0.35) — dark only] │  │
│  │                                                   │  │
│  │   <h1 class="sr-only">Novi Talas</h1>             │  │
│  │   <p  class="sr-only">Site description…</p>       │  │
│  │                                                   │  │
│  │   ┌─────────────────────────────────────────────┐ │  │
│  │   │  bottom-center tagline                      │ │  │
│  │   │  "Vaš prozor u svet"                        │ │  │
│  │   │  Playfair Display · 18 px / 26 px · italic  │ │  │
│  │   └─────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  <main> · max-w-[1200px] · flex-1                 │  │
│  │                                                   │  │
│  │  ╔═══════════════════════════════════════════╗    │  │
│  │  ║  SECTION 1 · HERO ARTICLE  (FadeIn)       ║    │  │
│  │  ║                                           ║    │  │
│  │  ║  <article>                                ║    │  │
│  │  ║   ├─ kicker: "Geopolitika"                ║    │  │
│  │  ║   ├─ <h2> Talibani otvorili vatru na      ║    │  │
│  │  ║   │        protest za prava žena          ║    │  │
│  │  ║   │   Playfair Display · 32–46 px bold    ║    │  │
│  │  ║   ├─ description paragraph                ║    │  │
│  │  ║   │   Lora · 18–20 px                     ║    │  │
│  │  ║   └─ hero image (aspect-video, rounded)   ║    │  │
│  │  ║         /news/afganistan-woman.jpg         ║    │  │
│  │  ║         photo credit below image          ║    │  │
│  │  ╚═══════════════════════════════════════════╝    │  │
│  │                                                   │  │
│  │  ─────── <hr> editorial-divider ──────────────    │  │
│  │                                                   │  │
│  │  ╔═══════════════════════════════════════════╗    │  │
│  │  ║  SECTION 2 · SMALL NEWS GRID  (FadeIn)   ║    │  │
│  │  ║  5 × SmallArticleCard                    ║    │  │
│  │  ║  each card layout:                       ║    │  │
│  │  ║   grid-cols-[1fr_100px]                  ║    │  │
│  │  ║   ├─ LEFT COLUMN                         ║    │  │
│  │  ║   │   ├─ kicker (category)               ║    │  │
│  │  ║   │   ├─ <h3> headline (Lora 18–20 px)   ║    │  │
│  │  ║   │   └─ description (Lora 14 px)        ║    │  │
│  │  ║   └─ RIGHT COLUMN                        ║    │  │
│  │  ║       └─ thumbnail 100 × 75 px           ║    │  │
│  │  ║                                          ║    │  │
│  │  ║  Card 1 ─ "KRIZA SAD–IRAN"               ║    │  │
│  │  ║           category: Geopolitika          ║    │  │
│  │  ║  ─── <hr> editorial-divider ───          ║    │  │
│  │  ║  Card 2 ─ "NASA Artemis III"             ║    │  │
│  │  ║           category: Naša planeta         ║    │  │
│  │  ║  ─── <hr> editorial-divider ───          ║    │  │
│  │  ║  Card 3 ─ "Nasledne bolesti?"            ║    │  │
│  │  ║           category: Naša planeta         ║    │  │
│  │  ║  ─── <hr> editorial-divider ───          ║    │  │
│  │  ║  Card 4 ─ "Slom Vučićeve reputacije"     ║    │  │
│  │  ║           category: Srbija               ║    │  │
│  │  ║  ─── <hr> editorial-divider ───          ║    │  │
│  │  ║  Card 5 ─ "Moskva upozorava Putina"      ║    │  │
│  │  ║           category: Geopolitika          ║    │  │
│  │  ╚═══════════════════════════════════════════╝    │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  <Footer />                                       │  │
│  │  (site-wide footer)                               │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Layer-by-layer breakdown

### 1. `<Header />`
External component — renders the site-wide navigation at the very top.

### 2. Hero Banner `<section>`
| Property | Value |
|---|---|
| Height | 22 vh (mobile) / 28 vh (desktop) |
| Background | `/hero/naslovna-novitalas.jpg` + CSS gradient fallback |
| Dark overlay | `rgba(13,17,23,0.35)` absolute fill (dark mode only) |
| SEO hidden content | `<h1>Novi Talas</h1>` + description paragraph (both `sr-only`) |
| Visible content | Tagline **"Vaš prozor u svet"** — bottom-centred, Playfair Display, italic |

### 3. Main content `<main>` (max-width 1200 px)

#### 3a. Hero Article *(FadeIn scroll animation)*
| Element | Detail |
|---|---|
| Category kicker | "Geopolitika" |
| `<h2>` headline | "Talibani otvorili vatru na protest za prava žena" — Playfair Display, 32 px → 46 px, bold |
| Description | Lora serif, 18 px → 20 px |
| Hero image | `/news/afganistan-woman.jpg`, full-width, `aspect-video`, `rounded-xl` |
| Photo credit | Text line below the image |

*`<hr>` editorial divider separates sections 3a and 3b.*

#### 3b. Small News Grid *(FadeIn scroll animation)*
Five stacked `SmallArticleCard` components, each divided by an `<hr>` editorial divider:

| # | Category | Headline |
|---|---|---|
| 1 | Geopolitika | KRIZA SAD–IRAN |
| 2 | Naša planeta | NASA predstavila posadu misije Artemis III |
| 3 | Naša planeta | Prvi korak ka svetu bez naslednih bolesti? |
| 4 | Srbija | Potpuni slom Vučićeve međunarodne reputacije |
| 5 | Geopolitika | Moskva upozorava Putina: ratna potrošnja postaje neodrživa |

Each card is a two-column grid: **text block (1fr)** on the left and a **100 × 75 px thumbnail** on the right.

### 4. `<Footer />`
External component — renders the site-wide footer at the very bottom.
