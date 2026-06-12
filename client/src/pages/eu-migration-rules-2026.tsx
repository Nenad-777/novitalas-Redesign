import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/eu-migration-rules-2026";
const IMAGE_SRC = "/news/eu-flags.jpg";

const PARAGRAPHS = [
  "Posle više od decenije političkih sukoba oko migracija, Evropska unija ulazi u novu fazu svoje istorije. Novi pakt o migracijama i azilu trebalo bi da donese jedinstvena pravila za svih 27 država članica, ali i da odgovori na pitanje koje godinama deli evropske prestonice: kako kontrolisati granice, a sačuvati principe na kojima je Evropska unija izgrađena.",
  "Evropska unija od ovog meseca počinje primenu novog Pakta o migracijama i azilu, najveće reforme evropske migracione politike od izbegličke krize 2015. godine. Cilj reforme je da se uvedu jedinstvena pravila za svih 27 država članica i smanji pritisak na zemlje koje se nalaze na spoljnim granicama Evropske unije.",
  "Nova pravila predviđaju obavezne bezbednosne i identifikacione provere svih osoba koje ilegalno uđu na teritoriju Unije, ubrzane procedure za zahteve za azil, kao i nove mehanizme za vraćanje migranata kojima zaštita nije odobrena.",
  "Jedna od najvažnijih promena odnosi se na sistem solidarnosti među državama članicama. Zemlje koje ne žele da prihvate deo migranata moći će da doprinesu finansijski ili kroz operativnu pomoć državama koje su pod najvećim pritiskom.",
  "Pristalice reforme tvrde da Evropska unija prvi put dobija zajednički okvir koji omogućava kontrolu granica i efikasnije upravljanje migracijama. Kritičari, međutim, upozoravaju da nova pravila donose duže zadržavanje migranata, širenje deportacionih procedura i dodatno udaljavanje Evrope od principa na kojima je godinama gradila svoju politiku azila.",
  "Posebne polemike izazivaju planovi pojedinih evropskih država da deo deportacionih procedura premeštaju u centre van teritorije Evropske unije. Zagovornici tvrde da je reč o neophodnom odgovoru na rast neregularnih migracija, dok protivnici upozoravaju da takva rešenja otvaraju ozbiljna pitanja ljudskih prava i međunarodne odgovornosti.",
  "Posle više od decenije političkih sukoba oko migracija, Evropska unija ulazi u period u kojem će se uspeh nove politike meriti ne samo brojem kontrolisanih prelazaka granice, već i sposobnošću da sačuva ravnotežu između bezbednosti, solidarnosti i zaštite ljudskih prava.",
];

export default function EuMigrationRules2026() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA"
      title="Nova migraciona pravila Evropske unije ulaze u primenu"
      dateLabel="12. jun 2026."
      deck="Novi evropski pakt menja pravila za azil, granice i deportacije"
      imageSrc={IMAGE_SRC}
      imageAlt="Zastave Evropske unije"
      imageCredit="Vizual: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
