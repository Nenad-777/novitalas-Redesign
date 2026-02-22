import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const IMAGES = {
  hero: "/mars-za-pravosudje-fa.png", // stavi ovde tvoju novu FA grafiku u public/
};

export default function SrbijaMarsZaPravosudje() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1">
        <article className="mx-auto max-w-[860px] px-5 md:px-8 pt-10 md:pt-14 pb-16">
          {/* Kicker */}
          <div className="text-[13px] tracking-[0.18em] uppercase font-semibold"
            style={{ color: isDark ? "#b07a7a" : "#7a2323" }}
          >
            SRBIJA
          </div>

          {/* Title */}
          <h1
            className="mt-3 text-[30px] md:text-[42px] leading-[1.12] font-bold"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: isDark ? "#f3efe7" : "#111",
            }}
          >
            Marš za pravosuđe: kada institucije postanu centralno političko pitanje
          </h1>

          {/* Meta */}
          <div
            className="mt-4 text-[15px]"
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              color: isDark ? "#9aa0a6" : "#666",
            }}
          >
            Analiza nedelje
          </div>

          {/* Hero image */}
          <div className="mt-8 overflow-hidden border"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)" }}
          >
            <img
            src="/analiza-nedelje-mars.jpg"
              alt="Ilustracija: Marš za pravosuđe"
              className="w-full h-auto block"
            />
          </div>

          {/* Body */}
          <div
            className="mt-9 text-[18px] leading-[1.75] space-y-6"
            style={{
              fontFamily: '"Crimson Pro", serif',
              color: isDark ? "#e7e2d9" : "#1b1b1b",
            }}
          >
            <p>
              U Beogradu je održan „Marš za pravosuđe“, skup na kojem su sudije, tužioci, advokati i građani izrazili zabrinutost zbog nedavno usvojenih zakona koji, prema oceni organizatora, mogu uticati na samostalnost tužilaštva i nezavisnost sudske vlasti. Protest je protekao mirno, ali je poruka bila jasna: pitanje pravosuđa postaje jedno od ključnih političkih pitanja u Srbiji.
            </p>

            <p>
              U demokratskim sistemima pravosuđe nije samo tehnički aparat za primenu zakona. Ono je korektiv vlasti i garant ravnoteže između političke moći i ustavnih ograničenja. Kada se u javnosti otvori rasprava o njegovoj nezavisnosti, to znači da je u fokusu sama struktura države.
            </p>

            <h2
              className="text-[22px] md:text-[26px] font-bold pt-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Italija: institucionalni spor unutar evropske demokratije
            </h2>

            <p>
              Slična rasprava vodi se i u Italiji. Predložene reforme predviđaju razdvajanje karijera sudija i tužilaca i drugačiju organizaciju pravosudnog sistema. Vlada reformu obrazlaže potrebom za efikasnijim radom sudova, dok deo pravne struke upozorava da bi promene mogle da oslabe institucionalnu autonomiju tužilaštva.
            </p>

            <p>
              Italija, kao članica Evropske unije sa dugom pravnom tradicijom, pokazuje da pitanje odnosa između izvršne i sudske vlasti nije specifičnost tranzicionih društava. Reč je o širem evropskom procesu u kojem se preispituju modeli institucionalne ravnoteže.
            </p>

            <h2
              className="text-[22px] md:text-[26px] font-bold pt-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Primer Sjedinjenih Američkih Država
            </h2>

            <p>
              U istom periodu, Vrhovni sud Sjedinjenih Američkih Država poništio je globalne carine koje je administracija Donalda Trampa uvela pozivajući se na zakon o vanrednim ekonomskim ovlašćenjima. Sud je presudio da predsednik nema pravo da samostalno širi nadležnosti u oblasti carinske politike bez jasnog mandata Kongresa.
            </p>

            <p>
              Ta odluka predstavlja primer funkcionisanja sistema uzajamne kontrole. Sudska vlast je, bez obzira na politički kontekst, delovala u okviru ustavnih nadležnosti i ograničila izvršnu vlast. Time je potvrđeno da institucionalna snaga ne zavisi od političke popularnosti, već od dosledne primene ustavnih principa.
            </p>

            <h2
              className="text-[22px] md:text-[26px] font-bold pt-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Zajednički imenilac
            </h2>

            <p>
              Srbija, Italija i Sjedinjene Države nalaze se u različitim političkim i istorijskim okolnostima, ali pitanje je slično: koliki je prostor izvršne vlasti i gde se završava politička diskrecija, a počinje ustavno ograničenje.
            </p>

            <p>
              Nezavisnost pravosuđa ne znači suprotstavljanje državi. Ona znači postojanje mehanizma koji sprečava koncentraciju moći. U trenutku kada sudovi postanu predmet političke debate, društvo zapravo raspravlja o sopstvenom ustavnom identitetu.
            </p>

            <p>
              Marš za pravosuđe u Beogradu zato nije samo protest protiv jednog zakona. On je izraz šireg pitanja koje se postavlja širom Evrope i sveta: da li su institucije dovoljno snažne da očuvaju ravnotežu vlasti.
            </p>

            <p>
              U savremenim demokratijama, odgovor na to pitanje određuje kvalitet političkog sistema.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
