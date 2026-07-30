import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/vise-od-1100-strucnjaka-iz-vodecih-ai-kompanija-trazi-usporavanje-razvoja-vestacke-inteligencije";

const PARAGRAPHS = [
  "Više od 1.100 zaposlenih, stručnjaka i istraživača iz najvećih svetskih kompanija koje razvijaju veštačku inteligenciju potpisalo je otvoreno pismo kojim od Sjedinjenih Američkih Država traže da podrže međunarodne napore za razvoj tehničkih i institucionalnih mehanizama koji bi omogućili kontrolisanje brzine razvoja najnaprednijih AI sistema.",
  "Među potpisnicima nalaze se zaposleni i istraživači povezani sa kompanijama OpenAI, Anthropic, Google DeepMind, Meta, Microsoft, Amazon i drugim organizacijama koje se nalaze u središtu globalne trke u razvoju veštačke inteligencije.",
  "Njihov zahtev nije usmeren na potpuno zaustavljanje istraživanja niti na opštu zabranu razvoja novih modela. Potpisnici traže stvaranje međunarodnih pravila i tehničkih sredstava koja bi omogućila da se razvoj najmoćnijih sistema uspori ukoliko njihove sposobnosti počnu da rastu brže od bezbednosnih mehanizama i sposobnosti društva da ih nadzire.",
  "U središtu upozorenja nalazi se mogućnost automatizovanog razvoja veštačke inteligencije — trenutka u kojem bi napredni sistemi mogli da preuzmu značajan deo istraživanja, programiranja i stvaranja svojih budućih verzija.",
  "Takav proces mogao bi da stvori povratnu spregu: sposobniji sistemi pomagali bi u razvoju još sposobnijih sistema, koji bi zatim još brže stvarali naredne generacije veštačke inteligencije.",
  "Ovaj scenario često se opisuje kao rekurzivno samousavršavanje. Njegova suština nije u tome da mašina iznenada „postane svesna“, već da razvoj AI sistema prestane da zavisi isključivo od brzine ljudskih istraživača i programera.",
  "Ukoliko bi veštačka inteligencija mogla da automatizuje veliki deo sopstvenog istraživanja i razvoja, napredak koji danas traje mesecima ili godinama mogao bi da se odvija u znatno kraćim vremenskim intervalima.",
  "Potpisnici upozoravaju da bi u takvoj situaciji sposobnosti novih sistema mogle da napreduju brže od bezbednosnih provera, regulatornih procedura i političkih odluka.",
  "Otvoreno pismo zato poziva na razvoj mehanizama za „kontrolisanje tempa granice“ — pacing the frontier — koji bi omogućili koordinisano usporavanje razvoja ukoliko se približi trenutak u kojem automatizovano AI istraživanje počinje da menja samu prirodu tehnološkog napretka.",
  "Takvi mehanizmi mogli bi da obuhvate zajedničke standarde za procenu sposobnosti modela, nezavisna bezbednosna testiranja, nadzor nad korišćenjem velikih računarskih kapaciteta i unapred dogovorene pragove nakon kojih bi razvoj morao privremeno da bude usporen.",
  "Jedan od najvećih problema predstavlja činjenica da nijedna kompanija ne želi sama da pritisne kočnicu.",
  "Ukoliko bi jedna laboratorija usporila razvoj zbog bezbednosti, njeni konkurenti u Sjedinjenim Državama, Kini ili drugim delovima sveta mogli bi da nastave istim tempom i steknu presudnu tehnološku i ekonomsku prednost.",
  "Industrija se tako nalazi u svojevrsnoj zatvorenikovoj dilemi: mnogi učesnici možda smatraju da bi zajedničko usporavanje bilo razumno, ali nijedan od njih ne želi da prvi odustane od trke.",
  "Zbog toga potpisnici smatraju da dobrovoljne odluke pojedinačnih kompanija nisu dovoljne. Potrebni su međunarodna koordinacija, zajednički standardi i mehanizmi koji bi važili za sve vodeće aktere.",
  "Ovo upozorenje dolazi u trenutku kada najnapredniji AI modeli sve uspešnije obavljaju složene zadatke programiranja, matematičkog zaključivanja, naučnog istraživanja i samostalnog korišćenja digitalnih alata.",
  "Veštačka inteligencija još nije sposobna da potpuno samostalno razvija svoje naslednike. Ipak, deo istraživača veruje da se tehnologija približava tački u kojoj bi mogla da automatizuje sve veći deo rada koji danas obavljaju stručnjaci u vodećim laboratorijama.",
  "Upravo zbog toga potpisnici ne tvrde da je katastrofa neizbežna. Njihova poruka je da pripreme moraju početi pre nego što takve sposobnosti postanu stvarnost.",
  "Možda je upravo ovo trenutak koji će istoričari jednog dana označiti kao početak nove faze razvoja veštačke inteligencije.",
  "Decenijama su najveća upozorenja o moći novih tehnologija dolazila od filozofa, nezavisnih naučnika, aktivista ili političara. Ovoga puta upozorenje dolazi iz samog centra industrije — od ljudi koji svakodnevno učestvuju u stvaranju najnaprednijih sistema.",
  "Njihova poruka pokazuje da trka u razvoju veštačke inteligencije više nije samo pitanje inovacija, investicija i tržišne konkurencije. Ona postaje pitanje međunarodne bezbednosti, političke odgovornosti i sposobnosti čovečanstva da zadrži kontrolu nad tempom sopstvenog tehnološkog napretka.",
  "Ako ljudi koji grade budućnost traže da svet pripremi kočnicu pre nego što ona postane neophodna, njihovo upozorenje zaslužuje mnogo više od prolazne pažnje.",
];

export default function FrontierAiSlowdownArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Više od 1.100 stručnjaka iz vodećih AI kompanija traži usporavanje razvoja veštačke inteligencije"
      dateLabel="30. jul 2026."
      deck="Više od 1.100 zaposlenih i istraživača iz vodećih svetskih AI kompanija upozorava da bi automatizovani razvoj veštačke inteligencije uskoro mogao da postane brži od sposobnosti ljudi i institucija da ga razumeju, nadziru i kontrolišu."
      imageSrc="/news/ai-frontier-warning.jpg"
      imageAlt="Futuristički grad i digitalni prikaz ljudskog mozga kao simbol razvoja napredne veštačke inteligencije."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
