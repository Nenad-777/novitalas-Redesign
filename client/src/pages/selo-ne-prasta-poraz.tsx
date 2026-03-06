/*
 * Srbija - Selo ne prašta poraz (single article)
 * Layout & typography: usklađeno sa Ormuz (Diplomatska Klasika)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function SeloNePrastaPoraz() {
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
          <span className="kicker">Srbija</span>

          <h1
            className="mt-3 text-[30px] md:text-[44px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Selo ne prašta poraz
          </h1>

          <p
            className="mt-3 uppercase"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.16em",
              color: isDark ? "#7f7a72" : "#888",
            }}
          >
            6. MART 2026.
          </p>

          <p
            className="mt-6 text-[18px] md:text-[20px] leading-[1.75]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#cfcac0" : "#222",
            }}
          >
            Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta bez
            dogovora sa državom, što otvara ozbiljno političko pitanje u zemlji čiju
            stabilnost vekovima nosi selo.
          </p>

          <div
            className="mt-8 border overflow-hidden"
            style={{
              borderColor: isDark ? "#2a2a2e" : "#eee",
              backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
            }}
          >
            <img
              src="/traktori-beograd.jpg"
              alt="Kolona traktora ka Beogradu"
              className="w-full h-[260px] md:h-[420px] object-cover object-center block"
            />
          </div>

          <p
            className="mt-8 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Posle više od tri nedelje blokada puteva širom Srbije, poljoprivrednici su
            uklonili traktore sa saobraćajnica i vratili se na svoja imanja kako bi
            započeli prolećne radove.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Protesti su započeli zbog nezadovoljstva cenama poljoprivrednih proizvoda,
            visinom subvencija i politikom uvoza hrane. Tokom blokada traktori su se
            pojavili na magistralnim putevima širom zemlje.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Iako su blokade završene, predstavnici udruženja poručuju da ključni zahtevi
            nisu rešeni i da je protest prekinut zbog početka radova na njivama, a ne
            zbog sporazuma sa državom.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            U političkoj logici to često predstavlja najosetljiviji trenutak za svaku vlast.
            Protest koji se završava dogovorom zatvara krizu. Protest koji se završava bez
            rešenja ostavlja otvoreno pitanje koje može ponovo da se pojavi.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            U istoriji Srbije više puta se pokazalo da trenutak kada selo odlazi nezadovoljno
            retko ostaje bez političkih posledica.
          </p>

          <div className="mt-12">
            <a
              href="/srbija"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              ← Nazad na Srbiju
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
