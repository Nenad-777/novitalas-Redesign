import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/slom-medjunarodni.jpg";

const PARAGRAPHS = [
  "Postoje događaji koji ostave posledice na političku scenu, a postoje i oni koji trajno promene način na koji se posmatra jedan političar.",
  "Zabrana ulaska grupi državljana Srbije na teritoriju Crne Gore, uoči jednog od najvažnijih evropskih skupova u regionu, spada u ovu drugu kategoriju.",
  "Na prvi pogled, reč je o bezbednosnoj odluci jedne države. Na dubljem nivou, reč je o događaju koji otvara pitanje međunarodnog ugleda Aleksandra Vučića i političkog sistema koji je izgradio tokom više od jedne decenije na vlasti.",
  "Godinama je Vučić u evropskim prestonicama negovao pažljivo oblikovanu političku sliku. Predstavljao se kao faktor stabilnosti na Balkanu, političar sposoban da kontroliše krize, održava regionalni dijalog i obezbeđuje predvidljivost u delu Evrope koji je dugo bio sinonim za nestabilnost.",
  "Mnogi evropski lideri bili su spremni da zatvore oči pred problemima demokratije, medijskih sloboda i stanja institucija u Srbiji upravo zato što je postojalo uverenje da je stabilnost važnija od svega ostalog.",
  "Taj politički kapital nije nastao preko noći.",
  "Građen je godinama.",
  "Zato je i šteta nastala u Tivtu toliko velika.",
  "Jer ovoga puta međunarodna javnost nije videla predsednika Srbije za pregovaračkim stolom. Nije videla diplomatske sastanke, infrastrukturne projekte ili evropske integracije.",
  "Videla je nešto drugo.",
  "Videla je vest da su vlasti susedne države zabranile ulazak grupi ljudi koje smatraju bezbednosnim rizikom, a koji se u medijima i javnosti godinama dovode u vezu sa političkim okruženjem vladajuće strukture u Srbiji.",
  "U politici simbolika često proizvodi veću štetu od samih događaja.",
  "Nije presudno koliko je ljudi vraćeno sa granice.",
  "Presudno je pitanje kakvu sliku takav događaj ostavlja u Briselu, Berlinu, Parizu i Vašingtonu.",
  "Upravo tu leži suština ovog slučaja.",
  "Godinama je Srbija pokušavala da ubedi svoje međunarodne partnere da predstavlja sidro stabilnosti na Zapadnom Balkanu. Međutim, kada se uz ime jedne države počnu vezivati priče o ljudima koje druge zemlje smatraju bezbednosnim problemom, tada fokus više nije na stabilnosti.",
  "Tada se otvaraju pitanja o političkom okruženju iz kojeg takvi ljudi dolaze i o posledicama koje to može imati po međunarodni ugled države.",
  "U tom trenutku međunarodna reputacija počinje da se troši mnogo brže nego što je građena.",
  "Ovo ne znači da će Aleksandar Vučić sutra izgubiti vlast.",
  "Ne znači ni da će evropske vlade preko noći promeniti svoju politiku prema Srbiji.",
  "Ali znači da je narativ o Vučiću kao neupitnom faktoru stabilnosti pretrpeo možda najteži udarac od kada je došao na vlast.",
  "Političke karijere retko završavaju jednim događajem.",
  "Mnogo češće završavaju nizom trenutaka u kojima pažljivo građena slika počinje da puca pred očima onih koji su u nju verovali.",
  "Tivat bi mogao ostati upamćen upravo kao jedan od takvih trenutaka.",
  "Možda ne kao kraj vlasti Aleksandra Vučića.",
  "Ali kao trenutak kada je međunarodni ugled koji je godinama gradio počeo ozbiljno da se urušava.",
  "Jer nije vraćena samo grupa putnika.",
  "Vraćena je slika sistema koji ih je stvorio.",
];

export default function PotpuniSlomVuciceveMedjunarodneReputacije() {
  return (
    <ArticleTemplate
      path="/srbija/potpuni-slom-vuciceve-medjunarodne-reputacije"
      sectionLabel="Srbija"
      title="Potpuni slom Vučićeve međunarodne reputacije"
      dateLabel="4. JUN 2026."
      deck="Zabrana ulaska grupi državljana Srbije u Crnu Goru otvorila je pitanje međunarodnog ugleda Aleksandra Vučića i političkog sistema koji je gradio više od decenije."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
