import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/misu-ugradjen-deo-ljudskog-mozga-naucnici-otvorili-novu-eru-istrazivanja";

const PARAGRAPHS = [
  "U studiji objavljenoj u časopisu Nature, tim predvođen istraživačima sa Stanforda koristio je ljudske kortikalne organoide — trodimenzionalno moždano tkivo uzgojeno iz matičnih ćelija — i ugradio ih u novorođene, genetski izmenjene miševe kojima je razvoj velikog dela kore mozga i hipokampusa bio snažno redukovan. Ljudsko tkivo je u tom prostoru nastavilo da raste, formira nervne ćelije i uspostavlja veze sa mišjim nervnim sistemom. Nature je ovaj rezultat opisao kao do sada najopsežniju integraciju ljudskih moždanih ćelija u životinjski mozak.",
  "Za neurologiju je to važno zato što organoidi koji rastu samo u laboratorijskoj posudi imaju ozbiljna ograničenja: ne prolaze kroz isto okruženje, stimulaciju i razvojne procese kao nervno tkivo u živom organizmu. Novi model omogućava istraživačima da ljudske neurone posmatraju dok sazrevaju unutar funkcionalnog nervnog sistema i da prate kako reaguju na oštećenje, genetske promene i druge uslove povezane sa bolešću.",
  "Istraživači smatraju da bi ovakav pristup mogao da pomogne u proučavanju autizma, epilepsije, šizofrenije, cerebralne paralize i retkih neuroloških bolesti, kao i u ispitivanju potencijalnih terapija. U jednom delu eksperimenta izlaganje nedostatku kiseonika ostavilo je karakteristične tragove povrede na ljudskom tkivu, što otvara mogućnost da se na ovom modelu detaljnije proučavaju oštećenja mozga koja nastaju oko rođenja.",
  "Eksperiment istovremeno otvara etička pitanja koja će postajati sve važnija kako ovakvi modeli budu napredovali. Autori naglašavaju da životinje nisu pokazale neočekivane kognitivne sposobnosti i da je reč o miševima sa ugrađenim ljudskim nervnim tkivom, a ne o životinjama sa „ljudskom svešću“. Upravo zato istraživanje nosi dvostruku poruku: može da pruži mnogo realniji način za proučavanje bolesti ljudskog mozga, ali zahteva i jasne granice za buduće eksperimente.",
];

export default function MouseHumanBrainArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="NAŠA PLANETA · NAUKA"
      title="Mišu ugrađen deo ljudskog mozga: naučnici otvorili novu eru istraživanja"
      dateLabel="18. SEPTEMBAR 2026."
      deck="Istraživači sa Stanforda uspeli su da u mozak genetski izmenjenih miševa ugrade ljudsko moždano tkivo uzgojeno u laboratoriji. Cilj nije stvaranje „humanizovane“ životinje, već razvoj mnogo vernijeg modela za proučavanje autizma, epilepsije, cerebralne paralize i drugih neuroloških poremećaja."
      imageSrc="/news/mouse-human-brain-organoid.png"
      imageAlt="Ilustracija preseka glave miša sa fluorescentno označenim moždanim strukturama i zeleno istaknutim ljudskim moždanim organoidom."
      imageCredit="Ilustracija: Novi talas / AI"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
