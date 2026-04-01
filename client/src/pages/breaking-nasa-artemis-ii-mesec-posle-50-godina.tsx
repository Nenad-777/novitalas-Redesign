/*
 * DESIGN: Novi Talas — BREAKING NEWS članak
 * Tema: NASA Artemis II — prva ljudska misija ka Mesecu posle 50 godina
 * Datum: 2. april 2026.
 * Sekcija: Naša planeta
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function BreakingNasaArtemisII() {
  useSEO("/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dateLabel = "2. april 2026.";

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
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-sm"
              style={{ backgroundColor: "#8B0000" }}>
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
            🚨 BREAKING: NASA ponovo šalje ljude ka Mesecu posle više od 50 godina
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
            Artemis II označava povratak čovečanstva u duboki svemir — prvi put od 1972. godine
          </p>

          {/* Podeli vest */}
          <ShareButton />

          {/* YouTube video — hero element (16:9, responsive, width 100%) */}
          <div
            className="relative w-full overflow-hidden rounded-xl aspect-video mb-10"
            style={{
              border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/m3kR2KK8TEs"
              title="NASA Artemis II — lansiranje uživo"
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
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#cfcac2" : "#222",
            }}
          >
            {/* UVOD */}
            <p>
              U istorijskom trenutku koji vraća čovečanstvo na putanju velikih
              svemirskih poduhvata, NASA je lansirala misiju Artemis II — prvu
              ljudsku misiju ka Mesecu nakon više od pola veka.
            </p>

            <p>
              Po prvi put od 1972. godine i misije Apollo 17, ljudi ponovo
              napuštaju Zemljinu orbitu i kreću ka dubokom svemiru.
            </p>

            {/* STATUS BLOK */}
            <div
              className="rounded-sm p-5 my-6"
              style={{
                backgroundColor: isDark ? "#1a1c22" : "#f5f7fa",
                borderLeft: `4px solid #8B0000`,
              }}
            >
              <p
                className="text-[13px] font-bold uppercase tracking-[0.12em] mb-3"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Status misije
              </p>
              <ul
                className="space-y-2 text-[16px]"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {[
                  "Lansiranje uspešno izvedeno",
                  "Posada na putanji ka Mesecu",
                  "Misija bez sletanja (orbitalni obilazak)",
                  "Povratak planiran nakon više dana",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                    style={{ color: isDark ? "#cfcac2" : "#333" }}
                  >
                    <span style={{ color: "#8B0000", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* GLAVNI TEKST */}
            <p>
              Misija Artemis II koristi raketu Space Launch System i kapsulu
              Orion. Četvoročlana posada ima zadatak da obiđe Mesec i bezbedno
              se vrati na Zemlju.
            </p>

            <p>
              Ova misija predstavlja ključni korak ka budućem sletanju ljudi na
              Mesec i uspostavljanju dugotrajnog prisustva.
            </p>

            <p>Ali značaj misije prevazilazi nauku.</p>

            <p>
              U trenutku kada globalne sile redefinišu odnose moći na Zemlji,
              svemir ponovo postaje prostor strateškog nadmetanja.
            </p>

            <p>
              Mesec više nije simbol prošlosti — već teritorija budućnosti.
            </p>

            {/* KOMENTAR — divider + italic block */}
            <div
              className="mt-8 pt-8"
              style={{
                borderTop: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
              }}
            >
              <p
                className="text-[19px] leading-[1.7] italic"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                Ovo nije nostalgija.
              </p>
              <p
                className="mt-3 text-[19px] leading-[1.7] italic"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                Ovo je početak.
              </p>
              <p
                className="mt-3 text-[17px] leading-[1.8]"
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  color: isDark ? "#cfcac2" : "#222",
                }}
              >
                Ako je Apollo bio dokaz da čovek može da stigne do Meseca,
                Artemis je dokaz da želi da se tamo vrati — i ostane.
              </p>
            </div>
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
