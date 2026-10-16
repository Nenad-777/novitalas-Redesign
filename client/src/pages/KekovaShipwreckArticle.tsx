import ArticleTemplate from "@/components/ArticleTemplate";
const PATH = "/nasa-planeta/najstariji-brodolom-kekova-turska-4700-godina";
const IMAGE_SRC = "/news/kekova-shipwreck-illustration.svg";
const PARAGRAPHS = [
  "Arheolozi koji istražuju podmorje kod ostrva Kekova, u blizini južne obale Turske, pronašli su tragove brodoloma starog između 4.400 i 4.700 godina. Lokalitet je na dubini od oko 30 metara. Prema proceni turskih istraživača, reč je o najstarijem poznatom brodolomu, a naučni rad na nalazištu i dalje traje.",
  "Na mestu potonuća pronađene su amfore, velike keramičke posude za skladištenje i transport robe, kao i kamena sidra. Drveni trup broda nije sačuvan, pa su arheolozi starost nalazišta određivali poređenjem oblika keramike sa predmetima iz ranog bronzanog doba. Starost su dodatno potkrepili sidra i drugi predmeti pronađeni na morskom dnu.",
  "Posude su, prema dosadašnjim procenama, najverovatnije služile za prevoz maslinovog ulja ili vina. Posebnu pažnju privukla je jedna amfora sa devet oznaka i dva otvora, za koju istraživači pretpostavljaju da je možda korišćena za pravljenje sira ili maslaca. Ostaje otvoreno pitanje da li su moreplovci tokom dugih putovanja na brodu prerađivali mleko.",
  "Analize gline ukazuju na to da su neke od amfora verovatno izrađene u radionicama u dolini Jordana, dok su slični primerci pronalaženi u Egiptu, Troji i na Kritu. Ovakve podudarnosti predstavljaju dragocene tragove o pomorskim trgovačkim mrežama koje su povezivale različite delove istočnog Mediterana pre gotovo pet hiljada godina.",
  "Istraživački tim, koji predvodi profesor Hakan Eniz sa Univerziteta Akdeniz, smatra da je brod možda plovio od levantinske obale ka Troji ili Kritu kada je potonuo. Nalaz se poredi sa drugim brodolomima iz bronzanog doba, a istraživači naglašavaju da dodatna proučavanja tereta mogu pružiti precizniju sliku o njegovom poreklu i poslednjem putovanju.",
  "Vrednost otkrića nije samo u mogućem rekordu. Predmeti sa morskog dna svedoče o ljudima koji su davno pre savremenih mapa, luka i navigacije povezivali civilizacije preko Mediterana. Njihova trgovina, hrana i svakodnevica ponovo postaju vidljivi zahvaljujući predmetima koje je more sačuvalo milenijumima."
];
export default function KekovaShipwreckArticle() {
  return <ArticleTemplate
    path={PATH}
    sectionLabel="Naša planeta"
    title="Najstariji poznati brodolom na svetu pronađen kod Turske: teret ležao na dnu skoro pet milenijuma"
    dateLabel="16. OKTOBAR 2026."
    authorLabel="Novi Talas"
    deck="Kod ostrva Kekova na jugu Turske arheolozi su pronašli ostatke brodoloma starog između 4.400 i 4.700 godina. Istraživači smatraju da bi mogao biti najstariji poznati brodolom na svetu."
    imageSrc={IMAGE_SRC}
    imageAlt="AI ilustracija amfora i kamenog sidra na morskom dnu, inspirisana otkrićem brodoloma kod Kekove."
    imageCredit="Ilustracija: Novi talas / AI generisano. Nije fotografija arheološkog nalazišta."
    imageFirst={true}
    imageHeightClass="h-auto aspect-video"
    paragraphs={PARAGRAPHS}
    backHref="/nasa-planeta"
    backLabel="← Nazad na Našu planetu"
  />;
}
