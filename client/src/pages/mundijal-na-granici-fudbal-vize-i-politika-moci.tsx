import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci";
const IMAGE_SRC = "/news/world-cup-visas.jpg";

const PARAGRAPHS = [
  "Svetsko prvenstvo je zamišljeno kao trenutak u kojem fudbal na mesec dana postaje zajednički jezik planete. Zastave, himne, navijači, stadioni, ogromne televizijske slike i obećanje da će lopta, bar nakratko, biti važnija od svega ostalog.",
  "Ali Mundijal 2026. počeo je sa jednom neprijatnom istinom: svet ne ostavlja svoje sukobe ispred stadiona.",
  "Ovoga puta, domaćini su Sjedinjene Države, Kanada i Meksiko, a to znači da najveći sportski događaj na svetu ulazi direktno u prostor velikih političkih napetosti. Granice, vize, sankcije, bezbednosne procene i diplomatski odnosi više nisu pozadina turnira. Postali su deo same utakmice.",
  "Najjasniji primer je Iran.",
  "Iranska reprezentacija dobila je američke vize tek pred početak turnira, ali deo zvaničnika fudbalske federacije, osoblja i novinara nije dobio dozvolu za ulazak u Sjedinjene Države. Zbog toga je iranska baza prebačena iz Arizone u Tihuanu, na meksičkoj strani granice, što je stvorilo gotovo neverovatnu situaciju: reprezentacija koja igra utakmice u SAD priprema se u Meksiku i ulazi u Ameriku pod posebnim uslovima.",
  "Predstavnici iranskog tima optužili su FIFA-u za nedostatak koordinacije, dok je svetska fudbalska organizacija pokušala da se distancira od odluka domaćina, uz poruku da ne može da kontroliše imigracionu politiku država koje organizuju turnir.",
  "I tu počinje prava tema.",
  "FIFA govori o fudbalu kao univerzalnom jeziku. Ali domaćin kontroliše granicu. A granica, u savremenom svetu, često govori glasnije od himne.",
  "Mundijal bi trebalo da bude mesto gde su sve reprezentacije ravnopravne bar u jednom smislu: kada se pojave na terenu, postoji samo igra. Ali pre nego što se do terena uopšte stigne, neko mora da dobije vizu, neko mora da prođe bezbednosnu proveru, neko mora da dobije pravo da putuje sa ekipom, a neko ostaje iza granice.",
  "To je suština novog Mundijala: fudbal je globalan, ali svet nije otvoren.",
  "Iran nije jedini slučaj. Oko turnira su se već pojavile rasprave o strogim američkim viznim pravilima, visokim cenama putovanja, tretmanu navijača, pristupu zvaničnika i pitanju da li jedan sportski spektakl može zaista da bude svetski ako deo sveta u njega ulazi pod sumnjom.",
  "U tome ima nečeg duboko simboličnog.",
  "Svetsko prvenstvo 2026. najveće je u istoriji, sa proširenim brojem učesnika i tri zemlje domaćina. Na papiru, to je proslava globalnog fudbala. U stvarnosti, ono se odvija u svetu koji je sve manje siguran, sve više podeljen i sve opsednutiji kontrolom kretanja ljudi.",
  "Ovaj Mundijal zato već na startu pokazuje pukotinu u ideji da je fudbal jednostavno iznad politike. Do terena se ne stiže samo formom, žrebom i pasošem reprezentativca, već i odlukom države koja kontroliše ulaz.",
  "Neko dobije vizu. Neko čeka. Neko putuje preko granice. Neko ostaje van kadra, iako je deo iste fudbalske priče.",
  "Amerika je ovim turnirom dobila svetsku scenu. Ali sa scenom je došlo i svetsko pitanje: može li zemlja koja tako strogo čuva svoje granice da bude domaćin najotvorenijem sportskom događaju na planeti?",
  "Odgovor se neće dobiti samo na terenu.",
  "Dobijaće se na aerodromima, u konzulatima, u hotelima preko granice, u odlukama koje nisu fudbalske, ali menjaju fudbalsku stvarnost.",
  "Lopta jeste krenula. Ali pre prvog velikog gola, geopolitika je već postigla svoj.",
];

export default function MundijalNaGraniciFudbalVizeIPolitikaMoci() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Mundijal na granici: fudbal, vize i politika moći"
      dateLabel="13. JUN 2026."
      authorLabel="Novi Talas"
      deck="Dok FIFA slavi najveći fudbalski spektakl na svetu, američka vizna politika, ratne tenzije i pitanje ko uopšte ima pravo da učestvuje na Svetskom prvenstvu već su postali deo turnira."
      imageSrc={IMAGE_SRC}
      imageAlt="Fudbalski stadion i kontrola granice kao simbol geopolitike Mundijala"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
