/*
 * NOVI TALAS – UNIVERSAL ARTICLE TEMPLATE
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function ArticleTemplate() {
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
        <article className="max-w-[860px] mx-auto px-5">

          {/* KATEGORIJA */}
          <span className="kicker">Kategorija</span>

          {/* NASLOV */}
          <h1
            className="mt-3 text-[30px] md:text-[44px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Naslov članka
          </h1>

          {/* DATUM */}
          <p
            className="mt-3 uppercase"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.16em",
              color: isDark ? "#7f7a72" : "#888",
            }}
          >
            DATUM OBJAVE
          </p>

          {/* LEAD / DECK */}
          <p
            className="mt-6 text-[18px] md:text-[20px] leading-[1.75]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#cfcac0" : "#222",
            }}
          >
            Kratak uvodni pasus koji objašnjava šta se dogodilo i zašto je važno.
          </p>

          {/* SLIKA */}
          <div
            className="mt-8 border overflow-hidden"
            style={{
              borderColor: isDark ? "#2a2a2e" : "#eee",
              backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
            }}
          >
            <img
              src="/slika.jpg"
              alt="opis slike"
              className="w-full h-[260px] md:h-[420px] object-cover object-center block"
            />
          </div>

          {/* TEKST */}
          <p
            className="mt-8 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Prvi pasus teksta.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Drugi pasus teksta.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Treći pasus teksta.
          </p>

          {/* POVRATAK NA RUBRIKU */}
          <div className="mt-12">
            <a
              href="/rubrika"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              ← Nazad na rubriku
            </a>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
