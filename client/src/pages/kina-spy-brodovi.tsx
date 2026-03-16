/*
 * Kina prati američke snage na Bliskom istoku — Obaveštajni izvori (single article)
 * Date: 9. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Nova analiza zapadnih bezbednosnih službi ukazuje da Kina sve intenzivnije prati kretanje američkih vojnih snaga u regionu Bliskog istoka. U središtu pažnje nalaze se kineski nadzorni brodovi, ali i jedna tehnološka kompanija koja koristi veštačku inteligenciju i satelitske snimke kako bi analizirala raspored američkih baza i vojnih sistema.",

  "Prema izveštajima više međunarodnih medija, kineska AI firma objavljuje analize o rasporedu američkih aviona, nosača aviona i protivvazdušnih sistema u regionu. Analitičari upozoravaju da su takvi podaci često izuzetno precizni, što je izazvalo sumnje da kompanija deluje u bliskoj vezi sa kineskim državnim strukturama.",

  "Istovremeno, kineski nadzorni brodovi primećeni su u blizini ključnih pomorskih koridora Persijskog zaliva i Omanskog mora. Takvi brodovi, poznati kao špijunski brodovi, koriste se za elektronsko izviđanje, presretanje komunikacija i prikupljanje podataka sa radarskih sistema.",

  "Ovi događaji dolaze u trenutku kada Kina produbljuje političke i ekonomske odnose sa Iranom. U Vašingtonu postoji bojazan da bi deo prikupljenih informacija mogao indirektno pomoći Teheranu u proceni američkih vojnih kapaciteta u regionu.",

  "Analitičari ocenjuju da ovaj razvoj događaja ukazuje na novu fazu globalnog rivalstva velikih sila: dok se Sjedinjene Države i Iran nalaze u periodu pojačanih tenzija, Kina sve otvorenije širi svoj obaveštajni i strateški uticaj na Bliskom istoku.",
];

export default function KinaSpyBrodovi() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/kina-spy-brodovi"
      sectionLabel="Obaveštajni izvori"
      title="Kina prati američke snage na Bliskom istoku uz pomoć AI i špijunskih brodova"
      dateLabel="9. MART 2026."
      deck="Nova analiza zapadnih bezbednosnih službi otkriva kineske nadzorne operacije u regionu"
      imageSrc="/images/obavestajni-izvori/kina-spy-ship.jpg"
      imageAlt="Kineski špijunski brod — nadzor u Persijskom zalivu"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
