/*
 * Naša planeta  -  Vest
 * San i mozak: nova otkrića o tome šta se dešava dok spavamo
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "/san-mozak.jpg",
};

export default function SanIMozak() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="py-10 md:py-14 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <article className="max-w-[920px] mx-auto px-5">
          {/* Hero image */}
          <div
            className="border overflow-hidden mb-8"
            style={{
              borderColor: isDark ? "#2a2a2e" : "#eee",
              backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
            }}
          >
            <img
              src={IMAGES.hero}
              alt="San i mozak — neurološka istraživanja spavanja"
              className="w-full h-[240px] md:h-[420px] object-cover object-center block"
            />
          </div>

          {/* Meta */}
          <div className="mb-3">
            <span className="kicker">Naša planeta</span>
            <div
              className="mt-2 text-[13px] tracking-[0.08em] uppercase"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#bdb9ae" : "#666",
              }}
            >
              Mart 2026.
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-[30px] md:text-[42px] font-bold leading-[1.12] mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Mozak dok spimo: kako san čisti toksine i gradi uspomene
          </h1>

          {/* Body */}
          <div
            className="text-[18px] leading-[1.75]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#d5d1c8" : "#222",
            }}
          >
            <p className="mb-5">
              Dok nam se telo odmara u snu, mozak je sve samo ne neaktivan.
              Neurološka istraživanja poslednjih godina razotkrivaju složenu
              arhitekturu spavanja — sistem koji obavlja neke od najvažnijih
              bioloških funkcija organizma: čišćenje otpadnih supstanci,
              konsolidaciju pamćenja i obnovu neuronskih veza.
            </p>

            <p className="mb-5">
              Ključnu ulogu u ovome igra <strong>glimfatički sistem</strong> —
              mreža kanala oko krvnih sudova mozga koja se aktivira pretežno
              tokom dubokog sna. Istraživanja objavljena u časopisu{" "}
              <em>Science</em> pokazala su da tokom spavanja moždane ćelije
              skupljaju do 60%, čime se proširuju međućelijski prostori kroz
              koje tečnost odnosi metaboličke otpatke, uključujući beta-amiloid
              — protein koji se vezuje za razvoj Alchajmerove bolesti.
            </p>

            <p className="mb-5">
              Paralelno s tim procesom odvija se <strong>konsolidacija pamćenja</strong>.
              Tokom REM faze sna, hipokampus — centar za kratkoročno pamćenje — šalje
              informacije ka korteksu gde se „utiskuju" kao dugoročna sećanja.
              Upravo zato ispitanici u eksperimentima koji su spavali posle učenja
              pokazuju značajno bolji retencioni skor od onih koji su ostali budni.
            </p>

            <p className="mb-6">
              Najnovija studija tima sa Univerziteta u Kopenhagenu koristila je
              kombinaciju EEG snimanja mozgovnih talasa i funkcionalnog MRI-a
              kako bi u realnom vremenu pratila protok cerebrospinalne tečnosti
              tokom različitih faza sna. Rezultati ukazuju da moždani talasi u
              sporom snu (delta talasi) funkcionišu kao „pulsna pumpa" koja
              mehanički pogoni glimfatički tok — otkriće koje bi moglo dovesti
              do novih terapija za neurodegenerativne bolesti.
            </p>

            {/* Short comment box */}
            <div
              className="border-l-4 pl-5 py-4 my-8"
              style={{
                borderColor: isDark ? "#d9bf7a" : "#8B0000",
                backgroundColor: isDark
                  ? "rgba(217,191,122,0.08)"
                  : "rgba(139,0,0,0.06)",
              }}
            >
              <div
                className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-2"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Kratak komentar
              </div>
              <p className="m-0">
                Ovo istraživanje daje naučnu potvrdu onome što folk-medicina
                odavno nagoveštava: san nije luksuz, već biološka nužnost.
                Moždana „higijenska rutina" koja se odvija dok spavamo
                presudna je za dugoročno kognitivno zdravlje — i može biti
                ključ za razumevanje bolesti kao što su Alchajmer i Parkinson.
              </p>
            </div>

            <p className="mb-5">
              Istraživači upozoravaju da hronična deprivacija sna, karakteristična
              za savremeni urbani stil života, direktno ometa obe funkcije —
              i glimfatičko čišćenje i konsolidaciju pamćenja. Meta-analiza
              objavljena u{" "}
              <em>Nature Reviews Neuroscience</em> pokazuje da odrasli koji
              redovno spavaju manje od šest sati imaju 30% viši rizik od
              kognitivnog pada u kasnijim dekadama.
            </p>

            <p className="mb-5">
              Posebno interesantan aspekt novih istraživanja tiče se uloge
              snova. Neuroimidžing studije pokazuju da tokom REM faze dolazi
              do pojačane aktivnosti u amigdali i prefrontalnom korteksu —
              oblastima vezanim za emocionalnu obradu i donošenje odluka.
              Hipoteza koja dobija sve više potvrda glasi da snovi služe kao
              simulacioni prostor u kome mozak „vežba" emocionalne odgovore
              i scenario-planiranje, smanjujući intenzitet traumatskih sećanja.
            </p>

            <p
              className="text-[14px] leading-[1.6]"
              style={{ color: isDark ? "#bdb9ae" : "#666" }}
            >
              Izvor/credits: prema objavljenim studijama u časopisima{" "}
              <em>Science</em>, <em>Nature Reviews Neuroscience</em> i
              materijalu sa Universitetskog medicinskog centra u Kopenhagenu.
            </p>
          </div>

          {/* Back */}
          <hr className="editorial-divider my-10" />
          <Link
            href="/nasa-planeta"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            &larr; Nazad na Našu planetu
          </Link>
        </article>
      </main>

      <Footer />
    </div>
  );
}
