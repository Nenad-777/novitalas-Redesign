import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/artemis-nasa-3.jpg";

const PARAGRAPHS = [
  "Povratak ljudi na Mesec, jedan od najambicioznijih svemirskih poduhvata 21. veka, napravio je novi korak nakon što je NASA predstavila posadu misije Artemis III, prve misije koja bi trebalo da vrati astronaute na površinu Meseca posle više od pola veka.",
  "Program Artemis pokrenut je sa ciljem da obnovi ljudsko prisustvo na Mesecu i postavi temelje za buduće misije ka Marsu. Za razliku od programa Apollo, koji je bio proizvod hladnoratovskog nadmetanja, nova generacija lunarnih misija zamišljena je kao dugoročni projekat istraživanja, razvoja tehnologije i međunarodne saradnje.",
  "Misija Artemis III trebalo bi da označi trenutak u kojem će čovečanstvo ponovo spustiti ljudsku posadu na površinu Meseca. Planirano je da astronauti istražuju područja u blizini južnog pola, region koji poslednjih godina privlači posebnu pažnju naučnika zbog mogućeg prisustva leda i resursa koji bi mogli imati ključnu ulogu u budućim svemirskim bazama.",
  "Predstavljanje posade dolazi u trenutku kada se svetske sile sve intenzivnije okreću svemiru kao novom prostoru tehnološkog, ekonomskog i strateškog nadmetanja. Dok Sjedinjene Države predvode program Artemis, Kina paralelno razvija sopstvene planove za istraživanje Meseca, uključujući mogućnost izgradnje trajne istraživačke baze tokom naredne decenije.",
  "Zbog toga se današnje misije ne posmatraju samo kroz prizmu nauke. One predstavljaju i pokazatelj tehnološke moći, industrijskog kapaciteta i sposobnosti država da realizuju dugoročne projekte čiji rezultati mogu oblikovati budućnost istraživanja svemira.",
  "Posle više od pedeset godina od poslednjeg ljudskog koraka na Mesecu, Artemis III simbolizuje početak nove ere. Ovoga puta cilj nije kratka poseta, već stvaranje uslova za trajnije prisustvo čoveka izvan Zemlje.",
  "Ako misija bude uspešna, naredna decenija mogla bi ostati upamćena kao period u kojem se čovečanstvo vratilo na Mesec — ne da bi ga posetilo, već da bi na njemu ostalo.",
];

export default function NasaPredstavilaPosaduArtemisIII() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/nasa-predstavila-posadu-artemis-iii"
      sectionLabel="Naša planeta"
      title="NASA predstavila posadu misije Artemis III"
      dateLabel="10. JUN 2026."
      deck="Povratak ljudi na Mesec ulazi u novu fazu — NASA je zvanično objavila posadu prve misije koja bi trebalo da vrati astronaute na površinu Meseca posle više od pola veka."
      imageSrc={IMAGE_SRC}
      imageAlt="NASA Artemis III — posada misije koja treba da vrati ljude na Mesec"
      imageCredit="Foto: NASA / Artemis III"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
