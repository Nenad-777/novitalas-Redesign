import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/embryo-edit.jpg";

const PARAGRAPHS = [
  "Naučnici su po prvi put precizno izmenili gene u ljudskim embrionima, otvarajući mogućnost lečenja naslednih bolesti, ali i novu raspravu o granicama ljudskog mešanja u sopstvenu evoluciju.",
  "Međunarodni tim istraživača saopštio je da je uspešno primenio tehnologiju poznatu kao „base editing“ za preciznu izmenu pojedinačnih delova DNK u ljudskim embrionima. Za razliku od ranijih metoda genetskog uređivanja, nova tehnika omogućava promenu jednog genetskog „slova“ bez presecanja DNK lanca, što značajno smanjuje rizik od neželjenih promena u genetskom kodu.",
  "Naučnici ističu da je cilj istraživanja razvoj terapija za nasledne bolesti izazvane pojedinačnim mutacijama, uključujući određene oblike srčanih oboljenja, neuroloških poremećaja i retkih genetskih sindroma. Ipak, tehnologija se još nalazi u eksperimentalnoj fazi i nije namenjena kliničkoj primeni, dok brojna etička i bezbednosna pitanja ostaju otvorena.",
  "Ovaj eksperiment predstavlja još jedan korak u procesu koji bi mogao promeniti način na koji čovečanstvo razume medicinu. Umesto lečenja bolesti nakon rođenja, nauka se približava mogućnosti da određene nasledne poremećaje ukloni pre nego što se razviju. Takva perspektiva obećava ogromne koristi, ali istovremeno pokreće pitanja o tome gde se završava medicina, a gde počinje oblikovanje budućih generacija.",
  "Rasprava koja prati razvoj genetskog uređivanja danas podseća na debate koje su nekada vođene o transplantaciji organa, vantelesnoj oplodnji ili matičnim ćelijama. Međutim, za razliku od tih tehnologija, uređivanje ljudskog genoma zadire u samu osnovu biološkog nasleđa. Zbog toga se pred naučnicima, zakonodavcima i društvom ne nalazi samo medicinski izazov, već i jedno od najvažnijih filozofskih pitanja 21. veka: koliko daleko čovek sme da menja sopstvenu prirodu?",
];

export default function PrviKorakKaSvetuBezNaslednihBolesti() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/prvi-korak-ka-svetu-bez-naslednih-bolesti"
      sectionLabel="Naša planeta"
      title="Prvi korak ka svetu bez naslednih bolesti?"
      dateLabel="6. JUN 2026."
      authorLabel="Novi Talas"
      deck="Naučnici su po prvi put precizno izmenili gene u ljudskim embrionima, otvarajući mogućnost lečenja naslednih bolesti, ali i novu raspravu o granicama ljudskog mešanja u sopstvenu evoluciju."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
