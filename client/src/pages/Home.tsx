/*
 * DESIGN: "Diplomatska Klasika" v2  -  Foreign Affairs-inspired homepage
 * Update:
 * - NEW: Udarni blok Ormuski moreuz (Mart 2026)
 * - Main feature: Izrael–Iran 2026 (Februar 2026)
 * - Sidebar: Srbija + Naša planeta (ALMA) + Iran protesti
 * - Removed: Obaveštajni izvori block from homepage
 * - Removed: bottom "rubrike" list (no sub-menu at bottom)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import ObavestajniBrifingBlock from "@/components/ObavestajniBrifingBlock";
import LiveBriefingBlock from "@/components/LiveBriefingBlock";

const IMAGES = {
  hero: "/hero/naslovna-novitalas.jpg",

  // ✅ NOVA GLAVNA VEST — Kina vodonični avion (6. april 2026.)
  hydrogenLight: "/news/hydrogen-light.jpg",

  // ✅ NOVA GLAVNA VEST — ECB inflacija evrozona (1. april 2026)
  ecbFrankfurtInflation: "/news/ecb-frankfurt-inflation.jpg",

  // ✅ NOVA GLAVNA VEST — Izbori rezultati (30. mart 2026)
  izboriRezultati: "/news/izbori-rezultati.jpg",

  // ✅ NOVA VEST — Izbori nepravilnosti krivična odgovornost (29. mart 2026)
  izboriOdgovornost: "/news/izbori-odgovornost.jpg",

  // ✅ NOVA GLAVNA VEST — Vens Netanjahu Iran rat (28. mart 2026)
  vanceNetanyahu: "/news/vance-netanyahu.jpg",

  // ✅ VEST — UN istraga škola Iran (27. mart 2026)
  unInvestigation: "/news/un-investigation.jpg",

  // ✅ NOVA VEST — Nemačka curenje informacija (25. mart 2026)
  germanyIntelligence: "/news/germany-intelligence.jpg",

  // ✅ NOVA GLAVNA VEST — Orban prekid gasa Ukrajina (25. mart 2026)
  orbanOil: "/news/orban-oil.jpg",

  // ✅ NOVA VEST — Moon ring solarni prsten (24. mart 2026)
  moonRing: "/news/moon-ring.jpg",

  // ✅ NOVA GLAVNA VEST — Nemacka kritika rata (24. mart 2026)
  steinmeier: "/news/Frank-Walter Steinmeier.jpg",

  // ✅ NOVA VEST — UN najtoplija decenija (24. mart 2026)
  worldHeat: "/news/world-heat.jpg",

  // ✅ NOVA VEST — Meloni referendum Italija (24. mart 2026)
  meloniReferendum: "/news/meloni-referendum.jpg",

  // ✅ NOVA GLAVNA VEST — Iran Tramp Ormuski moreuz (23. mart 2026)
  trumpIran: "/news/trump-iran.jpg",

  // ✅ NOVA GLAVNA VEST — Lokalni izbori (21. mart 2026)
  lokalniIzbori: "/news/lokalni-izbori.jpg",

  // ✅ NOVA VEST — Psihologija dosada (20. mart 2026)
  psihologijaDosada: "/news/psihologija-dosada.jpg",

  // ✅ NOVA VEST — AI superaplikacija (20. mart 2026)
  aiSuperapp: "/news/ai-superapp.jpg",

  // ✅ NOVA VEST — Ormuski moreuz (20. mart 2026)
  ormuzKriza: "/news/ormuz-kriza.jpg",

  // ✅ NOVA VEST — Mars reka (19. mart 2026)
  marsReka: "/news/mars-reka.jpg",

  // ✅ NOVA GLAVNA VEST — Energetski rat (19. mart 2026)
  naftaKriza: "/news/nafta-kriza.jpg",

  // ✅ NOVA GLAVNA VEST — Tanker bez pogona (18. mart 2026)
  tanker: "/news/tanker.jpg",

  // ✅ NOVA GLAVNA VEST — Zapadne sile upozorile Izrael (18. mart 2026)
  westAgainstIsrael: "/news/west-against-israel.jpg",

  // ✅ NOVA GLAVNA VEST — Svetska kriza Ormuski moreuz (16. mart 2026)
  brodoviKriza: "/news/brodovi-kriza.jpg",

  // ✅ OSCAR — Ko je dobio Oskara? (Naša planeta, 16. mart 2026)
  oscarWorld: "/news/oscar-world.jpg",

  // ✅ NOVA GLAVNA VEST — Biennale Rusija (13. mart 2026)
  biennaleRusija: "/news/biennale-venice.jpg",

  // ✅ NOVA GLAVNA VEST — Izbeglice Iran UN (11. mart 2026)
  refugeesIranUn: "/refugees-iran-un.jpg",

  ormuz: "/ormuz.jpg",
  russiaChinaShadows: "/russia-china-shadows.jpg",

  ukraine: "/geopolitika-ukrajina.jpg",
  iranRiots: "/tehran-riots.jpg",

  // ✅ GLAVNA VEST slika
  izraelIran: "/f22-israel-iran-2026.jpg",

  // ⬇️ promeni na TAČAN naziv fajla koji si ubacio u /public
  alma: "/alma-mlecni-put.jpg",

  snovi: "/snovi-usmeravanje-snova.jpg",

  // ✅ AI vest svest (Naša planeta, 10. mart 2026)
  aiVestSvest: "/ai-supercomputer-data-center.jpg",

  // ✅ Kubrick (Naša planeta, 12. mart 2026)
  kubrick: "/kubrick.jpg",

  // ✅ SRBIJA thumbnail sada ide na novu vest
  srbijaThumb: "/news/zvucni-top.jpg",

  // ✅ Kosovo — Tiho gašenje srpskih univerziteta
  kosovAmfiteatar: "/news/kosovo-amfiteatar.jpg",

  // ✅ KINA — špijunski brodovi (Obaveštajni izvori, 9. mart 2026)
  kinaSpyBrod: "/images/obavestajni-izvori/kina-spy-ship.jpg",

  // ✅ CIA — regrutovanje kineskih vojnih oficira (Obaveštajni izvori, 14. mart 2026)
  ciaChina: "/news/cia-china.jpg",

  // ✅ Kina moždani implantat (Naša planeta, 14. mart 2026)
  chinaBrain: "/news/china-brain.jpg",
};

// Simple fade-in on scroll hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

interface SmallArticleCardProps {
  category: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function SmallArticleCard({
  category,
  href,
  title,
  description,
  imageSrc,
  imageAlt,
}: SmallArticleCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
      <div>
        <span className="kicker">{category}</span>
        <h3
          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          <Link href={href} className="headline-link">
            {title}
          </Link>
        </h3>
        <p
          className="mt-1 text-[14px] leading-[1.5]"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#7a7872" : "#666",
          }}
        >
          {description}
        </p>
      </div>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-[100px] h-[75px] object-cover border"
        style={{
          borderColor: isDark ? "#2a2a2e" : "#eee",
          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden h-[22vh] md:h-[28vh] hero-section"
        style={{
          backgroundImage: `url(${IMAGES.hero}), linear-gradient(to bottom, var(--nt-hero-bg), var(--nt-hero-bg-end))`,
          backgroundColor: "var(--nt-hero-bg)",
        }}
      >
        {/* Dark-mode image dimming overlay */}
        {isDark && (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(13,17,23,0.35)" }}
          />
        )}

        {/* SEO: visually hidden H1 and intro paragraph for "Novi Talas" keyword */}
        <h1 className="sr-only">Novi Talas</h1>
        <p className="sr-only">Novi Talas je digitalni nedeljnik koji donosi analize geopolitike, Srbije i sveta, uz fokus na najvažnije događaje dana.</p>

        {/* Slogan – horizontally centered, near the bottom */}
        <div className="absolute inset-x-0 bottom-0 pb-4 md:pb-6 flex justify-center">
          <p
            className="hero-tagline text-[18px] md:text-[26px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: isDark ? "#e0ddd5" : "#1a1a1a",
              textShadow: isDark
                ? "0 1px 2px rgba(0,0,0,0.3)"
                : "0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            Vaš prozor u svet
          </p>
        </div>
      </section>

      {/* Main */}
      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto px-5">

          {/* ======================
              EDITORIAL LAYOUT: HERO + SIDEBAR
             ====================== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 mb-10">

            {/* LEFT: HERO — Artemis II rekord udaljenosti (Naša planeta) */}
            <FadeIn>
              <article>
                {/* BREAKING badge */}
                <div
                  className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-sm"
                  style={{ backgroundColor: "#8B0000" }}
                >
                  <span
                    className="text-[11px] font-bold tracking-[0.14em] uppercase text-white"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    🚨 BREAKING
                  </span>
                </div>

                <span className="kicker block mb-2">Naša planeta</span>

                <h2
                  className="mt-2 mb-3 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  <Link
                    href="/nasa-planeta/artemis-ii-rekord-udaljenosti"
                    className="headline-link"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Čovečanstvo najdalje od Zemlje u istoriji: Artemis II nadmašio rekord Apola 13
                  </Link>
                </h2>

                <p
                  className="text-[18px] md:text-[19px] leading-[1.6] mb-5"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Posada misije Artemis II dostigla je najveću udaljenost od Zemlje ikada zabeleženu za ljudsku posadu, premašivši rekord misije Apollo 13.
                </p>

                <Link
                  href="/nasa-planeta/artemis-ii-rekord-udaljenosti"
                  className="block no-underline"
                >
                  <div
                    className="relative w-full overflow-hidden rounded-xl aspect-video"
                    style={{
                      border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
                    }}
                  >
                    <img
                      src="/news/moon-nasa.jpg"
                      alt="Letelica Orion u dubokom svemiru tokom misije Artemis II"
                      className="w-full h-full object-cover block"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                </Link>
              </article>
            </FadeIn>

            {/* RIGHT: Sidebar — secondary articles */}
            <aside>
              <FadeIn>
                <div className="flex flex-col">
                  {/* Mobile-only separator */}
                  <hr className="editorial-divider my-5 lg:hidden" />

                  <SmallArticleCard
                    category="Geopolitika"
                    href="/geopolitika/kina-testira-vodonicni-avion-pocetak-nove-energetske-trke-u-avijaciji"
                    title="Kina testira vodonični avion: početak nove energetske trke u avijaciji"
                    description="Kina je izvela prvi uspešan test megavatnog vodoničnog turboprop motora, što ukazuje na ubrzanje globalne energetske i tehnološke trke u avijaciji."
                    imageSrc={IMAGES.hydrogenLight}
                    imageAlt="Vodoničnim gorivnim ćelijama pogonjen avion na poletištu tokom testiranja"
                  />

                  <hr className="editorial-divider my-5" />

                  <SmallArticleCard
                    category="Srbija"
                    href="/srbija/izbori-rezultati"
                    title="Tesne razlike i smanjenje prednosti vlasti: preliminarni rezultati u deset opština"
                    description="Preliminarni rezultati lokalnih izbora u Srbiji pokazuju da je vladajuća koalicija zadržala vlast, ali uz vidljivo smanjene razlike."
                    imageSrc={IMAGES.izboriRezultati}
                    imageAlt="Ilustracija izbornih rezultata u Srbiji"
                  />

                  <hr className="editorial-divider my-5" />

                  <SmallArticleCard
                    category="Geopolitika"
                    href="/geopolitika/un-istraga-skola-iran"
                    title="UN traži pravdu nakon bombardovanja škole u Iranu"
                    description="Ujedinjene nacije traže hitnu istragu nakon bombardovanja škole u Iranu u kojem je stradalo više od 150 civila."
                    imageSrc={IMAGES.unInvestigation}
                    imageAlt="Zastava Ujedinjenih nacija ispred sedišta UN"
                  />

                  <hr className="editorial-divider my-5" />

                  <SmallArticleCard
                    category="Geopolitika"
                    href="/geopolitika/orban-prekid-gas-ukrajina"
                    title="Orban najavio prekid isporuke gasa Ukrajini"
                    description="Mađarski premijer Viktor Orban najavio postepeni prekid isporuke gasa Ukrajini, uz nove tenzije unutar Evropske unije."
                    imageSrc={IMAGES.orbanOil}
                    imageAlt="Viktor Orban tokom obraćanja na sastanku Evropskog saveta"
                  />
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* ======================
              LIVE BLOK — NASA Artemis II
             ====================== */}
          <FadeIn className="mb-10">
            <LiveBriefingBlock isDark={isDark} />
          </FadeIn>

          {/* ======================
              OBAVEŠTAJNI BRIFING — compact preview
             ====================== */}
          <FadeIn className="mb-10">
            <ObavestajniBrifingBlock compact />
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
