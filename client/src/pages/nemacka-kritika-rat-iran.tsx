/*
 * Nemacka kritika rata protiv Irana — GEOPOLITIKA (single article)
 * Date: 24. MART 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/Frank-Walter Steinmeier.jpg";

const PARAGRAPHS = [
  "Predsednik Nemačke Frank-Valter Štajnmajer ocenio je da je rat protiv Irana katastrofalna greška i upozorio da predstavlja kršenje međunarodnog prava, u retkoj i direktnoj kritici američke politike.",

  "Štajnmajer je istakao da je diplomatsko rešenje moglo biti efikasnije u suočavanju sa iranskim nuklearnim programom, naglašavajući da vojna eskalacija dodatno destabilizuje region.",

  "Ova izjava dolazi u trenutku kada sukob između Sjedinjenih Država, Izraela i Irana ulazi u novu fazu, uz nastavak udara i neizvesnost oko mogućih pregovora.",

  "Upozorenja iz Berlina ukazuju na širi problem: međunarodni poredak nalazi se pod sve većim pritiskom, dok se razlike unutar zapadnih saveznika sve jasnije ispoljavaju.",

  "Ovakav ton iz jedne od ključnih evropskih država sugeriše da se, paralelno sa sukobom na terenu, otvara i politički front unutar savezništava koja su do sada delovala jedinstveno.",
];

export default function NemackaKritikaRatIran() {
  return (
    <ArticleTemplate
      path="/geopolitika/nemacka-kritika-rat-iran"
      sectionLabel="Geopolitika"
      title={`Nemačka oštro kritikovala rat: \u201EKatastrofalna greška\u201C i kršenje međunarodnog prava`}
      dateLabel="24. MART 2026."
      deck="Nemački predsednik ocenio rat protiv Irana kao katastrofalnu grešku i upozorio na kršenje međunarodnog prava."
      imageSrc={IMAGE_SRC}
      imageAlt="Frank-Valter Štajnmajer tokom obraćanja povodom rata sa Iranom"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
