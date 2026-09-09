from pathlib import Path
import base64

ROOT = Path('.')
PUB = ROOT / '.publish-renoir'


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if new in text:
        return text
    if old not in text:
        raise SystemExit(f'Could not find patch marker: {label}')
    return text.replace(old, new, 1)

# Decode the approved visual.
news = ROOT / 'client/public/news'
news.mkdir(parents=True, exist_ok=True)
parts = sorted(PUB.glob('renoir.part.*'))
if not parts:
    raise SystemExit('Missing Renoir image chunks')
payload = ''.join(p.read_text() for p in parts)
(news / 'renoir-heist-2026.jpg').write_bytes(base64.b64decode(payload))

# Write the final NT article: headline + deck + exactly four paragraphs.
article_path = ROOT / 'client/src/pages/RenoirHeistArticle.tsx'
article_path.write_text('''import ArticleTemplate from "@/components/ArticleTemplate";\n\nconst PATH =\n  "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda";\n\nconst PARAGRAPHS = [\n  "U utorak rano ujutru dvojica provalnika upala su u Muzej Renoar u Kanj-sur-Meru, na Azurnoj obali, i odnela četiri slike Pjera-Ogista Renoara. Alarm se oglasio u 5.48, policija je stigla pet minuta kasnije, ali su lopovi već bili u bekstvu. Dve slike pronađene su u blizini muzeja, dok se Portret gospođe Kolona Romano i Mlada žena na bunaru i dalje traže. Ukupna vrednost četiri dela procenjena je na oko devet miliona evra.",\n  "Na prvi pogled, priča izgleda kao filmska pljačka. Ali kod krađe velikih umetničkih dela postoji paradoks: što je slika poznatija, to ju je teže prodati. Renoar ne može jednostavno da se pojavi na aukciji ili kod ozbiljnog trgovca umetninama, jer bi svaki pokušaj prodaje odmah otvorio pitanje porekla dela. Ukradeno remek-delo tako može da vredi milione, a da istovremeno bude gotovo bezvredno na legalnom tržištu.",\n  "Zato se poznata umetnička dela ponekad ne kradu radi obične preprodaje. Stručnjaci za umetnički kriminal upozoravaju da mogu završiti kao zalog u kriminalnim mrežama, sredstvo pregovaranja ili imovina koja godinama ostaje skrivena. U ovom slučaju postoji i jednostavnije objašnjenje: lopovi su možda samo procenili da je mali muzej lakša meta, ne računajući koliko je teško Renoara pretvoriti u novac.",\n  "Muzej iz kojeg su slike nestale nije velika nacionalna institucija, već poslednji Renoarov dom, kuća koja danas čuva njegove slike, predmete, nameštaj i tragove svakodnevnog života. Tri od četiri ukradena dela imaju i poseban status umetnina vraćenih u Francusku posle Drugog svetskog rata, čiji prvobitni vlasnici nisu pouzdano utvrđeni. Tako su dela koja već nose istoriju gubitka i povratka ponovo postala predmet potrage.",\n];\n\nexport default function RenoirHeistArticle() {\n  return (\n    <ArticleTemplate\n      path={PATH}\n      sectionLabel="KULTURA"\n      title="Ko krade Renoara ako ne može da ga proda?"\n      dateLabel="9. SEPTEMBAR 2026."\n      deck="Dvojica lopova odnela su četiri Renoarove slike iz muzeja na Azurnoj obali. Dve su ubrzo pronađene, dve su nestale. Ali prava misterija nije samo gde su slike, već čemu služi krađa dela koje je gotovo nemoguće prodati."\n      imageSrc="/news/renoir-heist-2026.jpg"\n      imageAlt="Ilustracija umetničkog dela u muzeju pored praznog mesta na zidu, povodom krađe Renoarovih slika."\n      imageCredit="Ilustracija: Novi Talas"\n      imageFirst={true}\n      paragraphs={PARAGRAPHS}\n      backHref="/nasa-planeta"\n      backLabel="← Nazad na Našu planetu"\n    />\n  );\n}\n''')

# App import + route.
app_path = ROOT / 'client/src/App.tsx'
app = app_path.read_text()
app = replace_once(
    app,
    'import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";\n',
    'import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";\nimport RenoirHeistArticle from "./pages/RenoirHeistArticle";\n',
    'Renoir import',
)
route_marker = '        <Route path="/nasa-planeta" component={NasaPlanetaIndex} />\n'
route_block = '''        <Route\n          path="/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda"\n          component={RenoirHeistArticle}\n        />\n\n        <Route path="/nasa-planeta" component={NasaPlanetaIndex} />\n'''
app = replace_once(app, route_marker, route_block, 'Renoir route')
app_path.write_text(app)

