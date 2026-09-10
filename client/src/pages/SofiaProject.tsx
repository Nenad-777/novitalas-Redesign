import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const serif = "'Lora', Georgia, serif";
const sans = "'Source Sans 3', Arial, sans-serif";

const COPY = {
  sr: {
    back: "Novi Talas",
    mission: "Projekat proširenja ljudske svesti",
    formula: "Art × Science × Philosophy × AI",
    heroLine: "Može li čovek naučiti da vidi više stvarnosti?",
    heroText:
      "SOFIA ne počinje odgovorom. Počinje promenom udaljenosti sa koje posmatraš ono što već poznaješ.",
    enter: "UĐI U PRVO ISKUSTVO",
    pilot: "PILOT / 001",
    earth: "EARTH",
    time: "oko 6 min",
    introTitle: "Ista planeta. Druga udaljenost.",
    introBody:
      "Političke granice mogu biti pravno presudne, a ipak nisu fizički iscrtane na površini Zemlje. Menjaj razmeru i prati šta se menja: planeta, mapa — ili tvoj način gledanja.",
    scaleLabel: "PROMENI RAZMERU",
    questionKicker: "SOFIA / PITANJE",
    question: "Na kojoj udaljenosti granica postaje stvarna?",
    questionNote:
      "Ne postoji jedan tačan odgovor. Izaberi okvir koji ti je trenutno najbliži.",
    choiceMap: "Na mapi",
    choiceCheckpoint: "Na prelazu",
    choiceInstitution: "U institucijama",
    choiceMemory: "U sećanju",
    choiceOther: "Drugačije",
    write: "Napiši jednu rečenicu",
    privacy: "Ovaj zapis ostaje samo u ovoj otvorenoj stranici i ne šalje se nigde.",
    continue: "PROMENI OKVIR",
    framesTitle: "Jedna granica može postojati na više načina.",
    physical: "FIZIČKI",
    physicalText: "Reljef, reka ili zid mogu biti vidljivi. Politička linija sama po sebi ne mora biti.",
    legal: "PRAVNO",
    legalText: "Linija može menjati prava, dokumenta, nadležnost i kretanje čak i kada je ne vidiš.",
    lived: "DOŽIVLJENO",
    livedText: "Za nekoga granica može značiti dom, razdvajanje, strah, sigurnost ili pripadanje.",
    frameNote:
      "SOFIA ne bira koji je od ovih okvira 'viši'. Pokušava da ih učini istovremeno vidljivim.",
    returnTitle: "Vrati se na početak.",
    returnBody:
      "Zemlja se nije promenila. Pitanje je da li se promenila udaljenost sa koje je sada posmatraš.",
    finalQuestion: "Šta sada vidiš što na početku nisi primećivao?",
    restart: "PONOVI ISKUSTVO",
    exit: "IZAĐI NA NOVI TALAS",
    claim: "SOFIA / pilot iskustvo — bez tvrdnje da je promena svesti dokazana.",
  },
  en: {
    back: "Novi Talas",
    mission: "A project to expand human consciousness",
    formula: "Art × Science × Philosophy × AI",
    heroLine: "Can a human being learn to see more of reality?",
    heroText:
      "SOFIA does not begin with an answer. It begins by changing the distance from which you look at something you already know.",
    enter: "ENTER THE FIRST EXPERIENCE",
    pilot: "PILOT / 001",
    earth: "EARTH",
    time: "about 6 min",
    introTitle: "Same planet. Different distance.",
    introBody:
      "Political borders can be legally decisive without being physically drawn on the surface of Earth. Change scale and notice what changes: the planet, the map — or the way you see it.",
    scaleLabel: "CHANGE SCALE",
    questionKicker: "SOFIA / QUESTION",
    question: "At what distance does a border become real?",
    questionNote:
      "There is no single correct answer. Choose the frame that feels closest to your view right now.",
    choiceMap: "On the map",
    choiceCheckpoint: "At the checkpoint",
    choiceInstitution: "In institutions",
    choiceMemory: "In memory",
    choiceOther: "Something else",
    write: "Write one sentence",
    privacy: "This note stays only in this open page and is not sent anywhere.",
    continue: "CHANGE THE FRAME",
    framesTitle: "One border can exist in more than one way.",
    physical: "PHYSICAL",
    physicalText: "Terrain, a river or a wall may be visible. A political line itself may not be.",
    legal: "LEGAL",
    legalText: "A line can change rights, documents, jurisdiction and movement even when you cannot see it.",
    lived: "LIVED",
    livedText: "For someone, a border may mean home, separation, fear, safety or belonging.",
    frameNote:
      "SOFIA does not decide which of these frames is 'higher'. It tries to make more than one visible at once.",
    returnTitle: "Return to the beginning.",
    returnBody:
      "Earth did not change. The question is whether the distance from which you now see it did.",
    finalQuestion: "What do you notice now that you did not notice at the beginning?",
    restart: "REPLAY EXPERIENCE",
    exit: "RETURN TO NOVI TALAS",
    claim: "SOFIA / pilot experience — no claim that consciousness expansion has been proven.",
  },
};

