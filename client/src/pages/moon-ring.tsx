import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Japanski istraživački tim predstavio je koncept izgradnje ogromnog solarnog sistema na Mesecu, koji bi mogao neprekidno da proizvodi energiju i šalje je na Zemlju.",
  "Ideja podrazumeva postavljanje niza solarnih panela duž lunarnog ekvatora, u dužini od oko 11.000 kilometara, čime bi se omogućilo konstantno prikupljanje Sunčeve energije bez prekida koje uzrokuju noćni ciklusi na Zemlji.",
  "Prikupljena energija bi se, prema planu, pretvarala u mikrotalasni ili laserski signal i zatim bežično prenosila do prijemnih stanica na Zemlji, gde bi se ponovo konvertovala u električnu energiju.",
  "Zagovornici ovog koncepta ističu da bi takav sistem mogao da obezbedi stabilan i praktično neiscrpan izvor energije, nezavisan od vremenskih uslova i geografskih ograničenja.",
  "Ipak, projekat je i dalje u fazi teorijskog razvoja i suočava se sa velikim tehničkim i finansijskim izazovima.",
  "Ovakvi projekti ukazuju na pravac u kojem se razmišljanje o energiji kreće — ka sistemima koji prevazilaze granice planete i oslanjaju se na svemir kao novi resurs.",
];

export default function MoonRing() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/moon-ring"
      sectionLabel="Naša planeta"
      title="Plan iz Japana: solarni prsten oko Meseca za energiju Zemlje"
      dateLabel="24. MART 2026."
      deck="Japanski istraživački tim predstavio je koncept izgradnje ogromnog solarnog sistema na Mesecu, koji bi mogao neprekidno da proizvodi energiju i šalje je na Zemlju."
      imageSrc="/news/moon-ring.jpg"
      imageAlt="Solarni prsten oko Meseca — japanski koncept svemirske energije"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
