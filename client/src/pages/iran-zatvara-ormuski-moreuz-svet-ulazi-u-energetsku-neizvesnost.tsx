import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/closed-again.jpg";

const PARAGRAPHS = [
  "Iran je ponovo uspostavio strogu kontrolu nad Ormuskim moreuzom, jednim od najvažnijih svetskih energetskih prolaza, uz obrazloženje da Sjedinjene Američke Države nastavljaju blokadu iranskih luka.",
  "Prema navodima zvaničnika, prolazak brodova kroz moreuz više nije slobodan, već podložan vojnoj kontroli i odobrenju iranskih snaga. Takav potez direktno utiče na međunarodni pomorski saobraćaj i stabilnost globalnog energetskog tržišta.",
  "Ovaj razvoj događaja dolazi u trenutku pojačanih tenzija između Vašingtona i Teherana, u kojima obe strane sve otvorenije koriste kontrolu nad ključnim resursima i pravcima kao sredstvo političkog pritiska.",
  "S obzirom na to da kroz Ormuski moreuz prolazi oko petine svetske trgovine naftom, svako ograničenje saobraćaja ima neposredne posledice po globalne tokove energije i bezbednost pomorskih ruta.",
];

export default function IranZatvaraOrmuskiMoreuzSvetUlaziUEnergetskuNeizvesnost() {
  return (
    <ArticleTemplate
      path="/geopolitika/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost"
      sectionLabel="Geopolitika"
      title="Iran zatvara Ormuski moreuz: svet ulazi u energetsku neizvesnost"
      dateLabel="18. APRIL 2026."
      deck="Kontrola nad ključnim pomorskim pravcem postaje instrument političkog pritiska u trenutku globalnih tenzija."
      imageSrc={IMAGE_SRC}
      imageAlt="Ormuski moreuz pod pojačanom vojnom kontrolom"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
