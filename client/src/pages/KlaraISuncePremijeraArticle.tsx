import ArticleTemplate from "@/components/ArticleTemplate";

// Official Sony Pictures Entertainment trailer, published 22 June 2026.
// Embedded from YouTube only: do not download or redistribute the video.
export const KLARA_SUNCE_PATH = "/kultura/klara-i-sunce-premijera-film-po-romanu-nobelovca-kazua-isigura";
export const KLARA_SUNCE_TRAILER_ID = "wixzainceAE";
export const KLARA_SUNCE_IMAGE = "https://img.youtube.com/vi/wixzainceAE/maxresdefault.jpg";

const PARAGRAPHS = [
    "Može li veštačko biće da razume ljubav, usamljenost i gubitak? I može li njegova privrženost čoveku biti nešto više od programa koji izvršava? Ta pitanja nalaze se u središtu filma „Klara i Sunce“ (Klara and the Sun), koji je 15. oktobra imao svetsku premijeru na Londonskom filmskom festivalu.",
    "Reč je o adaptaciji istoimenog romana britanskog pisca japanskog porekla Kazua Išigura, dobitnika Nobelove nagrade za književnost 2017. godine. Režiju potpisuje Taika Vaititi, oskarovac poznat po filmu „Jojo Rabbit“, dok glavnu ulogu igra Džena Ortega, jedna od najprepoznatljivijih glumica svoje generacije.",
    "Ortega tumači Klaru, humanoidnog robota iz bliske budućnosti, stvorenog da ljudima pruža društvo i ublaži njihovu usamljenost. Klara posmatra svet sa gotovo dečjom radoznalošću, pažljivo proučava ljudsko ponašanje i pokušava da pronikne u osećanja koja ne može neposredno da doživi na isti način kao čovek.",
    "Kada je izabere devojčica Džozi, koju igra Mija Tarija, Klara ulazi u porodicu suočenu sa bolešću, gubitkom i narušenim odnosima. Džozinu majku igra Ejmi Adams, a u glumačkoj postavi su i Stiv Bušemi, Nataša Lion i Aran Marfi.",
    "Klarina odanost devojčici postepeno prerasta u nešto što iz perspektive ljudi počinje da liči na iskrenu privrženost. Međutim, upravo tu nastaje nedoumica: da li je Klara zaista sposobna da voli ili samo savršeno oponaša ponašanje nekoga ko voli?",
    { type: "heading" as const, text: "Nobelovac koji istražuje granice ljudskog iskustva" },
    "Kazuo Išiguro spada među savremene pisce koji složena filozofska pitanja istražuju kroz naizgled jednostavne i duboko intimne priče.",
    "U njegovim romanima sećanje, prolaznost, identitet i potisnuta osećanja često imaju veću važnost od samih događaja. U „Klari i Suncu“, objavljenoj 2021. godine, on tom književnom svetu pridružuje veštačku inteligenciju.",
    "Umesto da mašine predstavi kao buduće gospodare čovečanstva, Išiguro bira sasvim drugačiju perspektivu. Njegov robot nije opasnost od koje ljudi treba da se brane, već biće čija pažnja i odanost otkrivaju složenost, ali i protivrečnosti ljudskih odnosa.",
    "Klara ne pokušava da zavlada svetom. Ona želi da pronađe svoje mesto u njemu.",
    "Takva postavka menja uobičajeno pitanje naučne fantastike. Nije više najvažnije koliko mašina može da postane inteligentna, već šta se događa kada ljudi u njoj počnu da prepoznaju razumevanje, saosećanje i bliskost.",
    { type: "heading" as const, text: "Džena Ortega i paradoks veštačke inteligencije" },
    "Posebnu zanimljivost premijeri daje stav glavne glumice prema tehnologiji koja se nalazi u središtu filma.",
    "Ortega je u intervjuu objavljenom 18. oktobra izrazila zabrinutost zbog sve većeg prisustva generativne veštačke inteligencije u umetnosti. Upozorila je da masovna proizvodnja sadržaja uz pomoć algoritama može potisnuti autentičnu kreativnost i ljudsko iskustvo iz kojeg umetnička dela nastaju.",
    "Tako se pred publikom pojavljuje zanimljiv paradoks. Glumica koja na filmskom platnu oživljava veštačko biće sposobno za izuzetnu pažnju prema ljudima, izvan njega brani nezamenljivost ljudskog stvaralaštva.",
    "To nije nužno protivrečnost. Film o mogućnosti emocionalne povezanosti čoveka i robota ne mora istovremeno da zagovara zamenu umetnika algoritmima. Naprotiv, upravo otvara prostor za razmatranje razlike između tehnološkog dostignuća i ljudskog iskustva.",
    "Vaititi, koji je scenario napisao sa Dejvi Voler, pokušava da Išigurovu književnu ideju prenese u filmski jezik, spajajući emotivnu dramu sa elementima humora karakterističnim za njegov dosadašnji rad.",
    { type: "heading" as const, text: "Film koji dolazi u pravom trenutku" },
    "Premijera „Klare i Sunca“ događa se u vreme kada je veštačka inteligencija prestala da bude isključivo predmet naučne fantastike.",
    "Algoritmi već stvaraju tekstove, slike, muziku i video-sadržaje. Filmska industrija raspravlja o njihovoj upotrebi, pravima glumaca na sopstveni lik i glas, kao i o granicama između ljudskog autorstva i automatizovane proizvodnje.",
    "U takvom trenutku Išigurova priča dobija dodatnu aktuelnost.",
    "Ipak, njena najvažnija vrednost možda nije u pokušaju da predvidi budućnost tehnologije. Ona nas navodi da preispitamo odnose koje već imamo, očekivanja koja postavljamo pred druge i način na koji prepoznajemo nečiju privrženost.",
    "Film ne zahteva da unapred odlučimo može li mašina osećati. Umesto toga, poziva nas da razmislimo zbog čega nam je toliko važno da nas neko razume.",
    "„Klara i Sunce“ nakon londonske festivalske premijere stiže u bioskope u Sjedinjenim Državama i Velikoj Britaniji 23. oktobra.",
    { type: "paragraph" as const, content: <>A pitanje koje ostavlja publici prevazilazi granice filma: <strong>ako jednog dana stvorimo robota koji će razumeti naše potrebe, hoćemo li prema njemu umeti da se odnosimo drugačije nego prema običnoj mašini?</strong></> },
];

