import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/da-li-rusija-sprema-jos-300000-vojnika-za-rat-u-ukrajini";

const PARAGRAPHS = [
  "Ukrajina očekuje da Rusija posle septembarskih izbora mobiliše dodatnih 300.000 ljudi za rat u Ukrajini, izjavio je Volodimir Zelenski. Prema njegovim rečima, Moskva bi najveći deo novih vojnika nastojala da mobiliše izvan Moskve i Sankt Peterburga, kako bi političke posledice takve odluke bile manje vidljive u dva najveća ruska grada. Reč je, međutim, o tvrdnji ukrajinskog predsednika koja za sada nije nezavisno potvrđena.",
  "Ako se procena Kijeva pokaže tačnom, dodatnih 300.000 vojnika ne bi služilo samo za popunjavanje postojećih ruskih jedinica. Zelenski tvrdi da Moskva priprema snage za nastavak operacija u Donjeckoj oblasti, posebno prema Konstantinovki, Slavjansku i Kramatorsku — gradovima čije bi zauzimanje Rusiju približilo uspostavljanju kontrole nad čitavom Donjeckom oblašću.",
  "Istovremeno, Zelenski tvrdi da Rusija ubrzava vojnu proizvodnju, uključujući proizvodnju balističkih raketa. Posmatrane zajedno, ove procene ukazuju na mogućnost da Moskva istovremeno povećava ljudske i industrijske kapacitete potrebne za dugotrajan rat. Ipak, između takve procene i potvrđenog plana Kremlja postoji suštinska razlika: ruske vlasti za sada nisu objavile odluku o mobilizaciji dodatnih 300.000 ljudi.",
  "Zato najvažniji deo ove vesti možda nije sama brojka, već vremenski horizont koji ona otvara. Ako Rusija zaista priprema stotine hiljada novih vojnika posle septembarskih izbora, bio bi to snažan pokazatelj da se u Moskvi ne razmišlja samo o narednoj ofanzivi, već da se ozbiljno računa sa mogućnošću da veliki rat u Evropi potraje i tokom 2027. godine.",
];

export default function Russia300000TroopsArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Da li Rusija sprema još 300.000 vojnika za rat u Ukrajini?"
      dateLabel="23. avgust 2026."
      deck="Rat u Ukrajini mogao bi da uđe u još jednu godinu velikih vojnih operacija. Kijev tvrdi da Rusija posle septembarskih izbora za Državnu dumu namerava da mobiliše dodatnih 300.000 ljudi, dok Moskva takav plan nije potvrdila. Ako je procena tačna, brojka govori mnogo više od veličine nove mobilizacije — govori o vremenu za koje se rat planira."
      imageSrc="/news/kremlin-moscow.jpg"
      imageAlt="Grafička ilustracija Moskovskog kremlja noću."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
