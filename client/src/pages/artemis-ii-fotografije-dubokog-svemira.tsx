/*
 * DESIGN: Novi Talas — članak
 * Tema: Fotografije iz dubokog svemira — Artemis II beleži prizore sa lunarnog preleta
 * Datum: 7. april 2026.
 * Sekcija: Naša planeta
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function ArtemisIIFotografijeDubokogSvemira() {
  useSEO("/nasa-planeta/artemis-ii-fotografije-dubokog-svemira");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dateLabel = "7. april 2026.";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <article className="max-w-[850px] mx-auto px-5">
          {/* Kicker + Date */}
          <div className="mb-6">
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
            Fotografije iz dubokog svemira: Artemis II beleži prizore sa lunarnog preleta
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
            NASA objavila nove snimke Zemlje i pomračenja iz perspektive misije Artemis II.
          </p>

          {/* Podeli vest */}
          <ShareButton />

          {/* Prva slika */}
          <figure className="mb-8">
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{
                border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
              }}
            >
              <img
                src="/news/orion-earth-view.jpg"
                alt="Pogled na Zemlju iz letelice Orion tokom misije Artemis II"
                className="w-full block"
                style={{ display: "block" }}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <figcaption className="photo-credit">
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
              NASA je objavila nove fotografije nastale tokom misije Artemis II, koje prikazuju Zemlju i Mesec iz perspektive dubokog svemira.
            </p>

            <p>
              Snimci su zabeleženi iz letelice Orion tokom preleta oko Meseca i potvrđuju ulazak misije u cislunarni prostor.
            </p>

            <p>
              Misija se odvija stabilno i nastavlja putanju ka Zemlji nakon lunarnog obilaska.
            </p>
          </div>

          {/* Druga slika */}
          <figure className="mt-10 mb-8">
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{
                border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
              }}
            >
              <img
                src="/news/artemis-eclipse.jpg"
                alt="Pomračenje Sunca zabeleženo tokom lunarnog preleta misije Artemis II"
                className="w-full block"
                style={{ display: "block" }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="photo-credit">
              Foto: NASA / Artemis II
            </figcaption>
          </figure>

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
