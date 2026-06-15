import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan";
const IMAGE_SRC = "/news/ormuski-moreuz-nasa.jpg";

const PARAGRAPHS = [
  "Sjedinjene Američke Države i Iran postigli su okvirni mirovni dogovor koji bi mogao da označi kraj višemesečnog sukoba i ponovno otvaranje Ormuskog moreuza, jedne od najvažnijih tačaka svetske energetske trgovine.",
  "Američki predsednik Donald Tramp saopštio je da je sporazum sa Iranom „završen” i da je odobrio ukidanje američke pomorske blokade. U poruci objavljenoj na društvenim mrežama naglasio je da se Ormuski moreuz otvara za slobodnu plovidbu i poručio: „Neka nafta poteče.”",
  "Dogovor je najavio i pakistanski premijer Šehbaz Šarif, čija je zemlja imala posredničku ulogu u pregovorima. Prema njegovim rečima, Sjedinjene Države i Iran saglasili su se o prekidu vojnih operacija, a formalno potpisivanje sporazuma očekuje se u Švajcarskoj.",
  "Reč je, međutim, o sporazumu koji za sada više liči na politički okvir nego na konačno rešenje krize. Prema dostupnim informacijama, dogovor predviđa prekid neprijateljstava, otvaranje Ormuskog moreuza i nastavak pregovora o najtežim pitanjima u narednom periodu.",
  "Među otvorenim pitanjima ostaju budućnost iranskog nuklearnog programa, eventualno ublažavanje američkih sankcija i bezbednosni režim u Persijskom zalivu. Upravo od tih tema zavisiće da li će sadašnji dogovor postati trajno političko rešenje ili samo kratki predah u jednoj od najopasnijih kriza poslednjih meseci.",
  "Ormuski moreuz ima ogroman značaj za globalnu ekonomiju. Kroz ovaj uski morski prolaz između Irana i Omana prolazi značajan deo svetske trgovine naftom i tečnim gasom, zbog čega svaka kriza u tom području neposredno utiče na cene energenata, inflaciju i bezbednost pomorskih ruta.",
  "Vest o dogovoru odmah je uticala na tržišta. Cene nafte su pale, dok su berze reagovale rastom, jer investitori očekuju smirivanje tenzija i stabilizaciju snabdevanja energentima.",
  "Ipak, diplomatski optimizam prate i ozbiljne rezerve. Tekst sporazuma još nije u potpunosti javno predstavljen, a ostaju nejasni detalji oko načina otvaranja Ormuskog moreuza, tempa ukidanja blokade i garancija da se sukob neće obnoviti.",
  "Posebno osetljivo pitanje ostaje širi regionalni kontekst. Deo izveštaja pominje i prekid vojnih operacija na drugim frontovima, uključujući Liban, ali nije jasno da li su sve regionalne strane spremne da prihvate takav okvir.",
  "Zato ovaj dogovor, ukoliko bude formalno potpisan, ne predstavlja kraj bliskoistočne krize, već njen mogući predah. On otvara prostor za diplomatiju, smiruje tržišta i privremeno uklanja opasnost od šireg rata u Persijskom zalivu.",
  "Ali njegova trajnost zavisiće od pitanja koje je i dovelo do višegodišnje konfrontacije: može li se pronaći politički prihvatljiv sporazum o iranskom nuklearnom programu.",
  "Za sada, najvažnija posledica dogovora jeste činjenica da se Ormuski moreuz ponovo otvara. U svetu u kome energija, rat i diplomatija sve češće stoje u istoj rečenici, to je vest koja daleko prevazilazi odnose Vašingtona i Teherana.",
];

const INFO_BOX = {
  title: "Izvori i tagovi",
  items: [
    "Izvori: Ground News, Reuters, The Guardian, NASA / Wikimedia Commons",
    "Tagovi: SAD, Iran, Pakistan, Bliski istok, diplomatija, mirovni sporazum, Ormuski moreuz, nafta",
  ],
};

export default function SadIIranBlizuSporazumaPakistanTvrdiDaJeTekstDogovorenTeheranJosOprezan() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="SAD i Iran postigli okvirni mirovni dogovor: Ormuski moreuz ponovo se otvara za svetsku trgovinu"
      dateLabel="15. JUN 2026."
      authorLabel="Novi Talas"
      deck="Donald Tramp je objavio da je dogovor sa Teheranom „završen” i naredio ukidanje američke pomorske blokade. Ipak, ključna pitanja — iranski nuklearni program, sankcije i dugoročne bezbednosne garancije — ostaju otvorena."
      imageSrc={IMAGE_SRC}
      imageAlt="Satelitski prikaz Ormuskog moreuza između Irana, Omana i Ujedinjenih Arapskih Emirata"
      imageCredit="Foto: NASA / Wikimedia Commons"
      paragraphs={PARAGRAPHS}
      infoBox={INFO_BOX}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
