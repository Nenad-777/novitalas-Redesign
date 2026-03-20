import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/ai-superapp.jpg";

const PARAGRAPHS = [
  "OpenAI planira razvoj jedinstvene desktop aplikacije koja bi objedinjavala ChatGPT, programerski alat Codex i AI browser u jedan integrisani sistem.",
  "Prema dostupnim informacijama, cilj ovog projekta je pojednostavljenje korisničkog iskustva i objedinjavanje funkcionalnosti koje su do sada bile raspoređene kroz više odvojenih alata.",
  "Nova aplikacija trebalo bi da omogući korisnicima da u okviru jednog okruženja komuniciraju sa veštačkom inteligencijom, pretražuju internet, pišu i analiziraju kod, kao i automatizuju različite digitalne zadatke.",
  "Posebno mesto u ovom konceptu ima Codex, sistem namenjen radu sa programskim jezicima, dok bi integrisani browser omogućio direktnu interakciju sa internet sadržajem putem AI agenata.",
  "Ovaj potez dolazi u trenutku intenzivne konkurencije među tehnološkim kompanijama koje razvijaju napredne AI sisteme, sa sve većim fokusom na objedinjavanje funkcija i stvaranje centralizovanih platformi.",
  "Ukoliko projekat bude realizovan, OpenAI bi mogao da napravi korak ka novom modelu korišćenja računara, u kojem veštačka inteligencija postaje glavni interfejs između korisnika i digitalnog okruženja.",
];

export default function AiSuperaplikacija() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/ai-superaplikacija"
      sectionLabel="Naša planeta"
      title="OpenAI razvija „superaplikaciju" koja objedinjuje ChatGPT, Codex i browser"
      dateLabel="20. MART 2026."
      deck="OpenAI razvija novu desktop superaplikaciju koja objedinjuje ChatGPT, Codex i browser u jedinstveni AI sistem."
      imageSrc={IMAGE_SRC}
      imageAlt="Minimalistički prikaz veštačke inteligencije kao centralnog sistema koji povezuje digitalne funkcije računara"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
