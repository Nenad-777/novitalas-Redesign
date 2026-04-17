import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/military-cargo.jpg";

const PARAGRAPHS = [
  "Sjedinjene Američke Države odlažu deo planiranih isporuka oružja evropskim saveznicima zbog pojačanih operativnih zahteva u ratu sa Iranom, potvrđuju diplomatski i bezbednosni izvori.",
  "Prema dostupnim informacijama, prioritet u logistici i proizvodnim kapacitetima trenutno je usmeren na potrebe američkih i savezničkih snaga angažovanih u regionu Bliskog istoka, što direktno utiče na ranije dogovorene rokove isporuke za evropsko tržište.",
  "U evropskim prestonicama odluka se tumači kao privremena, ali politički značajna poruka o promeni bezbednosnih prioriteta Vašingtona u trenutku kada rat sa Iranom ulazi u fazu povećanog vojnog i finansijskog opterećenja.",
  "Zvaničnici više članica NATO-a navode da će kašnjenja zahtevati dodatno prilagođavanje nacionalnih planova nabavke i raspoređivanja opreme, uz procenu da bi deo ugovorenih isporuka mogao biti pomeren za naredne mesece.",
  "Iako iz američke administracije poručuju da strateško partnerstvo sa Evropom ostaje nepromenjeno, aktuelni razvoj događaja potvrđuje da dinamika rata na Bliskom istoku već preoblikuje transatlantske bezbednosne tokove.",
];

export default function SadOdlazuIsporukeOruzjaEvropiZbogRataSaIranom() {
  return (
    <ArticleTemplate
      path="/geopolitika/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom"
      sectionLabel="Geopolitika"
      title="SAD odlažu isporuke oružja Evropi zbog rata sa Iranom"
      dateLabel="17. APRIL 2026."
      deck="Sjedinjene Američke Države odlažu deo planiranih isporuka oružja evropskim saveznicima zbog pojačanih operativnih zahteva u ratu sa Iranom, potvrđuju diplomatski i bezbednosni izvori."
      imageSrc={IMAGE_SRC}
      imageAlt="Vojni transport i logistika na pisti uoči isporuke opreme"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
