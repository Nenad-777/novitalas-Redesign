/*
 * DESIGN: "Diplomatska Klasika" — Geopolitika article page
 * Article: Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran
 * Image: carrier.jpg (uploaded to client/public)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  carrier: "/carrier.jpg",
};

export default function GeopolitikaArticle() {
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
        <article className="max-w-[760px] mx-auto px-5">
          {/* Kicker */}
          <span className="kicker">Geopolitika</span>

          {/* Headline */}
          <h1
            className="mt-3 mb-4 text-[34px] md:text-[46px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran
          </h1>

          {/* Byline */}
          <div
            className="flex items-center gap-2 mb-8 text-[13px]"
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

          {/* Feature image */}
          <figure className="mb-10">
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
                className="w-full h-[300px] md:h-[420px] object-cover object-center block"
              />
            </div>
          </figure>

          {/* Article body */}
          <div
            className="text-[18px] md:text-[19px] leading-[1.75]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#c5c2ba" : "#222",
            }}
          >
            {/* VEST */}
            <p className="mb-6">
              Sjedinjene Američke Države rasporedile su dodatne vazdušne i pomorske
              kapacitete na Bliskom istoku, čime je operativno omogućeno izvođenje
              udara na Iran već tokom narednih dana, prenose američki mediji
              pozivajući se na izvore iz administracije. Konačna odluka predsednika
              Donalda Trumpa još nije doneta.
            </p>

            <p className="mb-6">
              Prema dostupnim informacijama, u region su upućeni nosači aviona,
              strateški bombarderi i borbeni avioni pete generacije. Američka vojska
              nalazi se u stanju pune pripravnosti, dok diplomatski kanali sa
              Teheranom formalno ostaju otvoreni. Pregovori o iranskom nuklearnom
              programu, međutim, za sada nisu doveli do vidljivog pomaka.
            </p>

            <p className="mb-6">
              Istovremeno, Iran je podigao nivo vojne spremnosti, uključujući
              aktivnosti u Ormuskom moreuzu – strateškom prolazu kroz koji prolazi
              značajan deo svetske trgovine naftom.
            </p>

            {/* KOMENTAR */}
            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Komentar
            </h2>

            <p className="mb-6">
              Sama vojna spremnost ne znači i neizbežnost udara, ali predstavlja
              najviši stepen političkog pritiska pre prelaska u otvorenu eskalaciju.
              Vašington demonstracijom sile pojačava pregovaračku poziciju, ali u
              situacijama ovakvog intenziteta prostor za pogrešnu procenu postaje
              izuzetno uzak: jednom pokrenuta spirala uzvratnih poteza često nadživi
              prvobitni politički cilj.
            </p>

            <p className="mb-6">
              Za Evropu, potencijalni sukob ne bi bio udaljena kriza, već neposredan
              energetski i bezbednosni izazov. Svaka destabilizacija Ormuskog moreuza
              reflektovala bi se na globalna tržišta energenata, inflaciju i
              političku stabilnost kontinenta. U ovom trenutku, sistem stoji na
              tankoj liniji između diplomatije i vojne eskalacije — a konačna odluka
              iz Vašingtona definisaće ton međunarodnih odnosa u mesecima koji dolaze.
            </p>
          </div>

          {/* Back link */}
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
        </article>
      </main>

      <Footer />
    </div>
  );
}
