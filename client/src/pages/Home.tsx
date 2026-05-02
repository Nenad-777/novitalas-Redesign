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
  href: "/geopolitika/amerika-povlaci-vojnike-iz-nemacke-nato-nepoverenje",
  category: "GEOPOLITIKA",
  title: "Amerika povlači vojnike iz Nemačke: NATO ulazi u novu eru nepoverenja",
  description:
    "Povlačenje oko 5.000 američkih vojnika iz Nemačke pokazuje da evropska bezbednost ulazi u period u kome se američka zaštita više ne podrazumeva kao ranije.",
  imageSrc: "/news/us-german-soldiers-germany.jpg",
  imageAlt: "Američki i nemački vojnici tokom zajedničke vežbe u Oberlausitzu, Nemačka",
  imageCredit:
    "Američki i nemački vojnici tokom zajedničke vežbe u Oberlausitzu, Nemačka. Foto: Spc. Hassani Ribera Soto / U.S. Army, DVIDS",
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
                <p
                  className="mt-2 text-[13px]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#7a7872" : "#777",
                  }}
                >
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
                category="Kultura"
                href="/nasa-planeta/venecijansko-bijenale-ziri-ostavka-umetnost-granice"
                title="Može li se zabraniti umetnost zbog države iz koje dolazi?"
                description="Ostavka žirija Venecijanskog bijenala otvorila je pitanje koje prevazilazi jednu izložbu: da li umetnost treba da ostane prostor bez granica, ili mora da odgovori na ratove iz sveta oko sebe."
                imageSrc="/news/venice-biennale-arsenale-2024.jpg"
                imageAlt="Izložbeni prostor Arsenala tokom 60. Venecijanskog bijenala 2024."
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/svet-na-dan-1-maj-2026"
                title="SVET NA DAN, 1. maj: Ormuz, Ukrajina i Tajvan oblikuju novu mapu pritiska"
                description="Prvi maj 2026. donosi sliku sveta u kome se energetska kriza, rat u Ukrajini i američko-kinesko nadmetanje sve brže spajaju u jednu geopolitičku celinu."
                imageSrc="/news/world-1.may.jpg"
                imageAlt="Geopolitička mapa pritiska: Ormuz, Ukrajina i Tajvan"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Obaveštajni izvori"
                href="/obavestajni-izvori/kazakstan-spijun"
                title="Berlin u senci špijunaže: uhapšen osumnjičeni ruski agent, meta bile informacije o Ukrajini i NATO konvojima"
                description="Nemački tužioci tvrde da je državljanin Kazahstana mesecima bio u kontaktu sa ruskom obaveštajnom službom i dostavljao podatke o vojnoj pomoći Ukrajini, odbrambenoj industriji i kretanju NATO konvoja."
                imageSrc="/news/kazakstan-spy.jpg"
                imageAlt="Uhapšeni osumnjičeni špijun u Berlinu, kazahstanski državljanin Sergej K"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Naša planeta"
                href="/nasa-planeta/homerova-ilijada-pronadjena-u-egipatskoj-mumiji"
                title="Homerova Ilijada pronađena u egipatskoj mumiji"
                description="U antičkom Oksirinhu arheolozi su otkrili papirus sa fragmentom Ilijade unutar mumije iz rimskog perioda, što predstavlja prvi poznati slučaj ovakve upotrebe književnog teksta u mumifikaciji."
                imageSrc="/news/Iliad-mumy.jpg"
                imageAlt="Papirus sa fragmentom Homerove Ilijade pronađen unutar egipatske mumije"
              />
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
