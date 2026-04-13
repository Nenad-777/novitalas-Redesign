import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/primirje-vaskrs.jpg";

const PARAGRAPHS = [
  "Rusija i Ukrajina dogovorile su privremeni prekid vatre povodom pravoslavnog Uskrsa, jednog od najvažnijih verskih praznika u pravoslavnom svetu.",
  "Prema dostupnim informacijama, primirje je vremenski ograničeno i odnosi se na period praznika. Ruska strana saopštila je da se obustava borbenih dejstava odnosi na definisani vremenski okvir, dok je ukrajinska strana navela da će prekid vatre poštovati ukoliko se on bude primenjivao i sa druge strane.",
  "Dogovor dolazi u trenutku nastavka intenzivnih borbi duž fronta, zbog čega se ovaj potez za sada posmatra kao privremena i ograničena mera vezana za verski kalendar.",
  "Slični pokušaji prazničnih primirja beleženi su i ranije tokom sukoba, ali su u prethodnim slučajevima obe strane međusobno optuživale jedna drugu za kršenje dogovora.",
  "Za sada nema potvrde da bi ovaj prekid vatre mogao prerasti u šire političke ili vojne pregovore, a dalji razvoj situacije zavisiće od stanja na terenu tokom trajanja primirja.",
];

export default function PrimirjeVaskrs() {
  return (
    <ArticleTemplate
      path="/geopolitika/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs"
      sectionLabel="Geopolitika"
      title="Rusija i Ukrajina dogovorile privremeno primirje za pravoslavni Uskrs"
      dateLabel="11. APRIL 2026."
      deck="Rusija i Ukrajina dogovorile su privremeni prekid vatre povodom pravoslavnog Uskrsa. Primirje je vremenski ograničeno i vezano za trajanje praznika, uz obostrane rezerve o njegovom sprovođenju na terenu."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija uskršnjeg primirja u ratu između Rusije i Ukrajine."
      imageCredit="Novi Talas / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
