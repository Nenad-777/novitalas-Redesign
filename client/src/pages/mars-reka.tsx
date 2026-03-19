import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "NASA-in rover otkrio je nove dokaze koji ukazuju da je na površini Marsa nekada postojala reka, što dodatno menja dosadašnje razumevanje istorije Crvene planete. Analizom slojeva stena i sedimenta identifikovani su obrasci koji ukazuju na kretanje vode u obliku rečnog toka, a ne samo povremenih poplava ili ledenih procesa.",
  "Naučnici ističu da otkriveni tragovi ukazuju na postojanje stabilnijeg i dugotrajnijeg vodenog sistema nego što se ranije pretpostavljalo. Oblik naslaga, struktura sedimenata i raspored materijala sugerišu da je voda tekla u kontinuitetu, što otvara mogućnost da su na Marsu nekada postojali uslovi pogodni za razvoj mikrobiološkog života.",
  "Ovo otkriće ima poseban značaj u kontekstu budućih misija, jer pomaže u određivanju lokacija koje bi mogle sadržati očuvane tragove prošlog života. Istovremeno, dodatno učvršćuje tezu da Mars nije oduvek bio suva i hladna planeta, već svet sa dinamičnim klimatskim i geološkim procesima.",
  "Iako konačni dokaz o postojanju života još uvek nije pronađen, ovakvi nalazi predstavljaju ključne korake u tom pravcu. Svaki novi sloj podataka približava nauku odgovoru na jedno od najvećih pitanja: da li je život ikada postojao van Zemlje.",
];

export default function MarsReka() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/mars-reka"
      sectionLabel="Naša planeta"
      title="Na Marsu otkriveni tragovi drevne reke: nova faza u potrazi za životom"
      dateLabel="19. MART 2026."
      deck="NASA-in rover otkrio je nove dokaze koji ukazuju da je na površini Marsa nekada postojala reka, što dodatno menja dosadašnje razumevanje istorije Crvene planete."
      imageSrc="/news/mars-reka.jpg"
      imageAlt="Površina Marsa sa tragovima drevnog rečnog korita"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
