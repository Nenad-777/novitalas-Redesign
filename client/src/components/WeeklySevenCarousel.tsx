import { useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const STORIES = [
  {
    kicker: "SRBIJA · IZBORI",
    title: "Srbija ulazi u završnu fazu izborne kampanje",
    summary: "Nedelju su obeležili potpisi, sporovi oko izbornog procesa i ubrzano preslagivanje političke scene.",
    image: "/news/glasanje-dijaspora-3-oktobar.jpg",
    href: "/srbija/vazno-za-gradjane-srbije-u-inostranstvu-rok-za-prijavu-za-glasanje-istice-3-oktobra-u-ponoc",
  },
  {
    kicker: "GEOPOLITIKA · SAD–KINA",
    title: "Tramp i Si razgovaraju, ali ključna zavisnost ostaje",
    summary: "Kritični minerali pokazuju koliko je američko-kinesko rivalstvo istovremeno i odnos duboke međuzavisnosti.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/President_Donald_Trump_participates_in_a_bilateral_meeting_with_Chinese_President_Xi_Jinping_at_the_Gimhae_International_Airport_terminal_%2854889568887%29.jpg",
    href: "/geopolitika/pred-razgovore-trampa-i-sija-amerika-ostaje-zavisna-od-kineskih-kriticnih-minerala",
  },
  {
    kicker: "GEOPOLITIKA · NEMAČKA",
    title: "AfD menja političku mapu Nemačke",
    summary: "Rezultat u Meklenburgu-Zapadnoj Pomeraniji otvorio je novo pitanje odnosa nemačke politike prema energiji, Rusiji i Ukrajini.",
    image: "/news/afd-weidel.jpg",
    href: "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru",
  },
  {
    kicker: "SVET · DIPLOMATIJA",
    title: "Posle velikih pretnji, diplomatija ponovo traži male dogovore",
    summary: "UN nedelja završava se pokušajima da se pronađu ograničeni kanali deeskalacije na nekoliko kriznih tačaka.",
    textOnly: true,
  },
  {
    kicker: "NAŠA PLANETA · AI",
    title: "Veštačka inteligencija postaje pitanje međunarodne bezbednosti",
    summary: "Rasprava o najmoćnijim AI sistemima sve manje liči na tehnološku debatu, a sve više na geopolitiku.",
    image: "/news/king-charles-ai-point-of-no-return.webp",
    href: "/nasa-planeta/tacka-bez-povratka-ai",
  },
  {
    kicker: "VIDEO · KULTURA",
    title: "Tarantino piše. Finčer režira. Cliff Booth se vraća.",
    summary: "Brad Pitt ponovo igra Cliffa Bootha u jednom od najiščekivanijih filmskih susreta godine.",
    image: "https://img.youtube.com/vi/RjEZaUBbUvU/maxresdefault.jpg",
    href: "/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao",
  },
  {
    kicker: "SLEDEĆA NEDELJA",
    title: "Tri stvari koje pratimo",
    summary: "Izborna kampanja u Srbiji. Posledice američko-kineskih razgovora. Novi diplomatski pokušaji oko ratova u Ukrajini i na Bliskom istoku.",
    textOnly: true,
  },
] as const;

export default function WeeklySevenCarousel() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const move = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.84, behavior: "smooth" });
  };
  const sync = () => {
    const el = rail.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    let best = 0, distance = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - el.scrollLeft);
      if (d < distance) { distance = d; best = i; }
    });
    setActive(best);
  };

  return (
    <section className="mt-2 mb-12 md:mt-10 md:mb-16 border-y py-7 md:py-9" style={{borderColor:dark?"#2a2c33":"#d9d9d4"}}>
      <div className="flex items-end justify-between gap-4 mb-5 md:mb-7">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{color:dark?"#d9bf7a":"#8B0000"}}>NOVI TALAS / 7</div>
          <h2 className="mt-1 text-[27px] md:text-[38px] font-bold leading-none" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>Sedam priča. Jedna nedelja.</h2>
          <p className="mt-2 text-[15px] md:text-[16px] opacity-70">Pregled onoga što vredi poneti iz prethodnih sedam dana.</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button aria-label="Prethodna priča" onClick={()=>move(-1)} className="w-10 h-10 rounded-full border flex items-center justify-center"><ChevronLeft size={18}/></button>
          <button aria-label="Sledeća priča" onClick={()=>move(1)} className="w-10 h-10 rounded-full border flex items-center justify-center"><ChevronRight size={18}/></button>
        </div>
      </div>
      <div ref={rail} onScroll={sync} className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {STORIES.map((story, i) => {
          const card = (
            <article className="snap-start shrink-0 w-[86%] min-[430px]:w-[76%] md:w-[48%] lg:w-[39%] overflow-hidden border" style={{borderColor:dark?"#303238":"#d8d8d3",background:dark?"#17191f":"#cfeaff"}}>
              {!story.textOnly && "image" in story ? <img src={story.image} alt="" className="w-full aspect-[16/9] object-cover block" loading="lazy"/> : <div className="aspect-[16/9] flex items-center justify-center px-8 text-center" style={{background:dark?"#111318":"#f6f2e9"}}><span className="text-[54px] md:text-[68px] font-bold opacity-15" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>{String(i+1).padStart(2,"0")}</span></div>}
              <div className="p-5 md:p-6 min-h-[230px] flex flex-col">
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase">{story.kicker}</span>
                <h3 className="mt-3 text-[25px] md:text-[29px] font-bold leading-[1.04]" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>{story.title}</h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.45] opacity-75">{story.summary}</p>
                <div className="mt-auto pt-5 text-[10px] tracking-[0.13em] uppercase opacity-60">novi talas · Beograd · 2026</div>
              </div>
            </article>
          );
          return "href" in story ? <Link key={i} href={story.href} className="contents no-underline">{card}</Link> : <div key={i} className="contents">{card}</div>;
        })}
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.12em] uppercase opacity-60">
        <span>{String(active+1).padStart(2,"0")} / 07</span>
        <span className="md:hidden">Prevuci →</span>
        <div className="hidden md:flex gap-1.5">{STORIES.map((_,i)=><span key={i} className="block w-5 h-px" style={{backgroundColor:i===active?(dark?"#d9bf7a":"#8B0000"):(dark?"#555":"#bbb")}}/>)}</div>
      </div>
    </section>
  );
}
