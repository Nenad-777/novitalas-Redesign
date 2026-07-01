import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/pol-makartni-sa-rolingstonsima-na-novom-albumu-koji-izlazi-10-jula";

const PARAGRAPHS = [
  "Nekada rivali, danas saradnici",
  "Šezdesetih godina prošlog veka svet popularne kulture bio je podeljen između dva britanska giganta. Dok su Bitlsi osvajali publiku melodijama i inovacijama, Rolingstonsi su gradili reputaciju buntovnika koji su pomerali granice rokenrola. Mediji su decenijama negovali priču o velikom rivalstvu između dva benda, iako su njihovi članovi često isticali da su se međusobno poštovali i družili.",
  "Danas, više od šezdeset godina kasnije, ta nekadašnja podela ostala je samo deo istorije.",
  "Makartni ponovo sa Rolingstonsima",
  'Pol Makartni svira bas gitaru na numeri "Covered In You", koja će se naći na novom albumu Rolingstonsa Foreign Tongues, čije je objavljivanje zakazano za 10. jul.',
  'Biće to druga uzastopna saradnja Makartnija i Rolingstonsa, nakon što je legendarni muzičar gostovao i na albumu Hackney Diamonds iz 2023. godine, na energičnoj pesmi "Bite My Head Off".',
  "Prema rečima Mika Džegera, saradnja sa Makartnijem protekla je potpuno spontano, potvrđujući prijateljstvo i međusobno poštovanje koje traje još od početaka britanske rok revolucije.",
  "Album koji spaja generacije",
  "Pored Pola Makartnija, na albumu gostuju i brojni poznati muzičari, među kojima su Robert Smit iz grupe The Cure, Stiv Vinvud i Čed Smit iz Red Hot Chili Peppersa.",
  "Produkciju albuma potpisuje Endru Vat, producent koji je poslednjih godina uneo novu energiju u rad Rolingstonsa i sarađivao sa brojnim svetskim muzičkim zvezdama.",
  "Posebnu emotivnu težinu albumu daje činjenica da sadrži i poslednje studijske snimke legendarnog bubnjara Čarlija Votsa, koji je preminuo 2021. godine.",
  "Više od muzike",
  "Nova saradnja Pola Makartnija i Rolingstonsa daleko prevazilazi okvire jedne gostujuće uloge na albumu. Ona predstavlja podsetnik da najveće umetničke priče ne završavaju sa decenijama koje su ih proslavile.",
  "Muzičari koji su oblikovali zvuk druge polovine dvadesetog veka i danas nastavljaju da stvaraju, pokazujući da kreativnost ne poznaje godine, niti nekadašnja rivalstva.",
  "Možda upravo zato ova vest ima mnogo dublje značenje od obične informacije o novom albumu – ona govori o vremenu u kojem su nekadašnji konkurenti postali saradnici, a istorija roka dobila još jedno zajedničko poglavlje.",
];

export default function PolMakartniSaRolingstonsimaArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Pol Makartni sa Rolingstonsima na novom albumu koji izlazi 10. jula"
      dateLabel="1. jul 2026."
      deck="Više od šest decenija nakon što su Bitlsi i Rolingstonsi obeležili jednu od najuzbudljivijih epoha u istoriji popularne muzike, Pol Makartni ponovo gostuje na novom studijskom albumu slavnog britanskog benda. Njihova nova saradnja predstavlja simboličan susret dve najveće institucije rok muzike."
      imageSrc="/news/paul-mccartney-rolling-stones.jpg"
      imageAlt="Ilustracija Pola Makartnija i Mika Džegera povodom nove saradnje na albumu Foreign Tongues."
      imageCredit="Novi Talas AI illustration"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
