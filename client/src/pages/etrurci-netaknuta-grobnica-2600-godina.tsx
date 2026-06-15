import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/nasa-planeta/etrurci-netaknuta-grobnica-2600-godina";
const IMAGE_SRC = "/news/etrurska-bronzana-kutija.jpg";

const PARAGRAPHS = [
  "U centralnoj Italiji arheolozi su otvorili netaknutu etrursku grobnicu staru oko 2.600 godina. U njoj su pronađena četiri skeleta i više od stotinu predmeta, među kojima su bronzano oružje, nakit, keramika i posude ostavljene uz pokojne.",
  "Za arheologe, ovakva otkrića predstavljaju retku priliku da zavire u svet jedne od najzagonetnijih civilizacija antičkog Mediterana.",
  "Danas gotovo svi znaju za Rimljane. Međutim, mnogo pre nego što je Rim postao centar ogromnog carstva, velikim delom današnje Italije upravljali su Etrurci.",
  "Njihovi gradovi bili su bogati, dobro organizovani i povezani trgovačkim putevima sa Grcima, Feničanima i drugim narodima Mediterana. Gradili su hramove, razvili sopstveno pismo i bili poznati po veštini obrade bronze, zlata i gvožđa.",
  "Rimljani su od njih preuzeli mnogo više nego što se danas obično misli. Istoričari smatraju da pojedini verski obredi, simboli vlasti, urbanistička rešenja, pa čak i neki elementi rimske arhitekture vode poreklo upravo iz etrurskog sveta.",
  "Ipak, za razliku od Grka i Rimljana, Etrurci su ostavili veoma malo pisanih izvora. Njihov jezik delimično je dešifrovan, ali i dalje nije u potpunosti razumljiv. Zbog toga se veliki deo znanja o njihovom društvu zasniva na arheološkim nalazima.",
  "A među tim nalazima najvažnije mesto zauzimaju upravo grobnice.",
  "Za Etrurce smrt nije predstavljala kraj, već prelazak u drugi oblik postojanja. Zato su grobnice često uređivane kao svojevrsne kuće za večnost. U njima su ostavljani predmeti za svakodnevnu upotrebu, oružje, nakit i hrana, kao da pokojnika očekuje nastavak života u nekom drugom svetu.",
  "Zahvaljujući toj tradiciji, arheolozi danas mogu da rekonstruišu delove njihovog svakodnevnog života. Znamo da su Etrurci organizovali raskošne gozbe, da su bili vešti trgovci i pomorci i da su žene u njihovom društvu imale znatno veći društveni položaj nego u većini drugih antičkih kultura tog vremena.",
  "Upravo zato svaka netaknuta grobnica predstavlja mnogo više od zbirke starih predmeta. Ona je retko sačuvana poruka iz sveta koji je nestao pre više od dve hiljade godina.",
  "Novo otkriće neće promeniti istoriju Rima. Ali bi moglo da pomogne da bolje razumemo narod bez koga ni istorija Rima ne bi izgledala onako kako je danas poznajemo.",
];

const INFO_BOX = {
  title: "Izvori i napomena o fotografiji",
  items: [
    "Izvor: Popular Mechanics, prema podacima arheološkog tima u Italiji",
    "Fotografija: detalj etrurske bronzane kutije za čuvanje dragocenosti i ličnih predmeta, 4. vek pre nove ere. Foto: Walters Art Museum / Wikimedia Commons.",
  ],
};

export default function EtrurciNetaknutaGrobnica2600Godina() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Posle 2.600 godina tišine, otvorena jedna od najbolje očuvanih etrurskih grobnica"
      dateLabel="16. JUN 2026."
      authorLabel="Novi Talas"
      deck="Pre nego što su Rimljani zavladali Mediteranom, Italijom su dominirali Etrurci. Nova grobnica stara 2.600 godina pruža redak uvid u život civilizacije koja je oblikovala svet iz kojeg je kasnije nastao Rim."
      imageSrc={IMAGE_SRC}
      imageAlt="Detalj etrurske bronzane kutije za čuvanje dragocenosti iz 4. veka pre nove ere"
      imageCredit="Detalj etrurske bronzane kutije za čuvanje dragocenosti i ličnih predmeta, 4. vek pre nove ere. Foto: Walters Art Museum / Wikimedia Commons."
      paragraphs={PARAGRAPHS}
      infoBox={INFO_BOX}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
