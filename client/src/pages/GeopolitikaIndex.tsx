/*
 * DESIGN: "Diplomatska Klasika" — Geopolitika index (listing)
 * Purpose: show articles (new + archive)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  ukraine: "/geopolitika-ukrajina.jpg",
  iran: "/tehran-riots.jpg", // <-- NOVA SLIKA
  europeMap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
};

export default function GeopolitikaIndex() {
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
          {/* Title */}
          <div className="mb-10">
            <span className="kicker">Geopolitika</span>
            <h1
              className="mt-3 text-[30px] md:text-[40px] font-bold leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Geopolitičke analize
            </h1>
            <p
              className="mt-3 text-[16px] md:text-[18px] leading-[1.6] max-w-[760px]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              Najnovije i arhiva
            </p>
          </div>

          {/* LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 1) NOVA VEST (Ukrajina) */}
            <article>
              <Link
                href="/geopolitika/ukrajina-cetiri-godine-rata"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ukraine}
                    alt="Geopolitika — Ukrajina"
                    className="w-full h-[220px] object-cover object-center block"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Četiri godine rata: šta sada određuje cenu mira
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Dve perspektive, jedan horizont: rat traje, ali se menja logika
                  odluka — i pragovi rizika.
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

            {/* 2) NOVA VEST (Iran — protesti) */}
            <article>
              <Link href="/geopolitika/iran-protesti-2026" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.iran}
                    alt="Geopolitika — Iran protesti"
                    className="w-full h-[220px] object-cover object-center block"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Sukobi na kampusima i pojačana represija: relevantni izveštaji govore o stotinama ubijenih
                  u prethodnim talasima protesta.
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

            {/* 3) STARA VEST (Evropa) */}
            <article>
              <Link
                href="/geopolitika/nova-bezbednosna-arhitektura"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.europeMap}
                    alt="Nova bezbednosna arhitektura Evrope"
                    className="w-full h-[220px] object-cover object-center block"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Rat u Ukrajini, energija i strateška autonomija — Evropa menja
                  bezbednosni identitet.
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
