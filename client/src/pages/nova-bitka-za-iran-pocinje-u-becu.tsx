import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/nova-bitka-za-iran-pocinje-u-becu";
const IMAGE_SRC = "/news/nuclear-vienna-iran.jpg";

const PARAGRAPHS = [
  "Pred Međunarodnom agencijom za atomsku energiju (IAEA) u Beču otvorena je nova diplomatska rasprava o iranskom nuklearnom programu. Sjedinjene Države i evropske sile traže dodatnu saradnju Teherana sa međunarodnim inspektorima i veći pristup podacima o iranskim nuklearnim aktivnostima, dok Iran odbacuje optužbe da razvija vojni nuklearni program.",
  "Istovremeno, Rusija i Kina upozoravaju da bi novi politički pritisci mogli dodatno otežati pregovore koji se već godinama vode bez konačnog rešenja. Diplomate ističu da se iza tehničkih pitanja o inspekcijama i zalihama obogaćenog uranijuma zapravo vodi mnogo šira rasprava o bezbednosnoj arhitekturi Bliskog istoka i odnosima velikih sila.",
  "Pitanje iranskog nuklearnog programa danas prevazilazi okvire regionalne politike. Ono je postalo jedna od ključnih tačaka globalnog nadmetanja između Zapada s jedne strane i Rusije i Kine s druge. Zbog toga svaka odluka doneta u Beču ima posledice koje se osećaju daleko izvan granica Irana.",
  "Za sada nema naznaka da će sastanak u Beču doneti veliki diplomatski proboj. Ipak, način na koji će se velike sile postaviti prema iranskom pitanju mogao bi da pokaže koliko je prostora ostalo za saradnju u svetu koji je sve više podeljen suprotstavljenim interesima i blokovima.",
];

export default function NovaBitkaZaIranPocinjeUBecu() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Nova bitka za Iran počinje u Beču"
      dateLabel="7. JUN 2026."
      deck="Dok Zapad traži veću transparentnost iranskog nuklearnog programa, Rusija i Kina upozoravaju da bi novi pritisci mogli dodatno ugroziti ionako krhke pregovore o budućnosti regiona."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
