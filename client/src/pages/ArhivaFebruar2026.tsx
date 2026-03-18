/*
 * Arhivska stranica — Izdanje Februar 2026
 * Prikazuje sve vesti objavljene u februaru 2026.
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const FEBRUAR_ARTICLES = [
  {
    date: "28. februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/sukobi-izrael-iran-2026",
    title:
      "Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti",
    description:
      "Eskalacija između Izraela i Irana 2026. uvodi region u novu fazu otvorenih vojnih sukoba i diplomatske nestabilnosti.",
  },
  {
    date: "26. februar 2026.",
    section: "Naša planeta",
    href: "/nasa-planeta/alma-skriveno-jezgro",
    title: "Najveća ALMA mapa ikad: otkriveno \u201Eskriveno jezgro\u201C Mlečnog puta",
    description:
      "Radio-teleskop ALMA napravio je najtačniju mapu Centralne molekularne zone Mlečnog puta, otkrivajući njegovo skriveno jezgro.",
  },
  {
    date: "25. februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/iran-protesti-2026",
    title:
      "IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba",
    description:
      "Novi talas nemira na iranskim univerzitetima. BBC je potvrdio autentičnost snimaka nasilnih sukoba studenata sa bezbednosnim snagama.",
  },
  {
    date: "24. februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/ukrajina-cetiri-godine-rata",
    title:
      "Četiri godine rata u Ukrajini: sankcije jačaju, evropsko jedinstvo slabi",
    description:
      "Analiza stanja posle četiri godine rata u Ukrajini, sa akcentom na ekonomskim sankcijama i koheziji evropskih saveznika.",
  },
  {
    date: "21. februar 2026.",
    section: "Srbija",
    href: "/srbija/mars-za-pravosudje",
    title:
      "Marš za pravosuđe: kada institucije postanu centralno političko pitanje",
    description:
      "Protest koji je naterao institucije da postanu centralno pitanje srpske politike i šta to znači za budućnost demokratije.",
  },
  {
    date: "Februar 2026.",
    section: "Geopolitika",
    href: "/geopolitika/nova-bezbednosna-arhitektura",
    title:
      "Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?",
    description:
      "Kako Evropa odgovara na nove bezbednosne izazove i da li se formira kontinent sposoban za odlučniju odbrambenu politiku.",
  },
  {
    date: "Februar 2026.",
    section: "Obaveštajni izvori",
    href: "/obavestajni-izvori/rat-senki",
    title:
      "Rat senki: povratak obaveštajnih službi u središte geopolitike",
    description:
      "U savremenim međunarodnim odnosima rat se retko objavljuje, ali se gotovo stalno vodi. Ključne borbe odvijaju se izvan frontova.",
  },
];

export default function ArhivaFebruar2026() {
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
        <div className="max-w-[1000px] mx-auto px-5">
          {/* Page heading */}
          <div className="flex items-center gap-3 mb-10">
            <span
              className="text-[11px] font-bold tracking-[0.18em] uppercase"
              style={{
                fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              Arhiva &mdash; Februar 2026
            </span>
            <span
              className="flex-1 h-px"
              style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
            />
          </div>

          {/* Cover image */}
          <figure className="mb-12">
            <img
              src="/issue/arhiv-februar.jpg"
              alt="Izdanje — Februar 2026"
              className="w-full h-auto block"
              style={{
                borderRadius: "3px",
                boxShadow: isDark
                  ? "0 4px 24px rgba(0,0,0,0.45)"
                  : "0 4px 20px rgba(0,0,0,0.10)",
              }}
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* Article list */}
          <div>
            {FEBRUAR_ARTICLES.map((article, i) => (
              <div key={i}>
                <div className="py-5 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 items-start">
                  {/* Left: section + date */}
                  <div className="flex md:flex-col gap-2 md:gap-1 flex-shrink-0">
                    <span
                      className="text-[11px] font-bold tracking-[0.12em] uppercase"
                      style={{
                        fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                        color: isDark ? "#d9bf7a" : "#8B0000",
                      }}
                    >
                      {article.section}
                    </span>
                    <span
                      className="text-[11px] tracking-[0.06em]"
                      style={{
                        fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                        color: isDark ? "#5a5855" : "#aaa",
                      }}
                    >
                      {article.date}
                    </span>
                  </div>

                  {/* Right: title + description */}
                  <div>
                    <h3
                      className="text-[17px] md:text-[19px] font-bold leading-[1.3] mb-1"
                      style={{
                        fontFamily: "'Lora', Georgia, serif",
                        color: isDark ? "#e0ddd5" : "#111",
                      }}
                    >
                      <Link
                        href={article.href}
                        className="headline-link"
                        style={{
                          fontFamily: "'Lora', Georgia, serif",
                        }}
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p
                      className="text-[14px] leading-[1.55]"
                      style={{
                        fontFamily: "'Lora', Georgia, serif",
                        color: isDark ? "#7a7872" : "#666",
                      }}
                    >
                      {article.description}
                    </p>
                  </div>
                </div>
                {i < FEBRUAR_ARTICLES.length - 1 && (
                  <hr className="editorial-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
