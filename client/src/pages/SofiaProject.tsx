import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  Brain,
  ChevronLeft,
  Eye,
  Network,
  Play,
  Sparkles,
  Volume2,
} from "lucide-react";
import Header from "@/components/Header";

const serif = "'Lora', Georgia, serif";
const sans = "'Source Sans 3', Arial, sans-serif";
const ink = "#07111c";
const paper = "#f3efe5";
const gold = "#d7bd79";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-semibold"
      style={{ fontFamily: sans, color: gold }}
    >
      {children}
    </div>
  );
}

function EarthArt({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-[#02070d] ${compact ? "h-[210px]" : "h-[360px] md:h-[500px]"}`}>
      <div
        className="absolute rounded-full"
        style={{
          width: compact ? "270px" : "min(760px, 74vw)",
          height: compact ? "270px" : "min(760px, 74vw)",
          right: compact ? "-50px" : "-5%",
          bottom: compact ? "-120px" : "-42%",
          background:
            "radial-gradient(circle at 35% 30%, #d9eef8 0 4%, #7fb9d0 8%, #28627f 20%, #0b3451 38%, #071725 58%, #02070d 72%)",
          boxShadow: "0 -9px 38px rgba(112,193,255,0.55), inset 24px 18px 70px rgba(255,255,255,0.14)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 22%, rgba(255,255,255,.9) 0 1px, transparent 1.5px), radial-gradient(circle at 68% 18%, rgba(255,255,255,.75) 0 1px, transparent 1.5px), radial-gradient(circle at 43% 45%, rgba(255,255,255,.55) 0 1px, transparent 1.5px), radial-gradient(circle at 82% 35%, rgba(255,255,255,.65) 0 1px, transparent 1.5px)",
          backgroundSize: "170px 130px, 230px 170px, 190px 150px, 260px 210px",
        }}
      />
      <div
        className="absolute w-28 h-28 md:w-44 md:h-44 rounded-full blur-2xl"
        style={{ right: compact ? "10px" : "9%", top: compact ? "16px" : "10%", background: "rgba(242,182,94,.3)" }}
      />
    </div>
  );
}

function RavennaArt({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${compact ? "h-[210px]" : "h-[340px] md:h-[460px]"}`} style={{ background: "linear-gradient(#0b1420 0%, #263442 42%, #c38555 75%, #e4c795 100%)" }}>
      <div className="absolute left-0 right-0 bottom-0 h-[42%] bg-[#151616]" />
      <div className="absolute left-[7%] bottom-[20%] w-[17%] h-[18%] bg-[#24211e] border-t border-[#514739]" />
      <div className="absolute left-[26%] bottom-[20%] w-[28%] h-[24%] bg-[#1d1d1c]" />
      <div className="absolute left-[57%] bottom-[20%] w-[13%] h-[31%] bg-[#20201f]" />
      <div className="absolute right-[7%] bottom-[20%] w-[21%] h-[22%] bg-[#191a1a]" />
      <div className="absolute left-[61%] bottom-[48%] w-[5%] h-[19%] bg-[#20201f]" />
      <div className="absolute left-[60%] bottom-[66%] w-[7%] h-[3px] bg-[#2a2927]" />
      <div className="absolute right-[21%] top-[16%] w-20 h-20 rounded-full bg-[#f1c276] blur-xl opacity-50" />
      <div className="absolute right-[23%] top-[21%] w-7 h-7 rounded-full bg-[#ffd999]" />
      <div className="absolute left-[11%] bottom-[8%] flex gap-2 opacity-70">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-[3px] bg-[#b49c77]" style={{ height: 20 + i * 5 }} />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
    </div>
  );
}

function AtlasGraphic() {
  const nodes = [
    [160, 32, "KOSMOS"],
    [267, 78, "PRIRODA"],
    [290, 170, "TEHNOLOGIJA"],
    [237, 258, "UMETNOST"],
    [90, 258, "ISTORIJA"],
    [33, 168, "JEZIK"],
    [62, 78, "SVEST"],
  ] as const;

  return (
    <svg viewBox="0 0 320 300" className="w-full max-w-[430px] mx-auto" aria-label="Atlas uma — mreža ideja">
      <circle cx="160" cy="150" r="92" fill="none" stroke="rgba(215,189,121,.23)" />
      <circle cx="160" cy="150" r="59" fill="none" stroke="rgba(215,189,121,.16)" />
      {nodes.map(([x, y]) => (
        <line key={`${x}-${y}`} x1="160" y1="150" x2={x} y2={y} stroke="rgba(255,255,255,.18)" strokeWidth="1" />
      ))}
      <circle cx="160" cy="150" r="38" fill="#0b1d2d" stroke="rgba(124,196,234,.45)" />
      <circle cx="160" cy="150" r="7" fill="#d7bd79" />
      <text x="160" y="155" textAnchor="middle" fill="#f3efe5" fontSize="8" letterSpacing="2.2">ČOVEK</text>
      {nodes.map(([x, y, label]) => (
        <g key={label}>
          <circle cx={x} cy={y} r="4" fill="#f3efe5" />
          <text x={x} y={y < 60 ? y - 11 : y > 230 ? y + 18 : y + 3} textAnchor="middle" fill="#d5d0c6" fontSize="7" letterSpacing="1.2">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function SoundSlot() {
  return (
    <div className="border border-white/15 bg-white/[0.025] px-5 py-4 flex items-center gap-4">
      <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center shrink-0">
        <Play size={16} fill="currentColor" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.26em] text-[#d7bd79]" style={{ fontFamily: sans }}>SOFIA ZVUK</div>
        <div className="mt-1 text-[13px] text-white/70" style={{ fontFamily: sans }}>Originalna kompozicija biće dodata ovde.</div>
      </div>
    </div>
  );
}

function SofiaNav() {
  return (
    <div className="border-b border-white/10 bg-[#050b11] text-[#f3efe5]">
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex items-center justify-between gap-6">
        <Link href="/sofia" className="no-underline">
          <div className="text-[24px] sm:text-[30px] tracking-[0.28em]" style={{ fontFamily: serif }}>SOFIA</div>
          <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.38em] text-white/55" style={{ fontFamily: sans }}>Projekat višeg uma</div>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-[10px] uppercase tracking-[0.22em] text-white/60" style={{ fontFamily: sans }}>
          <a href="#ideje" className="hover:text-white">Ideje</a>
          <a href="#atlas" className="hover:text-white">Atlas uma</a>
          <a href="#zvuk" className="hover:text-white">Zvuk</a>
        </div>
        <div className="italic text-[13px] text-white/70" style={{ fontFamily: serif }}>Misli šire.</div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-[#050b11] text-[#f3efe5]">
      <Header />
      <SofiaNav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-90"><EarthArt /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b11] via-[#050b11]/80 to-transparent" />
        <div className="relative max-w-[1200px] mx-auto px-5 py-20 md:py-28 min-h-[560px] flex items-end">
          <div className="max-w-[650px]">
            <Kicker>Jedna ideja dnevno za širi pogled na svet</Kicker>
            <h1 className="mt-6 text-[52px] sm:text-[72px] md:text-[92px] leading-[0.92] font-normal" style={{ fontFamily: serif }}>
              Znanje počinje čuđenjem.
            </h1>
            <p className="mt-7 max-w-[560px] text-[18px] sm:text-[20px] leading-relaxed text-white/75" style={{ fontFamily: serif }}>
              Ne još jedan beskrajni tok sadržaja. Jedna pažljivo izabrana ideja koja menja udaljenost sa koje posmatramo svet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.23em] text-white/55" style={{ fontFamily: sans }}>
              <span>Nauka</span><span>·</span><span>Istorija</span><span>·</span><span>Svest</span><span>·</span><span>Priroda</span><span>·</span><span>Umetnost</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5">
          {[
            [Eye, "Širi perspektivu"],
            [Network, "Povezuje ideje"],
            [Sparkles, "Podstiče radoznalost"],
            [Brain, "Neguje pažnju"],
            [Volume2, "Vraća osećaj razmere"],
          ].map(([Icon, label]) => {
            const C = Icon as typeof Eye;
            return (
              <div key={String(label)} className="border-r border-white/10 last:border-r-0 px-4 py-6 text-center">
                <C className="mx-auto text-[#d7bd79]" size={20} />
                <div className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: sans }}>{String(label)}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="ideje" className="bg-[#f3efe5] text-[#07111c] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#7b694a]" style={{ fontFamily: sans }}>Najnovija ideja</div>
              <h2 className="mt-3 text-[34px] md:text-[48px] leading-tight" style={{ fontFamily: serif }}>SOFIA / 001</h2>
            </div>
            <div className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-black/45" style={{ fontFamily: sans }}>Kosmos / percepcija / civilizacija</div>
          </div>

          <Link href="/sofia/001" className="grid md:grid-cols-[0.75fr_1.25fr] border border-black/20 no-underline group">
            <div className="p-7 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-[36px] md:text-[52px] leading-[0.98] group-hover:opacity-70 transition" style={{ fontFamily: serif }}>
                  Granice postoje samo kada Zemlju gledamo izbliza.
                </h3>
                <p className="mt-6 text-[17px] leading-relaxed text-black/70" style={{ fontFamily: serif }}>
                  Šta se događa čoveku kada prvi put vidi Zemlju kao celinu — i šta nam ta promena razmere govori o nama samima?
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: sans }}>
                Otvori esej <ArrowRight size={16} />
              </div>
            </div>
            <EarthArt />
          </Link>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Link href="/sofia/002" className="border border-black/15 no-underline group">
              <RavennaArt compact />
              <div className="p-6">
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#7b694a]" style={{ fontFamily: sans }}>SOFIA / 002 · Istorija / vreme</div>
                <h3 className="mt-3 text-[28px] sm:text-[34px] leading-tight group-hover:opacity-70 transition" style={{ fontFamily: serif }}>
                  Niko se nije probudio 5. septembra 476. i otkrio da živi u srednjem veku.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/60" style={{ fontFamily: serif }}>Istorija voli granice. Život ih uglavnom prelazi bez obaveštenja.</p>
              </div>
            </Link>

            <div className="border border-black/15 p-6 md:p-8 flex flex-col justify-between bg-[#ebe5d9]">
              <div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#7b694a]" style={{ fontFamily: sans }}>SOFIA / 003 · U pripremi</div>
                <h3 className="mt-3 text-[30px] sm:text-[38px] leading-tight" style={{ fontFamily: serif }}>Šta možemo da naučimo od tišine?</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-black/60" style={{ fontFamily: serif }}>Ne kao odsustvo sadržaja, nego kao uslov da ga uopšte primetimo.</p>
              </div>
              <div className="mt-8 text-[10px] uppercase tracking-[0.2em] text-black/40" style={{ fontFamily: sans }}>Sledeća ideja</div>
            </div>
          </div>
        </div>
      </section>

      <section id="atlas" className="py-16 md:py-24 border-y border-white/10 bg-[#050b11]">
        <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <Kicker>Atlas uma</Kicker>
            <h2 className="mt-5 text-[44px] md:text-[60px] leading-[1.02]" style={{ fontFamily: serif }}>Znanje nije niz činjenica. To je mreža.</h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/65 max-w-[520px]" style={{ fontFamily: serif }}>
              Svaka SOFIA ideja povezuje se sa drugim idejama: kosmos sa svešću, istorija sa moći, biologija sa vremenom, umetnost sa percepcijom.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[#d7bd79]" style={{ fontFamily: sans }}>Atlas raste sa svakim novim esejem.</p>
          </div>
          <AtlasGraphic />
        </div>
      </section>

      <section id="zvuk" className="py-14 bg-[#07111c]">
        <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div>
            <Kicker>SOFIA zvuk</Kicker>
            <h2 className="mt-4 text-[38px] md:text-[48px]" style={{ fontFamily: serif }}>Muzika nije pozadina. Ona je deo dramaturgije mišljenja.</h2>
          </div>
          <SoundSlot />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 bg-[#050b11]">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col sm:flex-row gap-4 justify-between text-[10px] uppercase tracking-[0.22em] text-white/40" style={{ fontFamily: sans }}>
          <span>SOFIA · Projekat višeg uma</span>
          <span>Manje buke. Više misli.</span>
          <span>Novi talas</span>
        </div>
      </footer>
    </div>
  );
}

const overviewParagraphs = [
  "Postoji visina sa koje nestaju gotovo sve stvari zbog kojih se ljudi na Zemlji sukobljavaju. Ne zato što su rešene, već zato što se više ne vide.",
  "Mnogi astronauti koji su posmatrali Zemlju iz svemira opisivali su snažnu promenu perspektive poznatu kao overview effect. Iz orbite nema iscrtanih država ni političkih linija. Postoji jedna osvetljena planeta, duboka tama oko nje i iznenađujuće tanak sloj atmosfere koji čuva život.",
  "NASA je 2025. ponovo prikupila svedočenja astronauta o tom iskustvu. Christina Koch opisuje pogled u kojem granice, religijske i političke podele nestaju, dok ostaje samo Zemlja i vrlo tanak omotač atmosfere. Termin overview effect skovao je Frank White 1987. godine.",
  "To ne znači da su države, institucije i granice izmišljotine bez posledica. One su stvarni ljudski sistemi. Ali priroda ih ne čita: reka prelazi granicu bez pasoša, vazduh ne poznaje suverenitet, klima ne poštuje političku kartu.",
  "Možda je zato pogled iz orbite toliko moćan. On ne otkriva novu planetu. Otkriva koliko naše zaključke određuje udaljenost sa koje nešto gledamo.",
];

const romeParagraphs = [
  "Zamislite jutro posle svrgavanja mladog cara Romula Avgustula. U udžbenicima će 476. godina kasnije postati zgodna granica: kraj Zapadnog rimskog carstva i početak nečeg drugog. Ali čovek koji je tog jutra otvorio radionicu nije dobio obaveštenje da je ušao u novu epohu.",
  "Nije se promenila boja neba. Putevi nisu nestali. Ljudi su trgovali, molili se, svađali, dugovali novac i pokušavali da prežive još jedan dan. Istorijske epohe imaju početke. Život ih uglavnom nema.",
  "Savremeni istoričari zato sve opreznije govore o 476. kao o čistom rezu. Cambridgeov pregled kasne antike opisuje svrgavanje Romula Avgustula kao događaj koji nije imao traumatičan odjek u savremenoj svesti. Zapad se menjao dugo pre tog datuma i nastavio da se menja dugo posle njega.",
  "Čak ni pitanje poslednjeg zapadnorimskog cara nije potpuno uredno: Julije Nepot je polagao pravo na carsku titulu do 480. godine. A istočno rimsko carstvo nastavilo je da postoji vekovima. Ljudi koje danas zovemo Vizantincima svoju su državu i sebe prvenstveno razumeli kao rimske.",
  "Naše epohe su zato korisne mape, ali mapa nije teritorija. Kada kažemo antika, srednji vek ili moderno doba, pravimo mentalne police. Svet sam nema obavezu da stane u njih.",
  "Možda je to najvažnija lekcija 476. godine: velike promene često postaju očigledne tek kada ih gledamo iz budućnosti. Dok se događaju, izgledaju kao niz sitnih pomeranja bez zajedničkog imena.",
];

function EssayPage({
  number,
  title,
  deck,
  tags,
  art,
  paragraphs,
  sourceLinks,
  moment,
  nextHref,
  nextLabel,
}: {
  number: string;
  title: string;
  deck: string;
  tags: string;
  art: React.ReactNode;
  paragraphs: string[];
  sourceLinks: { label: string; href: string }[];
  moment: string;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f3efe5] text-[#07111c]">
      <Header />
      <SofiaNav />

      <main>
        <section className="bg-[#050b11] text-[#f3efe5]">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.86fr_1.14fr]">
            <div className="px-5 py-14 md:py-20 lg:py-24 lg:pr-14 flex flex-col justify-between">
              <div>
                <Link href="/sofia" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/55 mb-10" style={{ fontFamily: sans }}>
                  <ChevronLeft size={14} /> SOFIA
                </Link>
                <Kicker>SOFIA / {number}</Kicker>
                <h1 className="mt-6 text-[46px] sm:text-[62px] lg:text-[72px] leading-[0.97]" style={{ fontFamily: serif }}>{title}</h1>
                <p className="mt-7 text-[18px] sm:text-[21px] leading-relaxed text-white/70 max-w-[620px]" style={{ fontFamily: serif }}>{deck}</p>
              </div>
              <div className="mt-10">
                <SoundSlot />
                <div className="mt-5 text-[9px] uppercase tracking-[0.22em] text-white/45" style={{ fontFamily: sans }}>{tags}</div>
              </div>
            </div>
            <div>{art}</div>
          </div>
        </section>

        <article className="max-w-[820px] mx-auto px-5 py-14 md:py-20">
          {paragraphs.map((p, i) => (
            <p key={i} className={`${i === 0 ? "text-[27px] md:text-[34px] leading-[1.35]" : "text-[18px] md:text-[20px] leading-[1.75]"} ${i ? "mt-8" : ""}`} style={{ fontFamily: serif }}>
              {p}
            </p>
          ))}

          <div className="my-14 border-y border-black/15 py-10 text-center">
            <div className="text-[9px] uppercase tracking-[0.28em] text-[#7b694a]" style={{ fontFamily: sans }}>SOFIA MOMENT</div>
            <p className="mt-5 text-[30px] md:text-[40px] leading-snug" style={{ fontFamily: serif }}>{moment}</p>
          </div>

          <div className="border-t border-black/15 pt-8">
            <div className="text-[9px] uppercase tracking-[0.25em] text-black/45 mb-4" style={{ fontFamily: sans }}>Izvori i dalje čitanje</div>
            <div className="flex flex-col gap-3">
              {sourceLinks.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] underline underline-offset-4" style={{ fontFamily: sans }}>
                  {source.label} <ArrowRight size={14} />
                </a>
              ))}
            </div>
          </div>

          {nextHref && nextLabel && (
            <Link href={nextHref} className="mt-14 border border-black/20 p-6 flex items-center justify-between gap-6 no-underline group">
              <div>
                <div className="text-[9px] uppercase tracking-[0.24em] text-black/45" style={{ fontFamily: sans }}>Nastavi misao</div>
                <div className="mt-2 text-[23px] sm:text-[28px] leading-tight group-hover:opacity-70" style={{ fontFamily: serif }}>{nextLabel}</div>
              </div>
              <ArrowRight className="shrink-0" />
            </Link>
          )}
        </article>
      </main>
    </div>
  );
}

function Essay001() {
  return (
    <EssayPage
      number="001"
      title="Granice postoje samo kada Zemlju gledamo izbliza."
      deck="Šta se događa čoveku kada prvi put vidi Zemlju kao celinu — i zašto promena razmere menja način na koji razumemo sebe, druge i planetu koju delimo?"
      tags="Kosmos / percepcija / civilizacija / čitanje 4 min"
      art={<EarthArt />}
      paragraphs={overviewParagraphs}
      sourceLinks={[
        {
          label: "NASA — The Overview Effect: Astronaut Perspectives from 25 Years in Low Earth Orbit",
          href: "https://www.nasa.gov/centers-and-facilities/johnson/the-overview-effect-astronaut-perspectives-from-25-years-in-low-earth-orbit/",
        },
        {
          label: "NASA — Houston, We Have a Podcast: The Overview Effect",
          href: "https://www.nasa.gov/podcasts/houston-we-have-a-podcast/the-overview-effect/",
        },
      ]}
      moment="Koliko stvari koje danas smatramo nepromenljivim postoje samo zato što smo im preblizu?"
      nextHref="/sofia/002"
      nextLabel="Niko se nije probudio 5. septembra 476. i otkrio da živi u srednjem veku."
    />
  );
}

function Essay002() {
  return (
    <EssayPage
      number="002"
      title="Niko se nije probudio 5. septembra 476. i otkrio da živi u srednjem veku."
      deck="Istorija voli granice. Život ih uglavnom prelazi bez obaveštenja."
      tags="Istorija / vreme / civilizacija / čitanje 5 min"
      art={<RavennaArt />}
      paragraphs={romeParagraphs}
      sourceLinks={[
        {
          label: "Cambridge — kasna antika i 'noiseless' pad Zapada",
          href: "https://www.cambridge.org/core/books/abs/origins-of-the-european-legal-order/historical-and-institutional-profile-of-the-roman-empire-in-the-fourth-and-fifth-centuries/E52EC82A4F486A2B1015806D406C7E29",
        },
        {
          label: "Cambridge — Romans of the East, Anthony Kaldellis",
          href: "https://www.cambridge.org/core/books/abs/hellenism-in-byzantium/world-a-city-romans-of-the-east/5148D49F7A4C57CA40229C320674E51A",
        },
      ]}
      moment="Koja promena u svetu oko nas možda već traje, a još joj nismo dali ime?"
      nextHref="/sofia"
      nextLabel="Vrati se u Atlas uma i izaberi novu udaljenost sa koje ćeš gledati svet."
    />
  );
}

export default function SofiaProject() {
  const [location] = useLocation();

  if (location === "/sofia/001") return <Essay001 />;
  if (location === "/sofia/002") return <Essay002 />;

  return <Landing />;
}
