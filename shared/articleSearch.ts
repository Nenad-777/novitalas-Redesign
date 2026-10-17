import { HOME_ARTICLE_CANDIDATES } from "../client/src/pages/homeArticles";
import sourceRecovered from "./archiveExtracted.json";
import { articleMeta } from "./articleMeta";
import { seoData } from "./seo";

export interface SearchArticle {
  href: string;
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  publishedAt?: string;
  /** Month-only archive precision; do not invent an unknown publication day. */
  publishedMonth?: string;
  keywords?: string;
}

const CATEGORY_BY_SEGMENT: Record<string, string> = {
  geopolitika: "Geopolitika",
  srbija: "Srbija",
  "obavestajni-izvori": "Obaveštajni izvori",
  "nasa-planeta": "Naša planeta",
  kultura: "Kultura",
};

function categoryFromPath(path: string): string {
  return CATEGORY_BY_SEGMENT[path.split("/")[1]] ?? "Novi Talas";
}

/** The same two registries used by SEO pages and the sitemap are the search source. */
export const articleSearchIndex: SearchArticle[] = Array.from(
  new Map<string, SearchArticle>([
    // Machine-extracted records have lowest priority; curated registries override them.
    ...(sourceRecovered as SearchArticle[]).map((item): [string, SearchArticle] => [item.href, item]),
    ...HOME_ARTICLE_CANDIDATES.map((article): [string, SearchArticle] => [
      article.href,
      {
        href: article.href,
        category: categoryFromPath(article.href),
        title: article.title,
        description: article.description,
        imageSrc: article.imageSrc,
        imageAlt: article.imageAlt,
      },
    ]),
    ...articleMeta.map((article): [string, SearchArticle] => [
      article.path,
      {
        href: article.path,
        category: article.section ?? categoryFromPath(article.path),
        title: article.title,
        description: article.description,
        imageSrc: article.imageSrc,
        imageAlt: article.title,
        publishedAt: article.datePublished,
        keywords: article.keywords,
      },
    ]),
    ...Object.entries(seoData).map(
      ([href, article]): [string, SearchArticle] => [
        href,
        {
          href,
          category: categoryFromPath(href),
          title: article.ogTitle,
          description: article.description,
          imageSrc: article.ogImage,
          imageAlt: article.ogTitle,
          publishedAt: article.datePublished,
        },
      ]
    ),
  ]).values()
);

/** Serbian Cyrillic queries and Latin queries resolve to the same article text. */
const CYRILLIC_TO_LATIN: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", ђ: "dj",
  е: "e", ж: "z", з: "z", и: "i", ј: "j", к: "k",
  л: "l", љ: "lj", м: "m", н: "n", њ: "nj",
  о: "o", п: "p", р: "r", с: "s", т: "t",
  ћ: "c", у: "u", ф: "f", х: "h", ц: "c",
  ч: "c", џ: "dz", ш: "s",
};

export function normalizeSearchText(value: string): string {
  return value
    .toLocaleLowerCase("sr")
    .replace(/[абвгдђежзијклљмнњопрстћуфхцчџш]/g, letter => CYRILLIC_TO_LATIN[letter] ?? letter)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "dj")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function relevance(article: SearchArticle, query: string): number {
  const title = normalizeSearchText(article.title);
  const category = normalizeSearchText(article.category);
  const description = normalizeSearchText(article.description);
  const href = normalizeSearchText(article.href);
  const keywords = normalizeSearchText(article.keywords ?? "");

  if (title === query) return 600;
  if (title.startsWith(query)) return 500;
  if (title.includes(query)) return 400;
  if (category.includes(query)) return 300;
  if (description.includes(query)) return 200;
  if (keywords.includes(query)) return 150;
  if (href.includes(query)) return 100;
  return 0;
}

export function searchArticles(query: string): SearchArticle[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  return articleSearchIndex
    .map(article => ({ article, score: relevance(article, normalizedQuery) }))
    .filter(result => result.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        (b.article.publishedAt ?? "").localeCompare(
          a.article.publishedAt ?? ""
        ) ||
        a.article.title.localeCompare(b.article.title, "sr")
    )
    .map(result => result.article);
}
