/*
 * DESIGN: "Diplomatska Klasika" — Srbija article page
 * Article: Podeljeno društvo: Srbija u ogledalu globalne polarizacije
 * Image: Democracy/Autocracy illustration (user uploaded) — kept
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  democracyAutocracy: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/qZixjPORsEGCuRBV.png",
  europeMap: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
};

export default function SrbijaPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[320px] md:h-[400px] overflow-hidden"
        style={{ backgroundColor: isDark ? "#0d1117" : "#f0f4f7" }}
      >
        <img
          src={IMAGES.democracyAutocracy}
          alt="Podeljeno društvo — polarizacija"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: isDark ? 0.6 : 0.9 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(to top, rgba(17,19,24,0.9) 0%, rgba(17,19,24,0.3) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-[26px] md:text-[32px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "rgba(246,243,232,0.9)" : "#1a2a3a",
              textShadow: isDark ? "0 2px 8px rgba(0,0,0,0.5)" : "0 2px 8px rgba(255,255,255,0.5)",
            }}
          >
            Analiza nedelje
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 md:py-16 flex-1" style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            {/* Main article */}
            <article>
              <span className="kicker">Srbija</span>
              <h1
                className="mt-2 mb-4 text-[32px] md:text-[42px] font-bold leading-[1.1]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isDark ? "#e0ddd5" : "#111",
                }}
              >
                Podeljeno društvo: Srbija u ogledalu globalne polarizacije
              </h1>

              <p
                className="text-[18px] md:text-[19px] leading-[1.6] mb-8 italic"
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  color: isDark ? "#9a978f" : "#555",
                }}
              >
                Politička podela u savremenim društvima više nije izuzetak, već pravilo. Polarizacija koja oblikuje političku scenu u Sjedinjenim Američkim Državama, Francuskoj, Nemačkoj ili Italiji ima svoje paralele i u Srbiji. U tom smislu, domaća politička dinamika nije izolovani fenomen, već deo šireg globalnog procesa.
              </p>

              <div
                className="text-[18px] md:text-[19px] leading-[1.75]"
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  color: isDark ? "#c5c2ba" : "#222",
                }}
              >
                <h2
                  className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Desnica i levica u novom obliku
                </h2>

                <p className="mb-6">
                  Tradicionalne podele na levicu i desnicu više ne funkcionišu u klasičnom ideološkom smislu. Umesto ekonomskih modela, centralna linija razdvajanja postaje pitanje identiteta, bezbednosti i kulturnog suvereniteta.
                </p>

                <p className="mb-6">
                  U Sjedinjenim Državama politički jaz između konzervativnog i liberalnog bloka prerastao je u duboko institucionalno nepoverenje. U Francuskoj, rast desnog populizma dovodi u pitanje tradicionalne partijske strukture. U Nemačkoj i Italiji jačaju pokreti koji se oslanjaju na nacionalnu retoriku i kritiku evropskih integracija.
                </p>

                <p className="mb-6">
                  Sličan obrazac prisutan je i u Srbiji, gde se politička scena polarizuje oko pitanja državnog identiteta, odnosa prema Zapadu i Rusiji, kao i uloge međunarodnih institucija.
                </p>

                <h2
                  className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Institucije pod pritiskom
                </h2>

                <p className="mb-6">
                  Jedan od ključnih pokazatelja polarizacije jeste nivo poverenja u institucije. U mnogim zapadnim demokratijama poverenje u medije, parlament i pravosuđe beleži pad. Srbija u tom smislu ne odstupa od globalnog trenda.
                </p>

                <p className="mb-6">
                  Kada institucionalno poverenje oslabi, politička borba prelazi sa programskih razlika na borbu za legitimitet samog sistema.
                </p>

                <h2
                  className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Spoljni uticaji i unutrašnje podele
                </h2>

                <p className="mb-6">
                  U uslovima pojačanih geopolitičkih tenzija, unutrašnje političke podele postaju podložnije spoljnim interpretacijama. Srbija, zbog svog položaja između evropskih integracija i tradicionalnih veza sa Rusijom, često se nalazi u fokusu međunarodnih analiza.
                </p>

                <p className="mb-6">
                  Međutim, suštinsko pitanje nije da li postoji spoljni uticaj, već da li domaće društvo poseduje dovoljno institucionalne stabilnosti da apsorbuje spoljne pritiske bez produbljivanja unutrašnjih podela.
                </p>

                <h2
                  className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Polarizacija kao globalni simptom
                </h2>

                <p className="mb-6">
                  Važno je primetiti da polarizacija nije samo politički proces. Ona je društveni i kulturni fenomen. Digitalne platforme, fragmentacija medijskog prostora i algoritamska distribucija sadržaja dodatno produbljuju razlike.
                </p>

                <p className="mb-6">
                  U tom kontekstu Srbija nije izuzetak, već deo šire slike u kojoj su društva suočena sa izazovom očuvanja političkog pluralizma uz istovremeno očuvanje institucionalne stabilnosti.
                </p>

                <p className="mb-6">
                  Srbija se danas može posmatrati kao ogledalo globalne tranzicije političkih sistema. Podela na desnicu i levicu više nije samo ideološka, već identitetska i geopolitička. Razumevanje tog procesa zahteva komparativni pogled.
                </p>

                <p className="mb-6">
                  U svetu u kojem se političke ravnoteže ubrzano menjaju, sposobnost društva da održi institucionalni okvir i dijalog postaje ključna mera stabilnosti.
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

            {/* Sidebar */}
            <aside>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-bold tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Prateće vesti
                </span>
                <span className="flex-1 h-px" style={{ backgroundColor: isDark ? "#2a2a2e" : "#e5e5e5" }} />
              </div>

              <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                <div>
                  <span className="kicker">Geopolitika</span>
                  <h3
                    className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25]"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: isDark ? "#e0ddd5" : "#111",
                    }}
                  >
                    <Link href="/geopolitika/nova-bezbednosna-arhitektura" className="headline-link">
                      Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?
                    </Link>
                  </h3>
                  <p
                    className="mt-1 text-[14px] leading-[1.5]"
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      color: isDark ? "#7a7872" : "#666",
                    }}
                  >
                    Evropa se sve otvorenije definiše kao akter tvrde moći u kontekstu strateške transformacije.
                  </p>
                </div>
                <img
                  src={IMAGES.europeMap}
                  alt="Mapa Evrope"
                  className="w-[100px] h-[75px] object-cover border"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f5f5f5",
                  }}
                />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
