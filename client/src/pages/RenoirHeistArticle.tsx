import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/ko-krade-renoara-ako-ne-moze-da-ga-proda";

const PARAGRAPHS = [
  "U utorak rano ujutru dvojica provalnika upala su u Muzej Renoar u Kanj-sur-Meru, na Azurnoj obali, i odnela četiri slike Pjera-Ogista Renoara. Alarm se oglasio u 5.48, policija je stigla pet minuta kasnije, ali su lopovi već bili u bekstvu. Dve slike pronađene su u blizini muzeja, dok se Portret gospođe Kolona Romano i Mlada žena na bunaru i dalje traže. Ukupna vrednost četiri dela procenjena je na oko devet miliona evra.",
  "Na prvi pogled, priča izgleda kao filmska pljačka. Ali kod krađe velikih umetničkih dela postoji paradoks: što je slika poznatija, to ju je teže prodati. Renoar ne može jednostavno da se pojavi na aukciji ili kod ozbiljnog trgovca umetninama, jer bi svaki pokušaj prodaje odmah otvorio pitanje porekla dela. Ukradeno remek-delo tako može da vredi milione, a da istovremeno bude gotovo bezvredno na legalnom tržištu.",
  "Zato se poznata umetnička dela ponekad ne kradu radi obične preprodaje. Stručnjaci za umetnički kriminal upozoravaju da mogu završiti kao zalog u kriminalnim mrežama, sredstvo pregovaranja ili imovina koja godinama ostaje skrivena. U ovom slučaju postoji i jednostavnije objašnjenje: lopovi su možda samo procenili da je mali muzej lakša meta, ne računajući koliko je teško Renoara pretvoriti u novac.",
  "Muzej iz kojeg su slike nestale nije velika nacionalna institucija, već poslednji Renoarov dom, kuća koja danas čuva njegove slike, predmete, nameštaj i tragove svakodnevnog života. Tri od četiri ukradena dela imaju i poseban status umetnina vraćenih u Francusku posle Drugog svetskog rata, čiji prvobitni vlasnici nisu pouzdano utvrđeni. Tako su dela koja već nose istoriju gubitka i povratka ponovo postala predmet potrage.",
];

export default function RenoirHeistArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="KULTURA"
      title="Ko krade Renoara ako ne može da ga proda?"
      dateLabel="9. SEPTEMBAR 2026."
      deck="Dvojica lopova odnela su četiri Renoarove slike iz muzeja na Azurnoj obali. Dve su ubrzo pronađene, dve su nestale. Ali prava misterija nije samo gde su slike, već čemu služi krađa dela koje je gotovo nemoguće prodati."
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/ec/Renoir_-_Portrait_de_Madame_Colonna_Romano%2C_non_dat%C3%A9.jpg"
      imageAlt="Pjer-Ogist Renoar, Portret gospođe Kolona Romano, jedna od dve slike koje se i dalje traže."
      imageCredit="Pjer-Ogist Renoar, Portret gospođe Kolona Romano / Wikimedia Commons, CC BY-SA 4.0"
      imageHeightClass="h-auto"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
