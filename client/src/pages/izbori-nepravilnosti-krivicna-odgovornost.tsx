import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/izbori-odgovornost.jpg";

const PARAGRAPHS = [
  "Izborni dan u Srbiji obeležen je prijavama nepravilnosti na više biračkih mesta, uz upozorenja da pojedini postupci mogu predstavljati krivična dela za koja zakon predviđa odgovornost.",
  "Prema izveštajima posmatrača i nezavisnih organizacija, među prijavljenim problemima nalaze se pritisci na birače, narušavanje tajnosti glasanja, kao i različiti oblici uticaja na izborni proces u blizini biračkih mesta.",
  "Stručnjaci za izborno pravo ukazuju da se najveći deo spornih situacija odvija upravo na nivou biračkih mesta, gde kontrola zakonitosti zavisi od rada biračkih odbora, prisustva posmatrača i postupanja nadležnih organa.",
  "Prema važećem zakonodavstvu Republike Srbije, zloupotreba izbornog prava, falsifikovanje rezultata, sprečavanje slobodnog izjašnjavanja birača i slični postupci mogu predstavljati krivična dela za koja su predviđene novčane kazne i kazne zatvora.",
  "Odgovornost, u zavisnosti od konkretnog slučaja, može obuhvatiti više aktera, od članova biračkih odbora i drugih učesnika u izbornom procesu, do lica koja organizuju ili sprovode nedozvoljene radnje. U slučaju nezakonitog postupanja ili propuštanja dužnosti, odgovornost mogu snositi i službena lica koja su zadužena za obezbeđivanje reda i zakonitosti tokom izbornog dana.",
];

export default function IzboriNepravilnostiKrivicnaOdgovornost() {
  return (
    <ArticleTemplate
      path="/srbija/izbori-nepravilnosti-krivicna-odgovornost"
      sectionLabel="Srbija"
      title="Nepravilnosti na izborima: zakon predviđa krivičnu odgovornost za manipulacije"
      dateLabel="29. MART 2026."
      deck="Prijavljene nepravilnosti tokom izbora u Srbiji otvaraju pitanje krivične odgovornosti za manipulacije i zloupotrebe izbornog procesa."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija biračkog mesta u Srbiji tokom izbornog dana"
      imageCredit="Foto: ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
