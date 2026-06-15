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
              <p className="photo-credit">{hero.imageCredit || "Foto: Arhiva"}</p>

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
