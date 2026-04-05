/*
 * DESIGN: Novi Talas — članak
 * Tema: Orion više od polovine puta do Meseca — misija Artemis II u dubokom svemiru
 * Datum: 5. april 2026.
 * Sekcija: Naša planeta
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function ArtemisIIOrionPolovinaPuta() {
  useSEO("/nasa-planeta/artemis-ii-orion-polovina-puta-do-meseca");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dateLabel = "5. april 2026.";

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
            Orion više od polovine puta do Meseca: misija Artemis II u dubokom
            svemiru
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
            Orion je više od polovine puta do Meseca. Misija Artemis II ulazi u
            fazu dubokog svemirskog krstarenja.
          </p>

          {/* Podeli vest */}
          <ShareButton />

          {/* YouTube video — jedini vizual, 16:9, responsive, puna sirina */}
          <div
            className="relative w-full overflow-hidden rounded-xl aspect-video mb-10"
            style={{
              border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/m3kR2KK8TEs"
              title="Artemis II — Orion u dubokom svemiru, uživo"
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

          {/* Tekst clanka */}
          <div
            className="space-y-6 text-[17px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              color: isDark ? "#cfcac2" : "#222",
            }}
          >
            <p>
              Letelica Orion nalazi se više od polovine puta do Meseca i
              trenutno se kreće kroz cislunarni prostor.
            </p>

            <p>
              Posada je prešla više od 160.000 kilometara od Zemlje, a let se
              odvija stabilno brzinom od oko 35.000 kilometara na sat.
            </p>

            <p>
              Misija je ušla u fazu dubokog svemirskog krstarenja nakon ključnog
              manevra koji je letelicu usmerio ka Mesecu.
            </p>

            <p>
              Planiran je prolazak na oko 6.000 kilometara od površine Meseca,
              nakon čega sledi povratak ka Zemlji.
            </p>

            <p>Svi sistemi funkcionišu stabilno i nema većih tehničkih problema.</p>
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
