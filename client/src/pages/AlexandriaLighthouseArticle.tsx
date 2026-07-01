import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Jedan od najpoznatijih simbola antičkog sveta, Aleksandrijski svetionik, ponovo privlači pažnju naučnika nakon što su arheolozi iz Sredozemnog mora izvadili 22 monumentalna kamena bloka koji su vekovima ležali na morskom dnu. Kako prenose međunarodni mediji, novi nalazi deo su projekta PHAROS, čiji je cilj da omogući do sada najprecizniju digitalnu rekonstrukciju jednog od Sedam svetskih čuda antičkog sveta.",
  "Među izvučenim elementima nalaze se delovi monumentalnih portala, masivni kameni blokovi i arhitektonski ukrasi, od kojih pojedini teže više desetina tona. Njihovo detaljno skeniranje i poređenje sa istorijskim zapisima trebalo bi da pomogne istraživačima da razumeju kako je građevina zaista izgledala pre nego što su je između 10. i 14. veka razorili snažni zemljotresi.",
  "Aleksandrijski svetionik podignut je početkom 3. veka pre nove ere na ostrvu Faros, ispred obale Aleksandrije. Sa procenjenom visinom između 100 i 120 metara bio je među najvišim građevinama svog vremena i vekovima je predstavljao orijentir brodovima koji su uplovljavali u jednu od najvažnijih luka Mediterana. Toliki je bio njegov uticaj da je naziv ostrva Faros u mnogim jezicima postao sinonim za svetionik.",
  "Iako ostaci građevine nisu nepoznati arheolozima, najnovija istraživanja predstavljaju važan iskorak. Zahvaljujući savremenim metodama podvodne arheologije, fotogrametrije i trodimenzionalnog modelovanja, naučnici prvi put imaju priliku da gotovo kamen po kamen rekonstruišu izgled građevine koja je više od hiljadu godina predstavljala jedno od najvećih dostignuća antičke arhitekture.",
  "Možda upravo u tome leži najveća vrednost ovog otkrića. Ono ne vraća Aleksandrijski svetionik na obalu Mediterana, ali vraća njegovo mesto u kolektivnom sećanju čovečanstva. Tehnologija danas omogućava da jedno od najveličanstvenijih dela antičkog sveta ponovo „izroni“ – ne kao ruševina, već kao priča koja povezuje istoriju, nauku i budućnost.",
];

export default function AlexandriaLighthouseArticle() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/jedno-od-sedam-svetskih-cuda-ponovo-otkriva-svoje-tajne-aleksandrijski-svetionik-izrasta-iz-mora"
      sectionLabel="Naša planeta"
      title="Jedno od sedam svetskih čuda ponovo otkriva svoje tajne: Aleksandrijski svetionik izranja iz mora"
      dateLabel="1. jul 2026."
      deck="Arheolozi su iz Sredozemnog mora izvadili monumentalne kamene blokove nekadašnjeg Aleksandrijskog svetionika, otvarajući put ka njegovoj najpreciznijoj digitalnoj rekonstrukciji do sada."
      imageSrc="/news/alexandria-lighthouse-underwater-ruins.jpg"
      imageAlt="Conceptual underwater illustration inspired by the archaeological remains of the Lighthouse of Alexandria"
      imageCredit="Konceptualna ilustracija zasnovana na arheološkim istraživanjima / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
