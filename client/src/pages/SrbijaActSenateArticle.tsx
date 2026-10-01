import ArticleTemplate from "@/components/ArticleTemplate";

const ARTICLE = {
  path: "/geopolitika/srbija-act-stigao-i-u-senat-wilson-podrzao-inicijativu-i-ponovo-otvorio-pitanje-izbora-u-srbiji",
  title: "SRBIJA Act stigao i u Senat: Wilson podržao inicijativu i ponovo otvorio pitanje izbora u Srbiji",
  dateLabel: "1. OKTOBAR 2026.",
  authorLabel: "",
  deck: "U Senatu SAD uveden je S. 5611, uz dvostranačku podršku Grassleyja i Blumenthala. Joe Wilson je inicijativu javno povezao sa SRBIJA Act-om i ponovo otvorio pitanje izbora u Srbiji.",
  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a6/US_Senate_Session_Chamber.jpg",
  imageAlt: "Sala Senata Sjedinjenih Američkih Država tokom zasedanja.",
  imageCredit: "Foto: U.S. Senate Photo Studio / Wikimedia Commons — Public Domain",
  paragraphs: [
    { type: "paragraph" as const, content: <>Američka inicijativa prema Srbiji dobila je novu dimenziju. U Senatu SAD 30. septembra uveden je predlog <strong>S. 5611 – „A bill to authorize certain actions with respect to Serbia“</strong>, čiji je sponzor republikanski senator Chuck Grassley, uz demokratu Richarda Blumenthala kao kosponzora. Predlog je istog dana pročitan dva puta i upućen senatskom Odboru za spoljne odnose. U Predstavničkom domu već se nalazi <strong>H.R. 10183 – SRBIJA Act</strong>, koji je u avgustu predstavio republikanac Joe Wilson. Puni tekst senatskog predloga još nije objavljen, pa za sada nije moguće utvrditi da li je identičan verziji iz Predstavničkog doma.</> },
    { type: "paragraph" as const, content: <>Wilson je odmah pozdravio potez Grassleyja i Blumenthala i javno ga povezao sa <strong>SRBIJA Act-om</strong>. U reakciji je ponovo otvorio i pitanje predstojećih parlamentarnih izbora u Srbiji, poručujući da građani Srbije moraju imati „slobodne i poštene izbore“. Time je senatsku inicijativu smestio u isti politički okvir u kojem poslednjih nedelja govori o stanju demokratije i izbornim uslovima u Srbiji. Ranije je za N1 naglasio da SAD ne treba da zauzimaju stranu na izborima i da je njegov interes da izbori budu slobodni i pošteni.</> },
    { type: "paragraph" as const, content: <>Istovremeno, Wilson je pojačao pritisak na <strong>Evropsku narodnu partiju (EPP)</strong> zbog statusa Srpske napredne stranke. U pismu predsedniku EPP-a Manfredu Weberu zatražio je ukidanje statusa pridruženog člana SNS-u i prekid veza sa tom strankom, insistirajući da odluka bude doneta pre izbora u Srbiji. Wilson je svoje zahteve obrazložio tvrdnjama o zloupotrebi državnih resursa i problemima sa izbornim uslovima. EPP je potom 29. septembra saopštio da se događaji u Srbiji povezani sa sahranom Ratka Mladića ne mogu ignorisati u već pokrenutom procesu preispitivanja statusa SNS-a. Nema dokaza da je saopštenje EPP-a posledica Wilsonovog pisma.</> },
    { type: "paragraph" as const, content: <>Wilson je 30. septembra pozdravio stav EPP-a i ponovo zatražio da SNS u potpunosti izgubi status pridruženog člana. Reč je o procesu odvojenom od zakonodavne procedure SRBIJA Act-a: <strong>S. 5611 predstavlja novi formalni korak u američkom Senatu, dok su Wilsonovi zahtevi EPP-u njegova politička aktivnost prema evropskoj stranačkoj porodici.</strong> Zajedničko im je što ih Wilson poslednjih dana direktno povezuje sa pitanjem demokratskih standarda i slobodnih i poštenih izbora u Srbiji.</> },
  ],
};

export default function SrbijaActSenateArticle() {
  return <ArticleTemplate path={ARTICLE.path} sectionLabel="Geopolitika" title={ARTICLE.title} dateLabel={ARTICLE.dateLabel} authorLabel={ARTICLE.authorLabel} deck={ARTICLE.deck} imageSrc={ARTICLE.imageSrc} imageAlt={ARTICLE.imageAlt} imageCredit={ARTICLE.imageCredit} imageFirst={true} imageHeightClass="h-auto" paragraphs={ARTICLE.paragraphs} backHref="/geopolitika" backLabel="← Nazad na Geopolitiku" />;
}
