import { useEffect, useRef, useState, type ComponentType, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, ChevronLeft, List, Search, Share2, X } from "lucide-react";
import { EditionEmbedContext } from "@/contexts/EditionEmbedContext";
import StarshieldWhiteHouseArticle from "./StarshieldWhiteHouseArticle";
import KekovaShipwreckArticle from "./KekovaShipwreckArticle";
import WilsonCrtaElectionArticle from "./WilsonCrtaElectionArticle";
import GreenlandUsArcticArticle from "./GreenlandUsArcticArticle";
import RenoirHeistArticle from "./RenoirHeistArticle";
import "./OpenEditionPilot.css";

type EditionStory = {
  id: string; category: string; title: string; deck: string; date: string;
  image: string; alt: string; credit: string; href: string;
  Component: ComponentType;
};

const STORIES: EditionStory[] = [
  {
    id: "starshield",
    category: "OBAVEŠTAJNI IZVORI",
    title: "Bela kuća ograničila satelitsku vezu Ukrajini: ko je izdao nalog i zašto?",
    deck: "Prema istraživanju Reutersa, nalog za ograničenje Starshielda stigao je iz Bele kuće. Identitet nalogodavca nije poznat.",
    date: "16. oktobar 2026.",
    image: "/news/starshield-approved.jpg",
    alt: "AI ilustracija ukrajinskog vojnika sa satelitskim terminalom na položaju u sumrak.",
    credit: "AI ilustracija / Novi Talas",
    href: "/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina",
    Component: StarshieldWhiteHouseArticle,
  },
  {
    id: "kekova",
    category: "NAŠA PLANETA · ARHEOLOGIJA",
    title: "Najstariji poznati brodolom na svetu pronađen kod Turske",
    deck: "Teret koji je ležao na morskom dnu gotovo pet milenijuma otvara priču o davnim pomorskim putevima.",
    date: "16. oktobar 2026.",
    image: "/news/kekova-approved-full.webp",
    alt: "AI ilustracija drevnih amfora i kamenog sidra na morskom dnu kod Kekove.",
    credit: "AI ilustracija / Novi talas. Nije fotografija nalazišta.",
    href: "/nasa-planeta/najstariji-brodolom-kekova-turska-4700-godina",
    Component: KekovaShipwreckArticle,
  },
  {
    id: "vilson",
    category: "SRBIJA · IZBORI",
    title: "Vilson upozorio na beloruski scenario: Svet će pratiti izbore u Srbiji",
    deck: "Američki kongresmen razgovarao je sa predstavnicima CRTE o izbornim uslovima i međunarodnom praćenju.",
    date: "15. oktobar 2026.",
    image: "/news/wilson-crta-approved.webp",
    alt: "Urednički kolaž: Džo Vilson i Narodna skupština Srbije.",
    credit: "Urednički kolaž / Novi Talas",
    href: "/srbija/vilson-upozorio-na-beloruski-scenario-svet-ce-pratiti-izbore-u-srbiji",
    Component: WilsonCrtaElectionArticle,
  },
  {
    id: "grenland",
    category: "GEOPOLITIKA · IZ ARHIVE",
    title: "Amerika nije dobila Grenland. Dobija ono zbog čega ga je želela",
    deck: "Granice se ne menjaju. Strateški značaj severa postaje sve veći.",
    date: "19. septembar 2026.",
    image: "/news/greenland-us-arctic.jpg",
    alt: "Urednička ilustracija Grenlanda sa radarskim lukovima.",
    credit: "Ilustracija / Novi Talas",
    href: "/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela",
    Component: GreenlandUsArcticArticle,
  },
  {
    id: "renoir",
    category: "KULTURA · IZ ARHIVE",
    title: "Ko krade Renoara ako ne može da ga proda?",
    deck: "Misterija nestalih slika i paradoks umetničkog dela koje vredi milione, ali ga je gotovo nemoguće prodati.",
    date: "9. septembar 2026.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Renoir_-_Portrait_de_Madame_Colonna_Romano%2C_non_dat%C3%A9.jpg",
    alt: "Pjer-Ogist Renoar: Portret gospođe Kolona Romano.",
    credit: "Pjer-Ogist Renoar / Wikimedia Commons, CC BY-SA 4.0",
    href: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",
    Component: RenoirHeistArticle,
  },
];

const LAB_PATH = "/izdanje-lab";
const isValidStory = (id: string | null) => id && STORIES.some((story) => story.id === id) ? id : null;
const getQueryStory = () => isValidStory(new URLSearchParams(window.location.search).get("prica"));
const issueDate = "17. OKTOBAR 2026.";

function Wordmark({ small = false }: { small?: boolean }) {
  return <span className={"oe-wordmark" + (small ? " oe-wordmark-small" : "")}>NOVI <span>TALAS</span></span>;
}

