/**
 * articleMeta.ts
 *
 * Lightweight article metadata registry for articles that use ArticleTemplate.
 * Each entry requires only 4 fields; all OG / Twitter meta tags are auto-derived.
 *
 * When to use this file vs shared/seo.ts:
 *   - NEW articles using ArticleTemplate  → add a minimal entry here.
 *   - Existing articles / custom layouts  → seo.ts entries take priority and
 *     continue to work exactly as before.
 *
 * The full SEO data object is built automatically by buildSEOFromArticleMeta(),
 * which is used by:
 *   1. The SeoMeta client-side component  (for meta tag injection in the browser)
 *   2. scripts/generate-seo-pages.ts      (for static pre-rendered HTML)
 *   3. server/index.ts                    (for server-side injection on every request)
 */

const SITE_BASE = "https://novitalas.org";
const BRAND_SUFFIX = " — Novi Talas";

export interface ArticleStaticMeta {
  path: string;
  title: string;
  seoTitle?: string;
  description: string;
  imageSrc: string;
  datePublished?: string;
  author?: string;
  section?: string;
  keywords?: string;
}

export function buildOgImageUrl(imageSrc: string): string {
  if (imageSrc.startsWith("http")) return imageSrc;
  return `${SITE_BASE}${imageSrc}`;
}

export function buildSEOFromArticleMeta(meta: ArticleStaticMeta) {
  const ogImage = buildOgImageUrl(meta.imageSrc);
  const ogUrl = `${SITE_BASE}${meta.path}`;
  const fullTitle = meta.seoTitle ?? `${meta.title}${BRAND_SUFFIX}`;
  return {
    title: fullTitle,
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    ogUrl,
    ogImage,
    twitterTitle: meta.title,
    twitterDescription: meta.description,
    twitterImage: ogImage,
    datePublished: meta.datePublished,
    author: meta.author,
    section: meta.section,
    keywords: meta.keywords,
  };
}

export const generateSEO = buildSEOFromArticleMeta;

export function buildJsonLd(meta: {
  title: string;
  description: string;
  ogUrl: string;
  ogImage: string;
  datePublished?: string;
  author?: string;
  section?: string;
}) {
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    image: [meta.ogImage],
    publisher: {
      "@type": "Organization",
      name: "Novi Talas",
      url: SITE_BASE,
      logo: { "@type": "ImageObject", url: `${SITE_BASE}/logo.svg` },
    },
    url: meta.ogUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": meta.ogUrl },
  };

  if (meta.author) {
    jsonLd["author"] = [{
      "@type": meta.author === "Novi Talas" ? "Organization" : "Person",
      name: meta.author,
      url: SITE_BASE,
    }];
  }
  if (meta.section) jsonLd["articleSection"] = meta.section;
  if (meta.datePublished) jsonLd["datePublished"] = `${meta.datePublished}T00:00:00+01:00`;
  return jsonLd;
}

export const articleMeta: ArticleStaticMeta[] = [
  {
    path: "/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao",
    title: "Tarantino je napisao novi film. Finčer ga je režirao",
    seoTitle: "Tarantino je napisao novi film. Finčer ga je režirao | Novi Talas",
    description: "Brad Pitt se vraća kao Cliff Booth. Quentin Tarantino potpisuje scenario, David Fincher režiju, a Netflix je objavio prvi puni trejler.",
    imageSrc: "https://img.youtube.com/vi/RjEZaUBbUvU/maxresdefault.jpg",
    datePublished: "2026-09-25",
    author: "Novi Talas",
    section: "Kultura",
    keywords: "Quentin Tarantino, David Fincher, Brad Pitt, Cliff Booth, Netflix, film, trailer, Holivud",
  },
  {
    path: "/geopolitika/pred-razgovore-trampa-i-sija-amerika-ostaje-zavisna-od-kineskih-kriticnih-minerala",
    title: "Pred razgovore Trampa i Sija: Amerika ostaje zavisna od kineskih kritičnih minerala",
    seoTitle: "Pred razgovore Trampa i Sija: Amerika ostaje zavisna od kineskih kritičnih minerala | Novi Talas",
    description: "Kina kontroliše ključne delove lanca retkih zemalja potrebnih američkoj industriji, tehnologiji i odbrani. Pred razgovore Trampa i Sija, američka zavisnost ostaje strateški problem.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/President_Donald_Trump_participates_in_a_bilateral_meeting_with_Chinese_President_Xi_Jinping_at_the_Gimhae_International_Airport_terminal_%2854889568887%29.jpg",
    datePublished: "2026-09-24",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords: "Donald Tramp, Si Đinping, Kina, SAD, kritični minerali, retke zemlje, itrijum, trgovina, tehnologija",
  },
  {
    path: "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru",
    title: "AfD menja političku mapu Nemačke, a ruski gas se vraća u igru",
    seoTitle: "AfD menja političku mapu Nemačke, a ruski gas se vraća u igru | Novi Talas",
    description: "AfD je sa 38,2 odsto pobedio u Meklenburgu-Zapadnoj Pomeraniji, dok se ruski gas i Nord Stream vraćaju u nemačku političku raspravu.",
    imageSrc: "/news/afd-weidel.jpg",
    datePublished: "2026-09-21",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords: "AfD, Nemačka, Alice Weidel, Mecklenburg-Vorpommern, CDU, Friedrich Merz, Rusija, ruski gas, Nord Stream, Kirill Dmitriev",
  },
  {
    path: "/nasa-planeta/tacka-bez-povratka-ai",
    title: "Tačka bez povratka",
    seoTitle: "Tačka bez povratka: ko će kontrolisati veštačku inteligenciju? | Novi Talas",
    description: "Kralj Čarls upozorava na egzistencijalne rizike, dok sumnje u tempo razvoja i mogućnost kontrole AI-ja sve češće dolaze iz samih vodećih laboratorija.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Prince_Charles_%288398765111%29.jpg",
    datePublished: "2026-09-20",
    author: "Novi Talas",
    section: "Naša planeta",
    keywords: "veštačka inteligencija, AI, kralj Čarls, OpenAI, Anthropic, AI bezbednost, kontrola AI, egzistencijalni rizik",
  },
];
