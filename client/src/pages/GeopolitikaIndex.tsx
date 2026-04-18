/*
 * DESIGN: "Diplomatska Klasika"  -  Geopolitika index (listing)
 * Purpose: show articles (new + archive)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  closedAgain: "/news/closed-again.jpg",
  openOrmuz: "/news/open-ormuz.jpg",
  militaryCargo: "/news/military-cargo.jpg",
  magyar: "/news/magyar.jpg",
  primirjeVaskrs: "/news/primirje-vaskrs.jpg",
  unSecurityCouncil: "/news/un-security-council.jpg",
  hargOilTerminal: "/news/harg-oil-terminal.jpg",
  f15eIran: "/news/f15e-iran.jpg",
  ecbFrankfurtInflation: "/news/ecb-frankfurt-inflation.jpg",
  vanceNetanyahu: "/news/vance-netanyahu.jpg",
  orbanGas: "/news/orban-gas.jpg",
  steinmeier: "/news/Frank-Walter Steinmeier.jpg",
  meloniReferendum: "/news/meloni-referendum.jpg",
  trumpIran: "/news/trump-iran.jpg",
  ormuzKriza: "/news/ormuz-kriza.jpg",
  naftaKriza: "/news/nafta-kriza.jpg",
  tanker: "/news/tanker.jpg",
  westAgainstIsrael: "/news/west-against-israel.jpg",
  brodoviKriza: "/news/brodovi-kriza.jpg",
  biennaleRusija: "/news/biennale-venice.jpg",
  refugeesIranUn: "/refugees-iran-un.jpg",
  rezerveNafte: "/rezerve-nafte.jpg",
  usSpecialForces: "/us-special-forces-desert.jpg",
  hormuzTankers: "/hormuz-strait-tankers.jpg",
  russiaChinaShadows: "/russia-china-shadows.jpg",
  ormuz: "/ormuz.jpg",
  ukraine: "/geopolitika-ukrajina.jpg",
  iran: "/tehran-riots.jpg",
  izraelIran: "/f22-israel-iran-2026.jpg",
  europeMap: "/geopolitika-ukrajina.jpg",
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
        <section className="max-w-[1000px] mx-auto px-5">
          {/* Title */}
          <div className="mb-10">
            <span className="kicker">Geopolitika</span>
            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              SVET DANAS
            </p>
          </div>

          {/* LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.closedAgain}
                    alt="Ormuski moreuz pod pojačanom vojnom kontrolom"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Iran zatvara Ormuski moreuz: svet ulazi u energetsku neizvesnost
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Kontrola nad ključnim pomorskim pravcem postaje instrument političkog pritiska u trenutku globalnih tenzija.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Open Ormuz — 17. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.openOrmuz}
                    alt="Hormuški moreuz otvoren za komercijalni saobraćaj tokom primirja"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Iran otvorio Hormuški moreuz za komercijalni saobraćaj tokom primirja
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Teheran je saopštio da je Hormuški moreuz otvoren za komercijalni saobraćaj tokom trajanja primirja, čime je privremeno smanjena bojazan od novog udara na globalno tržište energije."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Military cargo — 17. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.militaryCargo}
                    alt="Vojni transport i logistika na pisti uoči isporuke opreme"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  SAD odlažu isporuke oružja Evropi zbog rata sa Iranom
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Sjedinjene Američke Države odlažu deo planiranih isporuka oružja evropskim saveznicima zbog pojačanih operativnih zahteva u ratu sa Iranom, potvrđuju diplomatski i bezbednosni izvori."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Magyar-Orban — 13. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/pomeranje-tezista-orban-evropa"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.magyar}
                    alt="Viktor Orban — poraz na izborima u Mađarskoj i geopolitičke posledice"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  POMERANJE TEŽIŠTA: Šta poraz Orbana znači za Evropu i svet
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Analiza političkih i geopolitičkih posledica poraza Viktora Orbana u Mađarskoj"}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Primirje za Uskrs — 11. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.primirjeVaskrs}
                    alt="Ilustracija uskršnjeg primirja u ratu između Rusije i Ukrajine."
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Rusija i Ukrajina dogovorile privremeno primirje za pravoslavni Uskrs
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Rusija i Ukrajina dogovorile su privremeni prekid vatre povodom pravoslavnog Uskrsa. Primirje je vremenski ograničeno i vezano za trajanje praznika, uz obostrane rezerve o njegovom sprovođenju na terenu."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Rusija, Kina i Francuska blokirale rezoluciju — 7. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.unSecurityCouncil}
                    alt="Savet bezbednosti Ujedinjenih nacija u Njujorku, gde je blokirana rezolucija o otvaranju Ormuskog moreuza."
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Rusija, Kina i Francuska blokirale rezoluciju o otvaranju Ormuskog moreuza
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Odluka dodatno produbljuje neizvesnost u regionu Persijskog zaliva i pojačava pritisak na globalne energetske tokove."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Harg – srce iranskog izvoza nafte — 7. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/harg-srce-iranskog-izvoza-nafte"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.hargOilTerminal}
                    alt="Naftni terminal na ostrvu Harg, jednom od najvažnijih energetskih čvorišta Irana."
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Harg – srce iranskog izvoza nafte
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Sjedinjene Američke Države, prema dostupnim izveštajima, izvele su udare na vojne ciljeve na ostrvu Harg, ključnom energetskom čvorištu Irana u Persijskom zalivu."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Oboren F-15E iznad Irana — 4. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/oboren-f15e-iran-2026"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.f15eIran}
                    alt="F-15E Strike Eagle u letu"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Oboren američki F-15E iznad Irana: jedan član posade spašen, drugi nestao
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Incident predstavlja prvi potvrđeni slučaj obaranja američkog aviona sa posadom u aktuelnom sukobu"}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (ECB inflacija evrozona — 1. april 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/inflacija-evrozona-ecb-mart"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ecbFrankfurtInflation}
                    alt="Sedište Evropske centralne banke u Frankfurtu, Nemačka"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Inflacija u evrozoni ponovo iznad cilja Evropske centralne banke
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Rast cena energije pogurao inflaciju na 2,5 odsto, dok monetarne vlasti razmatraju sledeće korake"}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Vens Netanjahu Iran rat — 28. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/vens-netanjahu-iran-rat"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.vanceNetanyahu}
                    alt="JD Vens i Benjamin Netanjahu tokom sastanka u Jerusalimu"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Vens kritikovao Netanjahua zbog procena rata sa Iranom
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"JD Vens kritikovao Benjamina Netanjahua zbog procena rata sa Iranom, ukazujući na rastuće razlike unutar savezništva."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (UN istraga škola Iran — 27. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/un-istraga-skola-iran"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src="/news/un-investigation.jpg"
                    alt="Zastava Ujedinjenih nacija ispred sedišta UN"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  UN traži pravdu nakon bombardovanja škole u Iranu
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Ujedinjene nacije traže hitnu istragu nakon bombardovanja škole u Iranu u kojem je stradalo više od 150 civila."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Orban prekid gasa Ukrajina — 25. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/orban-prekid-gas-ukrajina"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.orbanGas}
                    alt="Viktor Orban tokom obraćanja na sastanku Evropskog saveta"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Orban najavio prekid isporuke gasa Ukrajini
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {"Mađarski premijer Viktor Orban najavio postepeni prekid isporuke gasa Ukrajini, uz nove tenzije unutar Evropske unije."}
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Nemacka kritika rata — 24. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/nemacka-kritika-rat-iran"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.steinmeier}
                    alt="Frank-Valter Štajnmajer tokom obraćanja povodom rata sa Iranom"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  {`Nemačka oštro kritikovala rat: \u201EKatastrofalna greška\u201C i kršenje međunarodnog prava`}
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Nemački predsednik ocenio rat protiv Irana kao katastrofalnu grešku i upozorio na kršenje međunarodnog prava.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ VEST (Iran Tramp Ormuski moreuz — 23. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/iran-trump-ormuski-moreuz"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.trumpIran}
                    alt="Ilustracija sukoba između Donalda Trampa i Irana sa simboličnom kapljom nafte u centru, koja predstavlja globalnu energetsku i političku napetost"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Iran preti zatvaranjem Ormuskog moreuza kao odgovor na Trampov ultimatum
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Iran preti zatvaranjem Ormuskog moreuza kao odgovor na američki ultimatum, uz rizik globalne energetske krize.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NOVA VEST (Meloni referendum Italija — 24. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/meloni-referendum-italija"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.meloniReferendum}
                    alt="Giorgia Meloni tokom obraćanja nakon referenduma o reformi pravosuđa u Italiji"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Meloni priznala poraz: Italijani odbacili reformu pravosuđa
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Italijani su na referendumu odbacili reformu pravosuđa, a premijerka Giorgia Meloni priznala poraz.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Ormuski moreuz — 20. mart 2026) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/ormuz-moreuz"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ormuzKriza}
                    alt="Naftni tanker prolazi kroz uski Ormuski moreuz kao simbol globalne energetske napetosti"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Evropske zemlje i Japan o bezbednosti Ormuskog moreuza
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Evropske zemlje i Japan objavili su zajedničko saopštenje o bezbednosti Ormuskog moreuza i zaštiti pomorskih ruta za snabdevanje energentima.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Energetski rat — nafta kriza) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/energetski-rat"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.naftaKriza}
                    alt="Minimalistička ilustracija točilice za gorivo kao simbol energetske krize na Bliskom istoku"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Bliski istok ulazi u energetski rat: posle napada u Zalivu nafta skače, tržišta u panici
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Napadi na energetsku infrastrukturu u Zalivu podižu cenu nafte i šire krizu na Evropu.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Tanker bez pogona) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/tanker-bez-pogona"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.tanker}
                    alt="Tanker bez pogona u evropskim vodama"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  EVROPA U TRCI SA VREMENOM: tanker bez pogona preti ekološkom katastrofom
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Tanker bez pogona koji prevozi naftu nekontrolisano pluta u evropskim vodama, dok evropski lideri upozoravaju na rizik ekološke katastrofe i traže hitnu koordinisanu reakciju.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Zapadne sile upozorile Izrael) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/zapadne-sile-upozorile-izrael"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.westAgainstIsrael}
                    alt="Zapadne sile upozorile Izrael - kopnena ofanziva u Libanu"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Zapadne sile upozorile Izrael - ne pokretati kopnenu ofanzivu u Libanu
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Zapadne zemlje upozoravaju Izrael da ne pokreće kopnenu operaciju u Libanu, uz rastući rizik regionalne eskalacije.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Svetska kriza Ormuski moreuz) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/svetska-kriza-sve-ozbiljnija"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.brodoviKriza}
                    alt="Brodovi u Ormuskom moreuzu — globalna energetska kriza"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  SVETSKA KRIZA SVE OZBILJNIJA
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Zašto je Ormuski moreuz tako važan
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (EU Biennale Rusija) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/biennale-rusija"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.biennaleRusija}
                    alt="Venecijansko bijenale — povratak Rusije"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (UN izbeglice Iran) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/refugees-iran-un"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.refugeesIranUn}
                    alt="Izbeglice iz Irana — humanitarna kriza"
                    className="w-full h-[260px] object-cover object-center block"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (IEA rezerve nafte) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/rezerve-nafte"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.rezerveNafte}
                    alt="IEA — oslobađanje strateških naftnih rezervi"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IEA pokreće najveće oslobađanje naftnih rezervi u istoriji
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Države članice puštaju 400 miliona barela nafte iz strateških
                  rezervi kako bi ublažile globalni energetski šok izazvan
                  krizom u Persijskom zalivu.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (SAD specijalna operacija / Iran uranijum) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/sad-specijalna-operacija-iran-uranijum"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.usSpecialForces}
                    alt="Američke specijalne snage u pustinjskoj operaciji"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Američki bezbednosni krugovi razmatraju ograničenu vojnu operaciju
                  usmerenu na iranske zalihe visoko obogaćenog uranijuma.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ NAJNOVIJA VEST (Francuska odbrana Ormuza) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/francuska-odbrana-ormuza"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.hormuzTankers}
                    alt="Tankeri u Ormuskom moreuzu"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Makron najavljuje odbrambenu pomorsku misiju za zaštitu
                  slobodne plovidbe kroz ključni energetski prolaz.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ 0) NOVA VEST (Velike sile i kriza u Iranu) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/velike-sile-i-kriza-u-iranu"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.russiaChinaShadows}
                    alt="Rusija i Kina — senke velikih sila"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i
                  Pekinga
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Između podrške Teheranu i izbegavanja velikog rata: kako
                  Rusija i Kina balansiraju strateška partnerstva i globalne
                  interese.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ 1) NOVA VEST (Ormuski moreuz) */}
            <article className="md:col-span-2">
              <Link href="/geopolitika/ormuz" className="no-underline">
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ormuz}
                    alt="Ormuski moreuz"
                    className="w-full h-[260px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[28px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Ključni pomorski prolaz za naftu pod pritiskom: poremećaji u
                  transportu energenata i rast rizika za globalnu ekonomiju.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* ✅ 1) NOVA VEST (Izrael–Iran) */}
            <article>
              <Link
                href="/geopolitika/sukobi-izrael-iran-2026"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.izraelIran}
                    alt="Geopolitika  -  Izrael Iran"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IZRAEL–IRAN: nova eskalacija i crvene linije regiona (2026)
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Šta se menja na terenu, šta u diplomatiji  -  i gde su granice
                  kontrole u spirali odgovora.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* 2) NOVA VEST (Iran  -  protesti) */}
            <article>
              <Link
                href="/geopolitika/iran-protesti-2026"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.iran}
                    alt="Geopolitika  -  Iran protesti"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio
                  snimke sukoba
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Sukobi na kampusima i pojačana represija: relevantni izveštaji
                  govore o stotinama ubijenih u prethodnim talasima protesta.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* 3) NOVA VEST (Ukrajina) */}
            <article>
              <Link
                href="/geopolitika/ukrajina-cetiri-godine-rata"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.ukraine}
                    alt="Geopolitika  -  Ukrajina"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Četiri godine rata: šta sada određuje cenu mira
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Dve perspektive, jedan horizont: rat traje, ali se menja logika
                  odluka  -  i pragovi rizika.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>

            {/* 4) STARA VEST (Evropa) */}
            <article className="md:col-span-2">
              <Link
                href="/geopolitika/nova-bezbednosna-arhitektura"
                className="no-underline"
              >
                <div
                  className="border mb-4 overflow-hidden"
                  style={{
                    borderColor: isDark ? "#2a2a2e" : "#eee",
                    backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                  }}
                >
                  <img
                    src={IMAGES.europeMap}
                    alt="Nova bezbednosna arhitektura Evrope"
                    className="w-full h-[220px] object-cover object-center block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h2
                  className="text-[22px] md:text-[26px] font-bold leading-[1.2]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  Nova bezbednosna arhitektura Evrope: da li se rađa kontinent
                  tvrde moći?
                </h2>

                <p
                  className="mt-2 text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  Rat u Ukrajini, energija i strateška autonomija  -  Evropa menja
                  bezbednosni identitet.
                </p>

                <div
                  className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Otvori tekst →
                </div>
              </Link>
            </article>
          </div>

          {/* Back */}
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
