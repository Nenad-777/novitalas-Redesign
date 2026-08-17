import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/srbija/pravi-test-bice-izbori-sta-promene-na-vrhu-znace-za-n1-novu-danas-i-radar";

const PARAGRAPHS = [
  "Posle promene vlasništva počele su i promene u upravljanju nekim od najznačajnijih nezavisnih medija u Srbiji. Prema danas objavljenim podacima o promenama u kompanijama koje stoje iza N1, Nove, Danasa i Radara, sa rukovodećih mesta odlaze dosadašnji direktori i zastupnici, dok važnu upravljačku ulogu preuzima Pedro Vargas David, čelni čovek portugalskog Alpac Capitala. Ta kompanija je ove godine preuzela medije koji su prethodno poslovali u okviru United Media.",
  "Novi vlasnik privlači pažnju i zbog svojih poslovnih i političkih veza. Alpac Capital već kontroliše Euronews, a OCCRP je ranije pisao o vezama kompanije sa Mađarskom. Otac Pedra Vargasa Davida, Mario David, bio je dugogodišnji saradnik i savetnik Viktora Orbana. Zbog toga je još prilikom prodaje otvoreno pitanje šta će dolazak novog vlasnika značiti za redakcije koje u Srbiji imaju izrazito kritički odnos prema vlasti.",
  "Dodatnu težinu današnjim promenama daje ono što im je prethodilo. KRIK i OCCRP objavili su prošle godine snimak razgovora tadašnjeg direktora United Groupa Stena Milera i direktora Telekoma Srbije Vladimira Lučića, u kojem se govorilo o promenama u United Media i Aleksandri Subotić. Slučaj je privukao pažnju evropskih institucija i ponovo otvorio pitanje političkog uticaja na medije u Srbiji. Taj slučaj, međutim, sam po sebi ne dokazuje da vlast stoji iza današnjih promena, niti za sada postoje dokazi da je novim vlasnicima naložena promena uređivačke politike.",
  "Pravi odgovor zato možda neće dati ni poslovni registri ni saopštenja novih vlasnika. Da li su N1, Nova, Danas i Radar sačuvali nezavisnost najbolje će se videti onda kada politički ulozi budu najveći: tokom izborne kampanje, u načinu na koji će predstavljati vlast i opoziciju, a naročito u izbornoj noći, kada se bude odlučivalo o budućoj vlasti u Srbiji. Do tada je najvažnije pratiti da li će se promene završiti na imenima direktora — ili će početi da se osećaju i tamo gde je granica koju nijedan vlasnik nezavisnog medija ne bi smeo da pređe: u redakciji.",
];

export default function MediaIndependenceElectionArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Srbija"
      title="Pravi test biće izbori: šta promene na vrhu znače za N1, Novu, Danas i Radar?"
      dateLabel="17. avgust 2026."
      deck="Promene u kompanijama koje stoje iza N1, Nove, Danasa i Radara otvaraju novo poglavlje posle prodaje ovih medija portugalskom Alpac Capitalu. U zemlji u kojoj su ove redakcije godinama među najvažnijim kritičkim glasovima, pitanje više nije samo ko je njihov vlasnik, već koliko će biti slobodne onda kada njihovo izveštavanje bude najvažnije."
      imageSrc="/news/media-independence-election.jpg"
      imageAlt="Prazna urednička stolica pred ekranima sa izbornim grafikama, dok se preko redakcije nadvija anonimna senka."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
