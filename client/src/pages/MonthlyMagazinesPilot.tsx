import { lazy, Suspense, useEffect, useMemo, useRef, useState, type ComponentType, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, ChevronLeft, Search, Share2, X } from "lucide-react";
import { articleSearchIndex, type SearchArticle } from "../../../shared/articleSearch";
import { EditionEmbedContext } from "@/contexts/EditionEmbedContext";
import "./MonthlyMagazinesPilot.css";

type Story = SearchArticle & { publishedAt: string; imageSrc: string };
type MonthData = { id: string; name: string; year: string; coverHref: string; coverImage: string; coverTitle: string; alt: string; credit: string; description: string };
type MonthView = MonthData & { articles: Story[] };

const MONTHS: MonthData[] = [
  { id: "2026-10", name: "OKTOBAR", year: "2026", coverHref: "/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina", coverImage: "/news/starshield-approved.jpg", coverTitle: "Bela kuća ograničila satelitsku vezu Ukrajini", alt: "AI ilustracija ukrajinskog vojnika i satelitskog terminala u sumrak", credit: "AI ilustracija / Novi Talas", description: "Obaveštajni izvori" },
  { id: "2026-09", name: "SEPTEMBAR", year: "2026", coverHref: "/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela", coverImage: "/news/greenland-us-arctic.jpg", coverTitle: "Amerika nije dobila Grenland", alt: "Urednička ilustracija arktičkog pejzaža Grenlanda", credit: "Ilustracija / Novi Talas", description: "Geopolitika" },
  { id: "2026-02", name: "FEBRUAR", year: "2026", coverHref: "/nasa-planeta/alma-skriveno-jezgro", coverImage: "/alma-mlecni-put.jpg", coverTitle: "Najveća ALMA mapa Mlečnog puta", alt: "Svemirska vizuelizacija astronomskog posmatranja s ALMA teleskopa", credit: "Vizual iz postojećeg teksta / Novi Talas", description: "Naša planeta" },
];

// Supplement the existing article registry only with stories whose real
// publication dates were independently checked in the article source.
// This pilot does not invent dates for entries with incomplete metadata.
const SUPPLEMENTAL: Story[] = [
  {
    href: "/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela",
    category: "Geopolitika", title: "Amerika nije dobila Grenland. Dobija ono zbog čega ga je želela",
    description: "Strateški značaj Grenlanda u promenjenom odnosu velikih sila.",
    imageSrc: "/news/greenland-us-arctic.jpg", publishedAt: "2026-09-19",
  },
  {
    href: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",
    category: "Kultura", title: "Ko krade Renoara ako ne može da ga proda?",
    description: "Misterija krađe umetničkih dela koje je gotovo nemoguće prodati.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Renoir_-_Portrait_de_Madame_Colonna_Romano%2C_non_dat%C3%A9.jpg", publishedAt: "2026-09-09",
  },
];

