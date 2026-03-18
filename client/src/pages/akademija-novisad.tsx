import ArticleTemplate from "@/components/ArticleTemplate";

export default function AkademijaNovisad() {
  return (
    <ArticleTemplate
      path="/srbija/akademija-novisad"
      sectionLabel="Srbija"
      title="Grad odlučuje, studenti na ulici: Akademiji umetnosti preti gubitak prostora"
      dateLabel="18. MART 2026."
      deck="Odbornici odlučuju o oduzimanju prostora Akademiji umetnosti u Novom Sadu, dok studenti i profesori protestuju i upozoravaju na posledice."
      imageSrc="/news/akademija-novisad.jpg"
      imageAlt="Akademija umetnosti u Novom Sadu — studenti na ulici"
      paragraphs={[
        "Skupština grada Novog Sada odlučivaće 18. marta o predlogu da se Akademiji umetnosti oduzmu dva prostora — galerija na Bulevaru Mihajla Pupina i atelje na Bulevaru despota Stefana, ukupne površine veće od 500 kvadratnih metara.",
        "Gradska uprava navodi da se prostori ne koriste u skladu sa njihovom namenom, dok sa Akademije poručuju da se u njima odvija nastava, umetnički rad i javni programi, uključujući više desetina izložbi u prethodnim godinama.",
        "Studenti i profesori organizovali su javni čas pod sloganom \u201ENe damo vam Akademiju\u201D i najavili protest ispred Skupštine grada na dan sednice.",
        "Dodatne tenzije izazvala je odluka da dekanu Akademije umetnosti ne bude omogućeno obraćanje odbornicima.",
        "Akademija upozorava da bi oduzimanje prostora bez trajnog rešenja ozbiljno ugrozilo njen rad.",
        "Kada studenti drže nastavu na ulici, a predstavnicima institucije nije omogućeno da govore u prostoru u kojem se odlučuje o njihovoj sudbini, problem prestaje da bude administrativni.",
        "Postaje politički.",
        "Da li umetnost u ovom društvu ima prostor ili mora da ga brani?",
      ]}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
