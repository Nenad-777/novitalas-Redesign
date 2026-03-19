/*
 * Tanker bez pogona - Geopolitika (single article)
 * Date: 18. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Pet evropskih lidera, iz Francuske, Nemačke, Italije, Španije i Holandije, zatražilo je hitnu koordinisanu akciju nakon što je tanker koji prevozi naftu ostao bez pogona i počeo nekontrolisano da pluta u evropskim vodama.",

  "Prema dostupnim informacijama, do gubitka pogona došlo je usled tehničkog kvara. Brod trenutno nije u stanju da menja pravac kretanja, dok vremenski uslovi dodatno otežavaju pokušaje da se situacija stavi pod kontrolu.",

  "Najveći rizik predstavlja mogućnost izlivanja nafte, što bi moglo imati ozbiljne posledice po morski ekosistem i obalne regione. Zbog toga su nadležne službe u pripravnosti i razmatraju različite scenarije intervencije.",

  "Među opcijama koje se razmatraju nalaze se tegljenje tankera ka bezbednoj zoni i hitna tehnička stabilizacija na otvorenom moru. Operacija nosi visok rizik zbog stanja broda i nepovoljnih uslova.",

  "Evropski lideri upozoravaju da je potrebno brzo i koordinisano delovanje kako bi se izbegla potencijalna ekološka šteta većih razmera.",
];

export default function TankerBezPogona() {
  return (
    <ArticleTemplate
      path="/geopolitika/tanker-bez-pogona"
      sectionLabel="Geopolitika"
      title="EVROPA U UTRCI SA VREMENOM: tanker bez pogona preti ekološkom katastrofom"
      dateLabel="18. MART 2026."
      deck="Tanker bez pogona koji prevozi naftu nekontrolisano pluta u evropskim vodama, dok evropski lideri upozoravaju na rizik ekološke katastrofe i traže hitnu koordinisanu reakciju."
      imageSrc="/news/tanker.jpg"
      imageAlt="Tanker bez pogona u evropskim vodama"
      imageCredit="Vizuel: Novi Talas (AI)"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
