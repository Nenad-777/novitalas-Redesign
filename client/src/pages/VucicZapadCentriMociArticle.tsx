import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/vucic-zapad-centri-moci.webp";

const PARAGRAPHS = [
  "Godinama su postojale dve gotovo paralelne slike Aleksandra Vučića.",
  "Dok su organizacije koje prate stanje demokratije upozoravale na izborne uslove, slobodu medija i slabljenje institucija, za zapadne vlade Vučić je pre svega bio važan sagovornik za Kosovo, regionalnu stabilnost, energetiku i odnose Srbije sa Rusijom i Kinom.",
  "Te dve slike danas je sve teže razdvojiti.",
  { type: "heading" as const, text: "Kritika više nije na margini" },
  "Promena je postala posebno vidljiva tokom protesta posle pada nadstrešnice železničke stanice u Novom Sadu.",
  "Le Monde je u martu 2025. Vučića opisao kao „autoritarnog predsednika“, dok je Guardian proteste i stanje medija pratio kroz priču o autokratskoj vlasti i pritiscima na nezavisne medije. Važno nije samo koliko su te formulacije oštre, već gde se pojavljuju: ocene koje su nekada uglavnom pripadale balkanskim analizama postale su deo redovnog izveštavanja velikih zapadnih medija o Srbiji.",
  "U isto vreme pojavili su se i mnogo konkretniji nalazi. Amnesty International dokumentovao je korišćenje digitalnih forenzičkih alata i špijunskog softvera protiv novinara i aktivista u Srbiji. Amnestyjev Security Lab kasnije je utvrdio da su dve novinarke BIRN-a bile mete pokušaja napada Pegasusom.",
  "Reporteri bez granica zabeležili su najmanje 89 fizičkih napada na novinare tokom prve godine protesta, a Vučića su svrstali među „predatore slobode medija“.",
  "Time je međunarodna kritika dobila drugačiju težinu: više nije reč samo o političkim kvalifikacijama, već i o dokumentovanim slučajevima nadzora i napada na novinare i aktiviste.",
  { type: "heading" as const, text: "Od medija do evropskih institucija" },
  "U julu 2026. Evropski parlament je sa 468 glasova za, 116 protiv i 79 uzdržanih usvojio izveštaj o Srbiji u kojem se napredak ka članstvu povezuje sa jačanjem demokratskih standarda i vladavine prava.",
  "Evropski poslanici zatražili su slobodne i poštene izbore i kritikovali dugogodišnji anti-EU narativ koji se, prema formulaciji Parlamenta, širi kroz medije pod kontrolom vlasti.",
  "Istovremeno se promena vidi i unutar Evropske narodne partije, političke porodice kojoj SNS pripada kao pridružena članica. EPP je otvorio preispitivanje statusa SNS-a, dok pojedini članovi javno traže suspenziju ili isključenje stranke. EPP na svojoj aktuelnoj listi i dalje vodi SNS kao pridruženu članicu.",
  { type: "heading" as const, text: "I Vašington menja rečnik" },
  "Republikanac Joe Wilson i demokrata William Keating podneli su u avgustu 2026. SRBIJA Act, predlog zakona u kojem govore o „ozbiljnom demokratskom nazadovanju“ Srbije i problemima sa vladavinom prava, slobodom medija i korupcijom.",
  "Predlog ide i korak dalje: slobodni i pošteni izbori, borba protiv korupcije, demokratsko upravljanje, sloboda štampe i sloboda okupljanja trebalo bi, prema njegovim autorima, da postanu deo američko-srpskog strateškog dijaloga.",
  "SRBIJA Act još nije zakon i ne predstavlja politiku američke administracije. Njegov značaj za ovu priču je jednostavniji: pitanja demokratije u Srbiji stigla su u konkretan dvostranački predlog američkog Kongresa.",
  { type: "heading" as const, text: "Promenila se međunarodna slika Vučića" },
  "Aleksandar Vučić i dalje ima međunarodne sagovornike, a Srbija nije izgubila geopolitički značaj. Promenilo se ono što danas prati te odnose.",
  "Uz Kosovo, investicije, energetiku, Rusiju i Kinu sve češće stoje izbori, mediji, policija, aktivisti, nadzor, korupcija i institucije.",
  "Le Monde Vučića opisuje kao autoritarnog predsednika. Amnesty dokumentuje nadzor novinara i aktivista. Reporteri bez granica svrstavaju ga među predatore slobode medija. Evropski parlament stanje demokratije povezuje sa evropskim putem Srbije. EPP preispituje status SNS-a. U američkom Kongresu demokratija i sloboda medija ulaze u predlog budućeg okvira odnosa sa Srbijom.",
  "Pojedinačno, nijedan od tih slučajeva ne predstavlja jedinstven „stav Zapada“. Zajedno pokazuju promenu koju je sve teže prevideti: optužbe za autokratiju više nisu fusnota odnosa Vučića i Zapada. Stigle su u njegovo središte.",
];

export default function VucicZapadCentriMociArticle() {
  return <ArticleTemplate
    path="/srbija/vucic-i-zapad-optuzbe-za-autokratiju-stigle-su-u-centre-moci"
    sectionLabel="SRBIJA · ANALIZA"
    title="Vučić i Zapad: optužbe za autokratiju stigle su u centre moći"
    dateLabel="7. OKTOBAR 2026."
    deck="Godinama su Kosovo, regionalna stabilnost i geopolitika držali pitanja demokratije, slobode medija i vladavine prava u Srbiji u drugom planu odnosa sa Zapadom. Danas su optužbe za autoritarizam stigle mnogo dalje: od vodećih zapadnih medija i evropskih institucija do rasprave unutar EPP-a i američkog Kongresa."
    imageSrc={IMAGE_SRC}
    imageBeforeDeck
    imageAlt="Prazna konferencijska stolica u savremenoj evropskoj institucionalnoj sali, sa zastavama Evropske unije u pozadini."
    imageCredit="Ilustracija: Novi Talas"
    paragraphs={PARAGRAPHS}
    backHref="/srbija"
    backLabel="← Nazad na Srbiju"
  />;
}
