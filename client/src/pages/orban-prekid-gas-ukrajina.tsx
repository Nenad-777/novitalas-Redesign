import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/orban-gas.jpg";

const PARAGRAPHS = [
  "Mađarski premijer Viktor Orban najavio je da će njegova zemlja postepeno obustaviti isporuke gasa Ukrajini, što predstavlja novi pritisak na energetsku stabilnost zemlje u uslovima rata.",
  "Orban je istakao da Mađarska mora da vodi računa o sopstvenim interesima i energetskoj bezbednosti, naglašavajući da trenutni model snabdevanja nije dugoročno održiv.",
  "Ova odluka dolazi u trenutku kada Ukrajina već trpi ozbiljne pritiske na energetsku infrastrukturu usled rata, a dodatna ograničenja u snabdevanju mogu imati direktne posledice po industriju i svakodnevni život.",
  "Potez Budimpešte otvara i šira politička pitanja unutar Evropske unije, gde već duže vreme postoje razlike u pristupu ratu u Ukrajini i odnosu prema Rusiji.",
  "Najava postepenog prekida isporuka pokazuje da se energetska politika sve više koristi kao instrument političkog pritiska, dok jedinstvo unutar Evrope postaje sve složenije za održavanje.",
];

export default function OrbanPrekidGasUkrajina() {
  return (
    <ArticleTemplate
      path="/geopolitika/orban-prekid-gas-ukrajina"
      sectionLabel="Geopolitika"
      title="Orban najavio prekid isporuke gasa Ukrajini"
      dateLabel="25. MART 2026."
      deck="Mađarski premijer Viktor Orban najavio postepeni prekid isporuke gasa Ukrajini, uz nove tenzije unutar Evropske unije."
      imageSrc={IMAGE_SRC}
      imageAlt="Viktor Orban tokom obraćanja na sastanku Evropskog saveta"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
