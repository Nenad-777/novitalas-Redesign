/*
 * DESIGN: "Diplomatska Klasika" — Geopolitika index (rubrika)
 * Shows: latest + previous geopolitics articles
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  carrier: "/carrier.jpg",
  europeMap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
};

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
        <div className="max-w-[980px] mx-auto px-5">
          <span className="kicker">Geopolitika</span>

          <h1
            className="mt-3 mb-8 text-[30px] md:text-[40px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Geopolitika — najnovije
          </h1>

          {/* NOVA VEST (prva) */}
          <article className="mb-10">
            <div
              className="border"
              style={{
                borderColor: isDark ? "#2a2a2e" : "#eee",
                backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
              }}
            >
              <img
                src={IMAGES.carrier}
                alt="Američki nosač aviona u operativnoj misiji"
                className="w-full h-[260px] md:h-[360px] object-cover object-center block"
              />
            </div>

            <h2
              className="mt-4 text-[24px] md:text-[30px] font-bold leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              <Link href="/geopolitika/iran" className="headline-link">
                Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran
              </Link>
            </h2>

            <p
              className="mt-2 text-[16px] md:text-[18px] leading-[1.6]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              SAD su rasporedile dodatne vazdušne i pomorske kapacitete, dok konačna odluka još nije doneta.
              Svaka eskalacija u zoni Ormuskog moreuza prelama se i kroz evropsku energetsku i bezbednosnu računicu.
            </p>
          </article>

          <hr className="editorial-divider my-10" />

          {/* STARA VEST (druga) */}
          <article className="mb-10">
            <div
              className="border"
              style={{
                borderColor: isDark ? "#2a2a2e" : "#eee",
                backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
              }}
            >
              <img
                src={IMAGES.europeMap}
                alt="Mapa Evrope — bezbednosna arhitektura"
                className="w-full h-[240px] md:h-[320px] object-cover object-center block"
              />
            </div>

            <h2
              className="mt-4 text-[22px] md:text-[28px] font-bold leading-[1.15]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              <Link
                href="/geopolitika/nova-bezbednosna-arhitektura"
                className="headline-link"
              >
                Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?
              </Link>
            </h2>

            <p
              className="mt-2 text-[16px] md:text-[18px] leading-[1.6]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              Kontinent ulazi u fazu strateške rekonstrukcije: NATO, EU, energetika i Balkan u novoj bezbednosnoj paradigmi.
            </p>
          </article>

          <hr className="editorial-divider my-10" />

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            &larr; Nazad na naslovnu
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
