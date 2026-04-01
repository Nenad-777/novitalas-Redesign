import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/ecb-frankfurt-inflation.jpg";

const PARAGRAPHS = [
  "Inflacija u evrozoni porasla je u martu na 2,5 odsto, premašivši cilj Evropske centralne banke od 2 odsto, usled rasta cena energije. Bazna inflacija ostala je relativno stabilna, ali ukupni pritisci ukazuju na nastavak nestabilnosti u energetskom sektoru.",
  "Ovaj rast dolazi u kontekstu pojačanih geopolitičkih tenzija koje utiču na cene energenata, što ograničava manevarski prostor monetarne politike. Evropska centralna banka suočava se sa izborom između suzbijanja inflacije i očuvanja ekonomskog rasta, u uslovima sve izraženijih spoljnih pritisaka.",
];

export default function InflacijaEvrozonaEcbMart() {
  return (
    <ArticleTemplate
      path="/geopolitika/inflacija-evrozona-ecb-mart"
      sectionLabel="Geopolitika"
      title="Inflacija u evrozoni ponovo iznad cilja Evropske centralne banke"
      dateLabel="1. APRIL 2026."
      deck="Rast cena energije pogurao inflaciju na 2,5 odsto, dok monetarne vlasti razmatraju sledeće korake"
      imageSrc={IMAGE_SRC}
      imageAlt="Sedište Evropske centralne banke u Frankfurtu, Nemačka"
      imageCredit="Sedište Evropske centralne banke u Frankfurtu, Nemačka. Vizual: Novi talas (AI generisano)"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