const SCALE_COPY = {
  sr: [
    ["ORBITA", "Sa ove udaljenosti političke granice nisu fizička svojstva prizora."],
    ["ATMOSFERA", "Tanki sloj vazduha pripada svim tačkama na karti, bez obzira na političku podelu."],
    ["KONTINENT", "Mapa počinje da uvodi linije koje organizuju ljudski svet."],
    ["GRAD", "Granica postaje institucija: zakon, dokument, nadležnost, infrastruktura."],
    ["ČOVEK", "Na ljudskoj razmeri ista granica može postati iskustvo, sećanje i pripadanje."],
  ],
  en: [
    ["ORBIT", "From this distance, political borders are not physical features of the view."],
    ["ATMOSPHERE", "The thin layer of air belongs to every point on the map, regardless of political division."],
    ["CONTINENT", "The map begins to introduce lines that organize the human world."],
    ["CITY", "The border becomes institutional: law, documents, jurisdiction, infrastructure."],
    ["PERSON", "At human scale the same border can become experience, memory and belonging."],
  ],
};

type Lang = "sr" | "en";

function Planet({ scale }: { scale: number }) {
  const sizes = [430, 560, 760, 980, 1220];
  const size = sizes[scale];
  const borderOpacity = scale < 2 ? 0 : Math.min(0.75, 0.2 + scale * 0.13);

  return (
    <div className="relative h-[420px] md:h-[560px] overflow-hidden bg-[#020407]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(255,255,255,.9) 0 1px, transparent 1.4px), radial-gradient(circle at 66% 13%, rgba(255,255,255,.7) 0 1px, transparent 1.4px), radial-gradient(circle at 42% 52%, rgba(255,255,255,.5) 0 1px, transparent 1.4px), radial-gradient(circle at 82% 36%, rgba(255,255,255,.65) 0 1px, transparent 1.4px)",
          backgroundSize: "180px 150px, 240px 190px, 210px 170px, 280px 230px",
        }}
      />
      <div
        className="absolute rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          right: scale < 2 ? "-8%" : "-24%",
          bottom: scale < 2 ? "-46%" : "-62%",
          background:
            "radial-gradient(circle at 35% 27%, #e9f4f5 0 3%, #91c7d5 8%, #397f91 18%, #17546b 31%, #123b56 43%, #082438 58%, #04131f 72%, #01060b 82%)",
          boxShadow:
            "0 -18px 70px rgba(121,198,237,.42), inset 34px 24px 95px rgba(255,255,255,.13)",
        }}
      >
        <div
          className="absolute inset-[19%] rounded-full transition-opacity duration-700"
          style={{
            opacity: borderOpacity,
            backgroundImage:
              "linear-gradient(38deg, transparent 46%, rgba(235,218,173,.55) 47%, rgba(235,218,173,.55) 48%, transparent 49%), linear-gradient(112deg, transparent 54%, rgba(235,218,173,.38) 55%, rgba(235,218,173,.38) 56%, transparent 57%)",
            filter: "blur(.2px)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050607] to-transparent" />
    </div>
  );
}

