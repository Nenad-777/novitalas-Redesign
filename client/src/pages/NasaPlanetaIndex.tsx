/*
 * DESIGN: "Naša planeta" — science magazine section listing
 * Purpose: show science/ecology/culture articles in magazine layout
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const ARTICLES = [
  {
    href: "/nasa-planeta/ai-vest-svest",
    img: "/ai-supercomputer-data-center.jpg",
    alt: "AI supercomputer data center",
    title: "Da li je veštačka inteligencija već svesna?",
    description:
      "Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti.",
  },
  {
    href: "/nasa-planeta/naucnici-poceli-da-usmeravaju-snove",
    img: "/snovi-usmeravanje-snova.jpg",
    alt: "Naučnici usmeravaju snove",
    title: "Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije",
    description:
      "Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći mozak da tokom sna kreativnije rešava probleme.",
  },
  {
    href: "/nasa-planeta/alma-skriveno-jezgro",
    img: "/alma-mlecni-put.jpg",
    alt: "ALMA — srce Mlečnog puta",
    title: 'Najveća ALMA mapa ikad: otkriveno „skriveno jezgro" Mlečnog puta',
    description:
      'Mozaik od brojnih posmatranja prikazuje Centralnu molekularnu zonu — najgušći i najturbulentniji pojas gasa i prašine u središtu naše galaksije.',
  },
  {
    href: "/nasa-planeta/kubrick",
    img: "/kubrick.jpg",
    alt: "Stenli Kjubrik — reditelj koji je promenio film",
    title: "Stenli Kjubrik i tajna filma koji ne stari",
    description:
      "Dok se svet ponovo okreće ceremoniji Oskara, jedan reditelj i dalje stoji izvan logike nagrada i podseća nas da film može biti umetnost mišljenja.",
  },
];

export default function NasaPlanetaIndex() {
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

          {/* Section header: kicker + Garamond subtitle + description */}
          <div className="mb-10">
            <span className="kicker">Naša planeta</span>

            {/* Garamond subtitle — section identity */}
            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              NAUKA   PRIRODA   KULTURA
            </p>

          </div>

          {/* HERO ARTICLE — featured story */}
          <article className="mb-14">
            <Link href={hero.href} className="no-underline block group">
              {/* Full-width hero image */}
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
                  className="mt-3 text-[17px] md:text-[19px] leading-[1.65]"
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
                  Čitaj dalje →
                </div>
              </div>
            </Link>
          </article>

          {/* EDITORIAL ARTICLE CARDS — image + title only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {gridArticles.map((article) => (
              <article key={article.href}>
                <Link href={article.href} className="no-underline block group">
                  <div className="overflow-hidden mb-3">
                    <img
                      src={article.img}
                      alt={article.alt}
                      className="w-full h-[240px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <h2
                    className="text-[20px] md:text-[22px] font-bold leading-[1.2]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: isDark ? "#e0ddd5" : "#111",
                    }}
                  >
                    {article.title}
                  </h2>
                </Link>
              </article>
            ))}
          </div>

          {/* NAJNOVIJE PRIČE — latest stories list */}
          <div className="mb-12">
            <hr
              style={{
                borderColor: isDark ? "#2a2c33" : "#ddd",
                borderTopWidth: "1px",
                marginBottom: "1.25rem",
              }}
            />
            <h3
              className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#9a978f" : "#888",
              }}
            >
              NAJNOVIJE PRIČE
            </h3>

            <ul className="space-y-5">
              {ARTICLES.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="no-underline flex items-start gap-4 group"
                  >
                    <div
                      className="flex-shrink-0 overflow-hidden"
                      style={{ width: 80, height: 60 }}
                    >
                      <img
                        src={article.img}
                        alt={article.alt}
                        className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <span
                      className="text-[16px] leading-[1.4] font-semibold"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: isDark ? "#e0ddd5" : "#111",
                      }}
                    >
                      {article.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back navigation */}
          <hr className="editorial-divider my-12" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            &larr; Nazad na naslovnu
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
