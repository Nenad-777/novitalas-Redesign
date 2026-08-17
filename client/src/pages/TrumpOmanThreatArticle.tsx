import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/tramp-zapretio-bombardovanjem-omana-dok-istice-rok-za-sporazum-sa-iranom";

const PARAGRAPHS = [
  "Donald Tramp izjavio je za Fox News da bi Sjedinjene Države mogle da bombarduju Oman ukoliko se ta zemlja umeša u američki spor sa Iranom. Prema Reutersu, pretnja je izrečena u trenutku kada su pregovori Vašingtona i Teherana dospeli u zastoj. Posebnu težinu Trampovim rečima daje činjenica da Oman nije protivnik Sjedinjenih Država, već njihov dugogodišnji partner i jedan od najvažnijih posrednika između Vašingtona i Teherana.",
  "Nova kriza neposredno je povezana sa Ormuskim moreuzom, jednim od najvažnijih pomorskih prolaza na svetu. Iran i Oman pokušavaju da postignu dogovor o plovidbi kroz moreuz, dok Vašington i Teheran ostaju duboko podeljeni oko uslova za sporazum. Saobraćaj je već drastično smanjen: prema podacima koje prenosi Reuters, u subotu je moreuzom prošlo samo pet brodova, a u nedelju nijedan, dok ih je prethodnog vikenda bilo 31. Kroz Ormuski moreuz u uobičajenim okolnostima prolazi približno petina svetske trgovine naftom i tečnim prirodnim gasom.",
  "Istovremeno ističe rok od 60 dana koji su Sjedinjene Države i Iran utvrdili u junu, sa ciljem da se sukob smiri, ponovo uspostavi plovidba kroz Ormuski moreuz i otvore pregovori o iranskom nuklearnom programu. Associated Press navodi da rok ističe bez konačnog sporazuma. Iran, između ostalog, zahteva okončanje američke blokade i povlačenje američkih snaga, dok Vašington takve zahteve odbacuje.",
  "Nova eskalacija imala bi posledice daleko izvan Persijskog zaliva. Ormuski moreuz jedna je od najosetljivijih tačaka svetske privrede, pa ozbiljniji poremećaj plovidbe može uticati na cenu nafte, snabdevanje energentima i međunarodnu trgovinu. Pretnja Omanu dodatno usložnjava krizu: reč je o zemlji koja je godinama održavala kanale između Irana i Zapada otvorenim upravo onda kada su neposredni razgovori bili gotovo nemogući.",
];

export default function TrumpOmanThreatArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Tramp zapretio bombardovanjem Omana dok ističe rok za sporazum sa Iranom"
      dateLabel="17. avgust 2026."
      deck="Američki predsednik Donald Tramp zapretio je vojnom akcijom protiv Omana ukoliko se ta zemlja umeša u američki spor sa Iranom oko Ormuskog moreuza. Izjava dolazi upravo na dan kada ističe rok od 60 dana za postizanje sporazuma Vašingtona i Teherana, bez naznaka da su dve strane blizu dogovora."
      imageSrc="/news/airplane-oman.jpg"
      imageAlt="Američki vojni avion iznad Ormuskog moreuza, dok tanker plovi ispod planinske obale Omana."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
