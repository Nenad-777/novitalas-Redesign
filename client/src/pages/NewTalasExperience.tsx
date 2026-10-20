import { useEffect, useMemo, useRef, useState, type ReactNode, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { articleSearchIndex, searchArticles, type SearchArticle } from "../../../shared/articleSearch";
import { SECTIONS, MagazineHeader, MagazineFooter } from "../components/MagazineChrome";
import { articleMeta } from "../../../shared/articleMeta";
import { HOME_ARTICLES } from "./homeArticles";
import { HERO_ARTICLE } from "./Home";
import { seoData } from "../../../shared/seo";
import "./NewTalasExperience.css";

type Article = SearchArticle;
type Issue = { id:string; name:string; articles:Article[]; cover:Article|null };
const MONTH_NAMES = ["FEBRUAR","MART","APRIL","MAJ","JUN","JUL","AVGUST","SEPTEMBAR","OKTOBAR"];

// Keep the existing OBJAVA workflow as the canonical source for the lead.
const HERO = {
  ...HERO_ARTICLE,
  image:HERO_ARTICLE.imageSrc,
  deck:HERO_ARTICLE.description,
  categoryHref:"/"+HERO_ARTICLE.href.split("/")[1],
};
const isIsoDate = (value?:string) => Boolean(value && /^\d{4}-\d{2}-\d{2}$/.test(value));
const verifiedDates = new Map<string,string>();
Object.entries(seoData).forEach(([href,meta])=>{if(isIsoDate(meta.datePublished)) verifiedDates.set(href,meta.datePublished!);});
articleMeta.forEach(meta=>{if(isIsoDate(meta.datePublished)) verifiedDates.set(meta.path,meta.datePublished!);});
const knownArticles:Article[] = Array.from(new Map<string,Article>(articleSearchIndex.filter(a=>a.href && a.title && a.href.startsWith("/") && a.href.split("/").length>2).map(a=>[a.href,{...a,publishedAt:verifiedDates.get(a.href)||a.publishedAt}])).values());
const published = (a:Article) => isIsoDate(a.publishedAt);
const chronological = (a:Article,b:Article) => (b.publishedAt||"").localeCompare(a.publishedAt||"") || a.title.localeCompare(b.title,"sr");
// Editorial cover selection: September's previously used Greenland asset is absent
// from the repository and the newer diaspora thumbnail is only 7.9 KB.
// Use a documented September story with an existing full-size (2.5 MB) asset.
const VERIFIED_COVERS:Record<string,string> = {
  "2026-09":"/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru",
  "2026-02":"/nasa-planeta/alma-skriveno-jezgro",
  "2026-10":"/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina"
};
const issues:Issue[] = MONTH_NAMES.map((name,i)=>{
  const id="2026-"+String(i+2).padStart(2,"0");
  const articles=knownArticles.filter(a=>(published(a) && a.publishedAt!.startsWith(id)) || (!published(a) && a.publishedMonth===id)).sort(chronological);
  const cover=articles.find(a=>a.href===VERIFIED_COVERS[id])||articles.find(a=>Boolean(a.imageSrc))||null;
  return {id,name,articles,cover};
}).reverse();
const CULTURE_ARTICLES=new Set(["/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda","/nasa-planeta/umetnost-koja-dise-teamlab-tokio","/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao"]);
function sectionHref(a:Article){if(CULTURE_ARTICLES.has(a.href) || /^kultura$/i.test(a.category)) return "/kultura";const part=a.href.split("/")[1];return SECTIONS.find(s=>s.slug===part)?.slug ? "/"+part : "/nasa-planeta";}
function sectionLabel(a:Article){return SECTIONS.find(s=>"/"+s.slug===sectionHref(a))?.label || a.category || "Novi talas";}
function formatStoryCount(count:number){
  const lastTwo=count%100, last=count%10;
  const noun=lastTwo>=11&&lastTwo<=14?"tekstova":last===1?"tekst":last>=2&&last<=4?"teksta":"tekstova";
  return count+" "+noun;
}
function LabelLink({href,children}:{href:string;children:ReactNode}){return <a className="nx-label-link" href={href}>{children} <ArrowUpRight size={13} aria-hidden="true"/></a>}
function FocusCarousel({children,title,eyebrow,actionHref,actionText="Pogledaj sve",className=""}:{children:ReactNode[];title?:string;eyebrow?:string;actionHref?:string;actionText?:string;className?:string}){
  const rail=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0);
  const count=children.length;
  function go(delta:number){
    const el=rail.current;if(!el)return;
    const target=Math.max(0,Math.min(count-1,active+delta));
    el.children[target]?.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest",inline:"center"});
    setActive(target);
  }
  useEffect(()=>{
    const el=rail.current;if(!el)return;
    let raf=0;
    const update=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{
      const center=el.getBoundingClientRect().left+el.clientWidth/2;
      const nodes=Array.from(el.children);
      let closest=0,dist=Infinity;
      nodes.forEach((node,i)=>{const r=node.getBoundingClientRect(),d=Math.abs(r.left+r.width/2-center);if(d<dist){dist=d;closest=i;}});
      setActive(closest);
    });};
    el.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);update();
    return ()=>{el.removeEventListener("scroll",update);window.removeEventListener("resize",update);cancelAnimationFrame(raf)};
  },[count]);
  return <section className={"nx-carousel "+className} aria-label={title||eyebrow||"Karusel"}>
    <div className="nx-carousel-head">
      <div>{eyebrow&&<span className="nx-eyebrow">{eyebrow}</span>}{title&&<h2>{title}</h2>}</div>
      {actionHref&&<a className="nx-section-more" href={actionHref}>{actionText} <ArrowUpRight size={17}/></a>}
    </div>
    <div className="nx-rail-controls"><span>LISTAJ <span className="nx-rail-count">{String(active+1).padStart(2,"0")} / {String(count).padStart(2,"0")}</span></span>
      <div><button type="button" onClick={()=>go(-1)} disabled={active===0} aria-label="Prethodno"><ArrowLeft size={21}/></button><button type="button" onClick={()=>go(1)} disabled={active>=count-1} aria-label="Sledeće"><ArrowRight size={23}/></button></div>
    </div>
    <div className="nx-rail" ref={rail}>{children.map((child,i)=><div className={"nx-rail-item "+(i===active?"nx-rail-active":"")} key={i}>{child}</div>)}</div>
  </section>;
}
function IssueCover({issue}:{issue:Issue}){
  return <a className="nx-issue" href={"/izdanja/"+issue.id} aria-label={"Otvori izdanje "+issue.name+" 2026"}>
    <div className={"nx-issue-art "+(!issue.cover?"nx-issue-unverified":"")}>
      {issue.cover?.imageSrc&&<img src={issue.cover.imageSrc} alt="" loading="lazy"/>}
      <div className="nx-issue-shade"/>
      <div className="nx-issue-brand">NOVI <span>TALAS</span></div>
      <div className="nx-issue-title"><small>MESEČNO IZDANJE</small><strong>{issue.name}</strong><span>2026</span></div>
    </div>
    <div className="nx-issue-caption"><strong>{issue.name} 2026.</strong><ArrowUpRight size={19}/></div>
  </a>;
}
function StoryCard({article}:{article:Article}){
  return <article className="nx-story-card">
    <a href={article.href} className={"nx-story-photo"+(!article.imageSrc?" nx-story-typographic":"")}>{article.imageSrc?<img src={article.imageSrc} alt={article.imageAlt||article.title} loading="lazy"/>:<span className="nx-story-placeholder"><strong>NOVI TALAS</strong><small>{sectionLabel(article)}</small></span>}</a>
    <div className="nx-story-text"><LabelLink href={sectionHref(article)}>{sectionLabel(article)}</LabelLink><h3><a href={article.href}>{article.title}</a></h3><p>{article.description}</p></div>
  </article>;
}
function Home(){
  const selection=HOME_ARTICLES.map(article=>knownArticles.find(a=>a.href===article.href) || ({...article,category:article.category} as Article)).filter(a=>a.href!==HERO.href).slice(0,8);
  return <><main className="nx-main">
    <div className="nx-intro"><span className="nx-eyebrow">NASLOVNA</span></div>
    <section className="nx-hero">
      <a href={HERO.href} className="nx-hero-photo"><img src={HERO.image} alt={HERO.imageAlt} fetchPriority="high"/></a>
      <div className="nx-hero-copy"><LabelLink href={HERO.categoryHref}>{HERO.category}</LabelLink><h1><a href={HERO.href}>{HERO.title}</a></h1><p>{HERO.deck}</p><a className="nx-read" href={HERO.href}><span><ArrowRight size={21}/></span> Pročitaj priču</a></div>
    </section>
    <FocusCarousel title="Mesečna izdanja" eyebrow="ARHIVA / 2026" actionHref="/izdanja" actionText="Sva izdanja" className="nx-editions-carousel">
      {issues.map(issue=><IssueCover key={issue.id} issue={issue}/>)}
    </FocusCarousel>
    <FocusCarousel eyebrow="IZBOR REDAKCIJE" actionHref="/pretraga" actionText="Pretraži arhivu" className="nx-news-carousel">
      {selection.map(article=><StoryCard key={article.href} article={article}/>)}
    </FocusCarousel>
    <div className="nx-rubrics-title"><h2>Rubrike</h2></div>
    {SECTIONS.map((section,index)=>{
      const articles=knownArticles.filter(a=>sectionHref(a)==="/"+section.slug && published(a)).sort(chronological).slice(0,10);
      return articles.length?<FocusCarousel key={section.slug} title={section.title} eyebrow={String(index+1).padStart(2,"0")+" / "+String(SECTIONS.length).padStart(2,"0")} actionHref={"/"+section.slug} className="nx-section-carousel">
        {articles.map(article=><StoryCard key={article.href} article={article}/>)}
      </FocusCarousel>:null;
    })}
  </main></>;
}
function SectionLanding({slug}:{slug:string}){
  const section=SECTIONS.find(s=>s.slug===slug);
  if(!section)return <Home/>;
  const articles=knownArticles.filter(a=>sectionHref(a)==="/"+slug).sort(chronological);
  const dated=articles.filter(published);
  const undated=articles.filter(a=>!published(a));
  return <main className="nx-main nx-library"><div className="nx-library-intro"><span className="nx-eyebrow">RUBRIKA / {String(SECTIONS.findIndex(s=>s.slug===slug)+1).padStart(2,"0")}</span><h1>{section.title}</h1></div>{articles.length?<>{dated.length>0&&<FocusCarousel title="Najnovije">{dated.slice(0,10).map(a=><StoryCard key={a.href} article={a}/>)}</FocusCarousel>}<div className="nx-section-grid">{dated.map(a=><StoryCard key={a.href} article={a}/>)}</div>{undated.length>0&&<section className="nx-undated"><h2>Još iz arhive</h2><div className="nx-section-grid">{undated.map(a=><StoryCard key={a.href} article={a}/>)}</div></section>}</>:<div className="nx-empty">Arhiva ove rubrike je u dopuni.</div>}</main>;
}
function SearchLanding(){
  const [term,setTerm]=useState(()=>typeof window!=="undefined" ? new URLSearchParams(window.location.search).get("q")||"" : "");
  const normalized=term.trim();
  const matches=useMemo(()=>normalized.length>=2?searchArticles(normalized):[],[normalized]);
  const shown=matches.slice(0,60);
  useEffect(()=>{
    const restore=()=>setTerm(new URLSearchParams(window.location.search).get("q")||"");
    window.addEventListener("popstate",restore);
    return ()=>window.removeEventListener("popstate",restore);
  },[]);
  const submit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const q=term.trim();
    const url=q?"/pretraga?q="+encodeURIComponent(q):"/pretraga";
    window.history.replaceState(window.history.state,"",url);
  };
  const tryTerm=(q:string)=>{
    setTerm(q);
    window.history.replaceState(window.history.state,"","/pretraga?q="+encodeURIComponent(q));
  };
  return <main className="nx-main nx-search-page">
    <div className="nx-search-heading"><span className="nx-eyebrow">NOVI TALAS / ARHIVA</span><h1>Pretraga</h1><p>Pronađite priče, teme i analize u arhivi Novog talasa.</p></div>
    <form className="nx-search-form" role="search" onSubmit={submit}>
      <Search size={23} aria-hidden="true"/>
      <input type="search" name="q" value={term} onChange={event=>setTerm(event.target.value)} placeholder="Pretražite arhivu…" aria-label="Pretražite vesti i analize" autoComplete="off"/>
      {term&&<button className="nx-search-clear" type="button" aria-label="Obriši pretragu" onClick={()=>{setTerm("");window.history.replaceState(window.history.state,"","/pretraga");}}><X size={20}/></button>}
      <button className="nx-search-submit" type="submit">Pretraži <ArrowRight size={17}/></button>
    </form>
    {normalized.length>=2?
      <div className="nx-search-content"><div className="nx-search-result-meta">{matches.length?matches.length+" "+(matches.length===1?"pronađen tekst":"pronađenih tekstova"):"Nema rezultata"} za „{normalized}“</div>
        {shown.length?<><div className="nx-search-grid">{shown.map(article=><StoryCard key={article.href} article={article}/>)}</div>{shown.length<matches.length&&<p className="nx-search-note">Prikazano prvih {shown.length} rezultata. Sužavanjem pojma možete precizirati pretragu.</p>}</>:<p className="nx-search-empty">Nema pronađenih tekstova. Pokušajte drugim pojmom ili nazivom teme.</p>}
      </div>:
      <div className="nx-search-suggestions"><span className="nx-footer-kicker">PREDLOZI ZA PRETRAGU</span><div>{["Bela kuća","Srbija","Grenland","NASA","izbori"].map(q=><button type="button" key={q} onClick={()=>tryTerm(q)}>{q}<ArrowUpRight size={14}/></button>)}</div></div>}
  </main>;
}
function Library(){return <main className="nx-main nx-library"><div className="nx-library-intro"><span className="nx-eyebrow">MESEČNA ARHIVA / 2026.</span><h1>Biblioteka izdanja</h1><p>Februar — oktobar 2026.</p></div><div className="nx-library-grid">{issues.map(issue=><IssueCover key={issue.id} issue={issue}/>)}</div></main>}
function Edition({id}:{id:string}){
  const issue=issues.find(i=>i.id===id);
  if(!issue)return <main className="nx-main nx-empty"><h1>Izdanje nije pronađeno</h1><a href="/izdanja">Sva izdanja</a></main>;
  const sections=SECTIONS.map(s=>({...s,articles:issue.articles.filter(a=>sectionHref(a)==="/"+s.slug)})).filter(s=>s.articles.length);
  return <main className="nx-main nx-edition">
    <a className="nx-back" href="/izdanja"><ArrowLeft size={17}/> Sva izdanja</a>
    <div className="nx-edition-heading"><span className="nx-eyebrow">MESEČNO IZDANJE · 2026.</span><h1>{issue.name}</h1><p>{issue.articles.length?formatStoryCount(issue.articles.length):"Izdanje u pripremi."}</p></div>
    {issue.cover&&<div className="nx-edition-lead"><a href={issue.cover.href}><img src={issue.cover.imageSrc} alt={issue.cover.imageAlt||issue.cover.title}/></a><span><LabelLink href={sectionHref(issue.cover)}>{sectionLabel(issue.cover)}</LabelLink><h2><a href={issue.cover.href}>{issue.cover.title}</a></h2><a href={issue.cover.href} className="nx-edition-open">Pročitaj <ArrowUpRight size={18}/></a></span></div>}
    {sections.map(s=><FocusCarousel key={s.slug} title={s.title} actionHref={"/"+s.slug}>{s.articles.map(a=><StoryCard key={a.href} article={a}/>)}</FocusCarousel>)}
    {!issue.articles.length&&<div className="nx-empty">Izdanje je u pripremi.</div>}
  </main>;
}
export default function NewTalasExperience(){
  const path=typeof window!=="undefined"?window.location.pathname:"/";
  useEffect(()=>{document.title=path==="/"?"Novi Talas — Priče koje ostaju":path==="/pretraga"?"Pretraga | Novi Talas":path==="/izdanja"?"Mesečna izdanja | Novi Talas":SECTIONS.some(section=>"/"+section.slug===path)?"Rubrike | Novi Talas":"Izdanje | Novi Talas"},[path]);
  return <div className="nx"><MagazineHeader/>{path==="/pretraga"?<SearchLanding/>:path==="/izdanja"?<Library/>:path.startsWith("/izdanja/")?<Edition id={path.split("/")[2]}/>:SECTIONS.some(s=>"/"+s.slug===path)?<SectionLanding slug={path.slice(1)}/>:<Home/>}<MagazineFooter/></div>;
}
