/*
 * Naša planeta  -  Vest
 * ALMA “mega-slike” srca Mlečnog puta
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

const IMAGES = {
  alma: "/alma-mlecni-put.jpg",
};

export default function AlmaSkrivenoJezgro() {
  useSEO("/nasa-planeta/alma-skriveno-jezgro");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="py-10 md:py-14 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <article className="max-w-[920px] mx-auto px-5">
          {/* Hero image */}
          <div
            className="border overflow-hidden mb-8"
            style={{
              borderColor: isDark ? "#2a2a2e" : "#eee",
              backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
            }}
          >
            <img
              src={IMAGES.alma}
              alt="ALMA  -  srce Mlečnog puta"
              className="w-full h-[240px] md:h-[420px] object-cover object-center block"
            />
          </div>

          {/* Meta */}
          <div className="mb-3">
            <span className="kicker">Naša planeta</span>
            <div
              className="mt-2 text-[13px] tracking-[0.08em] uppercase"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#bdb9ae" : "#666",
              }}
            >
              26. februar 2026.
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-[30px] md:text-[42px] font-bold leading-[1.12] mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Najveća ALMA mapa ikad: otkriveno „skriveno jezgro“ Mlečnog puta
          </h1>

          {/* Podeli vest */}
          <ShareButton />

          {/* Body */}
          <div
            className="text-[18px] leading-[1.75]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#d5d1c8" : "#222",
            }}
          >
            <p className="mb-5">
              SANTIAGO / ESO  -  Međunarodni tim astronoma objavio je do sada najveću mapu
              koju je napravio radio-teleskop ALMA, prikazujući Centralnu molekularnu zonu (CMZ)  - 
              najturbulentniji i najgušći pojas gasa i prašine u središtu naše galaksije,
              u blizini supermasivne crne rupe Sagittarius A*.
            </p>

            <p className="mb-5">
              Snimak obuhvata region širok oko 650 svetlosnih godina. Napravljen je „mozaik“
              metodom od brojnih pojedinačnih posmatranja i otkriva mrežu filamenata,
              džepove gustog gasa i zone u kojima nastaju nove zvezde u uslovima koji se smatraju
              ekstremnim u poređenju sa „mirnijim“ delovima galaksije.
            </p>

            <p className="mb-6">
              Istraživanje je deo projekta <strong>ALMA CMZ Exploration Survey (ACES)</strong>,
              u kojem učestvuje više od 160 naučnika iz desetina institucija. Cilj je da se razume
              kako se zvezde rađaju u „nukleusu“ galaksije, gde su hemija, turbulencija i pritisci
              drugačiji nego u okolini Sunčevog sistema. Naučnici navode da CMZ ima osobine
              koje podsećaju na uslove u ranom univerzumu  -  što ovu mapu čini svojevrsnim
              „laboratorijskim prozorom“ u prošlost kosmosa.
            </p>

            {/* Short comment box */}
            <div
              className="border-l-4 pl-5 py-4 my-8"
              style={{
                borderColor: isDark ? "#d9bf7a" : "#8B0000",
                backgroundColor: isDark ? "rgba(217,191,122,0.08)" : "rgba(139,0,0,0.06)",
              }}
            >
              <div
                className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-2"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                Kratak komentar
              </div>
              <p className="m-0">
                Ovakve „karte hladnog svemira“ su važne jer ALMA ne fotografiše svetlost koju vidimo okom,
                već radio/podmilimetarske potpise hladnog gasa  -  sirovine od koje nastaju zvezde.
                Dok optičke fotografije često pokazuju posledicu (zvezde), ovde gledamo uzrok:
                materijal i hemiju od kojih zvezde nastaju.
              </p>
            </div>

            <p
              className="text-[14px] leading-[1.6]"
              style={{ color: isDark ? "#bdb9ae" : "#666" }}
            >
              Izvor/credits: ALMA (ESO/NAOJ/NRAO)  -  prema objavljenim materijalima projekta ACES.
            </p>
          </div>

          {/* Back */}
          <hr className="editorial-divider my-10" />
          <Link
            href="/nasa-planeta"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            &larr; Nazad na Našu planetu
          </Link>
        </article>
      </main>

      <Footer />
    </div>
  );
}
