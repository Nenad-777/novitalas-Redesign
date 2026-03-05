import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function SeloNePrastaPoraz() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const titleColor = isDark ? "#e0ddd5" : "#111";
  const deckColor = isDark ? "#9a978f" : "#555";
  const bodyColor = isDark ? "#d4d0c8" : "#222";

  // ✅ Ormuz “magazin” tipografija: Athelas/Georgia
  const bodyFont = "Athelas, Georgia, serif";
  const titleFont = "'Playfair Display', Georgia, serif";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <article className="max-w-[900px] mx-auto px-5 py-10 md:py-14">
          {/* Header блока */}
          <div className="mb-8">
            <span className="kicker">Srbija</span>

            <h1
              className="mt-3 text-[34px] md:text-[52px] leading-[1.05] font-bold"
              style={{
                fontFamily: titleFont,
                color: titleColor,
              }}
            >
              Selo ne prašta poraz
            </h1>

            <p
              className="mt-4 text-[18px] md:text-[22px] leading-[1.6] max-w-[780px]"
              style={{
                fontFamily: bodyFont,
                color: deckColor,
              }}
            >
              Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta
              bez dogovora sa državom, što otvara ozbiljno političko pitanje u
              zemlji čiju stabilnost vekovima nosi selo.
            </p>
          </div>

          {/* Hero slika */}
          <figure className="mb-10">
            <div
              className="border overflow-hidden"
              style={{
                borderColor: isDark ? "#2a2a2e" : "#eee",
                backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
              }}
            >
              <img
                src="/traktori-beograd.jpg"
                alt="Kolona traktora ka Beogradu"
                className="w-full h-auto object-cover block"
              />
            </div>
          </figure>

          {/* ✅ Telo teksta: identično “Ormuz osećaju” */}
          <div
            className="max-w-[760px] mx-auto space-y-8 text-[20px] md:text-[22px] leading-[1.9]"
            style={{
              fontFamily: bodyFont,
              color: bodyColor,
            }}
          >
            <p>
              Posle više od tri nedelje blokada puteva širom Srbije,
              poljoprivrednici su uklonili traktore sa saobraćajnica i vratili
              se na svoja imanja kako bi započeli prolećne radove.
            </p>

            <p>
              Protesti su započeli zbog nezadovoljstva cenama poljoprivrednih
              proizvoda, visinom subvencija i politikom uvoza hrane. Tokom
              blokada traktori su se pojavili na magistralnim putevima širom
              zemlje.
            </p>

            <p>
              Iako su blokade završene, predstavnici udruženja poručuju da
              ključni zahtevi nisu rešeni i da je protest prekinut zbog početka
              radova na njivama, a ne zbog sporazuma sa državom.
            </p>

            <p>
              U političkoj logici to često predstavlja najosetljiviji trenutak
              za svaku vlast. Protest koji se završava dogovorom zatvara krizu.
              Protest koji se završava bez rešenja ostavlja otvoreno pitanje koje
              može ponovo da se pojavi.
            </p>

            <p>
              U istoriji Srbije više puta se pokazalo da trenutak kada selo
              odlazi nezadovoljno retko ostaje bez političkih posledica.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
