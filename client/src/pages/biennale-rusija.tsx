/*
 * EU preti povlačenjem finansiranja Venecijanskog bijenala — Geopolitika (single article)
 * Date: 13. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

const PARAGRAPHS = [
  "Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju. Rasprava se otvorila nakon spekulacija da bi ruski umetnici i paviljon mogli ponovo biti uključeni u naredno izdanje događaja.",

  "Venecijansko bijenale, jedna od najvažnijih svetskih kulturnih smotri, od početka rata u Ukrajini funkcioniše bez zvaničnog ruskog paviljona. Odluka je tada doneta kao politički i simbolički odgovor na rat, ali pitanje umetničke autonomije i političkih sankcija ponovo je otvorilo raspravu u evropskim kulturnim krugovima.",

  "Prema navodima evropskih izvora, deo zvaničnika smatra da bi povratak Rusije mogao biti protumačen kao slabljenje političkog pritiska na Moskvu. S druge strane, pojedini kustosi i umetnici upozoravaju da umetnost ne bi trebalo trajno da bude taoc političkih sukoba.",

  "Venecijansko bijenale već više od jednog veka predstavlja prostor susreta umetnika, kustosa i publike iz celog sveta, ali u savremenim geopolitičkim okolnostima sve češće postaje i mesto gde se reflektuju globalne političke tenzije.",

  "Odluka o eventualnom povratku Rusije još uvek nije doneta, ali debata koja se vodi pokazuje koliko su danas kultura i geopolitika međusobno isprepletene.",
];

export default function BiennaleRusija() {
  useSEO("/geopolitika/biennale-rusija");
  return (
    <ArticleTemplate
      sectionLabel="Geopolitika"
      title="EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije"
      dateLabel="13. MART 2026."
      deck="Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju."
      imageSrc="/news/biennale-venice.jpg"
      imageAlt="Venecijansko bijenale — povratak Rusije"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
