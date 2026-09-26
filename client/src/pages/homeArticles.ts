// Homepage rotation contract:
// keep exactly eight secondary stories. On every new publication, prepend the
// previous HERO here and let the oldest secondary story fall off automatically.
const HOME_ARTICLE_CANDIDATES = [
  {
    href: "/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao",
    category: "VIDEO · KULTURA",
    title: "Tarantino je napisao novi film. Finčer ga je režirao",
    description: "Brad Pitt se vraća kao Cliff Booth. Tarantino potpisuje scenario, David Fincher režiju, a prvi puni trejler otkriva Holivud 1977. godine.",
    imageSrc: "https://img.youtube.com/vi/RjEZaUBbUvU/maxresdefault.jpg",
    imageAlt: "Brad Pitt kao Cliff Booth u zvaničnom Netflix trejleru.",
  },

  {
    href: "/geopolitika/pred-razgovore-trampa-i-sija-amerika-ostaje-zavisna-od-kineskih-kriticnih-minerala",
    category: "GEOPOLITIKA · SAD–KINA",
    title: "Pred razgovore Trampa i Sija: Amerika ostaje zavisna od kineskih kritičnih minerala",
    description:
      "Kina kontroliše ključne delove lanca retkih zemalja potrebnih američkoj industriji, tehnologiji i odbrani. Ta zavisnost ulazi u središte razgovora u Vašingtonu.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/President_Donald_Trump_participates_in_a_bilateral_meeting_with_Chinese_President_Xi_Jinping_at_the_Gimhae_International_Airport_terminal_%2854889568887%29.jpg",
    imageAlt: "Donald Tramp i Si Đinping sa američkom i kineskom delegacijom tokom bilateralnog sastanka u Busanu 2025.",
  },
  {
    href: "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru",
    category: "GEOPOLITIKA · NEMAČKA",
    title: "AfD menja političku mapu Nemačke, a ruski gas se vraća u igru",
    description:
      "AfD je sa 38,2 odsto pobedio u Meklenburgu-Zapadnoj Pomeraniji. U isto vreme, ruski gas i Nord Stream vraćaju se u nemačku političku raspravu.",
    imageSrc: "/news/afd-weidel.jpg",
    imageAlt: "Alis Vajdel uz nemačku zastavu i obeležja AfD-a.",
  },
  {
    href: "/nasa-planeta/tacka-bez-povratka-ai",
    category: "NAŠA PLANETA · AI",
    title: "Tačka bez povratka",
    description:
      "Kralj Čarls upozorava na egzistencijalne rizike, dok sumnje i upozorenja sve češće dolaze iz samih kompanija koje razvijaju najnaprednije AI modele.",
    imageSrc: "/news/king-charles-ai-point-of-no-return.webp",
    imageAlt:
      "Digitalna editorial ilustracija kralja Čarlsa uz globalnu mrežu kao simbol rizika i kontrole veštačke inteligencije.",
  },
  {
    href: "/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela",
    category: "GEOPOLITIKA · ARKTIK",
    title: "Amerika nije dobila Grenland. Dobija ono zbog čega ga je želela",
    description:
      "SAD, Danska i Grenland pripremaju sporazum o jačanju bezbednosti na Arktiku. Suverenitet ostaje nepromenjen, dok strateška važnost ostrva ubrzano raste.",
    imageSrc: "/news/greenland-us-arctic.jpg",
    imageAlt:
      "Editorial ilustracija Grenlanda sa diskretnim radarskim lukovima koji sugerišu američko strateško prisustvo na Arktiku.",
  },
  {
    href: "/nasa-planeta/misu-ugradjen-deo-ljudskog-mozga-naucnici-otvorili-novu-eru-istrazivanja",
    category: "NAŠA PLANETA · NAUKA",
    title: "Mišu ugrađen deo ljudskog mozga: naučnici otvorili novu eru istraživanja",
    description:
      "Stanfordovi istraživači ugradili su ljudske moždane organoide u genetski izmenjene miševe, stvarajući novi model za proučavanje neuroloških bolesti i testiranje budućih terapija.",
    imageSrc: "/news/mouse-human-brain-organoid.png",
    imageAlt:
      "Ilustracija preseka glave miša sa fluorescentno označenim moždanim strukturama i zeleno istaknutim ljudskim moždanim organoidom.",
  },
  {
    href: "/geopolitika/da-li-se-menja-mapa-ujedinjenog-kraljevstva",
    category: "GEOPOLITIKA · EVROPA",
    title:
      "Da li se menja mapa Ujedinjenog Kraljevstva? Tri nacionalna pokreta zajedno otvorila pitanje samoopredeljenja",
    description:
      "Lideri SNP-a, Plaid Cymru i Sinn Féina potpisali su u Kardifu zajednički memorandum o samoopredeljenju. Dokument ne znači izlazak iz UK, ali ustavno pitanje ponovo stavlja u centar britanske politike.",
    imageSrc: "/news/uk-self-determination-flags.jpg",
    imageAlt:
      "Zastave Škotske i Velsa uz Ulster Banner, simbol koji se često koristi za predstavljanje Severne Irske, na jarbolima pod otvorenim nebom.",
  },
  {
    href: "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti",
    category: "GEOPOLITIKA · SVEMIR",
    title: "Amerika prvi put javno potvrdila: imamo oružje u orbiti",
    description:
      "SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava na novu trku u naoružanju u svemiru.",
    imageSrc:
      "https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG",
    imageAlt:
      "Američki sekretar Ratnog vazduhoplovstva Troy Meink govori na konferenciji Air, Space & Cyber 14. septembra 2026.",
  },
  {
    href: "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata",
    category: "GEOPOLITIKA · EVROPA",
    title: "Ko dolazi na vlast u Švedskoj? Levica vodi za samo tri mandata",
    description:
      "Opozicioni blok Magdalene Andersson ima 176 prema 173 mandata u novom parlamentu. Ali razlika je toliko mala da Švedska još nema pobednika, a formiranje nove vlade moglo bi da bude teže od samih izbora.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Magdalena_Andersson_Gothenburg_2026-08-24_02.jpg",
    imageAlt:
      "Magdalena Andersson tokom posete učenicima u Geteborgu, 24. avgusta 2026.",
  },
  {
    href: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",
    category: "KULTURA",
    title: "Ko krade Renoara ako ne može da ga proda?",
    description:
      "Dvojica lopova odnela su četiri Renoarove slike iz muzeja na Azurnoj obali. Dve su pronađene, dve su nestale. Ali prava misterija je čemu služi krađa dela koje je gotovo nemoguće prodati.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Renoir_-_Portrait_de_Madame_Colonna_Romano%2C_non_dat%C3%A9.jpg",
    imageAlt:
      "Pjer-Ogist Renoar, Portret gospođe Kolona Romano, jedna od dve slike koje se i dalje traže.",
  },
  {
    href: "/nasa-planeta/svet-ce-gotovo-izvesno-preci-granicu-od-1-5-stepeni",
    category: "Naša planeta",
    title: "Svet će gotovo izvesno preći granicu od 1,5 stepeni",
    description:
      "UNEP ocenjuje da se prekoračenje ključne granice globalnog zagrevanja više ne može realno izbeći. Pariski cilj ne nestaje, ali se menja pitanje koliko ćemo tu granicu prekoračiti i koliko dugo ćemo iznad nje ostati.",
    imageSrc: "/news/global-warming-1-5-degree-threshold.jpg",
    imageAlt:
      "Grafička ilustracija Zemlje koja prelazi simboličnu granicu globalnog zagrevanja",
  },
  {
    href: "/obavestajni-izvori/direktor-cia-u-moskvi",
    category: "OBAVEŠTAJNI IZVORI",
    title: "Direktor CIA u Moskvi",
    description:
      "Džon Retklif boravio je u nenajavljenoj poseti Moskvi i razgovarao sa predstavnicima ruskih obaveštajnih službi. Vladimir Putin nije učestvovao u sastancima, ali je, prema Kremlju, obavešten o njihovim rezultatima. Sadržaj razgovora nije objavljen, ali sama činjenica da je šef CIA stigao u rusku prestonicu predstavlja redak direktan kontakt dve sile u trenutku duboke konfrontacije zbog rata u Ukrajini.",
    imageSrc: "/news/john-ratcliffe-cia.jpg",
    imageAlt:
      "Direktor CIA Džon Retklif tokom sastanka u Situacionoj sobi Bele kuće.",
  },
  {
    href: "/geopolitika/srbija-act-vasington-beograd",
    category: "Svet · Analiza",
    title: "SRBIJA Act: Da li Vašington menja pravila odnosa sa Beogradom?",
    description:
      "H.R. 10183, poznat kao SRBIJA Act, povezuje američki odnos prema Srbiji sa demokratijom, vladavinom prava, korupcijom i odnosima Beograda sa Rusijom, Kinom i Iranom.",
    imageSrc: "/news/srbija-act-us-house-chamber.jpg",
    imageAlt: "Sala Predstavničkog doma Kongresa SAD.",
  },
  {
    href: "/obavestajni-izvori/retklifova-misija-u-moskvi-dobija-nove-obrise",
    category: "Obaveštajni izvori",
    title: "Retklifova misija u Moskvi dobija nove obrise",
    description:
      "Dan nakon što je potvrđena nenajavljena poseta direktora CIA Džona Retklifa Moskvi, pojavili su se prvi konkretniji podaci o njegovim razgovorima. Šef ruske Spoljne obaveštajne službe Sergej Nariškin potvrdio je da se lično sastao sa Retklifom, dok američki mediji navode da je jedna od tema bilo upozorenje Moskvi da ne pokušava eskalaciju prema članicama NATO-a. Donald Tramp takvu interpretaciju, međutim, javno odbacuje.",
    imageSrc: "/news/ratcliffe-moscow-red-line.jpg",
    imageAlt:
      "Grafička ilustracija tajne američke misije u Moskvi: zvaničnik prelazi crvenu liniju na aerodromskoj pisti dok se u pozadini nalazi vojni transportni avion.",
  },
  {
    href: "/geopolitika/da-li-rusija-sprema-jos-300000-vojnika-za-rat-u-ukrajini",
    category: "Geopolitika",
    title: "Da li Rusija sprema još 300.000 vojnika za rat u Ukrajini?",
    description:
      "Rat u Ukrajini mogao bi da uđe u još jednu godinu velikih vojnih operacija. Kijev tvrdi da Rusija posle septembarskih izbora za Državnu dumu namerava da mobiliše dodatnih 300.000 ljudi, dok Moskva takav plan nije potvrdila. Ako je procena tačna, brojka govori mnogo više od veličine nove mobilizacije — govori o vremenu za koje se rat planira.",
    imageSrc: "/news/kremlin-moscow.jpg",
    imageAlt: "Grafička ilustracija Moskovskog kremlja noću.",
  },
  {
    href: "/srbija/pravi-test-bice-izbori-sta-promene-na-vrhu-znace-za-n1-novu-danas-i-radar",
    category: "Srbija",
    title:
      "Pravi test biće izbori: šta promene na vrhu znače za N1, Novu, Danas i Radar?",
    description:
      "Promene u kompanijama koje stoje iza N1, Nove, Danasa i Radara otvaraju novo poglavlje posle prodaje ovih medija portugalskom Alpac Capitalu. U zemlji u kojoj su ove redakcije godinama među najvažnijim kritičkim glasovima, pitanje više nije samo ko je njihov vlasnik, već koliko će biti slobodne onda kada njihovo izveštavanje bude najvažnije.",
    imageSrc: "/news/media-independence-election.jpg",
    imageAlt:
      "Prazna urednička stolica pred ekranima sa izbornim grafikama, dok se preko redakcije nadvija anonimna senka.",
  },
] as const;

export const HOME_ARTICLES = HOME_ARTICLE_CANDIDATES.slice(0, 8);
