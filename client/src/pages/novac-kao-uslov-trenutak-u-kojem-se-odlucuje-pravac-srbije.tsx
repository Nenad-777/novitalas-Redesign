import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/eu-uslov.jpg";

const PARAGRAPHS = [
  "Evropska unija prvi put je javno i direktno povezala tempo finansijske podrške Srbiji sa političkim odlukama koje se očekuju u narednom periodu, čime je dosadašnja diplomatska formulacija zamenjena jasnim uslovljavanjem.",
  "Poruka iz Brisela dolazi u trenutku kada su razvojni fondovi, infrastrukturni programi i podrška institucijama od ključnog značaja za domaće ekonomske tokove, pa svako odlaganje ili smanjenje tih sredstava dobija i unutrašnju političku težinu.",
  "U praksi, novi pristup znači da se od Beograda očekuju merljivi potezi u oblastima spoljne politike, institucionalnih reformi i usklađivanja sa strateškim prioritetima Evropske unije, a ne samo deklarativna spremnost na nastavak integracija.",
  "Ovakvo postavljanje odnosa otvara i šire pitanje: da li Srbija ulazi u fazu u kojoj više nema prostora za dugotrajno balansiranje između različitih centara moći, već mora jasnije da definiše pravac spoljne i bezbednosne politike.",
  "Ishod tog izbora neće se meriti samo kroz diplomatske signale, već i kroz konkretne posledice po investicije, kreditni rejting, javne finansije i ukupnu poziciju zemlje u regionu u godinama koje dolaze.",
];

export default function NovacKaoUslovTrenutakUKojemSeOdlucujePravacSrbije() {
  return (
    <ArticleTemplate
      path="/geopolitika/novac-kao-uslov-trenutak-u-kojem-se-odlucuje-pravac-srbije"
      sectionLabel="Geopolitika"
      title="Novac kao uslov: trenutak u kojem se odlučuje pravac Srbije"
      dateLabel="22. APRIL 2026."
      deck="Evropska unija prvi put jasno povezuje finansijsku podršku sa političkim odlukama, otvarajući pitanje daljeg kursa Srbije."
      imageSrc={IMAGE_SRC}
      imageAlt="Evropska unija i finansijski uslovi za političke odluke Srbije"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
