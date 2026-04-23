import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/Nato-new-relations.jpg";

const PARAGRAPHS = [
  "U Vašingtonu se oblikuje pristup koji dovodi u pitanje dosadašnji način funkcionisanja NATO-a.",
  "U američkim političkim krugovima sve se otvorenije govori o diferenciranju članica prema stepenu političke i vojne lojalnosti. Takav pravac zadire u osnovnu pretpostavku saveza, koji je decenijama počivao na formalnoj jednakosti među državama, uprkos razlikama u interesima.",
  "Prema navodima više medija koji se pozivaju na američke i evropske izvore, administracija Donalda Trampa razmatra neformalni okvir za rangiranje NATO saveznika prema doprinosu odbrani i spremnosti da podrže ključne američke spoljnopolitičke i bezbednosne prioritete, uključujući i odnos prema ratu sa Iranom. U opticaju su i moguće posledice za države procenjene kao manje pouzdane, od preraspodele američkih snaga do ograničenja u vojnoj saradnji.",
  "Kolektivna bezbednost time prestaje da deluje kao automatska pretpostavka.",
  "Ovaj pravac razvija se kroz duži period. Neslaganja između Vašingtona i evropskih prestonica godinama se kreću između pitanja vojne potrošnje, odnosa prema Rusiji i pristupa krizama na Bliskom istoku. Ono što je ranije ostajalo u političkoj ravni sada dobija operativni oblik.",
  "Podela na „lojalne\u201c i „neposlušne\u201c saveznike postaje način organizovanja odnosa unutar saveza.",
  "Za evropske države to znači sužavanje prostora za samostalno političko delovanje. Istovremeno raste pritisak da se jasnije odredi spoljnopolitički pravac, posebno u odnosu na krize u kojima Vašington očekuje punu podršku.",
  "Takav pristup otvara mogućnost strukture sa više nivoa, u kojoj bi deo članica imao privilegovan pristup resursima i garancijama, dok bi ostale ostajale na periferiji.",
  "Model još nije formalizovan, ali njegova logika već menja način na koji se NATO posmatra.",
  "Razlike među članicama postaju osnova novog poretka unutar saveza.",
  "Ako bezbednost postane funkcija političke lojalnosti, jedinstvo više neće biti polazna tačka saveza.",
  "Biće njegov rezultat.",
];

export default function NatoPodPritiskom() {
  return (
    <ArticleTemplate
      path="/geopolitika/nato-pod-pritiskom-od-saveza-ravnopravnih-ka-sistemu-uslovljene-lojalnosti"
      sectionLabel="Geopolitika"
      title="NATO pod pritiskom: od saveza ravnopravnih ka sistemu uslovljene lojalnosti"
      dateLabel="23. APRIL 2026."
      deck="U Vašingtonu se sve otvorenije razmatra diferenciranje saveznika prema političkoj i vojnoj usklađenosti sa američkim prioritetima."
      imageSrc={IMAGE_SRC}
      imageAlt="NATO savez pod pritiskom novih uslovljavanja"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
