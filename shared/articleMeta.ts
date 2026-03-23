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
  /**
   * ISO 8601 publish date, e.g. "2026-03-18".
   * Used for JSON-LD datePublished and og:article:published_time.
   */
  datePublished?: string;
  /** Article author name. Defaults to "Novi Talas" if omitted. */
  author?: string;
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
    datePublished: meta.datePublished,
    author: meta.author,
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
}) {
  const authorName = meta.author ?? "Novi Talas";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    image: [meta.ogImage],
    author: [
      {
        "@type": authorName === "Novi Talas" ? "Organization" : "Person",
        name: authorName,
        url: SITE_BASE,
      },
    ],
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
    path: "/geopolitika/iran-trump-ormuski-moreuz",
    title:
      "Iran preti zatvaranjem Ormuskog moreuza kao odgovor na Trampov ultimatum",
    description:
      "Iran preti zatvaranjem Ormuskog moreuza kao odgovor na američki ultimatum, uz rizik globalne energetske krize.",
    imageSrc: "/news/trump-iran.jpg",
    datePublished: "2026-03-23",
  },
  {
    path: "/srbija/lokalni-izbori-analiza",
    title:
      "Analiza predstojećih izbora: da li je moguć početak promena?",
    description:
      "Analiza predstojećih lokalnih izbora u Srbiji: uslovi, kontrola procesa i nova energija na terenu.",
    imageSrc: "/news/lokalni-izbori.jpg",
    datePublished: "2026-03-21",
  },
  {
    path: "/nasa-planeta/psihologija-dosada",
    title:
      "Otkriće psihologije: zašto je najbolja stvar koju možete da uradite da ne radite ništa",
    description:
      "Savremena psihologija otkriva da vaš mozak najbolje radi kada ga ostavite na miru — i da je dosada možda najproduktivnija stvar koju ćete danas uraditi.",
    imageSrc: "/news/psihologija-dosada.jpg",
    datePublished: "2026-03-20",
  },
  {
    path: "/nasa-planeta/ai-superaplikacija",
    title:
      "OpenAI razvija „superaplikaciju“ koja objedinjuje ChatGPT, Codex i browser",
    description:
      "OpenAI razvija novu desktop superaplikaciju koja objedinjuje ChatGPT, Codex i browser u jedinstveni AI sistem.",
    imageSrc: "/news/ai-superapp.jpg",
    datePublished: "2026-03-20",
  },
  {
    path: "/geopolitika/ormuz-moreuz",
    title: "Evropske zemlje i Japan o bezbednosti Ormuskog moreuza",
    description:
      "Evropske zemlje i Japan objavili su zajedničko saopštenje o bezbednosti Ormuskog moreuza i zaštiti pomorskih ruta za snabdevanje energentima.",
    imageSrc: "/news/ormuz-kriza.jpg",
    datePublished: "2026-03-20",
  },
  {
    path: "/nasa-planeta/mars-reka",
    title:
      "Na Marsu otkriveni tragovi drevne reke: nova faza u potrazi za životom",
    description:
      "NASA rover pronašao dokaze o drevnoj reci na Marsu i mogućim uslovima za život.",
    imageSrc: "/news/mars-reka.jpg",
    datePublished: "2026-03-19",
  },
  {
    path: "/geopolitika/energetski-rat",
    title:
      "Bliski istok ulazi u energetski rat: posle napada u Zalivu nafta skače, tržišta u panici",
    description:
      "Napadi na energetsku infrastrukturu u Zalivu podižu cenu nafte i šire krizu na Evropu.",
    imageSrc: "/news/nafta-kriza.jpg",
    datePublished: "2026-03-19",
  },
  {
    path: "/geopolitika/tanker-bez-pogona",
    title:
      "EVROPA U TRCI SA VREMENOM: tanker bez pogona preti ekološkom katastrofom",
    description:
      "Tanker bez pogona koji prevozi naftu nekontrolisano pluta u evropskim vodama, dok evropski lideri upozoravaju na rizik ekološke katastrofe i traže hitnu koordinisanu reakciju.",
    imageSrc: "/news/tanker.jpg",
    datePublished: "2026-03-18",
  },
  {
    path: "/geopolitika/zapadne-sile-upozorile-izrael",
    title:
      "Zapadne sile upozorile Izrael - ne pokretati kopnenu ofanzivu u Libanu",
    description:
      "Zapadne zemlje upozoravaju Izrael da ne pokreće kopnenu operaciju u Libanu, uz rastući rizik regionalne eskalacije.",
    imageSrc: "/news/west-against-israel.jpg",
    datePublished: "2026-03-18",
  },
  {
    path: "/srbija/akademija-novisad",
    title:
      "Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora",
    description:
      "Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice.",
    imageSrc: "/news/akademija-novisad.jpg",
    datePublished: "2026-03-18",
  },
  {
    path: "/geopolitika/svetska-kriza-sve-ozbiljnija",
    title: "SVETSKA KRIZA SVE OZBILJNIJA",
    description:
      "Kriza oko Ormuskog moreuza produbljuje se dok rat između SAD, Izraela i Irana ulazi u treću nedelju. Cena nafte prešla 100 dolara po barelu.",
    imageSrc: "/news/brodovi-kriza.jpg",
    datePublished: "2026-03-16",
  },
];
