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
  /** Route path, e.g. "/geopolitika/svetska-kriza-sve-ozbiljnija" */
  path: string;
  /** Article headline (without site name) */
  title: string;
  /** Short description used for meta description and og:description */
  description: string;
  /**
   * Relative image path, e.g. "/news/brodovi-kriza.jpg".
   * Gets prefixed with SITE_BASE to produce the absolute OG image URL.
   */
  imageSrc: string;
  /**
   * ISO 8601 publish date, e.g. "2026-03-18".
   * Used for JSON-LD datePublished and og:article:published_time.
   */
  datePublished?: string;
  /** Article author name. Defaults to "Novi Talas" if omitted. */
  author?: string;
}

/** Convert a relative image path to an absolute URL suitable for og:image. */
export function buildOgImageUrl(imageSrc: string): string {
  if (imageSrc.startsWith("http")) return imageSrc;
  return `${SITE_BASE}${imageSrc}`;
}

/** Derive a full SEOData-shaped object from a minimal ArticleStaticMeta entry. */
export function buildSEOFromArticleMeta(meta: ArticleStaticMeta) {
  const ogImage = buildOgImageUrl(meta.imageSrc);
  const ogUrl = `${SITE_BASE}${meta.path}`;
  const fullTitle = `${meta.title}${BRAND_SUFFIX}`;
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
  };
}

/**
 * Reusable SEO helper — alias for buildSEOFromArticleMeta.
 *
 * Given a minimal article descriptor it returns the full set of meta tag
 * values (title, description, og:*, twitter:*, canonical URL, JSON-LD) so
 * that every article page automatically gets complete SEO without any
 * per-article manual work.
 *
 * Usage (add entry to articleMeta array):
 *   generateSEO({
 *     path: "/sekcija/slug-clanka",
 *     title: "Naslov članka",
 *     description: "Kratki opis za meta description i og:description.",
 *     imageSrc: "/news/slika.jpg",
 *     datePublished: "2026-03-19",
 *   })
 */
export const generateSEO = buildSEOFromArticleMeta;

/**
 * Build a JSON-LD NewsArticle structured-data object for a given article.
 * Returns a plain object ready to be serialised with JSON.stringify().
 */
