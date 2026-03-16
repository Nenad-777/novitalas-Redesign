/*
 * Svetska kriza sve ozbiljnija — Geopolitika (single article)
 * Date: 16. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

const PARAGRAPHS = [
  "Kriza oko Ormuskog moreuza dodatno se produbljuje dok se rat između SAD, Izraela i Irana nastavlja treću nedelju. Ovaj pomorski prolaz između Persijskog zaliva i Omanskog zaliva nalazi se u središtu globalne energetske krize. Kroz njega prolazi oko 20% svetske trgovine naftom, pa svaka blokada ima direktan uticaj na globalna tržišta.",

  "Prema izveštajima međunarodnih agencija, prvi tankeri ponovo su prošli kroz Ormuski moreuz, što je odmah uticalo na cenu nafte koja je kratkoročno počela da pada nakon prolaska nekoliko brodova.",

  "Istovremeno, Sjedinjene Američke Države pokušavaju da formiraju međunarodnu koaliciju za zaštitu tankera i održavanje pomorskog saobraćaja kroz moreuz. Međutim, pojedini saveznici pokazali su rezervu. Japan i Australija saopštili su da ne planiraju da šalju ratne brodove u region, uprkos pozivu Vašingtona.",

  "Ni evropske zemlje nisu spremne za direktno vojno angažovanje. Evropski lideri odbacili su ideju da se evropske pomorske misije prošire na Ormuski moreuz, iako se o toj mogućnosti raspravlja na sastancima ministara spoljnih poslova EU.",

  "U međuvremenu, ratna dešavanja dodatno destabilizuju region. Iran je optužen za napade na komercijalne brodove i infrastrukturu u Zalivu, dok su SAD i Izrael izveli velike vazdušne napade na iranske vojne ciljeve.",

  "Posledice se već osećaju na svetskim tržištima. Cena nafte ponovo je prešla 100 dolara po barelu, dok analitičari upozoravaju da bi dugotrajnija blokada moreuza mogla izazvati najveći poremećaj u snabdevanju energijom još od naftnih kriza sedamdesetih godina.",
];

const INFO_BOX = {
  title: "Ključne činjenice o Ormuskom moreuzu",
  items: [
    "kroz moreuz prolazi oko 20% svetske trgovine naftom",
    "dnevno se transportuje između 18 i 20 miliona barela nafte",
    "prolaz je širok oko 34 km na najužem delu",
    "svaka blokada može momentalno izazvati skok cena energije u svetu",
  ],
};

export default function SvetskaKrizaSveOzbiljnija() {
  useSEO("/geopolitika/svetska-kriza-sve-ozbiljnija");
  return (
    <ArticleTemplate
      sectionLabel="Geopolitika"
      title="SVETSKA KRIZA SVE OZBILJNIJA"
      dateLabel="16. MART 2026."
      deck="Zašto je Ormuski moreuz tako važan"
      imageSrc="/news/brodovi-kriza.jpg"
      imageAlt="Brodovi u Ormuskom moreuzu — globalna energetska kriza"
      paragraphs={PARAGRAPHS}
      infoBox={INFO_BOX}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
