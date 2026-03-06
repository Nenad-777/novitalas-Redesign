import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/6SqA6Ltpws9fwNQXZCXsiu/sandbox/VqzKWVZr2iULAAnWvkb1OW-img-1_1771300001000_na1fn_bm92aS10YWxhcy1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",

  ormuz: "/ormuz.jpg",
  ukraine: "/geopolitika-ukrajina.jpg",
  iranRiots: "/tehran-riots.jpg",

  izraelIran: "/f22-israel-iran-2026.jpg",

  alma: "/alma-mlecni-put.jpg",

  srbijaThumb: "/traktori-beograd.jpg",
};

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

      {/* HERO */}
      <section
        className="relative w-full h-[380px] md:h-[440px] overflow-hidden"
        style={{ backgroundColor: isDark ? "#0d1117" : "#f0f4f7" }}
      >
        <img
          src={IMAGES.hero}
          alt="Globus sa avionima"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: isDark ? 0.6 : 0.9 }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(to top, rgba(17,19,24,0.9), transparent)"
              : "linear-gradient(to top, rgba(255,255,255,0.85), transparent)",
          }}
        />

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-[28px] md:text-[36px] italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#f6f3e8" : "#1a2a3a",
            }}
          >
            Vaš prozor u svet
          </p>
        </div>
      </section>

      <main className="py-12 md:py-16 flex-1">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* MART */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
                Mart 2026
              </span>
              <span className="flex-1 h-px bg-gray-300" />
            </div>
          </FadeIn>

          {/* ORMUS */}
          <FadeIn className="mb-10">
            <article className="border overflow-hidden">
              <Link href="/geopolitika/ormuz" className="no-underline">
                <div className="grid md:grid-cols-[1.2fr_0.8fr]">

                  <div className="p-7">
                    <span className="text-[11px] uppercase font-bold tracking-[0.16em]">
                      Udarno · Geopolitika
                    </span>

                    <h2
                      className="mt-3 text-[30px] font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Zatvoren Ormuski moreuz
                    </h2>

                    <p className="mt-3 text-[17px]">
                      Ključni prolaz kroz koji prolazi približno petina svetske trgovine naftom
                      pod pritiskom je bezbednosnih poteza u regionu.
                    </p>

                    <div className="mt-4 text-[12px] uppercase font-semibold">
                      Otvori tekst →
                    </div>
                  </div>

                  <img
                    src={IMAGES.ormuz}
                    alt="Ormuski moreuz"
                    className="w-full h-[220px] md:h-full object-cover"
                  />
                </div>
              </Link>
            </article>
          </FadeIn>

          {/* GRID */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">

            {/* GLAVNA */}
            <FadeIn>
              <article>

                <span className="kicker">Geopolitika</span>

                <h1
                  className="mt-2 text-[38px] font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <Link
                    href="/geopolitika/sukobi-izrael-iran-2026"
                    className="headline-link"
                  >
                    Izrael–Iran 2026
                  </Link>
                </h1>

                <p className="text-[18px] mt-3">
                  Spirala odgovora ponovo podiže cenu greške.
                </p>

                <figure className="mt-6">
                  <img
                    src={IMAGES.izraelIran}
                    className="w-full h-[380px] object-cover"
                  />
                </figure>

              </article>
            </FadeIn>

            {/* SIDEBAR */}
            <aside>
              <FadeIn>

                {/* SRBIJA */}
                <div className="grid grid-cols-[1fr_100px] gap-4">

                  <div>
                    <span className="kicker">Srbija</span>

                    <h3
                      className="mt-1 text-[20px] font-bold"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      <Link
                        href="/srbija/selo-ne-prasta-poraz-vest"
                        className="headline-link"
                      >
                        Selo ne prašta poraz
                      </Link>
                    </h3>

                    <p className="text-[14px] mt-1">
                      Blokade su završene, ali protest se završio bez dogovora sa državom.
                    </p>
                  </div>

                  <img
                    src={IMAGES.srbijaThumb}
                    alt="Srbija vest"
                    className="w-[100px] h-[75px] object-cover border"
                  />

                </div>

              </FadeIn>
            </aside>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
