import ArticleTemplate from "@/components/ArticleTemplate";
import { Link } from "wouter";

const PATH =
  "/obavestajni-izvori/retklifova-misija-u-moskvi-dobija-nove-obrise";

const PARAGRAPHS = [
  {
    type: "paragraph" as const,
    content: (
      <>
        Direktor ruske Spoljne obaveštajne službe Sergej Nariškin potvrdio je da
        se tokom{" "}
        <Link
          href="/obavestajni-izvori/direktor-cia-u-moskvi"
          className="underline underline-offset-2"
        >
          nenajavljene posete Džona Retklifa Moskvi
        </Link>{" "}
        sastao sa direktorom CIA. Nariškin nije otkrio sadržaj razgovora,
        navodeći samo da su dvojica direktora razgovarala o pitanjima koja
        spadaju u nadležnost njihovih službi.
      </>
    ),
  },
  "Time je potvrđeno ono što dan ranije još nije bilo poznato: Retklifov glavni sagovornik bio je upravo šef SVR-a, pa je sastanak predstavljao direktan kontakt na najvišem nivou dve spoljne obaveštajne službe.",
  "Istovremeno su se u američkim medijima pojavili detalji o mogućem sadržaju razgovora. Wall Street Journal i CBS News, pozivajući se na izvore upoznate sa posetom, navode da je Retklif ruskoj strani preneo upozorenje da ne pokušava napad ili drugu ozbiljnu eskalaciju prema članicama NATO-a. U tim izveštajima posebno se pominje zabrinutost zbog mogućeg testiranja odlučnosti Alijanse na njenom istočnom krilu.",
  "Za sada nema zvanične potvrde da je upravo to bila glavna tema sastanka. CIA nije objavila sadržaj razgovora, a Nariškin ga nije komentarisao.",
  "Dodatnu nejasnoću unosi Donald Tramp. Upitan da li je Retklif otišao u Moskvu zbog mogućeg ruskog poteza protiv NATO-a ili zbog Irana, američki predsednik odbacio je oba objašnjenja i posetu opisao kao „semi-routine“. Istovremeno je rekao da bi iz razgovora „nešto moglo proizaći“ i ponovo govorio o naporima da se okonča rat u Ukrajini.",
  "Tako se pojavljuju dve različite slike iste misije. Prema izvorima američkih medija, Retklif je u Moskvu nosio ozbiljno bezbednosno upozorenje. Prema javnoj verziji predsednika SAD, poseta nije imala takvu dramatičnu pozadinu.",
  {
    type: "paragraph" as const,
    content:
      "Moguće je, naravno, da razgovor nije imao samo jednu temu. Ukrajina, odnosi Rusije i NATO-a i ruska podrška Iranu predstavljaju istovremeno otvorene tačke između Moskve i Vašingtona, a upravo obaveštajni kanali omogućavaju da se o takvim pitanjima razgovara bez formalnog diplomatskog procesa.",
  },
  "Ono što je danas izvesnije nego juče jeste da Retklifova poseta nije bila samo kontakt američke delegacije sa ruskim zvaničnicima. Bio je to neposredan razgovor direktora CIA i SVR-a, nakon kojeg je, prema Kremlju, Vladimir Putin odmah obavešten o rezultatima.",
  "Šta je Retklif tačno preneo Nariškinu i dalje ostaje iza zatvorenih vrata. Ali činjenica da se iz Vašingtona sada pojavljuju različite verzije sadržaja razgovora pokazuje da prava politička težina ove posete tek počinje da izlazi na površinu.",
];

export default function RatcliffeMoscowMissionArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Obaveštajni izvori"
      title="Retklifova misija u Moskvi dobija nove obrise"
      dateLabel="27. avgust 2026."
      deck="Dan nakon što je potvrđena nenajavljena poseta direktora CIA Džona Retklifa Moskvi, pojavili su se prvi konkretniji podaci o njegovim razgovorima. Šef ruske Spoljne obaveštajne službe Sergej Nariškin potvrdio je da se lično sastao sa Retklifom, dok američki mediji navode da je jedna od tema bilo upozorenje Moskvi da ne pokušava eskalaciju prema članicama NATO-a. Donald Tramp takvu interpretaciju, međutim, javno odbacuje."
      imageSrc="/news/ratcliffe-moscow-red-line.jpg"
      imageAlt="Grafička ilustracija tajne američke misije u Moskvi: zvaničnik prelazi crvenu liniju na aerodromskoj pisti dok se u pozadini nalazi vojni transportni avion."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
