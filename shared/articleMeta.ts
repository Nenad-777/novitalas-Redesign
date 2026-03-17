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
  /** Short description used for meta description and og:description */
  description: string;
  /**
   * Relative image path, e.g. "/news/brodovi-kriza.jpg".
   * Gets prefixed with SITE_BASE to produce the absolute OG image URL.
   */
  imageSrc: string;
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
  const fullTitle = `${meta.title}${BRAND_SUFFIX}`;
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
  };
}

/**
 * Registry of article metadata for pages that use ArticleTemplate.
 *
 * ADD NEW ARTICLES HERE — the generate script and the server will automatically
 * produce the correct static HTML / HTTP response with full OG + Twitter tags.
 */
export const articleMeta: ArticleStaticMeta[] = [
  {
    path: "/srbija/akademija-novisad",
    title: "Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora",
    description:
      "Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice.",
    imageSrc: "/news/akademija-novisad.jpg",
  },
  {
    path: "/geopolitika/svetska-kriza-sve-ozbiljnija",
    title: "SVETSKA KRIZA SVE OZBILJNIJA",
    description:
      "Kriza oko Ormuskog moreuza produbljuje se dok rat između SAD, Izraela i Irana ulazi u treću nedelju. Cena nafte prešla 100 dolara po barelu.",
    imageSrc: "/news/brodovi-kriza.jpg",
  },
];
