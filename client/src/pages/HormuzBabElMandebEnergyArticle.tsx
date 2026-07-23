import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/dva-moreuza-jedan-rat-sukob-sad-i-irana-ugrozava-svetske-energetske-puteve";
const IMAGE_SRC = "/news/hormuz-bab-el-mandeb-energy-chokepoints.jpg";

const PARAGRAPHS = [
  "Jemenski Huti saopštili su da su raketama i bespilotnim letelicama napali dva saudijska naftna tankera u Crvenom moru, čime je rat Sjedinjenih Američkih Država i Irana dobio novu i potencijalno opasniju dimenziju.",
  "Huti tvrde da su tankeri „Encelia“ i „Layla“ prekršili pomorsku blokadu koju je grupa proglasila protiv Saudijske Arabije. Saudijske vlasti potvrdile su da je „Encelia“ pogođena u blizini luke Džizan i da je u prednjem delu broda izbio požar. Svi članovi posade su bezbedni, dok napad na drugi tanker još nije nezavisno potvrđen.",
  "Pomorski podaci pokazuju da je pet tankera već promenilo kurs u Crvenom moru, dok su se tri broda natovarena saudijskom naftom namenjenom Kini i Indiji okrenula i odustala od prvobitne rute. Istovremeno je američka vojska izvela dvanaestu uzastopnu noć udara na ciljeve u Iranu.",
  "Najveći značaj napada nije samo u tome što je pogođen još jedan tanker. Huti su ugrozili upravo put kojim Saudijska Arabija pokušava da nadomesti gotovo zatvoren Ormuski moreuz.",
  "Rijad naftovodom transportuje velike količine sirove nafte od Persijskog zaliva do luke Janbu na Crvenom moru. Time se izbegava Ormuz, kroz koji je tokom prve polovine 2025. prolazilo približno 20,9 miliona barela nafte i naftnih derivata dnevno. Međutim, brodovi koji iz Janbua plove prema azijskim tržištima moraju da prođu kroz Bab el Mandeb, na jugu Crvenog mora. Kroz taj prolaz se u istom periodu transportovalo oko 4,2 miliona barela dnevno.",
  "Drugim rečima, alternativni saudijski put sada je ugrožen na svom drugom kraju.",
  "Dok Iran kontroliše ili ozbiljno ometa prolazak kroz Ormuz, Huti mogu da ugroze Crveno more i Bab el Mandeb. Time Teheran dobija novu polugu pritiska, a Vašington više ne mora da štiti samo plovidbu u Persijskom zalivu, već i brodove na drugoj strani Arabijskog poluostrva.",
  "Cena nafte reagovala je gotovo trenutno. Brent je porastao za oko četiri odsto, na gotovo 98 dolara po barelu, što je najviši nivo od početka juna. Tržišta za sada obračunavaju prvenstveno rizik od budućih poremećaja, ali redovni napadi mogli bi da povećaju cenu osiguranja, prevoza i goriva čak i bez potpunog zatvaranja moreuza.",
  "Kriza stavlja i Saudijsku Arabiju pred težak izbor. Rijad je do sada pokušavao da ostane izvan neposrednog američko-iranskog sukoba i sačuva krhko primirje sa Hutima. Nastavak napada na saudijske brodove mogao bi, međutim, da izazove vojni odgovor i ponovo otvori ratni front u Jemenu.",
  "Ormuski moreuz i Bab el Mandeb geografski se nalaze na suprotnim stranama Arabijskog poluostrva, ali predstavljaju delove istog energetskog sistema. Dok je ugrožen samo jedan prolaz, trgovina još može da traži alternativu. Ukoliko su oba istovremeno nesigurna, mogućnosti za preusmeravanje nafte postaju znatno manje i skuplje.",
  "Zbog toga napad na saudijski tanker nije samo još jedan incident u dugom bliskoistočnom sukobu. On pokazuje da se rat SAD i Irana širi sa vojnih baza i raketnih položaja na samu arhitekturu svetskog snabdevanja energijom.",
  "Ukoliko Iran nastavi da blokira Ormuz, a Huti napade u Crvenom moru, pitanje više neće biti da li će nafta poskupeti — već koliko će globalna ekonomija platiti rat na oba kraja Arabijskog poluostrva.",
];

export default function HormuzBabElMandebEnergyArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Dva moreuza, jedan rat: sukob SAD i Irana ugrožava svetske energetske puteve"
      dateLabel="23. jul 2026."
      deck="Napad Huta na saudijske tankere u Crvenom moru otvorio je drugi front na putevima svetske nafte. Dok Iran gotovo zatvara Ormuski moreuz, njegov jemenski saveznik ugrožava Bab el Mandeb — prolaz kojim je Saudijska Arabija pokušavala da zaobiđe krizu u Persijskom zalivu."
      imageSrc={IMAGE_SRC}
      imageAlt="Grafička ilustracija dva ugrožena energetska prolaza, Ormuskog moreuza i Bab el Mandeba"
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
