/*
 * Evropa preispituje oslanjanje na američke obaveštajne službe
 * Obaveštajni izvori — 9. jun 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/europe-independent-intelligence.jpg";

const PARAGRAPHS = [
  "Evropske bezbednosne i obaveštajne službe sve otvorenije izražavaju zabrinutost zbog dugogodišnje zavisnosti od američkih obaveštajnih kapaciteta. Prema navodima visokih evropskih zvaničnika, rat u Ukrajini, rastuće tenzije sa Rusijom i neizvesnost oko budućeg spoljnopolitičkog kursa Vašingtona podstakli su raspravu o potrebi jačanja evropskih obaveštajnih sposobnosti.",

  "Evropske zemlje i dalje u velikoj meri koriste informacije koje prikupljaju američke službe, posebno u oblastima satelitskog izviđanja, elektronskog nadzora i analize globalnih bezbednosnih pretnji. Zbog toga se u pojedinim evropskim prestonicama sve češće postavlja pitanje da li Evropska unija može samostalno da procenjuje i predviđa globalne bezbednosne izazove.",

  "Pojedine države članice sada razmatraju dugoročnu strategiju razvoja sopstvenih obaveštajnih kapaciteta, uključujući jačanje satelitskih sistema, analitičkih centara i međusobne razmene podataka, kako bi Evropa u budućnosti bila manje zavisna od političkih promena u Sjedinjenim Američkim Državama.",

  "Rasprava koja se danas vodi u evropskim bezbednosnim krugovima zapravo otvara mnogo šire pitanje — može li Evropa u 21. veku da bude geopolitički subjekt ili će ostati oslonjena na procene i prioritete svojih saveznika?",

  "Tokom poslednjih nekoliko decenija evropska bezbednost počivala je na pretpostavci da će američka vojna i obaveštajna podrška ostati trajna i neupitna. Međutim, promenljiva međunarodna scena i rastuća geopolitička neizvesnost navode evropske lidere da razmišljaju o drugačijoj budućnosti.",

  "Ukoliko želi da postane istinski geopolitički akter, Evropska unija moraće da razvije sposobnost da samostalno prikuplja, obrađuje i procenjuje informacije od strateškog značaja. Za sada se ova rasprava vodi uglavnom iza zatvorenih vrata. Ipak, istorija pokazuje da upravo takvi razgovori često predstavljaju prve nagoveštaje velikih promena koje kasnije oblikuju međunarodni poredak.",
];

export default function EvropaPreispitujeOslanjanjeNaAmericskeObavestajneSluzbe() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/evropa-preispituje-oslanjanje-na-americke-obavestajne-sluzbe"
      sectionLabel="Obaveštajni izvori"
      title="Evropa preispituje oslanjanje na američke obaveštajne službe"
      dateLabel="9. jun 2026."
      deck="Evropske bezbednosne i obaveštajne službe sve otvorenije izražavaju zabrinutost zbog dugogodišnje zavisnosti od američkih obaveštajnih kapaciteta. Rat u Ukrajini i neizvesnost oko spoljnopolitičkog kursa Vašingtona pokrenuli su raspravu o jačanju evropskih obaveštajnih sposobnosti."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija — Evropa i nezavisne obaveštajne službe"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
