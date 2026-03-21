import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Ova izborna trka postavljena je u korist vlasti još pre nego što je kampanja i počela. Kontrola medija, neravnopravan pristup javnom prostoru, birački spiskovi koji godinama izazivaju sumnju, od fantomskih birača do imena ljudi koji odavno nisu među nama, kao i različiti oblici manipulacije, čine okvir u kojem se izbori odvijaju.",
  "Zato se politička borba sve više pomera tamo gde je najmanje vidljiva. Ne vodi se samo na trgovima i u kampanji, već u procedurama. U potpisima, pravilima, odbijenim i vraćenim listama. U odlukama koje često prolaze ispod radara, ali direktno odlučuju ko uopšte može da učestvuje.",
  "Istovremeno, na ovim izborima pojavljuje se nova energija. Studentske i građanske liste pokušavaju da probiju zatvoreni krug. Donose autentičnost i hrabrost, ali i pokazuju koliko je teško opstati bez infrastrukture i iskustva.",
  "U takvim uslovima, izbori postaju ogledalo sistema. Ne samo zato što pokazuju odnos snaga, već zato što otkrivaju kako sistem funkcioniše kada je pod pritiskom.",
  "I baš tu, u toj zoni gde se pravila rastežu, pojavljuje se ono što nijedan sistem ne može do kraja da kontroliše: prisustvo ljudi.",
  "Na biračkom mestu nema mnogo prostora za teoriju. Tamo se vidi ko je došao, ko gleda, ko zapisuje. Jedan čovek više ili manje često pravi razliku koja se kasnije ne može ispraviti.",
  "Zato se stvar ne završava na glasanju. Tu zapravo počinje.",
  "Ko stoji pored kutije. Ko proverava zapisnik. Ko ne okreće glavu.",
  "Od toga zavisi više nego od bilo koje kampanje.",
  "Posle svega što se u Srbiji događalo u prethodnom periodu, izbori se više ne posmatraju samo iznutra.",
  "I kada su lokalni, danas ih sa većom pažnjom prate evropski i širi međunarodni krugovi.",
];

export default function LokalniIzboriAnaliza() {
  return (
    <ArticleTemplate
      path="/srbija/lokalni-izbori-analiza"
      sectionLabel="Srbija"
      title="Analiza predstojećih izbora: da li je moguć početak promena?"
      dateLabel="21. MART 2026."
      deck="Ovi lokalni izbori u Srbiji deluju mali samo na prvi pogled. U stvarnosti, oni jasno pokazuju kako danas izgleda politička borba u zemlji."
      imageSrc="/news/lokalni-izbori.jpg"
      imageAlt="Minimalistička ilustracija glasačke kutije sa bojama srpske zastave u pozadini, simbol lokalnih izbora i političkog sistema"
      paragraphs={PARAGRAPHS}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
