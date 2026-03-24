import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Prema podacima iz najnovijeg izveštaja, 2025. godina bila je među najtoplijima u istoriji merenja, dok su poslednje tri godine zabeležene kao tri najtoplije do sada. Prosečna globalna temperatura približila se granici od 1,5 stepeni iznad predindustrijskog nivoa.",
  "U izveštaju se navodi da se posledice više ne ogledaju samo u statistici, već u sve učestalijim ekstremnim vremenskim pojavama, uključujući toplotne talase, obilne padavine i klimatske poremećaje koji direktno utiču na svakodnevni život i ekonomiju.",
  "Ovi podaci dodatno pojačavaju pritisak na države da ubrzaju klimatske politike, ali i otvaraju pitanje da li trenutne mere mogu da prate tempo promena koje su već u toku.",
];

export default function NajtoplijaDecenijaPlanetaUn() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/najtoplija-decenija-planeta-un"
      sectionLabel="Naša planeta"
      title="UN potvrdio: planeta iza sebe ima najtopliju deceniju u istoriji merenja"
      dateLabel="24. MART 2026."
      deck="Svetska meteorološka organizacija Ujedinjenih nacija potvrdila je da je period od 2015. do 2025. bio najtopliji otkad se vodi moderna evidencija o temperaturama."
      imageSrc="/news/world-heat.jpg"
      imageAlt="Zemlja sa tankom crvenom linijom koja simbolizuje rast globalne temperature"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
