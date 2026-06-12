import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan";
const IMAGE_SRC = "/news/peace-for-iran.jpg";

const PARAGRAPHS = [
  "Posle nedelja posredovanja i diplomatskih pritisaka, iz Islamabada je stigla vest koja bi mogla da označi prekretnicu u jednoj od najopasnijih kriza poslednjih meseci.",
  "Pakistanski premijer Shehbaz Sharif objavio je da su Sjedinjene Države i Iran usaglasili finalni tekst mirovnog sporazuma. Prema njegovim rečima, Pakistan sada radi sa obe strane na narednim koracima u procesu.",
  "To, međutim, još ne znači da je sporazum potpisan.",
  "Iran je dan ranije poručio da konačna odluka o mogućem dogovoru sa Sjedinjenim Državama još nije doneta. Portparol iranskog Ministarstva spoljnih poslova Esmaeil Baghaei rekao je da Teheran neće odustati od svojih „crvenih linija“ i da su spekulacije o vremenu i mestu potpisivanja preuranjene.",
  "Pakistan, dakle, tvrdi da je papir na stolu. Ali dok Vašington i Teheran ne potvrde dogovor, ovo je i dalje diplomatski trenutak nade, ne potpisani mir.",
  "Prema navodima međunarodnih medija, predloženi okvir dogovora mogao bi da obuhvati prekid neprijateljstava, razgovore o iranskom nuklearnom programu, pitanje visoko obogaćenog uranijuma, ublažavanje sankcija i pristup zamrznutim iranskim sredstvima. Kao jedna od važnih tačaka pominje se i Ormuski moreuz, ključna pomorska ruta za svetsku trgovinu naftom.",
  "Zato ova vest ima težinu daleko veću od jednog diplomatskog saopštenja.",
  "Američko-iranski dogovor, ako zaista bude potvrđen, mogao bi da utiče na čitav Bliski istok: na Iran, Izrael, zemlje Zaliva, Liban, energetska tržišta i širu bezbednosnu sliku sveta. Svaki korak ka smirivanju odnosa Vašingtona i Teherana pažljivo se prati jer bi neuspeh pregovora mogao ponovo da otvori prostor za eskalaciju.",
  "Za sada, ipak, ostaje oprez.",
  "U diplomatiji postoji velika razlika između teksta koji je spreman i odluke da se taj tekst potpiše. Prvo znači da su pregovarači pronašli reči. Drugo znači da su politički lideri spremni da preuzmu rizik.",
  "Ako se potvrdi ono što tvrdi Pakistan, ovo bi mogao biti jedan od najvažnijih diplomatskih pomaka godine. Ako ne, ostaće još jedan trenutak u kojem je mir bio blizu, ali ne i dovoljno blizu.",
];

const INFO_BOX = {
  title: "Izvori i tagovi",
  items: [
    "Izvori: Reuters, AP, Ground News",
    "Tagovi: SAD, Iran, Pakistan, Bliski istok, diplomatija, mirovni sporazum, Ormuski moreuz",
  ],
};

export default function SadIIranBlizuSporazumaPakistanTvrdiDaJeTekstDogovorenTeheranJosOprezan() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Svet"
      title="SAD i Iran blizu sporazuma: Pakistan tvrdi da je tekst dogovoren, Teheran još oprezan"
      dateLabel="12. JUN 2026."
      authorLabel="Novi Talas"
      deck="Pakistanski premijer Shehbaz Sharif saopštio je da su Sjedinjene Države i Iran usaglasili tekst mirovnog sporazuma. Ipak, iz Teherana stiže poruka da konačna odluka još nije doneta."
      imageSrc={IMAGE_SRC}
      imageAlt="SAD i Iran blizu sporazuma, Teheran i dalje oprezan"
      imageCredit="Reuters / AP"
      paragraphs={PARAGRAPHS}
      infoBox={INFO_BOX}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
