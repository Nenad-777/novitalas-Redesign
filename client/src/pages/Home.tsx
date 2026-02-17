/*
 * DESIGN: "Diplomatska Klasika" — Foreign Affairs-inspired homepage
 * - White background, black text, dark red (#8B0000) accents
 * - Asymmetric 2-column grid (60/40): main story left, sidebar right
 * - Uppercase kicker labels, serif headlines, italic dek
 * - Thin horizontal dividers between sidebar items
 * - Generous whitespace
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// CDN URLs for uploaded images
const IMAGES = {
  heroGeopolitics: "https://private-us-east-1.manuscdn.com/sessionFile/6SqA6Ltpws9fwNQXZCXsiu/sandbox/HIwEcX3z49LxeP3NBMIlfm-img-1_1771294382000_na1fn_aGVyby1nZW9wb2xpdGljcw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNlNxQTZMdHB3czlmd05RWFpDWHNpdS9zYW5kYm94L0hJd0VjWDN6NDlMeGVQM05CTUlsZm0taW1nLTFfMTc3MTI5NDM4MjAwMF9uYTFmbl9hR1Z5YnkxblpXOXdiMnhwZEdsamN3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c0T83dc3FtO3zy24HEe1KJ70MxN2TTXshx5jbsVX2SMX193Yw6hlOw0~0IJJSmarDQBmZGkPwTY05mJPmZr1~xUg8v5O37L5sW-OBqPvLROsIy5OIXoUdeFpCu2OzJNy~0XjY9w3V6ttJWE7DHMHfutYDTDMtd6YWi2PThRT0sefcgRV~D2b5~9VNSPEQ0tsWshy7oYjQuIEDxzqaP8C670yw5rwGtZ9S4pcvaqUpg3~J3YVX-~4A4IAVFbYnaCdGoM51Vuck0~tqk5N3iujR~9kpwVXbqzefaG5FeQJiyomMZMCfJifzIbOu6g6ff0P4qT6YdUoXx3ZoEL7QqzbUg__",
  minhenSamit: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/kzkbLJizklCGeszt.jpg",
  naslovna: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/lFQXdYFgwMculBXE.png",
  broj1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/NLdlVhCfQkwnQNDE.png",
  vest1Flota: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/ueTSBmtOxunoiRTI.png",
  vest2Kulturni: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/BvDPHfiBldfdPRgU.png",
  vest3Strajk: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/RsPkrUHYLAWLyURJ.png",
  vest4UnEu: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/zDRemwzkgbpcKTKX.png",
  vest5Poljska: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/DmmWlkRkOptrTxhQ.png",
  sectionDivider: "https://private-us-east-1.manuscdn.com/sessionFile/6SqA6Ltpws9fwNQXZCXsiu/sandbox/HIwEcX3z49LxeP3NBMIlfm-img-3_1771294373000_na1fn_c2VjdGlvbi1kaXZpZGVy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNlNxQTZMdHB3czlmd05RWFpDWHNpdS9zYW5kYm94L0hJd0VjWDN6NDlMeGVQM05CTUlsZm0taW1nLTNfMTc3MTI5NDM3MzAwMF9uYTFmbl9jMlZqZEdsdmJpMWthWFpwWkdWeS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=f6yYwZnOQlbYqXb3XqfHR99QxDY~ZvL5yrWeGbqKVecEjoB5y5f8gJPE7z82xBzu67vMv5-CCLlSeOXuuDZ5pYxlc2ntSUi44HtTK4OEpJVY4KVVDDn5HIcnT48gO2pYAN-Q~WDK4OrqfaJDjtcCgDrQPsv9CkKKQT4018UZ44OC1NLBIgRdp7SEyHqph2h~RlPOHM3dfFpcpZDS8~ZVUNsGsOXz2enSNAUL47tfV~zABzFgeRIw2leKx-7U4xZFhmlb7UQ-usMFsU6GhV1-KssM7pibksS5Petb-8KzIvBZ~fWitlX73wT76w6~ZgQu-rL4c9ZqxmSIl0bBLE88dw__",
};

// Sidebar articles data
const sidebarArticles = [
  {
    kicker: "GEOPOLITIKA",
    title: "Italija i Španija šalju ratne brodove u zaštitu flotile za Gazu",
    dek: "Rimski i madridski potez otvara novo poglavlje angažmana na Bliskom istoku.",
    image: IMAGES.vest1Flota,
    href: "/",
  },
  {
    kicker: "KULTURA",
    title: "Kulturni rat u Evropi: ko kontroliše narativ?",
    dek: "Borba za identitet i vrednosti na starom kontinentu.",
    image: IMAGES.vest2Kulturni,
    href: "/",
  },
  {
    kicker: "GEOPOLITIKA",
    title: "Generalni štrajk u Italiji: milioni na ulicama",
    dek: "Ekonomska kriza i politička nestabilnost pokreću masovne proteste.",
    image: IMAGES.vest3Strajk,
    href: "/",
  },
  {
    kicker: "GEOPOLITIKA",
    title: "UN i EU: nova era multilateralizma ili kraj saradnje?",
    dek: "Institucije pod pritiskom u svetu multipolarnih sila.",
    image: IMAGES.vest4UnEu,
    href: "/",
  },
  {
    kicker: "NATO",
    title: "Poljska jača odbranu: NATO na istočnom krilu",
    dek: "Varšava udvostručuje vojne kapacitete na granici sa Belorusijom.",
    image: IMAGES.vest5Poljska,
    href: "/",
  },
];

// Simple fade-in on scroll hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(16px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero section — dramatic diplomatic image */}
      <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
        <img
          src={IMAGES.heroGeopolitics}
          alt="Diplomatska sala"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-white/90 text-[28px] md:text-[36px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Vaš prozor u svet
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-white py-12 md:py-16 flex-1">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Issue label */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#8B0000]"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Februar 2026
              </span>
              <span className="flex-1 h-px bg-[#e5e5e5]" />
            </div>
          </FadeIn>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            {/* LEFT: Main feature article */}
            <FadeIn>
              <article>
                <span className="kicker">Geopolitika</span>
                <h1
                  className="mt-2 mb-3 text-[32px] md:text-[42px] font-bold leading-[1.1] text-[#111]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <Link
                    href="/geopolitika-minhen-samit"
                    className="headline-link"
                  >
                    Samit svetskih lidera u Minhenu: bezbednost, energija i nova linija podele
                  </Link>
                </h1>
                <p
                  className="text-[#555] text-[18px] md:text-[19px] leading-[1.6] mb-5"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  U fokusu razgovora su rat u Ukrajini, pritisci na energetske tokove i rastuće sajber pretnje.
                  Ton susreta otkriva sve dublju transformaciju Evrope u „kontinent tvrde bezbednosti".
                </p>

                <figure className="mb-0">
                  <div className="border border-[#eee] bg-[#f7f7f7]">
                    <img
                      src={IMAGES.minhenSamit}
                      alt="Siegestor u Minhenu u sumrak"
                      className="w-full h-[280px] md:h-[380px] object-cover object-center block"
                    />
                  </div>
                  <figcaption className="photo-credit mt-2">
                    Foto: Martin Falbisoner
                  </figcaption>
                </figure>
              </article>
            </FadeIn>

            {/* RIGHT: Sidebar with article list */}
            <aside>
              <FadeIn>
                <div className="flex flex-col">
                  {sidebarArticles.map((article, i) => (
                    <div key={i}>
                      {i > 0 && <hr className="editorial-divider my-5" />}
                      <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                        <div>
                          <span className="kicker">{article.kicker}</span>
                          <h3
                            className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25] text-[#111]"
                            style={{ fontFamily: "'Lora', serif" }}
                          >
                            <Link href={article.href} className="headline-link">
                              {article.title}
                            </Link>
                          </h3>
                          <p
                            className="mt-1 text-[#666] text-[14px] leading-[1.5]"
                            style={{ fontFamily: "'Crimson Pro', serif" }}
                          >
                            {article.dek}
                          </p>
                        </div>
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-[100px] h-[75px] object-cover border border-[#eee] bg-[#f5f5f5]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* Divider */}
          <hr className="editorial-divider my-12 md:my-16" />

          {/* Spotlight section */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#8B0000]"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                U fokusu: Srbija
              </span>
              <span className="flex-1 h-px bg-[#e5e5e5]" />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <article>
                <span className="kicker">Srbija — Analiza nedelje</span>
                <h2
                  className="mt-2 mb-3 text-[26px] md:text-[32px] font-bold leading-[1.15] text-[#111]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <Link href="/srbija" className="headline-link">
                    Vučić između demokratije i autokratije: pogled iz Vašington Posta
                  </Link>
                </h2>
                <p
                  className="text-[#555] text-[17px] leading-[1.6]"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  <em>The Washington Post</em> i drugi zapadni mediji u poslednjim analizama ističu Srbiju kao primer države koja balansira između formalnih demokratskih institucija i sve izraženijih autokratskih praksi.
                </p>
              </article>

              <div className="flex items-center justify-center">
                <figure className="text-center">
                  <a
                    href={IMAGES.naslovna}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-[#0f1217] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block">
                      <img
                        src={IMAGES.broj1}
                        alt="Novi Talas — Broj 1"
                        className="w-[200px] md:w-[240px] h-auto rounded block"
                      />
                    </div>
                  </a>
                  <figcaption
                    className="mt-3 text-[12px] font-bold tracking-[0.1em] uppercase text-[#888]"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Broj 1 • Februar 2026
                  </figcaption>
                </figure>
              </div>
            </div>
          </FadeIn>

          {/* Subscribe / CTA section */}
          <FadeIn className="mt-16">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={IMAGES.sectionDivider}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative py-16 px-8 text-center">
                <p
                  className="text-white/90 text-[28px] md:text-[34px] italic mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Budite informisani.
                </p>
                <p
                  className="text-white/70 text-[16px] max-w-[500px] mx-auto mb-6"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  Pratite Novi Talas za ekskluzivne analize geopolitike, kulture i bezbednosti.
                </p>
                <span
                  className="inline-block bg-[#8B0000] text-white text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-3 hover:bg-[#6B0000] transition-colors duration-200"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Pratite nas
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
