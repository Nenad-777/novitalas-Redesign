/*
 * DESIGN: "Diplomatska Klasika" v2  -  Foreign Affairs-inspired homepage
 * Update:
 * - NEW: Udarni blok Ormuski moreuz (Mart 2026)
 * - Main feature: Izrael–Iran 2026 (Februar 2026)
 * - Sidebar: Srbija + Naša planeta (ALMA) + Iran protesti
 * - Removed: Obaveštajni izvori block from homepage
 * - Removed: bottom "rubrike" list (no sub-menu at bottom)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "/hero/naslovna-novitalas.jpg",

  // ✅ NOVA GLAVNA VEST — Akademija umetnosti Novi Sad (18. mart 2026)
  akademijaNovisad: "/news/akademija-novisad.jpg",

  // ✅ NOVA GLAVNA VEST — Svetska kriza Ormuski moreuz (16. mart 2026)
  brodoviKriza: "/news/brodovi-kriza.jpg",

  // ✅ OSCAR — Ko je dobio Oskara? (Naša planeta, 16. mart 2026)
  oscarWorld: "/news/oscar-world.jpg",

  // ✅ NOVA GLAVNA VEST — Biennale Rusija (13. mart 2026)
  biennaleRusija: "/news/biennale-venice.jpg",

  // ✅ NOVA GLAVNA VEST — Izbeglice Iran UN (11. mart 2026)
  refugeesIranUn: "/refugees-iran-un.jpg",

  ormuz: "/ormuz.jpg",
  russiaChinaShadows: "/russia-china-shadows.jpg",

  ukraine: "/geopolitika-ukrajina.jpg",
  iranRiots: "/tehran-riots.jpg",

  // ✅ GLAVNA VEST slika
  izraelIran: "/f22-israel-iran-2026.jpg",

  // ⬇️ promeni na TAČAN naziv fajla koji si ubacio u /public
  alma: "/alma-mlecni-put.jpg",

  snovi: "/snovi-usmeravanje-snova.jpg",

  // ✅ AI vest svest (Naša planeta, 10. mart 2026)
  aiVestSvest: "/ai-supercomputer-data-center.jpg",

  // ✅ Kubrick (Naša planeta, 12. mart 2026)
  kubrick: "/kubrick.jpg",

  // ✅ SRBIJA thumbnail sada ide na novu vest
  srbijaThumb: "/news/zvucni-top.jpg",

  // ✅ Kosovo — Tiho gašenje srpskih univerziteta
  kosovAmfiteatar: "/news/kosovo-amfiteatar.jpg",

  // ✅ KINA — špijunski brodovi (Obaveštajni izvori, 9. mart 2026)
  kinaSpyBrod: "/images/obavestajni-izvori/kina-spy-ship.jpg",

  // ✅ CIA — regrutovanje kineskih vojnih oficira (Obaveštajni izvori, 14. mart 2026)
  ciaChina: "/news/cia-china.jpg",

  // ✅ Kina moždani implantat (Naša planeta, 14. mart 2026)
  chinaBrain: "/news/china-brain.jpg",
};

// Archive articles: February 2026 onward, sorted newest to oldest
const ARCHIVE_ARTICLES = [
  // — MART 2026 —
  {
    date: "18. mart 2026.",
    section: "Srbija",
    href: "/srbija/akademija-novisad",
    title:
      "Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora",
    description:
      "Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice.",
  },
  {
    date: "16. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/svetska-kriza-sve-ozbiljnija",
    title: "SVETSKA KRIZA SVE OZBILJNIJA",
    description: "Zašto je Ormuski moreuz tako važan",
  },
  {
    date: "16. mart 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/ko-je-dobio-oskara",
    title: "Ko je dobio Oskara?",
    description:
      "Dok svet tone u ratove, razaranja i očigledan pad civilizacijskih normi, ceremonija Oskara nastavlja da blista.",
  },
  {
    date: "15. mart 2026.",
    section: "Srbija",
    href: "/srbija/ko-je-pucao-u-srbiju",
    title: "Ko je pucao u Srbiju?",
    description:
      "Događaji od 15. marta i dalje predstavljaju jedno od najtežih otvorenih pitanja savremene srpske politike.",
  },
  {
    date: "14. mart 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/kina-mozgani-implantat",
    title: "Kina odobrila prvi moždani implantat za komercijalnu upotrebu",
    description:
      "Kineske vlasti odobrile su prvi moždani implantat namenjen komercijalnoj upotrebi, čime je napravljen značajan korak u razvoju tehnologije.",
  },
  {
    date: "14. mart 2026.",
    section: "Obaveštajni izvori",
    href: "/obavestajni-izvori/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira",
    title: "CIA pokrenula kampanju za regrutovanje kineskih vojnih oficira",
    description:
      "Američka obaveštajna agencija objavila video na kineskom jeziku kojim cilja potencijalne izvore unutar kineske vojske i državnog aparata.",
  },
  {
    date: "13. mart 2026.",
    section: "Srbija",
    href: "/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu",
    title: "Tiho gašenje srpskih univerziteta na Kosovu",
    description:
      "Hiljade studenata i profesora mogle bi ostati bez univerziteta dok administrativne mere postepeno onemogućavaju rad srpskih fakulteta.",
  },
  {
    date: "13. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/biennale-rusija",
    title:
      "EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije",
    description:
      "Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak.",
  },
  {
    date: "12. mart 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/kubrick",
    title: "Stenli Kjubrik i tajna filma koji ne stari",
    description:
      "Dok se svet ponovo okreće ceremoniji Oskara, jedan reditelj i dalje stoji izvan logike nagrada i podseća nas da film može biti umetnost mišljenja.",
  },
  {
    date: "11. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/refugees-iran-un",
    title:
      "Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica",
    description:
      "Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.",
  },
  {
    date: "11. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/rezerve-nafte",
    title: "IEA pokreće najveće oslobađanje naftnih rezervi u istoriji",
    description:
      "Države članice Međunarodne agencije za energiju puštaju 400 miliona barela nafte iz strateških rezervi kako bi ublažile globalni energetski šok.",
  },
  {
    date: "10. mart 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/ai-vest-svest",
    title: "Da li je veštačka inteligencija već svesna?",
    description:
      "Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti.",
  },
  {
    date: "10. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/sad-specijalna-operacija-iran-uranijum",
    title:
      "SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma",
    description:
      "Američki bezbednosni krugovi razmatraju mogućnost ograničene vojne operacije čiji bi cilj bio preuzimanje iranskih zaliha visoko obogaćenog uranijuma.",
  },
  {
    date: "9. mart 2026.",
    section: "Obaveštajni izvori",
    href: "/obavestajni-izvori/kina-spy-brodovi",
    title:
      "Kina prati američke snage na Bliskom istoku uz pomoć AI i špijunskih brodova",
    description:
      "Nova analiza zapadnih bezbednosnih službi otkriva kineske nadzorne operacije u regionu.",
  },
  {
    date: "9. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/francuska-odbrana-ormuza",
    title: "Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza",
    description:
      "Francuski predsednik Makron predlaže formiranje odbrambene pomorske misije za zaštitu slobodne plovidbe kroz Ormuski moreuz.",
  },
  {
    date: "8. mart 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/naucnici-poceli-da-usmeravaju-snove",
    title:
      "Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije",
    description:
      "Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći mozak da tokom sna kreativnije rešava probleme.",
  },
  {
    date: "8. mart 2026.",
    section: "Geopolitika",
    href: "/geopolitika/velike-sile-i-kriza-u-iranu",
    title: "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    description: "Između podrške Teheranu i izbegavanja velikog rata.",
  },
  {
    date: "6. mart 2026.",
    section: "Srbija",
    href: "/srbija/selo-ne-prasta-poraz-vest",
    title: "Selo ne prašta poraz",
    description:
      "Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta bez dogovora sa državom, što otvara ozbiljno političko pitanje.",
  },
  // — FEBRUAR 2026 —
  {
    date: "28. februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/sukobi-izrael-iran-2026",
    title:
      "Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti",
    description:
      "Eskalacija između Izraela i Irana 2026. uvodi region u novu fazu otvorenih vojnih sukoba i diplomatske nestabilnosti.",
  },
  {
    date: "26. februar 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/alma-skriveno-jezgro",
    title: "Najveća ALMA mapa ikad: otkriveno \u201Eskriveno jezgro\u201C Mlečnog puta",
    description:
      "Radio-teleskop ALMA napravio je najtačniju mapu Centralne molekularne zone Mlečnog puta, otkrivajući njegovo skriveno jezgro.",
  },
  {
    date: "25. februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/iran-protesti-2026",
    title:
      "IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba",
    description:
      "Novi talas nemira na iranskim univerzitetima. BBC je potvrdio autentičnost snimaka nasilnih sukoba studenata sa bezbednosnim snagama.",
  },
  {
    date: "24. februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/ukrajina-cetiri-godine-rata",
    title:
      "Četiri godine rata u Ukrajini: sankcije jačaju, evropsko jedinstvo slabi",
    description:
      "Analiza stanja posle četiri godine rata u Ukrajini, sa akcentom na ekonomskim sankcijama i koheziji evropskih saveznika.",
  },
  {
    date: "21. februar 2026.",
    section: "Srbija",
    href: "/srbija/mars-za-pravosudje",
    title:
      "Marš za pravosuđe: kada institucije postanu centralno političko pitanje",
    description:
      "Protest koji je naterao institucije da postanu centralno pitanje srpske politike i šta to znači za budućnost demokratije.",
  },
  {
    date: "Februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/nova-bezbednosna-arhitektura",
    title:
      "Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?",
    description:
      "Kako Evropa odgovara na nove bezbednosne izazove i da li se formira kontinent sposoban za odlučniju odbrambenu politiku.",
  },
  {
    date: "Februar 2026.",
    section: "Obaveštajni izvori",
    href: "/obavestajni-izvori/rat-senki",
    title:
      "Rat senki: povratak obaveštajnih službi u središte geopolitike",
    description:
      "U savremenim međunarodnim odnosima rat se retko objavljuje, ali se gotovo stalno vodi. Ključne borbe odvijaju se izvan frontova.",
  },
];

// Simple fade-in on scroll hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden h-[22vh] md:h-[28vh] hero-section"
        style={{
          backgroundImage: `url(${IMAGES.hero}), linear-gradient(to bottom, var(--nt-hero-bg), var(--nt-hero-bg-end))`,
          backgroundColor: "var(--nt-hero-bg)",
        }}
      >
        {/* Dark-mode image dimming overlay */}
        {isDark && (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(13,17,23,0.35)" }}
          />
        )}

        {/* Slogan – horizontally centered, near the bottom */}
        <div className="absolute inset-x-0 bottom-0 pb-4 md:pb-6 flex justify-center">
          <p
            className="hero-tagline text-[18px] md:text-[26px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: isDark ? "#e0ddd5" : "#1a1a1a",
              textShadow: isDark
                ? "0 1px 2px rgba(0,0,0,0.3)"
                : "0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            Vaš prozor u svet
          </p>
        </div>
      </section>

      {/* Main */}
      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          {/* ======================
              MART 2026
             ====================== */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Mart 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>
          </FadeIn>

          {/* Editorial two-column layout: main story + four supporting stories */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 mb-10">
            {/* LEFT: Main story — AKADEMIJA NOVISAD */}
            <FadeIn>
              <article>
                <span className="kicker">Srbija</span>

                <h1
                  className="mt-2 mb-3 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  <Link
                    href="/srbija/akademija-novisad"
                    className="headline-link"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora
                  </Link>
                </h1>

                <p
                  className="text-[18px] md:text-[19px] leading-[1.6] mb-5"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice.
                </p>

                <figure className="mb-0">
                  <Link
                    href="/srbija/akademija-novisad"
                    className="block no-underline"
                  >
                    <div
                      className="border"
                      style={{
                        borderColor: isDark ? "#2a2a2e" : "#eee",
                        backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                      }}
                    >
                      <img
                        src={IMAGES.akademijaNovisad}
                        alt="Akademija umetnosti u Novom Sadu — studenti na ulici"
                        className="w-full h-[280px] md:h-[380px] object-cover object-center block"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>
                  </Link>
                </figure>
              </article>
            </FadeIn>

            {/* RIGHT: Four supporting articles */}
            <aside>
              <FadeIn>
                <div className="flex flex-col">
                  {/* Svetska kriza sve ozbiljnija */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Geopolitika</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/geopolitika/svetska-kriza-sve-ozbiljnija"
                            className="headline-link"
                          >
                            SVETSKA KRIZA SVE OZBILJNIJA
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Zašto je Ormuski moreuz tako važan
                        </p>
                      </div>

                      <img
                        src={IMAGES.brodoviKriza}
                        alt="Brodovi u Ormuskom moreuzu — globalna energetska kriza"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Ko je dobio Oskara? */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Naša planeta</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/nasa-planeta/ko-je-dobio-oskara"
                            className="headline-link"
                          >
                            Ko je dobio Oskara?
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Dok svet tone u ratove, razaranja i očigledan pad civilizacijskih normi, ceremonija Oskara nastavlja da blista.
                        </p>
                      </div>

                      <img
                        src={IMAGES.oscarWorld}
                        alt="Ceremonija dodele Oskara"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Tiho gašenje srpskih univerziteta na Kosovu */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Srbija</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu"
                            className="headline-link"
                          >
                            Tiho gašenje srpskih univerziteta na Kosovu
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Hiljade studenata i profesora mogle bi ostati bez univerziteta dok administrativne mere postepeno onemogućavaju rad srpskih fakulteta u Kosovskoj Mitrovici.
                        </p>
                      </div>

                      <img
                        src={IMAGES.kosovAmfiteatar}
                        alt="Tiho gašenje srpskih univerziteta na Kosovu"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Ko je pucao u Srbiju? */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Srbija</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/srbija/ko-je-pucao-u-srbiju"
                            className="headline-link"
                          >
                            Ko je pucao u Srbiju?
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Događaji od 15. marta i dalje predstavljaju jedno od najtežih otvorenih pitanja savremene srpske politike.
                        </p>
                      </div>

                      <img
                        src={IMAGES.srbijaThumb}
                        alt="Zvučni top, akustično oružje upotrebljeno na protestu u Beogradu"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* CTA */}
          <FadeIn className="mt-16">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ backgroundColor: isDark ? "#0d0d0f" : "#1a2a3a" }}
            >
              <div className="py-16 px-8 text-center">
                <p
                  className="cta-title text-white/90 text-[28px] md:text-[34px] mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  Budite informisani.
                </p>

                <p
                  className="text-white/70 text-[16px] max-w-[560px] mx-auto mb-6"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                  Pratite Novi talas za ekskluzivne analize iz oblasti geopolitike,
                  bezbednosti — i od sada: Naše planete.
                </p>

                <span
                  className="inline-block bg-[#8B0000] text-white text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-3 hover:bg-[#6B0000] transition-colors duration-200"
                  style={{
                    fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  }}
                >
                  Pratite nas
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ======================
              IZDANJE — FEBRUAR 2026
             ====================== */}
          <FadeIn className="mt-20 mb-4">
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-10">
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Izdanje &mdash; Februar 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>

            {/* Cover image — klikabilna, vodi na arhivsku stranicu februara 2026 */}
            <figure className="mb-12">
              <Link href="/arhiva/februar-2026" className="block overflow-hidden" style={{ borderRadius: "3px" }}>
                <img
                  src="/issue/arhiv-februar.jpg"
                  alt="Izdanje — Februar 2026"
                  className="w-full h-auto block transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                  style={{
                    borderRadius: "3px",
                    boxShadow: isDark
                      ? "0 4px 24px rgba(0,0,0,0.45)"
                      : "0 4px 20px rgba(0,0,0,0.10)",
                    cursor: "pointer",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </figure>

            {/* Archive list */}
            <div>
              {ARCHIVE_ARTICLES.map((article, i) => (
                <div key={i}>
                  <div className="py-5 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 items-start">
                    {/* Left: date + section */}
                    <div className="flex md:flex-col gap-2 md:gap-1 flex-shrink-0">
                      <span
                        className="text-[11px] font-bold tracking-[0.12em] uppercase"
                        style={{
                          fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                          color: isDark ? "#d9bf7a" : "#8B0000",
                        }}
                      >
                        {article.section}
                      </span>
                      <span
                        className="text-[11px] tracking-[0.06em]"
                        style={{
                          fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                          color: isDark ? "#5a5855" : "#aaa",
                        }}
                      >
                        {article.date}
                      </span>
                    </div>

                    {/* Right: title + description */}
                    <div>
                      <h3
                        className="text-[17px] md:text-[19px] font-bold leading-[1.3] mb-1"
                        style={{
                          fontFamily: "'Lora', Georgia, serif",
                          color: isDark ? "#e0ddd5" : "#111",
                        }}
                      >
                        <Link
                          href={article.href}
                          className="headline-link"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                          }}
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <p
                        className="text-[14px] leading-[1.55]"
                        style={{
                          fontFamily: "'Lora', Georgia, serif",
                          color: isDark ? "#7a7872" : "#666",
                        }}
                      >
                        {article.description}
                      </p>
                    </div>
                  </div>
                  {i < ARCHIVE_ARTICLES.length - 1 && (
                    <hr className="editorial-divider" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
