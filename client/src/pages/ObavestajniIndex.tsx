/*
 * DESIGN: "Diplomatska Klasika" — Obaveštajni izvori index (listing)
 * Purpose: show articles from the intelligence sources section
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const ARTICLES = [
  {
    href: "/obavestajni-izvori/kina-spy-brodovi",
    img: "/images/obavestajni-izvori/kina-spy-ship.jpg",
    alt: "Kineski špijunski brod — nadzor u Persijskom zalivu",
    title:
      "Kina prati američke snage na Bliskom istoku uz pomoć AI i špijunskih brodova",
    description:
      "Nova analiza zapadnih bezbednosnih službi ukazuje da Kina sve intenzivnije prati kretanje američkih vojnih snaga u regionu Bliskog istoka.",
    date: "9. mart 2026.",
  },
  {
    href: "/obavestajni-izvori/rat-senki",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/acjhxldMBPFDSKKa.png",
    alt: "Obaveštajni izveštaj — digitalni ekrani",
    title:
      "Rat senki: povratak obaveštajnih službi u središte geopolitike",
    description:
      "U savremenim međunarodnim odnosima rat se retko objavljuje, ali se gotovo stalno vodi. Ključne borbe odvijaju se izvan frontova.",
    date: "Februar 2026.",
  },
];

export default function ObavestajniIndex() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [hero, ...gridArticles] = ARTICLES;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <section className="max-w-[1000px] mx-auto px-5">
          {/* Section header */}
          <div className="mb-10">
            <span className="kicker">Obaveštajni izvori</span>

            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              BEZBEDNOST   OBAVEŠTAJNE OPERACIJE   ANALITIKA
            </p>

          </div>

          {/* HERO ARTICLE — featured story */}
          <article className="mb-14">
            <Link href={hero.href} className="no-underline block group">
              <div className="overflow-hidden mb-3">
                <img
                  src={hero.img}
                  alt={hero.alt}
                  className="w-full h-[300px] md:h-[480px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="max-w-[760px]">
                <div
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Istaknuta priča
                </div>

                <h2
                  className="text-[26px] md:text-[40px] font-bold leading-[1.15]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  {hero.title}
                </h2>

                <p
                  className="mt-3 text-[16px] md:text-[18px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {hero.description}
                </p>

                <div
                  className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </div>
            </Link>
          </article>

          {/* Divider */}
          <hr
            className="mb-12"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          />

          {/* Grid of remaining articles */}
          {gridArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {gridArticles.map((article) => (
                <article key={article.href}>
                  <Link href={article.href} className="no-underline block group">
                    <div
                      className="border mb-4 overflow-hidden"
                      style={{
                        borderColor: isDark ? "#2a2a2e" : "#eee",
                        backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                      }}
                    >
                      <img
                        src={article.img}
                        alt={article.alt}
                        className="w-full h-[220px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <h3
                      className="text-[20px] md:text-[24px] font-bold leading-[1.2]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: isDark ? "#e0ddd5" : "#111",
                      }}
                    >
                      {article.title}
                    </h3>

                    <p
                      className="mt-2 text-[15px] leading-[1.6]"
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        color: isDark ? "#9a978f" : "#555",
                      }}
                    >
                      {article.description}
                    </p>

                    <div
                      className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: isDark ? "#d9bf7a" : "#8B0000",
                      }}
                    >
                      Otvori tekst →
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