export default function SofiaProject() {
  const [lang, setLang] = useState<Lang>("sr");
  const [started, setStarted] = useState(false);
  const [scale, setScale] = useState(0);
  const [choice, setChoice] = useState("");
  const [note, setNote] = useState("");
  const t = COPY[lang];
  const scaleCopy = useMemo(() => SCALE_COPY[lang], [lang]);

  const start = () => {
    setStarted(true);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 20);
  };

  const restart = () => {
    setScale(0);
    setChoice("");
    setNote("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!started) {
    return (
      <main className="min-h-screen bg-[#050607] text-[#f3efe5] overflow-hidden">
        <div className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-5 md:px-10 py-5 text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: sans }}>
          <a href="/" className="flex items-center gap-2 text-white/55 hover:text-white transition no-underline">
            <ArrowLeft size={14} /> {t.back}
          </a>
          <div className="flex items-center gap-2 border border-white/15 rounded-full p-1 bg-black/20 backdrop-blur-sm">
            {(["sr", "en"] as Lang[]).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-full transition ${lang === code ? "bg-white text-black" : "text-white/55 hover:text-white"}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <section className="relative min-h-screen flex items-end">
          <div className="absolute inset-0"><Planet scale={0} /></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/86 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/45" />

          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 md:px-10 pb-16 md:pb-24 pt-36">
            <div className="max-w-[760px]">
              <div className="text-[10px] md:text-[11px] uppercase tracking-[0.34em] text-[#cbb889]" style={{ fontFamily: sans }}>
                {t.formula}
              </div>
              <h1 className="mt-5 text-[64px] sm:text-[92px] md:text-[128px] leading-[0.8] font-normal tracking-[-0.04em]" style={{ fontFamily: serif }}>
                SOFIA
              </h1>
              <div className="mt-6 text-[13px] md:text-[15px] uppercase tracking-[0.22em] text-white/55" style={{ fontFamily: sans }}>
                {t.mission}
              </div>
              <h2 className="mt-12 max-w-[760px] text-[34px] sm:text-[46px] md:text-[60px] leading-[1.02] font-normal" style={{ fontFamily: serif }}>
                {t.heroLine}
              </h2>
              <p className="mt-6 max-w-[620px] text-[18px] md:text-[21px] leading-relaxed text-white/62" style={{ fontFamily: serif }}>
                {t.heroText}
              </p>
              <button
                onClick={start}
                className="mt-9 inline-flex items-center gap-4 border border-white/40 px-6 py-4 text-[10px] md:text-[11px] uppercase tracking-[0.24em] hover:bg-white hover:text-black transition duration-300"
                style={{ fontFamily: sans }}
              >
                {t.enter} <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const choices = [t.choiceMap, t.choiceCheckpoint, t.choiceInstitution, t.choiceMemory, t.choiceOther];

  return (
    <main className="bg-[#050607] text-[#f3efe5] min-h-screen">
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#050607]/88 backdrop-blur-xl">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 text-white/45 hover:text-white transition no-underline text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: sans }}>
            <ArrowLeft size={14} /> {t.back}
          </a>
          <div className="text-[18px] tracking-[0.28em]" style={{ fontFamily: serif }}>SOFIA</div>
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em]" style={{ fontFamily: sans }}>
            <button onClick={() => setLang("sr")} className={lang === "sr" ? "text-white" : "text-white/35"}>SR</button>
            <span className="text-white/15">/</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : "text-white/35"}>EN</button>
          </div>
        </div>
      </div>

      <section className="max-w-[1280px] mx-auto px-5 md:px-10 pt-16 md:pt-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#cbb889]" style={{ fontFamily: sans }}>{t.pilot}</div>
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-white/38" style={{ fontFamily: sans }}>
            <span>{t.earth}</span><span>{t.time}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-10 lg:gap-16 items-end py-14 md:py-20">
          <div>
            <h1 className="text-[52px] sm:text-[70px] md:text-[84px] leading-[0.92] font-normal" style={{ fontFamily: serif }}>{t.introTitle}</h1>
            <p className="mt-7 max-w-[580px] text-[18px] md:text-[21px] leading-relaxed text-white/62" style={{ fontFamily: serif }}>{t.introBody}</p>
          </div>
          <Planet scale={scale} />
        </div>

        <div className="border-y border-white/15 py-7 md:py-9">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/35 mb-5" style={{ fontFamily: sans }}>{t.scaleLabel}</div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {scaleCopy.map(([label], i) => (
              <button
                key={label}
                onClick={() => setScale(i)}
                className={`border px-4 py-3 text-[10px] uppercase tracking-[0.18em] transition ${scale === i ? "border-[#cbb889] bg-[#cbb889] text-[#111]" : "border-white/15 text-white/48 hover:border-white/40 hover:text-white"}`}
                style={{ fontFamily: sans }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-7 max-w-[760px] min-h-[76px]">
            <div className="text-[12px] uppercase tracking-[0.22em] text-[#cbb889]" style={{ fontFamily: sans }}>{scaleCopy[scale][0]}</div>
            <p className="mt-3 text-[24px] md:text-[30px] leading-snug text-white/82" style={{ fontFamily: serif }}>{scaleCopy[scale][1]}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[920px] mx-auto px-5 md:px-10 py-24 md:py-36">
        <div className="text-[9px] uppercase tracking-[0.3em] text-[#cbb889]" style={{ fontFamily: sans }}>{t.questionKicker}</div>
        <h2 className="mt-5 text-[44px] sm:text-[58px] md:text-[72px] leading-[0.98] font-normal" style={{ fontFamily: serif }}>{t.question}</h2>
        <p className="mt-6 text-[17px] md:text-[19px] text-white/48 leading-relaxed" style={{ fontFamily: serif }}>{t.questionNote}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {choices.map((item) => (
            <button
              key={item}
              onClick={() => setChoice(item)}
              className={`border rounded-full px-5 py-3 text-[11px] tracking-[0.08em] transition ${choice === item ? "border-white bg-white text-black" : "border-white/18 text-white/55 hover:text-white hover:border-white/40"}`}
              style={{ fontFamily: sans }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 border-t border-white/12 pt-8">
          <label className="text-[9px] uppercase tracking-[0.28em] text-white/35" style={{ fontFamily: sans }}>{t.write}</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="mt-4 w-full bg-transparent border-b border-white/25 focus:border-[#cbb889] outline-none resize-none text-[24px] md:text-[30px] leading-snug text-white/90 placeholder:text-white/18 pb-4"
            style={{ fontFamily: serif }}
            placeholder="…"
          />
          <div className="mt-3 text-[10px] leading-relaxed text-white/28" style={{ fontFamily: sans }}>{t.privacy}</div>
        </div>

        <a href="#frames" className="mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#cbb889] hover:text-white transition no-underline" style={{ fontFamily: sans }}>
          {t.continue} <ArrowRight size={14} />
        </a>
      </section>

      <section id="frames" className="bg-[#eee9de] text-[#111311]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <div className="max-w-[860px]">
            <h2 className="text-[45px] sm:text-[60px] md:text-[76px] leading-[0.96] font-normal" style={{ fontFamily: serif }}>{t.framesTitle}</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 border-t border-black/20">
            {[
              [t.physical, t.physicalText],
              [t.legal, t.legalText],
              [t.lived, t.livedText],
            ].map(([title, body], i) => (
              <div key={title} className={`py-8 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i < 2 ? "md:border-r border-black/15" : ""}`}>
                <div className="text-[9px] uppercase tracking-[0.3em] text-black/45" style={{ fontFamily: sans }}>0{i + 1} / {title}</div>
                <p className="mt-5 text-[24px] md:text-[29px] leading-snug" style={{ fontFamily: serif }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-[760px] text-[17px] md:text-[19px] leading-relaxed text-black/55 italic" style={{ fontFamily: serif }}>{t.frameNote}</p>
        </div>
      </section>

      <section className="relative min-h-[760px] flex items-end overflow-hidden">
        <div className="absolute inset-0"><Planet scale={0} /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/35" />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 md:px-10 pb-20 md:pb-28 pt-28">
          <div className="max-w-[760px]">
            <div className="text-[9px] uppercase tracking-[0.3em] text-[#cbb889]" style={{ fontFamily: sans }}>RETURN</div>
            <h2 className="mt-5 text-[46px] sm:text-[64px] md:text-[82px] leading-[0.94] font-normal" style={{ fontFamily: serif }}>{t.returnTitle}</h2>
            <p className="mt-7 max-w-[620px] text-[20px] md:text-[24px] leading-relaxed text-white/68" style={{ fontFamily: serif }}>{t.returnBody}</p>
            <div className="mt-12 border-l border-[#cbb889]/60 pl-6 md:pl-8">
              <p className="text-[27px] md:text-[38px] leading-tight" style={{ fontFamily: serif }}>{t.finalQuestion}</p>
              {(choice || note) && (
                <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/35" style={{ fontFamily: sans }}>
                  {choice}{choice && note ? " · " : ""}{note ? `“${note}”` : ""}
                </div>
              )}
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <button onClick={restart} className="inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition" style={{ fontFamily: sans }}>
                <RotateCcw size={14} /> {t.restart}
              </button>
              <a href="/" className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white/45 hover:text-white hover:border-white/30 transition no-underline" style={{ fontFamily: sans }}>
                {t.exit} <ArrowRight size={14} />
              </a>
            </div>
            <div className="mt-14 text-[9px] uppercase tracking-[0.18em] text-white/20" style={{ fontFamily: sans }}>{t.claim}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
