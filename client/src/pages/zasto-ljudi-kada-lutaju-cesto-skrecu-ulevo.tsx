import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/nasa-planeta/zasto-ljudi-kada-lutaju-cesto-skrecu-ulevo";
const IMAGE_SRC = "/news/human-walking-left.jpg";

const PARAGRAPHS = [
  "Čovek voli da misli da ide pravo. Da mu je pogled dovoljan, da telo sluša nameru i da je pravac nešto što se bira razumom. A onda, čim se uklone orijentiri, počinje tiha pobuna tela: korak po korak, putanja više nije prava linija, već blagi luk.",
  "Upravo ta mala, gotovo neprimetna asimetrija ljudskog kretanja privukla je pažnju istraživača. Kada ljudi hodaju bez jasnog spoljnog oslonca — bez ulica, zidova, znakova, snažnog vizuelnog orijentira ili zadatog cilja — njihove putanje često počinju da se uvijaju. I ne samo to: u velikom broju slučajeva, uvijaju se ulevo, odnosno u smeru suprotnom od kazaljke na satu.",
  "Na prvi pogled, to zvuči kao sitna zanimljivost iz psihologije svakodnevice. Ali iza takvog obrasca krije se mnogo veće pitanje: koliko zaista upravljamo sopstvenim kretanjem, a koliko nas vode nevidljive razlike između leve i desne strane tela?",
  "Eksperimenti sa ljudima koji hodaju u otvorenom prostoru, uključujući istraživanja sprovedena u različitim sredinama, pokazali su da se nasumično ljudsko kretanje ne ponaša uvek kao savršeno neutralan izbor pravca. Kada nema jasne spoljne reference, telo kao da bira svoju stranu. Neki učesnici prave blage lukove, neki zatvaraju gotovo kružne putanje, a kod mnogih se pojavljuje ista tendencija: skretanje ulevo.",
  "Naučnici su pokušali da objasne taj obrazac najjednostavnijim pretpostavkama. Da li je u pitanju dominantna ruka? Da li dešnjaci i levoruki ljudi skreću različito? Da li jedno oko, jedna noga ili nejednaka pažnja prema prostoru guraju telo u stranu? Odgovori, međutim, nisu tako jednostavni. Dosadašnji nalazi ne podržavaju ideju da se sve može svesti na rukost, vid ili jednu očiglednu fizičku razliku.",
  "Verovatnije je da se radi o složenoj kombinaciji biomehanike, ravnoteže, pažnje i načina na koji mozak neprestano ispravlja greške u kretanju. Hodanje izgleda automatski, ali je u stvari stalni pregovor između mišića, zglobova, vida, unutrašnjeg osećaja položaja tela i prostora oko nas.",
  "Zato je ovaj fenomen zanimljiv upravo zato što je skroman. Ne govori o velikim odlukama, već o malom odstupanju. O tome kako telo, kada ostane samo sa sobom, otkriva da nije savršeno simetrična mašina. Čak i kada mislimo da idemo pravo, u nama postoji mala krivina.",
  "U praktičnom smislu, takva istraživanja mogu pomoći u boljem razumevanju navigacije, ponašanja ljudi u gužvi, dizajna javnih prostora, pa čak i potrage za osobama koje se izgube u prirodi. Ako znamo da ljudsko kretanje nije potpuno nasumično, onda i lutanje ima svoju skrivenu geometriju.",
  "Ali postoji i lepša, gotovo filozofska strana ove priče. Čovek nije kompas. Nije savršena strelica na mapi. On je biće navike, ravnoteže, sitnih telesnih nesrazmera i nevidljivih korekcija. Njegov pravac nije samo ono što odluči, već i ono što njegovo telo, tiho i uporno, predloži.",
  "Možda zato ova vest deluje toliko privlačno: pokazuje da se tajna čoveka ne krije samo u velikim mislima, genima ili tehnologiji, već i u običnom koraku. U načinu na koji prelazimo trg, hodamo kroz park ili pokušavamo da idemo pravo kada više nemamo ništa za šta bismo se uhvatili pogledom.",
  "A tada, izgleda, često krenemo ulevo. Ne dramatično. Ne svesno. Samo dovoljno da nas telo podseti da pravac nikada nije potpuno jednostavna stvar.",
];

const INFO_BOX = {
  title: "Izvori i tagovi",
  items: [
    "Izvori: ScienceAlert; naučna istraživanja o ljudskom kretanju i prostornoj orijentaciji",
    "Tagovi: hodanje, ljudsko telo, psihologija, orijentacija, biomehanika, nauka",
  ],
};

export default function ZastoLjudiKadaLutajuCestoSkrecuUlevo() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Zašto ljudi, kada lutaju, često skreću ulevo?"
      dateLabel="13. JUN 2026."
      authorLabel="Novi Talas"
      deck="Kada ljudi izgube spoljne orijentire i pokušaju da hodaju nasumično, njihovo kretanje često se ne razvija kao prava linija, već kao blagi luk — neretko ulevo."
      imageSrc={IMAGE_SRC}
      imageAlt="Ljudi koji hodaju kroz otvoren prostor, sa putanjama koje se blago uvijaju ulevo"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      infoBox={INFO_BOX}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
