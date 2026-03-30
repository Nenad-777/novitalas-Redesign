/*
 * DESIGN: "Diplomatska Klasika" — Srbija index (listing)
 * CONCEPT: identično GeopolitikaIndex (čist grid sa karticama)
 * Title: Analiza nedelje
 * Subtitle: Najnovije i arhiva
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  izboriOdgovornost: "/news/izbori-odgovornost.jpg",
  izboriRezultati: "/news/izbori-rezultati.jpg",
  lokalniIzbori: "/news/lokalni-izbori.jpg",
  akademijaNovisad: "/news/akademija-novisad.jpg",
  zvucniTop: "/news/zvucni-top.jpg",
  kosovAmfiteatar: "/news/kosovo-amfiteatar.jpg",
  traktori: "/traktori-beograd.jpg",
  analizaNedeljeMars: "/analiza-nedelje-mars.jpg",
  heroOld:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/qZixjPORsEGCuRBV.png",
};

export default function SrbijaPage() {
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
            <span className="kicker">Srbija</span>
            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              ANALIZA NEDELJE
            </p>
          </div>

          {/* LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* NOVA VEST — Nepravilnosti na izborima */}
            <article>
              <Link
                href="/srbija/izbori-nepravilnosti-krivicna-odgovornost"
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
                    src={IMAGES.izboriOdgovornost}
                    alt="Ilustracija biračkog mesta u Srbiji tokom izbornog dana"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Nepravilnosti na izborima: zakon predviđa krivičnu odgovornost za manipulacije
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Prijavljene nepravilnosti tokom izbora u Srbiji otvaraju pitanje
                  krivične odgovornosti za manipulacije i zloupotrebe izbornog procesa.
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

            {/* NOVA VEST — Rezultati izbora */}
            <article>
              <Link
                href="/srbija/izbori-rezultati"
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
                    src={IMAGES.izboriRezultati}
                    alt="Ilustracija izbornih rezultata u Srbiji"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Tesne razlike i smanjenje prednosti vlasti: preliminarni rezultati u deset opština
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Preliminarni rezultati lokalnih izbora u deset opština u Srbiji: vladajuća koalicija zadržala vlast uz vidljivo smanjene razlike i tesne odnose snaga.
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

            {/* NOVA ANALIZA — Lokalni izbori */}
            <article>
              <Link
                href="/srbija/lokalni-izbori-analiza"
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
                    src={IMAGES.lokalniIzbori}
                    alt="Minimalistička ilustracija glasačke kutije sa bojama srpske zastave u pozadini, simbol lokalnih izbora i političkog sistema"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Analiza predstojećih izbora: da li je moguć početak promena?
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Analiza predstojećih lokalnih izbora u Srbiji: uslovi,
                  kontrola procesa i nova energija na terenu.
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

            {/* NOVA ANALIZA — Akademija umetnosti Novi Sad */}
            <article>
              <Link
                href="/srbija/akademija-novisad"
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
                    src={IMAGES.akademijaNovisad}
                    alt="Akademija umetnosti u Novom Sadu — studenti na ulici"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u
                  Novom Sadu, dok studenti i profesori protestuju i upozoravaju na
                  posledice.
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

            {/* NOVA ANALIZA — Ko je pucao u Srbiju? */}
            <article>
              <Link
                href="/srbija/ko-je-pucao-u-srbiju"
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
                    src={IMAGES.zvucniTop}
                    alt="Zvučni top — akustično oružje upotrebljeno na protestu u Beogradu"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Ko je pucao u Srbiju?
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Događaji od 15. marta i dalje predstavljaju jedno od najtežih
                  otvorenih pitanja savremene srpske politike — ko je i čime
                  udario na demonstrante u centru Beograda?
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

            {/* NOVA ANALIZA — Tiho gašenje srpskih univerziteta na Kosovu */}
            <article>
              <Link
                href="/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu"
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
                    src={IMAGES.kosovAmfiteatar}
                    alt="Amfiteatar Univerziteta u Kosovskoj Mitrovici"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Tiho gašenje srpskih univerziteta na Kosovu
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Hiljade studenata i profesora mogle bi ostati bez univerziteta
                  dok administrativne mere postepeno onemogućavaju rad srpskih
                  fakulteta u Kosovskoj Mitrovici.
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

            {/* NOVA ANALIZA — Selo ne prašta poraz */}
            <article>
              <Link
                href="/srbija/selo-ne-prasta-poraz-vest"
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
                    src={IMAGES.traktori}
                    alt="Kolona traktora ka Beogradu"
                    className="w-full h-[220px] object-cover object-center block"
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
                  Selo ne prašta poraz
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Blokade su završene, ali poljoprivrednici odlaze sa protesta bez
                  dogovora sa državom, što otvara pitanje političkih posledica u
                  zemlji čiju stabilnost vekovima nosi selo.
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

            {/* Marš za pravosuđe */}
            <article>
              <Link href="/srbija/mars-za-pravosudje" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.analizaNedeljeMars}
                    alt="Marš za pravosuđe — ilustracija"
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
                  Marš za pravosuđe: kada institucije postanu centralno političko
                  pitanje
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Kada sudovi postanu tema politike, društvo raspravlja o sopstvenom
                  ustavnom identitetu i o granicama izvršne vlasti.
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

            {/* Podeljeno društvo */}
            <article>
              <Link href="/srbija/podeljeno-drustvo" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.heroOld}
                    alt="Podeljeno društvo — ilustracija"
                    className="w-full h-[220px] object-cover object-center block"
                    style={{ opacity: isDark ? 0.9 : 1 }}
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
                  Podeljeno društvo: Srbija u ogledalu globalne polarizacije
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Polarizacija više nije izuzetak, već pravilo: od Vašingtona do
                  Evrope, a zatim i u Srbiji, gde se politička borba pretvara u
                  borbu za legitimitet.
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
