import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/spielberg-bw-final.jpg";

const PARAGRAPHS = [
  "Na CinemaCon događaju u Las Vegasu, Stiven Spilberg uputio je poruku filmskoj industriji da se mora preispitati oslanjanje na franšize i nastavke. Govoreći pred vodećim ljudima studija i distributerima, istakao je da publika sve više pokazuje zasićenje ponavljajućim narativima i da raste potreba za originalnim pričama.",
  "Njegova izjava dolazi u trenutku kada veliki studiji i dalje ulažu najveći deo budžeta u proverene formate, dok se originalni projekti ređe nalaze u centru bioskopske distribucije. Takav model smanjuje finansijski rizik, ali istovremeno ograničava prostor za nove ideje.",
  "Spilbergova poruka ukazuje na pritisak pod kojim se nalazi model proizvodnje u Holivudu. Predvidivost sadržaja počinje da utiče na interesovanje publike, što otvara prostor za povratak originalnim projektima kao strateškom, a ne samo umetničkom izboru.",
  "Promena u načinu na koji Holivud proizvodi i plasira priče ima širi uticaj. Kao jedan od ključnih izvora globalnog kulturnog uticaja, svaka promena u industriji direktno utiče na način na koji se oblikuju narativi koji dopiru do svetske publike.",
];

export default function SpilbergUpozoravaHolivudPublikaTraziOriginalneFilmove() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/spilberg-upozorava-holivud-publika-trazi-originalne-filmove"
      sectionLabel="Naša planeta"
      title="Spilberg upozorava Holivud: publika traži originalne filmove"
      dateLabel="16. APRIL 2026."
      deck="Stiven Spilberg poručio je na CinemaConu da Holivud mora da preispita oslanjanje na franšize i nastavke, jer publika sve više traži originalne priče."
      imageSrc={IMAGE_SRC}
      imageAlt="Stiven Spilberg na događaju CinemaCon"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
