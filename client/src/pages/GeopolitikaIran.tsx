import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const IMAGES = {
  hero: "/carrier.jpg",
};

export default function GeopolitikaIran() {
  useSEO("/geopolitika/iran");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="max-w-[1000px] mx-auto px-5 pt-10 md:pt-14">
          <span className="kicker">Geopolitika</span>

          <h1
            className="mt-3 text-[34px] md:text-[52px] font-bold leading-[1.08]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran
          </h1>

          <p
            className="mt-4 text-[16px] md:text-[18px] leading-[1.7] max-w-[860px]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#9a978f" : "#555",
            }}
          >
            SAD su rasporedile dodatne vazdušne i pomorske kapacitete na Bliskom istoku,
            dok predsednik Trump još nije doneo konačnu odluku. Potencijalna eskalacija u zoni
            Ormuskog moreuza otvara energetski i bezbednosni rizik i za Evropu.
          </p>

          <div className="mt-8 border overflow-hidden" style={{ borderColor: isDark ? "#2a2a2e" : "#eee" }}>
            <img
              src={IMAGES.hero}
              alt="Nosač aviona"
              className="w-full h-[260px] md:h-[420px] object-cover object-center block"
            />
          </div>
        </section>

        {/* BODY */}
        <section className="max-w-[760px] mx-auto px-5 py-10 md:py-12">
          <div
            className="text-[18px] md:text-[20px] leading-[1.9]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#d8d5cd" : "#1a1a1a",
            }}
          >
            <p className="mb-6">
              Vojno pozicioniranje SAD u regionu poslednjih dana dobija na intenzitetu: dodatni
              avioni, brodovi i logistika šalju poruku da je opcija sile na stolu.
              U diplomatskom smislu, to je klasična taktika pojačavanja pritiska — ali svaki
              korak ka demonstraciji moći u ovako zategnutoj zoni sužava prostor za kontrolu spirale.
            </p>

            <p className="mb-6">
              U pozadini se prepliću tri linije: unutrašnja politika u Vašingtonu, regionalna
              bezbednosna dinamika i energetska arterija sveta — Ormuski moreuz. Ako se napetost
              prelije u otvoreni sukob, posledice se neće zadržati na Bliskom istoku:
              tržišta energenata, osiguranje pomorskih ruta i evropska inflacija reagovaće odmah.
            </p>

            <p className="mb-6">
              Sama vojna spremnost ne znači i neizbežnost udara, ali predstavlja najviši stepen
              političkog pritiska pre prelaska u otvorenu eskalaciju. Vašington demonstracijom sile
              pojačava pregovaračku poziciju, ali u situacijama ovakvog intenziteta prostor za
              pogrešnu procenu postaje izuzetno uzak: jednom pokrenuta spirala uzvratnih poteza
              često nadživi prvobitni politički cilj.
            </p>

            <p className="mb-10">
              Za Evropu, potencijalni sukob ne bi bio udaljena kriza, već neposredan energetski
              i bezbednosni izazov. Svaka destabilizacija Ormuskog moreuza reflektovala bi se na
              globalna tržišta energenata, inflaciju i političku stabilnost kontinenta.
              U ovom trenutku, sistem stoji na tankoj liniji između diplomatije i vojne eskalacije —
              a konačna odluka iz Vašingtona definisaće ton međunarodnih odnosa u mesecima koji dolaze.
            </p>

            <hr className="editorial-divider my-10" />

            <Link
              href="/geopolitika"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              &larr; Nazad na Geopolitiku
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
