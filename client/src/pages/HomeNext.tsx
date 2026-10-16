
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Bookmark, BookOpen, Globe2, Search, Waves, X } from "lucide-react";
import { HOME_ARTICLE_CANDIDATES } from "./homeArticles";
import { searchArticles, articleSearchIndex } from "../../../shared/articleSearch";
import "./homeNext.css";

type Story = {
  href: string;
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Topic = "Sve" | "Geopolitika" | "Obaveštajni izvori" | "Srbija" | "Naša planeta";
type ViewMode = "ukratko" | "kontekst" | "veze";

const HERO: Story = {
  href: "/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina",
  category: "OBAVEŠTAJNI IZVORI · SAD–UKRAJINA",
  title: "Bela kuća ograničila satelitsku vezu Ukrajini: ko je izdao nalog i zašto?",
  description: "Reuters navodi da je nalog za ograničenje vojnog sistema Starshield stigao iz Bele kuće. Identitet nalogodavca nije poznat, a pristup je kasnije obnovljen.",
  imageSrc: "/news/starshield-approved.jpg",
  imageAlt: "AI ilustracija ukrajinskog vojnika sa satelitskim terminalom.",
};

const TOPICS: Topic[] = ["Sve", "Geopolitika", "Obaveštajni izvori", "Srbija", "Naša planeta"];
const stories: Story[] = [HERO, ...HOME_ARTICLE_CANDIDATES];

function topicFor(href: string): Topic {
  if (href.startsWith("/geopolitika/")) return "Geopolitika";
  if (href.startsWith("/obavestajni-izvori/")) return "Obaveštajni izvori";
  if (href.startsWith("/srbija/")) return "Srbija";
  if (href.startsWith("/nasa-planeta/")) return "Naša planeta";
  return "Sve";
}

function relatedStories(story: Story): Story[] {
  const topic = topicFor(story.href);
  return stories.filter(item => item.href !== story.href && topicFor(item.href) === topic).slice(0, 3);
}

function BookmarkButton({ story, saved, onToggle }: {
  story: Story;
  saved: boolean;
  onToggle: (href: string) => void;
}) {
  return (
    <button
      type="button"
      className="ntx-bookmark"
      aria-label={saved ? "Ukloni iz sačuvanih tekstova" : "Sačuvaj tekst za kasnije"}
      title={saved ? "Ukloni iz sačuvanih" : "Sačuvaj"}
      aria-pressed={saved}
      onClick={() => onToggle(story.href)}
    >
      <Bookmark size={14} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
    </button>
  );
}

function StoryCard({ story, saved, onToggle }: {
  story: Story;
  saved: boolean;
  onToggle: (href: string) => void;
}) {
  return (
    <article className="ntx-story">
      <Link href={story.href} className="ntx-story-img">
        {story.imageSrc ? (
          <img src={story.imageSrc} alt={story.imageAlt ?? ""} loading="lazy" decoding="async" />
        ) : (
          <span className="ntx-eyebrow">{topicFor(story.href)}</span>
        )}
      </Link>
      <div className="ntx-story-head">
        <span className="ntx-eyebrow">{topicFor(story.href)}</span>
        <BookmarkButton story={story} saved={saved} onToggle={onToggle} />
      </div>
      <h3><Link href={story.href}>{story.title}</Link></h3>
      <p>{story.description}</p>
      <div className="ntx-story-foot">
        <Link className="ntx-text-link" href={story.href}>Čitaj dalje <ArrowRight size={12} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export default function HomeNext() {
  const [topic, setTopic] = useState<Topic>("Sve");
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<ViewMode>("ukratko");
  const [saved, setSaved] = useState<string[]>(() => {
    try {
      const value = JSON.parse(localStorage.getItem("novitalas-v2-saved") ?? "[]");
      return Array.isArray(value) ? value.filter((x): x is string => typeof x === "string") : [];
    } catch {
      return [];
    }
  });
  const [showSaved, setShowSaved] = useState(false);
  const [featured, setFeatured] = useState<Story>(HERO);

  useEffect(() => {
    const title = document.title;
    document.title = "Novi Talas 2.0 — koncept buduće naslovne";
    const noIndex = document.createElement("meta");
    noIndex.name = "robots";
    noIndex.content = "noindex,nofollow,noarchive";
    document.head.appendChild(noIndex);
    return () => { document.title = title; noIndex.remove(); };
  }, []);

  useEffect(() => {
    try { localStorage.setItem("novitalas-v2-saved", JSON.stringify(saved)); } catch { /* private browsing */ }
  }, [saved]);

  const toggleSave = (href: string) =>
    setSaved(current => current.includes(href) ? current.filter(item => item !== href) : [...current, href]);

  const results = useMemo(() => {
    const pool = query.trim() ? searchArticles(query.trim()) : stories;
    return pool.filter(item => topic === "Sve" || topicFor(item.href) === topic).slice(0, 18);
  }, [topic, query]);
  const contextLinks = useMemo(() => relatedStories(featured), [featured]);
  const savedStories = saved.map(href => articleSearchIndex.find(item => item.href === href) ?? stories.find(item => item.href === href)).filter((item): item is Story => Boolean(item));

  return (
    <div className="ntx-root">
      <div className="ntx-utility">
        <div className="ntx-shell ntx-utility-inner">
          <span className="ntx-utility-status"><span className="ntx-mark" /> Nezavisna perspektiva · Vesti sa kontekstom</span>
          <span className="ntx-utility-tag">LAB PREVIEW · NIJE JAVNA VERZIJA</span>
        </div>
      </div>
      <header>
        <div className="ntx-shell ntx-mast">
          <Link href="/novi-talas-lab" className="ntx-brand" aria-label="Novi Talas 2.0 početna">
            <span className="ntx-logo">NOVI <b>TALAS</b></span>
            <span className="ntx-brandline">Vaš prozor u svet. Iza naslova.</span>
          </Link>
          <div className="ntx-mast-right">
            <button
              type="button"
              className="ntx-icon-button"
              aria-label={showSaved ? "Zatvori sačuvane tekstove" : "Otvori sačuvane tekstove"}
              aria-expanded={showSaved}
              onClick={() => setShowSaved(v => !v)}
            >
              {showSaved ? <X size={19} /> : <Bookmark size={19} />}
              {saved.length > 0 && <span className="ntx-save-count">{saved.length}</span>}
            </button>
            <Link className="ntx-cta" href="/">Postojeći sajt <ArrowRight size={14} /></Link>
          </div>
        </div>
        <nav className="ntx-nav" aria-label="Teme novog talasa">
          <div className="ntx-shell ntx-nav-inner">
            {TOPICS.map(item => (
              <button
                key={item}
                type="button"
                aria-pressed={topic === item}
                className="ntx-nav-link"
                onClick={() => {
                  setTopic(item);
                  document.getElementById("ntx-radar")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <div className="ntx-shell ntx-lead">
          <div className="ntx-overline"><span>U fokusu · Naslovna priča</span></div>
          <div className="ntx-stage">
            <div className="ntx-hero">
              <div className="ntx-hero-copy">
                <span className="ntx-eyebrow">{HERO.category}</span>
                <h1><Link href={HERO.href}>{HERO.title}</Link></h1>
                <p>{HERO.description}</p>
                <Link className="ntx-text-link" href={HERO.href}>Otvori celu priču <ArrowRight size={15} /></Link>
              </div>
              <Link className="ntx-hero-media" href={HERO.href}>
                <img src={HERO.imageSrc} alt={HERO.imageAlt} fetchPriority="high" />
                <span className="ntx-hero-media-label">Glavna priča</span>
              </Link>
            </div>
            <aside className="ntx-brief" aria-label="Najvažnije teme">
              <div className="ntx-minihead"><span>Na radaru</span><small>Tri teme</small></div>
              {stories.slice(1, 4).map((story, i) => (
                <div className="ntx-brief-item" key={story.href}>
                  <span className="ntx-number">0{i + 1}</span>
                  <div>
                    <h2 className="ntx-brief-title">
                      <Link href={story.href}>{story.title}</Link>
                    </h2>
                    <div className="ntx-brief-sub">{topicFor(story.href)}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "auto", paddingTop: 21 }}>
                <a href="#ntx-radar" className="ntx-text-link">Sve priče <ArrowRight size={12} /></a>
              </div>
            </aside>
          </div>
        </div>

        <section className="ntx-shell ntx-explore" aria-labelledby="ntx-explain-heading">
          <div className="ntx-explore-layout">
            <div className="ntx-explore-intro">
              <span className="ntx-section-overline"><Waves size={15} style={{ display:"inline", verticalAlign:"middle", marginRight:8 }} /> Novi način čitanja</span>
              <h2 id="ntx-explain-heading">Iza naslova.</h2>
              <p>Jedna priča. Više načina da je razumete. Izaberite šta vam je potrebno.</p>
            </div>
            <div className="ntx-insight">
              <div className="ntx-insight-tabs" role="tablist" aria-label="Način istraživanja priče">
                <button type="button" role="tab" aria-selected={mode === "ukratko"} className="ntx-insight-tab" onClick={() => setMode("ukratko")}>Ukratko</button>
                <button type="button" role="tab" aria-selected={mode === "kontekst"} className="ntx-insight-tab" onClick={() => setMode("kontekst")}>Širi kontekst</button>
                <button type="button" role="tab" aria-selected={mode === "veze"} className="ntx-insight-tab" onClick={() => setMode("veze")}>Povezane teme</button>
              </div>
              {mode === "ukratko" ? (
                <div role="tabpanel">
                  <h3>{featured.title}</h3>
                  <p>{featured.description}</p>
                  <Link href={featured.href} className="ntx-text-link">Ceo članak <ArrowRight size={12} /></Link>
                </div>
              ) : mode === "kontekst" ? (
                <div role="tabpanel">
                  <h3>Šta još vredi pročitati?</h3>
                  <p>Ovo su urednički objavljeni tekstovi iz iste rubrike. Njihovo svrstavanje u istu temu ne znači da postoji potvrđena uzročno-posledična veza.</p>
                  <div className="ntx-related">
                    {contextLinks.length
                      ? contextLinks.map(item => <Link href={item.href} key={item.href}>{item.title} ↗</Link>)
                      : <span>Još nema dodatnih tekstova iz ove rubrike.</span>}
                  </div>
                </div>
              ) : (
                <div role="tabpanel">
                  <h3>Put kroz priču</h3>
                  <p>Pođite od izabrane vesti, pa istražite druge objave iz iste oblasti. Povezivanje dokaza i aktera razvijaćemo u narednoj fazi.</p>
                  <div className="ntx-related">
                    <Link href={featured.href}>01 · Početna priča ↗</Link>
                    {contextLinks.map((item, i) => <Link href={item.href} key={item.href}>0{i + 2} · {item.title} ↗</Link>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="ntx-shell"><hr className="ntx-divider" /></div>
        <section id="ntx-radar" className="ntx-shell ntx-news" aria-labelledby="ntx-news-heading">
          <div className="ntx-news-heading">
            <div>
              <span className="ntx-section-overline"><Globe2 size={13} style={{ display:"inline", marginRight:7, verticalAlign:"middle" }} /> Otkrij svet</span>
              <h2 id="ntx-news-heading" className="ntx-section-title">{topic === "Sve" ? "Važne priče" : topic}</h2>
            </div>
            <div className="ntx-controls">
              <label className="ntx-search" htmlFor="ntx-search-input">
                <Search size={16} aria-hidden="true" />
                <input
                  id="ntx-search-input"
                  type="search"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Pretraži ceo arhiv"
                  autoComplete="off"
                />
              </label>
            </div>
          </div>
          {results.length ? (
            <div className="ntx-story-grid">
              {results.filter(item => item.href !== HERO.href || query.trim() !== "").slice(0, 12).map(story => (
                <div key={story.href} onMouseEnter={() => { /* editorial story selection remains explicit on click */ }}>
                  <StoryCard story={story} saved={saved.includes(story.href)} onToggle={toggleSave} />
                  <button
                    type="button"
                    className="ntx-text-link"
                    style={{ marginTop: 9, border:0, fontSize:9, background:"none" }}
                    onClick={() => {
                      setFeatured(story);
                      setMode("ukratko");
                      document.getElementById("ntx-explain-heading")?.scrollIntoView({ behavior:"smooth", block:"center" });
                    }}
                  >
                    <BookOpen size={11} /> Istraži ovu temu
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="ntx-empty">Nema rezultata za ovu pretragu. Pokušajte sa drugim izrazom ili odaberite „Sve“.</div>
          )}
        </section>

        {showSaved && (
          <section className="ntx-saved" aria-label="Sačuvani tekstovi">
            <div className="ntx-shell">
              <div className="ntx-saved-top">
                <h2>Moja čitaonica</h2>
                <button type="button" onClick={() => setShowSaved(false)}>Zatvori ✕</button>
              </div>
              {savedStories.length > 0 ? (
                <div className="ntx-saved-list">
                  {savedStories.map(item => (
                    <div className="ntx-saved-entry" key={item.href}>
                      <span className="ntx-eyebrow">{topicFor(item.href)}</span>
                      <h3><Link href={item.href}>{item.title}</Link></h3>
                      <button type="button" className="ntx-text-link" style={{ marginTop:10, fontSize:9, border:0, background:"none" }} onClick={() => toggleSave(item.href)}>Ukloni</button>
                    </div>
                  ))}
                </div>
              ) : <p>Sačuvajte članak klikom na ikonicu obeleživača pored priče. Biće dostupan ovde pri sledećoj poseti u istom pregledaču.</p>}
            </div>
          </section>
        )}
      </main>

      <footer className="ntx-shell ntx-footer">
        <div><strong>NOVI TALAS</strong><div>Nezavisno novinarstvo. Pouzdan kontekst.</div></div>
        <div>Koncept 2.0 · Probna verzija · Bez izmene objavljenih članaka</div>
      </footer>
    </div>
  );
}
