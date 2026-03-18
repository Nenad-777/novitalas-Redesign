/*
 * DESIGN: "Diplomatska Klasika"  -  Geopolitika index (listing)
 * Purpose: show articles (new + archive)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  svetDnevni: "/news/svet-dnevni.jpg",
  brodoviKriza: "/news/brodovi-kriza.jpg",
  biennaleRusija: "/news/biennale-venice.jpg",
  refugeesIranUn: "/refugees-iran-un.jpg",
  rezerveNafte: "/rezerve-nafte.jpg",
  usSpecialForces: "/us-special-forces-desert.jpg",
  hormuzTankers: "/hormuz-strait-tankers.jpg",
  russiaChinaShadows: "/russia-china-shadows.jpg",
  ormuz: "/ormuz.jpg",
  ukraine: "/geopolitika-ukrajina.jpg",
  iran: "/tehran-riots.jpg",
  izraelIran: "/f22-israel-iran-2026.jpg",
  europeMap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
};

export default function GeopolitikaIndex() {
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
        <section className="max-w-[1000px] mx-auto px-5">
          {/* Title */}
          <div className="mb-10">
            <span className="kicker">Geopolitika</span>
            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              SVET DANAS
            </p>
          </div>

          {/* LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ✅ NAJNOVIJA VEST (SVET - 18. MART) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/svet-18-mart"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.svetDnevni}
                    alt="Svet - 18. mart 2026. — globalni pregled"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  SVET - 18. MART
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Pregled najvažnijih globalnih događaja dana: Iran, Liban, nuklearni rizik i širenje regionalne nestabilnosti.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Svetska kriza Ormuski moreuz) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/svetska-kriza-sve-ozbiljnija"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.brodoviKriza}
                    alt="Brodovi u Ormuskom moreuzu — globalna energetska kriza"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  SVETSKA KRIZA SVE OZBILJNIJA
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Zašto je Ormuski moreuz tako važan
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (EU Biennale Rusija) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/biennale-rusija"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.biennaleRusija}
                    alt="Venecijansko bijenale — povratak Rusije"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (UN izbeglice Iran) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/refugees-iran-un"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.refugeesIranUn}
                    alt="Izbeglice iz Irana — humanitarna kriza"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (IEA rezerve nafte) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/rezerve-nafte"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.rezerveNafte}
                    alt="IEA — oslobađanje strateških naftnih rezervi"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IEA pokreće najveće oslobađanje naftnih rezervi u istoriji
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Države članice puštaju 400 miliona barela nafte iz strateških
                  rezervi kako bi ublažile globalni energetski šok izazvan
                  krizom u Persijskom zalivu.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (SAD specijalna operacija / Iran uranijum) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/sad-specijalna-operacija-iran-uranijum"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.usSpecialForces}
                    alt="Američke specijalne snage u pustinjskoj operaciji"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Američki bezbednosni krugovi razmatraju ograničenu vojnu operaciju
                  usmerenu na iranske zalihe visoko obogaćenog uranijuma.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Francuska odbrana Ormuza) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/francuska-odbrana-ormuza"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.hormuzTankers}
                    alt="Tankeri u Ormuskom moreuzu"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Makron najavljuje odbrambenu pomorsku misiju za zaštitu
                  slobodne plovidbe kroz ključni energetski prolaz.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ 0) NOVA VEST (Velike sile i kriza u Iranu) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/velike-sile-i-kriza-u-iranu"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.russiaChinaShadows}
                    alt="Rusija i Kina — senke velikih sila"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i
                  Pekinga
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Između podrške Teheranu i izbegavanja velikog rata: kako
                  Rusija i Kina balansiraju strateška partnerstva i globalne
                  interese.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ 1) NOVA VEST (Ormuski moreuz) */}
            <article className="md:col-span-2">
              <Link href="/geopolitika/ormuz" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ormuz}
                    alt="Ormuski moreuz"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Ključni pomorski prolaz za naftu pod pritiskom: poremećaji u
                  transportu energenata i rast rizika za globalnu ekonomiju.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ 1) NOVA VEST (Izrael–Iran) */}
            <article>
              <Link
                href="/geopolitika/sukobi-izrael-iran-2026"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.izraelIran}
                    alt="Geopolitika  -  Izrael Iran"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IZRAEL–IRAN: nova eskalacija i crvene linije regiona (2026)
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Šta se menja na terenu, šta u diplomatiji  -  i gde su granice
                  kontrole u spirali odgovora.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* 2) NOVA VEST (Iran  -  protesti) */}
            <article>
              <Link
                href="/geopolitika/iran-protesti-2026"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.iran}
                    alt="Geopolitika  -  Iran protesti"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio
                  snimke sukoba
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Sukobi na kampusima i pojačana represija: relevantni izveštaji
                  govore o stotinama ubijenih u prethodnim talasima protesta.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* 3) NOVA VEST (Ukrajina) */}
            <article>
              <Link
                href="/geopolitika/ukrajina-cetiri-godine-rata"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ukraine}
                    alt="Geopolitika  -  Ukrajina"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Četiri godine rata: šta sada određuje cenu mira
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Dve perspektive, jedan horizont: rat traje, ali se menja logika
                  odluka  -  i pragovi rizika.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* 4) STARA VEST (Evropa) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/nova-bezbednosna-arhitektura"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.europeMap}
                    alt="Nova bezbednosna arhitektura Evrope"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Nova bezbednosna arhitektura Evrope: da li se rađa kontinent
                  tvrde moći?
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Rat u Ukrajini, energija i strateška autonomija  -  Evropa menja
                  bezbednosni identitet.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>
          </div>

          {/* Back */}
          <hr className="editorial-divider my-12" />
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
