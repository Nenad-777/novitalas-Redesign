from pathlib import Path
import base64

ROOT = Path('.')
PUB = ROOT / '.publish'


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if new in text:
        return text
    if old not in text:
        raise SystemExit(f'Could not find patch marker: {label}')
    return text.replace(old, new, 1)

# Decode approved visuals.
news = ROOT / 'client/public/news'
news.mkdir(parents=True, exist_ok=True)
for prefix, target in [
    ('maritime.part.', news / 'pomorski-poredak-2026.jpg'),
    ('ai.part.', news / 'pachocki-alien-mind-2026.jpg'),
]:
    parts = sorted(PUB.glob(prefix + '*'))
    if not parts:
        raise SystemExit(f'Missing image chunks for {prefix}')
    payload = ''.join(p.read_text() for p in parts)
    target.write_bytes(base64.b64decode(payload))

# App routes/imports.
app_path = ROOT / 'client/src/App.tsx'
app = app_path.read_text()
app = replace_once(
    app,
    'import SrbijaActVasingtonBeograd from "./pages/srbija-act-vasington-beograd";\n',
    'import SrbijaActVasingtonBeograd from "./pages/srbija-act-vasington-beograd";\nimport MaritimeOrderArticle from "./pages/MaritimeOrderArticle";\n',
    'maritime import',
)
app = replace_once(
    app,
    'import FrontierAiSlowdownArticle from "./pages/FrontierAiSlowdownArticle";\n',
    'import FrontierAiSlowdownArticle from "./pages/FrontierAiSlowdownArticle";\nimport PachockiAlienMindArticle from "./pages/PachockiAlienMindArticle";\n',
    'AI import',
)
app = replace_once(
    app,
    '''        <Route\n          path="/geopolitika/srbija-act-vasington-beograd"\n          component={SrbijaActVasingtonBeograd}\n        />\n''',
    '''        <Route\n          path="/geopolitika/srbija-act-vasington-beograd"\n          component={SrbijaActVasingtonBeograd}\n        />\n        <Route\n          path="/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca"\n          component={MaritimeOrderArticle}\n        />\n''',
    'maritime route',
)
app = replace_once(
    app,
    '        <Route path="/nasa-planeta" component={NasaPlanetaIndex} />\n',
    '''        <Route\n          path="/nasa-planeta/pachocki-alien-mind-kontrola-vestacke-inteligencije"\n          component={PachockiAlienMindArticle}\n        />\n\n        <Route path="/nasa-planeta" component={NasaPlanetaIndex} />\n''',
    'AI route',
)
app_path.write_text(app)

# Homepage: new maritime hero + Pachocki as first item in Najnovije.
home_path = ROOT / 'client/src/pages/Home.tsx'
home = home_path.read_text()
start = home.index('const HERO_ARTICLE = {')
articles = home.index('const ARTICLES = [', start)
hero = '''const HERO_ARTICLE = {\n  href: "/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca",\n  category: "Svet · Analiza",\n  title: "Poredak koji je držao svet na okupu počinje da puca",\n  description:\n    "Osamnaest velikih pomorskih država upozorava da ratovi, sankcije, flote iz senke i borba za ključne moreuze više nisu prolazni poremećaji. Počinje da se menja sistem po kojem su svetska mora funkcionisala decenijama.",\n  imageSrc: "/news/pomorski-poredak-2026.jpg",\n  imageAlt:\n    "Veliki trgovački brodovi prolaze kroz uski morski prolaz u sumrak.",\n};\n\n'''
home = home[:start] + hero + home[articles:]
ai_card = '''const ARTICLES = [\n  {\n    href: "/nasa-planeta/pachocki-alien-mind-kontrola-vestacke-inteligencije",\n    category: "Naša planeta · Tehnologija",\n    title: "Upozorenje iz samog vrha OpenAI-ja",\n    description:\n      "Glavni naučnik OpenAI-ja Jakub Pachocki upozorava da nijedna laboratorija još nije dovoljno rešila problem usklađivanja i nadzora da bi još dugo odgovorno nastavila razvoj maksimalnom brzinom.",\n    imageSrc: "/news/pachocki-alien-mind-2026.jpg",\n    imageAlt:\n      "Čovek pred ogromnom apstraktnom mrežom koja simbolizuje naprednu veštačku inteligenciju.",\n  },\n'''
# Avoid duplicate if workflow is ever re-run.
if '/nasa-planeta/pachocki-alien-mind-kontrola-vestacke-inteligencije' not in home[home.index('const ARTICLES = ['):home.index('function useFadeIn')]:
    home = home.replace('const ARTICLES = [\n', ai_card, 1)
