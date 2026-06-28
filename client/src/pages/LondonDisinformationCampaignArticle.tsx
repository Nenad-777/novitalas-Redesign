import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Gradonačelnik Londona Sadiq Khan predstavio je novu međunarodnu kampanju vrednu sedam miliona funti, čiji je cilj da se suprotstavi širenju dezinformacija o britanskoj prestonici i istovremeno ojača njen međunarodni ugled kao centra kulture, obrazovanja, turizma i investicija.",
  "Program bi trebalo da bude pokrenut tokom jeseni i biće usmeren prema publici u Evropi, Severnoj Americi i Aziji. Prema navodima gradskih vlasti, kampanja predstavlja odgovor na sve veći broj sadržaja na društvenim mrežama koji London prikazuju kao grad u stalnom bezbednosnom, ekonomskom i društvenom padu.",
  "U saopštenju kancelarije gradonačelnika navodi se da su pojedine negativne kampanje poslednjih godina dostigle milionske preglede, pri čemu su često korišćene manipulativne fotografije, selektivno prikazani događaji ili sadržaji generisani veštačkom inteligencijom. Gradske vlasti tvrde da takvi narativi mogu imati direktan uticaj na odluke turista, investitora i međunarodnih kompanija.",
  "London je i dalje jedna od najposećenijih svetskih metropola i jedno od najvažnijih finansijskih središta Evrope. Ipak, gradska administracija smatra da se u digitalnom prostoru vodi sve intenzivnija borba za kontrolu javne percepcije velikih gradova, država i institucija.",
  "Khan je ocenio da se dezinformacije danas ne šire samo iz političkih razloga, već da su postale deo šire industrije koja profitira od polarizacije, straha i privlačenja pažnje na društvenim mrežama. Prema njegovim rečima, odgovor na takve pojave ne može biti samo demantovanje pojedinačnih netačnih tvrdnji, već i aktivna promocija proverenih informacija i pozitivnih primera.",
  "Međutim, inicijativa je izazvala i kritike dela opozicionih političara i komentatora. Oni tvrde da bi gradske vlasti trebalo da se usredsrede na konkretne probleme poput kriminala, troškova života i javnih usluga, umesto na kampanje za unapređenje imidža Londona. Pojedini kritičari upozoravaju i da borba protiv dezinformacija ne sme postati izgovor za ograničavanje legitimne javne kritike.",
  "Rasprava koja se vodi u Velikoj Britaniji odražava širi globalni trend. Vlade, međunarodne organizacije i lokalne administracije širom sveta sve više ulažu sredstva u suzbijanje dezinformacija, dok istovremeno raste zabrinutost da bi takve inicijative mogle otvoriti pitanja o granicama slobode izražavanja i kontroli digitalnog prostora.",
  "U vremenu kada se informacije šire brže nego ikada, izazov za demokratska društva ostaje isti: kako zaštititi javnost od namernih manipulacija, a da se pritom ne ugroze otvorena rasprava i sloboda mišljenja.",
];

export default function LondonDisinformationCampaignArticle() {
  return (
    <ArticleTemplate
      path="/geopolitika/london-kampanja-protiv-dezinformacija"
      sectionLabel="Geopolitika"
      title="London pokreće kampanju od 7 miliona funti protiv dezinformacija"
      dateLabel="17. jun 2026."
      deck="Gradske vlasti tvrde da koordinisane kampanje na društvenim mrežama narušavaju ugled britanske prestonice, zbog čega je pokrenut međunarodni program za promociju Londona i suzbijanje dezinformacija."
      imageSrc="/news/london-disinformation-campaign.jpg"
      imageAlt="London skyline with digital message overlays symbolizing disinformation campaigns"
      imageCredit="Ilustracija / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
