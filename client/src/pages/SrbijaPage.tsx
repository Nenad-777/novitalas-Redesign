/*
 * DESIGN: "Diplomatska Klasika" — Srbija INDEX page (2 analize)
 * Shows two articles (stara + nova) with images + datumi
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/qZixjPORsEGCuRBV.png",
  europeMap: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
  analizaNedeljeMars: "/analiza-nedelje-mars.jpg",
};

export default function SrbijaPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[320px] md:h-[400px] overflow-hidden"
        style={{ backgroundColor: isDark ? "#0d1117" : "#f0f4f7" }}
      >
        <img
          src={IMAGES.hero}
          alt="Srbija — Analiza nedelje"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: isDark ? 0.6 : 0.9 }}
        />
        {/* MASKA protiv belih slova dole */}
<div
  className="absolute bottom-0 left-0 right-0 h-[72px]"
  style={{
    background: isDark
      ? "linear-gradient(to top, rgba(17,19,24,1) 0%, rgba(17,19,24,0.9) 60%, rgba(17,19,24,0) 100%)"
      : "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%)",
  }}
/>
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(to top, rgba(17,19,24,0.9) 0%, rgba(17,19,24,0.3) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-[26px] md:text-[32px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "rgba(246,243,232,0.9)" : "#1a2a3a",
              textShadow: isDark ? "0 2px 8px rgba(0,0,0,0.5)" : "0 2px 8px rgba(255,255,255,0.5)",
            }}
          >
            Analiza nedelje
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 md:py-16 flex-1" style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">

            {/* LISTA ANALIZA */}
            <section>
              <span className="kicker">Srbija</span>
              <h1
                className="mt-2 mb-6 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isDark ? "#e0ddd5" : "#111",
                }}
              >
                Analiza nedelje
              </h1>

              {/* NOVA ANALIZA (gore) */}
              <article className="mb-10">
                <div
                  className="border"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.analizaNedeljeMars}
                    alt="Marš za pravosuđe — analiza nedelje"
                    className="w-full h-[260px] md:h-[360px] object-cover object-center block"
                  />
                </div>

                <div
                  className="mt-4 text-[13px]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#7a7872" : "#888",
                  }}
                >
                  <span className="font-semibold uppercase tracking-[0.05em]" style={{ color: isDark ? "#9a978f" : "#555" }}>
                    Srbija
                  </span>
                  <span>&nbsp;&bull;&nbsp;</span>
                  <span>Analiza nedelje</span>
                </div>

                <h2
                  className="mt-2 text-[26px] md:text-[32px] font-bold leading-[1.15]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  <Link href="/srbija/mars-za-pravosudje" className="headline-link">
                    Održan Marš za pravosuđe: granice izvršne vlasti i pitanje nezavisnosti institucija
                  </Link>
                </h2>

                <p
                  className="mt-2 text-[18px] md:text-[19px] leading-[1.65]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#c5c2ba" : "#222",
                  }}
                >
                  Protestna šetnja otvorila je staro pitanje: koliko je pravosuđe u stanju da odoli političkom pritisku — i gde se završava legitimna politika, a počinje institucionalno potkopavanje.
                </p>
              </article>

              {/* STARA ANALIZA */}
              <article>
                <div
                  className="border"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.hero}
                    alt="Podeljeno društvo — polarizacija"
                    className="w-full h-[260px] md:h-[360px] object-cover object-center block"
                    style={{ opacity: isDark ? 0.85 : 1 }}
                  />
                </div>

                <div
                  className="mt-4 text-[13px]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#7a7872" : "#888",
                  }}
                >
                  <span className="font-semibold uppercase tracking-[0.05em]" style={{ color: isDark ? "#9a978f" : "#555" }}>
                    Srbija
                  </span>
                  <span>&nbsp;&bull;&nbsp;</span>
                  <span>Analiza nedelje</span>
                </div>

                <h2
                  className="mt-2 text-[26px] md:text-[32px] font-bold leading-[1.15]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  <Link href="/srbija/podeljeno-drustvo" className="headline-link">
                    Podeljeno društvo: Srbija u ogledalu globalne polarizacije
                  </Link>
                </h2>

                <p
                  className="mt-2 text-[18px] md:text-[19px] leading-[1.65]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#c5c2ba" : "#222",
                  }}
                >
                  Polarizacija više nije izuzetak, već pravilo: od Vašingtona do Evrope, a zatim i u Srbiji — gde se politička borba sve češće pretvara u borbu za legitimitet sistema.
                </p>
              </article>

              {/* Back link */}
              <hr className="editorial-divider my-10" />
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

            {/* Sidebar */}
            <aside>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-bold tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Prateće vesti
                </span>
                <span className="flex-1 h-px" style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }} />
              </div>

              <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                <div>
                  <span className="kicker">Geopolitika</span>
                  <h3
                    className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                    style={{ fontFamily: "'Lora', serif", color: isDark ? "#e0ddd5" : "#111" }}
                  >
                    <Link href="/geopolitika/nova-bezbednosna-arhitektura" className="headline-link">
                      Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?
                    </Link>
                  </h3>
                  <p
                    className="mt-1 text-[14px] leading-[1.5]"
                    style={{ fontFamily: "'Crimson Pro', serif", color: isDark ? "#7a7872" : "#666" }}
                  >
                    Evropa se sve otvorenije definiše kao akter tvrde moći u kontekstu strateške transformacije.
                  </p>
                </div>
                <img
                  src={IMAGES.europeMap}
                  alt="Mapa Evrope"
                  className="w-[100px] h-[75px] object-cover border"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                  }}
                />
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
