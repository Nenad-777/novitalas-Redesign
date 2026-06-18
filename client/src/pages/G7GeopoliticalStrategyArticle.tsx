import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "G7 pokreće novu geopolitičku strategiju: manje zavisnosti od Kine, veći pritisak na Rusiju i podrška sporazumu sa Iranom",
  "Samit lidera G7 u Evijanu pokazao je da se najrazvijenije zapadne ekonomije sve jasnije pripremaju za novu fazu globalnog nadmetanja. U zajedničkim porukama iz Francuske spojene su tri velike teme koje će oblikovati naredne godine: smanjenje zavisnosti od kineskih sirovina, nastavak pritiska na Rusiju zbog rata u Ukrajini i podrška diplomatskom sporazumu između Sjedinjenih Država i Irana.",
  "Na prvi pogled, reč je o odvojenim krizama. Kina je pitanje industrijske i tehnološke zavisnosti, Rusija pitanje evropske bezbednosti, a Iran pitanje stabilnosti Bliskog istoka i energetskih tokova. Ipak, poruka G7 bila je da se te krize više ne mogu posmatrati odvojeno. One zajedno čine novu mapu rizika za Zapad.",
  "Najkonkretniji deo strategije odnosi se na kritične sirovine. Lideri G7 najavili su jačanje lanaca snabdevanja koji nisu oslonjeni na Kinu, posebno kada je reč o mineralima neophodnim za baterije, čipove, obnovljive izvore energije i vojnu industriju. To nije samo ekonomska politika, već pokušaj da se spreči da buduće krize budu odlučene kontrolom nad resursima.",
  "Kina je tokom prethodnih decenija izgradila dominantnu poziciju u preradi retkih zemnih elemenata i drugih ključnih sirovina. Zapadne zemlje sada pokušavaju da nadoknade propušteno kroz ulaganja u rudnike, preradu, reciklažu i partnerstva sa državama koje se nalaze između velikih sila. Takav zaokret biće spor, skup i politički osetljiv, ali G7 ga predstavlja kao uslov buduće nezavisnosti.",
  "Drugi stub poruke iz Evijana odnosi se na Rusiju. Lideri G7 potvrdili su da podrška Ukrajini ostaje centralno pitanje zapadne bezbednosne politike. Iako se u evropskim prestonicama sve češće govori o zamoru od rata, zajednička formulacija pokazuje da vodeće zapadne ekonomije ne žele da Moskvi pošalju signal da vreme radi u njenu korist.",
  "Pritisak na Rusiju zato se ne svodi samo na vojne isporuke Kijevu. On obuhvata sankcije, zamrzavanje finansijskih tokova, kontrolu izvoza tehnologije i pokušaj da se ograniči prostor kroz koji ruska ekonomija zaobilazi zapadna ograničenja. G7 time poručuje da rat u Ukrajini ostaje test kredibiliteta celog zapadnog saveza.",
  "Treći element strategije, podrška sporazumu između SAD i Irana, pokazuje da Zapad istovremeno želi da smanji broj otvorenih frontova. Nakon perioda ozbiljne eskalacije u Persijskom zalivu, dogovor Vašingtona i Teherana vidi se kao način da se spreči novi energetski šok i otvori prostor za šire razgovore o regionalnoj bezbednosti.",
  "Za evropske članice G7 stabilizacija odnosa sa Iranom ima posebnu težinu. Svaki poremećaj u Ormuskom moreuzu brzo se preliva na cene energije, inflaciju, transport i unutrašnju politiku. Zbog toga podrška sporazumu nije samo diplomatski gest prema Vašingtonu, već i pokušaj da se zaštiti evropska ekonomska stabilnost.",
  "Ipak, nova strategija G7 nosi i očigledne kontradikcije. Zapad želi manje zavisnosti od Kine, ali mu je kineska industrija i dalje duboko ugrađena u zelenu tranziciju. Želi dugoročan pritisak na Rusiju, ali istovremeno mora da upravlja troškovima rata. Želi smirivanje Bliskog istoka, ali nema potpunu kontrolu nad regionalnim akterima koji mogu ponovo otvoriti krizu.",
  "Upravo zato Evijan ne treba čitati kao završenu doktrinu, već kao pokušaj da se različite politike povežu u jedinstven okvir. G7 pokušava da pokaže da ekonomska bezbednost, energetska stabilnost, rat u Ukrajini i diplomatski proces sa Iranom pripadaju istoj slici sveta: svetu u kome zavisnosti postaju oružje, a savezništva instrument preživljavanja.",
  "Za manje države, ova poruka ima posebno značenje. One će se sve češće nalaziti pred pritiskom da biraju dobavljače, tehnologije, investitore i političke pozicije ne samo prema ceni, već i prema geopolitičkoj pouzdanosti. U takvom svetu neutralnost postaje skuplja, a prostor za balansiranje sve uži.",
  "Samit u Evijanu zato označava više od redovnog susreta zapadnih lidera. On pokazuje da G7 pokušava da pređe iz faze reagovanja na krize u fazu oblikovanja dugoročne otpornosti. To možda nije najupadljivija odluka doneta u Evijanu, ali bi se vremenom mogla pokazati kao njegova najvažnija poruka.",
];

export default function G7GeopoliticalStrategyArticle() {
  return (
    <ArticleTemplate
      path="/geopolitika/g7-nova-geopoliticka-strategija"
      sectionLabel="Geopolitika"
      title="G7 pokreće novu geopolitičku strategiju: manje zavisnosti od Kine, veći pritisak na Rusiju i podrška sporazumu sa Iranom"
      dateLabel="18. jun 2026."
      deck="Lideri najrazvijenijih zapadnih ekonomija poslali su sa samita G7 poruku da ulaze u novu fazu geopolitičkog nadmetanja — kroz smanjenje zavisnosti od kineskih sirovina, nastavak podrške Ukrajini i podršku sporazumu između SAD i Irana."
      imageSrc="/news/g7-summit-evian-2026.jpg"
      imageAlt="Leaders of G7 countries during the 2026 summit in Évian, France"
      imageCredit="European Council / Council of the EU"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
