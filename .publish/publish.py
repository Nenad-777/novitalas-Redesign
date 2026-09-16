from pathlib import Path

ROOT = Path('.')
PATH = "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti"
IMAGE = "https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG"
TITLE = "Amerika prvi put javno potvrdila: imamo oružje u orbiti"
DECK = "SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava da bi ovaj potez mogao da ubrza novu trku u naoružanju u svemiru."

article = '''import ArticleTemplate from "@/components/ArticleTemplate";

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
'''
(ROOT / 'client/src/pages/UsOrbitalWeaponsArticle.tsx').write_text(article)

# App import and route.
app_path = ROOT / 'client/src/App.tsx'
app = app_path.read_text()
import_line = 'import UsOrbitalWeaponsArticle from "./pages/UsOrbitalWeaponsArticle";\n'
if import_line not in app:
    preferred_marker = 'import SwedenElection2026Article from "./pages/SwedenElection2026Article";\n'
    fallback_marker = 'import RenoirHeistArticle from "./pages/RenoirHeistArticle";\n'
    marker = preferred_marker if preferred_marker in app else fallback_marker
    if marker not in app:
        raise SystemExit('Article import marker not found')
    app = app.replace(marker, marker + import_line, 1)
if PATH not in app:
    marker = '        <Route path="/geopolitika" component={GeopolitikaIndex} />\n'
    route = '''        <Route\n          path="/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti"\n          component={UsOrbitalWeaponsArticle}\n        />\n\n'''
    if marker not in app:
        raise SystemExit('Geopolitika route marker not found')
    app = app.replace(marker, route + marker, 1)
app_path.write_text(app)

# Homepage: orbital weapons story becomes hero; Sweden moves to first secondary card.
home_path = ROOT / 'client/src/pages/Home.tsx'
home = home_path.read_text()
hero_start = home.index('const HERO_ARTICLE = {')
articles_start = home.index('const ARTICLES = [', hero_start)
new_hero = '''const HERO_ARTICLE = {\n  href: "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti",\n  category: "GEOPOLITIKA · SVEMIR",\n  title: "Amerika prvi put javno potvrdila: imamo oružje u orbiti",\n  description:\n    "SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava na novu trku u naoružanju u svemiru.",\n  imageSrc:\n    "https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG",\n  imageAlt:\n    "Američki sekretar Ratnog vazduhoplovstva Troy Meink govori na konferenciji Air, Space & Cyber 14. septembra 2026.",\n};\n\n'''
home = home[:hero_start] + new_hero + home[articles_start:]
articles_block = home[home.index('const ARTICLES = ['):home.index('function useFadeIn')]
if '/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata' not in articles_block:
    sweden_card = '''const ARTICLES = [\n  {\n    href: "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata",\n    category: "GEOPOLITIKA · EVROPA",\n    title: "Ko dolazi na vlast u Švedskoj? Levica vodi za samo tri mandata",\n    description:\n      "Opozicioni blok Magdalene Andersson ima 176 prema 173 mandata u novom parlamentu. Ali razlika je toliko mala da Švedska još nema pobednika, a formiranje nove vlade moglo bi da bude teže od samih izbora.",\n    imageSrc:\n      "https://upload.wikimedia.org/wikipedia/commons/6/69/Magdalena_Andersson_Gothenburg_2026-08-24_02.jpg",\n    imageAlt:\n      "Magdalena Andersson tokom posete učenicima u Geteborgu, 24. avgusta 2026.",\n  },\n'''
    home = home.replace('const ARTICLES = [\n', sweden_card, 1)
home_path.write_text(home)

# Geopolitika index: newest story first.
geo_path = ROOT / 'client/src/pages/GeopolitikaIndex.tsx'
geo = geo_path.read_text()
if PATH not in geo:
    marker = 'const ARTICLES: Article[] = [\n'
    entry = '''const ARTICLES: Article[] = [\n  {\n    href: "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti",\n    title: "Amerika prvi put javno potvrdila: imamo oružje u orbiti",\n    description:\n      "SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava na novu trku u naoružanju u svemiru.",\n    imageSrc:\n      "https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG",\n    imageAlt:\n      "Američki sekretar Ratnog vazduhoplovstva Troy Meink govori na konferenciji Air, Space & Cyber 14. septembra 2026.",\n  },\n'''
    if marker not in geo:
        raise SystemExit('Geopolitika ARTICLES marker not found')
    geo = geo.replace(marker, entry, 1)
geo_path.write_text(geo)

# SEO metadata.
meta_path = ROOT / 'shared/articleMeta.ts'
meta = meta_path.read_text()
if PATH not in meta:
    marker = 'export const articleMeta: ArticleStaticMeta[] = [\n'
    entry = '''export const articleMeta: ArticleStaticMeta[] = [\n  {\n    path: "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti",\n    title: "Amerika prvi put javno potvrdila: imamo oružje u orbiti",\n    description:\n      "SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava da bi ovaj potez mogao da ubrza novu trku u naoružanju u svemiru.",\n    imageSrc: "https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG",\n    datePublished: "2026-09-16",\n    author: "Novi Talas",\n    section: "Geopolitika · Svemir",\n    keywords: "SAD, svemir, oružje u orbiti, Space Force, Troy Meink, Kina, Rusija, svemirsko naoružanje",\n  },\n'''
    if marker not in meta:
        raise SystemExit('articleMeta marker not found')
    meta = meta.replace(marker, entry, 1)
meta_path.write_text(meta)

# Make the publisher inert after this approved publication. A future publication
# requires an explicit new preparation step before READY can do anything.
Path('.publish/publish.py').write_text(
    '# No-op. Publication payload consumed. A new exact OBJAVA is required before preparing another payload.\n'
)
