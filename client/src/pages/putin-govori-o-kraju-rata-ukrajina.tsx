import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/putin-govori-o-kraju-rata-ukrajina";
const IMAGE_SRC = "/news/tramp-zelenski-oval-office.jpg";

const PARAGRAPHS = [
  "Donald Tramp poručio je Vladimiru Putinu da je spreman da pomogne u okončanju rata u Ukrajini, saopštio je Kremlj nakon telefonskog razgovora dvojice lidera.",
  "Vest sama po sebi ne znači da je mir blizu. Ali dolazi u trenutku kada američki predsednik pokušava da se predstavi kao čovek koji može da otvara kanale tamo gde su drugi videli samo blokadu: najpre prema Iranu, a sada ponovo prema Moskvi.",
  "Prema navodima savetnika Kremlja Jurija Ušakova, razgovor je trajao 55 minuta, a rat u Ukrajini bio je jedna od centralnih tema. Tramp je, prema ruskoj strani, rekao da je završetak sukoba od ključne važnosti i da je spreman da sarađuje sa Evropom i Kijevom u traženju rešenja.",
  "Upravo ta formulacija je najvažniji deo vesti. Ako je tačna, ona pokazuje da Vašington ne pokušava samo da obnovi direktan kanal sa Moskvom, već da taj kanal bar formalno poveže sa evropskim saveznicima i Ukrajinom.",
  "Ali tu počinje i najveći problem.",
  "Svaki razgovor između američkog i ruskog predsednika o Ukrajini nosi političku težinu, ali i opasnost. Za Kijev i evropske prestonice ključno pitanje nije samo da li se pregovori otvaraju, već pod kojim uslovima i ko zaista sedi za stolom.",
  "Ukrajina ne želi mir koji bi značio zamrzavanje rata pod ruskim uslovima. Evropa, naročito države istočnog krila NATO-a, strahuje da bi brz dogovor mogao da nagradi silu i ostavi kontinent u trajnoj bezbednosnoj neizvesnosti.",
  "Moskva, sa druge strane, i dalje nastoji da pokaže da vreme radi za nju. Putin je, prema navodima Kremlja, u razgovoru tvrdio da ukrajinski napadi neće promeniti stanje na frontu i da Zapad svojim predlozima samo produžava rat.",
  "To je poznata ruska poruka: pritisak treba predstaviti kao uzaludan, a pregovore kao prihvatanje realnosti na terenu.",
  "Kijev pokušava da odgovori suprotno. Volodimir Zelenski poručuje da je Ukrajina spremna za direktan razgovor o završetku rata, ali ne po cenu odricanja od sopstvene političke i teritorijalne budućnosti.",
  "Zato se iza jedne telefonske rečenice krije mnogo veće pitanje: da li Tramp pokušava da pokrene stvarni mirovni proces ili da proizvede diplomatsku sliku brzog rešenja?",
  "Njegova politička logika je jasna. Ako posle iranske krize uspe da pokaže da može da razgovara i sa Putinom, Tramp dobija sliku lidera koji pomera najopasnije svetske konflikte iz zone rata u zonu pregovora.",
  "Ali Ukrajina nije diplomatska tabla na kojoj se veliki dogovaraju o linijama razdvajanja. Svaki sporazum koji bi bio sklopljen mimo Kijeva ili protiv njegovih osnovnih interesa mogao bi da zaustavi pucanje samo privremeno, ali bi dugoročno otvorio novu evropsku krizu.",
  "Zato ovu vest treba čitati oprezno. Ona nije dokaz da se rat završava, već znak da se ponovo testira mogućnost pregovora.",
  "Rat u Ukrajini ulazi u fazu u kojoj se front, izborna politika, evropska bezbednost i američka diplomatija sve snažnije prepliću. Ako Tramp zaista želi da pomogne u okončanju rata, prvo pitanje neće biti da li može da razgovara sa Putinom.",
  "Prvo pitanje biće da li taj razgovor može da dovede do mira u kojem Ukrajina ostaje subjekt sopstvene sudbine, a ne cena tuđeg dogovora.",
];

const INFO_BOX = {
  title: "Izvori i tagovi",
  items: [
    "Izvori: Reuters, The Guardian, Ground News",
    "Tagovi: Donald Tramp, Vladimir Putin, Volodimir Zelenski, Ukrajina, Rusija, SAD, G7, diplomatija",
  ],
};

export default function PutinGovoriOKrajuRataUkrajina() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Tramp poručio Putinu da je spreman da pomogne u okončanju rata u Ukrajini"
      dateLabel="15. JUN 2026."
      authorLabel="Novi Talas"
      deck="Posle najava o smirivanju krize sa Iranom, američki predsednik pokušava da otvori i ukrajinski front diplomatije. Ali pitanje ostaje isto: može li se o miru razgovarati bez opasnosti da Ukrajina postane predmet dogovora velikih sila?"
      imageSrc={IMAGE_SRC}
      imageAlt="Donald Tramp i Volodimir Zelenski tokom sastanka u Ovalnoj kancelariji Bele kuće"
      imageCredit="Foto: Wikimedia Commons"
      paragraphs={PARAGRAPHS}
      infoBox={INFO_BOX}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
