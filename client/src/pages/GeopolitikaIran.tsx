import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  carrier: "/carrier.jpg",
};

export default function GeopolitikaIran() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}>
      <Header />

      <main className="py-12 md:py-16 flex-1">
        <article className="max-w-[760px] mx-auto px-5">
          <span className="kicker">Geopolitika</span>

          <h1
            className="mt-3 mb-4 text-[34px] md:text-[46px] font-bold leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif", color: isDark ? "#e0ddd5" : "#111" }}
          >
            Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran
          </h1>

          <figure className="mb-10">
            <div className="border" style={{ borderColor: isDark ? "#2a2a2e" : "#eee" }}>
              <img
                src={IMAGES.carrier}
                alt="Nosač aviona"
                className="w-full h-[300px] md:h-[420px] object-cover object-center block"
              />
            </div>
          </figure>

          <div
            className="text-[18px] md:text-[19px] leading-[1.75]"
            style={{ fontFamily: "'Crimson Pro', serif", color: isDark ? "#c5c2ba" : "#222" }}
          >
            <p className="mb-6">
              Sama vojna spremnost ne znači i neizbežnost udara, ali predstavlja najviši stepen političkog pritiska pre
              prelaska u otvorenu eskalaciju.
            </p>

            <p className="mb-6">
              Za Evropu, potencijalni sukob ne bi bio udaljena kriza, već neposredan energetski i bezbednosni izazov.
            </p>
          </div>

          <hr className="editorial-divider my-10" />
          <Link
            href="/geopolitika"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline"
            style={{ fontFamily: "'Source Sans 3', sans-serif", color: isDark ? "#d9bf7a" : "#8B0000" }}
          >
            &larr; Nazad na Geopolitiku
          </Link>
        </article>
      </main>

      <Footer />
    </div>
  );
}
