/*
 * DESIGN: "Diplomatska Klasika" — Geopolitika article page
 * Article: Nova bezbednosna arhitektura Evrope
 * Image: Europe map (user uploaded)
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { useSEO } from "@/hooks/useSEO";

const IMAGES = {
  europeMap:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/IUipaYMrvJEhhnzZ.png",
};

export default function GeopolitikaArticle() {
  useSEO("/geopolitika/nova-bezbednosna-arhitektura");
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
        <article className="max-w-[760px] mx-auto px-5">
          {/* Kicker */}
          <span className="kicker">Geopolitika</span>

          {/* Headline */}
          <h1
            className="mt-3 mb-4 text-[34px] md:text-[46px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?
          </h1>

          {/* Byline */}
          <div
            className="flex items-center gap-2 mb-8 text-[13px]"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#7a7872" : "#888",
            }}
          >
            <span
              className="font-semibold uppercase tracking-[0.05em]"
              style={{ color: isDark ? "#9a978f" : "#555" }}
            >
              Novi Talas
            </span>
            <span>&bull;</span>
            <span>Februar 2026</span>
          </div>

          {/* Feature image */}
          <figure className="mb-10">
            <div
              className="border"
              style={{
                borderColor: isDark ? "#2a2a2e" : "#eee",
                backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
              }}
            >
              <img
                src={IMAGES.europeMap}
                alt="Mapa Evrope — nova bezbednosna arhitektura"
                className="w-full h-[300px] md:h-[420px] object-cover object-center block"
              />
            </div>
          </figure>

          {/* Article body */}
          <div
            className="text-[18px] md:text-[19px] leading-[1.75]"
            style={{
              fontFamily: "'Crimson Pro', serif",
              color: isDark ? "#c5c2ba" : "#222",
            }}
          >
            <p className="mb-6">
              Evropa se nalazi u trenutku strateške transformacije. Proces koji je započeo
              kao reakcija na rat u Ukrajini prerasta u dubinsku rekonstrukciju bezbednosnog
              identiteta kontinenta. Ono što je u početku delovalo kao privremena mobilizacija
              sada poprima obrise trajnog poretka.
            </p>

            <p className="mb-6">
              Rat na istoku Evrope više nije samo regionalni sukob. Postao je pokretač promene
              u načinu na koji evropske države razumeju sopstvenu ulogu u svetu. Uz energetsku
              krizu i postepeno preusmeravanje američke pažnje ka Indo-Pacifiku, sve je jasnije
              da bezbednost kontinenta više ne može počivati isključivo na transatlantskom osloncu.
            </p>

            <p className="mb-6">
              U tom kontekstu oblikuje se nova paradigma. Evropa se sve otvorenije definiše
              kao akter tvrde moći.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Preispitivanje uloge NATO-a i jačanje nacionalnih kapaciteta
            </h2>

            <p className="mb-6">
              Rat u Ukrajini razotkrio je strukturne slabosti evropskih odbrambenih sistema.
              Države istočnog krila NATO-a ubrzano povećavaju budžete za odbranu, modernizuju opremu
              i jačaju domaću vojnu industriju. Vojne vežbe postaju učestalije, a infrastruktura se
              prilagođava dugoročnoj strategiji odvraćanja.
            </p>

            <p className="mb-6">
              Ovaj proces ne znači udaljavanje od NATO-a, već drugačije raspoređivanje odgovornosti
              unutar saveza. Težište se pomera sa pasivne zavisnosti ka aktivnoj ulozi evropskih članica.
              Kolektivna bezbednost dobija novu dimenziju, onu koja podrazumeva nacionalnu spremnost i veći
              stepen strateške samostalnosti.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Evropska unija kao bezbednosni činilac
            </h2>

            <p className="mb-6">
              Evropska unija, dugo posmatrana prvenstveno kao ekonomska sila, sve jasnije oblikuje
              bezbednosne ambicije. Mehanizmi zajedničke odbrane, koordinacija obaveštajnih aktivnosti
              i definisanje dugoročnih prioriteta postaju sastavni deo evropske politike.
            </p>

            <p className="mb-6">
              To više nije isključivo politika sankcija i diplomatskih poruka. Reč je o pokušaju da se
              definiše sopstvena geopolitička pozicija u odnosu na Sjedinjene Američke Države, Rusiju i Kinu.
              Evropski projekat time dobija izraženiju dimenziju moći.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Energetika kao temelj sigurnosti
            </h2>

            <p className="mb-6">
              Energetska kriza pokazala je koliko je infrastruktura snabdevanja povezana sa nacionalnom
              sigurnošću. Gasovodi, terminali za tečni prirodni gas, skladišni kapaciteti i diversifikacija izvora
              više nisu samo tržišne teme. Oni postaju deo bezbednosnog sistema.
            </p>

            <p className="mb-6">
              U centralnoj Evropi energetska politika dobija karakter strateškog planiranja. Stabilno i politički
              nezavisno snabdevanje energijom postaje preduslov dugoročne suverenosti.
            </p>

            <h2
              className="mt-10 mb-4 text-[24px] md:text-[28px] font-bold leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Balkan između linija nove arhitekture
            </h2>

            <p className="mb-6">
              Za zemlje Balkana ova transformacija ima neposredne posledice. Region više nije geopolitička periferija,
              već prostor preseka interesa. Energetski koridori, infrastrukturne investicije i bezbednosna partnerstva
              određuju budući položaj država u odnosu na evropske integracije i globalne sile.
            </p>

            <p className="mb-6">
              Nova evropska bezbednosna paradigma podrazumeva i redefinisanje odnosa prema regionu koji je istorijski bio
              prostor nadmetanja uticaja.
            </p>

            <p className="mb-6">
              Evropa je decenijama gradila identitet zasnovan na normama, pravnim mehanizmima i konsenzusu. Današnji procesi
              ne znače odustajanje od tih principa, već njihovo dopunjavanje instrumentima tvrde moći.
            </p>

            <p className="mb-6">
              Kontinent koji je dugo insistirao na mekoj diplomatiji sada oblikuje strukturu odvraćanja i strateške autonomije.
              To nije nagli zaokret, već postepeno prilagođavanje novim odnosima snaga u svetu u kojem stabilnost više nije
              podrazumevana, već se iznova uspostavlja.
            </p>
          </div>

          {/* Back link */}
          <hr className="editorial-divider my-10" />
          <Link
            href="/geopolitika"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            &larr; Nazad na rubriku Geopolitika
          </Link>
        </article>
      </main>

      <Footer />
    </div>
  );
}
