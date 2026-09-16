import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti";

const PARAGRAPHS = [
  "Američki sekretar Ratnog vazduhoplovstva Troy Meink izjavio je na konferenciji Air, Space & Cyber da američko Ratno vazduhoplovstvo i Space Force raspolažu sa \"on-orbit space control weapons\", odnosno sistemima za kontrolu svemira koji se već nalaze u orbiti. Američke vlasti nisu objavile njihov broj, tehničke karakteristike niti precizno objasnile na koji način mogu da deluju protiv mogućih protivnika. Američki Space Force je objavu zvanično potvrdio 15. septembra.",
  "Javno priznanje predstavlja važnu promenu u načinu na koji Vašington govori o vojnoj upotrebi svemira. Sateliti već decenijama služe za navigaciju, komunikaciju, izviđanje i rano upozoravanje, ali je postojanje oružja raspoređenog direktno u orbiti do sada bilo tema o kojoj se govorilo mnogo opreznije. Pentagon sada poručuje da je cilj novih sposobnosti zaštita američkih svemirskih sistema i odvraćanje protivnika, dok detalji ostaju poverljivi.",
  "Reakcije su stigle gotovo odmah. Kina je danas upozorila da američko raspoređivanje oružja u svemiru može da izazove novu međunarodnu trku u naoružanju, dok je Rusija ocenila da takav razvoj povećava rizik od sukoba koji bi mogao da ugrozi satelite od kojih zavise komunikacije, navigacija i veliki deo savremene ekonomije. Vašington, Peking i Moskva već godinama razvijaju različite sposobnosti za ometanje ili neutralisanje protivničkih satelita, ali otvoreno priznanje oružja u orbiti podiže tu konkurenciju na novi nivo.",
  "Postoji i važna pravna nijansa. Sporazum o svemiru iz 1967. zabranjuje postavljanje nuklearnog i drugog oružja za masovno uništenje u orbitu, ali ne sadrži opštu zabranu svih konvencionalnih vojnih sistema u svemiru. Zato američko priznanje samo po sebi ne znači da je sporazum prekršen. Ali ono otvara pitanje koje je decenijama bilo uglavnom teorijsko: da li svemir iz prostora strateškog nadmetanja ulazi u eru u kojoj će države tamo otvoreno raspoređivati oružje?",
];

export default function UsOrbitalWeaponsArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA · SVEMIR"
      title="Amerika prvi put javno potvrdila: imamo oružje u orbiti"
      dateLabel="16. SEPTEMBAR 2026."
      deck="SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava da bi ovaj potez mogao da ubrza novu trku u naoružanju u svemiru."
      imageSrc="https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG"
      imageAlt="Američki sekretar Ratnog vazduhoplovstva Troy Meink govori na konferenciji Air, Space & Cyber 14. septembra 2026."
      imageCredit="U.S. Air Force photo / Andy Morataya — Public Domain"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
