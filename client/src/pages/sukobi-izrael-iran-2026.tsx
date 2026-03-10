/*
 * DESIGN: Novi Talas - Geopolitika članak
 * Tema: Sukobi Izraela i Irana 2026
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function SukobiIzraelIran2026() {
  useSEO("/geopolitika/sukobi-izrael-iran-2026");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // ✅ promeni datum po potrebi (ovo je prikazni datum članka)
  const dateLabel = "28. februar 2026";

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
                Geopolitika
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
            className="text-[30px] md:text-[42px] font-bold leading-[1.1] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti
          </h1>

          {/* Slika */}
          <div className="mb-8">
            <img
              src="/f22-israel-iran-2026.jpg"
              alt="Sukobi Izrael Iran 2026"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Tekst */}
          <div
            className="space-y-6 text-[17px] leading-[1.8]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#cfcac2" : "#222",
            }}
          >
            <p>
              Nakon pojačanog vojnog prisustva Sjedinjenih Država u regionu i
              raspoređivanja naprednih borbenih kapaciteta, situacija između
              Izraela i Irana eskalirala je u otvorene vojne udare i uzvratne
              napade. Prethodne nedelje obeležene su serijom izjava,
              upozorenja i diplomatskih poruka, ali su tenzije ubrzo prešle u
              konkretnu vojnu fazu.
            </p>

            <p>
              Izraelske snage izvele su ciljana dejstva protiv objekata za koje
              tvrde da su povezani sa iranskom vojnom infrastrukturom i
              regionalnim saveznicima Teherana. Ubrzo potom, Iran je odgovorio
              projektilskim i bespilotnim napadima, čime je sukob dobio
              dimenziju direktne konfrontacije dve države, a ne više samo
              indirektnog nadmetanja preko posrednika.
            </p>

            <p>
              Paralelno sa vojnim operacijama, politički vrh Sjedinjenih
              Država saopštio je da su započete velike borbene operacije protiv
              određenih ciljeva u Iranu, uz poruke podrške regionalnim
              saveznicima i pozive na unutrašnje promene u Teheranu. Ovakva
              retorika dodatno je pojačala neizvesnost i otvorila pitanje
              mogućeg širenja sukoba.
            </p>

            <p>
              Regionalne sile i evropske države pozvale su na hitnu
              deeskalaciju, upozoravajući da bi dalja razmena udara mogla da
              destabilizuje čitav Bliski istok, ugrozi energetske tokove i
              podigne rizik od šireg međunarodnog uplitanja.
            </p>

            <p>
              U ovom trenutku ključno pitanje nije samo ko ima vojnu
              nadmoć, već da li postoji politički prostor za zaustavljanje
              spirale odmazde. Svaki naredni korak nosi rizik prelaska iz
              ograničenog sukoba u otvoreni regionalni rat.
            </p>
          </div>

          {/* Povratak */}
          <div className="mt-12">
            <a
              href="/geopolitika"
              className="text-[13px] font-semibold uppercase tracking-[0.08em] no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              ← Nazad na Geopolitiku
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
