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
  href: "/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci",
  category: "Geopolitika",
  title: "Mundijal na granici: fudbal, vize i politika moći",
  description:
    "Dok FIFA slavi najveći fudbalski spektakl na svetu, američka vizna politika, ratne tenzije i pitanje ko uopšte ima pravo da učestvuje na Svetskom prvenstvu već su postali deo turnira.",
  imageSrc: "/news/world-cup-visas.jpg",
  imageAlt: "Mundijal, vize i geopolitika na granici",
  imageCredit: "Reuters",
};

const PREVIOUS_HERO_ARTICLE = {
  href: "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan",
  category: "Geopolitika",
  title:
    "SAD i Iran blizu sporazuma: Pakistan tvrdi da je tekst dogovoren, Teheran još oprezan",
  description:
    "Pakistanski premijer Shehbaz Sharif saopštio je da su Sjedinjene Države i Iran usaglasili tekst mirovnog sporazuma. Ipak, iz Teherana stiže poruka da konačna odluka još nije doneta.",
  imageSrc: "/news/peace-for-iran.jpg",
  imageAlt: "Ilustracija — SAD i Iran pregovori o sporazumu",
  imageCredit: "Reuters / AP",
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
        <p className="sr-only">
          Novi Talas je digitalni nedeljnik koji donosi analize geopolitike,
          Srbije i sveta, uz fokus na najvažnije događaje dana.
        </p>

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
        className="pt-9 pb-12 md:pt-12 md:pb-16 flex-1"
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

              <Link href={HERO_ARTICLE.href} className="block no-underline">
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
                <p className="photo-credit">{HERO_ARTICLE.imageCredit}</p>
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
                href="/geopolitika/eu-migration-rules-2026"
                title="Nova migraciona pravila Evropske unije ulaze u primenu"
                description="Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i novi sistem solidarnosti među državama članicama."
                imageSrc="/news/eu-flags.jpg"
                imageAlt="Zastave Evropske unije"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category={PREVIOUS_HERO_ARTICLE.category}
                href={PREVIOUS_HERO_ARTICLE.href}
                title={PREVIOUS_HERO_ARTICLE.title}
                description={PREVIOUS_HERO_ARTICLE.description}
                imageSrc={PREVIOUS_HERO_ARTICLE.imageSrc}
                imageAlt={PREVIOUS_HERO_ARTICLE.imageAlt}
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera"
                title="KRIZA SAD–IRAN"
                description="SAD izvele novu seriju udara na ciljeve u Iranu dok Teheran najavljuje odgovor. Sukob koji je počeo obaranjem američkog helikoptera ulazi u novu fazu, a pažnja sveta ostaje usmerena ka Ormuskom moreuzu i bezbednosti Persijskog zaliva."
                imageSrc="/news/usa-iran-red-line.jpg"
                imageAlt="Kriza SAD–Iran i vojni udari na ciljeve u Iranu"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Naša planeta"
                href="/nasa-planeta/nasa-predstavila-posadu-artemis-iii"
                title="NASA predstavila posadu misije Artemis III"
                description="Povratak ljudi na Mesec ulazi u novu fazu — NASA je zvanično objavila posadu prve misije koja bi trebalo da vrati astronaute na površinu Meseca posle više od pola veka."
                imageSrc="/news/artemis-nasa-3.jpg"
                imageAlt="NASA Artemis III — posada misije koja treba da vrati ljude na Mesec"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Naša planeta"
                href="/nasa-planeta/prvi-korak-ka-svetu-bez-naslednih-bolesti"
                title="Prvi korak ka svetu bez naslednih bolesti?"
                description="Naučnici su po prvi put precizno izmenili gene u ljudskim embrionima, otvarajući mogućnost lečenja naslednih bolesti, ali i novu raspravu o granicama ljudskog mešanja u sopstvenu evoluciju."
                imageSrc="/news/embryo-edit.jpg"
                imageAlt="Ilustracija"
              />
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
