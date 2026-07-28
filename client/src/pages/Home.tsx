/*
 * DESIGN: "Diplomatska Klasika" v4
 * Mobile keeps the approved editorial stack; desktop gets a compact magazine grid.
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const HERO_ARTICLE = {
  href: "/srbija/srbija-bez-republike-moze-li-se-obnoviti-drzava-posle-cetrnaest-godina-vlasti-sns-a",
  category: "Srbija · ANALIZA",
  title:
    "Srbija bez republike: može li se obnoviti država posle četrnaest godina vlasti SNS-a?",
  description:
    "Rasprava o nepoverenju Vladi Srbije samo je povod za mnogo veće pitanje: šta se dogodilo sa zemljom u kojoj institucije potvrđuju političku volju oblikovanu izvan njih?",
  imageSrc: "/news/lost-republic.jpg",
  imageAlt:
    "Minimalistička ilustracija kupole Narodne skupštine Srbije sa dugom senkom koja simbolizuje odnos između institucija i stvarne političke moći.",
};

const ARTICLES = [
  {
    href: "/geopolitika/nova-orbita-srpske-diplomatije-zasto-se-beograd-priblizava-vasingtonu-bas-sada",
    category: "Geopolitika",
    title:
      "Nova orbita srpske diplomatije: zašto se Beograd približava Vašingtonu baš sada",
    description:
      "Dok Srbija prolazi kroz jednu od najdubljih društvenih i političkih kriza u poslednjoj deceniji, Beograd i Vašington otvaraju novo poglavlje međusobnih odnosa.",
    imageSrc: "/news/serbia-artemis-accords.jpg",
    imageAlt:
      "Marko Đurić i zamenik administratora NASA Matt Anderson nakon potpisivanja sporazuma Artemis u sedištu NASA u Vašingtonu.",
  },
  {
    href: "/nasa-planeta/planeta-ostaje-bez-daha-kiseonik-nestaje-iz-okeana-jezera-i-reka",
    category: "Naša planeta",
    title: "Planeta ostaje bez daha: kiseonik nestaje iz okeana, jezera i reka",
    description:
      "Novo međunarodno istraživanje pokazuje da količina rastvorenog kiseonika ubrzano opada u okeanima, morima, rekama i jezerima, što predstavlja jednu od najvećih pretnji vodenim ekosistemima i budućnosti života na Zemlji.",
    imageSrc: "/news/ocean-deep.jpg",
    imageAlt:
      "Bleached coral on the seabed beneath a thinning school of fish, symbolizing the global loss of oxygen from aquatic ecosystems.",
  },
  {
    href: "/geopolitika/dva-moreuza-jedan-rat-sukob-sad-i-irana-ugrozava-svetske-energetske-puteve",
    category: "Geopolitika",
    title:
      "Dva moreuza, jedan rat: sukob SAD i Irana ugrožava svetske energetske puteve",
    description:
      "Napad Huta na saudijske tankere u Crvenom moru otvorio je drugi front na putevima svetske nafte. Dok Iran gotovo zatvara Ormuski moreuz, njegov jemenski saveznik ugrožava Bab el Mandeb — prolaz kojim je Saudijska Arabija pokušavala da zaobiđe krizu u Persijskom zalivu.",
    imageSrc: "/news/hormuz-bab-el-mandeb-energy-chokepoints.jpg",
    imageAlt:
      "Grafička ilustracija dva ugrožena energetska prolaza, Ormuskog moreuza i Bab el Mandeba",
  },
  {
    href: "/geopolitika/od-primirja-do-novih-udara-kako-je-ponovo-eskalirao-sukob-sad-i-irana",
    category: "Geopolitika",
    title:
      "Od primirja do novih udara: kako je ponovo eskalirao sukob SAD i Irana",
    description:
      "Nekoliko dana nakon novih pregovora i nagoveštaja smirivanja tenzija, Bliski istok ponovo se našao na ivici ozbiljne eskalacije, dok Ormuski moreuz postaje jedna od ključnih tačaka globalne nestabilnosti.",
    imageSrc: "/news/hormuz-chokepoint.jpg",
    imageAlt: "Ormuski moreuz, strateški pomorski prolaz između Irana i Omana",
  },
  {
    href: "/nasa-planeta/pol-makartni-sa-rolingstonsima-na-novom-albumu-koji-izlazi-10-jula",
    category: "Naša planeta",
    title:
      "Pol Makartni sa Rolingstonsima na novom albumu koji izlazi 10. jula",
    description:
      "Više od šest decenija nakon što su Bitlsi i Rolingstonsi obeležili jednu od najuzbudljivijih epoha u istoriji popularne muzike, Pol Makartni ponovo gostuje na novom studijskom albumu slavnog britanskog benda. Njihova nova saradnja predstavlja simboličan susret dve najveće institucije rok muzike.",
    imageSrc: "/news/paul-mccartney-rolling-stones.jpg",
    imageAlt:
      "Ilustracija Pola Makartnija i Mika Džegera povodom nove saradnje na albumu Foreign Tongues.",
  },
  {
    href: "/nasa-planeta/jedno-od-sedam-svetskih-cuda-ponovo-otkriva-svoje-tajne-aleksandrijski-svetionik-izrasta-iz-mora",
    category: "Naša planeta",
    title:
      "Jedno od sedam svetskih čuda ponovo otkriva svoje tajne: Aleksandrijski svetionik izranja iz mora",
    description:
      "Arheolozi su iz Sredozemnog mora izvadili monumentalne kamene blokove nekadašnjeg Aleksandrijskog svetionika, otvarajući put ka njegovoj najpreciznijoj digitalnoj rekonstrukciji do sada.",
    imageSrc: "/news/alexandria-lighthouse-underwater-ruins.jpg",
    imageAlt:
      "Conceptual underwater illustration inspired by the archaeological remains of the Lighthouse of Alexandria",
  },
];

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
    <article className="grid grid-cols-[1fr_112px] min-[390px]:grid-cols-[1fr_118px] gap-4 items-start">
      <div>
        <span className="kicker">{category}</span>
        <h3
          className="mt-1 text-[19px] min-[390px]:text-[20px] font-bold leading-[1.18]"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          <Link href={href} className="headline-link">
            {title}
          </Link>
        </h3>
        <p className="hidden" style={{ fontFamily: "'Lora', Georgia, serif" }}>
          {description}
        </p>
      </div>
      <Link href={href} className="block no-underline">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[112px] h-[84px] min-[390px]:w-[118px] min-[390px]:h-[88px] object-cover border rounded-md"
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

function DesktopSideStory({ article }: { article: (typeof ARTICLES)[number] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article
      className="grid grid-cols-[1fr_104px] gap-4 border-b pb-4"
      style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
    >
      <div>
        <span className="kicker">{article.category}</span>
        <h3
          className="mt-1 text-[18px] font-bold leading-[1.18]"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          <Link href={article.href} className="headline-link">
            {article.title}
          </Link>
        </h3>
        <p
          className="mt-2 font-normal line-clamp-2"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "13px",
            lineHeight: 1.42,
            color: isDark ? "#8f8c85" : "#737373",
          }}
        >
          {article.description}
        </p>
      </div>
      <Link href={article.href} className="block no-underline">
        <img
          src={article.imageSrc}
          alt={article.imageAlt}
          className="w-[104px] h-[72px] object-cover rounded-md border"
          style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          loading="lazy"
          decoding="async"
        />
      </Link>
    </article>
  );
}

function DesktopTileStory({ article }: { article: (typeof ARTICLES)[number] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article>
      <Link href={article.href} className="block no-underline">
        <img
          src={article.imageSrc}
          alt={article.imageAlt}
          className="w-full aspect-[16/9] object-cover rounded-lg border"
          style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <span className="kicker block mt-3">{article.category}</span>
      <h3
        className="mt-2 text-[22px] font-bold leading-[1.12]"
        style={{
          fontFamily: "'Lora', Georgia, serif",
          color: isDark ? "#e0ddd5" : "#111",
        }}
      >
        <Link href={article.href} className="headline-link">
          {article.title}
        </Link>
      </h3>
      <p
        className="mt-2 text-[14px] leading-[1.4]"
        style={{
          fontFamily: "'Lora', Georgia, serif",
          color: isDark ? "#9a978f" : "#555",
        }}
      >
        {article.description}
      </p>
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
      <main
        className="pt-0 pb-12 md:pt-7 md:pb-14 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="md:hidden">
            <FadeIn className="mb-5">
              <article className="flex flex-col">
                <Link
                  href={HERO_ARTICLE.href}
                  className="block no-underline -mx-5 order-first mb-4"
                >
                  <div
                    className="relative w-full overflow-hidden aspect-[2/1]"
                    style={{
                      border: isDark
                        ? "1px solid #2a2a2e"
                        : "1px solid #e5e5e5",
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
                </Link>
                <span className="kicker block mb-2">
                  {HERO_ARTICLE.category}
                </span>
                <h2
                  className="mt-2 mb-2 text-[25px] min-[390px]:text-[27px] font-bold leading-[1.06]"
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
                  className="text-[15px] min-[390px]:text-[16px] leading-[1.48] line-clamp-2"
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
              className="editorial-divider mb-5"
              style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
            />
            <FadeIn className="mb-10">
              <div className="flex flex-col gap-5">
                <SmallArticleCard {...ARTICLES[0]} />
                <hr className="editorial-divider" />
                <SmallArticleCard {...ARTICLES[1]} />
                <hr className="editorial-divider" />
                <SmallArticleCard {...ARTICLES[2]} />
                <hr className="editorial-divider" />
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
                  <SmallArticleCard variant="tile" {...ARTICLES[3]} />
                  <SmallArticleCard variant="tile" {...ARTICLES[4]} />
                  <SmallArticleCard variant="tile" {...ARTICLES[5]} />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="hidden md:block">
            <FadeIn className="mb-9">
              <section
                className="grid grid-cols-[minmax(0,1.65fr)_minmax(300px,0.85fr)] gap-8 items-start border-b pb-8"
                style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              >
                <article>
                  <Link href={HERO_ARTICLE.href} className="block no-underline">
                    <img
                      src={HERO_ARTICLE.imageSrc}
                      alt={HERO_ARTICLE.imageAlt}
                      className="w-full h-[340px] lg:h-[390px] object-cover rounded-xl border"
                      style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </Link>
                  <span className="kicker block mt-4">
                    {HERO_ARTICLE.category}
                  </span>
                  <h1
                    className="mt-2 text-[40px] lg:text-[48px] font-bold leading-[1.02]"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      color: isDark ? "#e0ddd5" : "#111",
                    }}
                  >
                    <Link
                      href={HERO_ARTICLE.href}
                      className="headline-link"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {HERO_ARTICLE.title}
                    </Link>
                  </h1>
                  <p
                    className="mt-4 max-w-[720px] text-[18px] leading-[1.48]"
                    style={{
                      fontFamily: "'Lora', Georgia, serif",
                      color: isDark ? "#9a978f" : "#555",
                    }}
                  >
                    {HERO_ARTICLE.description}
                  </p>
                </article>
                <aside className="flex flex-col gap-4">
                  <div
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase border-b pb-3"
                    style={{
                      color: isDark ? "#bcb7a6" : "#8B0000",
                      borderColor: isDark ? "#2a2a2e" : "#e5e5e5",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    Najnovije
                  </div>
                  <DesktopSideStory article={ARTICLES[0]} />
                  <DesktopSideStory article={ARTICLES[1]} />
                  <DesktopSideStory article={ARTICLES[2]} />
                </aside>
              </section>
            </FadeIn>
            <FadeIn>
              <section className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <DesktopTileStory article={ARTICLES[3]} />
                <DesktopTileStory article={ARTICLES[4]} />
                <DesktopTileStory article={ARTICLES[5]} />
              </section>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
