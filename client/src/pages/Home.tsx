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

const IMAGES = {
  hero: "/hero/naslovna-novitalas.jpg",

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

      {/* ===== BREAKING NEWS TRAKA ===== */}
      <a
        href="/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina"
        className="block no-underline"
        style={{ backgroundColor: "#8B0000" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 py-2 flex items-center gap-3">
          <span
            className="text-[11px] font-bold tracking-[0.14em] uppercase text-white shrink-0"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            🚨 BREAKING
          </span>
          <span
            className="text-[13px] text-white/90 truncate"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            NASA lansirala Artemis II, prvu ljudsku misiju ka Mesecu posle 50+ godina
          </span>
          <span
            className="text-[12px] text-white/70 shrink-0 hidden sm:inline"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Čitaj →
          </span>
        </div>
      </a>

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
              APRIL 2026 — BREAKING
             ====================== */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                April 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>
          </FadeIn>

          {/* BREAKING: Artemis II — main featured story */}
          <FadeIn className="mb-14">
            <article>
              {/* BREAKING badge */}
              <div
                className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-sm"
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
                  href="/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina"
                  className="headline-link"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  NASA ponovo šalje ljude ka Mesecu posle više od 50 godina
                </Link>
              </h2>

              <p
                className="text-[18px] md:text-[19px] leading-[1.6] mb-5"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                Artemis II označava povratak čovečanstva u duboki svemir — prvi put od 1972. godine
              </p>

              {/* YouTube video thumbnail → article */}
              <Link
                href="/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina"
                className="block no-underline"
              >
                <div
                  className="relative w-full overflow-hidden rounded-xl aspect-video"
                  style={{
                    border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src="https://img.youtube.com/vi/m3kR2KK8TEs/maxresdefault.jpg"
                    alt="NASA Artemis II lansiranje — thumbnail"
                    className="w-full h-full object-cover block"
                    fetchPriority="high"
                    decoding="async"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "72px",
                        height: "72px",
                        backgroundColor: "rgba(139,0,0,0.88)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{ width: "32px", height: "32px", marginLeft: "4px" }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </FadeIn>

          <span
            className="block h-px mb-12"
            style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          />

          {/* ======================
              MART 2026
             ====================== */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Mart 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>
          </FadeIn>

          {/* Editorial two-column layout: main story + four supporting stories */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 mb-10">
            {/* LEFT: Main story — ECB inflacija evrozona */}
            <FadeIn>
              <article>
                <span className="kicker">Geopolitika</span>

                <h2
                  className="mt-2 mb-3 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  <Link
                    href="/geopolitika/inflacija-evrozona-ecb-mart"
                    className="headline-link"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    Inflacija u evrozoni ponovo iznad cilja Evropske centralne banke
                  </Link>
                </h2>

                <p
                  className="text-[18px] md:text-[19px] leading-[1.6] mb-5"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {`Rast cena energije pogurao inflaciju na 2,5 odsto, dok monetarne vlasti razmatraju sledeće korake`}
                </p>

                <figure className="mb-0">
                  <Link
                    href="/geopolitika/inflacija-evrozona-ecb-mart"
                    className="block no-underline"
                  >
                    <div
                      className="border"
                      style={{
                        borderColor: isDark ? "#2a2a2e" : "#eee",
                        backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                      }}
                    >
                      <img
                        src={IMAGES.ecbFrankfurtInflation}
                        alt="Sedište Evropske centralne banke u Frankfurtu, Nemačka"
                        className="w-full h-[280px] md:h-[380px] object-cover object-center block"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>
                  </Link>
                </figure>
              </article>
            </FadeIn>

            {/* RIGHT: Four supporting articles */}
            <aside>
              <FadeIn>
                <div className="flex flex-col">
                  {/* Mobile-only separator so first card matches the visual rhythm of cards 2–4 on small screens */}
                  <hr className="editorial-divider my-5 lg:hidden" />

                  <SmallArticleCard
                    category="Srbija"
                    href="/srbija/izbori-rezultati"
                    title="Tesne razlike i smanjenje prednosti vlasti: preliminarni rezultati u deset opština"
                    description="Preliminarni rezultati lokalnih izbora u Srbiji pokazuju da je vladajuća koalicija zadržala vlast, ali uz vidljivo smanjene razlike u više opština."
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

                  <hr className="editorial-divider my-5" />

                  <SmallArticleCard
                    category="Obaveštajni izvori"
                    href="/obavestajni-izvori/nemacka-curenje-informacija"
                    title="Nemačka ograničava pristup poverljivim podacima zbog straha od curenja"
                    description="Nemačke vlasti počele su da ograničavaju pristup poverljivim informacijama čak i pojedinim poslanicima, usled zabrinutosti da bi podaci procureli ka stranim akterima."
                    imageSrc={IMAGES.germanyIntelligence}
                    imageAlt="Poverljiva fascikla na stolu u nemačkom parlamentu"
                  />
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* CTA */}
          <FadeIn className="mt-16">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ backgroundColor: isDark ? "#0d0d0f" : "#1a2a3a" }}
            >
              <div className="py-16 px-8 text-center">
                <p
                  className="cta-title text-white/90 text-[28px] md:text-[34px] mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  Budite informisani.
                </p>

                <p
                  className="text-white/70 text-[16px] max-w-[560px] mx-auto mb-6"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                  Pratite Novi talas za ekskluzivne analize iz oblasti geopolitike,
                  bezbednosti — i od sada: Naše planete.
                </p>

                <span
                  className="inline-block bg-[#8B0000] text-white text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-3 hover:bg-[#6B0000] transition-colors duration-200"
                  style={{
                    fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  }}
                >
                  Pratite nas
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ======================
              IZDANJE — FEBRUAR 2026 (compact archive preview)
             ====================== */}
          <FadeIn className="mt-12 mb-4">
            {/* Thin divider above section */}
            <span
              className="block h-px mb-6"
              style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
            />

            {/* Compact archive entry — full block is clickable */}
            <Link
              href="/izdanje/februar-2026"
              className="flex items-center gap-5 group"
              style={{ textDecoration: "none" }}
            >
              {/* Thumbnail */}
              <img
                src="/issue/arhiv-februar.jpg"
                alt="Izdanje — Februar 2026"
                style={{
                  width: "120px",
                  height: "auto",
                  borderRadius: "4px",
                  objectFit: "cover",
                  flexShrink: 0,
                  boxShadow: isDark
                    ? "0 2px 10px rgba(0,0,0,0.40)"
                    : "0 2px 8px rgba(0,0,0,0.10)",
                }}
                loading="lazy"
                decoding="async"
              />

              {/* Text content */}
              <div
                className="transition-opacity duration-200 group-hover:opacity-70"
                style={{ fontFamily: "'Source Sans 3', -apple-system, sans-serif" }}
              >
                <span
                  className="block text-[10px] font-bold tracking-[0.20em] uppercase mb-1"
                  style={{ color: isDark ? "#d9bf7a" : "#8B0000" }}
                >
                  Izdanje
                </span>
                <span
                  className="block text-[15px] font-semibold tracking-[0.04em]"
                  style={{ color: isDark ? "#f0ece4" : "#1a1a1a" }}
                >
                  Februar 2026
                </span>
                <span
                  className="block text-[11px] mt-1"
                  style={{ color: isDark ? "#888" : "#999" }}
                >
                  Pregled svih tekstova
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
