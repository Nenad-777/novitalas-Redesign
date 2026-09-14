from pathlib import Path

ROOT = Path('.')
PATH = "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata"

article = '''import ArticleTemplate from "@/components/ArticleTemplate";

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
'''
(ROOT / 'client/src/pages/SwedenElection2026Article.tsx').write_text(article)

# App import and route.
app_path = ROOT / 'client/src/App.tsx'
app = app_path.read_text()
import_line = 'import SwedenElection2026Article from "./pages/SwedenElection2026Article";\n'
if import_line not in app:
    marker = 'import RenoirHeistArticle from "./pages/RenoirHeistArticle";\n'
    if marker not in app:
        raise SystemExit('Renoir import marker not found')
    app = app.replace(marker, marker + import_line, 1)
if PATH not in app:
    marker = '        <Route path="/geopolitika" component={GeopolitikaIndex} />\n'
    route = '''        <Route
          path="/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata"
          component={SwedenElection2026Article}
        />

'''
    if marker not in app:
        raise SystemExit('Geopolitika route marker not found')
    app = app.replace(marker, route + marker, 1)
app_path.write_text(app)

# Homepage: Sweden becomes hero; Renoir moves to first secondary card.
home_path = ROOT / 'client/src/pages/Home.tsx'
home = home_path.read_text()
hero_start = home.index('const HERO_ARTICLE = {')
articles_start = home.index('const ARTICLES = [', hero_start)
new_hero = '''const HERO_ARTICLE = {
  href: "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata",
  category: "GEOPOLITIKA · EVROPA",
  title: "Ko dolazi na vlast u Švedskoj? Levica vodi za samo tri mandata",
  description:
    "Opozicioni blok Magdalene Andersson ima 176 prema 173 mandata u novom parlamentu. Ali razlika je toliko mala da Švedska još nema pobednika, a formiranje nove vlade moglo bi da bude teže od samih izbora.",
  imageSrc:
    "https://upload.wikimedia.org/wikipedia/commons/6/69/Magdalena_Andersson_Gothenburg_2026-08-24_02.jpg",
  imageAlt:
    "Magdalena Andersson tokom posete učenicima u Geteborgu, 24. avgusta 2026.",
};

'''
home = home[:hero_start] + new_hero + home[articles_start:]
articles_block = home[home.index('const ARTICLES = ['):home.index('function useFadeIn')]
if '/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda' not in articles_block:
    renoir = '''const ARTICLES = [
  {
    href: "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda",
    category: "KULTURA",
    title: "Ko krade Renoara ako ne može da ga proda?",
    description:
      "Dvojica lopova odnela su četiri Renoarove slike iz muzeja na Azurnoj obali. Dve su pronađene, dve su nestale. Ali prava misterija je čemu služi krađa dela koje je gotovo nemoguće prodati.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Renoir_-_Portrait_de_Madame_Colonna_Romano%2C_non_dat%C3%A9.jpg",
    imageAlt:
      "Pjer-Ogist Renoar, Portret gospođe Kolona Romano, jedna od dve slike koje se i dalje traže.",
  },
'''
    home = home.replace('const ARTICLES = [\n', renoir, 1)
home_path.write_text(home)

# Geopolitika index: newest story first.
geo_path = ROOT / 'client/src/pages/GeopolitikaIndex.tsx'
geo = geo_path.read_text()
if PATH not in geo:
    marker = 'const ARTICLES: Article[] = [\n'
    entry = '''const ARTICLES: Article[] = [
  {
    href: "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata",
    title: "Ko dolazi na vlast u Švedskoj? Levica vodi za samo tri mandata",
    description:
      "Opozicioni blok Magdalene Andersson ima 176 prema 173 mandata u novom parlamentu. Ali razlika je toliko mala da Švedska još nema pobednika, a formiranje nove vlade moglo bi da bude teže od samih izbora.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Magdalena_Andersson_Gothenburg_2026-08-24_02.jpg",
    imageAlt:
      "Magdalena Andersson tokom posete učenicima u Geteborgu, 24. avgusta 2026.",
  },
'''
    if marker not in geo:
        raise SystemExit('Geopolitika ARTICLES marker not found')
    geo = geo.replace(marker, entry, 1)
geo_path.write_text(geo)

# SEO metadata.
meta_path = ROOT / 'shared/articleMeta.ts'
meta = meta_path.read_text()
if PATH not in meta:
    marker = 'export const articleMeta: ArticleStaticMeta[] = [\n'
    entry = '''export const articleMeta: ArticleStaticMeta[] = [
  {
    path: "/geopolitika/ko-dolazi-na-vlast-u-svedskoj-levica-vodi-za-samo-tri-mandata",
    title: "Ko dolazi na vlast u Švedskoj? Levica vodi za samo tri mandata",
    description:
      "Opozicioni blok Magdalene Andersson ima 176 prema 173 mandata u novom parlamentu. Ali razlika je toliko mala da Švedska još nema pobednika, a formiranje nove vlade moglo bi da bude teže od samih izbora.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/69/Magdalena_Andersson_Gothenburg_2026-08-24_02.jpg",
    datePublished: "2026-09-14",
    author: "Novi Talas",
    section: "Geopolitika · Evropa",
    keywords: "Švedska, izbori, Magdalena Andersson, Ulf Kristersson, Socijaldemokrate, Švedske demokrate, Riksdag",
  },
'''
    if marker not in meta:
        raise SystemExit('articleMeta marker not found')
    meta = meta.replace(marker, entry, 1)
meta_path.write_text(meta)

# Remove one-shot publication helpers from the final commit.
for helper in [
    ROOT / '.publish/sweden_2026_09_14.py',
    ROOT / '.github/workflows/publish-sweden-2026-09-14.yml',
]:
    if helper.exists():
        helper.unlink()
