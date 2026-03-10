/*
 * DESIGN: "Diplomatska Klasika" — Obaveštajni izvori article page
 * Article: Rat senki: povratak obaveštajnih službi u središte geopolitike
 * Image: Intelligence report screens (user uploaded)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

const IMAGES = {
  intelligenceReport:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/acjhxldMBPFDSKKa.png",
};

export default function ObavestajniArticle() {
  useSEO("/obavestajni-izvori/rat-senki");
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
        <article className="max-w-[760px] mx-auto px-5">
          {/* Kicker */}
          <span className="kicker">Obaveštajni izvori</span>

          {/* Headline */}
          <h1
            className="mt-3 mb-4 text-[34px] md:text-[46px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Rat senki: povratak obaveštajnih službi u središte geopolitike
          </h1>

          {/* Byline */}
          <div
            className="flex items-center gap-2 mb-8 text-[13px]"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#7a7872" : "#888",
            }}
          >
            <span
              className="font-semibold uppercase tracking-[0.05em]"
              style={{ color: isDark ? "#9a978f" : "#555" }}
            >
              Novi Talas
            </span>
            <span>&bull;</span>
            <span>Februar 2026</span>
          </div>

          {/* Feature image */}
          <figure className="mb-10">
            <div
              className="border"
              style={{
                borderColor: isDark ? "#2a2a2e" : "#eee",
                backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
              }}
            >
              <img
                src={IMAGES.intelligenceReport}
                alt="Obaveštajni izveštaj — digitalni ekrani"
                className="w-full h-[300px] md:h-[420px] object-cover object-center block"
              />
            </div>
          </figure>

          {/* Article body */}
          <div
            className="text-[18px] md:text-[19px] leading-[1.75]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#c5c2ba" : "#222",
            }}
          >
            <p className="mb-6">
              U savremenim međunarodnim odnosima rat se retko objavljuje, ali se
              gotovo stalno vodi. Dok su oružani sukobi i dalje prisutni, sve je
              vidljivije da se ključne borbe odvijaju izvan frontova. U tom
              prostoru, između mira i otvorenog konflikta, obaveštajne službe
              ponovo zauzimaju centralno mesto.
            </p>

            <p className="mb-6">
              Poslednje tri godine pokazale su da se tradicionalna diplomatija i
              obaveštajni rad više ne mogu posmatrati odvojeno. Sajber operacije,
              uticajne kampanje, infiltracija u političke i energetske sisteme,
              sabotaže infrastrukture i koordinisane dezinformacione mreže
              postale su deo svakodnevnog arsenala država.
            </p>

            <p className="mb-6">
              Ono što se nekada smatralo izuzetkom, danas je pravilo.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Hibridni prostor sukoba
            </h2>

            <p className="mb-6">
              Savremeni sukobi ne počinju napadom tenkova. Počinju destabilizacijom
              energetskih tokova, kompromitovanjem komunikacionih mreža i
              narušavanjem poverenja u institucije. U tom smislu, obaveštajne
              službe više nisu samo instrument prikupljanja informacija. One su
              postale aktivni činilac oblikovanja političke realnosti.
            </p>

            <p className="mb-6">
              Evropa je u poslednjih nekoliko godina zabeležila porast sajber
              napada na energetsku infrastrukturu, državne institucije i medijske
              kuće. Paralelno sa tim, sve je izraženija zabrinutost zbog pokušaja
              uticaja na izbore i političke procese.
            </p>

            <p className="mb-6">
              To nije fenomen ograničen na jednu državu ili jednu silu. To je obrazac.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Digitalna front-linija
            </h2>

            <p className="mb-6">
              Sajber prostor postao je nova linija razdvajanja moći. Države ulažu
              značajna sredstva u ofanzivne i defanzivne digitalne kapacitete.
              Granica između vojnog i civilnog sektora sve je tanja, jer je
              kritična infrastruktura često u privatnom vlasništvu, ali od
              strateškog značaja.
            </p>

            <p className="mb-6">
              Napadi na energetske mreže, telekomunikacije i finansijske sisteme
              pokazuju da ranjivost više nije isključivo teritorijalna. Ona je
              tehnološka i sistemska.
            </p>

            <p className="mb-6">
              U tom ambijentu, obaveštajne agencije deluju na raskrsnici politike,
              bezbednosti i tehnologije.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Povratak klasičnih metoda
            </h2>

            <p className="mb-6">
              Istovremeno, klasične metode obaveštajnog rada nisu nestale. Naprotiv,
              pojačana je aktivnost diplomatskih i vojnih atašea, intenzivirani su
              kontakti u političkim i akademskim krugovima, a protok poverljivih
              informacija ponovo je dobio težinu kakvu je imao tokom hladnog rata.
            </p>

            <p className="mb-6">
              Razlika je u brzini i opsegu. Današnji svet je umrežen, a informacije se
              kreću gotovo trenutno. Time se povećava i rizik od manipulacije.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Balkan kao prostor preklapanja interesa
            </h2>

            <p className="mb-6">
              Za Balkan, ovaj proces ima posebnu dimenziju. Region je tradicionalno bio
              prostor susreta različitih uticaja, a u savremenom kontekstu to znači i
              pojačano interesovanje bezbednosnih struktura velikih sila.
            </p>

            <p className="mb-6">
              Energetski projekti, medijski pejzaž i političke polarizacije predstavljaju
              polja na kojima se prepliću različiti interesi. To ne znači da je region
              poprište otvorenog sukoba, ali ukazuje na činjenicu da je deo šireg
              strateškog okvira.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Tiha struktura moći
            </h2>

            <p className="mb-6">
              U međunarodnim odnosima retko se javno priznaje uloga obaveštajnih službi.
              Ipak, u vremenu nestabilne ravnoteže, njihova funkcija postaje vidljivija.
              One deluju preventivno, ponekad ofanzivno, ali uvek u senci.
            </p>

            <p className="mb-6">
              Svet se nalazi u fazi u kojoj otvoreni rat nije jedini oblik nadmetanja.
              Između diplomatije i oružja postoji prostor u kojem se odlučuje o ravnoteži moći.
            </p>

            <p className="mb-6">
              U tom prostoru, rat senki postaje trajna komponenta globalne politike.
            </p>
          </div>

          {/* Back link */}
          <hr className="editorial-divider my-10" />
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
        </article>
      </main>

      <Footer />
    </div>
  );
}