/*
 * Meloni priznala poraz: Italijani odbacili reformu pravosuđa — GEOPOLITIKA
 * Date: 24. MART 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/meloni-referendum.jpg";

const PARAGRAPHS = [
  "Italijanski birači odbacili su predložene reforme pravosudnog sistema na referendumu, što predstavlja ozbiljan politički udarac za premijerku Giorgiu Meloni.",

  "Prema rezultatima glasanja, većina građana izjasnila se protiv promena koje su, prema obrazloženju vlade, imale za cilj unapređenje efikasnosti i odgovornosti u pravosuđu. Kritičari su upozoravali da bi reforme mogle da oslabe nezavisnost sudstva i povećaju politički uticaj na pravosudne institucije.",

  "Nakon objavljivanja rezultata, Meloni je priznala poraz i poručila da će vlada poštovati volju birača.",

  "Ishod referenduma otvara pitanje stabilnosti reformskog kursa vlade i odnosa između izvršne vlasti i pravosuđa u Italiji, ali i šire u evropskom političkom prostoru.",

  "Rezultat pokazuje da institucionalne reforme, naročito one koje se tiču pravosuđa, sve češće nailaze na direktan otpor građana, posebno kada postoji sumnja u narušavanje ravnoteže između vlasti i nezavisnih institucija.",
];

export default function MeloniReferendumItalija() {
  return (
    <ArticleTemplate
      path="/geopolitika/meloni-referendum-italija"
      sectionLabel="Geopolitika"
      title="Meloni priznala poraz: Italijani odbacili reformu pravosuđa"
      dateLabel="24. MART 2026."
      deck="Italijani su na referendumu odbacili reformu pravosuđa, a premijerka Giorgia Meloni priznala poraz."
      imageSrc={IMAGE_SRC}
      imageAlt="Giorgia Meloni tokom obraćanja nakon referenduma o reformi pravosuđa u Italiji"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
