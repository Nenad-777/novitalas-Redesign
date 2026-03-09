/*
 * DESIGN: "Diplomatska Klasika" — Naša planeta (listing)
 * Purpose: show science/ecology/culture articles
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  alma: "/alma-mlecni-put.jpg",
  snovi: "/snovi-usmeravanje-snova.jpg",
};

export default function NasaPlanetaIndex() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
          <div className="mb-12">
            <span className="kicker">Naša planeta</span>
            <h1
              className="mt-3 text-[30px] md:text-[42px] font-bold leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Naša planeta
            </h1>
            <p
              className="mt-4 text-[17px] md:text-[19px] leading-[1.65] max-w-[680px]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              Otkrivamo naučna dostignuća, prirodne fenomene i ideje koje oblikuju budućnost naše planete.
            </p>
          </div>

          {/* HERO ARTICLE */}
          <article className="mb-14">
            <Link
              href="/nasa-planeta/naucnici-poceli-da-usmeravaju-snove"
              className="no-underline block group"
            >
              {/* Full-width hero image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={IMAGES.snovi}
                  alt="Naučnici usmeravaju snove"
                  className="w-full h-[300px] md:h-[480px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="max-w-[760px]">
                {/* Feature label */}
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
                  Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije
                </h2>

                <p
                  className="mt-4 text-[17px] md:text-[19px] leading-[1.65]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći
                  mozak da tokom sna kreativnije rešava probleme.
                </p>

                <div
                  className="mt-5 text-[12px] font-semibold uppercase tracking-[0.08em]"
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

          <hr className="editorial-divider mb-12" />

          {/* ARTICLE GRID (3 cols desktop / 1 col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

            {/* ALMA */}
            <article>
              <Link href="/nasa-planeta/alma-skriveno-jezgro" className="no-underline block group">
                <div
                  className="mb-4 overflow-hidden"
                  style={{
                    backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                  }}
                >
                  <img
                    src={IMAGES.alma}
                    alt="ALMA — srce Mlečnog puta"
                    className="w-full h-[200px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h2
                  className="text-[20px] md:text-[22px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Najveća ALMA mapa ikad: otkriveno „skriveno jezgro" Mlečnog puta
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Mozaik od brojnih posmatranja prikazuje Centralnu molekularnu zonu —
                  najgušći i najturbulentniji pojas gasa i prašine u središtu naše galaksije.
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

          </div>

          {/* Back */}
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
