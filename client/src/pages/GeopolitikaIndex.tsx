/*
 * DESIGN: "Diplomatska Klasika"  -  Geopolitika index (listing)
 * Purpose: show the newest Geopolitika articles without changing global layout.
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

type Article = {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const ARTICLES: Article[] = [
  {
    href: "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan",
    title:
      "SAD i Iran postigli okvirni mirovni dogovor: Ormuski moreuz ponovo se otvara za svetsku trgovinu",
    description:
      "Donald Tramp je objavio da je dogovor sa Teheranom završen i naredio ukidanje američke pomorske blokade. Ipak, ključna pitanja ostaju otvorena.",
    imageSrc: "/news/ormuski-moreuz-nasa.jpg",
    imageAlt:
      "Satelitski prikaz Ormuskog moreuza između Irana, Omana i Ujedinjenih Arapskih Emirata",
  },
  {
    href: "/geopolitika/putin-govori-o-kraju-rata-ukrajina",
    title: "Tramp poručio Putinu da je spreman da pomogne u okončanju rata u Ukrajini",
    description:
      "Posle najava o smirivanju krize sa Iranom, američki predsednik pokušava da otvori i ukrajinski front diplomatije.",
    imageSrc: "/news/tramp-zelenski-oval-office.jpg",
    imageAlt: "Donald Tramp i Volodimir Zelenski tokom sastanka u Ovalnoj kancelariji Bele kuće",
  },
  {
    href: "/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci",
    title: "Mundijal na granici: fudbal, vize i politika moći",
    description:
      "Dok FIFA slavi najveći fudbalski spektakl na svetu, američka vizna politika, ratne tenzije i pitanje ko ima pravo da učestvuje na Svetskom prvenstvu već su deo turnira.",
    imageSrc: "/news/world-cup-visas.jpg",
    imageAlt: "Mundijal, vize i geopolitika na granici",
  },
  {
    href: "/geopolitika/eu-migration-rules-2026",
    title: "Nova migraciona pravila Evropske unije ulaze u primenu",
    description:
      "Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i novi sistem solidarnosti među državama članicama.",
    imageSrc: "/news/eu-flags.jpg",
    imageAlt: "Zastave Evropske unije",
  },
  {
    href: "/geopolitika/talibani-otvorili-vatru-na-protest-za-prava-zena",
    title: "Talibani otvorili vatru na protest za prava žena",
    description:
      "Novi protest za prava žena u Avganistanu završen je nasilnom intervencijom talibanskih snaga, dok međunarodna pažnja prema položaju žena slabi.",
    imageSrc: "/news/afganistan-woman.jpg",
    imageAlt: "Protest za prava žena u Avganistanu",
  },
  {
    href: "/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera",
    title: "Tramp pokrenuo udare na Iran nakon obaranja američkog helikoptera",
    description:
      "Obaranje američkog vojnog helikoptera u blizini Ormuskog moreuza pokrenulo je novu otvorenu krizu između Vašingtona i Teherana.",
    imageSrc: "/news/usa-iran-crisis.jpg",
    imageAlt: "Američki i iranski vojni sudar — kriza oko Ormuskog moreuza",
  },
  {
    href: "/geopolitika/moskva-upozorava-putina-ratna-potrosnja-postaje-neodrziva",
    title: "Moskva upozorava Putina: ratna potrošnja postaje neodrživa",
    description:
      "Ruski ekonomski vrh sve otvorenije upozorava da ratna potrošnja pritiska finansijsku stabilnost zemlje i sužava prostor za dugoročno planiranje.",
    imageSrc: "/news/moscow-economy-war.jpg",
    imageAlt: "Moskva, ruska ekonomija i ratna potrošnja",
  },
  {
    href: "/geopolitika/posle-dronova-dolaze-roboti-novo-poglavlje-rata-u-ukrajini",
    title: "Posle dronova dolaze roboti: novo poglavlje rata u Ukrajini",
    description:
      "Rat u Ukrajini sve brže ulazi u fazu robotizovanih sistema, autonomnih platformi i nove tehnološke trke na frontu.",
    imageSrc: "/news/robots-ukraine.jpg",
    imageAlt: "Roboti i dronovi kao novo poglavlje rata u Ukrajini",
  },
];

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article className={featured ? "md:col-span-2" : ""}>
      <Link href={article.href} className="no-underline">
        <div
          className="border mb-4 overflow-hidden"
          style={{
            borderColor: isDark ? "#2a2a2e" : "#eee",
            backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
          }}
        >
          <img
            src={article.imageSrc}
            alt={article.imageAlt}
            className={
              featured
                ? "w-full h-[260px] md:h-[360px] object-cover object-center block"
                : "w-full h-[220px] object-cover object-center block"
            }
            loading={featured ? undefined : "lazy"}
            decoding="async"
          />
        </div>

        <span className="kicker">Geopolitika</span>

        <h2
          className={
            featured
              ? "mt-2 text-[24px] md:text-[32px] font-bold leading-[1.15]"
              : "mt-2 text-[22px] md:text-[26px] font-bold leading-[1.2]"
          }
          style={{
            fontFamily: "'Playfair Display', serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          {article.title}
        </h2>

        <p
          className="mt-2 text-[15px] leading-[1.6]"
          style={{
            fontFamily: "'Crimson Pro', serif",
            color: isDark ? "#9a978f" : "#555",
          }}
        >
          {article.description}
        </p>

        <div
          className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: isDark ? "#d9bf7a" : "#8B0000",
          }}
        >
          Otvori tekst →
        </div>
      </Link>
    </article>
  );
}

export default function GeopolitikaIndex() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <section className="max-w-[1000px] mx-auto px-5">
          <div className="mb-10">
            <span className="kicker">Geopolitika</span>
            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              SVET DANAS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ARTICLES.map((article, index) => (
              <ArticleCard
                key={article.href}
                article={article}
                featured={index === 0}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
