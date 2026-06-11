import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/talibani-otvorili-vatru-na-protest-za-prava-zena";
const IMAGE_SRC = "/news/afganistan-woman.jpg";

const PARAGRAPHS = [
  "Novi protest za prava žena u Avganistanu završen je nasilnom intervencijom talibanskih snaga, prema navodima aktivista i organizacija koje prate stanje ljudskih prava u toj zemlji. Incident je ponovo skrenuo pažnju međunarodne javnosti na položaj žena gotovo četiri godine nakon povratka talibana na vlast.",
  "Od preuzimanja kontrole nad zemljom 2021. godine, talibanske vlasti postepeno su uvodile ograničenja koja su ženama značajno suzila pristup obrazovanju, zapošljavanju i javnom životu. Mnoge međunarodne organizacije ocenjuju da se radi o jednom od najopsežnijih sistema institucionalne diskriminacije žena u savremenom svetu.",
  "Uprkos pritiscima, zabrani okupljanja i riziku od hapšenja, manje grupe aktivistkinja nastavljaju da organizuju proteste i javne akcije kojima pokušavaju da skrenu pažnju na položaj žena u zemlji. Takvi skupovi poslednjih godina postali su retki upravo zbog bezbednosnih rizika sa kojima se učesnici suočavaju.",
  "Talibanske vlasti tvrde da njihova politika proizlazi iz tumačenja verskih i društvenih normi Avganistana. Kritičari, međutim, upozoravaju da se pod tim obrazloženjem sistematski ograničavaju osnovna ljudska prava miliona žena i devojčica.",
  "Kada su se američke i savezničke trupe povukle iz Avganistana 2021. godine, pažnja svetske javnosti bila je usmerena na haotične scene sa aerodroma u Kabulu. Mnogo manje pažnje posvećeno je pitanju šta će se dogoditi dan nakon odlaska poslednjeg vojnika. Odgovor na to pitanje danas žive milioni Avganistanaca, a posebno Avganistanki.",
  "Talibani su preuzeli državu, vojnu infrastrukturu i ogromne količine naoružanja. Međunarodna zajednica je izrazila zabrinutost, usvojila rezolucije i izdala brojna saopštenja. Međutim, iz perspektive žena koje danas pokušavaju da se izbore za pravo na školovanje ili zaposlenje, malo toga se promenilo.",
  "Otvaranje vatre na protest za prava žena slika je Avganistana četiri godine nakon povratka talibana na vlast.",
  "Žene godinama gube prava, protesti se guše, a međunarodna pažnja slabi. Godine 2021. slike iz Kabula obilazile su svet. O položaju žena govorili su političari, međunarodne organizacije i svetski mediji. Danas je kamera okrenuta na drugu stranu.",
  "Život Avganistanki nije postao lakši. Samo je prestao da bude vest.",
];

export default function TalibaniOtvoriliVatruNaProtestZaPravaZena() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Talibani otvorili vatru na protest za prava žena"
      dateLabel="11. jun 2026."
      imageSrc={IMAGE_SRC}
      imageAlt="Protest za prava žena u Avganistanu"
      imageCredit="Vizualizacija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
