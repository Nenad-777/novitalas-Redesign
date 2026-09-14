import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata";

const PARAGRAPHS = [
  "Prema preliminarnim rezultatima parlamentarnih izbora, četiri opozicione stranke koje podržavaju povratak socijaldemokratkinje Magdalene Andersson imaju 176 od ukupno 349 mesta u Riksdagu, dok blok sadašnjeg premijera Ulfa Kristerssona ima 173. Razlika između dva bloka iznosi svega oko 29.000 glasova, a konačni rezultat očekuje se tek nakon prebrojavanja preostalih ranih i glasova iz inostranstva. Zato ni Andersson ni Kristersson još ne proglašavaju pobedu.",
  "Najveća stranka ponovo su Socijaldemokrate, sa oko 28 odsto glasova, a Andersson bi tako mogla da se vrati na mesto premijerke koje je izgubila 2022. godine. Ona je već poručila da bi, ukoliko sadašnji odnos snaga ostane isti, Švedska dobila novu vladu. Andersson je zemlju kratko vodila između 2021. i 2022, a upravo je tokom njenog mandata Švedska pokrenula proces ulaska u NATO.",
  "Najveći gubitnik izbora za sada su Švedske demokrate, nacionalistička i antiimigraciona stranka koja je prethodne četiri godine spolja podržavala Kristerssonovu vladu. Prema projekcijama, izgubiće oko 11 poslaničkih mesta i prvi put od svog ulaska u parlament beleže pad podrške. Kristersson je pred izbore najavljivao da bi ih, u slučaju pobede desnog bloka, prvi put uključio i direktno u vladu.",
  "Ali ni tri mandata prednosti ne garantuju Andersson stabilnu vlast. Njene potencijalne saveznike dele pitanja poreza, nuklearne energije i migracija, a liberalna Partija centra odbija da bude u vladi zajedno sa Levom partijom. I čak ako centar-levo preuzme vlast, malo je verovatno da će Švedska jednostavno vratiti nekadašnju otvorenu migracionu politiku: stroži kurs poslednjih godina postao je mnogo širi politički konsenzus. Zato je pravo pitanje posle ovih izbora manje ko je pobedio, a više kakvu vladu pobednik uopšte može da sastavi.",
];

export default function SwedenElection2026Article() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA · EVROPA"
      title="Ko dolazi na vlast u Švedskoj? Levica vodi za samo tri mandata"
      dateLabel="14. SEPTEMBAR 2026."
      deck="Opozicioni blok Magdalene Andersson ima 176 prema 173 mandata u novom parlamentu. Ali razlika je toliko mala da Švedska još nema pobednika, a formiranje nove vlade moglo bi da bude teže od samih izbora."
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/69/Magdalena_Andersson_Gothenburg_2026-08-24_02.jpg"
      imageAlt="Magdalena Andersson tokom posete učenicima u Geteborgu, 24. avgusta 2026."
      imageCredit="Foto: Axadem / Wikimedia Commons, CC BY 4.0 · 24. avgust 2026."
      imageHeightClass="h-auto"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
