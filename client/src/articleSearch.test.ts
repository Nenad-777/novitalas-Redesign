import { describe, expect, it } from "vitest";

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
    expect(
      new Set(articleSearchIndex.map(article => article.category))
    ).toEqual(
      new Set(["Geopolitika", "Srbija", "Obaveštajni izvori", "Naša planeta"])
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

  it("returns an empty list for an empty query", () => {
    expect(searchArticles("  ")).toEqual([]);
  });
});
