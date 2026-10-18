import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/francuska-se-suocava-sa-velikom-drustvenom-i-politickom-krizom";
const IMAGE = "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg/1280px-Paris_riots%2C_17_October_2026_-_Crowd_facing_Place_de_la_R%C3%A9publique_in_tear_gas_-_JJxFile_0012.jpg";
const PARAGRAPHS = [
  "Francuska se suočava sa jednim od najozbiljnijih talasa društvenih nemira poslednjih godina. Prema podacima Ministarstva unutrašnjih poslova, na protestima 17. oktobra učestvovalo je oko 550.000 ljudi, dok organizatori procenjuju da ih je bilo 800.000. Tokom sukoba u Parizu, Lionu, Marseju i drugim gradovima privedeno je približno 1.800 osoba, a više od 500 pripadnika policije i drugih službi je povređeno. Jedna osoba preminula je nakon srčanog zastoja tokom demonstracija.",
  "Protestni pokret započeo je nezadovoljstvom učenika zbog nedostatka nastavnika i loših uslova u školama, ali se tokom prethodnih nedelja proširio na pitanje životnog standarda, socijalne nejednakosti i smanjenja javne potrošnje. Demonstracijama su se pridružili sindikati, studenti i učesnici nekadašnjeg pokreta Žutih prsluka. Većina okupljenih protestovala je mirno, dok su nasilne grupe napadale policiju, pljačkale prodavnice i oštetile javne objekte. U Limožu je požar delimično uništio istorijsku gradsku većnicu.",
  "Kriza dolazi u posebno osetljivom političkom trenutku. Predsednik Emanuel Makron približava se završetku mandata, dok se Francuska suočava sa visokim javnim dugom, budžetskim pritiscima i dubokim političkim podelama. Premijer Sebastijen Lekorni optužio je radikalne levičarske grupe i kriminalce za nasilje, dok deo opozicije dovodi u pitanje način na koji je policija postupala prema demonstrantima.",
  "Razmere protesta pokazuju da se nezadovoljstvo više ne može svesti na pojedinačne ekonomske zahteve. U središtu krize nalazi se sve izraženiji sukob između očekivanja građana od socijalne države i sposobnosti vlasti da obezbedi kvalitetne javne usluge i prihvatljiv životni standard. Pred predsedničke izbore 2027. godine, pitanje više nije samo kako će francuske institucije uspostaviti javni red, već i da li će politički sistem uspeti da odgovori na uzroke nezadovoljstva koji su stotine hiljada ljudi izveli na ulice."
];

export default function FranceSocialCrisisArticle() {
  return <ArticleTemplate
    path={PATH}
    sectionLabel="Geopolitika · Francuska"
    title="Francuska se suočava sa velikom društvenom i političkom krizom"
    dateLabel="18. OKTOBAR 2026."
    authorLabel="Novi Talas"
    deck="Više od pola miliona građana izašlo je na ulice širom Francuske zbog rasta troškova života i nezadovoljstva javnim službama. Masovne demonstracije prerasle su u nasilne sukobe u više gradova, dodatno produbljujući krizu vlasti predsednika Emanuela Makrona."
    imageSrc={IMAGE}
    imageAlt="Masovni protesti na Trgu Republike u Parizu 17. oktobra 2026, demonstranti i oblaci suzavca."
    imageCredit="Pariz, 17. oktobar 2026. Fotografija: Jorge Jaramillo / JJxFile / Wikimedia Commons, CC BY-SA 4.0. Prikaz u formatu 16:9 (kadriranje)."
    imageFirst={true}
    imageHeightClass="h-auto aspect-video"
    paragraphs={PARAGRAPHS}
    backHref="/geopolitika"
    backLabel="← Nazad na Geopolitiku"
  />;
}
