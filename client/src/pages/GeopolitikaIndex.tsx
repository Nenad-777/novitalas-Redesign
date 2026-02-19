/*
 * DESIGN: "Diplomatska Klasika" — Geopolitika index (rubrika)
 * Purpose: list of Geopolitika articles (newest first)
 * Articles:
 * 1) Iran (new)
 * 2) Europe security architecture (old)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  // NEW: local image you uploaded into /client/public as carrier.jpg or carrier.png
  // Use whichever you actually committed. If you uploaded "carrier.jpg", keep this:
  carrier: "/carrier.jpg",

  // OLD: europe map image
  europeMap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
};

function Divider({ isDark }: { isDark: boolean }) {
  return (
    <hr
      className="my-8"
      style={{
        border: "none",
        borderTop: `1px solid ${isDark ? "#2a2a2e" : "#e9e9e9"}`,
      }}
    />
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
        <section className="max-w-[980px] mx-auto px-5">
          {/* Section title */}
          <div className="mb-10">
            <span className="kicker">Rubrika</span>
            <h1
              className="mt-2 text-[34px] md:text-[44px] font-bold leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Geopolitika
            </h1>

            <p
              className="mt-4 text-[16px] md:text-[17px] leading-[1.6] max-w-[760px]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              Dnevne analize i komentar — fokus na Evropu, velike sile, bezbednost i energetske tokove.
              Najnovije vesti su na vrhu.
            </p>
          </div>

          {/* ===== ARTICLE 1 (NEW) ===== */}
          <article>
            <span className="kicker">Geopolitika</span>

            <h2
              className="mt-2 mb-3 text-[28px] md:text-[36px] font-bold leading-[1.12]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              <Link href="/geopolitika/iran" className="headline-link">
                SAD razmatraju udar na Iran: prozor odluke se sužava
              </Link>
            </h2>

            <div
              className="flex items-center gap-2 mb-6 text-[13px]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#7a7872" : "#888",
              }}
            >
              <span
                className="font-semibold uppercase tracking-[0.05em]"
                style={{ color: isDark ? "#9a978f" : "#555" }}
              >
                Novi Talas
              </span>
              <span>&bull;</span>
              <span>Februar 2026</span>
            </div>

            {/* image */}
            <figure className="mb-6">
              <div
                className="border"
                style={{
                  borderColor: isDark ? "#2a2a2e" : "#eee",
                  backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                }}
              >
                <img
                  src={IMAGES.carrier}
                  alt="Nosač aviona — geopolitika Iran"
                  className="w-full h-[260px] md:h-[360px] object-cover object-center block"
                />
              </div>
            </figure>

            <p
              className="text-[18px] md:text-[19px] leading-[1.65] mb-2 max-w-[820px]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#c5c2ba" : "#222",
              }}
            >
              Izveštaji američkih i međunarodnih medija ukazuju da je Pentagon spreman za mogući udar na Iran,
              dok se u Beloj kući razmatraju opcije i posledice eskalacije. Diplomatski kanali ostaju aktivni,
              ali retorika, raspoređivanje snaga i vremenski okviri sugerišu da je prostor za deeskalaciju ograničen.
            </p>

            <Link
              href="/geopolitika/iran"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              Pročitaj &rarr;
            </Link>
          </article>

          <Divider isDark={isDark} />

          {/* ===== ARTICLE 2 (OLD) ===== */}
          <article>
            <span className="kicker">Geopolitika</span>

            <h2
              className="mt-2 mb-3 text-[26px] md:text-[34px] font-bold leading-[1.12]"
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

            <div
              className="flex items-center gap-2 mb-6 text-[13px]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#7a7872" : "#888",
              }}
            >
              <span
                className="font-semibold uppercase tracking-[0.05em]"
                style={{ color: isDark ? "#9a978f" : "#555" }}
              >
                Novi Talas
              </span>
              <span>&bull;</span>
              <span>Februar 2026</span>
            </div>

            {/* image */}
            <figure className="mb-6">
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
                  className="w-full h-[240px] md:h-[340px] object-cover object-center block"
                />
              </div>
            </figure>

            <p
              className="text-[18px] md:text-[19px] leading-[1.65] mb-2 max-w-[820px]"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#c5c2ba" : "#222",
              }}
            >
              Rat u Ukrajini prerasta u dugotrajni okidač evropske strateške transformacije: od rearmiranja i
              redefinisanja uloge NATO-a, do ambicija EU kao bezbednosnog aktera. Energetika, industrijska baza
              i Balkan postaju delovi iste nove arhitekture.
            </p>

            <Link
              href="/geopolitika/nova-bezbednosna-arhitektura"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              Pročitaj &rarr;
            </Link>
          </article>

          {/* Back to home */}
          <hr className="editorial-divider my-12" />
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
