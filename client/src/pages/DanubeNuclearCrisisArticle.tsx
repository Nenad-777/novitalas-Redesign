import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/istorijska-susa-ugrozila-nuklearne-elektrane-na-dunavu-rumunija-minira-stenovite-prepreke-madjarska-gasi-reaktore";

const PARAGRAPHS = [
  "Rekordno nizak vodostaj Dunava, izazvan dugotrajnom sušom i talasom ekstremnih vrućina, prerastao je u ozbiljan energetski problem za jugoistočnu Evropu. Dve države koje veliki deo električne energije dobijaju iz nuklearnih elektrana hlađenih vodom iz Dunava – Rumunija i Mađarska – prinuđene su na vanredne mere kako bi sprečile poremećaje u snabdevanju električnom energijom.",
  "Rumunske vlasti naredile su kontrolisano miniranje stenovitih prepreka u koritu Dunava kako bi povećale dotok vode ka nuklearnoj elektrani Černavoda. Cilj ove operacije jeste izgradnja privremene brane koja bi obezbedila dovoljno rashladne vode za reaktor koji je ostao u pogonu, nakon što je drugi već ranije isključen zbog istorijski niskog vodostaja.",
  "Istovremeno, u Mađarskoj je nuklearna elektrana Paks, koja proizvodi gotovo polovinu električne energije u zemlji, svela proizvodnju na minimum. Vlasti upozoravaju da bi, ukoliko se nivo Dunava dodatno smanji, elektrana mogla prvi put za više od četiri decenije potpuno da obustavi rad.",
  "Kako bi rasteretile elektroenergetske mreže, obe države pozvale su građane i privredu da smanje potrošnju električne energije. U Rumuniji su pojedini veliki industrijski pogoni, među kojima su fabrike kompanija Dacia i Ford, privremeno obustavili proizvodnju kako bi deo raspoložive električne energije ostao na raspolaganju domaćinstvima i kritičnoj infrastrukturi.",
  "Posledice rekordne suše osećaju se širom regiona. Nizak vodostaj otežava plovidbu Dunavom, usporava transport robe i smanjuje proizvodnju hidroelektrana, dok meteorološke prognoze za sada ne najavljuju značajnije padavine koje bi mogle da poprave stanje.",
  "Događaji na Dunavu pokazuju koliko klimatski ekstremi mogu da promene funkcionisanje evropske energetike. Reka koja povezuje deset država postala je jedan od ključnih oslonaca energetske bezbednosti regiona, jer od njenog vodostaja danas zavisi rad nuklearnih elektrana, plovidba i stabilnost elektroenergetskih sistema. Svaki novi dan bez ozbiljnijih padavina povećava rizik od novih ograničenja u proizvodnji električne energije i dodatnog pritiska na privredu širom srednje i jugoistočne Evrope.",
];

export default function DanubeNuclearCrisisArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Istorijska suša ugrozila nuklearne elektrane na Dunavu: Rumunija minira stenovite prepreke, Mađarska gasi reaktore"
      dateLabel="3. avgust 2026."
      deck="Rekordno nizak vodostaj Dunava primorao je Rumuniju i Mađarsku na vanredne mere kako bi zaštitile rad svojih nuklearnih elektrana i očuvale stabilnost elektroenergetskih sistema."
      imageSrc="/news/danube-slankamen.jpg"
      imageAlt="Panoramski pogled na Dunav kod Starog Slankamena."
      imageCredit="Foto: Lukder / Wikimedia Commons (CC BY-SA 4.0)"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
