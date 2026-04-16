import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import SeoMeta from "@/components/SeoMeta";
import { useTheme } from "@/contexts/ThemeContext";

const BRIEFING_BLOCKS = [
  {
    subtitle: "Pomorski koridor pod konstantnim pritiskom",
    paragraphs: [
      "Prema podacima UKMTO i komercijalnih platformi za praćenje brodova, u južnom delu Crvenog mora i prilazima Persijskom zalivu zabeleženo je više privremenih usporavanja i promena kursa tankera u poslednja 24–48 časa. Istovremeno, premije osiguranja za rizične rute ostaju povišene, što direktno utiče na troškove transporta energenata.",
      "Regionalni akteri izbegavaju direktnu konfrontaciju, ali nastavljaju sa merama ograničenog odvraćanja kroz prisustvo i kontrolu ključnih tačaka prolaza.",
    ],
    signal:
      "Svako dodatno usporavanje saobraćaja brzo se prenosi na evropsko tržište nafte i gasa.",
  },
  {
    subtitle: "Digitalni nadzor usmeren na energetsku infrastrukturu",
    paragraphs: [
      "Evropske i američke sajber bezbednosne agencije, uključujući ENISA i CISA, upozorile su na aktivnosti usmerene ka mrežnim uređajima u energetskom i logističkom sektoru, posebno na edge rutere i VPN sisteme. Napadi uključuju pokušaje DNS manipulacije i prikupljanje pristupnih podataka.",
      "Fokus ovih operacija je na mapiranju sistema i identifikaciji ranjivosti, bez izazivanja vidljivih prekida u radu.",
    ],
    signal:
      "Kontrola pristupa mrežnoj infrastrukturi omogućava uticaj na tok informacija i vreme reakcije institucija.",
  },
  {
    subtitle: "Diplomatski kanali aktivni bez operativnog ishoda",
    paragraphs: [
      "Posrednički kanali preko regionalnih aktera, uključujući Oman i Katar, ostaju otvoreni, ali bez formalnog pomaka ka stabilnom dogovoru. Pregovori funkcionišu na nivou održavanja komunikacije, bez konkretnih mehanizama deeskalacije.",
      "Istovremeno, prisustvo vojnih i bezbednosnih struktura u regionu ostaje nepromenjeno, što ukazuje na nastavak politike kontrolisanog pritiska.",
    ],
    signal:
      "Ravnoteža se održava dok incidenti ostaju ograničeni i bez direktnog širenja sukoba.",
  },
];

export default function PrviBrifing() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <SeoMeta
        path="/obavestajni-izvori/prvi-brifing"
        title="OBAVEŠTAJNI BRIFING | 15. april 2026."
        description="Sažeti obaveštajni pregled: bezbednosni pritisci u pomorskim koridorima, digitalni nadzor i diplomatski balans u regionu Persijskog zaliva."
        imageSrc="/news/security-world.jpg"
      />
      <Header />

      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <article className="max-w-[980px] mx-auto px-5">
          <span className="kicker">Obaveštajni izvori</span>

          <div
            className="mt-4 pt-4"
            style={{ borderTop: `1px solid ${isDark ? "#40444d" : "#d9d9d9"}` }}
          >
            <h1
              className="text-[30px] md:text-[44px] leading-[1.15]"
              style={{
                fontFamily: "Athelas, 'Iowan Old Style', 'Palatino Linotype', serif",
                letterSpacing: "0.03em",
                color: isDark ? "#e6e1d8" : "#111",
              }}
            >
              OBAVEŠTAJNI BRIFING | 15. april 2026.
            </h1>
          </div>

          <ShareButton />

          <div className="mt-6 w-full overflow-hidden aspect-video relative">
            <img
              src="/news/security-world.jpg"
              alt="Globalna bezbednosna mapa i svet pod obaveštajnim nadzorom"
              className="w-full h-full object-cover object-center block"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.15) 100%)",
              }}
            />
          </div>

          <p
            className="mt-8 max-w-[640px] text-[18px] md:text-[19px]"
            style={{
              fontFamily:
                "Athelas, 'Iowan Old Style', 'Palatino Linotype', serif",
              lineHeight: 1.85,
              color: isDark ? "#cac4b8" : "#2a2a2a",
            }}
          >
            Pomorski i bezbednosni tokovi u Persijskom zalivu pokazuju pomake
            koji direktno utiču na regionalnu ravnotežu. Fokus je na signalima
            koji prethode vidljivim krizama: logističkim usporenjima, digitalnom
            izviđanju i diplomatskom manevrisanju.
          </p>

          <div className="mt-14 space-y-10 md:space-y-12">
            {BRIEFING_BLOCKS.map((block) => (
              <section
                key={block.subtitle}
                className={`pl-5 py-2 transition-colors duration-200 ${
                  isDark
                    ? "md:hover:bg-[rgba(214,230,245,0.06)]"
                    : "md:hover:bg-[rgba(214,230,245,0.28)]"
                }`}
                style={{
                  borderLeft: "2px solid #D6E6F5",
                  backgroundColor: "transparent",
                }}
              >
                <h2
                  className="mb-4 text-[24px] md:text-[28px] leading-[1.2]"
                  style={{
                    fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                    color: isDark ? "#e2ddd3" : "#151515",
                  }}
                >
                  {block.subtitle}
                </h2>

                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-5 text-[17px] md:text-[18px] leading-[1.85]"
                    style={{
                      fontFamily:
                        "Athelas, 'Iowan Old Style', 'Palatino Linotype', serif",
                      color: isDark ? "#c7c1b6" : "#2f2f2f",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                <p
                  className="flex items-start gap-2 text-[16px] md:text-[17px]"
                  style={{
                    fontFamily:
                      "Athelas, 'Iowan Old Style', 'Palatino Linotype', serif",
                    color: isDark ? "#d9d3c8" : "#232323",
                    lineHeight: 1.7,
                  }}
                >
                  <span className="leading-[1.7] shrink-0">•</span>
                  <span>{block.signal}</span>
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/obavestajni-izvori"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              ← Nazad na Obaveštajni izvori
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
