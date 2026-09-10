import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, X } from "lucide-react";

const serif = "'Lora', Georgia, serif";
const sans = "'Source Sans 3', Arial, sans-serif";

type Lang = "sr" | "en";
type Route = "time" | "other" | "scale" | "uncertainty" | "silence";

const COPY = {
  sr: {
    back: "Novi Talas",
    thresholdKicker: "SOFIA / 001",
    thresholdTitle: "UDALJENOST",
    enter: "UĐI",
    language: "JEZIK",
    sources: "IZVORI",
    scene1Title: "GDE POČINJE TVOJA ZEMLJA?",
    scene1Prompt: "Pokaži približno.",
    scene1Note: "Ne postoji tačan pogodak. Ovo nije test geografije.",
    continue: "NASTAVI",
    scene2a: "Planeta se nije promenila.",
    scene2b: "Mapa jeste.",
    scene2c: "Granica može da ne postoji na slici, a da postoji u milionima života.",
    scene3Title: "KADA JE GRANICA STVARNA?",
    scene3Lead: "Izdaleka, linija može nestati. Izbliza, može da organizuje život.",
    physical: "FIZIČKI",
    politically: "POLITIČKI",
    historically: "ISTORIJSKI",
    scale: "ZAVISI OD RAZMERE",
    scene3Words: ["ZAKON", "JEZIK", "NOVAC", "SEĆANJE"],
    scene4Lead: "Udžbenicima su potrebni datumi.",
    scene4Lead2: "Istorija ih retko posluša.",
    scene4Text: "476. je konvencionalna istorijska prekretnica: Romul Avgustul je svrgnut na Zapadu. Ali promene koje danas zovemo krajem Zapadnog rimskog carstva bile su proces, ne jedan trenutak.",
    scene4Question: "Koliko stvari koje živimo danas će tek budućnost pretvoriti u granicu između dva doba?",
    scene5Title: "Tvoja sadašnjost je nečija buduća istorija.",
    scene5Question: "Koja današnja izvesnost bi iz 2126. mogla izgledati privremeno?",
    work: "POSAO",
    country: "DRŽAVA",
    technology: "TEHNOLOGIJA",
    identity: "IDENTITET",
    certainty: "MOJA IZVESNOST",
    scene6a: "Udaljenost je promenila granicu.",
    scene6b: "Udaljenost je promenila carstvo.",
    scene6q: "Šta bi udaljenost mogla da promeni u nečemu što danas smatraš trajnim?",
    placeholder: "Nešto što mi danas izgleda trajno je…",
    privacy: "Tvoja rečenica se u ovom pilotu ne čuva niti šalje bilo gde.",
    skip: "PRESKOČI",
    respond: "ODGOVORI SOFIA-I",
    routeTime: "Pogledaj isto iz udaljenosti od deset godina. Šta postaje manje? Šta postaje važnije?",
    routeOther: "Zamisli nekoga ko te dobro poznaje, ali ne deli tvoju pretpostavku. Šta bi prvo primetio?",
    routeScale: "Na kojoj razmeri je ovo najvažnije: danas, u jednom životu, u jednoj generaciji, u jednom veku?",
    routeUncertainty: "Koji deo ovoga je činjenica? Koji deo je tvoje predviđanje?",
    routeSilence: "Pogledaj ponovo.",
    routeLabel: "SOFIA ne daje savet. Menja tačku gledanja.",
    return1: "Na ovoj slici se ništa nije promenilo.",
    return2: "Da li se promenila udaljenost sa koje je vidiš?",
    finalQ: "ŠTA SADA VIDIŠ, A NA POČETKU NISI?",
    finalPlaceholder: "Jedna rečenica je dovoljna…",
    end: "POGLEDAJ SVET IZNOVA.",
    endNote: "Eksperiment na preseku umetnosti, nauke, filozofije i AI-ja.",
    incubated: "SOFIA — inkubirana u Novom Talasu",
    restart: "PONOVI",
    exit: "NA NOVI TALAS",
    sourceTitle: "Napomena o izvorima",
    sourceBody: "Ovaj pilot razlikuje fizičku vidljivost političke granice od njene društvene i pravne realnosti. Neke granice mogu postati posredno vidljive iz svemira zbog osvetljenja, korišćenja zemljišta ili infrastrukture. Godina 476. koristi se kao konvencionalna prekretnica, ne kao tvrdnja da se jedna civilizacija završila preko noći.",
    sourceNASA: "NASA Earth Observatory — granice i tragovi ljudske organizacije vidljivi iz svemira",
    sourceRome: "Livius / Jona Lendering — Romulus Augustulus i 476.",
    pilotClaim: "Pilot ne tvrdi da je 'proširenje svesti' dokazano. Testiramo iskustvo promene perspektive.",
  },
  en: {
    back: "Novi Talas",
    thresholdKicker: "SOFIA / 001",
    thresholdTitle: "DISTANCE",
    enter: "ENTER",
    language: "LANGUAGE",
    sources: "SOURCES",
    scene1Title: "WHERE DOES YOUR COUNTRY BEGIN?",
    scene1Prompt: "Point approximately.",
    scene1Note: "There is no correct hit. This is not a geography test.",
    continue: "CONTINUE",
    scene2a: "The planet did not change.",
    scene2b: "The map did.",
    scene2c: "A border can be absent from the image and present in millions of lives.",
    scene3Title: "WHEN IS A BORDER REAL?",
    scene3Lead: "From far away, the line can disappear. Closer, it can organize a life.",
    physical: "PHYSICALLY",
    politically: "POLITICALLY",
    historically: "HISTORICALLY",
    scale: "IT DEPENDS ON SCALE",
    scene3Words: ["LAW", "LANGUAGE", "MONEY", "MEMORY"],
    scene4Lead: "History books need dates.",
    scene4Lead2: "History rarely obeys them.",
    scene4Text: "476 is a conventional historical landmark: Romulus Augustulus was deposed in the West. But the transformations we now call the end of the Western Roman Empire were a process, not a single instant.",
    scene4Question: "How many things we live through today will only later become the boundary between two eras?",
    scene5Title: "Your present is somebody else's future history.",
    scene5Question: "Which certainty of today might look temporary from 2126?",
    work: "WORK",
    country: "COUNTRY",
    technology: "TECHNOLOGY",
    identity: "IDENTITY",
    certainty: "MY CERTAINTY",
    scene6a: "Distance changed a border.",
    scene6b: "Distance changed an empire.",
    scene6q: "What might distance change about something you believe is permanent?",
    placeholder: "Something that feels permanent to me is…",
    privacy: "Your sentence is not stored or sent anywhere in this pilot.",
    skip: "SKIP",
    respond: "RESPOND TO SOFIA",
    routeTime: "Look at the same thing from ten years away. What becomes smaller? What becomes more important?",
    routeOther: "Imagine someone who knows you well but does not share your assumption. What would they notice first?",
    routeScale: "At which scale does this matter most: today, a lifetime, a generation, a century?",
    routeUncertainty: "Which part of this is a fact? Which part is your prediction?",
    routeSilence: "Look again.",
    routeLabel: "SOFIA does not give advice. It changes the vantage point.",
    return1: "Nothing on this image has changed.",
    return2: "Has the distance from which you see it?",
    finalQ: "WHAT DO YOU SEE NOW THAT YOU DID NOT SEE AT THE BEGINNING?",
    finalPlaceholder: "One sentence is enough…",
    end: "MEET THE WORLD AGAIN.",
    endNote: "An experiment at the intersection of art, science, philosophy and AI.",
    incubated: "SOFIA — incubated by Novi Talas",
    restart: "REPLAY",
    exit: "NOVI TALAS",
    sourceTitle: "Source note",
    sourceBody: "This pilot distinguishes the physical visibility of a political border from its social and legal reality. Some borders can become indirectly visible from space through lighting, land use or infrastructure. The year 476 is used as a conventional landmark, not as a claim that a civilization ended overnight.",
    sourceNASA: "NASA Earth Observatory — borders and human patterns visible from space",
    sourceRome: "Livius / Jona Lendering — Romulus Augustulus and 476",
    pilotClaim: "This pilot does not claim that 'consciousness expansion' has been proven. We are testing an experience of perspective shift.",
  },
};

