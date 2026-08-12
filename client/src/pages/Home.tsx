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
  href: "/obavestajni-izvori/sta-se-to-dogadja-u-evropi-priprema-za-rat-bez-fronta",
  category: "OBAVEŠTAJNI IZVORI",
  title: "Šta se to događa u Evropi: priprema za rat bez fronta?",
  description:
    "Poljska i baltičke države pojačavaju zaštitu elektrana, brana, gasnih skladišta i druge ključne infrastrukture. Među scenarijima koje razmatraju obaveštajne službe nalazi se i mogućnost napada čije bi poreklo bilo namerno prikriveno.",
  imageSrc: "/news/europe-war-without-front.jpg",
  imageAlt:
    "Naftna platforma na otvorenom moru kao simbol ranjivosti evropske energetske i kritične infrastrukture.",
};

const ARTICLES = [
  {
    href: "/geopolitika/istorijska-susa-ugrozila-nuklearne-elektrane-na-dunavu-rumunija-minira-stenovite-prepreke-madjarska-gasi-reaktore",
    category: "Geopolitika",
    title:
      "Istorijska suša ugrozila nuklearne elektrane na Dunavu: Rumunija minira stenovite prepreke, Mađarska gasi reaktore",
    description:
      "Rekordno nizak vodostaj Dunava primorao je Rumuniju i Mađarsku na vanredne mere kako bi zaštitile rad svojih nuklearnih elektrana i očuvale stabilnost elektroenergetskih sistema.",
    imageSrc: "/news/danube-slankamen.jpg",
    imageAlt: "Panoramski pogled na Dunav kod Starog Slankamena.",
  },
  {
    href: "/geopolitika/zasto-je-desetine-hiljada-ljudi-krenulo-ka-spaniji-kriza-u-seuti-otvara-nova-pitanja-o-granicama-evrope",
    category: "Geopolitika",
    title:
      "Zašto je desetine hiljada ljudi krenulo ka Španiji? Kriza u Seuti otvara nova pitanja o granicama Evrope",
    description:
      "Posle najvećeg migrantskog talasa u novijoj istoriji Seute, Španija pooštrava kontrolu granice, dok Evropa ponovo otvara raspravu o zaštiti svojih spoljašnjih granica i migrantskoj politici.",
    imageSrc: "/news/ceuta-border-fence.jpg",
    imageAlt:
      "Granična ograda koja razdvaja špansku enklavu Seutu od teritorije Maroka.",
  },
  {
    href: "/nasa-planeta/ko-ce-ugasiti-zvezde-astronomi-upozoravaju-da-bi-17-miliona-satelita-moglo-trajno-da-promeni-nocno-nebo",
    category: "Naša planeta",
    title:
      "Ko će ugasiti zvezde? Astronomi upozoravaju da bi 1,7 miliona satelita moglo trajno da promeni noćno nebo",
    description:
      "Novo upozorenje astronoma ukazuje da bi planirano lansiranje čak 1,7 miliona satelita moglo trajno da izmeni izgled noćnog neba, oteža astronomska posmatranja i poveća rizik od sudara u Zemljinoj orbiti.",
    imageSrc: "/news/vanishing-stars.jpg",
    imageAlt: "Noćno nebo prošarano tragovima satelita iznad Mlečnog puta.",
  },
  {
    href: "/nasa-planeta/vise-od-1100-strucnjaka-iz-vodecih-ai-kompanija-trazi-usporavanje-razvoja-vestacke-inteligencije",
    category: "Naša planeta",
    title:
      "Više od 1.100 stručnjaka iz vodećih AI kompanija traži usporavanje razvoja veštačke inteligencije",
    description:
      "Više od 1.100 zaposlenih i istraživača iz vodećih svetskih AI kompanija upozorava da bi automatizovani razvoj veštačke inteligencije uskoro mogao da postane brži od sposobnosti ljudi i institucija da ga razumeju, nadziru i kontrolišu.",
    imageSrc: "/news/ai-frontier-warning.jpg",
    imageAlt:
      "Futuristički grad i digitalni prikaz ljudskog mozga kao simbol razvoja napredne veštačke inteligencije.",
  },
  {
    href: "/nasa-planeta/revolucija-u-borbi-protiv-raka-crispr-koji-ne-popravlja-gene-vec-unistava-celije-tumora",
    category: "Naša planeta",
    title:
      "Revolucija u borbi protiv raka: CRISPR koji ne popravlja gene, već uništava ćelije tumora",
    description:
      "Nova istraživanja otvaraju mogućnost da se CRISPR tehnologija koristi ne samo za ispravljanje gena već i za selektivno uništavanje obolelih ćelija. Iako je put do терапије за пацијенте још дуг, научници говоре о новом правцу у развоју прецизнијих метода лечења рака.",
    imageSrc: "/news/    crispr-cancer-therapy.jpg",
    imageAlt:
      "Mikroskopska ilustracija tumorske ćelije koju napada precizno usmerena CRISPR terapija.",
  },
  {
    href: "/srbija/srbija-bez-republike-moze-li-se-obnoviti-drzava-posle-cetrnaest-godina-vlasti-sns-a",
    category: "Srbija · ANALIZA",
    title:
      "Srbija bez republike: može li se obnoviti država posle četrnaest godina vlasti SNS-a?",
    description:
      "Rasprava o nepoverenju Vladi Srbije samo je povod za mnogo veće pitanje: šta se dogodilo sa zemljom u kojoj institucije potvrđuju političku volju oblikovanu izvan njih?",
    imageSrc: "/news/lost-republic.jpg",
    imageAlt:
      "Minimalistička ilustracija kupole Narodne skupštine Srbije sa dugom senkom koja simbolizuje odnos između institucija i stvarne političke moći.",
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
