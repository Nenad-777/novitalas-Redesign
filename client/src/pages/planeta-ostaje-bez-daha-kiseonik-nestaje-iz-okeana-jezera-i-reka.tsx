import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/planeta-ostaje-bez-daha-kiseonik-nestaje-iz-okeana-jezera-i-reka";

const PARAGRAPHS = [
  {
    type: "heading" as const,
    text: "Planeta ostaje bez daha: naučnici upozoravaju da kiseonik nestaje iz okeana, jezera i reka",
  },
  "Novo međunarodno istraživanje pokazuje da se količina rastvorenog kiseonika u vodenim ekosistemima širom sveta ubrzano smanjuje. Naučnici upozoravaju da ovaj proces više nije lokalni problem, već jedna od najvećih pretnji životu na Zemlji.",
  "Kiseonik nije važan samo za vazduh koji udišemo. On je neophodan i za gotovo svaki oblik života u vodi – od mikroorganizama i planktona do riba, kitova i koralnih grebena. Međutim, prema rezultatima novog međunarodnog istraživanja, količina rastvorenog kiseonika u okeanima, morima, rekama i jezerima nastavlja da opada alarmantnom brzinom.",
  "Istraživači upozoravaju da se deoksigenacija – proces gubitka kiseonika iz vodenih ekosistema – danas javlja na svim kontinentima i u gotovo svim tipovima voda. Do sada je uglavnom bila povezana sa pojedinačnim „mrtvim zonama“ u priobalnim područjima, ali novi podaci pokazuju da problem ima mnogo šire razmere.",
  "Glavni uzrok predstavlja zagrevanje planete. Toplija voda prirodno može da zadrži manje rastvorenog kiseonika nego hladna. Istovremeno, više temperature ubrzavaju metabolizam organizama i povećavaju njihovu potrošnju kiseonika.",
  "Dodatni problem predstavljaju poljoprivredna đubriva i otpadne vode koje u jezera i reke unose velike količine azota i fosfora. To izaziva naglo razmnožavanje algi. Kada alge uginu, bakterije koje ih razgrađuju troše ogromne količine kiseonika, ostavljajući iza sebe područja u kojima mnoge vrste više ne mogu da opstanu.",
  "Posledice su već vidljive širom sveta. Naučnici beleže sve češće pomore ribe, promene u migracijama morskih organizama, propadanje koralnih grebena i poremećaje u čitavim lancima ishrane. Istovremeno, okeani postaju manje sposobni da apsorbuju ugljen-dioksid iz atmosfere, što dodatno ubrzava klimatske promene.",
  "Autori studije smatraju da bi globalna deoksigenacija trebalo da bude prepoznata kao jedna od novih planetarnih granica – procesa čije bi dalje pogoršanje moglo da ugrozi stabilnost Zemljinih ekosistema.",
  { type: "heading" as const, text: "Tiha kriza ispod površine" },
  "Za razliku od šumskih požara, poplava ili uragana, gubitak kiseonika u vodi gotovo je nevidljiv. Ne postoji dramatičan trenutak koji privlači pažnju javnosti. Promene se odvijaju sporo, ali upravo zbog toga mogu biti još opasnije.",
  "Kada količina kiseonika padne ispod određene granice, čitavi ekosistemi počinju da se menjaju. Neke vrste nestaju, druge se sele u hladnije ili dublje vode, dok organizmi koji mogu da prežive u uslovima sa malo kiseonika postaju dominantni. Takve promene ne utiču samo na prirodu, već i na ribarstvo, bezbednost hrane i ekonomije miliona ljudi koji zavise od mora i slatkih voda.",
  "Još važnije, deoksigenacija nije izolovan proces. Ona je povezana sa klimatskim promenama, zagađenjem, gubitkom biodiverziteta i promenama hemijskog sastava okeana. Zbog toga naučnici smatraju da je posmatranje ovih pojava odvojeno jedna od najvećih grešaka savremene politike zaštite životne sredine.",
  "Planeta se ne menja samo na kopnu i u atmosferi. Velike promene odvijaju se i ispod površine vode, daleko od očiju javnosti. Upravo zato istraživači upozoravaju da je očuvanje kiseonika u rekama, jezerima i okeanima postalo jedno od ključnih pitanja za budućnost života na Zemlji.",
];

export default function PlanetaOstajeBezDahaArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Planeta ostaje bez daha: kiseonik nestaje iz okeana, jezera i reka"
      dateLabel="25. jul 2026."
      deck="Novo međunarodno istraživanje pokazuje da količina rastvorenog kiseonika ubrzano opada u okeanima, morima, rekama i jezerima, što predstavlja jednu od najvećih pretnji vodenim ekosistemima i budućnosti života na Zemlji."
      imageSrc="/news/ocean-deep.jpg"
      imageAlt="Bleached coral on the seabed beneath a thinning school of fish, symbolizing the global loss of oxygen from aquatic ecosystems."
      imageCredit="AI editorial illustration / Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
