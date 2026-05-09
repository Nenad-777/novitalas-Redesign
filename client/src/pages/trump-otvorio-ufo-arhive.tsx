import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Administracija Donalda Trampa objavila je prvu grupu ranije poverljivih američkih dokumenata o UFO i UAP pojavama, u okviru najavljene politike veće transparentnosti prema temi koja decenijama izaziva veliko interesovanje javnosti. Prema Reutersu, objavljeno je oko 160 dokumenata, uključujući nove snimke, fotografije, arhivske izveštaje, zapise o letećim diskovima iz 1947. godine, materijale iz misija Apollo 12 i Apollo 17 i transkripte astronauta koji opisuju neobjašnjene pojave u svemiru.",
  "Objavljivanje dokumenata ispunjava Trampovu najavu iz februara, kada je federalnim agencijama naložio da identifikuju i objave materijale povezane sa alien and extraterrestrial life, UFO i UAP pojavama. Washington Post navodi da su dokumenti dostavljeni iz više institucija, uključujući Ministarstvo odbrane, FBI, NASA i druge agencije, i da su dostupni javnosti preko posebnog vladinog portala, uz najavu da će dodatni materijal biti objavljen kasnije.",
  "Najvažnije je, ipak, ono čega u dokumentima nema. Prva objava ne donosi dokaz o vanzemaljskom životu, niti potvrdu da su zabeležene pojave proizvod tehnologije koja ne potiče sa Zemlje. Axios navodi da u objavljenim fajlovima nema konačnog dokaza o letećim tanjirima, dok raniji izveštaji Pentagona nisu potvrdili da je neka američka istraga UAP slučajeva dokazala postojanje vanzemaljske tehnologije.",
  "Vrednost ove objave možda zato nije u razrešenju misterije, već u priznanju da američka država decenijama sistematski beleži pojave koje ne ume uvek da objasni. UFO arhive ne potvrđuju mitove, ali potvrđuju jednu ozbiljniju činjenicu: između državne tajne, vojne bezbednosti, naučne radoznalosti i javne mašte postoji prostor koji će i posle ove objave ostati otvoren.",
];

export default function TrumpOtvorioUfoArhive() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/trump-otvorio-ufo-arhive"
      sectionLabel="NAŠA PLANETA"
      title="Trump otvorio UFO arhive: više pitanja nego odgovora"
      dateLabel="8. MAJ 2026."
      authorLabel="Novi Talas"
      deck="Američka administracija objavila je prvu grupu ranije poverljivih dokumenata o neidentifikovanim anomalnim pojavama. Materijal uključuje snimke, fotografije i arhivske izveštaje, ali ne donosi potvrdu da je reč o vanzemaljskoj tehnologiji."
      imageSrc="/news/ufo-files.jpg"
      imageAlt="Ilustracija UFO arhiva Trumpove administracije"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