home_path.write_text(home)

# Section indexes.
geo_path = ROOT / 'client/src/pages/GeopolitikaIndex.tsx'
geo = geo_path.read_text()
geo_entry = '''const ARTICLES: Article[] = [\n  {\n    href: "/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca",\n    title: "Poredak koji je držao svet na okupu počinje da puca",\n    description:\n      "Osamnaest velikih pomorskih država upozorava da ratovi, sankcije, flote iz senke i borba za ključne moreuze više nisu prolazni poremećaji globalne trgovine.",\n    imageSrc: "/news/pomorski-poredak-2026.jpg",\n    imageAlt: "Veliki trgovački brodovi prolaze kroz uski morski prolaz u sumrak.",\n  },\n'''
if '/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca' not in geo:
    geo = geo.replace('const ARTICLES: Article[] = [\n', geo_entry, 1)
geo_path.write_text(geo)

nasa_path = ROOT / 'client/src/pages/NasaPlanetaIndex.tsx'
nasa = nasa_path.read_text()
nasa_entry = '''const ARTICLES: NasaPlanetaArticle[] = [\n  {\n    href: "/nasa-planeta/pachocki-alien-mind-kontrola-vestacke-inteligencije",\n    img: "/news/pachocki-alien-mind-2026.jpg",\n    alt: "Čovek pred ogromnom apstraktnom mrežom koja simbolizuje naprednu veštačku inteligenciju.",\n    imageCredit: "Ilustracija: Novi Talas",\n    title: "Upozorenje iz samog vrha OpenAI-ja: još ne znamo kako da kontrolišemo ono što gradimo",\n    description:\n      "Glavni naučnik OpenAI-ja Jakub Pachocki upozorava da nijedna laboratorija još nije dovoljno rešila problem usklađivanja i nadzora da bi još dugo odgovorno nastavila razvoj maksimalnom brzinom.",\n  },\n'''
if '/nasa-planeta/pachocki-alien-mind-kontrola-vestacke-inteligencije' not in nasa:
    nasa = nasa.replace('const ARTICLES: NasaPlanetaArticle[] = [\n', nasa_entry, 1)
nasa_path.write_text(nasa)

# Static SEO / share metadata.
meta_path = ROOT / 'shared/articleMeta.ts'
meta = meta_path.read_text()
marker = 'export const articleMeta: ArticleStaticMeta[] = [\n'
entries = '''export const articleMeta: ArticleStaticMeta[] = [\n  {\n    path: "/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca",\n    title: "Poredak koji je držao svet na okupu počinje da puca",\n    description:\n      "Osamnaest velikih pomorskih država upozorava da ratovi, sankcije, flote iz senke i borba za ključne moreuze više nisu prolazni poremećaji. Počinje da se menja sistem po kojem su svetska mora funkcionisala decenijama.",\n    imageSrc: "/news/pomorski-poredak-2026.jpg",\n    datePublished: "2026-09-08",\n    author: "Novi Talas",\n    section: "Svet · Analiza",\n  },\n  {\n    path: "/nasa-planeta/pachocki-alien-mind-kontrola-vestacke-inteligencije",\n    title: "Upozorenje iz samog vrha OpenAI-ja: još ne znamo kako da kontrolišemo ono što gradimo",\n    description:\n      "Glavni naučnik OpenAI-ja Jakub Pachocki upozorava da nijedna laboratorija još nije dovoljno rešila problem usklađivanja i nadzora da bi još dugo odgovorno nastavila razvoj maksimalnom brzinom.",\n    imageSrc: "/news/pachocki-alien-mind-2026.jpg",\n    datePublished: "2026-09-08",\n    author: "Novi Talas",\n    section: "Naša planeta · Tehnologija",\n  },\n'''
if '/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca' not in meta:
    if marker not in meta:
        raise SystemExit('articleMeta marker not found')
    meta = meta.replace(marker, entries, 1)
meta_path.write_text(meta)

# Remove temporary publication helpers, including this workflow, from the final commit.
for p in sorted(PUB.glob('*')):
    p.unlink()
try:
    PUB.rmdir()
except OSError:
    pass
wf = ROOT / '.github/workflows/publish-novi-talas-2026-09-08.yml'
if wf.exists():
    wf.unlink()
