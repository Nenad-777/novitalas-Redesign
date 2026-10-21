import { useEffect, useRef, useState } from "react";
import { Search, Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import "../pages/NewTalasExperience.css";

/**
 * Shared magazine chrome for 3.0 homepage, archive AND all legacy articles.
 * One global identity: editorial nav, search, dark mode and footer.
 */
export const SECTIONS = [
  { label:"Geopolitika", slug:"geopolitika", title:"Geopolitika" },
  { label:"Srbija", slug:"srbija", title:"Srbija" },
  { label:"Obaveštajni izvori", slug:"obavestajni-izvori", title:"Obaveštajni izvori" },
  { label:"Naša planeta", slug:"nasa-planeta", title:"Naša planeta" },
  { label:"Kultura", slug:"kultura", title:"Kultura" }
] as const;

function Brand(){return <span className="nx-brand">NOVI <em>TALAS</em></span>}
function WaveSignal(){return <span className="nx-wave-divider" aria-hidden="true"><i/><svg viewBox="0 0 120 24" role="presentation"><path d="M2 12 H34 C41 12 41 7 45 7 C50 7 49 18 53 18 C58 18 56 4 60 4 C64 4 62 20 67 20 C72 20 72 12 80 12 H118" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><i/></span>}

export function MagazineHeader(){
  const [open,setOpen]=useState(false);
  const navRef=useRef<HTMLElement>(null);
  const toggleRef=useRef<HTMLButtonElement>(null);
  const {theme,toggleTheme}=useTheme();
  useEffect(()=>{
    if(!open)return;
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){setOpen(false);toggleRef.current?.focus();}
    };
    const onPointer=(event:PointerEvent)=>{
      const target=event.target;
      if(target instanceof Node && !navRef.current?.contains(target) && !toggleRef.current?.contains(target))setOpen(false);
    };
    document.addEventListener("keydown",onKey);
    document.addEventListener("pointerdown",onPointer);
    return ()=>{document.removeEventListener("keydown",onKey);document.removeEventListener("pointerdown",onPointer);};
  },[open]);
  return <header className="nx-header">
    <div className="nx-topline"><span>VERITAS ANTE OMNIA</span><span>NEZAVISNI INFORMATIVNO-ANALITIČKI MAGAZIN</span></div>
    <div className="nx-masthead"><a className="nx-identity" href="/" aria-label="Novi talas, naslovna"><Brand/><span className="nx-tagline">Vaš prozor u svet</span><WaveSignal/></a><div className="nx-head-actions"><a href="/izdanja">IZDANJA</a><a href="/pretraga" aria-label="Pretraži arhivu" title="Pretraga"><Search size={22}/></a><button className="nx-theme-toggle" type="button" onClick={toggleTheme} aria-label={theme==="dark"?"Uključi dnevni režim":"Uključi noćni režim"} title={theme==="dark"?"Dnevni režim":"Noćni režim"}>{theme==="dark"?<Sun size={22}/>:<Moon size={22}/>}</button><button ref={toggleRef} className="nx-menu-toggle" type="button" onClick={()=>setOpen(v=>!v)} aria-label={open?"Zatvori meni":"Otvori meni"} aria-expanded={open} aria-controls="nx-section-navigation">{open?<X size={24}/>:<Menu size={24}/>}</button></div></div>
    <nav ref={navRef} id="nx-section-navigation" className={"nx-nav "+(open?"nx-nav-open":"")} aria-label="Rubrike">{SECTIONS.map(s=><a key={s.slug} href={"/"+s.slug} onClick={()=>setOpen(false)} aria-current={typeof window!=="undefined"&&window.location.pathname==="/"+s.slug?"page":undefined}>{s.label}</a>)}<a href="/izdanja" onClick={()=>setOpen(false)}>Mesečna izdanja</a><a className="nx-mobile-nav-search" href="/pretraga" onClick={()=>setOpen(false)}><Search size={17} aria-hidden="true"/> Pretraga arhive</a></nav>
  </header>;
}
export function MagazineFooter(){
  const {theme,toggleTheme}=useTheme();
  return <footer className="nx-footer">
    <div className="nx-footer-main">
      <div className="nx-footer-identity"><a href="/" aria-label="Novi talas, naslovna"><Brand/></a><p>Vaš prozor u svet</p><WaveSignal/></div>
      <nav className="nx-footer-navigation" aria-label="Rubrike u podnožju"><span className="nx-footer-kicker">RUBRIKE</span><div>{SECTIONS.map(section=><a key={section.slug} href={"/"+section.slug}>{section.label}</a>)}</div></nav>
      <div className="nx-footer-resources"><span className="nx-footer-kicker">ISTRAŽITE</span><a href="/izdanja">Mesečna izdanja <ArrowUpRight size={15}/></a><a href="/pretraga">Pretraga arhive <ArrowUpRight size={15}/></a><button type="button" onClick={toggleTheme} className="nx-footer-theme">{theme==="dark"?<Sun size={16}/>:<Moon size={16}/>} {theme==="dark"?"Dnevni režim":"Noćni režim"}</button></div>
    </div>
    <div className="nx-footer-bottom"><span>© 2026 NOVI TALAS</span><em>Veritas ante omnia</em><a href="/">Na početak <ArrowUpRight size={15}/></a></div>
  </footer>;
}

