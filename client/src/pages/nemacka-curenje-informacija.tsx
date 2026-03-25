/*
 * Nemačka ograničava pristup poverljivim podacima
 * Obaveštajni izvori — 25. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/germany-intelligence.jpg";

const PARAGRAPHS = [
  "Nemačke vlasti počele su da ograničavaju pristup poverljivim informacijama čak i pojedinim poslanicima, usled zabrinutosti da bi osetljivi podaci mogli da procure ka stranim akterima.",

  "Prema navodima zapadnih medija, mere su uvedene zbog sumnje da bi određeni politički krugovi mogli biti podložni uticaju ili povezani sa interesima Rusije i Kine.",

  "Ograničenja se odnose na pristup bezbednosnim i obaveštajnim podacima, uključujući informacije koje su ranije bile dostupne širem krugu zvaničnika unutar institucija.",

  "Nemački zvaničnici nisu detaljno komentarisali konkretne slučajeve, ali su potvrdili da postoji povećana zabrinutost zbog mogućih pokušaja infiltracije i špijunaže unutar političkog sistema.",

  "Ovakve mere ukazuju na rastuće bezbednosne rizike u evropskom političkom prostoru, gde se pitanje zaštite informacija sve više povezuje sa unutrašnjim političkim procesima.",
];

export default function NemackaCurenjeInformacija() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/nemacka-curenje-informacija"
      sectionLabel="Obaveštajni izvori"
      title="Nemačka ograničava pristup poverljivim podacima zbog straha od curenja"
      dateLabel="25. MART 2026."
      deck="Nemačka ograničava pristup poverljivim podacima zbog straha od curenja ka stranim akterima i moguće infiltracije unutar sistema."
      imageSrc={IMAGE_SRC}
      imageAlt="Poverljiva fascikla na stolu u nemačkom parlamentu"
      imageCredit="Foto: ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
