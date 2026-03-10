/*
 * NOVI TALAS — Srbija
 * Analiza nedelje
 * Tema: Podeljeno društvo – Srbija u ogledalu globalne polarizacije
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

export default function SrbijaPolarizacija() {
  useSEO("/srbija/podeljeno-drustvo");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* HERO SEKCIJA */}
      <section
        className="relative w-full h-[320px] md:h-[420px] overflow-hidden"
        style={{ backgroundColor: isDark ? "#0d1117" : "#f3f6f9" }}
      >
        <img
          src="/images/srbija-polarizacija.jpg"
          alt="Analiza nedelje – Srbija"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: isDark ? 0.65 : 0.9 }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(to top, rgba(17,19,24,0.95) 0%, rgba(17,19,24,0.4) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          }}
        />

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-[28px] md:text-[34px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#f2efe6" : "#1a2a3a",
            }}
          >
            Analiza nedelje
          </p>
        </div>
      </section>

      {/* SADRŽAJ */}
      <main
        className="flex-1 py-14 md:py-20"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <div className="max-w-[950px] mx-auto px-6">

          <span className="kicker">Srbija</span>

          <h1
            className="mt-3 mb-6 text-[34px] md:text-[46px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e6e2d8" : "#111",
            }}
          >
            Podeljeno društvo: Srbija u ogledalu globalne polarizacije
          </h1>

          <p
            className="text-[19px] leading-[1.7] mb-10 italic"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#a9a59c" : "#555",
            }}
          >
            Politička podela u savremenim društvima više nije izuzetak, već pravilo.
            Polarizacija koja oblikuje političku scenu u Sjedinjenim Američkim
            Državama, Francuskoj, Nemačkoj ili Italiji ima svoje paralele i u
            Srbiji. Domaća politička dinamika deo je šireg globalnog procesa.
          </p>

          <div
            className="text-[19px] leading-[1.8]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#cfcac0" : "#222",
            }}
          >

            <h2 className="mt-12 mb-4 text-[28px] font-bold">
              Desnica i levica u novom obliku
            </h2>

            <p className="mb-6">
              Tradicionalne podele na levicu i desnicu više ne funkcionišu u
              klasičnom ideološkom smislu. Umesto ekonomskih modela, centralna
              linija razdvajanja postaje pitanje identiteta, bezbednosti i
              kulturnog suvereniteta.
            </p>

            <p className="mb-6">
              Sličan obrazac prisutan je i u Srbiji, gde se politička scena
              polarizuje oko pitanja državnog identiteta, odnosa prema Zapadu
              i Rusiji, kao i uloge međunarodnih institucija.
            </p>

            <h2 className="mt-12 mb-4 text-[28px] font-bold">
              Institucije pod pritiskom
            </h2>

            <p className="mb-6">
              Jedan od ključnih pokazatelja polarizacije jeste nivo poverenja u
              institucije. U mnogim zapadnim demokratijama poverenje u medije,
              parlament i pravosuđe beleži pad. Srbija u tom smislu ne odstupa
              od globalnog trenda.
            </p>

            <p className="mb-6">
              Kada institucionalno poverenje oslabi, politička borba prelazi sa
              programskih razlika na borbu za legitimitet sistema.
            </p>

            <h2 className="mt-12 mb-4 text-[28px] font-bold">
              Polarizacija kao globalni simptom
            </h2>

            <p className="mb-6">
              Polarizacija nije samo politički proces — ona je društveni i
              kulturni fenomen. Digitalne platforme i fragmentacija medijskog
              prostora dodatno produbljuju razlike.
            </p>

            <p className="mb-6">
              U svetu u kojem se političke ravnoteže ubrzano menjaju,
              sposobnost društva da održi institucionalni okvir i dijalog
              postaje ključna mera stabilnosti.
            </p>

          </div>

          <hr className="my-12 opacity-30" />

          <Link
            href="/"
            className="text-sm uppercase tracking-wider font-semibold"
            style={{
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            ← Nazad na naslovnu
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
}
