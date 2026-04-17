import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/open-ormuz.jpg";

const PARAGRAPHS = [
  "Iran je saopštio da je Hormuški moreuz otvoren za komercijalni saobraćaj tokom trajanja primirja, čime je privremeno ublažena jedna od najvećih bojazni svetskih tržišta u proteklim danima. Reč je o jednom od najvažnijih pomorskih prolaza na svetu, kroz koji prolazi veliki deo globalne trgovine naftom i gasom.",
  "Poruka iz Teherana dolazi u trenutku pojačanih tenzija na Bliskom istoku, nakon višednevne zabrinutosti da bi eventualna blokada prolaza mogla izazvati ozbiljan poremećaj u snabdevanju energentima i dodatni rast cena na svetskom tržištu. Otvaranje moreuza za komercijalne brodove zato se tumači i kao ekonomski i kao politički signal.",
  "Ipak, i pored formalnog otvaranja plovnog puta, situacija ostaje krhka. Hormuški moreuz i dalje ostaje jedna od ključnih tačaka globalne geopolitičke napetosti, a svaka promena bezbednosnih okolnosti u regionu može ponovo uticati na tokove trgovine, osiguranje transporta i cenu energenata.",
  "U tom smislu, ova odluka ne znači kraj neizvesnosti, već pre privremeni predah. Tržišta su reagovala sa oprezom, dok analitičari upozoravaju da stabilnost prolaza i dalje zavisi od razvoja političko-vojne situacije u regionu.",
];

export default function IranOtvorioHormuskiMoreuzZaKomercijalniSaobracajTokomPrimirja() {
  return (
    <ArticleTemplate
      path="/geopolitika/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja"
      sectionLabel="SVET DANAS"
      title="Iran otvorio Hormuški moreuz za komercijalni saobraćaj tokom primirja"
      dateLabel="17. APRIL 2026."
      deck="Teheran je saopštio da je Hormuški moreuz otvoren za komercijalni saobraćaj tokom trajanja primirja, čime je privremeno smanjena bojazan od novog udara na globalno tržište energije."
      imageSrc={IMAGE_SRC}
      imageAlt="Hormuški moreuz otvoren za komercijalni saobraćaj tokom primirja"
      imageCredit="NOVI TALAS / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
