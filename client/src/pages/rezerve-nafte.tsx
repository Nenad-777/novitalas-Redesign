/*
 * IEA pokreće najveće oslobađanje naftnih rezervi u istoriji - GEOPOLITIKA (single article)
 * Date: 11. MART 2026
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Međunarodna agencija za energiju (IEA) objavila je da će njene članice osloboditi oko 400 miliona barela nafte iz strateških rezervi, što predstavlja najveću koordinisanu energetsku intervenciju u istoriji. Odluka je doneta nakon naglog poremećaja na globalnom tržištu energije izazvanog krizom u Persijskom zalivu i ozbiljnim problemima u transportu nafte kroz Hormuški moreuz.",

  "IEA je saopštila da su se sve 32 države članice složile da zajednički puste deo svojih rezervi na tržište kako bi ublažile nagli rast cena nafte i stabilizovale globalno snabdevanje energijom. Ovaj potez veći je i od intervencije iz 2022. godine, kada su rezerve korišćene nakon ruske invazije na Ukrajinu.",

  "Kriza je posebno ozbiljna zbog činjenice da kroz Hormuški moreuz prolazi gotovo petina svetske trgovine naftom, pa svaki poremećaj u tom regionu ima neposredan uticaj na globalno tržište energije. Cene nafte već su naglo porasle, a pojedine države upozoravaju da bi produženi prekid transporta mogao imati ozbiljne posledice po svetsku ekonomiju.",

  "Odluka IEA pokazuje koliko su energetska bezbednost i geopolitika danas povezane. Nafta ostaje ključni instrument globalne stabilnosti, a krizne intervencije poput ove podsećaju da energetsko tržište funkcioniše ne samo kao ekonomski, već i kao strateški sistem međunarodne politike.",
];

export default function RezerveNafte() {

  return (
    <ArticleTemplate
      path="/geopolitika/rezerve-nafte"
      sectionLabel="Geopolitika"
      title="IEA pokreće najveće oslobađanje naftnih rezervi u istoriji"
      dateLabel="11. MART 2026."
      deck="Države članice Međunarodne agencije za energiju puštaju 400 miliona barela nafte iz strateških rezervi kako bi ublažile globalni energetski šok izazvan krizom u Persijskom zalivu."
      imageSrc="/rezerve-nafte.jpg"
      imageAlt="IEA — oslobađanje strateških naftnih rezervi"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
