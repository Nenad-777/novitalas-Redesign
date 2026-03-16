/*
 * SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma - GEOPOLITIKA
 * Date: 10. MART 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Prema izveštajima više zapadnih medija, američki bezbednosni krugovi razmatraju mogućnost ograničene vojne operacije čiji bi cilj bio preuzimanje iranskih zaliha visoko obogaćenog uranijuma.",

  "Takav scenario razmatra se u okviru šire strategije sprečavanja ubrzanja iranskog nuklearnog programa. Prema navodima analitičara, operacija bi mogla imati karakter specijalne misije usmerene na kontrolu ključnih nuklearnih materijala.",

  "Međunarodna agencija za atomsku energiju (IAEA) ranije je saopštila da Iran raspolaže značajnim količinama uranijuma obogaćenog na nivo blizak onome koji je potreban za proizvodnju nuklearnog oružja.",

  "U Vašingtonu za sada nema zvanične potvrde da se takva operacija zaista priprema. Međutim, sama činjenica da se ovakav scenario razmatra pokazuje koliko su tenzije oko iranskog nuklearnog programa porasle poslednjih meseci.",

  "Analitičari upozoravaju da bi svaka vojna operacija usmerena na iranska nuklearna postrojenja nosila ozbiljan rizik regionalne eskalacije i destabilizacije Bliskog istoka.",
];

export default function SadSpecijalnaOperacijaIranUranijum() {

  return (
    <ArticleTemplate
      path="/geopolitika/sad-specijalna-operacija-iran-uranijum"
      sectionLabel="Geopolitika"
      title="SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma"
      dateLabel="10. MART 2026."
      imageSrc="/us-special-forces-desert.jpg"
      imageAlt="Američke specijalne snage u pustinjskoj operaciji"
      imageCredit="Photo: Spc. Jonathan Bryson / U.S. Army (illustrative)"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
