/*
 * Rat u Iranu pokrenuo masovno raseljavanje — Geopolitika (single article)
 * Date: 11. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

const PARAGRAPHS = [
  "Prema najnovijem izveštaju Agencije Ujedinjenih nacija za izbeglice (UNHCR), ratna dešavanja u Iranu mogla bi dovesti do raseljavanja čak 3,2 miliona ljudi, što predstavlja jednu od najvećih humanitarnih kriza u regionu poslednjih godina.",

  "Hiljade porodica već su napustile svoje domove u područjima pogođenim borbama i bombardovanjem. Mnogi se kreću ka sigurnijim delovima zemlje, dok drugi pokušavaju da pronađu izlaz ka susednim državama.",

  "Humanitarne organizacije upozoravaju da se kapaciteti privremenih kampova brzo pune. Nedostatak hrane, medicinske pomoći i osnovne infrastrukture postaje sve ozbiljniji problem dok broj raseljenih raste iz dana u dan.",

  "Diplomatski krugovi upozoravaju da bi dalja eskalacija sukoba mogla proizvesti regionalni talas migracija, sa posledicama koje bi mogle zahvatiti čitav Bliski istok i šire područje Evrope.",
];

export default function RefugeesIranUn() {
  useSEO("/geopolitika/refugees-iran-un");
  return (
    <ArticleTemplate
      sectionLabel="Geopolitika"
      title="Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica"
      dateLabel="11. MART 2026."
      deck="Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove."
      imageSrc="/refugees-iran-un.jpg"
      imageAlt="Izbeglice iz Irana — humanitarna kriza"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
