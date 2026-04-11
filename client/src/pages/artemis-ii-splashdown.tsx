import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/orion-earth-view.jpg";

const PARAGRAPHS = [
  "Misija Artemis II uspešno je završena bezbednim povratkom letelice Orion na Zemlju, nakon desetodnevnog putovanja kroz duboki svemir i preleta oko Meseca.",
  "Kapsula je sletela u Tihi okean kod obale Kalifornije, nakon ulaska u atmosferu velikom brzinom i prolaska kroz kritičnu fazu zagrevanja i komunikacionog prekida.",
  "Tokom misije, posada je dostigla rekordnu udaljenost od Zemlje, veću nego u bilo kojoj prethodnoj misiji sa ljudskom posadom, nadmašivši dostignuća programa Apollo.",
  "Artemis II predstavlja prvu misiju sa ljudskom posadom koja je obišla Mesec još od 1972. godine i ključni je korak ka narednim fazama NASA programa.",
  "Misija je protekla stabilno, uz testiranje ključnih sistema letelice Orion, uključujući podršku životu i zaštitu tokom povratka kroz atmosferu.",
];

export default function ArtemisIISplashdown() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/artemis-ii-splashdown"
      sectionLabel="Naša planeta"
      title="Artemis II uspešno okončan: Orion se vratio na Zemlju nakon istorijskog leta oko Meseca"
      dateLabel="11. APRIL 2026."
      deck="Kapsula sa četvoročlanom posadom bezbedno je sletela u Tihi okean, završivši prvu ljudsku misiju ka Mesecu posle više od 50 godina."
      imageSrc={IMAGE_SRC}
      imageAlt="Letelica Orion tokom povratka na Zemlju — misija Artemis II"
      imageCredit="Foto: NASA / Artemis II"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
