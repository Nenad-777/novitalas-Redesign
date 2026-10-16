import ArticleTemplate from "@/components/ArticleTemplate";

// Redakcijski provereno prema Reutersu 15.10.2026:
// https://www.reuters.com/world/europe/order-limit-starshield-ukraine-came-inside-white-house-sources-say-2026-10-15/
// i Associated Pressu 16.10.2026:
// https://apnews.com/article/c4e78116472c1808f077e078442dde76
const paragraphs = [
  "Instrukcija da se ograniči rad satelitskog sistema Starshield, koji ukrajinska vojska koristi za komunikaciju i operacije bespilotnih letelica, potekla je iz Bele kuće, objavio je Reuters pozivajući se na dvojicu američkih i jednog zapadnog zvaničnika. Prema njihovim navodima, rukovodstvu Pentagona preneto je da usluga mora biti usporena. Izvori nisu identifikovali osobu koja je izdala nalog. Visoki američki zvaničnik rekao je Reutersu da predsednik Donald Tramp nije naložio ograničenje, dok Bela kuća nije razjasnila da li je odluka došla od drugog člana administracije.",
  "Posledice su se osetile na ukrajinskom ratištu. Vojni predstavnici naveli su da su ograničenja satelitske veze otežala operacije napadnih i presretačkih dronova, naročito pri većim brzinama kretanja. Associated Press izveštava o neuspelim misijama i izgubljenim letelicama tokom privremenog prekida. Pristup sistemu je zatim obnovljen, ali ostaju pitanja da li su sva ograničenja uklonjena i koji će uslovi ubuduće važiti.",
  "Odluka je doneta u trenutku napetosti između Vašingtona i Kijeva zbog ukrajinskih napada na rusku naftnu infrastrukturu. Američka administracija tražila je njihovo obustavljanje, povezujući napade sa cenama energenata. Ipak, Reuters nije utvrdio da je ograničenje Starshielda neposredno uvedeno zbog napada na rafinerije; takvu uzročno-posledičnu vezu zasad nije moguće predstaviti kao činjenicu.",
  "Starshield, vojna i državna usluga kompanije SpaceX zasnovana na tehnologiji satelitske mreže Starlink, nije isto što i civilni Starlink. Ilon Mask je naveo da uslove rada vojnog sistema određuju američke vlasti. Ovaj slučaj zato otvara šire pitanje savremenog ratovanja: ko kontroliše ključne komunikacione mreže kada od njih zavise koordinacija jedinica, upravljanje dronovima i bezbednost ljudi na terenu?"
];

export default function StarshieldWhiteHouseArticle() {
  return <ArticleTemplate
    path="/obavestajni-izvori/reuters-starshield-bela-kuca-ogranicenje-ukrajina"
    sectionLabel="Obaveštajni izvori · Geopolitika"
    title="Bela kuća ograničila satelitsku vezu Ukrajini: ko je izdao nalog i zašto?"
    dateLabel="16. OKTOBAR 2026."
    authorLabel="Novi Talas"
    deck="Prema istraživanju Reutersa, nalog za ograničavanje satelitskog sistema Starshield stigao je iz Bele kuće, ali nije utvrđeno ko ga je izdao. Odluka je poremetila vojne operacije Ukrajine i otvorila pitanje kontrole nad infrastrukturom savremenog rata."
    imageSrc="/news/starshield-approved.jpg"
    imageAlt="AI ilustracija ukrajinskog vojnika sa satelitskim terminalom na položaju u sumrak."
    imageCredit="AI ilustracija / Novi Talas"
    imageFirst={true}
    imageHeightClass="h-auto aspect-video"
    paragraphs={paragraphs}
    backHref="/obavestajni-izvori"
    backLabel="← Nazad na Obaveštajne izvore"
  />;
}
