import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "NASA-in rover Curiosity detektovao je na površini Marsa molekule koje se dovode u vezu sa procesima koji na Zemlji stoje u osnovi nastanka života.",
  "Reč je o organskim jedinjenjima pronađenim u sedimentima stare marsovske sredine, što dodatno učvršćuje pretpostavku da je planeta u dalekoj prošlosti imala uslove pogodnije za hemijske procese slične onima koji su prethodili životu na Zemlji.",
  "Naučnici naglašavaju da ovo otkriće ne znači da je život na Marsu postojao, ali potvrđuje da su osnovni hemijski gradivni elementi bili prisutni.",
  "Ovakvi nalazi pomeraju granicu razumevanja Marsa – ne kao mrtvog sveta, već kao prostora u kojem su nekada postojali uslovi za mnogo složenije procese nego što se ranije pretpostavljalo.",
];

export default function NaMarsuOtkriveneMolekulePovezaneSaPoreklomZivota() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/na-marsu-otkrivene-molekule-povezane-sa-poreklom-zivota"
      sectionLabel="Naša planeta"
      title="Na Marsu otkrivene molekule povezane sa poreklom života"
      dateLabel="22. APRIL 2026."
      deck="Rover Curiosity identifikovao je kompleksne organske molekule koji otvaraju nova pitanja o mogućem nastanku života na Crvenoj planeti."
      imageSrc="/news/mars-life.jpg"
      imageAlt="Površina Marsa sa tragovima organskih jedinjenja"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
