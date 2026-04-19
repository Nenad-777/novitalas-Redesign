import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/bulgaria-elections.jpg";

const PARAGRAPHS = [
  "Prema izlaznim anketama, aktuelni predsednik Bugarske, Rumen Radev, ostvario je značajnu prednost na izborima, potvrđujući snažnu podršku biračkog tela.",
  "Radev, koji je u više navrata zauzimao stavove bliže Moskvi nego većina evropskih lidera, suočava se sa protivkandidatima koji zagovaraju jasnije usklađivanje sa politikama Evropske unije i NATO-a.",
  "Ovakav rezultat otvara pitanje daljeg spoljnopolitičkog pravca Bugarske, posebno u kontekstu odnosa prema Rusiji, energetskim politikama i bezbednosnim pitanjima u regionu.",
  "Iako zvanični rezultati još nisu potvrđeni, već sada je jasno da izbori u Bugarskoj prevazilaze unutrašnji politički okvir i postaju deo šire geopolitičke slike u jugoistočnoj Evropi.",
];

export default function BugarskaNaRaskrsniciRumenRadevVodiPremaIzlaznimAnketama() {
  return (
    <ArticleTemplate
      path="/geopolitika/bugarska-na-raskrsnici-rumen-radev-vodi-prema-izlaznim-anketama"
      sectionLabel="Geopolitika"
      title="Bugarska na raskrsnici: Rumen Radev vodi prema izlaznim anketama"
      dateLabel="19. APRIL 2026."
      deck="Rezultati ukazuju na moguće pomeranje spoljnopolitičkog pravca zemlje u trenutku pojačanih tenzija između Zapada i Rusije."
      imageSrc={IMAGE_SRC}
      imageAlt="Predsednički izbori u Bugarskoj"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