const ARTICLE_PAGES: Record<string, ComponentType> = {
  "/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina": lazy(() => import("./StarshieldWhiteHouseArticle")),
  "/nasa-planeta/najstariji-brodolom-kekova-turska-4700-godina": lazy(() => import("./KekovaShipwreckArticle")),
  "/srbija/vilson-upozorio-na-beloruski-scenario-svet-ce-pratiti-izbore-u-srbiji": lazy(() => import("./WilsonCrtaElectionArticle")),
  "/srbija/izbori-25-oktobra-odihr-biracki-spisak-kontrola-kampanje": lazy(() => import("./ODIHRInterimReport2026")),
  "/srbija/posle-svedocenja-o-cacilendu-i-15-martu-sve-glasniji-zahtevi-za-istragom": lazy(() => import("./CacilendInvestigation2026Article")),
  "/obavestajni-izvori/spijunska-afera-nemacka-evropske-sluzbe-strahuju-za-tajne": lazy(() => import("./BNDHanningEspionage2026Article")),
  "/nasa-planeta/dzonatan-kornjaca-194-godine-tajna-dugovecnosti": lazy(() => import("./dzonatan-kornjaca-194-godine-tajna-dugovecnosti")),
  "/srbija/vucic-i-zapad-optuzbe-za-autokratiju-stigle-su-u-centre-moci": lazy(() => import("./VucicZapadCentriMociArticle")),
  "/geopolitika/srbija-act-stigao-i-u-senat-wilson-podrzao-inicijativu-i-ponovo-otvorio-pitanje-izbora-u-srbiji": lazy(() => import("./SrbijaActSenateArticle")),
  "/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela": lazy(() => import("./GreenlandUsArcticArticle")),
  "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda": lazy(() => import("./RenoirHeistArticle")),
  "/srbija/vazno-za-gradjane-srbije-u-inostranstvu-rok-za-prijavu-za-glasanje-istice-3-oktobra-u-ponoc": lazy(() => import("./DijasporaGlasanjeArticle")),
  "/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao": lazy(() => import("./CliffBoothVideoArticle")),
  "/geopolitika/pred-razgovore-trampa-i-sija-amerika-ostaje-zavisna-od-kineskih-kriticnih-minerala": lazy(() => import("./TrumpXiCriticalMineralsArticle")),
  "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru": lazy(() => import("./AfdGermanyRussianGasArticle")),
  "/nasa-planeta/tacka-bez-povratka-ai": lazy(() => import("./TackaBezPovratkaAiArticle")),
  "/geopolitika/ukrajina-cetiri-godine-rata": lazy(() => import("./ukrajina-cetiri-godine-rata")),
  "/geopolitika/iran-protesti-2026": lazy(() => import("./iran-protesti-2026")),
  "/geopolitika/sukobi-izrael-iran-2026": lazy(() => import("./sukobi-izrael-iran-2026")),
  "/srbija/mars-za-pravosudje": lazy(() => import("./SrbijaMarsZaPravosudje")),
  "/nasa-planeta/alma-skriveno-jezgro": lazy(() => import("./alma-skriveno-jezgro")),
};

const BASE = "/magazini-lab";
const makeUrl = (month: string | null, href: string | null) =>
  BASE + (month ? "?mesec=" + month + (href ? "&prica=" + encodeURIComponent(href) : "") : "");

const dayLabel = (iso: string) => new Intl.DateTimeFormat("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00Z"));
const validMonth = (value: string | null) => MONTHS.find(m => m.id === value)?.id ?? null;
const pageFromUrl = (): { month: string | null; story: string | null } => {
  const params = new URLSearchParams(window.location.search);
  const month = validMonth(params.get("mesec"));
  return { month, story: month ? params.get("prica") : null };
};

function Wordmark({ small }: { small?: boolean }) {
  return <span className={"mm-wordmark" + (small ? " mm-wordmark-small" : "")}>NOVI <span>TALAS</span></span>;
}

const supportsAnimation = () => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function findImg(key: string, href?: string | null): HTMLImageElement | null {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>("[data-mm-photo]"));
  return images.find(img => img.dataset.mmPhoto === key && (!href || img.dataset.mmHref === href)) ?? null;
}

