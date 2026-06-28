import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Hiljade građana okupile su se u centru Praga protestujući protiv plana češke vlade da promeni model finansiranja javnih medija. Organizatori tvrde da bi predložene izmene mogle da utiču na nezavisnost javnog servisa, dok vlast poručuje da je cilj reforme da se obezbedi stabilnije i dugoročnije finansiranje u uslovima ubrzanih promena na medijskom tržištu.",
  "Rasprava je izazvala snažne reakcije u javnosti, jer se odnosi na medijske institucije koje imaju važnu ulogu u informisanju građana. Demonstranti smatraju da svaka promena finansijskog modela mora biti praćena jasnim garancijama uredničke nezavisnosti, dok vlada insistira da reforma ne podrazumeva politički uticaj na rad javnih emitera.",
  "Pitanje finansiranja javnih medija poslednjih godina postaje sve aktuelnije širom Evrope. Tradicionalni sistemi pretplate nastali su u vreme kada su radio i televizija bili dominantni izvori informacija, dok danas publika sve više prati sadržaj putem digitalnih platformi, društvenih mreža i striming servisa. Zbog toga brojne države pokušavaju da pronađu model koji bi omogućio održivo finansiranje javnih servisa bez dodatnog opterećenja građana.",
  "Istovremeno, rasprava u Češkoj otvorila je i šire pitanje odnosa između države, medija i demokratije. Zagovornici reforme tvrde da je javnim servisima potreban stabilan izvor prihoda kako bi mogli da obavljaju svoju funkciju u digitalnom dobu. Kritičari, međutim, upozoravaju da finansijska zavisnost od političkih odluka može postati izvor pritiska na uredničku autonomiju. Upravo zbog toga događaji u Pragu privlače pažnju i van granica Češke, kao deo mnogo šire evropske debate o budućnosti javnih medija.",
];

export default function PraguePublicMediaProtestArticle() {
  return (
    <ArticleTemplate
      path="/geopolitika/protesti-u-pragu-zbog-finansiranja-javnog-servisa"
      sectionLabel="Geopolitika"
      title="Hiljade građana protestovale u Pragu zbog reforme finansiranja javnog servisa"
      dateLabel="22. jun 2026."
      deck="Plan češke vlade da promeni model finansiranja javnih medija izazvao je proteste u Pragu, otvarajući širu evropsku raspravu o nezavisnosti javnih servisa u digitalnom dobu."
      imageSrc="/news/prague-public-media-protest.jpg"
      imageAlt="Editorial illustration about public broadcasting, media independence and protests in Prague"
      imageCredit="Ilustracija / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
