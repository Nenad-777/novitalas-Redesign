import { useEffect, useRef, useState, type ComponentType, type FormEvent, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Menu, Search, Share2, X } from "lucide-react";
import { EditionEmbedContext } from "@/contexts/EditionEmbedContext";
import StarshieldWhiteHouseArticle from "./StarshieldWhiteHouseArticle";
import KekovaShipwreckArticle from "./KekovaShipwreckArticle";
import WilsonCrtaElectionArticle from "./WilsonCrtaElectionArticle";
import GreenlandUsArcticArticle from "./GreenlandUsArcticArticle";
import RenoirHeistArticle from "./RenoirHeistArticle";
import BNDHanningEspionage2026Article from "./BNDHanningEspionage2026Article";
import VucicZapadCentriMociArticle from "./VucicZapadCentriMociArticle";
import DzonatanDugovecnostArticle from "./dzonatan-kornjaca-194-godine-tajna-dugovecnosti";
import SrbijaActSenateArticle from "./SrbijaActSenateArticle";
import "./NoviTalas3Pilot.css";

const PATH = "/novi-talas-3-lab";
type Story = {
  id:string; href:string; section:string; title:string; deck:string;
  date:string; image:string; alt:string; credit:string; Component:ComponentType;
};
const STORIES:Story[] = [
  {id:"starshield",section:"Obaveštajni izvori",title:"Bela kuća ograničila satelitsku vezu Ukrajini: ko je izdao nalog i zašto?",deck:"Reuters navodi da je nalog za ograničenje vojnog sistema Starshield stigao iz Bele kuće. Identitet nalogodavca nije poznat.",date:"16. oktobar 2026.",image:"/news/starshield-approved.jpg",alt:"AI ilustracija vojnika sa satelitskim terminalom u sumrak",credit:"AI ilustracija / Novi Talas",href:"/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina",Component:StarshieldWhiteHouseArticle},
  {id:"kekova",section:"Naša planeta",title:"Najstariji poznati brodolom na svetu pronađen kod Turske",deck:"Arheolozi su kod Kekove pronašli ostatke brodoloma starog između 4.400 i 4.700 godina.",date:"16. oktobar 2026.",image:"/news/kekova-approved-full.webp",alt:"AI ilustracija arheološkog nalazišta na morskom dnu kod Kekove",credit:"AI ilustracija / Novi talas. Nije fotografija nalazišta.",href:"/nasa-planeta/najstariji-brodolom-kekova-turska-4700-godina",Component:KekovaShipwreckArticle},
  {id:"vilson",section:"Srbija",title:"Vilson upozorio na beloruski scenario: Svet će pratiti izbore u Srbiji",deck:"Američki kongresmen razgovarao je sa predstavnicima CRTE o izbornim uslovima u Srbiji.",date:"15. oktobar 2026.",image:"/news/wilson-crta-approved.webp",alt:"Urednički kolaž Džoa Vilsona i zgrade u Beogradu",credit:"Urednički kolaž / Novi Talas",href:"/srbija/vilson-upozorio-na-beloruski-scenario-svet-ce-pratiti-izbore-u-srbiji",Component:WilsonCrtaElectionArticle},
  {id:"bnd",section:"Obaveštajni izvori",title:"Špijunska afera u Nemačkoj: evropske službe strahuju za svoje tajne",deck:"Hapšenje i istraga u Berlinu otvorili su pitanja bezbednosti poverljivih informacija.",date:"11. oktobar 2026.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a4/Zentrale_des_Bundesnachrichtendienst%2C_Berlin.jpg",alt:"Zgrada sedišta nemačke obaveštajne službe BND u Berlinu",credit:"Wikimedia Commons / postojeći urednički izvor",href:"/obavestajni-izvori/spijunska-afera-nemacka-evropske-sluzbe-strahuju-za-tajne",Component:BNDHanningEspionage2026Article},
  {id:"vucic",section:"Srbija",title:"Vučić i Zapad: optužbe za autokratiju stigle su u centre moći",deck:"Kako se menja međunarodni pogled na demokratiju, slobodu medija i vladavinu prava u Srbiji.",date:"7. oktobar 2026.",image:"/news/vucic-zapad-centri-moci.webp",alt:"Urednička ilustracija uz analizu odnosa Srbije i zapadnih partnera",credit:"Ilustracija / Novi Talas",href:"/srbija/vucic-i-zapad-optuzbe-za-autokratiju-stigle-su-u-centre-moci",Component:VucicZapadCentriMociArticle},
  {id:"djonatan",section:"Naša planeta",title:"Živi već 194 godine, a njegove ćelije kriju moguću tajnu dugovečnosti",deck:"Priča o Džonatanu, najstarijoj poznatoj živoj kopnenoj životinji.",date:"10. oktobar 2026.",image:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Jonathan_Tortoise_2022.jpg",alt:"Džinovska kornjača Džonatan na ostrvu Sveta Jelena",credit:"Wikimedia Commons / postojeći urednički izvor",href:"/nasa-planeta/dzonatan-kornjaca-194-godine-tajna-dugovecnosti",Component:DzonatanDugovecnostArticle},
  {id:"grenland",section:"Geopolitika",title:"Amerika nije dobila Grenland. Dobija ono zbog čega ga je želela",deck:"Zašto je arktički prostor ponovo u središtu strateških interesa.",date:"19. septembar 2026.",image:"/news/greenland-us-arctic.jpg",alt:"Urednička ilustracija Grenlanda iz vazduha",credit:"Ilustracija / Novi Talas",href:"/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela",Component:GreenlandUsArcticArticle},
  {id:"srbijaact",section:"Geopolitika",title:"SRBIJA Act stigao i u Senat: Wilson podržao inicijativu",deck:"U Senatu SAD predstavljen je predlog S. 5611. To ne znači da je usvojen zakon.",date:"1. oktobar 2026.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a6/US_Senate_Session_Chamber.jpg",alt:"Sala Senata Sjedinjenih Država",credit:"U.S. Senate Photo Studio / Wikimedia Commons — Public Domain",href:"/geopolitika/srbija-act-stigao-i-u-senat-wilson-podrzao-inicijativu-i-ponovo-otvorio-pitanje-izbora-u-srbiji",Component:SrbijaActSenateArticle},
  {id:"renoir",section:"Kultura",title:"Ko krade Renoara ako ne može da ga proda?",deck:"Misterija nestalih slika i paradoks umetničkih dela koja je gotovo nemoguće prodati.",date:"9. septembar 2026.",image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Renoir_-_Portrait_de_Madame_Colonna_Romano%2C_non_dat%C3%A9.jpg",alt:"Pjer-Ogist Renoar, Portret gospođe Kolona Romano",credit:"Renoar / Wikimedia Commons, CC BY-SA 4.0",href:"/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",Component:RenoirHeistArticle},
];
const byId=(id:string|null)=>STORIES.find(s=>s.id===id)||null;
const NAV=[
  {label:"Geopolitika",id:"geopolitika"},
  {label:"Obaveštajni izvori",id:"obavestajni-izvori"},
  {label:"Srbija",id:"srbija"},
  {label:"Naša planeta",id:"nasa-planeta"},
  {label:"Kultura",id:"kultura"},
];
const MONTHS=[
  {id:"2026-10",month:"OKTOBAR",year:"2026",image:"/news/starshield-approved.jpg",alt:"Starshield, oktobar 2026",kind:"OBAVEŠTAJNI IZVORI"},
  {id:"2026-09",month:"SEPTEMBAR",year:"2026",image:"/news/greenland-us-arctic.jpg",alt:"Grenland, septembar 2026",kind:"GEOPOLITIKA"},
  {id:"2026-02",month:"FEBRUAR",year:"2026",image:"/alma-mlecni-put.jpg",alt:"Mlečni put, februar 2026",kind:"NAŠA PLANETA"},
];
function Wordmark({small=false}:{small?:boolean}){return <span className={"nt3-wordmark"+(small?" nt3-wordmark-small":"")}>NOVI <span>TALAS</span></span>;}
function prefersMotion(){return typeof window!=="undefined"&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;}
function focusImage(id:string, reader:boolean){
  return reader
    ? document.querySelector<HTMLImageElement>(".nt3-article-layer article img")
    : Array.from(document.querySelectorAll<HTMLImageElement>("img[data-nt3-id]")).find(el=>el.dataset.nt3Id===id)||null;
}
function normQuery(){return new URLSearchParams(window.location.search).get("clanak");}

export default function NoviTalas3Pilot(){
  const [active,setActive]=useState<string|null>(()=>byId(normQuery())?.id||null);
  const [searchOpen,setSearchOpen]=useState(false);
  const [searchValue,setSearchValue]=useState("");
  const [menuOpen,setMenuOpen]=useState(false);
  const [shareText,setShareText]=useState("");
  const readerRef=useRef<HTMLDivElement>(null);
  const backRef=useRef<HTMLButtonElement>(null);
  const busy=useRef(false);
  const lastScroll=useRef(0);
  const current=useRef(active);
  current.current=active;
  const story=byId(active);
  const Reader=story?.Component;
  useEffect(()=>{
    const robots=document.querySelector<HTMLMetaElement>('meta[name="robots"]'),created=!robots;
    const el=robots||document.createElement("meta");const old=el.getAttribute("content");
    el.name="robots";el.content="noindex,nofollow,noarchive";if(created)document.head.append(el);
    const title=document.title;document.title="Novi Talas 3.0 — naslovna · Pilot";
    return()=>{if(created)el.remove();else if(old===null)el.removeAttribute("content");else el.content=old;document.title=title;};
  },[]);
  useEffect(()=>{if(!story)return;const old=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=old;};},[story]);
  useEffect(()=>{
    const onPop=()=>transition(byId(normQuery())?.id||null);
    const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape"){if(current.current)closeStory();else setMenuOpen(false);}};
    window.addEventListener("popstate",onPop);window.addEventListener("keydown",onKey);
    return()=>{window.removeEventListener("popstate",onPop);window.removeEventListener("keydown",onKey);};
  });

  function transition(next:string|null){
    if(busy.current||current.current===next)return;
    const old=current.current;
    if(!old&&next)lastScroll.current=window.scrollY;
    const source=focusImage(old||next||"",Boolean(old));
    const start=source?.getBoundingClientRect();
    let ghost:HTMLImageElement|null=null;
    if(source&&start&&start.width>30&&prefersMotion()&&start.bottom>0&&start.top<innerHeight){
      ghost=document.createElement("img");ghost.src=source.currentSrc||source.src;ghost.alt="";
      Object.assign(ghost.style,{position:"fixed",zIndex:"99999",pointerEvents:"none",top:start.top+"px",left:start.left+"px",width:start.width+"px",height:start.height+"px",objectFit:"cover",objectPosition:getComputedStyle(source).objectPosition,transformOrigin:"top left",boxShadow:"0 12px 35px #17253c25"});
      document.body.append(ghost);
    }
    flushSync(()=>{setActive(next);setShareText("");});
    if(!next){window.scrollTo({top:lastScroll.current,behavior:"instant"});}
    if(next&&readerRef.current)readerRef.current.scrollTop=0;
    requestAnimationFrame(()=>{
      const destination=focusImage(old||next||"",Boolean(next));
      const end=destination?.getBoundingClientRect();
      if(!ghost||!destination||!start||!end||end.width<30||typeof ghost.animate!=="function"){
        ghost?.remove();if(next)backRef.current?.focus({preventScroll:true});return;
      }
      destination.style.visibility="hidden";busy.current=true;
      const animation=ghost.animate([
        {transform:"translate(0px,0px) scale(1,1)",opacity:1},
        {transform:"translate("+(end.left-start.left)+"px,"+(end.top-start.top)+"px) scale("+(end.width/start.width)+","+(end.height/start.height)+")",opacity:1}
      ],{duration:400,easing:"cubic-bezier(.22,.7,.18,1)",fill:"forwards"});
      animation.finished.catch(()=>{}).then(()=>{
        destination.style.visibility="";ghost?.remove();busy.current=false;
        if(next)backRef.current?.focus({preventScroll:true});
      });
    });
  }
  function openStory(id:string){
    if(!byId(id)||busy.current)return;
    window.history.pushState({nt3:true},"",PATH+"?clanak="+encodeURIComponent(id));
    transition(id);
  }
  function closeStory(){
    if(busy.current)return;
    if(window.history.state?.nt3)window.history.back();
    else{window.history.replaceState(null,"",PATH);transition(null);}
  }
  function scrollToSection(id:string){
    setMenuOpen(false);
    document.getElementById("nt3-"+id)?.scrollIntoView({behavior:prefersMotion()?"smooth":"instant",block:"start"});
  }
  function search(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(searchValue.trim())window.location.href="/pretraga?q="+encodeURIComponent(searchValue.trim());
  }
  async function share(){
    if(!story)return;const url="https://novitalas.org"+story.href;
    try{if(navigator.share)await navigator.share({url,title:story.title});else{await navigator.clipboard.writeText(url);setShareText("Link je kopiran.");}}
    catch(err){if((err as Error).name!=="AbortError")setShareText(url);}
  }
  const storyBtn=(s:Story,kind:string,element:ReactNode)=>
    <button key={s.id+"-"+kind} type="button" onClick={()=>openStory(s.id)} className={"nt3-story nt3-story-"+kind} aria-label={"Pročitaj: "+s.title}>{element}</button>;

  return <div className="nt3" data-nt3-pilot>
    <header className="nt3-header">
      <div className="nt3-edition-date"><span>17. OKTOBAR 2026.</span><span>UREĐIVAČKI PILOT · NIJE PRODUKCIJA</span></div>
      <div className="nt3-header-main">
        <button type="button" onClick={()=>setMenuOpen(x=>!x)} aria-label="Rubrike" aria-expanded={menuOpen} className="nt3-menu-button"><Menu size={21}/></button>
        <a className="nt3-logo" href={PATH} aria-label="Novi talas, eksperimentalna naslovna"><Wordmark/></a>
        <div className="nt3-header-actions"><button type="button" aria-label="Pretraga" onClick={()=>setSearchOpen(x=>!x)}><Search size={21}/></button></div>
      </div>
      <nav className={"nt3-nav"+(menuOpen?" nt3-nav-open":"")} aria-label="Rubrike Novog talasa">
        {NAV.map(n=><button type="button" key={n.id} onClick={()=>scrollToSection(n.id)}>{n.label}</button>)}
        <button type="button" onClick={()=>scrollToSection("izdanja")} className="nt3-nav-edition">Izdanja <ArrowUpRight size={13}/></button>
      </nav>
      {searchOpen&&<form className="nt3-search" onSubmit={search}><label htmlFor="nt3-search">Pretraga Novog talasa</label><div><input id="nt3-search" type="search" placeholder="Unesi pojam..." autoFocus value={searchValue} onChange={e=>setSearchValue(e.target.value)}/><button type="submit"><ArrowRight size={21}/></button></div></form>}
    </header>

    <main>
      <section className="nt3-front" aria-label="Naslovna vest">
        <div className="nt3-front-kicker"><span>NASLOVNA</span><span>17 / 10 / 2026</span></div>
        {storyBtn(STORIES[0],"lead",<>
          <div className="nt3-hero-photo"><img src={STORIES[0].image} data-nt3-id={STORIES[0].id} alt={STORIES[0].alt} fetchPriority="high"/></div>
          <div className="nt3-hero-headline"><span className="nt3-kicker">OBAVEŠTAJNI IZVORI</span><h1>Bela kuća ograničila satelitsku vezu Ukrajini</h1><p>Ko je izdao nalog i zašto?</p><span className="nt3-cta">Pročitaj vest <ArrowUpRight size={17}/></span></div>
        </>)}
        <div className="nt3-feature-grid">
          {STORIES.slice(1,3).map((s,i)=>storyBtn(s,"feature",<>
            <div className="nt3-feature-photo"><img src={s.image} data-nt3-id={s.id} alt={s.alt} loading="lazy"/></div>
            <div className="nt3-feature-info"><span className="nt3-kicker">{s.section.toUpperCase()}</span><h2>{s.title}</h2><span className="nt3-feature-action">Pročitaj <ArrowUpRight size={16}/></span></div>
          </>))}
        </div>
      </section>

      <div className="nt3-rubrics">
        <div className="nt3-part-title"><span>RUBRIKE</span></div>
        <section className="nt3-rubric nt3-rubric-geopolitika" id="nt3-geopolitika">
          <div className="nt3-section-heading"><h2>Geopolitika</h2><a href="https://novitalas.org/geopolitika">Sve iz rubrike <ArrowUpRight size={17}/></a></div>
          <div className="nt3-geop-grid">
            {storyBtn(STORIES[6],"geop",<><img src={STORIES[6].image} data-nt3-id="grenland" alt={STORIES[6].alt} loading="lazy"/><span className="nt3-geop-content"><small>IZ ARHIVE · 19. SEPTEMBAR 2026.</small><strong>{STORIES[6].title}</strong><em>Pročitaj priču <ArrowUpRight size={15}/></em></span></>)}
            {storyBtn(STORIES[7],"geop-aside",<><img src={STORIES[7].image} data-nt3-id="srbijaact" alt={STORIES[7].alt} loading="lazy"/><span><small>1. OKTOBAR 2026.</small><strong>{STORIES[7].title}</strong><em>Pročitaj <ArrowUpRight size={15}/></em></span></>)}
          </div>
        </section>

        <section className="nt3-rubric" id="nt3-obavestajni-izvori">
          <div className="nt3-section-heading"><h2>Obaveštajni izvori</h2><a href="https://novitalas.org/obavestajni-izvori">Sve iz rubrike <ArrowUpRight size={17}/></a></div>
          {storyBtn(STORIES[3],"rubric-line",<><img src={STORIES[3].image} data-nt3-id="bnd" alt={STORIES[3].alt} loading="lazy"/><span><small>{STORIES[3].date}</small><strong>{STORIES[3].title}</strong><em>Pročitaj <ArrowUpRight size={16}/></em></span></>)}
        </section>
        <section className="nt3-rubric" id="nt3-srbija">
          <div className="nt3-section-heading"><h2>Srbija</h2><a href="https://novitalas.org/srbija">Sve iz rubrike <ArrowUpRight size={17}/></a></div>
          {storyBtn(STORIES[4],"rubric-line",<><img src={STORIES[4].image} data-nt3-id="vucic" alt={STORIES[4].alt} loading="lazy"/><span><small>{STORIES[4].date}</small><strong>{STORIES[4].title}</strong><em>Pročitaj <ArrowUpRight size={16}/></em></span></>)}
        </section>
        <section className="nt3-rubric" id="nt3-nasa-planeta">
          <div className="nt3-section-heading"><h2>Naša planeta</h2><a href="https://novitalas.org/nasa-planeta">Sve iz rubrike <ArrowUpRight size={17}/></a></div>
          {storyBtn(STORIES[5],"rubric-line",<><img src={STORIES[5].image} data-nt3-id="djonatan" alt={STORIES[5].alt} loading="lazy"/><span><small>{STORIES[5].date}</small><strong>{STORIES[5].title}</strong><em>Pročitaj <ArrowUpRight size={16}/></em></span></>)}
        </section>
        <section className="nt3-rubric nt3-rubric-culture" id="nt3-kultura">
          <div className="nt3-section-heading"><h2>Kultura</h2><span>ODABRANA PRIČA</span></div>
          {storyBtn(STORIES[8],"culture",<><div className="nt3-culture-img"><img src={STORIES[8].image} data-nt3-id="renoir" alt={STORIES[8].alt} loading="lazy"/></div><div className="nt3-culture-text"><span className="nt3-kicker">IZ ARHIVE · 9. SEPTEMBAR 2026.</span><h3>Ko krade Renoara ako ne može da ga proda?</h3><span className="nt3-cta">Pročitaj priču <ArrowUpRight size={16}/></span></div></>)}
          <small className="nt3-image-credit">{STORIES[8].credit}</small>
        </section>
      </div>

      <section className="nt3-issues" id="nt3-izdanja" aria-label="Mesečni magazini">
        <div className="nt3-issues-top"><div><span>ARHIVA NOVOG TALASA</span><h2>Izdanja</h2></div><a href="/magazini-lab">Svi magazini <ArrowUpRight size={17}/></a></div>
        <div className="nt3-issue-grid">{MONTHS.map((m,i)=><a href={"/magazini-lab?mesec="+m.id} key={m.id} className="nt3-issue-card">
          <span className="nt3-issue-cover"><img src={m.image} alt={m.alt} loading={i===0?"eager":"lazy"}/><span className="nt3-issue-shade"/><span className="nt3-issue-logo">NOVI <b>TALAS</b></span><span className="nt3-issue-lettering"><small>{m.kind}</small><strong>{m.month}</strong><em>{m.year}</em></span></span>
          <span className="nt3-issue-label">{m.month} {m.year}. <ArrowUpRight size={16}/></span>
        </a>)}</div>
      </section>
    </main>
    <footer className="nt3-footer"><Wordmark small/><div><a href="/magazini-lab">Izdanja</a><a href="https://novitalas.org">Postojeći sajt <ArrowUpRight size={15}/></a></div></footer>

    {story&&Reader&&<div className="nt3-reader" role="dialog" aria-modal="true" aria-label={"Članak: "+story.title}>
      <header className="nt3-reader-top"><button ref={backRef} type="button" onClick={closeStory}><ArrowLeft size={20}/><span>Nazad na naslovnu</span></button><Wordmark small/><button type="button" onClick={share} aria-label="Podeli originalni članak"><Share2 size={19}/></button></header>
      <div className="nt3-reader-scroll" ref={readerRef}>
        <div className="nt3-article-layer"><EditionEmbedContext.Provider value={true}><Reader/></EditionEmbedContext.Provider></div>
        <div className="nt3-reader-bottom"><button type="button" onClick={closeStory}><BookOpen size={18}/> Nazad na naslovnu</button><a href={"https://novitalas.org"+story.href} target="_blank" rel="noopener noreferrer">Originalni tekst <ArrowUpRight size={16}/></a></div>
      </div>
      {shareText&&<p className="nt3-share-status" role="status">{shareText}</p>}
    </div>}
  </div>;
}
