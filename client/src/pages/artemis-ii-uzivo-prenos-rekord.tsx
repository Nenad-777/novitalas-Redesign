/*
 * DESIGN: Novi Talas — VIDEO članak
 * Tema: Artemis II — uživo prenos iz dubokog svemira
 * Datum: 6. april 2026.
 * Sekcija: Naša planeta
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function ArtemisIIUzivoPrenosRekord() {
  useSEO("/nasa-planeta/artemis-ii-uzivo-prenos-rekord");
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
            Uživo: Artemis II obara istorijski rekord — prenos iz dubokog svemira
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
            NASA uživo prenosi misiju Artemis II u trenutku kada posada dostiže
            najveću udaljenost od Zemlje u istoriji čovečanstva.
          </p>

          {/* Podeli vest */}
          <ShareButton />

          {/* YouTube video — hero element (16:9, responsive, puna širina) */}
          <div
            className="relative w-full overflow-hidden rounded-xl aspect-video mb-10"
            style={{
              border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/m3kR2KK8TEs"
              title="NASA Artemis II — uživo prenos iz dubokog svemira"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          {/* Tekst članka */}
          <div
            className="space-y-6 text-[17px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              color: isDark ? "#cfcac2" : "#222",
            }}
          >
            <p>
              U trenutku kada misija Artemis II obara istorijski rekord
              udaljenosti od Zemlje, NASA je omogućila direktan prenos iz
              svemira.
            </p>

            <p>
              Letelica Orion trenutno se nalazi u dubokom svemiru, na putanji ka
              Mesecu, dok posada sprovodi ključne operacije i dokumentuje let.
            </p>

            <p>
              Prenos pruža jedinstven uvid u misiju koja označava povratak
              čovečanstva u daleki svemir nakon više od pola veka.
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
