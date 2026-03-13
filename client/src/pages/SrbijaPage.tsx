/*
 * DESIGN: "Diplomatska Klasika" — Srbija index (listing)
 * CONCEPT: identično GeopolitikaIndex (čist grid sa karticama)
 * Title: Analiza nedelje
 * Subtitle: Najnovije i arhiva
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  kosovAmfiteatar: "/news/kosovo-amfiteatar.jpg",
  traktori: "/traktori-beograd.jpg",
  analizaNedeljeMars: "/analiza-nedelje-mars.jpg",
  heroOld:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/qZixjPORsEGCuRBV.png",
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

      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <section className="max-w-[1000px] mx-auto px-5">
          {/* Title */}
          <div className="mb-10">
            <span className="kicker">Srbija</span>
            <h1
              className="mt-3 text-[30px] md:text-[40px] font-bold leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Analiza nedelje
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
            {/* NOVA ANALIZA — Tiho gašenje srpskih univerziteta na Kosovu */}
            <article>
              <Link
                href="/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu"
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
                    src={IMAGES.kosovAmfiteatar}
                    alt="Amfiteatar Univerziteta u Kosovskoj Mitrovici"
                    className="w-full h-[220px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Tiho gašenje srpskih univerziteta na Kosovu
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Hiljade studenata i profesora mogle bi ostati bez univerziteta
                  dok administrativne mere postepeno onemogućavaju rad srpskih
                  fakulteta u Kosovskoj Mitrovici.
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

            {/* NOVA ANALIZA — Selo ne prašta poraz */}
            <article>
              <Link
                href="/srbija/selo-ne-prasta-poraz-vest"
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
                    src={IMAGES.traktori}
                    alt="Kolona traktora ka Beogradu"
                    className="w-full h-[220px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Selo ne prašta poraz
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Blokade su završene, ali poljoprivrednici odlaze sa protesta bez
                  dogovora sa državom, što otvara pitanje političkih posledica u
                  zemlji čiju stabilnost vekovima nosi selo.
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

            {/* Marš za pravosuđe */}
            <article>
              <Link href="/srbija/mars-za-pravosudje" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.analizaNedeljeMars}
                    alt="Marš za pravosuđe — ilustracija"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Marš za pravosuđe: kada institucije postanu centralno političko
                  pitanje
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Kada sudovi postanu tema politike, društvo raspravlja o sopstvenom
                  ustavnom identitetu i o granicama izvršne vlasti.
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

            {/* Podeljeno društvo */}
            <article>
              <Link href="/srbija/podeljeno-drustvo" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.heroOld}
                    alt="Podeljeno društvo — ilustracija"
                    className="w-full h-[220px] object-cover object-center block"
                    style={{ opacity: isDark ? 0.9 : 1 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Podeljeno društvo: Srbija u ogledalu globalne polarizacije
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Polarizacija više nije izuzetak, već pravilo: od Vašingtona do
                  Evrope, a zatim i u Srbiji, gde se politička borba pretvara u
                  borbu za legitimitet.
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
