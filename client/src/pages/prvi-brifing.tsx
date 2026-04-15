import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import SeoMeta from "@/components/SeoMeta";
import { useTheme } from "@/contexts/ThemeContext";

const BRIEFING_BLOCKS = [
  {
    subtitle: "Pomorski koridor pod konstantnim pritiskom",
    paragraphs: [
      "Satelitski i komercijalni podaci potvrđuju usporavanje prolaza kroz ključne tačke Persijskog zaliva, uz povećan broj privremenih zaustavljanja tankera i konvoja. Pritisak na osiguranje transporta podiže operativne troškove i menja rute snabdevanja u realnom vremenu.",
      "Regionalni akteri trenutno izbegavaju otvorenu konfrontaciju, ali nastavljaju sa merama ograničenog odvraćanja i demonstracije sile.",
    ],
    signal:
      "Signal: Svako dodatno usporavanje saobraćaja brzo se preliva na evropsko tržište energenata.",
  },
  {
    subtitle: "Digitalni nadzor postaje prva linija procene",
    paragraphs: [
      "U poslednja 24 časa zabeležen je rast koordinisanih sajber izviđačkih aktivnosti usmerenih ka energetskim i logističkim sistemima. Fokus je na mapiranju ranjivosti, a ne na javno vidljivim prekidima, što ukazuje na pripremnu fazu operacija.",
      "Paralelno, pojačan je informacioni šum kroz ciljane narative koji otežavaju razlikovanje potvrđenih činjenica od namernih dezinformacija.",
    ],
    signal:
      "Signal: Ko kontroliše tok operativnih podataka, kontroliše i tempo političkog odgovora.",
  },
  {
    subtitle: "Diplomatski kanali aktivni, ali bez stabilne garancije",
    paragraphs: [
      "Više posredničkih kanala ostaje otvoreno i trenutno sprečava naglu eskalaciju, ali nijedan mehanizam još ne nudi dugoročnu predvidljivost. Pregovarački okvir je funkcionalan samo dok obe strane procenjuju da je cena direktnog sukoba viša od cene zategnutosti.",
      "Zbog toga se region nalazi u zoni produženog rizika: nema formalnog prekida procesa, ali nema ni pouzdane deeskalacije.",
    ],
    signal:
      "Signal: Krhka ravnoteža opstaje dok god incidenti ostaju lokalizovani i kratkog dometa.",
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
            izviđanju i diplomatskom manevrisanju. Prostor između mira i otvorenog
            sukoba ostaje najvažnije polje procene.
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