export default function KlaraISuncePremijeraArticle() {
  return <ArticleTemplate
    path={KLARA_SUNCE_PATH}
    sectionLabel="Kultura · Film"
    title="Premijera „Klare i Sunca“ po romanu nobelovca Kazua Išigura: Može li robot razumeti čoveka?"
    dateLabel="18. OKTOBAR 2026."
    deck="Džena Ortega tumači humanoidnog robota u filmu Taike Vaititija, snimljenom prema romanu dobitnika Nobelove nagrade za književnost. Priča o ljubavi, usamljenosti i složenom odnosu čoveka i veštačke inteligencije."
    imageSrc={KLARA_SUNCE_IMAGE}
    imageAlt="Kadar sa zvanične YouTube naslovne slike trejlera filma Klara i Sunce, Sony Pictures Entertainment."
    videoHero={{
      youtubeId: KLARA_SUNCE_TRAILER_ID,
      title: "Klara and the Sun — Official Trailer (Sony Pictures Entertainment)",
      credit: "Zvanični trejler: Sony Pictures Entertainment / YouTube. Video se reprodukuje putem originalnog YouTube plejera."
    }}
    imageFirst={true}
    paragraphs={PARAGRAPHS}
    backHref="/kultura"
    backLabel="← Nazad na Kulturu"
  />;
}
