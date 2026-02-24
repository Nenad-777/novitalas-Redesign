import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function UkrajinaCetiriGodine() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <article className="max-w-[820px] mx-auto px-5">

          {/* Rubrika */}
          <span className="kicker">Geopolitika</span>

          {/* Naslov */}
          <h1
            className="mt-3 text-[32px] md:text-[42px] font-bold leading-[1.15]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Četiri godine rata u Ukrajini: sankcije jačaju, evropsko jedinstvo slabi
          </h1>

          {/* Datum */}
          <div
            className="mt-4 text-[13px] uppercase tracking-[0.08em]"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#9a978f" : "#777",
            }}
          >
            24. februar 2026.
          </div>

          {/* Hero slika */}
          <div className="mt-8 mb-8">
            <img
              src="/geopolitika-ukrajina.jpg"
              alt="Četiri godine rata u Ukrajini"
              className="w-full object-cover"
            />
          </div>

          {/* Tekst */}
          <div
            className="text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#cfcac2" : "#222",
            }}
          >
            <p className="mb-6">
              Na četvrtu godišnjicu početka ruske invazije na Ukrajinu,
              rat ulazi u petu godinu bez jasnih naznaka prekida vatre.
              Predsednik Ukrajine Volodimir Zelenski poručio je da država
              nije „podigla belu zastavu“ i da je očuvanje suvereniteta
              ostalo primarni cilj Kijeva.
            </p>

            <p className="mb-6">
              Istovremeno, Velika Britanija objavila je novi paket sankcija
              protiv gotovo 300 ruskih entiteta, uključujući energetske i
              finansijske strukture povezane sa izvozom nafte, dok je
              Australija uvela dodatne restriktivne mere.
              Unutar Evropske unije došlo je do blokade novog paketa pomoći,
              nakon što je Mađarska zaustavila odluku o proširenju
              finansijske i vojne podrške Ukrajini.
            </p>

            <p>
              Četvrta godišnjica rata potvrđuje prelazak sukoba u dugotrajnu
              fazu iscrpljivanja. Sankcije se intenziviraju, ali političko
              jedinstvo Zapada pokazuje znake naprezanja. Rat se više ne vodi
              samo na linijama fronta, već i u institucijama evropske politike,
              gde se odlučuje o tempu, obimu i granicama zapadne solidarnosti.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
