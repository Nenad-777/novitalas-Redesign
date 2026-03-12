/*
 * DESIGN: "Diplomatska Klasika" — Srbija / Marš za pravosuđe (full article)
 * Safe JSX (no build break), includes date under title
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

const IMAGES = {
  hero: "/analiza-nedelje-mars.jpg", // već ti je u /client/public
};

export default function SrbijaMarsZaPravosudje() {
  useSEO("/srbija/mars-za-pravosudje");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1">
        <article className="py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-5">
            {/* Kicker */}
            <div
              className="text-[11px] font-bold tracking-[0.14em] uppercase"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              Srbija
            </div>

            {/* Title */}
            <h1
              className="mt-3 text-[30px] md:text-[42px] leading-[1.12] font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#f3efe7" : "#111",
              }}
            >
              Marš za pravosuđe: kada institucije postanu centralno političko pitanje
            </h1>

            {/* Meta: rubric + format + date */}
            <div
              className="mt-3 text-[14px]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#9a978f" : "#666",
              }}
            >
              <span>Analiza nedelje</span>
              <span>&nbsp;&bull;&nbsp;</span>
              <span>21. februar 2026.</span>
            </div>

            {/* Podeli vest */}
            <ShareButton />

            <hr
              className="my-6"
              style={{ borderColor: isDark ? "#2a2a2e" : "#e5e5e5" }}
            />

            {/* Hero image */}
            <div
              className="border overflow-hidden"
              style={{
                borderColor: isDark ? "#2a2a2e" : "#eee",
                backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
              }}
            >
              <img
                src={IMAGES.hero}
                alt="Ilustracija: Marš za pravosuđe"
                className="w-full h-auto block"
              />
            </div>

            {/* Body */}
            <div
              className="mt-9 text-[18px] leading-[1.75] space-y-6"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              <p>
                U Beogradu je održan „Marš za pravosuđe“, skup na kojem su sudije,
                tužioci, advokati i građani izrazili zabrinutost zbog nedavno
                usvojenih zakona koji, prema oceni organizatora, mogu uticati na
                samostalnost tužilaštva i nezavisnost sudske vlasti. Protest je
                protekao mirno, ali je poruka bila jasna: pitanje pravosuđa postaje
                jedno od ključnih političkih pitanja u Srbiji.
              </p>

              <p>
                U demokratskim sistemima pravosuđe nije samo tehnički aparat za
                primenu zakona. Ono je korektiv vlasti i garant ravnoteže između
                političke moći i ustavnih ograničenja. Kada se u javnosti otvori
                rasprava o njegovoj nezavisnosti, to znači da je u fokusu sama
                struktura države.
              </p>

              <h2
                className="pt-2 text-[24px] md:text-[30px] font-bold leading-[1.15]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isDark ? "#f3efe7" : "#111",
                }}
              >
                Italija: institucionalni spor unutar evropske demokratije
              </h2>

              <p>
                Slična rasprava vodi se i u Italiji. Predložene reforme predviđaju
                razdvajanje karijera sudija i tužilaca i drugačiju organizaciju
                pravosudnog sistema. Vlada reformu obrazlaže potrebom za efikasnijim
                radom sudova, dok deo pravne struke upozorava da bi promene mogle da
                oslabe institucionalnu autonomiju tužilaštva.
              </p>

              <p>
                Italija, kao članica Evropske unije sa dugom pravnom tradicijom,
                pokazuje da pitanje odnosa između izvršne i sudske vlasti nije
                specifičnost tranzicionih društava. Reč je o širem evropskom procesu
                u kojem se preispituju modeli institucionalne ravnoteže.
              </p>

              <h2
                className="pt-2 text-[24px] md:text-[30px] font-bold leading-[1.15]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isDark ? "#f3efe7" : "#111",
                }}
              >
                Primer Sjedinjenih Američkih Država
              </h2>

              <p>
                U istom periodu, Vrhovni sud Sjedinjenih Američkih Država poništio je
                globalne carine koje je administracija Donalda Trampa uvela pozivajući
                se na zakon o vanrednim ekonomskim ovlašćenjima. Sud je presudio da
                predsednik nema pravo da samostalno širi nadležnosti u oblasti carinske
                politike bez jasnog mandata Kongresa.
              </p>

              <p>
                Ta odluka predstavlja primer funkcionisanja sistema uzajamne kontrole.
                Sudska vlast je, bez obzira na politički kontekst, delovala u okviru
                ustavnih nadležnosti i ograničila izvršnu vlast. Time je potvrđeno da
                institucionalna snaga ne zavisi od političke popularnosti, već od
                dosledne primene ustavnih principa.
              </p>

              <h2
                className="pt-2 text-[24px] md:text-[30px] font-bold leading-[1.15]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isDark ? "#f3efe7" : "#111",
                }}
              >
                Zajednički imenilac
              </h2>

              <p>
                Srbija, Italija i Sjedinjene Države nalaze se u različitim političkim i
                istorijskim okolnostima, ali pitanje je slično: koliki je prostor izvršne
                vlasti i gde se završava politička diskrecija, a počinje ustavno ograničenje.
              </p>

              <p>
                Nezavisnost pravosuđa ne znači suprotstavljanje državi. Ona znači postojanje
                mehanizma koji sprečava koncentraciju moći. U trenutku kada sudovi postanu
                predmet političke debate, društvo zapravo raspravlja o sopstvenom ustavnom identitetu.
              </p>

              <p>
                Marš za pravosuđe u Beogradu zato nije samo protest protiv jednog zakona. On je izraz
                šireg pitanja koje se postavlja širom Evrope i sveta: da li su institucije dovoljno
                snažne da očuvaju ravnotežu vlasti.
              </p>

              <p>
                U savremenim demokratijama, odgovor na to pitanje određuje kvalitet političkog sistema.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