export default function MonthlyMagazinesPilot() {
  const [initial] = useState(pageFromUrl);
  const [monthId, setMonthId] = useState<string | null>(initial.month);
  const [storyHref, setStoryHref] = useState<string | null>(initial.story);
  const [shareStatus, setShareStatus] = useState("");
  const libraryScroll = useRef(0);
  const monthScroll = useRef(0);
  const monthRef = useRef(monthId);
  const storyRef = useRef(storyHref);
  monthRef.current = monthId;
  storyRef.current = storyHref;
  const readerScroll = useRef<HTMLDivElement>(null);
  const readerBack = useRef<HTMLButtonElement>(null);
  const animating = useRef(false);

  const editions = useMemo<MonthView[]>(() => MONTHS.map(m => ({
    ...m,
    articles: Array.from(new Map<string, Story>([
      ...articleSearchIndex
        .filter((a): a is Story => Boolean(a.publishedAt?.startsWith(m.id) && a.imageSrc))
        .map((a): [string, Story] => [a.href, a]),
      ...SUPPLEMENTAL.filter(a => a.publishedAt.startsWith(m.id)).map((a): [string, Story] => [a.href, a]),
    ]).values()).sort((a,b) => b.publishedAt.localeCompare(a.publishedAt)),
  })), []);

  const month = editions.find(m => m.id === monthId) ?? null;
  const story = month?.articles.find(a => a.href === storyHref) ?? null;
  const ReaderPage = story && ARTICLE_PAGES[story.href] ? ARTICLE_PAGES[story.href] : null;

  useEffect(() => {
    const robot = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const created = !robot;
    const el = robot || document.createElement("meta");
    const old = el.getAttribute("content");
    el.name = "robots";
    el.content = "noindex, nofollow, noarchive";
    if (created) document.head.append(el);
    const prevTitle = document.title;
    document.title = "Mesečni magazini — pilot tranzicija | Novi Talas";
    window.history.replaceState({ ...window.history.state, mmDepth: 0 }, "", window.location.href);
    return () => { if (created) el.remove(); else if (old === null) el.removeAttribute("content"); else el.content = old; document.title = prevTitle; };
  }, []);

  useEffect(() => {
    document.body.style.overflow = story ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [story]);

  function shift(nextMonth: string | null, nextStory: string | null) {
    if (animating.current) return;
    const oldMonth = monthRef.current;
    const oldStory = storyRef.current;
    if (oldMonth === nextMonth && oldStory === nextStory) return;
    // Choose matching visual anchor in both old and new states.
    const source =
      oldStory ? findImg("reader") :
      oldMonth && nextStory ? findImg("story-card", nextStory) :
      oldMonth ? findImg("month-cover") :
      findImg("library-cover", nextMonth);
    const oldRect = source?.getBoundingClientRect();
    const fly = source && oldRect && supportsAnimation() && oldRect.width > 10 ? document.createElement("img") : null;
    if (fly && source && oldRect) {
      fly.src = source.currentSrc || source.src;
      fly.alt = "";
      const cs = getComputedStyle(source);
      Object.assign(fly.style, {
        position:"fixed", zIndex:"99999", pointerEvents:"none", left:oldRect.left+"px", top:oldRect.top+"px",
        width:oldRect.width+"px", height:oldRect.height+"px", objectFit:"cover",
        objectPosition:cs.objectPosition, borderRadius:cs.borderRadius, transformOrigin:"top left",
        boxShadow:"0 20px 55px rgba(14,24,38,.19)"
      });
      document.body.appendChild(fly);
    }
    if (!oldMonth && nextMonth) libraryScroll.current = window.scrollY;
    if (oldMonth && !oldStory && nextStory) monthScroll.current = window.scrollY;

    flushSync(() => { setMonthId(nextMonth); setStoryHref(nextStory); setShareStatus(""); });

    if (!oldMonth && nextMonth) window.scrollTo(0, 0);
    if (oldMonth && !nextMonth) window.scrollTo(0, libraryScroll.current);
    if (oldStory && !nextStory && nextMonth) window.scrollTo(0, monthScroll.current);

    requestAnimationFrame(() => {
      const target =
        nextStory ? findImg("reader") :
        oldStory && nextMonth ? findImg("story-card", oldStory) :
        nextMonth ? findImg("month-cover") :
        findImg("library-cover", oldMonth);
      if (!fly || !oldRect || !target || !supportsAnimation() || typeof fly.animate !== "function") {
        fly?.remove(); readerBack.current?.focus({ preventScroll: true }); return;
      }
      const end = target.getBoundingClientRect();
      if (end.width < 10) { fly.remove(); return; }
      target.style.visibility = "hidden";
      const dx = end.left - oldRect.left, dy = end.top - oldRect.top;
      const scaleX = end.width / oldRect.width, scaleY = end.height / oldRect.height;
      animating.current = true;
      const animation = fly.animate([
        { transform: "translate(0px,0px) scale(1,1)", opacity: 1 },
        { transform: "translate(" + dx + "px," + dy + "px) scale(" + scaleX + "," + scaleY + ")", opacity: 1 }
      ], { duration: 460, easing: "cubic-bezier(.22,.72,.18,1)", fill: "forwards" });
      animation.finished.catch(() => {}).then(() => {
        target.style.visibility = "";
        fly.remove();
        animating.current = false;
        if (nextStory) readerBack.current?.focus({ preventScroll: true });
      });
    });
  }

  // History and on-screen buttons use the same animation engine.
  useEffect(() => {
    const onPop = () => {
      const state = pageFromUrl();
      shift(state.month, state.story);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  });

  function forward(nextMonth: string, nextStory: string | null = null) {
    if (animating.current) return;
    const url = makeUrl(nextMonth, nextStory);
    const depth = Number(window.history.state?.mmDepth ?? 0);
    window.history.pushState({ mmDepth: depth + 1 }, "", url);
    shift(nextMonth, nextStory);
  }

  function back() {
    if (animating.current) return;
    const depth = Number(window.history.state?.mmDepth ?? 0);
    if (depth > 0) window.history.back();
    else {
      const nextMonth = storyRef.current ? monthRef.current : null;
      window.history.replaceState({ mmDepth: 0 }, "", makeUrl(nextMonth, null));
      shift(nextMonth, null);
    }
  }

  function openStory(href: string) {
    if (!monthId) return;
    const target = month?.articles.some(a => a.href === href);
    if (target) forward(monthId, href);
  }

  async function shareOriginal() {
    if (!story) return;
    const url = "https://novitalas.org" + story.href;
    try {
      if (navigator.share) await navigator.share({ title: story.title, url });
      else { await navigator.clipboard.writeText(url); setShareStatus("Link je kopiran."); }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setShareStatus(url);
    }
  }

  const onBackdrop = (event: MouseEvent<HTMLDivElement>) => { if (event.target === event.currentTarget) back(); };

  return <div className="mm">
    <header className="mm-header">
      <div className="mm-meta"><span>17. OKTOBAR 2026.</span><span>DEMONSTRACIJA · MESEČNI MAGAZINI</span></div>
      <div className="mm-masthead">
        <button type="button" onClick={() => monthId ? back() : window.scrollTo({top:0,behavior:"smooth"})} aria-label={monthId ? "Nazad na biblioteku" : "Na vrh"}><Wordmark/></button>
        <nav aria-label="Navigacija"><span>IZDANJA</span><a href="https://novitalas.org/pretraga" aria-label="Pretraga Novog talasa"><Search size={20}/></a></nav>
      </div>
    </header>

    {!month && <main className="mm-library">
      <div className="mm-library-intro"><span className="mm-overline">NOVI TALAS / ARHIVA</span><h1>Biblioteka izdanja</h1><p>Mesečni magazini</p></div>
      <div className="mm-library-grid">
        {editions.map((m,i) => <article className={"mm-cover mm-cover-"+i} key={m.id}>
          <button className="mm-cover-button" type="button" onClick={() => forward(m.id)} aria-label={"Otvori "+m.name.toLowerCase()+" "+m.year}>
            <div className="mm-cover-image">
              <img src={m.coverImage} alt={m.alt} data-mm-photo="library-cover" data-mm-href={m.id} loading={i===0?"eager":"lazy"}/>
              <div className="mm-cover-shade"/>
              <span className="mm-cover-masthead">NOVI <b>TALAS</b></span>
              <span className="mm-cover-bottom"><small>MESEČNO IZDANJE</small><strong>{m.name}</strong><em>{m.year}</em></span>
            </div>
            <div className="mm-cover-caption"><span>{m.name} {m.year}.</span><span>OTVORI <ArrowUpRight size={17}/></span></div>
          </button>
        </article>)}
      </div>
      <p className="mm-pilot-note">Naslovne slike su privremeni izbor za ovaj pilot; konačne korice potvrđuje uredništvo.</p>
    </main>}

    {month && <main className="mm-issue" key={month.id}>
      <div className="mm-breadcrumb"><button type="button" onClick={back}><ArrowLeft size={17}/> Sva izdanja</button><span>{month.name} {month.year}.</span></div>
      <div className="mm-issue-hero">
        <div className="mm-issue-image"><img src={month.coverImage} alt={month.alt} data-mm-photo="month-cover" loading="eager"/><div className="mm-issue-shade"/><span>MESEČNI MAGAZIN</span></div>
        <div className="mm-issue-hero-caption"><span className="mm-overline">NOVI TALAS · {month.year}.</span><h1>{month.name}</h1><p>{month.coverTitle}</p><small>{month.credit}</small></div>
      </div>
      <section className="mm-articles" aria-label="Tekstovi iz meseca">
        <div className="mm-articles-header"><h2>U ovom izdanju</h2><span>{month.articles.length} EVIDENTIRANIH TEKSTOVA</span></div>
        <div className="mm-article-list">
          {month.articles.map((a,idx) => <article key={a.href} className="mm-story-entry">
            <button type="button" className="mm-story-button" onClick={() => openStory(a.href)} aria-label={"Pročitaj: "+a.title} data-mm-storycard={a.href}>
              <span className="mm-story-num">{String(idx+1).padStart(2,"0")}</span>
              <img src={a.imageSrc} alt={a.imageAlt || a.title} data-mm-photo="story-card" data-mm-href={a.href} loading={idx<3?"eager":"lazy"}/>
              <span className="mm-story-copy"><small>{a.category} · {dayLabel(a.publishedAt)}</small><strong>{a.title}</strong></span>
              <ArrowUpRight size={21} className="mm-story-arrow"/>
            </button>
          </article>)}
        </div>
        <button className="mm-bottom-return" type="button" onClick={back}><ChevronLeft size={17}/> Sva izdanja</button>
      </section>
    </main>}

    <footer className="mm-footer"><Wordmark small/><a href="https://novitalas.org">Postojeći sajt <ArrowUpRight size={16}/></a></footer>

    {story && <div className="mm-reader" role="dialog" aria-modal="true" aria-label={"Čitanje: "+story.title} onMouseDown={onBackdrop}>
      <div className="mm-reader-top"><button ref={readerBack} type="button" onClick={back}><ArrowLeft size={19}/> <span>Nazad u {month?.name.toLowerCase()}</span></button><Wordmark small/><button type="button" onClick={shareOriginal} aria-label="Podeli originalni članak"><Share2 size={19}/></button></div>
      <div className="mm-reader-scroll" ref={readerScroll}>
        <div className="mm-reader-head">
          <img src={story.imageSrc} alt={story.imageAlt || story.title} data-mm-photo="reader"/>
          <div className="mm-reader-intro"><span>{story.category} · {dayLabel(story.publishedAt)}</span><h1>{story.title}</h1><p>{story.description}</p></div>
        </div>
        <div className="mm-reader-original">
          <EditionEmbedContext.Provider value={true}>
            <Suspense fallback={<p className="mm-loading">Učitavanje originalnog članka…</p>}>
              {ReaderPage ? <ReaderPage/> : <div className="mm-fallback"><p>Ovaj članak je dostupan u postojećem arhivu.</p><a href={story.href}>Pročitaj original <ArrowUpRight size={18}/></a></div>}
            </Suspense>
          </EditionEmbedContext.Provider>
        </div>
        <div className="mm-reader-end"><button type="button" onClick={back}><BookOpen size={19}/> Nazad u magazin</button><a href={"https://novitalas.org"+story.href} target="_blank" rel="noopener noreferrer">Originalni članak <ArrowUpRight size={17}/></a></div>
      </div>
      {shareStatus && <div className="mm-status" role="status">{shareStatus}</div>}
    </div>}
  </div>;
}
