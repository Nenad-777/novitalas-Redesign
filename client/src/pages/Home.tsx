/*
 * DESIGN: "Diplomatska Klasika" v2  -  Foreign Affairs-inspired homepage
 * Update:
 * - NEW: Udarni blok Ormuski moreuz (Mart 2026)
 * - Main feature: Izrael–Iran 2026 (Februar 2026)
 * - Sidebar: Srbija + Naša planeta (ALMA) + Iran protesti
 * - Removed: Obaveštajni izvori block from homepage
 * - Removed: bottom "rubrike" list (no sub-menu at bottom)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "/hero/naslovna-novitalas.jpg",

  // ✅ NOVA GLAVNA VEST — Zapadne sile upozorile Izrael (18. mart 2026)
  westAgainstIsrael: "/news/west-against-israel.jpg",

  // ✅ NOVA GLAVNA VEST — Akademija umetnosti Novi Sad (18. mart 2026)
  akademijaNovisad: "/news/akademija-novisad.jpg",

  // ✅ NOVA GLAVNA VEST — Svetska kriza Ormuski moreuz (16. mart 2026)
  brodoviKriza: "/news/brodovi-kriza.jpg",

  // ✅ OSCAR — Ko je dobio Oskara? (Naša planeta, 16. mart 2026)
  oscarWorld: "/news/oscar-world.jpg",

  // ✅ NOVA GLAVNA VEST — Biennale Rusija (13. mart 2026)
  biennaleRusija: "/news/biennale-venice.jpg",

  // ✅ NOVA GLAVNA VEST — Izbeglice Iran UN (11. mart 2026)
  refugeesIranUn: "/refugees-iran-un.jpg",

  ormuz: "/ormuz.jpg",
  russiaChinaShadows: "/russia-china-shadows.jpg",

  ukraine: "/geopolitika-ukrajina.jpg",
  iranRiots: "/tehran-riots.jpg",

  // ✅ GLAVNA VEST slika
  izraelIran: "/f22-israel-iran-2026.jpg",

  // ⬇️ promeni na TAČAN naziv fajla koji si ubacio u /public
  alma: "/alma-mlecni-put.jpg",

  snovi: "/snovi-usmeravanje-snova.jpg",

  // ✅ AI vest svest (Naša planeta, 10. mart 2026)
  aiVestSvest: "/ai-supercomputer-data-center.jpg",

  // ✅ Kubrick (Naša planeta, 12. mart 2026)
  kubrick: "/kubrick.jpg",

  // ✅ SRBIJA thumbnail sada ide na novu vest
  srbijaThumb: "/news/zvucni-top.jpg",

  // ✅ Kosovo — Tiho gašenje srpskih univerziteta
  kosovAmfiteatar: "/news/kosovo-amfiteatar.jpg",

  // ✅ KINA — špijunski brodovi (Obaveštajni izvori, 9. mart 2026)
  kinaSpyBrod: "/images/obavestajni-izvori/kina-spy-ship.jpg",

  // ✅ CIA — regrutovanje kineskih vojnih oficira (Obaveštajni izvori, 14. mart 2026)
  ciaChina: "/news/cia-china.jpg",

  // ✅ Kina moždani implantat (Naša planeta, 14. mart 2026)
  chinaBrain: "/news/china-brain.jpg",
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

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden h-[22vh] md:h-[28vh] hero-section"
        style={{
          backgroundImage: `url(${IMAGES.hero}), linear-gradient(to bottom, var(--nt-hero-bg), var(--nt-hero-bg-end))`,
          backgroundColor: "var(--nt-hero-bg)",
        }}
      >
        {/* Dark-mode image dimming overlay */}
        {isDark && (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(13,17,23,0.35)" }}
          />
        )}

        {/* Slogan – horizontally centered, near the bottom */}
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
              MART 2026
             ====================== */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Mart 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>
          </FadeIn>

          {/* Editorial two-column layout: main story + four supporting stories */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 mb-10">
            {/* LEFT: Main story — Zapadne sile upozorile Izrael */}
            <FadeIn>
              <article>
                <span className="kicker">Geopolitika</span>

                <h1
                  className="mt-2 mb-3 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  <Link
                    href="/geopolitika/zapadne-sile-upozorile-izrael"
                    className="headline-link"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    Zapadne sile upozorile Izrael - ne pokretati kopnenu ofanzivu u Libanu
                  </Link>
                </h1>

                <p
                  className="text-[18px] md:text-[19px] leading-[1.6] mb-5"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Zapadne zemlje upozoravaju Izrael da ne pokreće kopnenu operaciju u Libanu, uz rastući rizik regionalne eskalacije.
                </p>

                <figure className="mb-0">
                  <Link
                    href="/geopolitika/zapadne-sile-upozorile-izrael"
                    className="block no-underline"
                  >
                    <div
                      className="border"
                      style={{
                        borderColor: isDark ? "#2a2a2e" : "#eee",
                        backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                      }}
                    >
                      <img
                        src={IMAGES.westAgainstIsrael}
                        alt="Zapadne sile upozorile Izrael - kopnena ofanziva u Libanu"
                        className="w-full h-[280px] md:h-[380px] object-cover object-center block"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>
                  </Link>
                </figure>
              </article>
            </FadeIn>

            {/* RIGHT: Four supporting articles */}
            <aside>
              <FadeIn>
                <div className="flex flex-col">
                  <hr className="editorial-divider my-5 lg:hidden" />
                  {/* Akademija Novisad */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Srbija</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/srbija/akademija-novisad"
                            className="headline-link"
                          >
                            Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu.
                        </p>
                      </div>

                      <img
                        src={IMAGES.akademijaNovisad}
                        alt="Akademija umetnosti u Novom Sadu — studenti na ulici"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Svetska kriza sve ozbiljnija */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Geopolitika</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/geopolitika/svetska-kriza-sve-ozbiljnija"
                            className="headline-link"
                          >
                            SVETSKA KRIZA SVE OZBILJNIJA
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Zašto je Ormuski moreuz tako važan
                        </p>
                      </div>

                      <img
                        src={IMAGES.brodoviKriza}
                        alt="Brodovi u Ormuskom moreuzu — globalna energetska kriza"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Ko je dobio Oskara? */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Naša planeta</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/nasa-planeta/ko-je-dobio-oskara"
                            className="headline-link"
                          >
                            Ko je dobio Oskara?
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Dok svet tone u ratove, razaranja i očigledan pad civilizacijskih normi, ceremonija Oskara nastavlja da blista.
                        </p>
                      </div>

                      <img
                        src={IMAGES.oscarWorld}
                        alt="Ceremonija dodele Oskara"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Tiho gašenje srpskih univerziteta na Kosovu */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Srbija</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu"
                            className="headline-link"
                          >
                            Tiho gašenje srpskih univerziteta na Kosovu
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Lora', Georgia, serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Hiljade studenata i profesora mogle bi ostati bez univerziteta dok administrativne mere postepeno onemogućavaju rad srpskih fakulteta u Kosovskoj Mitrovici.
                        </p>
                      </div>

                      <img
                        src={IMAGES.kosovAmfiteatar}
                        alt="Tiho gašenje srpskih univerziteta na Kosovu"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* CTA */}
          <FadeIn className="mt-16">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ backgroundColor: isDark ? "#0d0d0f" : "#1a2a3a" }}
            >
              <div className="py-16 px-8 text-center">
                <p
                  className="cta-title text-white/90 text-[28px] md:text-[34px] mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  Budite informisani.
                </p>

                <p
                  className="text-white/70 text-[16px] max-w-[560px] mx-auto mb-6"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                  Pratite Novi talas za ekskluzivne analize iz oblasti geopolitike,
                  bezbednosti — i od sada: Naše planete.
                </p>

                <span
                  className="inline-block bg-[#8B0000] text-white text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-3 hover:bg-[#6B0000] transition-colors duration-200"
                  style={{
                    fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  }}
                >
                  Pratite nas
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ======================
              IZDANJE — FEBRUAR 2026
             ====================== */}
          <FadeIn className="mt-20 mb-4">
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-10">
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', -apple-system, sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Izdanje &mdash; Februar 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>

            {/* Cover image — klikabilna, vodi na stranicu izdanja februar 2026 */}
            <figure className="mb-12">
              <Link href="/izdanje/februar-2026" className="block overflow-hidden" style={{ borderRadius: "3px" }}>
                <img
                  src="/issue/arhiv-februar.jpg"
                  alt="Izdanje — Februar 2026"
                  className="w-full h-auto block transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                  style={{
                    borderRadius: "3px",
                    boxShadow: isDark
                      ? "0 4px 24px rgba(0,0,0,0.45)"
                      : "0 4px 20px rgba(0,0,0,0.10)",
                    cursor: "pointer",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </figure>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
