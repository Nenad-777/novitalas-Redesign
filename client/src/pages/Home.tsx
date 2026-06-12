/*
 * DESIGN: "Diplomatska Klasika" v4 — Premium mobile-first homepage
 * Structure:
 * 1. HERO — full-bleed image above headline, metadata
 * 2. FEATURED ARTICLE — secondary, visually prominent
 * 3. ARTICLE GRID — compact 2-column cards
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const HERO_ARTICLE = {
  href: "/geopolitika/eu-migration-rules-2026",
  category: "Geopolitika",
  title: "Nova migraciona pravila Evropske unije ulaze u primenu",
  description:
    "Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i novi sistem solidarnosti među državama članicama.",
  imageSrc: "/news/eu-flags.jpg",
  imageAlt: "Zastave Evropske unije",
  imageCredit: "Vizual: Novi Talas",
  date: "12. jun 2026.",
  readTime: "8 min",
};

const FEATURED_ARTICLE = {
  href: "/geopolitika/talibani-otvorili-vatru-na-protest-za-prava-zena",
  category: "Geopolitika",
  title: "Talibani otvorili vatru na protest za prava žena",
  description:
    "Novi protest za prava žena u Avganistanu završen je nasilnom intervencijom talibanskih snaga, ponovo skrećući pažnju sveta na položaj žena.",
  imageSrc: "/news/afganistan-woman.jpg",
  imageAlt: "Protest za prava žena u Avganistanu",
  imageCredit: "Vizualizacija: Novi Talas",
  date: "11. jun 2026.",
  readTime: "6 min",
};

const GRID_ARTICLES = [
  {
    category: "Geopolitika",
    href: "/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera",
    title: "KRIZA SAD–IRAN",
    description: "SAD izvele novu seriju udara na ciljeve u Iranu dok Teheran najavljuje odgovor.",
    imageSrc: "/news/usa-iran-red-line.jpg",
    imageAlt: "Kriza SAD–Iran",
    readTime: "5 min",
  },
  {
    category: "Naša planeta",
    href: "/nasa-planeta/nasa-predstavila-posadu-artemis-iii",
    title: "NASA predstavila posadu misije Artemis III",
    description: "Povratak ljudi na Mesec ulazi u novu fazu — NASA je zvanično objavila posadu prve misije.",
    imageSrc: "/news/artemis-nasa-3.jpg",
    imageAlt: "NASA Artemis III",
    readTime: "4 min",
  },
  {
    category: "Naša planeta",
    href: "/nasa-planeta/prvi-korak-ka-svetu-bez-naslednih-bolesti",
    title: "Prvi korak ka svetu bez naslednih bolesti?",
    description: "Naučnici su po prvi put precizno izmenili gene u ljudskim embrionima.",
    imageSrc: "/news/embryo-edit.jpg",
    imageAlt: "Ilustracija",
    readTime: "6 min",
  },
  {
    category: "Srbija",
    href: "/srbija/potpuni-slom-vuciceve-medjunarodne-reputacije",
    title: "Potpuni slom Vučićeve međunarodne reputacije",
    description: "Zabrana ulaska grupi državljana Srbije u Crnu Goru otvorila je pitanje ugleda.",
    imageSrc: "/news/slom-medjunarodni.jpg",
    imageAlt: "Ilustracija",
    readTime: "7 min",
  },
];

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

interface FeaturedArticleProps {
  category: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCredit: string;
  date: string;
  readTime: string;
}

function FeaturedArticleCard({
  category,
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  imageCredit,
  date,
  readTime,
}: FeaturedArticleProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article>
      <Link href={href} className="block no-underline">
        <div
          className="w-full overflow-hidden rounded-sm"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="photo-credit">{imageCredit}</p>
      </Link>

      <div className="mt-4">
        <span className="kicker block mb-2">{category}</span>
        <h3
          className="mt-1 mb-3 text-[24px] md:text-[30px] font-bold leading-[1.2]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          <Link
            href={href}
            className="headline-link"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </Link>
        </h3>
        <p
          className="text-[15px] md:text-[16px] leading-[1.55] line-clamp-2"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#9a978f" : "#555",
          }}
        >
          {description}
        </p>
        <div
          className="flex items-center gap-2 mt-3 text-[11px] uppercase tracking-[0.1em]"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: isDark ? "#6b6760" : "#888",
          }}
        >
          <span>{date}</span>
          <span>·</span>
          <span>{readTime} čitanja</span>
        </div>
      </div>
    </article>
  );
}

interface CompactCardProps {
  category: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  readTime: string;
}

function CompactCard({
  category,
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  readTime,
}: CompactCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article>
      <Link href={href} className="block no-underline">
        <div
          className="w-full overflow-hidden rounded-sm"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      <div className="mt-2">
        <span className="kicker" style={{ fontSize: "10px" }}>
          {category}
        </span>
        <h4
          className="mt-1 text-[14px] md:text-[15px] font-bold leading-[1.3]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          <Link
            href={href}
            className="headline-link"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </Link>
        </h4>
        <p
          className="mt-1 text-[12px] leading-[1.45] line-clamp-1"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#7a7872" : "#666",
          }}
        >
          {description}
        </p>
        <p
          className="mt-1.5 text-[10px] uppercase tracking-[0.08em]"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: isDark ? "#6b6760" : "#888",
          }}
        >
          {readTime} čitanja
        </p>
      </div>
    </article>
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

      {/* SEO hidden content */}
      <h1 className="sr-only">Novi Talas</h1>
      <p className="sr-only">
        Novi Talas je digitalni nedeljnik koji donosi analize geopolitike,
        Srbije i sveta, uz fokus na najvažnije događaje dana.
      </p>

      {/* Main */}
      <main
        className="pb-12 md:pb-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        {/* ======================
            1. HERO ARTICLE (Level 1)
           ====================== */}
        <FadeIn className="mb-8 md:mb-12">
          <article>
            {/* Hero image — full-bleed, edge to edge on mobile */}
            <Link href={HERO_ARTICLE.href} className="block no-underline">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={HERO_ARTICLE.imageSrc}
                  alt={HERO_ARTICLE.imageAlt}
                  className="w-full h-full object-cover block"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Link>

            {/* Article content */}
            <div className="max-w-[1200px] mx-auto px-5 pt-5">
              <span className="kicker block mb-2">{HERO_ARTICLE.category}</span>

              <h2
                className="mt-1 mb-3 text-[34px] md:text-[52px] font-bold leading-[1.08]"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
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
                className="text-[16px] md:text-[19px] leading-[1.6] mb-4 line-clamp-3"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                {HERO_ARTICLE.description}
              </p>

              <div
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#6b6760" : "#888",
                }}
              >
                <span>{HERO_ARTICLE.date}</span>
                <span>·</span>
                <span>{HERO_ARTICLE.readTime} čitanja</span>
              </div>
            </div>
          </article>
        </FadeIn>

        <div className="max-w-[1200px] mx-auto px-5">
          <hr
            className="editorial-divider mb-8"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          />

          {/* ======================
              2. FEATURED ARTICLE (Level 2)
             ====================== */}
          <FadeIn className="mb-8">
            <FeaturedArticleCard
              category={FEATURED_ARTICLE.category}
              href={FEATURED_ARTICLE.href}
              title={FEATURED_ARTICLE.title}
              description={FEATURED_ARTICLE.description}
              imageSrc={FEATURED_ARTICLE.imageSrc}
              imageAlt={FEATURED_ARTICLE.imageAlt}
              imageCredit={FEATURED_ARTICLE.imageCredit}
              date={FEATURED_ARTICLE.date}
              readTime={FEATURED_ARTICLE.readTime}
            />
          </FadeIn>

          <hr
            className="editorial-divider mb-8"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          />

          {/* ======================
              3. ARTICLE GRID (Level 3)
             ====================== */}
          <FadeIn className="mb-10">
            <div className="grid grid-cols-2 gap-x-5 gap-y-7">
              {GRID_ARTICLES.map((article) => (
                <CompactCard
                  key={article.href}
                  category={article.category}
                  href={article.href}
                  title={article.title}
                  description={article.description}
                  imageSrc={article.imageSrc}
                  imageAlt={article.imageAlt}
                  readTime={article.readTime}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
