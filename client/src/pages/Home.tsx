/*
 * DESIGN: "Diplomatska Klasika" v2 — Foreign Affairs-inspired homepage
 * Light mode: white bg, light blue header, dark red accents
 * Dark mode: dark bg, dark header, gold accents
 * New hero: globe + planes illustration
 * 3 articles: Geopolitika, Obaveštajni izvori, Srbija
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/6SqA6Ltpws9fwNQXZCXsiu/sandbox/VqzKWVZr2iULAAnWvkb1OW-img-1_1771300001000_na1fn_bm92aS10YWxhcy1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNlNxQTZMdHB3czlmd05RWFpDWHNpdS9zYW5kYm94L1ZxektXVlpyMmlVTEFBbld2a2IxT1ctaW1nLTFfMTc3MTMwMDAwMTAwMF9uYTFmbl9ibTkyYVMxMFlXeGhjeTFvWlhKdi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vickhcvz4~YbTDCmOZhcH-ccU4yQa-vO1nYi1RLKmWenh~BaokXfByyTseqceDOn1X95WCs8wu7sSrWuIbTkJ6fguujMipq08NjRX1CToVLGeSsLojJufY422QdYrD9T1z6SshXDh~iExPwB4wgbaVzdMdV90Rr1KKKXfyMjDMM3CyteXDVgswhyX45ttKg8vzRwBDfhSUQC4bb82yVt7rMLjZxh9~1GCxqdL3mee1F3-~YRdsnOihaF0dNZr5bXlVerTFJSqX5Rc1IkCAb2fF0~1BeJ5HplAhZyX1BsckBjaIROXZaXBMebgoAgcgDaoVQ~fPIDb9NceHutx99iew__",
  carrier: "/carrier.jpg",
  intelligenceReport:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/acjhxldMBPFDSKKa.png",
  democracyAutocracy:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/qZixjPORsEGCuRBV.png",
};

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

function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* Hero section — globe + planes illustration */}
      <section
        className="relative w-full h-[380px] md:h-[440px] overflow-hidden"
        style={{ backgroundColor: isDark ? "#0d1117" : "#f0f4f7" }}
      >
        <img
          src={IMAGES.hero}
          alt="Globus sa avionima — Novi Talas"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: isDark ? 0.6 : 0.9 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(to top, rgba(17,19,24,0.9) 0%, rgba(17,19,24,0.3) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-[28px] md:text-[36px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "rgba(246,243,232,0.9)" : "#1a2a3a",
              textShadow: isDark ? "0 2px 8px rgba(0,0,0,0.5)" : "none",
            }}
          >
            Vaš prozor u svet
          </p>
        </div>
      </section>

      {/* Main content */}
      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Issue label */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Februar 2026
              </span>
              <span
                className="flex-1 h-px"
                style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
              />
            </div>
          </FadeIn>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            {/* LEFT: Main feature article — Geopolitika */}
            <FadeIn>
              <article>
                <span className="kicker">Geopolitika</span>
                <h1
                  className="mt-2 mb-3 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  {/* ✅ FIX: headline should go to the FULL new article */}
                  <Link href="/geopolitika/iran" className="headline-link">
                    Vašington u fazi odluke: američka vojska spremna za mogući udar
                    na Iran
                  </Link>
                </h1>
                <p
                  className="text-[18px] md:text-[19px] leading-[1.6] mb-5"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  SAD su rasporedile dodatne vazdušne i pomorske kapacitete na
                  Bliskom istoku, dok predsednik Trump još nije doneo konačnu odluku.
                  Potencijalna eskalacija u zoni Ormuskog moreuza otvara energetski i
                  bezbednosni rizik i za Evropu.
                </p>

                <figure className="mb-0">
                  {/* ✅ FIX: make image clickable too */}
                  <Link href="/geopolitika/iran" className="block no-underline">
                    <div
                      className="border"
                      style={{
                        borderColor: isDark ? "#2a2a2e" : "#eee",
                        backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                      }}
                    >
                      <img
                        src={IMAGES.carrier}
                        alt="Američki nosač aviona u operativnoj misiji u Persijskom zalivu"
                        className="w-full h-[280px] md:h-[380px] object-cover object-center block"
                      />
                    </div>
                  </Link>
                </figure>
              </article>
            </FadeIn>

            {/* RIGHT: Sidebar with 2 other articles */}
            <aside>
              <FadeIn>
                <div className="flex flex-col">
                  {/* Article 2: Obaveštajni izvori */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Obaveštajni izvori</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link
                            href="/obavestajni-izvori/rat-senki"
                            className="headline-link"
                          >
                            Rat senki: povratak obaveštajnih službi u središte
                            geopolitike
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Sajber operacije, uticajne kampanje i sabotaže infrastrukture
                          postale su deo svakodnevnog arsenala država.
                        </p>
                      </div>
                      <img
                        src={IMAGES.intelligenceReport}
                        alt="Obaveštajni izveštaj"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                      />
                    </div>
                  </div>

                  <hr className="editorial-divider my-5" />

                  {/* Article 3: Srbija */}
                  <div>
                    <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                      <div>
                        <span className="kicker">Srbija</span>
                        <h3
                          className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                          style={{
                            fontFamily: "'Lora', serif",
                            color: isDark ? "#e0ddd5" : "#111",
                          }}
                        >
                          <Link href="/srbija" className="headline-link">
                            Podeljeno društvo: Srbija u ogledalu globalne polarizacije
                          </Link>
                        </h3>
                        <p
                          className="mt-1 text-[14px] leading-[1.5]"
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            color: isDark ? "#7a7872" : "#666",
                          }}
                        >
                          Politička podela u savremenim društvima više nije izuzetak,
                          već pravilo. Srbija kao ogledalo globalne tranzicije.
                        </p>
                      </div>
                      <img
                        src={IMAGES.democracyAutocracy}
                        alt="Demokratija i autokratija"
                        className="w-[100px] h-[75px] object-cover border"
                        style={{
                          borderColor: isDark ? "#2a2a2e" : "#eee",
                          backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* Subscribe / CTA section */}
          <FadeIn className="mt-16">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ backgroundColor: isDark ? "#0d0d0f" : "#1a2a3a" }}
            >
              <div className="py-16 px-8 text-center">
                <p
                  className="text-white/90 text-[28px] md:text-[34px] italic mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Budite informisani.
                </p>
                <p
                  className="text-white/70 text-[16px] max-w-[560px] mx-auto mb-6"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  Pratite Novi talas za ekskluzivne analize iz oblasti geopolitike i
                  bezbednosti.
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
