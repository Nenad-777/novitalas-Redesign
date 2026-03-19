import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/nafta-kriza.jpg";

const PARAGRAPHS = [
  "Bliski istok ulazi u novu fazu sukoba, u kojoj energetska infrastruktura postaje direktna meta. Nakon udara na iranska postrojenja, Teheran je uzvratio napadima na ključne energetske objekte u zemljama Persijskog zaliva, uključujući Katar, Saudijsku Arabiju i Ujedinjene Arapske Emirate. Istovremeno, cena nafte naglo je porasla i približila se granici od 110 dolara po barelu, uz snažne oscilacije na globalnim tržištima. Pojedine zemlje regiona prijavljuju poremećaje u radu postrojenja i transportu, dok su energetske kompanije podigle nivo pripravnosti. U Evropi su se već pojavile prve reakcije — u Sloveniji su zabeležene restrikcije u snabdevanju gorivom, što dodatno pojačava osećaj širenja krize izvan regiona sukoba.",
  "Ono što ovu situaciju izdvaja od prethodnih eskalacija jeste promena prirode ciljeva. Dok su raniji sukobi bili usmereni pre svega na vojne objekte, sada se udari fokusiraju na infrastrukturu koja direktno utiče na globalnu ekonomiju. Energetski sistemi Zaliva predstavljaju jednu od ključnih arterija svetskog snabdevanja naftom i gasom, i svaki poremećaj u tom lancu trenutno se reflektuje na cene, logistiku i sigurnost snabdevanja širom sveta. Reakcija tržišta pokazuje koliko je sistem osetljiv — rast cena nafte nije samo ekonomski indikator, već signal da investitori i države očekuju dugotrajniju nestabilnost.",
  "Ova faza sukoba otvara i šire geopolitičko pitanje: da li svet ulazi u period u kojem će energija postati primarno oružje? Ako se napadi na infrastrukturu nastave, posledice neće ostati ograničene na Bliski istok. Evropa, već opterećena prethodnim energetskim krizama, može se ponovo naći pod pritiskom, dok bi globalna trgovina i industrija mogle pretrpeti nove udare. U tom kontekstu, trenutni događaji ne predstavljaju samo regionalnu eskalaciju, već potencijalni početak dugotrajnog energetskog konflikta sa globalnim dometom.",
];

export default function EnergetskiRat() {
  return (
    <ArticleTemplate
      path="/geopolitika/energetski-rat"
      sectionLabel="Geopolitika"
      title="Bliski istok ulazi u energetski rat: posle napada u Zalivu nafta skače, tržišta u panici"
      dateLabel="19. MART 2026."
      deck="Napadi na energetsku infrastrukturu u Zalivu podižu cenu nafte i šire krizu na Evropu."
      imageSrc={IMAGE_SRC}
      imageAlt="Minimalistička ilustracija točilice za gorivo kao simbol energetske krize na Bliskom istoku"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