# Homepage: Renoir becomes the main clickable story; preserve the previous hero in Najnovije.
home_path = ROOT / 'client/src/pages/Home.tsx'
home = home_path.read_text()
start = home.index('const HERO_ARTICLE = {')
articles_pos = home.index('const ARTICLES = [', start)
hero = '''const HERO_ARTICLE = {\n  href: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",\n  category: "KULTURA",\n  title: "Ko krade Renoara ako ne može da ga proda?",\n  description:\n    "Dvojica lopova odnela su četiri Renoarove slike iz muzeja na Azurnoj obali. Dve su pronađene, dve su nestale. Ali prava misterija je čemu služi krađa dela koje je gotovo nemoguće prodati.",\n  imageSrc: "/news/renoir-heist-2026.jpg",\n  imageAlt:\n    "Ilustracija umetničkog dela u muzeju pored praznog mesta na zidu, povodom krađe Renoarovih slika.",\n};\n\n'''
home = home[:start] + hero + home[articles_pos:]
previous_hero_card = '''const ARTICLES = [\n  {\n    href: "/nasa-planeta/svet-ce-gotovo-izvesno-preci-granicu-od-1-5-stepeni",\n    category: "Naša planeta",\n    title: "Svet će gotovo izvesno preći granicu od 1,5 stepeni",\n    description:\n      "UNEP ocenjuje da se prekoračenje ključne granice globalnog zagrevanja više ne može realno izbeći. Pariski cilj ne nestaje, ali se menja pitanje koliko ćemo tu granicu prekoračiti i koliko dugo ćemo iznad nje ostati.",\n    imageSrc: "/news/global-warming-1-5-degree-threshold.jpg",\n    imageAlt:\n      "Grafička ilustracija Zemlje koja prelazi simboličnu granicu globalnog zagrevanja",\n  },\n'''
articles_start = home.index('const ARTICLES = [')
articles_end = home.index('function useFadeIn', articles_start)
if '/nasa-planeta/svet-ce-gotovo-izvesno-preci-granicu-od-1-5-stepeni' not in home[articles_start:articles_end]:
    home = home.replace('const ARTICLES = [\n', previous_hero_card, 1)
home_path.write_text(home)

# Naša planeta / culture listing: put the new item first.
nasa_path = ROOT / 'client/src/pages/NasaPlanetaIndex.tsx'
nasa = nasa_path.read_text()
nasa_entry = '''const ARTICLES: NasaPlanetaArticle[] = [\n  {\n    href: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",\n    img: "/news/renoir-heist-2026.jpg",\n    alt: "Ilustracija umetničkog dela u muzeju pored praznog mesta na zidu, povodom krađe Renoarovih slika.",\n    imageCredit: "Ilustracija: Novi Talas",\n    title: "Ko krade Renoara ako ne može da ga proda?",\n    description:\n      "Dvojica lopova odnela su četiri Renoarove slike iz muzeja na Azurnoj obali. Dve su pronađene, dve su nestale. Ali prava misterija je čemu služi krađa dela koje je gotovo nemoguće prodati.",\n  },\n'''
if '/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda' not in nasa:
    nasa = nasa.replace('const ARTICLES: NasaPlanetaArticle[] = [\n', nasa_entry, 1)
nasa_path.write_text(nasa)

# SEO, canonical, social card and search registry source.
meta_path = ROOT / 'shared/articleMeta.ts'
meta = meta_path.read_text()
meta_marker = 'export const articleMeta: ArticleStaticMeta[] = [\n'
meta_entry = '''export const articleMeta: ArticleStaticMeta[] = [\n  {\n    path: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",\n    title: "Ko krade Renoara ako ne može da ga proda?",\n    seoTitle: "Ko krade Renoara ako ne može da ga proda? | Novi Talas",\n    description:\n      "Dve Renoarove slike i dalje su nestale posle pljačke muzeja na Azurnoj obali. Zašto se krade remek-delo koje je gotovo nemoguće legalno prodati?",\n    imageSrc: "/news/renoir-heist-2026.jpg",\n    datePublished: "2026-09-09",\n    author: "Novi Talas",\n    section: "Kultura",\n    keywords: "Renoar, Muzej Renoar, Kanj-sur-Mer, krađa umetnina, Azurna obala",\n  },\n'''
if '/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda' not in meta:
    meta = replace_once(meta, meta_marker, meta_entry, 'Renoir articleMeta')
meta_path.write_text(meta)

# Clean publication helpers from the final tree.
for p in sorted(PUB.glob('*')):
    p.unlink()
try:
    PUB.rmdir()
except OSError:
    pass
workflow = ROOT / '.github/workflows/publish-renoir-2026-09-09.yml'
if workflow.exists():
    workflow.unlink()
