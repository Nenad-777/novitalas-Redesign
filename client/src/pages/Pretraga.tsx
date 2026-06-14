import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

interface SearchArticle {
  href: string;
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ARTICLES: SearchArticle[] = [
  {
    href: "/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci",
    category: "Geopolitika",
    title: "Mundijal na granici: fudbal, vize i politika moći",
    description:
      "Dok FIFA slavi najveći fudbalski spektakl na svetu, američka vizna politika, ratne tenzije i pitanje ko uopšte ima pravo da učestvuje na Svetskom prvenstvu već su deo turnira.",
    imageSrc: "/news/world-cup-visas.jpg",
    imageAlt: "Mundijal, vize i geopolitika na granici",
  },
  {
    href: "/nasa-planeta/zasto-ljudi-kada-lutaju-cesto-skrecu-ulevo",
    category: "Naša planeta",
    title: "Zašto ljudi, kada lutaju, često skreću ulevo?",
    description:
      "Kada ljudi izgube spoljne orijentire, njihovo kretanje često ne ide pravom linijom, već blagim lukom — neretko ulevo.",
    imageSrc: "/news/human-walking-left.jpg",
    imageAlt: "Ljudi koji hodaju kroz otvoren prostor",
  },
  {
    href: "/geopolitika/eu-migration-rules-2026",
    category: "Geopolitika",
    title: "Nova migraciona pravila Evropske unije ulaze u primenu",
    description:
      "Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i sistem solidarnosti.",
    imageSrc: "/news/eu-flags.jpg",
    imageAlt: "Zastave Evropske unije",
  },
  {
    href: "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan",
    category: "Geopolitika",
    title:
      "SAD i Iran blizu sporazuma: Pakistan tvrdi da je tekst dogovoren, Teheran još oprezan",
    description:
      "Pakistan tvrdi da su SAD i Iran usaglasili tekst mirovnog sporazuma, dok Teheran poručuje da konačna odluka još nije doneta.",
    imageSrc: "/news/peace-for-iran.jpg",
    imageAlt: "SAD i Iran pregovaraju o sporazumu",
  },
  {
    href: "/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera",
    category: "Geopolitika",
    title: "KRIZA SAD–IRAN",
    description:
      "SAD izvele novu seriju udara na ciljeve u Iranu dok Teheran najavljuje odgovor.",
    imageSrc: "/news/usa-iran-red-line.jpg",
    imageAlt: "Kriza SAD–Iran i vojni udari na ciljeve u Iranu",
  },
  {
    href: "/nasa-planeta/nasa-predstavila-posadu-artemis-iii",
    category: "Naša planeta",
    title: "NASA predstavila posadu misije Artemis III",
    description:
      "Povratak ljudi na Mesec ulazi u novu fazu — NASA je objavila posadu misije Artemis III.",
    imageSrc: "/news/artemis-nasa-3.jpg",
    imageAlt: "NASA Artemis III posada",
  },
];

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("sr-Latn");
}

export default function Pretraga() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const query = new URLSearchParams(window.location.search).get("q")?.trim() ?? "";
  const normalizedQuery = normalizeSearchText(query);

  const results = query
    ? ARTICLES.filter((article) =>
        normalizeSearchText(
          `${article.title} ${article.description} ${article.category} ${article.href}`,
        ).includes(normalizedQuery),
      )
    : [];

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1 py-10 md:py-14">
        <section className="max-w-[900px] mx-auto px-5">
          <div
            className="border-b pb-5 mb-7"
            style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
          >
            <span className="kicker">Novi Talas</span>
            <h1
              className="mt-2 text-[32px] md:text-[42px] font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Pretraga
            </h1>
            {query && (
              <p
                className="mt-3 text-[15px] md:text-[16px]"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: isDark ? "#bcb7a6" : "#555",
                }}
              >
                Rezultati za: “{query}”
              </p>
            )}
          </div>

          {query && results.length > 0 && (
            <div className="flex flex-col">
              {results.map((article) => (
                <article
                  key={article.href}
                  className="py-6 first:pt-0 border-b"
                  style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
                >
                  <Link
                    href={article.href}
                    className="grid grid-cols-[1fr_112px] md:grid-cols-[1fr_220px] gap-5 md:gap-8 items-start no-underline"
                  >
                    <div>
                      <span className="kicker">{article.category}</span>
                      <h2
                        className="mt-2 text-[21px] md:text-[27px] font-bold leading-[1.15]"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          color: isDark ? "#e0ddd5" : "#111",
                        }}
                      >
                        {article.title}
                      </h2>
                      <p
                        className="mt-2 text-[14px] md:text-[15px] leading-[1.55] line-clamp-3"
                        style={{
                          fontFamily: "'Lora', Georgia, serif",
                          color: isDark ? "#9a978f" : "#555",
                        }}
                      >
                        {article.description}
                      </p>
                    </div>

                    {article.imageSrc && (
                      <img
                        src={article.imageSrc}
                        alt={article.imageAlt ?? ""}
                        className="w-full h-[84px] md:h-[140px] object-cover rounded-md border"
                        style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <p
              className="py-8 text-[16px]"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: isDark ? "#bcb7a6" : "#555",
              }}
            >
              Nema rezultata za traženi pojam.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
