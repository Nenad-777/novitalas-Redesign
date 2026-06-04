import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/workers-eu.jpg";

const PARAGRAPHS = [
  "Prema dokumentima Evropske komisije, nagli rast cena energenata mogao bi da izazove ozbiljne posledice po industrijsku proizvodnju širom Evropske unije. Brisel procenjuje da bi u najnepovoljnijem scenariju čak 1,3 miliona radnih mesta moglo biti ugroženo ukoliko se energetski troškovi nastave povećavati tokom narednih meseci.",
  "Najizloženiji sektori su automobilska industrija, hemijska proizvodnja, metalurgija, građevinarstvo i transport, odnosno grane privrede koje u velikoj meri zavise od stabilnih i predvidivih cena energije. Evropske institucije upozoravaju da bi novi poremećaji na globalnom tržištu mogli dodatno oslabiti konkurentnost evropskih kompanija u odnosu na rivale iz Sjedinjenih Država i Azije.",
  "Ova upozorenja dolaze u trenutku kada se Evropa još nije u potpunosti oporavila od prethodne energetske krize izazvane ratom u Ukrajini. Sukob između Irana i Sjedinjenih Država, kao i rizik od poremećaja u snabdevanju nafte i gasa sa Bliskog istoka, podsećaju da evropska ekonomija ostaje snažno povezana sa događajima hiljadama kilometara van svojih granica.",
  "Posmatrano iz šire perspektive, pitanje energije postaje jedno od ključnih geopolitičkih pitanja 21. veka. Evropska unija godinama govori o strateškoj autonomiji, ali svaki novi poremećaj na energetskim tržištima pokazuje koliko su privreda, bezbednost i spoljna politika međusobno povezani. Zbog toga se pred Evropom ne nalazi samo izazov očuvanja radnih mesta, već i pitanje dugoročne ekonomske otpornosti u svetu koji postaje sve nestabilniji.",
];

export default function EvropskaIndustrijaPredNovimUdaromEnergetskeKrize() {
  return (
    <ArticleTemplate
      path="/geopolitika/evropska-industrija-pred-novim-udarom-energetske-krize"
      sectionLabel="Geopolitika"
      title="Evropska industrija pred novim udarom energetske krize"
      dateLabel="4. JUN 2026."
      authorLabel="Novi Talas"
      deck="Evropska komisija upozorava da bi rast cena energije mogao ugroziti do 1,3 miliona radnih mesta, dok rat na Bliskom istoku ponovo povećava zabrinutost za stabilnost evropske privrede."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