export function buildJsonLd(meta: {
  title: string;
  description: string;
  ogUrl: string;
  ogImage: string;
  datePublished?: string;
  author?: string;
}) {
  const authorName = meta.author ?? "Novi Talas";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    image: [meta.ogImage],
    author: [
      {
        "@type": authorName === "Novi Talas" ? "Organization" : "Person",
        name: authorName,
        url: SITE_BASE,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Novi Talas",
      url: SITE_BASE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_BASE}/logo.svg`,
      },
    },
    url: meta.ogUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.ogUrl,
    },
  };

  if (meta.datePublished) {
    jsonLd["datePublished"] = `${meta.datePublished}T00:00:00+01:00`;
  }

  return jsonLd;
}

/**
 * Registry of article metadata for pages that use ArticleTemplate.
 *
 * ADD NEW ARTICLES HERE — the generate script and the server will automatically
 * produce the correct static HTML / HTTP response with full OG + Twitter tags.
 */
export const articleMeta: ArticleStaticMeta[] = [
  {
    path: "/geopolitika/protesti-u-pragu-zbog-finansiranja-javnog-servisa",
    title:
      "Hiljade građana protestovale u Pragu zbog reforme finansiranja javnog servisa",
    description:
      "Plan češke vlade da promeni model finansiranja javnih medija izazvao je proteste u Pragu, otvarajući širu evropsku raspravu o nezavisnosti javnih servisa u digitalnom dobu.",
    imageSrc: "/news/prague-public-media-protest.jpg",
    datePublished: "2026-06-22",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/g7-nova-geopoliticka-strategija",
    title:
      "G7 pokreće novu geopolitičku strategiju: manje zavisnosti od Kine, veći pritisak na Rusiju i podrška sporazumu sa Iranom",
    description:
      "Lideri najrazvijenijih zapadnih ekonomija poslali su sa samita G7 poruku da ulaze u novu fazu geopolitičkog nadmetanja kroz smanjenje zavisnosti od kineskih sirovina, nastavak podrške Ukrajini i podršku sporazumu između SAD i Irana.",
    imageSrc: "/news/g7-summit-evian-2026.jpg",
    datePublished: "2026-06-18",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/zasto-ljudi-veruju-lazima",
    title: "Zašto ljudi veruju lažima koje žele da čuju?",
    description:
      "Nova istraživanja i psihološki modeli pokazuju da ljudi ne prihvataju informacije samo na osnovu činjenica, već i na osnovu emocija, identiteta i potrebe da potvrde ono u šta već veruju.",
    imageSrc: "/news/confirmation-bias-mirror.jpg",
    datePublished: "2026-06-17",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/g7-podrzala-sporazum-sad-iran",
    title:
      "G7 podržala sporazum SAD i Irana: otvara li se put ka trajnoj stabilizaciji Bliskog istoka?",
    description:
      "Lideri G7 podržali su sporazum Vašingtona i Teherana kojim je zaustavljena najnovija eskalacija u Persijskom zalivu, ali ostaje neizvesno da li dogovor može prerasti u trajniju stabilizaciju Bliskog istoka.",
    imageSrc: "/news/g7-supports-us-iran-deal.jpg",
    datePublished: "2026-06-17",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/london-kampanja-protiv-dezinformacija",
    title: "London pokreće kampanju od 7 miliona funti protiv dezinformacija",
    description:
      "Gradske vlasti tvrde da koordinisane kampanje na društvenim mrežama narušavaju ugled britanske prestonice, zbog čega je pokrenut međunarodni program za promociju Londona i suzbijanje dezinformacija.",
    imageSrc: "/news/london-disinformation-campaign.jpg",
    datePublished: "2026-06-17",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci",
    title: "Mundijal na granici: fudbal, vize i politika moći",
    description:
      "Dok FIFA slavi najveći fudbalski spektakl na svetu, američka vizna politika, ratne tenzije i pitanje ko uopšte ima pravo da učestvuje u „svetskom” prvenstvu već su postali deo turnira.",
    imageSrc: "/news/world-cup-visas.jpg",
    datePublished: "2026-06-13",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan",
    title:
      "SAD i Iran blizu sporazuma: Pakistan tvrdi da je tekst dogovoren, Teheran još oprezan",
    description:
      "Pakistanski premijer Shehbaz Sharif saopštio je da su Sjedinjene Države i Iran usaglasili tekst mirovnog sporazuma. Ipak, iz Teherana stiže poruka da konačna odluka još nije doneta.",
    imageSrc: "/news/peace-for-iran.jpg",
    datePublished: "2026-06-12",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/eu-migration-rules-2026",
    title: "Nova migraciona pravila Evropske unije ulaze u primenu",
    description:
      "Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i novi sistem solidarnosti među državama članicama.",
    imageSrc: "/news/eu-flags.jpg",
    datePublished: "2026-06-12",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/talibani-otvorili-vatru-na-protest-za-prava-zena",
    title: "Talibani otvorili vatru na protest za prava žena",
    description:
      "Novi protest za prava žena u Avganistanu završen je nasilnom intervencijom talibanskih snaga. Žene godinama gube prava, protesti se guše, a međunarodna pažnja slabi.",
    imageSrc: "https://novitalas.org/news/afganistan-woman.jpg",
    datePublished: "2026-06-11",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/nasa-predstavila-posadu-artemis-iii",
    title: "NASA predstavila posadu misije Artemis III",
    description:
      "Povratak ljudi na Mesec ulazi u novu fazu — NASA je zvanično objavila posadu prve misije koja bi trebalo da vrati astronaute na površinu Meseca posle više od pola veka.",
    imageSrc: "/news/artemis-nasa-3.jpg",
    datePublished: "2026-06-10",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera",
    title: "Tramp pokrenuo udare na Iran nakon obaranja američkog helikoptera",
    description:
      "Obaranje američkog vojnog helikoptera u blizini Ormuskog moreuza pokrenulo je niz vojnih i diplomatskih poteza koji su za nekoliko dana prerasli u novu otvorenu krizu između Vašingtona i Teherana.",
    imageSrc: "/news/usa-iran-crisis.jpg",
    datePublished: "2026-06-10",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/nemacka-i-francuska-odustaju-od-zajednickog-borbenog-aviona",
    title: "Nemačka i Francuska odustaju od zajedničkog borbenog aviona",
    description:
      "Kriza programa FCAS ponovo otvara pitanje evropske odbrane: Francuska, Nemačka, Airbus i Dassault nisu uspeli da usaglase zajednički razvoj borbenog aviona nove generacije.",
    imageSrc: "/news/germany-france-delayed.jpg",
    datePublished: "2026-06-09",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/luksuzni-raj-ili-gubitak-obale",
    title: "Luksuzni raj ili gubitak obale?",
    description:
      "Veliki turistički projekat na albanskoj obali ponovo otvara pitanje kako uskladiti privlačenje investicija sa zaštitom prostora i javnog interesa.",
    imageSrc: "/news/albania-trump-shore.jpg",
    datePublished: "2026-06-08",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/nova-bitka-za-iran-pocinje-u-becu",
    title: "Nova bitka za Iran počinje u Beču",
    description:
      "Dok Zapad traži veću transparentnost iranskog nuklearnog programa, Rusija i Kina upozoravaju da bi novi pritisci mogli dodatno ugroziti ionako krhke pregovore o budućnosti regiona.",
    imageSrc: "/news/nuclear-vienna-iran.jpg",
    datePublished: "2026-06-07",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/prvi-korak-ka-svetu-bez-naslednih-bolesti",
    title: "Prvi korak ka svetu bez naslednih bolesti?",
    description:
      "Naučnici su po prvi put precizno izmenili gene u ljudskim embrionima, otvarajući mogućnost lečenja naslednih bolesti, ali i novu raspravu o granicama ljudskog mešanja u sopstvenu evoluciju.",
    imageSrc: "/news/embryo-edit.jpg",
    datePublished: "2026-06-06",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/evropska-industrija-pred-novim-udarom-energetske-krize",
    title: "Evropska industrija pred novim udarom energetske krize",
    description:
      "Evropska komisija upozorava da bi rast cena energije mogao ugroziti do 1,3 miliona radnih mesta, dok rat na Bliskom istoku ponovo povećava zabrinutost za stabilnost evropske privrede.",
    imageSrc: "/news/workers-eu.jpg",
    datePublished: "2026-06-04",
    author: "Novi Talas",
  },
  {
    path: "/srbija/potpuni-slom-vuciceve-medjunarodne-reputacije",
    title: "Potpuni slom Vučićeve međunarodne reputacije",
    description:
      "Zabrana ulaska grupi državljana Srbije u Crnu Goru otvorila je pitanje međunarodnog ugleda Aleksandra Vučića i političkog sistema koji je gradio više od decenije.",
    imageSrc: "/news/slom-medjunarodni.jpg",
    datePublished: "2026-06-04",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/moskva-upozorava-putina-ratna-potrosnja-postaje-neodrziva",
    title: "Moskva upozorava Putina: ratna potrošnja postaje neodrživa",
    description:
      "Ruski finansijski zvaničnici navodno upozoravaju da troškovi rata u Ukrajini sve ozbiljnije pritiskaju budžet, dok vojni vrh traži nova sredstva i odbija smanjenje odbrambenih rashoda.",
    imageSrc: "/news/moscow-economy-war.jpg",
    datePublished: "2026-06-02",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/nvidia-ulazi-u-globalnu-trku-za-humanoidne-robote",
    title: "Nvidia ulazi u globalnu trku za humanoidne robote",
    description:
      "Američki tehnološki gigant najavio je saradnju sa proizvođačima humanoidnih robota iz Sjedinjenih Država i Evrope, dok Kina ubrzano razvija sopstvene sisteme. Počinje nova industrijska revolucija u kojoj veštačka inteligencija dobija fizički oblik.",
    imageSrc: "/news/ai-humnoid.jpg",
    datePublished: "2026-06-02",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/posle-dronova-dolaze-roboti-novo-poglavlje-rata-u-ukrajini",
    title: "Posle dronova dolaze roboti: novo poglavlje rata u Ukrajini",
    description:
      "Testiranje humanoidnih robota na ukrajinskom ratištu pokazuje da se iza današnjeg sukoba odvija mnogo šira tehnološka transformacija koja bi mogla da promeni način vođenja ratova u decenijama koje dolaze.",
    imageSrc: "/news/robots-ukraine.jpg",
    datePublished: "2026-05-31",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/nasa-anounce",
    title: "NASA najavila nove misije ka Mesecu i plan trajne baze",
    description:
      "Američka svemirska agencija predstavila je detaljan plan izgradnje trajne baze na Mesecu, uz seriju novih posadnih misija koje bi postepeno izgradile lunarnu infrastrukturu.",
    imageSrc: "/news/nasa-anounce.jpg",
    datePublished: "2026-05-28",
    author: "Novi Talas",
  },
  {
    path: "/srbija/posle-slavije-vlast-ulazi-u-fazu-politicke-nervoze",
    title: "Posle Slavije: vlast ulazi u fazu političke nervoze",
    description:
      "Studentski pokret pokazuje sve jasnije obrise političke artikulacije, dok vlast istovremeno pokušava da kupi vreme i spreči formiranje studentske izborne liste čiji identitet još nije poznat javnosti.",
    imageSrc: "/news/slavija-protest.jpg",
    datePublished: "2026-05-26",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/evropa-trazi-novu-formulu-za-ukrajinu",
    title: "Evropa traži novu formulu za Ukrajinu",
    description:
      "Berlin predlaže model pridruženog članstva bez prava glasa, dok Evropska unija pokušava da pronađe ravnotežu između političke podrške Kijevu i straha od dubokih unutrašnjih promena.",
    imageSrc: "/news/mertz-ukraine.jpg",
    datePublished: "2026-05-22",
    author: "Novi Talas",
  },
  {
    path: "/obavestajni-izvori/spijunske-aktivnosti-ne-jenjavaju-u-evropi",
    title: "Špijunske aktivnosti ne jenjavaju u Evropi",
    description:
      "Evropske kontraobaveštajne službe beleže kontinuiran rast stranih operacija na tlu kontinenta. Nemačka je posebno izložena kineskim i ruskim naporima usmerenim ka industrijskim tajnama, vojnoj logistici i akademskim institucijama.",
    imageSrc: "/news/germany-police.jpg",
    datePublished: "2026-05-21",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/peking-izmedju-trumpa-i-putina",
    title: "Peking između Trumpa i Putina: Kina u središtu nove velike igre",
    description:
      "Putinova poseta Pekingu, nekoliko dana posle Trumpovog susreta sa Sijem, pokazuje kako Kina postaje centralno mesto nove velike igre između Moskve i Vašingtona.",
    imageSrc: "/news/putin-xi.jpg",
    datePublished: "2026-05-17",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/putin-govori-o-kraju-rata-ukrajina",
    title: "Putin govori o kraju rata: između nade i opreza",
    description:
      "Putinova izjava da se rat u Ukrajini približava kraju vraća temu završnice u diplomatski prostor, ali borbe na terenu pokazuju da mir još nije blizu.",
    imageSrc: "/news/putin-end-war.jpg",
    datePublished: "2026-05-09",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/trump-otvorio-ufo-arhive",
    title: "Trump otvorio UFO arhive: više pitanja nego odgovora",
    description:
      "Američka administracija objavila je prvu grupu ranije poverljivih dokumenata o UFO i UAP pojavama, ali bez potvrde da je reč o vanzemaljskoj tehnologiji.",
    imageSrc: "/news/ufo-files.jpg",
    datePublished: "2026-05-08",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/pad-vlade-u-rumuniji-proevropski-zid-nato",
    title:
      "Pad vlade u Rumuniji: proevropski zid puca na istočnom krilu NATO-a",
    description:
      "Pad vlade Ilieja Bolojana u Rumuniji otvara pitanje stabilnosti zemlje na istočnom krilu NATO-a, evropskih fondova, fiskalne štednje i rasta krajnje desnice.",
    imageSrc: "/news/romania-parliament-bucharest.jpg",
    datePublished: "2026-05-05",
    author: "Novi Talas",
  },
  {
    path: "/nasa-planeta/venecijansko-bijenale-ziri-ostavka-umetnost-granice",
    title: "Može li se zabraniti umetnost zbog države iz koje dolazi?",
    description:
      "Ostavka žirija Venecijanskog bijenala otvorila je pitanje koje prevazilazi jednu izložbu: da li umetnost treba da ostane prostor bez granica, ili mora da odgovori na ratove iz sveta oko sebe.",
    imageSrc: "/news/venice-biennale-arsenale-2024.jpg",
    datePublished: "2026-05-01",
    author: "Novi Talas",
  },
  {
    path: "/geopolitika/svet-na-dan-1-maj-2026",
    title:
      "SVET NA DAN, 1. maj: Ormuz, Ukrajina i Tajvan oblikuju novu mapu pritiska",
    description:
      "Prvi maj 2026. donosi sliku sveta u kome se energetska kriza, rat u Ukrajini i američko-kinesko nadmetanje sve brže spajaju u jednu geopolitičku celinu.",
    imageSrc: "/news/world-1.may.jpg",
    datePublished: "2026-05-01",
    author: "Novi Talas",
  },
  {
    path: "/obavestajni-izvori/kazakstan-spijun",
    title:
      "Berlin u senci špijunaže: uhapšen osumnjičeni ruski agent, meta bile informacije o Ukrajini i NATO konvojima",
    description:
      "Nemački tužioci tvrde da je državljanin Kazahstana mesecima bio u kontaktu sa ruskom obaveštajnom službom i dostavljao podatke o vojnoj pomoći Ukrajini, odbrambenoj industriji i kretanju NATO konvoja.",
    imageSrc: "/news/kazakstan-spy.jpg",
    datePublished: "2026-04-29",
  },
  {
    path: "/nasa-planeta/homerova-ilijada-pronadjena-u-egipatskoj-mumiji",
    title: "Homerova Ilijada pronađena u egipatskoj mumiji",
    description:
      "U antičkom Oksirinhu arheolozi su otkrili papirus sa fragmentom Ilijade unutar mumije iz rimskog perioda, što predstavlja prvi poznati slučaj ovakve upotrebe književnog teksta u mumifikaciji.",
    imageSrc: "/news/Iliad-mumy.jpg",
    datePublished: "2026-04-24",
  },
  {
    path: "/geopolitika/nato-pod-pritiskom-od-saveza-ravnopravnih-ka-sistemu-uslovljene-lojalnosti",
    title:
      "NATO pod pritiskom: od saveza ravnopravnih ka sistemu uslovljene lojalnosti",
    description:
      "U Vašingtonu se sve otvorenije razmatra diferenciranje saveznika prema političkoj i vojnoj usklađenosti sa američkim prioritetima.",
    imageSrc: "/news/Nato-new-relations.jpg",
    datePublished: "2026-04-23",
  },
  {
    path: "/nasa-planeta/na-marsu-otkrivene-molekule-povezane-sa-poreklom-zivota",
    title: "Na Marsu otkrivene molekule povezane sa poreklom života",
    description:
      "Rover Curiosity identifikovao je kompleksne organske molekule koji otvaraju nova pitanja o mogućem nastanku života na Crvenoj planeti.",
    imageSrc: "/news/mars-life.jpg",
    datePublished: "2026-04-22",
  },
  {
    path: "/geopolitika/novac-kao-uslov-trenutak-u-kojem-se-odlucuje-pravac-srbije",
    title: "Novac kao uslov: trenutak u kojem se odlučuje pravac Srbije",
    description:
      "Evropska unija prvi put jasno povezuje finansijsku podršku sa političkim odlukama, otvarajući pitanje daljeg kursa Srbije.",
    imageSrc: "/news/eu-uslov.jpg",
    datePublished: "2026-04-22",
  },
  {
    path: "/geopolitika/bugarska-na-raskrsnici-rumen-radev-vodi-prema-izlaznim-anketama",
    title: "Bugarska na raskrsnici: Rumen Radev vodi prema izlaznim anketama",
    description:
      "Prema izlaznim anketama, aktuelni predsednik Bugarske, Rumen Radev, ostvario je značajnu prednost na izborima, potvrđujući snažnu podršku biračkog tela.",
    imageSrc: "/news/bulgaria-elections.jpg",
    datePublished: "2026-04-19",
  },
  {
    path: "/geopolitika/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost",
    title: "Iran zatvara Ormuski moreuz: svet ulazi u energetsku neizvesnost",
    description:
      "Iran je ponovo uspostavio strogu kontrolu nad Ormuskim moreuzom, jednim od najvažnijih svetskih energetskih prolaza, uz obrazloženje da Sjedinjene Američke Države nastavljaju blokadu iranskih luka.",
    imageSrc: "/news/closed-again.jpg",
    datePublished: "2026-04-18",
  },
  {
    path: "/geopolitika/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja",
    title:
      "Iran otvorio Ormuski moreuz za komercijalni saobraćaj tokom primirja",
    description:
      "Teheran je saopštio da je Ormuski moreuz otvoren za komercijalni saobraćaj tokom trajanja primirja, čime je privremeno smanjena bojazan od novog udara na globalno tržište energije.",
    imageSrc: "/news/open-ormuz.jpg",
    datePublished: "2026-04-17",
  },
  {
    path: "/geopolitika/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom",
    title: "SAD odlažu isporuke oružja Evropi zbog rata sa Iranom",
    description:
      "Sjedinjene Američke Države odlažu deo planiranih isporuka oružja evropskim saveznicima zbog pojačanih operativnih zahteva u ratu sa Iranom, potvrđuju diplomatski i bezbednosni izvori.",
    imageSrc: "/news/military-cargo.jpg",
    datePublished: "2026-04-17",
  },
  {
    path: "/nasa-planeta/spilberg-upozorava-holivud-publika-trazi-originalne-filmove",
    title: "Spilberg upozorava Holivud: publika traži originalne filmove",
    description:
      "Stiven Spilberg poručio je na CinemaConu da Holivud mora da preispita oslanjanje na franšize i nastavke, jer publika sve više traži originalne priče.",
    imageSrc: "/news/spilberg.jpg",
    datePublished: "2026-04-16",
  },
  {
    path: "/nasa-planeta/umetnost-koja-dise-teamlab-tokio",
    title:
      "Umetnost koja diše: izložba u Tokiju koja briše granicu između čoveka i prirode",
    description:
      "U Tokiju, u četvrti Tojosu, izložba teamLab Planets menja način na koji posmatramo umetnost, prirodu i odnos čoveka prema prostoru.",
    imageSrc: "/news/teamlab1.jpg",
    datePublished: "2026-04-18",
  },
  {
    path: "/geopolitika/pomeranje-tezista-orban-evropa",
    title: "POMERANJE TEŽIŠTA: Šta poraz Orbana znači za Evropu i svet",
    description:
      "Analiza političkih i geopolitičkih posledica poraza Viktora Orbana u Mađarskoj",
    imageSrc: "/news/magyar.jpg",
    datePublished: "2026-04-13",
  },
  {
    path: "/geopolitika/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs",
    title:
      "Rusija i Ukrajina dogovorile privremeno primirje za pravoslavni Uskrs",
    description:
      "Rusija i Ukrajina dogovorile su privremeni prekid vatre povodom pravoslavnog Uskrsa. Primirje je vremenski ograničeno i vezano za trajanje praznika, uz obostrane rezerve o njegovom sprovođenju na terenu.",
    imageSrc: "/news/primirje-vaskrs.jpg",
    datePublished: "2026-04-11",
  },
  {
    path: "/geopolitika/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza",
    title:
      "Rusija, Kina i Francuska blokirale rezoluciju o otvaranju Ormuskog moreuza",
    description:
      "Rusija, Kina i Francuska blokirale su u Savetu bezbednosti UN rezoluciju o ponovnom otvaranju Ormuskog moreuza, jednog od ključnih svetskih energetskih prolaza. Odluka dodatno produbljuje neizvesnost u regionu Persijskog zaliva i pojačava pritisak na globalne energetske tokove.",
    imageSrc: "/news/un-security-council.jpg",
    datePublished: "2026-04-07",
  },
  {
    path: "/geopolitika/harg-srce-iranskog-izvoza-nafte",
    title: "Harg – srce iranskog izvoza nafte",
    description:
      "Sjedinjene Američke Države, prema dostupnim izveštajima, izvele su udare na vojne ciljeve na ostrvu Harg, ključnom energetskom čvorištu Irana u Persijskom zalivu. Reč je o tački od izuzetnog strateškog značaja za izvoz iranske nafte i za stabilnost čitavog regiona.",
    imageSrc: "/news/harg-oil-terminal.jpg",
    datePublished: "2026-04-07",
  },
  {
    path: "/geopolitika/kina-testira-vodonicni-avion-pocetak-nove-energetske-trke-u-avijaciji",
    title:
      "Kina testira vodonični avion: početak nove energetske trke u avijaciji",
    description:
      "Kina je izvela prvi uspešan test megavatnog vodoničnog turboprop motora, što ukazuje na ubrzanje globalne energetske i tehnološke trke u avijaciji.",
    imageSrc: "/news/hydrogen-light.jpg",
    datePublished: "2026-04-06",
  },
  {
    path: "/obavestajni-izvori/prvi-brifing",
    title: "OBAVEŠTAJNI BRIFING | 15. april 2026.",
    description:
      "Sažeti obaveštajni pregled: bezbednosni pritisci u pomorskim koridorima, digitalni nadzor i diplomatski balans u regionu Persijskog zaliva.",
    imageSrc: "/news/security-world.jpg",
    datePublished: "2026-04-15",
  },
  {
    path: "/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina",
    title:
      "🚨 BREAKING: NASA ponovo šalje ljude ka Mesecu posle više od 50 godina",
    description:
      "NASA je lansirala Artemis II, prvu ljudsku misiju ka Mesecu posle više od pola veka.",
    imageSrc: "/news/artemis-landing.jpg",
    datePublished: "2026-04-02",
  },
  {
    path: "/geopolitika/oboren-f15e-iran-2026",
    title:
      "Oboren američki F-15E iznad Irana: jedan član posade spašen, drugi nestao",
    description:
      "Incident predstavlja prvi potvrđeni slučaj obaranja američkog aviona sa posadom u aktuelnom sukobu",
    imageSrc: "https://novitalas.org/news/f15e-iran.jpg",
    datePublished: "2026-04-04",
  },
  {
    path: "/geopolitika/inflacija-evrozona-ecb-mart",
    title: "Inflacija u evrozoni ponovo iznad cilja Evropske centralne banke",
    description:
      "Rast cena energije pogurao inflaciju na 2,5 odsto, dok monetarne vlasti razmatraju sledeće korake",
    imageSrc: "https://novitalas.org/news/ecb-frankfurt-inflation.jpg",
    datePublished: "2026-04-01",
  },
  {
    path: "/geopolitika/vens-netanjahu-iran-rat",
    title: "Vens kritikovao Netanjahua zbog procena rata sa Iranom",
    description:
      "JD Vens kritikovao Benjamina Netanjahua zbog procena rata sa Iranom, ukazujući na rastuće razlike unutar savezništva.",
    imageSrc: "/news/vance-netanyahu.jpg",
    datePublished: "2026-03-28",
  },
  {
    path: "/geopolitika/un-istraga-skola-iran",
    title: "UN traži pravdu nakon bombardovanja škole u Iranu",
    description:
      "Ujedinjene nacije traže hitnu istragu nakon bombardovanja škole u Iranu u kojem je stradalo više od 150 civila.",
    imageSrc: "/news/un-investigation.jpg",
    datePublished: "2026-03-27",
  },
  {
    path: "/obavestajni-izvori/nemacka-curenje-informacija",
    title:
      "Nemačka ograničava pristup poverljivim podacima zbog straha od curenja",
    description:
      "Nemačka ograničava pristup poverljivim podacima zbog straha od curenja ka stranim akterima i moguće infiltracije unutar sistema.",
    imageSrc: "/news/germany-intelligence.jpg",
    datePublished: "2026-03-25",
  },
  {
    path: "/geopolitika/orban-prekid-gas-ukrajina",
    title: "Orban najavio prekid isporuke gasa Ukrajini",
    description:
      "Mađarski premijer Viktor Orban najavio postepeni prekid isporuke gasa Ukrajini, uz nove tenzije unutar Evropske unije.",
    imageSrc: "/news/orban-gas.jpg",
    datePublished: "2026-03-25",
  },
  {
    path: "/nasa-planeta/moon-ring",
    title: "Plan iz Japana: solarni prsten oko Meseca za energiju Zemlje",
    description:
      "Japanski istraživački tim predstavio je koncept izgradnje ogromnog solarnog sistema na Mesecu, koji bi mogao neprekidno da proizvodi energiju i šalje je na Zemlju.",
    imageSrc: "/news/moon-ring.jpg",
    datePublished: "2026-03-24",
  },
  {
    path: "/nasa-planeta/najtoplija-decenija-planeta-un",
    title:
      "UN potvrdio: planeta iza sebe ima najtopliju deceniju u istoriji merenja",
    description:
      "UN potvrđuje da je poslednjih jedanaest godina najtopliji period u istoriji merenja globalne temperature.",
    imageSrc: "/news/world-heat.jpg",
    datePublished: "2026-03-24",
  },
  {
    path: "/geopolitika/meloni-referendum-italija",
    title: "Meloni priznala poraz: Italijani odbacili reformu pravosuđa",
    description:
      "Italijani su na referendumu odbacili reformu pravosuđa, a premijerka Giorgia Meloni priznala poraz.",
    imageSrc: "/news/meloni-referendum.jpg",
    datePublished: "2026-03-24",
  },
  {
    path: "/geopolitika/iran-trump-ormuski-moreuz",
    title:
      "Iran preti zatvaranjem Ormuskog moreuza kao odgovor na Trampov ultimatum",
    description:
      "Iran preti zatvaranjem Ormuskog moreuza kao odgovor na američki ultimatum, uz rizik globalne energetske krize.",
    imageSrc: "/news/trump-iran.jpg",
    datePublished: "2026-03-23",
  },
  {
    path: "/srbija/lokalni-izbori-analiza",
    title: "Analiza predstojećih izbora: da li je moguć početak promena?",
    description:
      "Analiza predstojećih lokalnih izbora u Srbiji: uslovi, kontrola procesa i nova energija na terenu.",
    imageSrc: "/news/lokalni-izbori.jpg",
    datePublished: "2026-03-21",
  },
  {
    path: "/nasa-planeta/psihologija-dosada",
    title:
      "Otkriće psihologije: zašto je najbolja stvar koju možete da uradite da ne radite ništa",
    description:
      "Savremena psihologija otkriva da vaš mozak najbolje radi kada ga ostavite na miru — i da je dosada možda najproduktivnija stvar koju ćete danas uraditi.",
    imageSrc: "/news/psihologija-dosada.jpg",
    datePublished: "2026-03-20",
  },
  {
    path: "/nasa-planeta/ai-superaplikacija",
    title:
      "OpenAI razvija „superaplikaciju“ koja objedinjuje ChatGPT, Codex i browser",
    description:
      "OpenAI razvija novu desktop superaplikaciju koja objedinjuje ChatGPT, Codex i browser u jedinstveni AI sistem.",
    imageSrc: "/news/ai-superapp.jpg",
    datePublished: "2026-03-20",
  },
  {
    path: "/geopolitika/ormuz-moreuz",
    title: "Evropske zemlje i Japan o bezbednosti Ormuskog moreuza",
    description:
      "Evropske zemlje i Japan objavili su zajedničko saopštenje o bezbednosti Ormuskog moreuza i zaštiti pomorskih ruta za snabdevanje energentima.",
    imageSrc: "/news/ormuz-kriza.jpg",
    datePublished: "2026-03-20",
  },
  {
    path: "/nasa-planeta/mars-reka",
    title:
      "Na Marsu otkriveni tragovi drevne reke: nova faza u potrazi za životom",
    description:
      "NASA rover pronašao dokaze o drevnoj reci na Marsu i mogućim uslovima za život.",
    imageSrc: "/news/mars-reka.jpg",
    datePublished: "2026-03-19",
  },
  {
    path: "/geopolitika/energetski-rat",
    title:
      "Bliski istok ulazi u energetski rat: posle napada u Zalivu nafta skače, tržišta u panici",
    description:
      "Napadi na energetsku infrastrukturu u Zalivu podižu cenu nafte i šire krizu na Evropu.",
    imageSrc: "/news/nafta-kriza.jpg",
    datePublished: "2026-03-19",
  },
  {
    path: "/geopolitika/tanker-bez-pogona",
    title:
      "EVROPA U TRCI SA VREMENOM: tanker bez pogona preti ekološkom katastrofom",
    description:
      "Tanker bez pogona koji prevozi naftu nekontrolisano pluta u evropskim vodama, dok evropski lideri upozoravaju na rizik ekološke katastrofe i traže hitnu koordinisanu reakciju.",
    imageSrc: "/news/tanker.jpg",
    datePublished: "2026-03-18",
  },
  {
    path: "/geopolitika/zapadne-sile-upozorile-izrael",
    title:
      "Zapadne sile upozorile Izrael - ne pokretati kopnenu ofanzivu u Libanu",
    description:
      "Zapadne zemlje upozoravaju Izrael da ne pokreće kopnenu operaciju u Libanu, uz rastući rizik regionalne eskalacije.",
    imageSrc: "/news/west-against-israel.jpg",
    datePublished: "2026-03-18",
  },
  {
    path: "/srbija/akademija-novisad",
    title:
      "Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora",
    description:
      "Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice.",
    imageSrc: "/news/akademija-novisad.jpg",
    datePublished: "2026-03-18",
  },
  {
    path: "/geopolitika/svetska-kriza-sve-ozbiljnija",
    title: "SVETSKA KRIZA SVE OZBILJNIJA",
    description:
      "Kriza oko Ormuskog moreuza produbljuje se dok rat između SAD, Izraela i Irana ulazi u treću nedelju. Cena nafte prešla 100 dolara po barelu.",
    imageSrc: "/news/brodovi-kriza.jpg",
    datePublished: "2026-03-16",
  },
];
