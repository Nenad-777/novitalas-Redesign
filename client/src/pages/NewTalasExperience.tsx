import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, Menu, X } from "lucide-react";
import { articleSearchIndex, type SearchArticle } from "../../../shared/articleSearch";
import { HOME_ARTICLES } from "./homeArticles";
import "./NewTalasExperience.css";

type Article = SearchArticle;
type Issue = { id:string; name:string; articles:Article[]; cover:Article|null };
const MONTH_NAMES = ["FEBRUAR","MART","APRIL","MAJ","JUN","JUL","AVGUST","SEPTEMBAR","OKTOBAR"];
const SECTIONS = [
  { label:"Geopolitika", slug:"geopolitika", title:"Geopolitika", deck:"Velike sile, granice i svet u promeni." },
  { label:"Srbija", slug:"srbija", title:"Srbija", deck:"Događaji, odluke i društvo." },
  { label:"Obaveštajni izvori", slug:"obavestajni-izvori", title:"Obaveštajni izvori", deck:"Informacije, uticaj i moć." },
  { label:"Naša planeta", slug:"nasa-planeta", title:"Naša planeta", deck:"Nauka, kultura, istorija i otkrića." }
] as const;
const HERO = {
  href:"/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina",
  title:"Bela kuća ograničila satelitsku vezu Ukrajini",
  deck:"Ko je izdao nalog i zašto?",
  image:"/news/starshield-approved.jpg",
  category:"Obaveštajni izvori",
  categoryHref:"/obavestajni-izvori"
};
const published = (a:Article) => typeof a.publishedAt==="string" && /^2026-\d{2}-\d{2}$/.test(a.publishedAt);
const knownArticles = Array.from(new Map(articleSearchIndex.filter(a=>a.href && a.title && a.href.startsWith("/") && a.href.split("/").length>2).map(a=>[a.href,a])).values());
const issues:Issue[] = MONTH_NAMES.map((name,i)=>{
  const id="2026-"+String(i+2).padStart(2,"0");
  const articles=knownArticles.filter(a=>published(a) && a.publishedAt!.startsWith(id)).sort((a,b)=>b.publishedAt!.localeCompare(a.publishedAt!));
  return {id,name,articles,cover:articles.find(a=>Boolean(a.imageSrc))||null};
}).reverse();
function sectionHref(a:Article){const part=a.href.split("/")[1];return SECTIONS.find(s=>s.slug===part)?.slug ? "/"+part : "/nasa-planeta";}
function sectionLabel(a:Article){return SECTIONS.find(s=>"/"+s.slug===sectionHref(a))?.label || a.category || "Novi talas";}
function Brand(){return <span className="nx-brand">NOVI <em>TALAS</em></span>}
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
    <a href={article.href} className="nx-story-photo"><img src={article.imageSrc||"/news/svet-dnevni.jpg"} alt={article.imageAlt||article.title} loading="lazy"/></a>
    <div className="nx-story-text"><LabelLink href={sectionHref(article)}>{sectionLabel(article)}</LabelLink><h3><a href={article.href}>{article.title}</a></h3><p>{article.description}</p></div>
  </article>;
}
function Header(){
  const [open,setOpen]=useState(false);
  return <header className="nx-header">
    <div className="nx-topline"><span>NEZAVISNI INFORMATIVNO-ANALITIČKI MAGAZIN</span><span>BEOGRAD · 2026.</span></div>
    <div className="nx-masthead"><a href="/" aria-label="Novi talas, naslovna"><Brand/></a><div className="nx-head-actions"><a href="/izdanja">IZDANJA</a><a href="/pretraga" aria-label="Pretraga"><Search size={21}/></a><button type="button" onClick={()=>setOpen(v=>!v)} aria-label={open?"Zatvori meni":"Otvori meni"} aria-expanded={open}>{open?<X size={24}/>:<Menu size={24}/>}</button></div></div>
    <nav className={"nx-nav "+(open?"nx-nav-open":"")} aria-label="Rubrike">{SECTIONS.map(s=><a key={s.slug} href={"/"+s.slug}>{s.label}</a>)}<a href="/izdanja">Mesečna izdanja</a></nav>
  </header>;
}
function Footer(){return <footer className="nx-footer"><Brand/><span>Priče koje ostaju.</span><a href="/izdanja">Biblioteka izdanja <ArrowUpRight size={16}/></a></footer>}
function Home(){
  const selection=HOME_ARTICLES.slice(0,8) as Article[];
  return <><main className="nx-main">
    <div className="nx-intro"><span className="nx-eyebrow">NOVI TALAS / NASLOVNA</span><span>SVET U KONTEKSTU</span></div>
    <section className="nx-hero">
      <a href={HERO.href} className="nx-hero-photo"><img src={HERO.image} alt="Urednička ilustracija ukrajinskog vojnika i satelitskog terminala" fetchPriority="high"/></a>
      <div className="nx-hero-copy"><LabelLink href={HERO.categoryHref}>{HERO.category}</LabelLink><h1><a href={HERO.href}>{HERO.title}</a></h1><p>{HERO.deck}</p><a className="nx-read" href={HERO.href}><span><ArrowRight size={21}/></span> Pročitaj priču</a></div>
    </section>
    <FocusCarousel title="Mesečna izdanja" eyebrow="BIBLIOTEKA NOVOG TALASA" actionHref="/izdanja" actionText="Sva izdanja" className="nx-editions-carousel">
      {issues.map(issue=><IssueCover key={issue.id} issue={issue}/>)}
    </FocusCarousel>
    <FocusCarousel eyebrow="IZBOR REDAKCIJE · VESTI" actionHref="/pretraga" actionText="Pretraži arhivu" className="nx-news-carousel">
      {selection.map(article=><StoryCard key={article.href} article={article}/>)}
    </FocusCarousel>
    <div className="nx-rubrics-title"><span className="nx-eyebrow">TEME KOJE PRATIMO</span><h2>Rubrike</h2></div>
    {SECTIONS.map(section=>{
      const articles=knownArticles.filter(a=>sectionHref(a)==="/"+section.slug && a.imageSrc).sort((a,b)=>(b.publishedAt||"").localeCompare(a.publishedAt||"")).slice(0,10);
      return articles.length?<FocusCarousel key={section.slug} title={section.title} eyebrow={section.deck} actionHref={"/"+section.slug} className="nx-section-carousel">
        {articles.map(article=><StoryCard key={article.href} article={article}/>)}
      </FocusCarousel>:null;
    })}
  </main></>;
}
function SectionLanding({slug}:{slug:string}){
  const section=SECTIONS.find(s=>s.slug===slug);
  if(!section)return <Home/>;
  const articles=knownArticles.filter(a=>sectionHref(a)==="/"+slug && a.imageSrc).sort((a,b)=>(b.publishedAt||"").localeCompare(a.publishedAt||""));
  return <main className="nx-main nx-library"><div className="nx-library-intro"><span className="nx-eyebrow">NOVI TALAS / RUBRIKA</span><h1>{section.title}</h1><p>{section.deck}</p></div>{articles.length?<><FocusCarousel eyebrow="NAJNOVIJE IZ RUBRIKE" title="Izdvajamo" actionHref="/izdanja" actionText="Mesečna izdanja">{articles.slice(0,10).map(a=><StoryCard key={a.href} article={a}/>)}</FocusCarousel><div className="nx-section-grid">{articles.map(a=><StoryCard key={a.href} article={a}/>)}</div></>:<div className="nx-empty">Arhiva ove rubrike je u dopuni.</div>}</main>;
}
function Library(){return <main className="nx-main nx-library"><div className="nx-library-intro"><span className="nx-eyebrow">NOVI TALAS / ARHIVA</span><h1>Biblioteka izdanja</h1><p>Svaki mesec. Jedna korica. Čitav svet tema.</p></div><div className="nx-library-grid">{issues.map(issue=><IssueCover key={issue.id} issue={issue}/>)}</div><p className="nx-archive-note">Arhiva se dopunjava na osnovu potvrđenih datuma objavljivanja. Nepotpuni metapodaci ne znače da tekst nije objavljen.</p></main>}
function Edition({id}:{id:string}){
  const issue=issues.find(i=>i.id===id);
  if(!issue)return <main className="nx-main nx-empty"><h1>Izdanje nije pronađeno</h1><a href="/izdanja">Sva izdanja</a></main>;
  const sections=SECTIONS.map(s=>({...s,articles:issue.articles.filter(a=>sectionHref(a)==="/"+s.slug)})).filter(s=>s.articles.length);
  return <main className="nx-main nx-edition">
    <a className="nx-back" href="/izdanja"><ArrowLeft size={17}/> Sva izdanja</a>
    <div className="nx-edition-heading"><span className="nx-eyebrow">MESEČNO IZDANJE · 2026.</span><h1>{issue.name}</h1><p>{issue.articles.length?issue.articles.length+" evidentiranih tekstova sa potvrđenim datumom objavljivanja":"Arhiva ovog meseca je u proveri."}</p></div>
    {issue.cover&&<div className="nx-edition-lead"><a href={issue.cover.href}><img src={issue.cover.imageSrc} alt={issue.cover.imageAlt||issue.cover.title}/></a><span><LabelLink href={sectionHref(issue.cover)}>{sectionLabel(issue.cover)}</LabelLink><h2><a href={issue.cover.href}>{issue.cover.title}</a></h2><a href={issue.cover.href} className="nx-edition-open">Pročitaj <ArrowUpRight size={18}/></a></span></div>}
    {sections.map(s=><FocusCarousel key={s.slug} title={s.title} eyebrow="U OVOM IZDANJU" actionHref={"/"+s.slug}>{s.articles.map(a=><StoryCard key={a.href} article={a}/>)}</FocusCarousel>)}
    {!issue.articles.length&&<div className="nx-empty">Nećemo dodeljivati tekstove ovom mesecu bez potvrđenog datuma. Sadržaj će se pojaviti po završetku inventara.</div>}
  </main>;
}
export default function NewTalasExperience(){
  const path=typeof window!=="undefined"?window.location.pathname:"/";
  useEffect(()=>{document.title=path==="/"?"Novi Talas — Priče koje ostaju":path==="/izdanja"?"Mesečna izdanja | Novi Talas":"Izdanje | Novi Talas"},[path]);
  return <div className="nx"><Header/>{path==="/izdanja"?<Library/>:path.startsWith("/izdanja/")?<Edition id={path.split("/")[2]}/>:SECTIONS.some(s=>"/"+s.slug===path)?<SectionLanding slug={path.slice(1)}/>:<Home/>}<Footer/></div>;
}
