import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/ko-ce-ugasiti-zvezde-astronomi-upozoravaju-da-bi-17-miliona-satelita-moglo-trajno-da-promeni-nocno-nebo";

const PARAGRAPHS = [
  "Noćno nebo, koje je hiljadama godina predstavljalo jednu od retkih prirodnih konstanti ljudske civilizacije, moglo bi u narednim decenijama da doživi najveću promenu od početka svemirskog doba. Novo istraživanje Evropske južne opservatorije (ESO) upozorava da bi planovi za lansiranje više od 1,7 miliona satelita u Zemljinu orbitu mogli trajno da izmene izgled noćnog neba i ozbiljno ugroze budućnost astronomske nauke.",
  "U orbiti se danas nalazi više od 14.000 aktivnih i neaktivnih satelita, ali broj planiranih letelica raste neverovatnom brzinom. Pored postojećih komunikacionih mreža, poput Starlinka, najavljeni su novi sistemi za internet, orbitalne data-centre, svemirska ogledala i drugi komercijalni projekti koji bi mogli višestruko da povećaju broj objekata oko Zemlje.",
  "Prema procenama istraživača, toliko veliki broj satelita učinio bi noćno nebo znatno svetlijim nego danas. Njihovi odsjaji ostavljali bi tragove na snimcima teleskopa, otežavali posmatranje udaljenih galaksija i zvezda, a pojedina istraživanja mogla bi postati gotovo nemoguća. Naučnici smatraju da bi, kako bi se očuvale mogućnosti savremene astronomije, ukupan broj satelita trebalo ograničiti na najviše 100.000, pri čemu nijedan ne bi smeo da bude vidljiv golim okom.",
  "Problem nije samo u svetlosti. Što je više objekata u orbiti, veći je i rizik od međusobnih sudara. Takvi sudari stvaraju hiljade novih fragmenata, koji zatim povećavaju verovatnoću novih udara. Naučnici već godinama upozoravaju na mogućnost nastanka takozvanog Keslerovog sindroma — lančane reakcije sudara koja bi mogla da učini pojedine delove Zemljine orbite neupotrebljivim za buduće misije.",
  "Ipak, ova priča nema jednostavne negativce. Satelitske megakonstelacije omogućavaju brži internet u udaljenim krajevima sveta, unapređuju komunikaciju tokom prirodnih katastrofa i otvaraju prostor za nove tehnološke usluge. Upravo zato pitanje više nije da li čovečanstvu trebaju sateliti, već koliko ih je moguće poslati u orbitu, a da cena tog napretka ne postane previsoka.",
  "Ovo upozorenje zato prevazilazi okvire astronomije. Ono otvara pitanje kako će izgledati odnos između tehnološkog razvoja i očuvanja zajedničkih dobara koja pripadaju čitavom čovečanstvu.",
  "Ako se sadašnji planovi ostvare, generacije koje dolaze možda nikada neće upoznati isto ono noćno nebo koje su posmatrali antički astronomi, moreplovci, pesnici i milioni ljudi pre njih. Prvi put u istoriji, zvezde neće nestati zato što su se ugasile, već zato što smo ih sami zaklonili.",
];

export default function VanishingStarsArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Ko će ugasiti zvezde? Astronomi upozoravaju da bi 1,7 miliona satelita moglo trajno da promeni noćno nebo"
      dateLabel="1. avgust 2026."
      deck="Novo upozorenje astronoma ukazuje da bi planirano lansiranje čak 1,7 miliona satelita moglo trajno da izmeni izgled noćnog neba, oteža astronomska posmatranja i poveća rizik od sudara u Zemljinoj orbiti."
      imageSrc="/news/vanishing-stars.jpg"
      imageAlt="Noćno nebo prošarano tragovima satelita iznad Mlečnog puta."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