function StarField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70">
      <div className="absolute inset-0 sofia-stars" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,transparent_0,transparent_28%,rgba(0,0,0,.22)_58%,rgba(0,0,0,.72)_100%)]" />
    </div>
  );
}

function Earth({ borders = false, close = false, marker, onPoint }: { borders?: boolean; close?: boolean; marker?: { x: number; y: number } | null; onPoint?: (x: number, y: number) => void }) {
  return (
    <button
      type="button"
      aria-label="Earth"
      onClick={(e) => {
        if (!onPoint) return;
        const rect = e.currentTarget.getBoundingClientRect();
        onPoint(((e.clientX - rect.left) / rect.width) * 100, ((e.clientY - rect.top) / rect.height) * 100);
      }}
      className={`relative block rounded-full border-0 p-0 outline-none transition-all duration-[1600ms] ease-out ${close ? "w-[680px] h-[680px] sm:w-[900px] sm:h-[900px]" : "w-[270px] h-[270px] sm:w-[390px] sm:h-[390px] md:w-[470px] md:h-[470px]"}`}
      style={{
        background:
          "radial-gradient(circle at 37% 29%, rgba(240,247,239,.88) 0 2%, transparent 3%), radial-gradient(ellipse at 35% 36%, #8aa47d 0 10%, transparent 11%), radial-gradient(ellipse at 56% 45%, #8d9d73 0 12%, transparent 13%), radial-gradient(ellipse at 44% 66%, #71896e 0 8%, transparent 9%), radial-gradient(circle at 42% 36%, #4f8799 0 22%, #256379 48%, #12384b 67%, #071b28 83%, #02070d 100%)",
        boxShadow: "0 0 90px rgba(117,190,216,.23), inset -56px -34px 95px rgba(0,0,0,.56), inset 22px 18px 60px rgba(255,255,255,.08)",
      }}
    >
      <div className="absolute inset-[5%] rounded-full opacity-50 mix-blend-screen" style={{ background: "repeating-radial-gradient(ellipse at 43% 31%, transparent 0 18px, rgba(255,255,255,.06) 20px 22px, transparent 25px 52px)" }} />
      <div className={`absolute inset-[13%] rounded-full transition-opacity duration-1000 ${borders ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: "linear-gradient(36deg, transparent 47%, rgba(230,214,164,.66) 48%, transparent 49%),linear-gradient(111deg, transparent 53%, rgba(230,214,164,.52) 54%, transparent 55%),linear-gradient(154deg, transparent 58%, rgba(230,214,164,.38) 59%, transparent 60%)" }} />
      {marker && <span className="absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border border-[#efe5c8] sofia-pulse" style={{ left: `${marker.x}%`, top: `${marker.y}%` }} />}
    </button>
  );
}

function Progress({ scene }: { scene: number }) {
  if (scene === 0 || scene >= 9) return null;
  return (
    <div className="fixed left-0 right-0 bottom-0 z-50 h-[2px] bg-white/5">
      <div className="h-full bg-[#d9c89d]/60 transition-all duration-700" style={{ width: `${(scene / 8) * 100}%` }} />
    </div>
  );
}

export default function SofiaProject() {
  const [lang, setLang] = useState<Lang>("sr");
  const [scene, setScene] = useState(0);
  const [marker, setMarker] = useState<{ x: number; y: number } | null>(null);
  const [borderAnswer, setBorderAnswer] = useState("");
  const [futureAnswer, setFutureAnswer] = useState("");
  const [note, setNote] = useState("");
  const [finalNote, setFinalNote] = useState("");
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const t = COPY[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scene]);

  const route = useMemo<Route>(() => {
    const n = note.toLowerCase();
    if (/činjen|fact|sigur|certain|pretpost|assum|predvi|predict/.test(n)) return "uncertainty";
    if (/strah|fear|partner|žena|muz|muž|dete|child|porod|family|prijatel|friend|love|volim/.test(n)) return "other";
    if (/posao|work|karijer|career|novac|money|project|projekat/.test(n)) return "time";
    if (futureAnswer === t.technology || futureAnswer === t.country) return "scale";
    if (!note.trim()) return "silence";
    return "time";
  }, [note, futureAnswer, t]);

  const routeText = {
    time: t.routeTime,
    other: t.routeOther,
    scale: t.routeScale,
    uncertainty: t.routeUncertainty,
    silence: t.routeSilence,
  }[route];

  const reset = () => {
    setScene(0);
    setMarker(null);
    setBorderAnswer("");
    setFutureAnswer("");
    setNote("");
    setFinalNote("");
  };

  const next = () => setScene((s) => Math.min(9, s + 1));

  return (
    <main className="min-h-screen bg-[#030405] text-[#f0ece2] overflow-x-hidden selection:bg-[#d5c28d] selection:text-black">
      <style>{`
        @keyframes sofiaFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sofiaPulse { 0%,100% { transform: scale(.78); opacity:.65; box-shadow:0 0 0 0 rgba(239,229,200,.35);} 50% { transform:scale(1.25); opacity:1; box-shadow:0 0 0 17px rgba(239,229,200,0);} }
        @keyframes sofiaDrift { 0% { transform: translate3d(0,0,0); } 50% { transform:translate3d(-1.2%,.8%,0); } 100% { transform: translate3d(0,0,0); } }
        .sofia-in { animation: sofiaFade 900ms cubic-bezier(.2,.8,.2,1) both; }
        .sofia-pulse { animation: sofiaPulse 2.1s ease-in-out infinite; }
        .sofia-stars { background-image: radial-gradient(circle at 12% 18%,rgba(255,255,255,.8) 0 1px,transparent 1.2px),radial-gradient(circle at 67% 11%,rgba(255,255,255,.55) 0 1px,transparent 1.2px),radial-gradient(circle at 42% 73%,rgba(255,255,255,.45) 0 1px,transparent 1.2px),radial-gradient(circle at 86% 41%,rgba(255,255,255,.6) 0 1px,transparent 1.2px),radial-gradient(circle at 24% 58%,rgba(255,255,255,.35) 0 1px,transparent 1.2px); background-size: 190px 160px,260px 230px,220px 190px,310px 260px,360px 320px; animation:sofiaDrift 24s ease-in-out infinite; }
        .sofia-choice { transition: border-color .25s ease, background .25s ease, color .25s ease, transform .25s ease; }
        .sofia-choice:hover { transform: translateY(-2px); }
      `}</style>

      {scene > 0 && scene < 9 && (
        <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-7 py-4 flex items-center justify-between pointer-events-none">
          <a href="/" className="pointer-events-auto inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[.2em] text-white/38 hover:text-white/80 no-underline transition" style={{ fontFamily: sans }}>
            <ArrowLeft size={13} /> {t.back}
          </a>
          <div className="pointer-events-auto flex items-center gap-4 text-[9px] uppercase tracking-[.18em]" style={{ fontFamily: sans }}>
            <button onClick={() => setSourcesOpen(true)} className="text-white/32 hover:text-white/75 transition">{t.sources}</button>
            <button onClick={() => setLang(lang === "sr" ? "en" : "sr")} className="text-white/50 hover:text-white transition">{lang === "sr" ? "EN" : "SR"}</button>
          </div>
        </header>
      )}

      <Progress scene={scene} />

      {scene === 0 && (
        <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
          <StarField />
          <div className="relative z-10 sofia-in">
            <div className="text-[10px] uppercase tracking-[.42em] text-[#c9b98e]/70 mb-8" style={{ fontFamily: sans }}>{t.thresholdKicker}</div>
            <h1 className="text-[58px] sm:text-[90px] md:text-[126px] leading-[.86] font-normal tracking-[-.045em]" style={{ fontFamily: serif }}>{t.thresholdTitle}</h1>
            <div className="mt-10 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[.22em] text-white/35" style={{ fontFamily: sans }}>
              <button onClick={() => setLang("sr")} className={lang === "sr" ? "text-white/80" : "hover:text-white/70"}>SR</button>
              <span>/</span>
              <button onClick={() => setLang("en")} className={lang === "en" ? "text-white/80" : "hover:text-white/70"}>EN</button>
            </div>
            <button onClick={next} className="mt-14 inline-flex items-center gap-4 border border-white/28 hover:border-white/70 px-7 py-4 text-[10px] uppercase tracking-[.28em] transition" style={{ fontFamily: sans }}>
              {t.enter} <ArrowRight size={14} />
            </button>
          </div>
        </section>
      )}

      {scene === 1 && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-16 text-center">
          <StarField />
          <div className="relative z-10 w-full max-w-5xl flex flex-col items-center sofia-in">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-[27px] sm:text-[38px] md:text-[48px] font-normal leading-tight" style={{ fontFamily: serif }}>{t.scene1Title}</h2>
              <p className="mt-3 text-[11px] uppercase tracking-[.24em] text-white/42" style={{ fontFamily: sans }}>{t.scene1Prompt}</p>
            </div>
            <Earth marker={marker} onPoint={(x, y) => setMarker({ x, y })} />
            <p className="mt-7 text-[12px] text-white/35" style={{ fontFamily: sans }}>{t.scene1Note}</p>
            {marker && <button onClick={next} className="mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>}
          </div>
        </section>
      )}

      {scene === 2 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-24">
          <StarField />
          <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-10 md:gap-16 sofia-in">
            <div className="flex justify-center"><Earth borders /></div>
            <div className="max-w-xl">
              <p className="text-[30px] sm:text-[42px] md:text-[56px] leading-[1.08]" style={{ fontFamily: serif }}>{t.scene2a}</p>
              <p className="mt-3 text-[30px] sm:text-[42px] md:text-[56px] leading-[1.08] text-[#d8c79c]" style={{ fontFamily: serif }}>{t.scene2b}</p>
              <div className="my-8 w-12 h-px bg-white/20" />
              <p className="text-[18px] sm:text-[21px] leading-relaxed text-white/64" style={{ fontFamily: serif }}>{t.scene2c}</p>
              <button onClick={next} className="mt-9 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>
            </div>
          </div>
        </section>
      )}

      {scene === 3 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-24">
          <div className="absolute inset-0 overflow-hidden opacity-30"><div className="absolute -right-[260px] -top-[250px]"><Earth borders close /></div></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030405] via-[#030405]/94 to-[#030405]/60" />
          <div className="relative z-10 max-w-5xl w-full sofia-in">
            <p className="text-[17px] sm:text-[21px] text-white/55 max-w-2xl leading-relaxed" style={{ fontFamily: serif }}>{t.scene3Lead}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-[9px] sm:text-[10px] tracking-[.3em] text-[#cdbd92]" style={{ fontFamily: sans }}>{t.scene3Words.map((word) => <span key={word}>{word}</span>)}</div>
            <h2 className="mt-14 text-[34px] sm:text-[52px] md:text-[68px] leading-[.98] font-normal" style={{ fontFamily: serif }}>{t.scene3Title}</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-3xl">
              {[t.physical, t.politically, t.historically, t.scale].map((item) => (
                <button key={item} onClick={() => setBorderAnswer(item)} className={`sofia-choice text-left border px-5 py-5 text-[10px] uppercase tracking-[.2em] ${borderAnswer === item ? "border-[#d8c79c] bg-[#d8c79c]/10 text-[#eadfbd]" : "border-white/13 text-white/48 hover:border-white/35 hover:text-white/75"}`} style={{ fontFamily: sans }}>{item}</button>
              ))}
            </div>
            {borderAnswer && <button onClick={next} className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>}
          </div>
        </section>
      )}

      {scene === 4 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-24 text-center">
          <div className="relative z-10 max-w-5xl w-full sofia-in">
            <div className="text-[90px] sm:text-[150px] md:text-[220px] leading-none tracking-[-.06em] text-[#e5ddc9]" style={{ fontFamily: serif }}>476</div>
            <div className="max-w-4xl mx-auto mt-10">
              <div className="relative h-14 flex items-center justify-between text-[9px] sm:text-[10px] text-white/30 tracking-[.16em]" style={{ fontFamily: sans }}>
                <div className="absolute left-0 right-0 top-1/2 h-px bg-white/15" />
                {[450, 460, 470, 476, 480, 490, 500].map((year) => <span key={year} className={`relative bg-[#030405] px-1.5 ${year === 476 ? "text-[#d8c79c] text-[12px]" : ""}`}>{year}</span>)}
              </div>
              <p className="mt-8 text-[27px] sm:text-[38px] leading-tight" style={{ fontFamily: serif }}>{t.scene4Lead}<br/><span className="text-white/48">{t.scene4Lead2}</span></p>
              <p className="mt-8 mx-auto max-w-3xl text-[16px] sm:text-[19px] leading-[1.75] text-white/56" style={{ fontFamily: serif }}>{t.scene4Text}</p>
              <p className="mt-10 mx-auto max-w-3xl text-[20px] sm:text-[27px] leading-[1.45] text-[#e4dac0]" style={{ fontFamily: serif }}>{t.scene4Question}</p>
              <button onClick={next} className="mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>
            </div>
          </div>
        </section>
      )}

      {scene === 5 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-24">
          <div className="relative z-10 max-w-5xl w-full sofia-in">
            <div className="overflow-hidden py-8 border-y border-white/8">
              <div className="flex items-center justify-between text-[22px] sm:text-[38px] md:text-[52px] text-white/22" style={{ fontFamily: serif }}><span className="text-[#dfd4b8]">2026</span><span>2036</span><span>2076</span><span>2126</span></div>
            </div>
            <h2 className="mt-14 max-w-4xl text-[34px] sm:text-[52px] md:text-[66px] leading-[1.03] font-normal" style={{ fontFamily: serif }}>{t.scene5Title}</h2>
            <p className="mt-8 text-[18px] sm:text-[22px] text-white/58 max-w-3xl" style={{ fontFamily: serif }}>{t.scene5Question}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {[t.work, t.country, t.technology, t.identity, t.certainty].map((item) => <button key={item} onClick={() => setFutureAnswer(item)} className={`sofia-choice border px-5 py-4 text-[9px] sm:text-[10px] uppercase tracking-[.2em] ${futureAnswer === item ? "border-[#d8c79c] bg-[#d8c79c]/10 text-[#eadfbd]" : "border-white/13 text-white/45 hover:text-white/75 hover:border-white/30"}`} style={{ fontFamily: sans }}>{item}</button>)}
            </div>
            {futureAnswer && <button onClick={next} className="mt-9 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>}
          </div>
        </section>
      )}

      {scene === 6 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-24">
          <div className="relative z-10 max-w-4xl w-full sofia-in">
            <p className="text-[30px] sm:text-[46px] md:text-[58px] leading-[1.08]" style={{ fontFamily: serif }}>{t.scene6a}<br/><span className="text-white/43">{t.scene6b}</span></p>
            <h2 className="mt-12 max-w-3xl text-[20px] sm:text-[28px] leading-[1.45] text-[#e4dac0] font-normal" style={{ fontFamily: serif }}>{t.scene6q}</h2>
            <textarea value={note} onChange={(e) => setNote(e.target.value.slice(0, 220))} rows={3} placeholder={t.placeholder} className="mt-9 w-full max-w-3xl resize-none bg-transparent border-0 border-b border-white/20 focus:border-[#d8c79c] focus:ring-0 outline-none px-0 py-4 text-[19px] sm:text-[23px] leading-relaxed text-white/82 placeholder:text-white/22" style={{ fontFamily: serif }} />
            <p className="mt-3 text-[10px] text-white/28 tracking-[.04em]" style={{ fontFamily: sans }}>{t.privacy}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <button onClick={next} className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{note.trim() ? t.respond : t.skip} <ArrowRight size={14} /></button>
            </div>
          </div>
        </section>
      )}

      {scene === 7 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-24 text-center">
          <div className="relative z-10 max-w-4xl w-full sofia-in">
            <div className="text-[9px] uppercase tracking-[.32em] text-[#cdbc90]/60" style={{ fontFamily: sans }}>SOFIA / RESPONSE</div>
            {route === "silence" && <div className="h-20 sm:h-32" />}
            <p className="mt-10 text-[31px] sm:text-[47px] md:text-[61px] leading-[1.12] font-normal" style={{ fontFamily: serif }}>{routeText}</p>
            <p className="mt-12 text-[10px] uppercase tracking-[.22em] text-white/27" style={{ fontFamily: sans }}>{t.routeLabel}</p>
            <button onClick={next} className="mt-12 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>
          </div>
        </section>
      )}

      {scene === 8 && (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-20">
          <StarField />
          <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-10 md:gap-16 sofia-in">
            <div className="flex justify-center"><Earth /></div>
            <div className="max-w-xl">
              <p className="text-[28px] sm:text-[39px] md:text-[49px] leading-[1.13]" style={{ fontFamily: serif }}>{t.return1}</p>
              <p className="mt-8 text-[24px] sm:text-[33px] leading-[1.25] text-[#dfd2b2]" style={{ fontFamily: serif }}>{t.return2}</p>
              <div className="mt-11 pt-8 border-t border-white/12">
                <label className="block text-[9px] uppercase tracking-[.25em] text-white/42" style={{ fontFamily: sans }}>{t.finalQ}</label>
                <textarea value={finalNote} onChange={(e) => setFinalNote(e.target.value.slice(0, 220))} rows={2} placeholder={t.finalPlaceholder} className="mt-4 w-full resize-none bg-transparent border-0 border-b border-white/16 focus:border-[#d8c79c] outline-none px-0 py-3 text-[18px] sm:text-[21px] leading-relaxed text-white/75 placeholder:text-white/20" style={{ fontFamily: serif }} />
              </div>
              <button onClick={next} className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-[#e1d2a9] hover:text-white transition" style={{ fontFamily: sans }}>{t.continue} <ArrowRight size={14} /></button>
            </div>
          </div>
        </section>
      )}

      {scene === 9 && (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 text-center">
          <StarField />
          <div className="relative z-10 max-w-4xl sofia-in">
            <div className="text-[32px] sm:text-[46px] tracking-[.22em] font-normal" style={{ fontFamily: serif }}>SOFIA</div>
            <h2 className="mt-14 text-[39px] sm:text-[61px] md:text-[78px] leading-[.98] font-normal" style={{ fontFamily: serif }}>{t.end}</h2>
            <p className="mt-9 text-[13px] sm:text-[15px] uppercase tracking-[.16em] text-white/38" style={{ fontFamily: sans }}>{t.endNote}</p>
            <p className="mt-5 text-[10px] tracking-[.12em] text-white/22" style={{ fontFamily: sans }}>{t.pilotClaim}</p>
            <p className="mt-12 text-[10px] uppercase tracking-[.19em] text-[#cbbb91]/46" style={{ fontFamily: sans }}>{t.incubated}</p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <button onClick={reset} className="inline-flex items-center gap-3 border border-white/18 hover:border-white/45 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-white/55 hover:text-white transition" style={{ fontFamily: sans }}><RotateCcw size={13} /> {t.restart}</button>
              <a href="/" className="inline-flex items-center gap-3 border border-[#d8c79c]/35 hover:border-[#d8c79c]/75 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-[#dfd2b2] no-underline transition" style={{ fontFamily: sans }}>{t.exit} <ArrowRight size={13} /></a>
            </div>
          </div>
        </section>
      )}

      {sourcesOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex justify-end" onClick={() => setSourcesOpen(false)}>
          <aside className="h-full w-full max-w-lg bg-[#090a0b] border-l border-white/10 p-7 sm:p-10 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[24px] font-normal" style={{ fontFamily: serif }}>{t.sourceTitle}</h3>
              <button onClick={() => setSourcesOpen(false)} className="text-white/45 hover:text-white"><X size={18} /></button>
            </div>
            <p className="mt-8 text-[16px] leading-[1.75] text-white/58" style={{ fontFamily: serif }}>{t.sourceBody}</p>
            <div className="mt-9 space-y-4 text-[12px] leading-relaxed" style={{ fontFamily: sans }}>
              <a className="block text-[#d9c99f] hover:text-white no-underline" href="https://earthobservatory.nasa.gov/images/90403/the-glow-of-the-indus-river-basin" target="_blank" rel="noreferrer">{t.sourceNASA}</a>
              <a className="block text-[#d9c99f] hover:text-white no-underline" href="https://www.livius.org/articles/person/romulus-augustulus/" target="_blank" rel="noreferrer">{t.sourceRome}</a>
            </div>
            <div className="mt-10 pt-7 border-t border-white/10 text-[10px] leading-relaxed text-white/30" style={{ fontFamily: sans }}>{t.pilotClaim}</div>
          </aside>
        </div>
      )}
    </main>
  );
}
