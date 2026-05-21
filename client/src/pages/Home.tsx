/*
 * DESIGN: "Diplomatska Klasika" v3  -  Foreign Affairs-inspired homepage
 * Structure (final):
 * 1. HERO — Artemis II splashdown (full-width, large)
 * 2. SMALL NEWS GRID (4 cards)
 * 3. LIVE BLOCK (compact, max 3 entries)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const HERO_ARTICLE = {
  href: "/obavestajni-izvori/spijunske-aktivnosti-ne-jenjavaju-u-evropi",
  category: "OBAVEŠTAJNI IZVORI",
  title: "Špijunske aktivnosti ne jenjavaju u Evropi",
  description:
    "Evropske kontraobaveštajne službe beleže kontinuiran rast stranih operacija. Nemačka je posebno izložena kineskim i ruskim naporima usmerenim ka industrijskim tajnama, vojnoj logistici i akademskim institucijama.",
  imageSrc: "/news/germany-police.jpg",
  imageAlt: "Nemačka policija na ulicama — pojačane bezbednosne mere zbog obaveštajnih pretnji",
  imageCredit: "Foto: ilustracija",
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

      {/* Hero banner */}
      <section
        className="relative w-full overflow-hidden h-[22vh] md:h-[28vh] hero-section"
        style={{
          backgroundImage: `url(/hero/naslovna-novitalas.jpg), linear-gradient(to bottom, var(--nt-hero-bg), var(--nt-hero-bg-end))`,
          backgroundColor: "var(--nt-hero-bg)",
        }}
      >
        {isDark && (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(13,17,23,0.35)" }}
          />
        )}

        {/* SEO: visually hidden H1 */}
        <h1 className="sr-only">Novi Talas</h1>
        <p className="sr-only">Novi Talas je digitalni nedeljnik koji donosi analize geopolitike, Srbije i sveta, uz fokus na najvažnije događaje dana.</p>

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
              1. HERO
             ====================== */}
          <FadeIn className="mb-10">
            <article>
              <span className="kicker block mb-2">{HERO_ARTICLE.category}</span>

              <h2
                className="mt-2 mb-3 text-[32px] md:text-[46px] font-bold leading-[1.1]"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  color: isDark ? "#e0ddd5" : "#111",
                }}
              >
                <Link
                  href={HERO_ARTICLE.href}
                  className="headline-link"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {HERO_ARTICLE.title}
                </Link>
              </h2>

              <p
                className="text-[18px] md:text-[20px] leading-[1.6] mb-5"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                {HERO_ARTICLE.description}
              </p>

              <Link
                href={HERO_ARTICLE.href}
                className="block no-underline"
              >
                <div
                  className="relative w-full overflow-hidden rounded-xl aspect-video"
                  style={{
                    border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
                  }}
                >
                  <img
                    src={HERO_ARTICLE.imageSrc}
                    alt={HERO_ARTICLE.imageAlt}
                    className="w-full h-full object-cover block"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <p className="photo-credit">
                  {HERO_ARTICLE.imageCredit}
                </p>
              </Link>
            </article>
          </FadeIn>

          <hr
            className="editorial-divider mb-10"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          />

          {/* ======================
              2. SMALL NEWS GRID (4 cards)
             ====================== */}
          <FadeIn className="mb-10">
            <div className="flex flex-col gap-6">
              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/peking-izmedju-trumpa-i-putina"
                title="Peking između Trumpa i Putina: Kina u središtu nove velike igre"
                description="Putinova poseta Kini, neposredno posle Trumpovog susreta sa Sijem, pokazuje da Peking pokušava da zadrži prednost razgovora sa svima: Moskvom, Vašingtonom i ostatkom sveta."
                imageSrc="/news/putin-xi.jpg"
                imageAlt="Vladimir Putin i Si Đinping tokom susreta u Pekingu"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Obaveštajni izvori"
                href="/obavestajni-izvori/britanija-zakon-strane-proxy-mreze"
                title="Britanija sprema zakon protiv mreža stranih država"
                description="Britanija najavljuje zakon protiv stranih proxy mreža povezanih sa špijunažom, sabotažom, nasiljem i političkim uticajem. U fokusu su posrednici koji deluju za račun neprijateljskih država."
                imageSrc="/news/london-spy-law.jpg"
                imageAlt="Ilustracija britanskog zakona protiv mreža stranih država"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/brics-iran-nafta-pukotine-multipolarnog-sveta"
                title="BRICS pred velikim testom: Iran, nafta i pukotine multipolarnog sveta"
                description="BRICS se sastaje u Indiji dok rat oko Irana i kriza nafte otkrivaju duboke podele među članicama. Novi multipolarni svet sada polaže prvi veliki ispit stvarne politike."
                imageSrc="/news/brics-breaking.jpg"
                imageAlt="Sastanak BRICS-a i geopolitička kriza oko Irana i nafte"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/putin-govori-o-kraju-rata-ukrajina"
                title="Putin govori o kraju rata: između nade i opreza"
                description="Putinova tvrdnja da se rat u Ukrajini približava kraju ne znači da je mir blizu, ali pokazuje da se reč “završnica” ponovo vraća u diplomatski prostor."
                imageSrc="/news/putin-end-war.jpg"
                imageAlt="Ilustracija izjave Vladimira Putina o završnici rata u Ukrajini"
              />

            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
