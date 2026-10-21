/**
 * articleMeta.ts
 *
 * Lightweight article metadata registry for articles that use ArticleTemplate.
 * Each entry requires only 4 fields; all OG / Twitter meta tags are auto-derived.
 *
 * When to use this file vs shared/seo.ts:
 *   - NEW articles using ArticleTemplate  → add a minimal entry here.
 *   - Existing articles / custom layouts  → seo.ts entries take priority and
 *     continue to work exactly as before.
 *
 * The full SEO data object is built automatically by buildSEOFromArticleMeta(),
 * which is used by:
 *   1. The SeoMeta client-side component  (for meta tag injection in the browser)
 *   2. scripts/generate-seo-pages.ts      (for static pre-rendered HTML)
 *   3. server/index.ts                    (for server-side injection on every request)
 */

const SITE_BASE = "https://novitalas.org";
const BRAND_SUFFIX = " — Novi Talas";

export interface ArticleStaticMeta {
  path: string;
  title: string;
  seoTitle?: string;
  description: string;
  imageSrc: string;
  datePublished?: string;
  author?: string;
  section?: string;
  keywords?: string;
}

export function buildOgImageUrl(imageSrc: string): string {
  if (imageSrc.startsWith("http")) return imageSrc;
  return `${SITE_BASE}${imageSrc}`;
}

export function buildSEOFromArticleMeta(meta: ArticleStaticMeta) {
  const ogImage = buildOgImageUrl(meta.imageSrc);
  const ogUrl = `${SITE_BASE}${meta.path}`;
  const fullTitle = meta.seoTitle ?? `${meta.title}${BRAND_SUFFIX}`;
  return {
    title: fullTitle,
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    ogUrl,
    ogImage,
    twitterTitle: meta.title,
    twitterDescription: meta.description,
    twitterImage: ogImage,
    datePublished: meta.datePublished,
    author: meta.author,
    section: meta.section,
    keywords: meta.keywords,
  };
}

export const generateSEO = buildSEOFromArticleMeta;

export function buildJsonLd(meta: {
  title: string;
  description: string;
  ogUrl: string;
  ogImage: string;
  datePublished?: string;
  author?: string;
  section?: string;
}) {
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    image: [meta.ogImage],
    publisher: {
      "@type": "Organization",
      name: "Novi Talas",
      url: SITE_BASE,
      logo: { "@type": "ImageObject", url: `${SITE_BASE}/logo.svg` },
    },
    url: meta.ogUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": meta.ogUrl },
  };

  if (meta.author) {
    jsonLd["author"] = [{
      "@type": meta.author === "Novi Talas" ? "Organization" : "Person",
      name: meta.author,
      url: SITE_BASE,
    }];
  }
  if (meta.section) jsonLd["articleSection"] = meta.section;
  if (meta.datePublished) jsonLd["datePublished"] = `${meta.datePublished}T00:00:00+01:00`;
  return jsonLd;
}

