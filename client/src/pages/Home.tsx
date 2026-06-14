/*
 * DESIGN: "Diplomatska Klasika" v3  -  Foreign Affairs-inspired homepage
 * Mobile update: editorial masthead, image-first hero and cleaner magazine cards.
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
  variant?: "split" | "tile";
}

function SmallArticleCard({
  category,
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  variant = "split",
}: SmallArticleCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "tile") {
    return (
      <article
        className="overflow-hidden rounded-xl border"
        style={{
          borderColor: isDark ? "#2a2a2e" : "#eee",
          backgroundColor: isDark ? "#17191f" : "#ffffff",
        }}
      >
        <Link href={href} className="block no-underline">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[120px] object-cover block"
            loading="lazy"
            decoding="async"
          />
          <div className="p-3">
            <span className="kicker">{category}</span>
            <h3
              className="mt-1 text-[17px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              {title}
            </h3>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="grid grid-cols-[1fr_112px] min-[390px]:grid-cols-[1fr_118px] md:grid-cols-[1fr_100px] gap-4 items-start">
      <div>
        <span className="kicker">{category}</span>
        <h3
          className="mt-1 text-[19px] min-[390px]:text-[20px] md:text-[20px] font-bold leading-[1.18]"
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
          className="hidden md:block mt-2 text-[14px] leading-[1.42]"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#9a978f" : "#555",
          }}
        >
          {description}
        </p>
      </div>

      <Link href={href} className="block no-underline">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[112px] h-[84px] min-[390px]:w-[118px] min-[390px]:h-[88px] md:w-[100px] md:h-[75px] object-cover border rounded-md md:rounded-none"
          style={{
            borderColor: isDark ? "#2a2a2e" : "#eee",
            backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
          }}
          loading="lazy"
          decoding="async"
        />
      </Link>
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

      <section
        className="hidden md:block relative w-full overflow-hidden h-[28vh] hero-section"
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

        <h1 className="sr-only">Novi Talas</h1>
        <p className="sr-only">
          Novi Talas je digitalni nedeljnik koji donosi analize geopolitike,
          Srbije i sveta, uz fokus na najvažnije događaje dana.
        </p>

        <div className="absolute inset-x-0 bottom-0 pb-6 flex justify-center">
          <p
            className="hero-tagline text-[26px] italic tracking-wide"
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

      <main
        className="pt-0 pb-12 md:pt-12 md:pb-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-5">
          <FadeIn className="mb-9 md:mb-10">
            <article className="flex flex-col">
              <Link
                href={HERO_ARTICLE.href}
                className="block no-underline -mx-5 md:mx-0 order-first md:order-none mb-5 md:mb-0"
              >
                <div
                  className="relative w-full overflow-hidden md:rounded-xl aspect-[16/9]"
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
                <p className="photo-credit px-5 md:px-0">{HERO_ARTICLE.imageCredit}</p>
              </Link>

              <span className="kicker block mb-2">{HERO_ARTICLE.category}</span>

              <h2
                className="mt-2 mb-3 text-[32px] min-[390px]:text-[34px] md:text-[46px] font-bold leading-[1.08]"
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
                className="text-[18px] md:text-[20px] leading-[1.5] md:leading-[1.6] mb-1 md:mb-5"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                {HERO_ARTICLE.description}
              </p>
            </article>
          </FadeIn>

          <hr
            className="editorial-divider mb-7 md:mb-10"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          />

          <FadeIn className="mb-10">
            <div className="flex flex-col gap-5 md:gap-6">
              <SmallArticleCard
                category="Naša planeta"
                href="/nasa-planeta/zasto-ljudi-kada-lutaju-cesto-skrecu-ulevo"
                title="Zašto ljudi, kada lutaju, često skreću ulevo?"
                description="Kada ljudi izgube spoljne orijentire, njihovo kretanje često ne ide pravom linijom, već blagim lukom — neretko ulevo."
                imageSrc="/news/human-walking-left.jpg"
                imageAlt="Ljudi koji hodaju kroz otvoren prostor, sa putanjama koje se blago uvijaju ulevo"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category="Geopolitika"
                href="/geopolitika/eu-migration-rules-2026"
                title="Nova migraciona pravila Evropske unije ulaze u primenu"
                description="Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i sistem solidarnosti."
                imageSrc="/news/eu-flags.jpg"
                imageAlt="Zastave Evropske unije"
              />

              <hr className="editorial-divider" />

              <SmallArticleCard
                category={PREVIOUS_HERO_ARTICLE.category}
                href={PREVIOUS_HERO_ARTICLE.href}
                title={PREVIOUS_HERO_ARTICLE.title}
                description="Pakistan tvrdi da su SAD i Iran usaglasili tekst mirovnog sporazuma, dok Teheran poručuje da konačna odluka još nije doneta."
                imageSrc={PREVIOUS_HERO_ARTICLE.imageSrc}
                imageAlt={PREVIOUS_HERO_ARTICLE.imageAlt}
              />

              <hr className="editorial-divider" />

              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                <SmallArticleCard
                  variant="tile"
                  category="Geopolitika"
                  href="/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera"
                  title="KRIZA SAD–IRAN"
                  description="SAD izvele novu seriju udara na ciljeve u Iranu dok Teheran najavljuje odgovor."
                  imageSrc="/news/usa-iran-red-line.jpg"
                  imageAlt="Kriza SAD–Iran i vojni udari na ciljeve u Iranu"
                />

                <SmallArticleCard
                  variant="tile"
                  category="Naša planeta"
                  href="/nasa-planeta/nasa-predstavila-posadu-artemis-iii"
                  title="NASA predstavila posadu misije Artemis III"
                  description="Povratak ljudi na Mesec ulazi u novu fazu."
                  imageSrc="/news/artemis-nasa-3.jpg"
                  imageAlt="NASA Artemis III — posada misije koja treba da vrati ljude na Mesec"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
