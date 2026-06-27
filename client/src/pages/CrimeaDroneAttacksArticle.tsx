import ArticleTemplate from "@/components/ArticleTemplate";

const ARTICLE = {
  path: "/geopolitika/krim-u-vanrednoj-situaciji-nakon-masovnog-napada-dronovima",
  title:
    "Krim u vanrednoj situaciji nakon masovnog napada dronovima: rat ulazi u novu fazu",
  dateLabel: "27. JUN 2026.",
  deck: "Prema pisanju međunarodnih medija, ruske vlasti koje upravljaju Krimom proglasile su vanrednu situaciju nakon jednog od najvećih talasa ukrajinskih napada dronovima od početka rata.",
  imageSrc: "/news/crimea-drone-attacks.jpg",
  imageAlt:
    "Minimalist editorial illustration of Crimea following large-scale drone attacks",
  imageCredit: "AI generated illustration / Novi Talas",
  paragraphs: [
    "Prema pisanju The Guardiana, ruske vlasti koje upravljaju anektiranim Krimom proglasile su vanrednu situaciju nakon jednog od najvećih talasa ukrajinskih napada dronovima od početka rata. List navodi da su u pojedinim delovima poluostrva zabeleženi prekidi u snabdevanju električnom energijom i poremećaji u funkcionisanju infrastrukture, dok Moskva tvrdi da je oborila veliki broj bespilotnih letelica.",
    "Ukrajina poslednjih nedelja sve češće izvodi napade na ciljeve duboko iza linije fronta. Kako prenosi Reuters, fokus je pre svega na energetskoj i logističkoj infrastrukturi, sa ciljem da se oteža snabdevanje ruskih snaga i oslabe vojni kapaciteti na okupiranim teritorijama.",
    "Krim ima poseban strateški značaj za obe strane. Za Rusiju predstavlja ključnu bazu Crnomorske flote i važan logistički centar, dok ga Ukrajina smatra sastavnim delom svoje teritorije. Zbog toga svaki napad na poluostrvo ima i vojni i politički odjek koji prevazilazi lokalne razmere sukoba.",
    "Sve intenzivnija upotreba bespilotnih letelica pokazuje da se način vođenja rata menja. Umesto velikih kopnenih operacija, obe strane sve više nastoje da oslabe protivnika udarima na infrastrukturu i logistiku, čime se front praktično širi daleko iza linije neposrednih borbi.",
  ],
};

export default function CrimeaDroneAttacksArticle() {
  return (
    <ArticleTemplate
      path={ARTICLE.path}
      sectionLabel="Geopolitika"
      title={ARTICLE.title}
      dateLabel={ARTICLE.dateLabel}
      deck={ARTICLE.deck}
      imageSrc={ARTICLE.imageSrc}
      imageAlt={ARTICLE.imageAlt}
      imageCredit={ARTICLE.imageCredit}
      paragraphs={ARTICLE.paragraphs}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