export const articleMeta: ArticleStaticMeta[] = [
{
  "path": "/kultura/posle-430-godina-otkrivena-tajna-sekspirovog-autorstva",
  "title": "Posle 430 godina otkrivena tajna Šekspirovog autorstva",
  "description": "Novo istraživanje britanskih univerziteta pokazuje da su Vilijam Šekspir i Kristofer Marlo zajedno napisali istorijsku dramu „Edvard III”. Nalazi donose nove dokaze o saradnji dvojice velikih dramatičara.",
  "imageSrc": "/news/shakespeare-shadow-2026-10-20.png",
  "datePublished": "2026-10-20",
  "author": "Novi Talas",
  "section": "Kultura"
},
{"path":"/srbija/sta-medjunarodni-posmatraci-vec-znaju-o-izborima-u-srbiji","title":"Šta međunarodni posmatrači već znaju o izborima u Srbiji?","description":"Pet dana pred parlamentarne izbore, međunarodne institucije već upozoravaju na ozbiljne probleme u izbornom procesu. Savet Evrope ukazuje na neravnopravne uslove, političke pritiske i rizik da deo dijaspore ostane bez mogućnosti glasanja. Prva zajednička međunarodna ocena očekuje se 26. oktobra.","imageSrc":"/news/medjunarodni-posmatraci-izbori-2026-10-20.jpg","datePublished":"2026-10-20","author":"Novi Talas","section":"Srbija","keywords":"Srbija, izbori, međunarodni posmatrači, Savet Evrope, OEBS, ODIHR, dijaspora, 26. oktobar"},
  { path: "/srbija/ko-ce-pobediti-na-izborima", title: "Ko će pobediti na izborima?", description: "Šta ako Aleksandar Vučić 25. oktobra proglasi pobedu, a njegova vlast se već narednog jutra suoči sa mnogo težim pitanjem: koliko je takva pobeda politički održiva pred međunarodnom javnošću?", imageSrc: "/news/ko-ce-pobediti-na-izborima-2026-10-19.png", datePublished: "2026-10-19", author: "Novi Talas", section: "Srbija", keywords: "Srbija, izbori, 2026, 25. oktobar, posmatrači, legitimitet, izborni proces" },
  {
    path: "/kultura/klara-i-sunce-premijera-film-po-romanu-nobelovca-kazua-isigura",
    title: "Premijera „Klare i Sunca“ po romanu nobelovca Kazua Išigura: Može li robot razumeti čoveka?",
    description: "Džena Ortega tumači humanoidnog robota u filmu Taike Vaititija, snimljenom prema romanu dobitnika Nobelove nagrade za književnost. Priča o ljubavi, usamljenosti i složenom odnosu čoveka i veštačke inteligencije.",
    imageSrc: "https://img.youtube.com/vi/wixzainceAE/maxresdefault.jpg",
    datePublished: "2026-10-18",
    author: "Novi Talas",
    section: "Kultura",
    keywords: "Klara i Sunce, Klara and the Sun, premijera, Kazuo Išiguro, Nobelova nagrada, Džena Ortega, Taika Vaititi, Londonski filmski festival, BFI, veštačka inteligencija, AI, film, robot"
  },
  // Recovered directly from the existing article components, 17 October 2026.
  {"path":"/srbija/srbija-bez-republike-moze-li-se-obnoviti-drzava-posle-cetrnaest-godina-vlasti-sns-a","title":"Srbija bez republike: može li se obnoviti država posle četrnaest godina vlasti SNS-a?","description":"Rasprava o nepoverenju Vladi Srbije samo je povod za mnogo veće pitanje: šta se dogodilo sa zemljom u kojoj Vlada više nije stvarni centar izvršne vlasti, parlament ne kontroliše mesto na kojem se odluke donose, a institucije potvrđuju političku volju oblikovanu izvan njih?","imageSrc":"/news/lost-republic.jpg","datePublished":"2026-07-28","author":"Novi Talas","section":"Srbija"},
  {"path":"/srbija/posle-slavije-vlast-ulazi-u-fazu-politicke-nervoze","title":"Posle Slavije: vlast ulazi u fazu političke nervoze","description":"Studentski pokret pokazuje sve jasnije obrise političke artikulacije, dok vlast istovremeno pokušava da kupi vreme i spreči formiranje studentske izborne liste čiji identitet još nije poznat javnosti.","imageSrc":"/news/slavija-protest.jpg","datePublished":"2026-05-26","author":"Novi Talas","section":"Srbija"},
  {"path":"/srbija/potpuni-slom-vuciceve-medjunarodne-reputacije","title":"Potpuni slom Vučićeve međunarodne reputacije","description":"Zabrana ulaska grupi državljana Srbije u Crnu Goru otvorila je pitanje međunarodnog ugleda Aleksandra Vučića i političkog sistema koji je gradio više od decenije.","imageSrc":"/news/slom-medjunarodni.jpg","datePublished":"2026-06-04","author":"Novi Talas","section":"Srbija"},
  {"path":"/srbija/lokalni-izbori-analiza","title":"Analiza predstojećih izbora: da li je moguć početak promena?","description":"Ovi lokalni izbori u Srbiji deluju mali samo na prvi pogled. U stvarnosti, oni jasno pokazuju kako danas izgleda politička borba u zemlji.","imageSrc":"/news/lokalni-izbori.jpg","datePublished":"2026-03-21","author":"Novi Talas","section":"Srbija"},
  {"path":"/srbija/akademija-novisad","title":"Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora","description":"Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice.","imageSrc":"/news/akademija-novisad.jpg","datePublished":"2026-03-18","author":"Novi Talas","section":"Srbija"},
  {
    path: "/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina",
    title: "Bela kuća ograničila satelitsku vezu Ukrajini: ko je izdao nalog i zašto?",
    description: "Reuters navodi da je nalog za ograničenje vojnog sistema Starshield stigao iz Bele kuće. Identitet nalogodavca nije poznat, a pristup je kasnije obnovljen.",
    imageSrc: "/news/starshield-approved.jpg",
    datePublished: "2026-10-16",
    author: "Novi Talas",
    section: "Obaveštajni izvori",
    keywords: "Bela kuća, White House, Starshield, Starlink, SpaceX, Reuters, Ukrajina, SAD, satelitske komunikacije",
  },

  {"path":"/srbija/izbori-25-oktobra-odihr-biracki-spisak-kontrola-kampanje","title":"Izbori 25. oktobra: ODIHR upozorava na probleme sa biračkim spiskom i kontrolom kampanje","description":"Međunarodni posmatrači ukazuju na otvorena pitanja o tačnosti biračkog spiska, korišćenju javnih sredstava i nadzoru medija.","imageSrc":"/news/odihr-approved-full.webp","datePublished":"2026-10-10","author":"Novi Talas","section":"Srbija"},
  { path: "/nasa-planeta/najstariji-brodolom-kekova-turska-4700-godina", title: "Najstariji poznati brodolom na svetu pronađen kod Turske: teret ležao na dnu skoro pet milenijuma", description: "Kod ostrva Kekova na jugu Turske arheolozi su pronašli ostatke brodoloma starog između 4.400 i 4.700 godina. Istraživači smatraju da bi mogao biti najstariji poznati brodolom na svetu.", imageSrc: "/news/kekova-approved-full.webp", datePublished: "2026-10-16", author: "Novi Talas", section: "Naša planeta", keywords: "Kekova, Turska, brodolom, arheologija, 4700 godina, bronzano doba, amfore, Mediteran" },

  { path: "/srbija/vilson-upozorio-na-beloruski-scenario-svet-ce-pratiti-izbore-u-srbiji", title: "Vilson upozorio na beloruski scenario: Svet će pratiti izbore u Srbiji", description: "Američki kongresmen razgovarao je sa predstavnicima CRTE o izbornim uslovima u Srbiji. Posmatrači upozoravaju na nasilje, pritiske na birače i neravnopravnu kampanju.", imageSrc: "/news/wilson-crta-approved.webp", datePublished: "2026-10-15", author: "Novi Talas", section: "Srbija", keywords: "Džo Vilson, Joe Wilson, CRTA, Srbija, izbori 25. oktobar, demokratija, SRBIJA Act" },
  {
    path: "/srbija/posle-svedocenja-o-cacilendu-i-15-martu-sve-glasniji-zahtevi-za-istragom",
    title: "Posle svedočenja o Ćacilendu i događajima 15. marta 2025. godine, sve glasniji zahtevi za istragom",
    description: "Sve više glasova zahteva od tužilaštva da ispita navode o organizovanju plaćenih grupa, mogućoj zloupotrebi državnih resursa i ulozi policije tokom protesta u Beogradu.",
    imageSrc: "/news/cacilend-15-mart-2025-nenad-maricic.avif",
    datePublished: "2026-10-14",
    author: "Novi Talas",
    section: "Srbija",
    keywords: "Momčilo Marjanović, BIRN, Ćacilend, 15. mart 2025, tužilaštvo, istraga, BRAVO, Terzić, Prelević, policija",
  },

  {
    path: "/obavestajni-izvori/spijunska-afera-nemacka-evropske-sluzbe-strahuju-za-tajne",
    title: "Špijunska afera u Nemačkoj: evropske službe strahuju za svoje tajne",
    seoTitle: "Špijunska afera u Nemačkoj: evropske službe strahuju za svoje tajne | Novi Talas",
    description: "Hapšenje bivšeg direktora BND-a Augusta Haninga pokrenulo je procene evropskih obaveštajnih službi o mogućem ugrožavanju poverljivih informacija koje su razmenjivane sa Berlinom.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Zentrale_des_Bundesnachrichtendienst%2C_Berlin.jpg",
    datePublished: "2026-10-11",
    author: "Novi Talas",
    section: "Obaveštajni izvori",
    keywords: "BND, August Hanning, Nemačka, obaveštajne službe, Reuters, državne tajne, špijunaža, Evropa",
  },
  {
    path: "/nasa-planeta/dzonatan-kornjaca-194-godine-tajna-dugovecnosti",
    title: "Živi već 194 godine, a njegove ćelije kriju moguću tajnu dugovečnosti",
    seoTitle: "Živi već 194 godine, a njegove ćelije kriju moguću tajnu dugovečnosti | Novi Talas",
    description: "Najstarija poznata živa kopnena životinja na svetu postala je predmet izuzetnog naučnog istraživanja. Analiza DNK Džonatana otkriva moguće mehanizme dugovečnosti.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Jonathan_Tortoise_2022.jpg",
    datePublished: "2026-10-10",
    author: "Novi Talas",
    section: "Naša planeta",
    keywords: "Džonatan, 194 godina, kornjača, dugovečnost, genetika, epigenetika, mitohondrije, DNK, Sveta Jelena, Science Advances",
  },
  {
    path: "/srbija/vucic-i-zapad-optuzbe-za-autokratiju-stigle-su-u-centre-moci",
    title: "Vučić i Zapad: optužbe za autokratiju stigle su u centre moći",
    seoTitle: "Vučić i Zapad: optužbe za autokratiju stigle su u centre moći | Novi Talas",
    description: "Godinama su Kosovo, regionalna stabilnost i geopolitika držali pitanja demokratije, slobode medija i vladavine prava u Srbiji u drugom planu odnosa sa Zapadom. Danas su optužbe za autoritarizam stigle mnogo dalje.",
    imageSrc: "/news/vucic-zapad-centri-moci.webp",
    datePublished: "2026-10-07",
    author: "Novi Talas",
    section: "Srbija",
    keywords: "Aleksandar Vučić, Zapad, autokratija, demokratija, sloboda medija, EPP, Evropski parlament, SRBIJA Act, Amnesty, Reporteri bez granica",
  },

  {
    path: "/geopolitika/srbija-act-stigao-i-u-senat-wilson-podrzao-inicijativu-i-ponovo-otvorio-pitanje-izbora-u-srbiji",
    title: "SRBIJA Act stigao i u Senat: Wilson podržao inicijativu i ponovo otvorio pitanje izbora u Srbiji",
    seoTitle: "SRBIJA Act stigao i u Senat: Wilson podržao inicijativu | Novi Talas",
    description: "U Senatu SAD uveden je S. 5611, uz dvostranačku podršku Grassleyja i Blumenthala. Joe Wilson je inicijativu javno povezao sa SRBIJA Act-om i ponovo otvorio pitanje izbora u Srbiji.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a6/US_Senate_Session_Chamber.jpg",
    datePublished: "2026-10-01",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords: "SRBIJA Act, S. 5611, H.R. 10183, Joe Wilson, Chuck Grassley, Richard Blumenthal, Senat SAD, Srbija, izbori, EPP, SNS",
  },

  {
    path: "/srbija/vazno-za-gradjane-srbije-u-inostranstvu-rok-za-prijavu-za-glasanje-istice-3-oktobra-u-ponoc",
    title: "Važno za građane Srbije u inostranstvu: Rok za prijavu za glasanje ističe 3. oktobra u ponoć",
    seoTitle: "Glasanje u inostranstvu: rok za prijavu ističe 3. oktobra | Novi Talas",
    description: "Studenti u blokadi traže hitnu reakciju MSP-a i RIK-a zbog prijavljenih problema sa zahtevima birača u inostranstvu. Rok za prijavu ističe 3. oktobra 2026. u ponoć.",
    imageSrc: "/news/glasanje-dijaspora-3-oktobar-hd.jpg",
    datePublished: "2026-09-26",
    author: "Novi Talas",
    section: "Srbija",
    keywords: "glasanje u inostranstvu, dijaspora, izbori Srbija 2026, birački spisak, MSP, RIK, MDULS, 3. oktobar",
  },

  {
    path: "/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao",
    title: "Tarantino je napisao novi film. Finčer ga je režirao",
    seoTitle: "Tarantino je napisao novi film. Finčer ga je režirao | Novi Talas",
    description: "Brad Pitt se vraća kao Cliff Booth. Quentin Tarantino potpisuje scenario, David Fincher režiju, a Netflix je objavio prvi puni trejler.",
    imageSrc: "https://img.youtube.com/vi/RjEZaUBbUvU/maxresdefault.jpg",
    datePublished: "2026-09-25",
    author: "Novi Talas",
    section: "Kultura",
    keywords: "Quentin Tarantino, David Fincher, Brad Pitt, Cliff Booth, Netflix, film, trailer, Holivud",
  },
  {
    path: "/geopolitika/pred-razgovore-trampa-i-sija-amerika-ostaje-zavisna-od-kineskih-kriticnih-minerala",
    title: "Pred razgovore Trampa i Sija: Amerika ostaje zavisna od kineskih kritičnih minerala",
    seoTitle: "Pred razgovore Trampa i Sija: Amerika ostaje zavisna od kineskih kritičnih minerala | Novi Talas",
    description: "Kina kontroliše ključne delove lanca retkih zemalja potrebnih američkoj industriji, tehnologiji i odbrani. Pred razgovore Trampa i Sija, američka zavisnost ostaje strateški problem.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/President_Donald_Trump_participates_in_a_bilateral_meeting_with_Chinese_President_Xi_Jinping_at_the_Gimhae_International_Airport_terminal_%2854889568887%29.jpg",
    datePublished: "2026-09-24",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords: "Donald Tramp, Si Đinping, Kina, SAD, kritični minerali, retke zemlje, itrijum, trgovina, tehnologija",
  },
  {
    path: "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru",
    title: "AfD menja političku mapu Nemačke, a ruski gas se vraća u igru",
    seoTitle: "AfD menja političku mapu Nemačke, a ruski gas se vraća u igru | Novi Talas",
    description: "AfD je sa 38,2 odsto pobedio u Meklenburgu-Zapadnoj Pomeraniji, dok se ruski gas i Nord Stream vraćaju u nemačku političku raspravu.",
    imageSrc: "/news/afd-weidel.jpg",
    datePublished: "2026-09-21",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords: "AfD, Nemačka, Alice Weidel, Mecklenburg-Vorpommern, CDU, Friedrich Merz, Rusija, ruski gas, Nord Stream, Kirill Dmitriev",
  },
  {
    path: "/nasa-planeta/tacka-bez-povratka-ai",
    title: "Tačka bez povratka",
    seoTitle: "Tačka bez povratka: ko će kontrolisati veštačku inteligenciju? | Novi Talas",
    description: "Kralj Čarls upozorava na egzistencijalne rizike, dok sumnje u tempo razvoja i mogućnost kontrole AI-ja sve češće dolaze iz samih vodećih laboratorija.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Prince_Charles_%288398765111%29.jpg",
    datePublished: "2026-09-20",
    author: "Novi Talas",
    section: "Naša planeta",
    keywords: "veštačka inteligencija, AI, kralj Čarls, OpenAI, Anthropic, AI bezbednost, kontrola AI, egzistencijalni rizik",
  },
  {
    path: "/geopolitika/francuska-se-suocava-sa-velikom-drustvenom-i-politickom-krizom",
    title: "Francuska se suočava sa velikom društvenom i političkom krizom",
    description: "Više od pola miliona građana izašlo je na ulice širom Francuske zbog rasta troškova života i nezadovoljstva javnim službama. Masovne demonstracije prerasle su u nasilne sukobe u više gradova, dodatno produbljujući krizu vlasti predsednika Emanuela Makrona.",
    imageSrc: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg/1280px-Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg",
    datePublished: "2026-10-18",
    author: "Novi Talas",
    section: "Geopolitika",
    keywords: "Francuska, protesti, Pariz, Makron, društvena kriza, javne službe, sindikati, 17. oktobar 2026",
  },
];
