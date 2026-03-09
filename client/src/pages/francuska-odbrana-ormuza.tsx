/*
 * Francuska odbrana Ormuza - GEOPOLITIKA (single article)
 * Date: 9. MART 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

const PARAGRAPHS = [
  "Francuski predsednik Emanuel Makron izjavio je da Francuska i njeni saveznici razmatraju mogućnost formiranja odbrambene pomorske misije čiji bi cilj bio obezbeđivanje slobodne plovidbe kroz Ormuski moreuz, jedan od najvažnijih energetskih prolaza na svetu.",

  "Makron je naglasio da bi takva operacija imala isključivo defanzivni karakter i bila usmerena na zaštitu međunarodnog pomorskog saobraćaja u regionu Persijskog zaliva, kroz koji prolazi značajan deo globalne trgovine naftom i gasom.",

  "Ormuski moreuz predstavlja ključnu tačku svetske energetike. Procene pokazuju da oko petine svetske trgovine naftom prolazi kroz ovaj uski pomorski koridor između Irana i Omana. Svako narušavanje bezbednosti u toj oblasti može imati trenutne posledice po globalno tržište energije.",

  "Makronova izjava dolazi u trenutku pojačanih napetosti na Bliskom istoku i sve češćih upozorenja zapadnih vlada da bi destabilizacija pomorskih ruta mogla izazvati ozbiljne poremećaje u globalnom snabdevanju energijom.",

  "Analitičari ocenjuju da bi eventualna evropska pomorska misija predstavljala značajan geopolitički signal, jer bi po prvi put evropske države u većoj meri preuzele bezbednosnu ulogu u jednom od najosetljivijih energetskih regiona sveta.",
];

export default function FrancuskaOdbranaOrmuza() {
  useSEO("/geopolitika/francuska-odbrana-ormuza");

  return (
    <ArticleTemplate
      sectionLabel="Geopolitika"
      title="Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza"
      dateLabel="9. MART 2026."
      imageSrc="/hormuz-strait-tankers.jpg"
      imageAlt="Tankeri u Ormuskom moreuzu"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
