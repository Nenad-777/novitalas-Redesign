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
  href: "/geopolitika/moskva-upozorava-putina-ratna-potrosnja-postaje-neodrziva",
  category: "Geopolitika",
  title: "Moskva upozorava Putina: ratna potrošnja postaje neodrživa",
  description:
    "Ruski finansijski zvaničnici navodno upozoravaju da troškovi rata u Ukrajini sve ozbiljnije pritiskaju budžet, dok vojni vrh traži nova sredstva i odbija smanjenje odbrambenih rashoda.",
  imageSrc: "/news/moscow-economy-war.jpg",
  imageAlt: "Ilustracija",
  imageCredit: "Ilustracija",
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
                category="Naša planeta"
                href="/nasa-planeta/nvidia-ulazi-u-globalnu-trku-za-humanoidne-robote"
                title="Nvidia ulazi u globalnu trku za humanoidne robote"
                description="Američki tehnološki gigant najavio je saradnju sa proizvođačima humanoidnih robota iz Sjedinjenih Država i Evrope, dok Kina ubrzano razvija sopstvene sisteme. Počinje nova industrijska revolucija u kojoj veštačka inteligencija dobija fizički oblik."
                imageSrc="/news/ai-humnoid.jpg"
                imageAlt="Ilustracija"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/posle-dronova-dolaze-roboti-novo-poglavlje-rata-u-ukrajini"
                title="Posle dronova dolaze roboti: novo poglavlje rata u Ukrajini"
                description="Testiranje humanoidnih robota na ukrajinskom ratištu pokazuje da se iza današnjeg sukoba odvija mnogo šira tehnološka transformacija koja bi mogla da promeni način vođenja ratova u decenijama koje dolaze."
                imageSrc="/news/robots-ukraine.jpg"
                imageAlt="Ilustracija"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/60-dana-bliski-istok-sad-iran-dogovor"
                title="60 dana za Bliski istok: iza pregovora SAD i Irana krije se mnogo veći dogovor"
                description="Okvirni sporazum o produženju primirja između Vašingtona i Teherana mogao bi da otvori prostor za novu rundu pregovora o iranskom nuklearnom programu, sankcijama i bezbednosti Persijskog zaliva."
                imageSrc="/news/iran-usa-new-deal.jpg"
                imageAlt="Ilustracija — pregovori SAD i Irana"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Naša planeta"
                href="/nasa-planeta/nasa-anounce"
                title="NASA najavila nove misije ka Mesecu i plan trajne baze"
                description="Američka svemirska agencija predstavila je detaljan plan izgradnje trajne baze na Mesecu, uz seriju novih posadnih misija koje bi postepeno izgradile lunarnu infrastrukturu."
                imageSrc="/news/nasa-anounce.jpg"
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
