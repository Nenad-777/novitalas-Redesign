import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/mertz-ukraine.jpg";

const PARAGRAPHS = [
  "Predlog nemačkog kancelara Friedricha Merza da Ukrajina dobije status pridruženog člana Evropske unije bez punih glasačkih prava pokazuje da se u evropskim institucijama sve ozbiljnije razmatraju alternativni modeli proširenja Evropske unije. Prema ideji koja dolazi iz Berlina, Kijev bi bio uključen u deo političkih i ekonomskih procesa EU, ali bez mogućnosti ravnopravnog odlučivanja o ključnim pitanjima evropske politike.",
  "Ovakav model predstavlja pokušaj da se istovremeno očuva snažna politička podrška Ukrajini i izbegnu duboke institucionalne promene unutar same Evropske unije. Puno članstvo Ukrajine otvorilo bi pitanja raspodele evropskih fondova, poljoprivredne politike, bezbednosne strategije i odnosa političke moći između država članica.",
  "Predlog iz Berlina pokazuje da Evropska unija ulazi u period redefinisanja sopstvene političke arhitekture. Umesto dosadašnjeg modela potpune ravnopravnosti članica, sve češće se govori o „Evropi više brzina”, odnosno sistemu različitih nivoa integracije i političkog uticaja.",
  "U suštini, Evropa pokušava da pronađe način da proširi svoj geopolitički prostor bez ugrožavanja unutrašnje stabilnosti sistema odlučivanja. Upravo zato pitanje Ukrajine više nije samo tema proširenja, već signal mnogo šire transformacije same Evropske unije.",
];

export default function EvropaTraziNovuFormuluZaUkrajinu() {
  return (
    <ArticleTemplate
      path="/geopolitika/evropa-trazi-novu-formulu-za-ukrajinu"
      sectionLabel="GEOPOLITIKA"
      title="Evropa traži novu formulu za Ukrajinu"
      dateLabel="22. maj 2026."
      authorLabel="Novi Talas"
      deck="Berlin predlaže model pridruženog članstva bez prava glasa, dok Evropska unija pokušava da pronađe ravnotežu između političke podrške Kijevu i straha od dubokih unutrašnjih promena."
      imageSrc={IMAGE_SRC}
      imageAlt="Evropska unija i Ukrajina u kontekstu predloga o pridruženom članstvu"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
