/*
 * Ormuski moreuz - GEOPOLITIKA (single article)
 * Layout: same as Home / GeopolitikaIndex (Diplomatska Klasika)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

export default function Ormuz() {
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
          <span className="kicker">Geopolitika</span>

          <h1
            className="mt-3 text-[30px] md:text-[44px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom
          </h1>

          <p
           className="mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.18em]"
  style={{
    fontFamily: "'Source Sans 3', sans-serif",
    color: isDark ? "#7f7a72" : "#888",
  }}
>
  2. MART 2026.
          </p>

          <div
            className="mt-8 border overflow-hidden"
            style={{
              borderColor: isDark ? "#2a2a2e" : "#eee",
              backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
            }}
          >
            <img
              src="/ormuz.jpg"
              alt="Ormuski moreuz"
              className="w-full h-[260px] md:h-[420px] object-cover object-center block"
            />
          </div>

          <p
            className="mt-8 text-[18px] md:text-[20px] leading-[1.75]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#cfcac0" : "#222",
            }}
          >
            Ormuski moreuz, strateški pomorski prolaz kroz koji prolazi približno
            petina svetske trgovine naftom, praktično je zatvoren usled iranskih
            vojnih pretnji i bezbednosnih poteza u regionu, što već remeti globalni
            transport energenata i podiže cenu nafte na svetskim tržištima.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Reč je o uskom pomorskom koridoru koji povezuje Persijski zaliv sa
            Omanskim zalivom i otvorenim morem, a čija stabilnost direktno utiče
            na snabdevanje energentima iz Saudijske Arabije, Ujedinjenih Arapskih
            Emirata, Katara, Iraka i Kuvajta. Svako ozbiljnije ometanje plovidbe u
            ovom prostoru brzo se preliva na globalne lance snabdevanja, troškove
            transporta i cene goriva.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Tržišta energenata reagovala su gotovo trenutno: rast premija rizika,
            skok osiguranja za brodove i pojačana neizvesnost oko isporuka doprinose
            pritisku na cene. Istovremeno, brodarske rute se preusmeravaju ili
            usporavaju, dok deo kompanija privremeno odlaže prolazak kroz rizičnu
            zonu, očekujući jasniju sliku o bezbednosnim uslovima.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Analitičari upozoravaju da bi produžena blokada mogla izazvati lančanu
            reakciju: dodatni rast cena goriva, inflatorne pritiske u Evropi i Aziji,
            kao i povećanu nestabilnost na finansijskim tržištima. U trenutku kada je
            svet već opterećen bezbednosnim krizama, Ormuski moreuz ponovo postaje
            tačka u kojoj se geopolitički rizik direktno pretvara u ekonomski trošak.
          </p>

          <hr
            className="my-10"
            style={{ borderColor: isDark ? "#2a2a2e" : "#eee" }}
          />

          <h2
            className="text-[20px] md:text-[24px] font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Komentar
          </h2>

          <p
            className="mt-4 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Zatvaranje Ormuskog moreuza nije samo regionalni incident, već strateški
            pritisak na međunarodni ekonomski sistem: time se ne gađaju isključivo
            neposredni protivnici, već energetski tokovi od kojih zavise Evropa i Azija.
            Svaki dan zastoja u ovom prolazu povećava cenu barela, podiže troškove
            transporta i ubrzava inflatorne pritiske širom sveta.
          </p>

          <p
            className="mt-5 text-[17px] md:text-[18px] leading-[1.8]"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#b7b2aa" : "#333",
            }}
          >
            Ukoliko kriza potraje, velike sile bi mogle biti primorane da pojačaju
            vojno prisustvo radi obezbeđivanja pomorskih ruta, što bi označilo novu
            fazu internacionalizacije sukoba. Ormuski moreuz tako postaje ne samo tačka
            energetskog tranzita, već potencijalna tačka globalne konfrontacije — mesto
            na kome se granice između bezbednosti i ekonomije brišu u realnom vremenu.
          </p>

          <div className="mt-12">
            <a
              href="/geopolitika"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              ← Nazad na Geopolitiku
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
