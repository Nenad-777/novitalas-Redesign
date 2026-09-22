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
  /** Route path, e.g. "/geopolitika/svetska-kriza-sve-ozbiljnija" */
  path: string;
  /** Article headline (without site name) */
  title: string;
  /** Exact document title, when the standard brand suffix should be overridden. */
  seoTitle?: string;
  /** Short description used for meta description and og:description */
  description: string;
  /**
   * Relative image path, e.g. "/news/brodovi-kriza.jpg".
   * Gets prefixed with SITE_BASE to produce the absolute OG image URL.
   */
  imageSrc: string;
  /**
   * ISO 8601 publish date, e.g. "2026-03-18".
   * Used for JSON-LD datePublished and og:article:published_time.
   */
  datePublished?: string;
  /** Article author name. Omitted from metadata when not provided. */
  author?: string;
  /** Editorial section used by Article JSON-LD. */
  section?: string;
  /** Comma-separated article keywords for search engines that use the tag. */
  keywords?: string;
}

/** Convert a relative image path to an absolute URL suitable for og:image. */
export function buildOgImageUrl(imageSrc: string): string {
  if (imageSrc.startsWith("http")) return imageSrc;
  return `${SITE_BASE}${imageSrc}`;
}

/** Derive a full SEOData-shaped object from a minimal ArticleStaticMeta entry. */
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

/**
 * Reusable SEO helper — alias for buildSEOFromArticleMeta.
 *
 * Given a minimal article descriptor it returns the full set of meta tag
 * values (title, description, og:*, twitter:*, canonical URL, JSON-LD) so
 * that every article page automatically gets complete SEO without any
 * per-article manual work.
 *
 * Usage (add entry to articleMeta array):
 *   generateSEO({
 *     path: "/sekcija/slug-clanka",
 *     title: "Naslov članka",
 *     description: "Kratki opis za meta description i og:description.",
 *     imageSrc: "/news/slika.jpg",
 *     datePublished: "2026-03-19",
 *   })
 */
export const generateSEO = buildSEOFromArticleMeta;

/**
 * Build a JSON-LD NewsArticle structured-data object for a given article.
 * Returns a plain object ready to be serialised with JSON.stringify().
 */
export function buildJsonLd(meta: {
  title: string;
  description: string;
  ogUrl: string;
  ogImage: string;
  datePublished?: string;
  author?: string;
  section?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_BASE}/logo.svg`,
      },
    },
    url: meta.ogUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.ogUrl,
    },
  };

  if (meta.author) {
    jsonLd["author"] = [
      {
        "@type": meta.author === "Novi Talas" ? "Organization" : "Person",
        name: meta.author,
        url: SITE_BASE,
      },
    ];
  }

  if (meta.section) {
    jsonLd["articleSection"] = meta.section;
  }

  if (meta.datePublished) {
    jsonLd["datePublished"] = `${meta.datePublished}T00:00:00+01:00`;
  }

  return jsonLd;
}

/**
 * Registry of article metadata for pages that use ArticleTemplate.
 *
 * ADD NEW ARTICLES HERE — the generate script and the server will automatically
 * produce the correct static HTML / HTTP response with full OG + Twitter tags.
 */
export const articleMeta: ArticleStaticMeta[] = [
  {
    path: "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru",
    title: "AfD menja političku mapu Nemačke — a ruski gas se vraća u igru",
    seoTitle: "AfD menja političku mapu Nemačke — a ruski gas se vraća u igru | Novi Talas",
    description:
      "AfD je sa 38,2 odsto pobedio u Meklenburgu-Zapadnoj Pomeraniji, dok se ruski gas i Nord Stream vraćaju u nemačku političku raspravu.",
    imageSrc: "/news/afd-weidel-final.webp",
    datePublished: "2026-09-21",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords:
      "AfD, Nemačka, Alice Weidel, Mecklenburg-Vorpommern, CDU, Friedrich Merz, Rusija, ruski gas, Nord Stream, Kirill Dmitriev",
  },
  {
    path: "/nasa-planeta/tacka-bez-povratka-ai",
    title: "Tačka bez povratka",
    seoTitle: "Tačka bez povratka: ko će kontrolisati veštačku inteligenciju? | Novi Talas",
    description:
      "Kralj Čarls upozorava na egzistencijalne rizike, dok sumnje u tempo razvoja i mogućnost kontrole AI-ja sve češće dolaze iz samih vodećih laboratorija.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Prince_Charles_%288398765111%29.jpg",
    datePublished: "2026-09-20",
    author: "Novi Talas",
    section: "Naša planeta",
    keywords:
      "veštačka inteligencija, AI, kralj Čarls, OpenAI, Anthropic, AI bezbednost, kontrola AI, egzistencijalni rizik",
  },
];