export default function OpenEditionPilot() {
  const [active, setActive] = useState<string | null>(() => typeof window !== "undefined" ? getQueryStory() : null);
  const [overview, setOverview] = useState(false);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [shareNotice, setShareNotice] = useState("");
  const readerScrollRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const overviewCloseRef = useRef<HTMLButtonElement>(null);

  const selected = STORIES.find((story) => story.id === active) || null;
  const selectedIndex = selected ? STORIES.findIndex((story) => story.id === selected.id) : -1;

  useEffect(() => {
    const handlePop = () => {
      setActive(getQueryStory());
      setOverview(false);
      setSearching(false);
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (active || overview) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [active, overview]);

  useEffect(() => {
    if (active) {
      if (readerScrollRef.current) readerScrollRef.current.scrollTop = 0;
      backRef.current?.focus({ preventScroll: true });
    }
  }, [active]);

  useEffect(() => {
    if (overview && !active) overviewCloseRef.current?.focus({ preventScroll: true });
  }, [overview, active]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (overview) setOverview(false);
      else if (searching) setSearching(false);
      else if (active) closeReader();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, overview, searching]);

  useEffect(() => {
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const created = !robots;
    const tag = robots || document.createElement("meta");
    const previous = tag.getAttribute("content");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", "noindex, nofollow, noarchive");
    if (created) document.head.appendChild(tag);
    document.title = "OTVORENO IZDANJE — Pilot | Novi Talas";
    return () => {
      if (created) tag.remove();
      else if (previous === null) tag.removeAttribute("content");
      else tag.setAttribute("content", previous);
    };
  }, []);

  function openStory(id: string) {
    if (!isValidStory(id)) return;
    const uri = LAB_PATH + "?prica=" + encodeURIComponent(id);
    if (active) window.history.replaceState({ editionPilotStory: true }, "", uri);
    else window.history.pushState({ editionPilotStory: true }, "", uri);
    setActive(id);
    setOverview(false);
    setSearching(false);
    setShareNotice("");
  }

  function closeReader() {
    setShareNotice("");
    setOverview(false);
    // A history entry is created when the article was opened from the issue.
    if (window.history.state?.editionPilotStory) {
      window.history.back();
    } else {
      window.history.replaceState(null, "", LAB_PATH);
      setActive(null);
    }
  }

  function searchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = query.trim();
    if (term) window.location.assign("/pretraga?q=" + encodeURIComponent(term));
  }

  async function shareStory() {
    if (!selected) return;
    const url = "https://novitalas.org" + selected.href;
    try {
      if (navigator.share) await navigator.share({ title: selected.title, url });
      else {
        await navigator.clipboard.writeText(url);
        setShareNotice("Link do originalnog teksta je kopiran.");
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setShareNotice("Podeli originalni tekst: " + url);
    }
  }

  function goToSection(id: string) {
    setOverview(false);
    setActive(null);
    // Jump to an existing editorial scene, not a synthetic preview route.
    requestAnimationFrame(() => {
      document.getElementById("oe-scene-" + id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const ReaderComponent = selected?.Component;

  return (
    <div className="oe" data-pilot="otvoreno-izdanje">
      <header className="oe-site-header">
        <div className="oe-topline">
          <span>{issueDate}</span>
          <span className="oe-topline-right">ISTRAŽIVAČKI PILOT · NIJE PRODUKCIJA</span>
        </div>
        <div className="oe-masthead">
          <a className="oe-home-link" href={LAB_PATH} aria-label="Novi talas, početak eksperimentalnog izdanja"><Wordmark /></a>
          <nav aria-label="Navigacija izdanja">
            <button type="button" onClick={() => setOverview(true)} aria-label="Pogledaj sve priče"><List size={17} strokeWidth={1.7}/><span>Sve priče</span></button>
            <button type="button" onClick={() => setSearching((prev) => !prev)} aria-label="Pretraga" aria-expanded={searching}><Search size={19} strokeWidth={1.7}/></button>
          </nav>
        </div>
        {searching && <form className="oe-search" role="search" onSubmit={searchSubmit}><label htmlFor="oe-search-input">Pretraži Novi talas</label><div><input id="oe-search-input" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Unesi pojam..."/><button type="submit">Pretraži <ArrowRight size={16}/></button></div></form>}
      </header>

      <main className="oe-main">
        <div className="oe-edition-heading">
          <span className="oe-kicker">IZDANJE 001 <span className="oe-sep">/</span> PET PRIČA</span>
          <p>Jedan prostor. Mnogo otkrića.</p>
        </div>

        <div className="oe-opening-grid">
          <article id="oe-scene-starshield" className="oe-hero oe-story-panel">
            <button type="button" className="oe-hero-hit" onClick={() => openStory("starshield")} aria-label={"Pročitaj: " + STORIES[0].title}>
              <div className="oe-hero-image"><img src={STORIES[0].image} alt={STORIES[0].alt} fetchPriority="high" /></div>
              <div className="oe-hero-body">
                <span className="oe-kicker">{STORIES[0].category}</span>
                <h1>Bela kuća ograničila satelitsku vezu Ukrajini</h1>
                <p className="oe-lead-question">Ko je izdao nalog i zašto?</p>
                <span className="oe-readlink"><span className="oe-round-arrow"><ArrowRight size={17}/></span> Pročitaj priču</span>
              </div>
            </button>
          </article>

          <aside className="oe-side-index" aria-label="Sve priče u ovom izdanju">
            <div className="oe-side-head"><span>U OVOM IZDANJU</span><button onClick={() => setOverview(true)} type="button">SVE PRIČE <ArrowUpRight size={15}/></button></div>
            {STORIES.slice(1).map((story, i) =>
              <button className="oe-side-row" type="button" key={story.id} onClick={() => openStory(story.id)}>
                <span className="oe-side-num">0{i + 2}</span>
                <img src={story.image} alt="" loading="lazy"/>
                <span className="oe-side-copy"><span>{story.category}</span><strong>{story.title}</strong></span>
                <ArrowUpRight size={16} className="oe-side-arrow"/>
              </button>
            )}
            <div className="oe-side-footer">Istraži izdanje u svom ritmu.</div>
          </aside>
        </div>

        <div className="oe-mobile-strip">
          <div className="oe-section-meta"><span>U OVOM IZDANJU</span><button onClick={() => setOverview(true)} type="button">01 / 05 <ArrowRight size={16}/></button></div>
          <div className="oe-strip-images">
            {STORIES.map((story) => <button type="button" key={story.id} onClick={() => openStory(story.id)} aria-label={"Pročitaj: " + story.title}><img src={story.image} alt="" loading="lazy"/></button>)}
          </div>
        </div>

        <section className="oe-section-intro" aria-label="Otkrivaj dalje">
          <span className="oe-kicker">ODABRANO ZA OVO IZDANJE</span>
          <h2>Pet priča. Pet različitih pogleda na svet.</h2>
          <p>Ne moraš da ih čitaš redom. Zastani tamo gde te nešto zainteresuje.</p>
        </section>

        <div className="oe-scenes">
          <article id="oe-scene-kekova" className="oe-feature oe-feature-image">
            <button type="button" onClick={() => openStory("kekova")} className="oe-card-action" aria-label={"Pročitaj: " + STORIES[1].title}>
              <div className="oe-feature-photo"><img src={STORIES[1].image} alt={STORIES[1].alt} loading="lazy"/></div>
              <div className="oe-feature-copy"><span className="oe-kicker">{STORIES[1].category}</span><h2>Priča koju je more čuvalo skoro pet milenijuma</h2><p>{STORIES[1].deck}</p><span className="oe-feature-link">Otkrij priču <ArrowUpRight size={17}/></span></div>
            </button>
            <small className="oe-credit">{STORIES[1].credit}</small>
          </article>
          <article id="oe-scene-vilson" className="oe-feature oe-feature-typographic">
            <button type="button" onClick={() => openStory("vilson")} className="oe-card-action" aria-label={"Pročitaj: " + STORIES[2].title}>
              <div className="oe-type-top"><span className="oe-kicker">{STORIES[2].category}</span><span className="oe-feature-count">03 / 05</span></div>
              <h2>Vilson upozorio na beloruski scenario</h2>
              <div className="oe-type-rule"></div>
              <p>„Svet će pratiti izbore u Srbiji.“</p>
              <div className="oe-type-bottom"><span>15. OKTOBAR 2026.</span><span>Pročitaj priču <ArrowUpRight size={17}/></span></div>
              <img src={STORIES[2].image} alt={STORIES[2].alt} loading="lazy"/>
            </button>
          </article>
          <article id="oe-scene-grenland" className="oe-feature oe-feature-wide">
            <button type="button" onClick={() => openStory("grenland")} className="oe-card-action" aria-label={"Pročitaj: " + STORIES[3].title}>
              <div className="oe-wide-photo"><img src={STORIES[3].image} alt={STORIES[3].alt} loading="lazy"/></div>
              <div className="oe-wide-caption"><span className="oe-kicker">{STORIES[3].category}</span><h2>Amerika nije dobila Grenland. Dobija ono zbog čega ga je želela.</h2><span className="oe-wide-bottom">ARHIVA · 19. SEPTEMBAR 2026. <ArrowUpRight size={18}/></span></div>
            </button>
          </article>
          <article id="oe-scene-renoir" className="oe-feature oe-feature-art">
            <button type="button" onClick={() => openStory("renoir")} className="oe-card-action" aria-label={"Pročitaj: " + STORIES[4].title}>
              <div className="oe-art-photo"><img src={STORIES[4].image} alt={STORIES[4].alt} loading="lazy"/></div>
              <div className="oe-art-copy"><span className="oe-kicker">{STORIES[4].category}</span><h2>Ko krade Renoara ako ne može da ga proda?</h2><p>{STORIES[4].deck}</p><span className="oe-feature-link">Otkrij priču <ArrowUpRight size={17}/></span><span className="oe-muted-date">9. SEPTEMBAR 2026.</span></div>
            </button>
            <small className="oe-credit">{STORIES[4].credit}</small>
          </article>
        </div>
        <div className="oe-issue-end"><span>◊</span><p>Kraj izdanja. Otkrij nešto novo, kad god poželiš.</p><button type="button" onClick={() => setOverview(true)}>Sve priče <ArrowRight size={17}/></button></div>
      </main>
      <footer className="oe-footer"><Wordmark small/><span>Pilot istraživačkog interfejsa · Novi Talas</span><a href="https://novitalas.org">Poseti postojeći sajt <ArrowUpRight size={14}/></a></footer>

      {overview && <div className="oe-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOverview(false); }}>
        <section className="oe-overview" role="dialog" aria-modal="true" aria-label="Sve priče u izdanju">
          <div className="oe-overview-header"><Wordmark small/><button type="button" ref={overviewCloseRef} aria-label="Zatvori pregled" onClick={() => setOverview(false)}><X size={22}/></button></div>
          <div className="oe-overview-body">
            <span className="oe-kicker">OTVORENO IZDANJE · 17. OKTOBAR 2026.</span><h2>U ovom izdanju</h2><p>Pet priča. Odaberi bilo koju, bez zadatog redosleda.</p>
            <div className="oe-overview-list">{STORIES.map((story, index) => <button type="button" key={story.id} onClick={() => openStory(story.id)}>
              <span className="oe-overview-number">0{index + 1}</span><img src={story.image} alt="" loading="lazy"/><span className="oe-overview-copy"><small>{story.category}</small><strong>{story.title}</strong><em>{story.date}</em></span><ArrowUpRight size={19}/>
            </button>)}</div>
            <button type="button" className="oe-close-bottom" onClick={() => setOverview(false)}><ChevronLeft size={18}/> Nazad na izdanje</button>
          </div>
        </section>
      </div>}

      {selected && ReaderComponent && <div className="oe-reader-layer" role="dialog" aria-modal="true" aria-label={"Čitanje: " + selected.title}>
        <div className="oe-reader-top">
          <button type="button" ref={backRef} onClick={closeReader}><ArrowLeft size={19}/> <span>Nazad na izdanje</span></button>
          <div className="oe-reader-brand"><Wordmark small/></div>
          <div className="oe-reader-actions"><span className="oe-page-index">{String(selectedIndex + 1).padStart(2,"0")} / 05</span><button type="button" onClick={() => { setOverview(true); }} aria-label="Sve priče" title="Sve priče"><List size={19}/></button><button type="button" onClick={shareStory} aria-label="Podeli originalni članak" title="Podeli"><Share2 size={18}/></button></div>
        </div>
        <div className="oe-reader-scroll" ref={readerScrollRef}>
          <div className="oe-reader-article"><EditionEmbedContext.Provider value={true}><ReaderComponent/></EditionEmbedContext.Provider></div>
          {selected.id !== "renoir" && <section className="oe-reader-discovery" aria-label="Predlog iz arhive">
            <span className="oe-discovery-kicker">MOŽDA ĆE TE ZANIMATI I OVO</span>
            <button type="button" className="oe-discovery-link" onClick={() => openStory("renoir")}>
              <img src={STORIES[4].image} alt="" loading="lazy"/>
              <span><small>IZ ARHIVE · 9. SEPTEMBAR 2026.</small><strong>{STORIES[4].title}</strong><em>Jedna sasvim drugačija priča iz sveta umetnosti.</em><b>Otkrij priču <ArrowUpRight size={15}/></b></span>
            </button>
          </section>}
          <div className="oe-reader-finish"><button type="button" onClick={closeReader}><BookOpen size={18}/> Nazad na izdanje</button><a href={"https://novitalas.org" + selected.href} target="_blank" rel="noopener noreferrer">Originalni članak <ArrowUpRight size={15}/></a></div>
        </div>
        {shareNotice && <p className="oe-toast" role="status">{shareNotice}</p>}
      </div>}
    </div>
  );
}
