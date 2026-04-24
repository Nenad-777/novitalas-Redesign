import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Negde u Egiptu, u suvom i slojevitom tlu antičkog Oksirinha, otvorena je mumija koja nije trebalo da kaže ništa novo. Takvi nalazi obično prate poznat obrazac: telo, zavoji, tragovi rituala, poneki predmet ostavljen uz pokojnika.",
  "Ovog puta, među slojevima tkanine pojavio se tekst.",
  "Papirus sa fragmentom Homerove Ilijade bio je položen u unutrašnjost mumije, u predelu abdomena, tokom procesa mumifikacije. Njegovo prisustvo ne deluje kao slučajnost, već kao deo postupka čiji smisao danas možemo samo da naslutimo.",
  "Fragment pripada drugoj knjizi Ilijade, delu poznatom kao \u201EKatalog brodova\u201C, u kojem se nabrajaju grčke snage koje su krenule ka Troji. Tekst je nastao vekovima pre ove mumije, ali je u rimskom Egiptu i dalje bio deo obrazovanja i kulturnog života.",
  "Iako su papirusi u tom periodu često korišćeni kao reciklirani materijal u procesu mumifikacije, način na koji je ovaj fragment položen otvara mogućnost da njegova uloga nije bila samo praktična.",
  "Ostaje pitanje: zašto baš taj tekst?",
  "U rimskom Egiptu preplitale su se egipatske, grčke i rimske tradicije. Ljudi su mogli da mumifikuju telo po egipatskom običaju, govore grčki i žive pod rimskom vlašću. U tom svetu Homer se čitao, učio i nosio sa sobom — ne kao književnost, već kao deo svakodnevnog iskustva.",
  "Papirus u ovoj mumiji ne govori nam šta je pokojnik mislio. Pokazuje šta je smatrano vrednim da ga prati.",
  "U istim grobnicama pronađeni su i drugi neobični predmeti, poput metalnih jezika postavljenih u usta mrtvih, za koje se verovalo da omogućavaju govor u zagrobnom svetu. U tom kontekstu, tekst Ilijade ne deluje kao kuriozitet, već kao još jedan pokušaj da se sačuva nešto što nadilazi život — govor, identitet, prisustvo.",
  "Ne saznajemo ništa novo o Homeru.",
  "Saznajemo kako je čitan vekovima kasnije.",
];

export default function HomerovaIlijadaPronadjenauEgipatskojMumiji() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/homerova-ilijada-pronadjena-u-egipatskoj-mumiji"
      sectionLabel="Naša planeta"
      title="Homerova Ilijada pronađena u egipatskoj mumiji"
      dateLabel="24. APRIL 2026."
      deck="U antičkom Oksirinhu arheolozi su otkrili papirus sa fragmentom Ilijade unutar mumije iz rimskog perioda, što predstavlja prvi poznati slučaj ovakve upotrebe književnog teksta u mumifikaciji."
      imageSrc="/news/Iliad-mumy.jpg"
      imageAlt="Papirus sa fragmentom Homerove Ilijade pronađen unutar egipatske mumije"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
