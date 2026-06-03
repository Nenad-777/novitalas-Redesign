import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/ai-humnoid.jpg";

const PARAGRAPHS = [
  "Nvidia je saopštila da će proširiti saradnju sa proizvođačima humanoidnih robota u Sjedinjenim Državama i Evropi, istovremeno nastavljajući rad sa kineskom kompanijom Unitree, jednim od najpoznatijih proizvođača robota u Aziji. Ovaj potez potvrđuje da se razvoj humanoidnih robota ubrzano pretvara u jedno od najvažnijih tehnoloških i ekonomskih nadmetanja današnjice.",
  "Kompanija, koja je postala simbol revolucije veštačke inteligencije zahvaljujući svojim naprednim procesorima, želi da njena tehnologija postane osnova buduće generacije robota sposobnih da obavljaju fizičke poslove u fabrikama, skladištima, bolnicama i svakodnevnom životu. Za razliku od industrijskih robota koji decenijama rade u strogo kontrolisanim uslovima, nova generacija humanoidnih sistema projektovana je da funkcioniše u okruženju prilagođenom ljudima.",
  "Poslednjih godina Kina je značajno ubrzala razvoj humanoidne robotike. Kompanije poput Unitree-a predstavile su robote koji mogu da hodaju, trče, nose teret i izvršavaju složene zadatke uz pomoć veštačke inteligencije. Istovremeno, američke i evropske kompanije pokušavaju da sustignu ili zadrže tehnološku prednost kroz nova partnerstva i investicije.",
  "Stručnjaci smatraju da se svet nalazi na početku nove industrijske transformacije. Kao što su računari promenili kancelarije, a internet komunikaciju, humanoidni roboti mogli bi da promene način na koji funkcionišu proizvodnja, logistika i uslužne delatnosti. Pitanje više nije da li će takvi roboti postati deo svakodnevnog života, već koliko brzo će njihova primena postati ekonomski isplativa.",
  "Iza tehnološke priče krije se i geopolitička dimenzija. Sjedinjene Države, Evropska unija i Kina sve otvorenije posmatraju veštačku inteligenciju i robotiku kao strateške sektore od nacionalnog značaja. U tom kontekstu, razvoj humanoidnih robota postaje mnogo više od tržišne utakmice — postaje pitanje tehnološke moći i konkurentnosti u svetu koji ubrzano ulazi u eru automatizacije.",
  "Ako je prethodna decenija bila obeležena trkom za dominaciju u oblasti veštačke inteligencije, naredna bi mogla ostati upamćena kao period u kojem je ta inteligencija dobila telo. Humanoidni roboti više nisu tema naučne fantastike, već sledeća velika tehnološka platforma oko koje se formiraju novi industrijski i geopolitički savezi. Za mnoge države, pitanje više nije kako razviti robota, već kako ne zaostati u trci koja je već počela.",
];

export default function NvidiaUlaziUGlobalnuTrkuZaHumanoidneRobote() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/nvidia-ulazi-u-globalnu-trku-za-humanoidne-robote"
      sectionLabel="Naša planeta"
      title="Nvidia ulazi u globalnu trku za humanoidne robote"
      dateLabel="2. JUN 2026."
      authorLabel="Novi Talas"
      deck="Američki tehnološki gigant najavio je saradnju sa proizvođačima humanoidnih robota iz Sjedinjenih Država i Evrope, dok Kina ubrzano razvija sopstvene sisteme. Počinje nova industrijska revolucija u kojoj veštačka inteligencija dobija fizički oblik."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
