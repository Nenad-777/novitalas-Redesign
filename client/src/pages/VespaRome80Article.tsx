import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Više hiljada ljubitelja legendarnog skutera Vespa okupilo se u istorijskom centru Rima kako bi obeležili osamdeset godina jednog od najprepoznatljivijih simbola italijanskog dizajna i kulture. Kolona skutera prošla je pored najpoznatijih rimskih trgova i znamenitosti, pretvarajući grad u veliku pokretnu izložbu modela koji su obeležili generacije vozača širom sveta.",
  "Manifestacija je okupila učesnike iz više desetina zemalja, od vlasnika pažljivo restauriranih primeraka iz pedesetih godina do zaljubljenika u najnovije modele. Za mnoge od njih Vespa nije samo prevozno sredstvo, već deo lične istorije i simbol jednog načina života.",
  "Priča o Vespi počela je 1946. godine, kada je italijanska kompanija Piaggio predstavila skuter namenjen jednostavnom i pristupačnom gradskom prevozu. Zahvaljujući prepoznatljivom dizajnu i praktičnosti, Vespa je ubrzo postala globalni fenomen, a njenu popularnost dodatno su učvrstili filmovi poput „Praznik u Rimu“, u kojem su Audrey Hepburn i Gregory Peck upravo na Vespi obišli ulice italijanske prestonice.",
  "Osam decenija kasnije, ovaj skuter ostaje mnogo više od tehničkog proizvoda. On predstavlja spoj industrijskog dizajna, italijanske elegancije i kulture putovanja, zbog čega se i danas smatra jednom od najuspešnijih dizajnerskih ikona 20. veka. Jubilej u Rimu još jednom je pokazao da Vespa, uprkos vremenu i tehnološkim promenama, i dalje okuplja zajednicu ljudi koje povezuje ista ideja slobode na dva točka.",
];

export default function VespaRome80Article() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/hiljade-vespi-preplavile-rim-povodom-80-godina-italijanske-ikone"
      sectionLabel="Naša planeta"
      title="Hiljade Vespi preplavile Rim povodom 80 godina italijanske ikone"
      dateLabel="28. jun 2026."
      deck="Više hiljada vlasnika Vespi okupilo se u istorijskom centru Rima kako bi obeležili osam decenija jednog od najprepoznatljivijih simbola italijanskog dizajna, filma i urbanog života."
      imageSrc="/news/vespa-rome-80th-anniversary.jpg"
      imageAlt="Watercolor editorial illustration of the 80th anniversary Vespa parade through Rome"
      imageCredit="Ilustracija / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
