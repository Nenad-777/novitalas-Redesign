import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { searchArticles } from "../../../shared/articleSearch";

export default function Pretraga() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const query =
    new URLSearchParams(window.location.search).get("q")?.trim() ?? "";
  const results = searchArticles(query);

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1 py-10 md:py-14">
        <section className="max-w-[900px] mx-auto px-5">
          <div
            className="border-b pb-5 mb-7"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          >
            <span className="kicker">Novi Talas</span>
            <h1
              className="mt-2 text-[32px] md:text-[42px] font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Pretraga
            </h1>
            {query && (
              <p
                className="mt-3 text-[15px] md:text-[16px]"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#bcb7a6" : "#555",
                }}
              >
                Rezultati za: “{query}”
              </p>
            )}
            {query && (
              <p
                className="mt-1 text-[13px]"
                style={{ color: isDark ? "#9a978f" : "#6b7280" }}
              >
                {results.length}{" "}
                {results.length === 1 ? "rezultat" : "rezultata"}
              </p>
            )}
          </div>

          {query && results.length > 0 && (
            <div className="flex flex-col">
              {results.map(article => (
                <article
                  key={article.href}
                  className="py-6 first:pt-0 border-b"
                  style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
                >
                  <Link
                    href={article.href}
                    className="grid grid-cols-[1fr_112px] md:grid-cols-[1fr_220px] gap-5 md:gap-8 items-start no-underline"
                  >
                    <div>
                      <span className="kicker">{article.category}</span>
                      <h2
                        className="mt-2 text-[21px] md:text-[27px] font-bold leading-[1.15]"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          color: isDark ? "#e0ddd5" : "#111",
                        }}
                      >
                        {article.title}
                      </h2>
                      <p
                        className="mt-2 text-[14px] md:text-[15px] leading-[1.55] line-clamp-3"
                        style={{
                          fontFamily: "'Lora', Georgia, serif",
                          color: isDark ? "#9a978f" : "#555",
                        }}
                      >
                        {article.description}
                      </p>
                    </div>

                    {article.imageSrc && (
                      <img
                        src={article.imageSrc}
                        alt={article.imageAlt ?? ""}
                        className="w-full h-[84px] md:h-[140px] object-cover rounded-md border"
                        style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <p
              className="py-8 text-[16px]"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: isDark ? "#bcb7a6" : "#555",
              }}
            >
              Nema rezultata za traženi pojam.
            </p>
          )}
          {!query && (
            <p
              className="py-8 text-[16px]"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: isDark ? "#bcb7a6" : "#555",
              }}
            >
              Unesite pojam za pretragu.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
