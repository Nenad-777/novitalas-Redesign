/*
 * DESIGN: Novi Talas — BREAKING NEWS članak
 * Tema: Artemis II oborio rekord udaljenosti od Zemlje — nadmašen Apollo 13
 * Datum: 6. april 2026.
 * Sekcija: Naša planeta
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function ArtemisIIRekordUdaljenosti() {
  useSEO("/nasa-planeta/artemis-ii-rekord-udaljenosti");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dateLabel = "6. april 2026.";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <article className="max-w-[850px] mx-auto px-5">
          {/* BREAKING label + Kicker + Date */}
          <div className="mb-6">
            {/* BREAKING badge */}
            <div
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-sm"
              style={{ backgroundColor: "#8B0000" }}
            >
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase text-white"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                🚨 BREAKING
              </span>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Naša planeta
              </span>

              <span
                className="text-[12px] tracking-[0.06em]"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#9a978f" : "#666",
                }}
              >
                {dateLabel}
              </span>
            </div>

            <div
              className="mt-4 h-px w-full"
              style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
            />
          </div>

          {/* Naslov */}
          <h1
            className="text-[30px] md:text-[42px] font-bold leading-[1.1] mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Čovečanstvo najdalje od Zemlje u istoriji: Artemis II nadmašio rekord
            Apola 13
          </h1>

          {/* Podnaslov */}
          <p
            className="text-[19px] md:text-[21px] leading-[1.5] mb-6"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              color: isDark ? "#9a978f" : "#555",
              fontStyle: "italic",
            }}
          >
            Posada misije Artemis II dostigla je najveću udaljenost od Zemlje
            ikada zabeleženu za ljudsku posadu, premašivši rekord misije Apollo
            13.
          </p>

          {/* Podeli vest */}
          <ShareButton />

          {/* Hero slika */}
          <figure className="mb-10">
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{
                border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
              }}
            >
              <img
                src="/news/moon-nasa.jpg"
                alt="Letelica Orion u dubokom svemiru tokom misije Artemis II"
                className="w-full block"
                style={{ display: "block" }}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <figcaption
              className="mt-2 text-[13px] leading-[1.5]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#7a7872" : "#777",
              }}
            >
              Foto: NASA / Artemis II
            </figcaption>
          </figure>

          {/* Tekst članka */}
          <div
            className="space-y-6 text-[17px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              color: isDark ? "#cfcac2" : "#222",
            }}
          >
            <p>
              Posada misije Artemis II oborila je istorijski rekord u udaljenosti
              od Zemlje, nadmašivši granicu koju je postavila misija Apollo 13
              1970. godine.
            </p>

            <p>
              Letelica Orion sada se nalazi u dubokom svemiru, na putanji ka
              Mesecu, u okviru takozvane „free-return" putanje koja omogućava
              gravitacioni povratak ka Zemlji.
            </p>

            <p>
              Ovaj trenutak predstavlja simboličan i tehnološki prelom — prvi put
              posle više od pola veka ljudi su ponovo otišli dalje nego ikada
              ranije.
            </p>

            <p>
              Misija se za sada odvija stabilno, dok posada nastavlja testiranje
              ključnih sistema i dokumentovanje putovanja.
            </p>
          </div>

          {/* Povratak */}
          <div className="mt-12">
            <a
              href="/nasa-planeta"
              className="text-[13px] font-semibold uppercase tracking-[0.08em] no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              ← Nazad na Našu planetu
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
