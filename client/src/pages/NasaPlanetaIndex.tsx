/*
 * DESIGN: "Naša planeta" — science magazine section listing
 * Purpose: show science/ecology/culture articles in magazine layout
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

type NasaPlanetaArticle = {
  href: string;
  img: string;
  alt: string;
  imageCredit?: string;
  title: string;
  description: string;
};

const ARTICLES: NasaPlanetaArticle[] = [
  {
    href: "/nasa-planeta/pol-makartni-sa-rolingstonsima-na-novom-albumu-koji-izlazi-10-jula",
    img: "/news/paul-mccartney-rolling-stones.jpg",
    alt: "Ilustracija Pola Makartnija i Mika Džegera povodom nove saradnje na albumu Foreign Tongues.",
    imageCredit: "Novi Talas AI illustration",
    title:
      "Pol Makartni sa Rolingstonsima na novom albumu koji izlazi 10. jula",
    description:
      "Više od šest decenija nakon što su Bitlsi i Rolingstonsi obeležili jednu od najuzbudljivijih epoha u istoriji popularne muzike, Pol Makartni ponovo gostuje na novom studijskom albumu slavnog britanskog benda.",
  },
  {
    href: "/nasa-planeta/jedno-od-sedam-svetskih-cuda-ponovo-otkriva-svoje-tajne-aleksandrijski-svetionik-izrasta-iz-mora",
    img: "/news/alexandria-lighthouse-underwater-ruins.jpg",
    alt: "Conceptual underwater illustration inspired by the archaeological remains of the Lighthouse of Alexandria",
    imageCredit:
      "Konceptualna ilustracija zasnovana na arheološkim istraživanjima / Novi Talas",
    title:
      "Jedno od sedam svetskih čuda ponovo otkriva svoje tajne: Aleksandrijski svetionik izranja iz mora",
    description:
      "Arheolozi su iz Sredozemnog mora izvadili monumentalne kamene blokove nekadašnjeg Aleksandrijskog svetionika, otvarajući put ka njegovoj najpreciznijoj digitalnoj rekonstrukciji do sada.",
  },
  {
    href: "/nasa-planeta/anthropic-upozorava-da-li-razvoj-vestacke-inteligencije-postaje-brzi-od-nase-sposobnosti-da-je-kontrolisemo",
    img: "/news/ai-governance-safeguards.jpg",
    alt: "Minimalist editorial illustration about AI governance and safety",
    imageCredit: "Ilustracija / Novi Talas",
    title:
      "Anthropic upozorava: da li razvoj veštačke inteligencije postaje brži od naše sposobnosti da je kontrolišemo?",
    description:
      "Jedna od vodećih svetskih kompanija za razvoj veštačke inteligencije upozorava da bi napredak najmoćnijih AI sistema uskoro mogao da nadmaši postojeće bezbednosne mehanizme namenjene njihovoj kontroli.",
  },
  {
    href: "/nasa-planeta/hiljade-vespi-preplavile-rim-povodom-80-godina-italijanske-ikone",
    img: "/news/vespa-rome-80th-anniversary.jpg",
    alt: "Watercolor editorial illustration of the 80th anniversary Vespa parade through Rome",
    imageCredit: "AI generated illustration / Novi Talas",
    title: "Hiljade Vespi preplavile Rim povodom 80 godina italijanske ikone",
    description:
      "Više hiljada vlasnika Vespi okupilo se u istorijskom centru Rima kako bi obeležili osam decenija jednog od najprepoznatljivijih simbola italijanskog dizajna, filma i urbanog života.",
  },
  {
    href: "/nasa-planeta/zasto-ljudi-veruju-lazima",
    img: "/news/confirmation-bias-mirror.jpg",
    alt: "Minimalist mirror illustration symbolizing confirmation bias and self-deception",
    imageCredit: "AI generated illustration / Novi Talas",
    title: "Zašto ljudi veruju lažima koje žele da čuju?",
    description:
      "Nova istraživanja i psihološki modeli pokazuju da ljudi ne prihvataju informacije samo na osnovu činjenica, već i na osnovu emocija, identiteta i potrebe da potvrde ono u šta već veruju.",
  },
  {
    href: "/nasa-planeta/homerova-ilijada-pronadjena-u-egipatskoj-mumiji",
    img: "/news/etrurska-bronzana-kutija.jpg",
    alt: "Detalj etrurske bronzane kutije za čuvanje dragocenosti iz 4. veka pre nove ere",
    imageCredit:
      "Detalj etrurske bronzane kutije za čuvanje dragocenosti i ličnih predmeta, 4. vek pre nove ere. Foto: Walters Art Museum / Wikimedia Commons.",
    title:
      "Posle 2.600 godina tišine, otvorena jedna od najbolje očuvanih etrurskih grobnica",
    description:
      "Pre nego što su Rimljani zavladali Mediteranom, Italijom su dominirali Etrurci. Nova grobnica stara 2.600 godina pruža redak uvid u život civilizacije koja je oblikovala svet iz kojeg je kasnije nastao Rim.",
  },
  {
    href: "/nasa-planeta/sta-kratki-video-snimci-rade-decjem-mozgu",
    img: "/news/nerve-lab-deca-ekrani-mozak.jpg",
    alt: "Dete osvetljeno ekranom telefona, sa apstraktnim prikazom mozga i digitalnih signala",
    imageCredit: "Ilustracija: Novi Talas",
    title:
      "Šta kratki video-snimci rade dečjem mozgu? Britanci pokrenuli laboratoriju da to konačno izmere",
    description:
      "Britanski Nerve Lab koristi AI, nosivo skeniranje mozga i analizu medijskog sadržaja kako bi ispitao kako tempo, boje, zvuk i kratki video-formati utiču na dečju pažnju, razumevanje i emocionalni odgovor.",
  },
  {
    href: "/nasa-planeta/zasto-ljudi-kada-lutaju-cesto-skrecu-ulevo",
    img: "/news/human-walking-left.jpg",
    alt: "Ljudi koji hodaju kroz otvoren prostor, sa putanjama koje se blago uvijaju ulevo",
    imageCredit: "Ilustracija: Novi Talas",
    title: "Zašto ljudi, kada lutaju, često skreću ulevo?",
    description:
      "Kada ljudi izgube spoljne orijentire i pokušaju da hodaju nasumično, njihovo kretanje često se ne razvija kao prava linija, već kao blagi luk, neretko ulevo.",
  },
  {
    href: "/nasa-planeta/nasa-predstavila-posadu-artemis-iii",
    img: "/news/artemis-nasa-3.jpg",
    alt: "NASA Artemis III, posada misije koja treba da vrati ljude na Mesec",
    imageCredit: "Foto: NASA / Artemis III",
    title: "NASA predstavila posadu misije Artemis III",
    description:
      "Povratak ljudi na Mesec ulazi u novu fazu, NASA je zvanično objavila posadu prve misije koja bi trebalo da vrati astronaute na površinu Meseca posle više od pola veka.",
  },
  {
    href: "/nasa-planeta/prvi-korak-ka-svetu-bez-naslednih-bolesti",
    img: "/news/embryo-edit.jpg",
    alt: "Ilustracija",
    imageCredit: "Ilustracija",
    title: "Prvi korak ka svetu bez naslednih bolesti?",
    description:
      "Naučnici su po prvi put precizno izmenili gene u ljudskim embrionima, otvarajući mogućnost lečenja naslednih bolesti, ali i novu raspravu o granicama ljudskog mešanja u sopstvenu evoluciju.",
  },
  {
    href: "/nasa-planeta/nvidia-ulazi-u-globalnu-trku-za-humanoidne-robote",
    img: "/news/ai-humnoid.jpg",
    alt: "Ilustracija humanoidnih robota i razvoja veštačke inteligencije",
    imageCredit: "Ilustracija",
    title: "Nvidia ulazi u globalnu trku za humanoidne robote",
    description:
      "Američki tehnološki gigant najavio je saradnju sa proizvođačima humanoidnih robota iz Sjedinjenih Država i Evrope, dok Kina ubrzano razvija sopstvene sisteme.",
  },
  {
    href: "/nasa-planeta/venecijansko-bijenale-ziri-ostavka-umetnost-granice",
    img: "/news/venice-biennale-arsenale-2024.jpg",
    alt: "Izložbeni prostor Arsenala tokom 60. Venecijanskog bijenala 2024.",
    imageCredit: "Foto: Jennifer 8. Lee / Wikimedia Commons, CC BY-SA 4.0",
    title: "Može li se zabraniti umetnost zbog države iz koje dolazi?",
    description:
      "Ostavka žirija Venecijanskog bijenala otvorila je pitanje koje prevazilazi jednu izložbu: da li umetnost treba da ostane prostor bez granica, ili mora da odgovori na ratove iz sveta oko sebe.",
  },
  {
    href: "/nasa-planeta/umetnost-koja-dise-teamlab-tokio",
    img: "/news/teamlab1.jpg",
    alt: "Interaktivna instalacija izložbe teamLab Planets u Tokiju",
    imageCredit: "Foto: Unsplash",
    title:
      "Umetnost koja diše: izložba u Tokiju koja briše granicu između čoveka i prirode",
    description:
      "U Tokiju, u četvrti Tojosu, izložba teamLab Planets menja način na koji posmatramo umetnost, prirodu i odnos čoveka prema prostoru.",
  },
  {
    href: "/nasa-planeta/spilberg-upozorava-holivud-publika-trazi-originalne-filmove",
    img: "/news/spilberg.jpg",
    alt: "Stiven Spilberg na događaju CinemaCon",
    title: "Spilberg upozorava Holivud: publika traži originalne filmove",
    description:
      "Stiven Spilberg poručio je na CinemaConu da Holivud mora da preispita oslanjanje na franšize i nastavke, jer publika sve više traži originalne priče.",
  },
  {
    href: "/nasa-planeta/nasa-anounce",
    img: "/news/nasa-anounce.jpg",
    alt: "Ilustracija NASA misija ka Mesecu i plana trajne baze",
    imageCredit: "Ilustracija",
    title: "NASA najavila nove misije ka Mesecu i plan trajne baze",
    description:
      "Američka svemirska agencija predstavila je detaljan plan izgradnje trajne baze na Mesecu, uz seriju novih posadnih misija koje bi postepeno izgradile lunarnu infrastrukturu.",
  },
  {
    href: "/nasa-planeta/trump-otvorio-ufo-arhive",
    img: "/news/ufo-files.jpg",
    alt: "Ilustracija UFO arhiva Trumpove administracije",
    imageCredit: "Ilustracija: Novi Talas",
    title: "Trump otvorio UFO arhive: više pitanja nego odgovora",
    description:
      "Objavljena je prva grupa američkih dokumenata o UFO i UAP pojavama. Arhive donose snimke, fotografije i stare izveštaje, ali ne i dokaz o vanzemaljskoj tehnologiji.",
  },
  {
    href: "/nasa-planeta/na-marsu-otkrivene-molekule-povezane-sa-poreklom-zivota",
    img: "/news/mars-life.jpg",
    alt: "Površina Marsa sa tragovima organskih jedinjenja",
    imageCredit: "NOVI TALAS / ilustracija",
    title: "Na Marsu otkrivene molekule povezane sa poreklom života",
    description:
      "Rover Curiosity identifikovao je kompleksne organske molekule koji otvaraju nova pitanja o mogućem nastanku života na Crvenoj planeti.",
  },
  {
    href: "/nasa-planeta/artemis-ii-splashdown",
    img: "/news/artemis-landing.jpg",
    alt: "Letelica Orion tokom povratka na Zemlju — misija Artemis II",
    title:
      "Artemis II uspešno okončan: Orion se vratio na Zemlju nakon istorijskog leta oko Meseca",
    description:
      "Kapsula sa četvoročlanom posadom bezbedno je sletela u Tihi okean, završivši prvu ljudsku misiju ka Mesecu posle više od 50 godina.",
  },
  {
    href: "/nasa-planeta/artemis-ii-fotografije-dubokog-svemira",
    img: "/news/orion-earth-view.jpg",
    alt: "Pogled na Zemlju iz letelice Orion tokom misije Artemis II",
    title:
      "Fotografije iz dubokog svemira: Artemis II beleži prizore sa lunarnog preleta",
    description:
      "NASA objavila nove snimke Zemlje i pomračenja iz perspektive misije Artemis II.",
  },
  {
    href: "/nasa-planeta/artemis-ii-rekord-udaljenosti",
    img: "/news/moon-nasa.jpg",
    alt: "Letelica Orion u dubokom svemiru tokom misije Artemis II",
    title:
      "Čovečanstvo najdalje od Zemlje u istoriji: Artemis II nadmašio rekord Apola 13",
    description:
      "Posada misije Artemis II dostigla je najveću udaljenost od Zemlje ikada zabeleženu za ljudsku posadu, premašivši rekord misije Apollo 13.",
  },
  {
    href: "/nasa-planeta/artemis-ii-uzivo-prenos-rekord",
    img: "/news/artemis-view1.jpg",
    alt: "NASA Artemis II — uživo prenos iz dubokog svemira",
    title:
      "Uživo: Artemis II obara istorijski rekord — prenos iz dubokog svemira",
    description:
      "NASA uživo prenosi misiju Artemis II u trenutku kada posada dostiže najveću udaljenost od Zemlje u istoriji čovečanstva.",
  },
  {
    href: "/nasa-planeta/artemis-ii-orion-polovina-puta-do-meseca",
    img: "/news/artemis-view2.jpg",
    alt: "Orion letelica na putu ka Mesecu — misija Artemis II",
    title:
      "Orion više od polovine puta do Meseca: misija Artemis II u dubokom svemiru",
    description:
      "Orion je više od polovine puta do Meseca. Misija Artemis II ulazi u fazu dubokog svemirskog krstarenja.",
  },
  {
    href: "/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina",
    img: "/news/artemis-eclipse.jpg",
    alt: "NASA Artemis II — prva ljudska misija ka Mesecu posle 50 godina",
    title:
      "BREAKING: NASA ponovo šalje ljude ka Mesecu posle više od 50 godina",
    description:
      "Artemis II označava povratak čovečanstva u duboki svemir — prvi put od 1972. godine.",
  },
  {
    href: "/nasa-planeta/moon-ring",
    img: "/news/moon-ring.jpg",
    alt: "Solarni prsten oko Meseca — japanski koncept svemirske energije",
    title: "Plan iz Japana: solarni prsten oko Meseca za energiju Zemlje",
    description:
      "Japanski istraživački tim predstavio je koncept izgradnje ogromnog solarnog sistema na Mesecu, koji bi mogao neprekidno da proizvodi energiju i šalje je na Zemlju.",
  },
  {
    href: "/nasa-planeta/psihologija-dosada",
    img: "/news/psihologija-dosada.jpg",
    alt: "Čovek koji sedi u tišini i gleda u daljinu — simbol mentalne odmorenosti i dosade kao produktivnog stanja",
    title:
      "Otkriće psihologije: zašto je najbolja stvar koju možete da uradite da ne radite ništa",
    description:
      "Savremena psihologija otkriva da vaš mozak najbolje radi kada ga ostavite na miru — i da je dosada možda najproduktivnija stvar koju ćete danas uraditi.",
  },
  {
    href: "/nasa-planeta/najtoplija-decenija-planeta-un",
    img: "/news/world-heat.jpg",
    alt: "Zemlja sa tankom crvenom linijom koja simbolizuje rast globalne temperature",
    title:
      "UN potvrdio: planeta iza sebe ima najtopliju deceniju u istoriji merenja",
    description:
      "Svetska meteorološka organizacija UN potvrdila je da je period od 2015. do 2025. bio najtopliji otkad se vodi moderna evidencija o temperaturama.",
  },
  {
    href: "/nasa-planeta/ai-superaplikacija",
    img: "/news/ai-superapp.jpg",
    alt: "Minimalistički prikaz veštačke inteligencije kao centralnog sistema koji povezuje digitalne funkcije računara",
    title:
      "OpenAI razvija „superaplikaciju“ koja objedinjuje ChatGPT, Codex i browser",
    description:
      "OpenAI planira razvoj jedinstvene desktop aplikacije koja bi objedinjavala ChatGPT, programerski alat Codex i AI browser u jedan integrisani sistem.",
  },
  {
    href: "/nasa-planeta/mars-reka",
    img: "/news/mars-reka.jpg",
    alt: "Površina Marsa sa tragovima drevnog rečnog korita",
    title:
      "Na Marsu otkriveni tragovi drevne reke: nova faza u potrazi za životom",
    description:
      "NASA-in rover otkrio je nove dokaze koji ukazuju da je na površini Marsa nekada postojala reka, što dodatno menja dosadašnje razumevanje istorije Crvene planete.",
  },
  {
    href: "/nasa-planeta/ko-je-dobio-oskara",
    img: "/news/oscar-world.jpg",
    alt: "Ceremonija dodele Oskara — 98. dodela nagrada Američke filmske akademije",
    title: "Ko je dobio Oskara?",
    description:
      "Dok svet tone u ratove, razaranja i očigledan pad civilizacijskih normi, ceremonija Oskara nastavlja da blista, gotovo ravnodušna prema vremenu koje izgleda poraženo.",
  },
  {
    href: "/nasa-planeta/kina-mozgani-implantat",
    img: "/news/china-brain.jpg",
    alt: "Kina — prvi moždani implantat za komercijalnu upotrebu",
    title: "Kina odobrila prvi moždani implantat za komercijalnu upotrebu",
    description:
      "Kineske vlasti odobrile su prvi moždani implantat namenjen komercijalnoj upotrebi, čime je napravljen značajan korak u razvoju brain-computer interface tehnologije.",
  },
  {
    href: "/nasa-planeta/kubrick",
    img: "/kubrick.jpg",
    alt: "Stenli Kjubrik — reditelj koji je promenio film",
    title: "Stenli Kjubrik i tajna filma koji ne stari",
    description:
      "Dok se svet ponovo okreće ceremoniji Oskara, jedan reditelj i dalje stoji izvan logike nagrada i podseća nas da film može biti umetnost mišljenja.",
  },
  {
    href: "/nasa-planeta/ai-vest-svest",
    img: "/ai-supercomputer-data-center.jpg",
    alt: "AI supercomputer data center",
    title: "Da li je veštačka inteligencija već svesna?",
    description:
      "Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti.",
  },
  {
    href: "/nasa-planeta/naucnici-poceli-da-usmeravaju-snove",
    img: "/snovi-usmeravanje-snova.jpg",
    alt: "Naučnici usmeravaju snove",
    title:
      "Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije",
    description:
      "Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći mozak da tokom sna kreativnije rešava probleme.",
  },
];

export default function NasaPlanetaIndex() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [hero, ...gridArticles] = ARTICLES;

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
          <div className="mb-10">
            <span className="kicker">Naša planeta</span>

            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              NAUKA PRIRODA KULTURA
            </p>

            <Link
              href="/nasa-planeta/artemis-live"
              className="mt-4 inline-block text-[12px] font-semibold uppercase tracking-[0.08em] no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              Artemis live arhiva →
            </Link>
          </div>

          <article className="mb-14">
            <Link href={hero.href} className="no-underline block group">
              <div className="overflow-hidden mb-3">
                <img
                  src={hero.img}
                  alt={hero.alt}
                  className="w-full h-[300px] md:h-[480px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.02]"
                  decoding="async"
                />
              </div>
              <p className="photo-credit">
                {hero.imageCredit || "Foto: Arhiva"}
              </p>

              <div className="max-w-[760px]">
                <div
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Istaknuta priča
                </div>

                <h2
                  className="text-[26px] md:text-[40px] font-bold leading-[1.15]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  {hero.title}
                </h2>

                <p
                  className="mt-3 text-[17px] md:text-[19px] leading-[1.65]"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: isDark ? "#9a978f" : "#555",
                  }}
                >
                  {hero.description}
                </p>

                <div
                  className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#d9bf7a" : "#8B0000",
                  }}
                >
                  Čitaj dalje →
                </div>
              </div>
            </Link>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {gridArticles.map(article => (
              <article key={article.href}>
                <Link href={article.href} className="no-underline block group">
                  <div className="overflow-hidden mb-3">
                    <img
                      src={article.img}
                      alt={article.alt}
                      className="w-full h-[240px] object-cover object-center block transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h2
                    className="text-[20px] md:text-[22px] font-bold leading-[1.2]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: isDark ? "#e0ddd5" : "#111",
                    }}
                  >
                    {article.title}
                  </h2>
                </Link>
              </article>
            ))}
          </div>

          <div className="mb-12">
            <hr
              style={{
                borderColor: isDark ? "#2a2c33" : "#ddd",
                borderTopWidth: "1px",
                marginBottom: "1.25rem",
              }}
            />
            <h3
              className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#9a978f" : "#888",
              }}
            >
              NAJNOVIJE PRIČE
            </h3>

            <ul className="space-y-5">
              {ARTICLES.map(article => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="no-underline flex items-start gap-4 group"
                  >
                    <div
                      className="flex-shrink-0 overflow-hidden"
                      style={{ width: 80, height: 60 }}
                    >
                      <img
                        src={article.img}
                        alt={article.alt}
                        className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span
                      className="text-[16px] leading-[1.4] font-semibold"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: isDark ? "#e0ddd5" : "#111",
                      }}
                    >
                      {article.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
