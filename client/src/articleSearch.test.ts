import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { HOME_ARTICLE_CANDIDATES } from "./pages/homeArticles";

import {
  articleSearchIndex,
  normalizeSearchText,
  searchArticles,
} from "../../shared/articleSearch";

describe("article search", () => {
  it("builds one archive from both SEO metadata registries", () => {
    expect(articleSearchIndex.length).toBeGreaterThan(100);
    expect(new Set(articleSearchIndex.map(article => article.href)).size).toBe(
      articleSearchIndex.length
    );
    expect([...new Set(articleSearchIndex.map(article => article.category))]).toEqual(
      expect.arrayContaining([
        "Geopolitika",
        "Srbija",
        "Svet",
        "Obaveštajni izvori",
        "Naša planeta",
      ])
    );
  });

  it("is case-insensitive and tolerant of Serbian diacritics", () => {
    expect(normalizeSearchText("VUČIĆ")).toBe(normalizeSearchText("Vucic"));
    expect(
      searchArticles("Vucic").some(article => article.title.includes("Vučić"))
    ).toBe(true);
    expect(
      searchArticles("obavestajni").every(
        article => article.category === "Obaveštajni izvori"
      )
    ).toBe(true);
  });

  it.each(["iran", "srbija", "rusija"])(
    "finds archive results for %s",
    query => {
      expect(searchArticles(query).length).toBeGreaterThan(0);
    }
  );

  it.each(["Retklif", "Moskva", "CIA", "Narisnikin", "Nariškin", "NATO"])(
    "finds the Retklif Moscow article for %s",
    query => {
      expect(searchArticles(query).map(article => article.href)).toContain(
        "/obavestajni-izvori/retklifova-misija-u-moskvi-dobija-nove-obrise"
      );
    }
  );

  it.each(["Bela kuća", "Bela kuca", "Бела кућа", "БЕЛА КУЋА", "Starshield"])(
    "finds the White House / Starshield story for %s",
    query => {
      expect(searchArticles(query).map(article => article.href)).toContain(
        "/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina"
      );
    }
  );

  it("keeps every homepage archive candidate searchable", () => {
    expect(HOME_ARTICLE_CANDIDATES.length).toBeGreaterThan(8);
    for (const article of HOME_ARTICLE_CANDIDATES) {
      expect(articleSearchIndex.some(indexed => indexed.href === article.href)).toBe(true);
    }
  });

  it("keeps the homepage lead article in the search index", () => {
    const homeSource = readFileSync(new URL("./pages/Home.tsx", import.meta.url), "utf8");
    const lead = homeSource.match(/const HERO_ARTICLE\s*=\s*\{\s*href:\s*"([^"]+)"/)?.[1];
    expect(lead).toBeDefined();
    expect(articleSearchIndex.some(article => article.href === lead)).toBe(true);
  });

  it("returns an empty list for an empty query", () => {
    expect(searchArticles("  ")).toEqual([]);
  });
});
