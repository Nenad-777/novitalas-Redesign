import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function IranProtesti2026() {
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
        <article className="max-w-[860px] mx-auto px-5">
          {/* Kicker + Title */}
          <div className="mb-6">
            <span className="kicker">Geopolitika</span>

            <h1
              className="mt-3 text-[30px] md:text-[42px] font-bold leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio
              snimke sukoba
            </h1>

            <p
              className="mt-3 text-[14px] md:text-[15px] leading-[1.6]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#b9b6ae" : "#666",
              }}
            >
              25. februar 2026.
            </p>
          </div>

          {/* HERO IMAGE (web format, normal height) */}
          <div
            className="border mb-8 overflow-hidden"
            style={{
              borderColor: isDark ? "#2a2a2e" : "#eee",
              backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
            }}
          >
            <img
              src="/tehran-riots.jpg"
              alt="Iran — protesti na univerzitetima"
              className="w-full h-[260px] md:h-[360px] object-cover object-center block"
            />
          </div>

          {/* BODY */}
          <div
            className="space-y-5"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#d7d4cc" : "#1a1a1a",
              fontSize: "18px",
              lineHeight: "1.75",
            }}
          >
            <p>
              Protesti studenata protiv iranskih vlasti nastavljaju da se šire i
              zahvatili su najmanje deset univerziteta širom zemlje, uključujući
              Teheran i Mašhad. BBC je verifikovao autentičnost video-snimaka koji
              prikazuju sukobe između demonstranata i pripadnika paravojne
              formacije Basij, koja deluje u okviru Revolucionarne garde, kao i
              drugih prorežimskih grupa.
            </p>

            <h2
              className="pt-2 text-[22px] md:text-[26px] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Sukobi na kampusima i prelazak na onlajn nastavu
            </h2>

            <p>
              Prema izveštajima sa terena, bezbednosne snage i policija u civilu
              pokušale su da preuzmu kontrolu nad univerzitetskim objektima, što
              je dovelo do fizičkih konfrontacija sa studentima. U blizini
              pojedinih kampusa primećena su vozila bezbednosnih struktura, dok
              je u nekim slučajevima studentima zabranjen ulazak u fakultetske
              zgrade.
            </p>

            <p>
              Zbog pogoršane bezbednosne situacije, procenjuje se da je oko 80%
              univerziteta prešlo na onlajn nastavu kako bi se sprečila dalja
              okupljanja.
            </p>

            <h2
              className="pt-2 text-[22px] md:text-[26px] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Koliko je ljudi ubijeno u prethodnim talasima?
            </h2>

            <p>
              Aktuelni nemiri nadovezuju se na veliki protestni talas iz 2022. i
              2023. godine. Prema podacima organizacije <strong>Iran Human Rights (IHR)</strong>,
              ubijeno je najmanje 537 ljudi, uključujući desetine maloletnika.
            </p>

            <p>
              <strong>Amnesty International</strong> dokumentovao je široku upotrebu
              smrtonosne sile protiv demonstranata, dok organizacija{" "}
              <strong>Human Rights Activists in Iran (HRANA)</strong> navodi da broj
              stradalih prelazi 500.
            </p>

            <p>
              Pojedini nezavisni i opozicioni izvori iznose procene koje prelaze
              1.000 ubijenih tokom različitih ciklusa protesta u poslednjih nekoliko
              godina. Iranske vlasti osporavaju ove brojke i navode znatno niže
              podatke. Tokom istog perioda, prema procenama međunarodnih
              organizacija, uhapšeno je između 20.000 i 30.000 ljudi.
            </p>

            <h2
              className="pt-2 text-[22px] md:text-[26px] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Smrtne kazne i eskalacija represije
            </h2>

            <p>
              Organizacije za ljudska prava navode da su u poslednjim mesecima
              izrečene nove smrtne kazne protiv demonstranata optuženih za
              „ugrožavanje nacionalne bezbednosti“. U ranijim slučajevima, pojedini
              demonstranti su već pogubljeni nakon ubrzanih sudskih postupaka koje
              međunarodna zajednica ocenjuje kao nepravedne.
            </p>

            <h2
              className="pt-2 text-[22px] md:text-[26px] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Digitalna bezbednost i upozorenja disidentima
            </h2>

            <p>
              Američke bezbednosne strukture javno su savetovale iranske disidente
              da koriste VPN servise, Tor mrežu i dodatne mere digitalne zaštite
              kako bi smanjili rizik od identifikacije i nadzora.
            </p>

            <p
              className="mt-6 pt-4 border-t"
              style={{ borderColor: isDark ? "#2a2a2e" : "#eee" }}
            >
              Protesti koji se sada odvijaju na univerzitetima predstavljaju novu
              fazu dugotrajnog ciklusa društvenog nezadovoljstva u Iranu. Ostaje
              otvoreno pitanje da li će ostati ograničeni na akademsku zajednicu
              ili prerasti u širi građanski pokret.
            </p>
          </div>

          {/* Back */}
          <div className="mt-10">
            <Link
              href="/geopolitika"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              &larr; Nazad na Geopolitiku
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
