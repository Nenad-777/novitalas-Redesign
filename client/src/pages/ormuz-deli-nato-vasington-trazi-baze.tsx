/*
 * Ormuz deli NATO: Vasington trazi baze, Evropa meri cenu saveznistva - GEOPOLITIKA
 * Date: 8. maj 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/ormuz-nato-problems.jpg";

const PARAGRAPHS = [
  "Američki državni sekretar Marko Rubio upozorio je da odbijanje pojedinih NATO saveznika da dozvole upotrebu svojih baza za američke operacije povezane sa Iranom i Ormuskim moreuzom predstavlja ozbiljan problem za savez. Posle razgovora sa italijanskom premijerkom Đorđom Meloni, Rubio je poručio da nije dovoljno da saveznici verbalno osuđuju iranske poteze ako istovremeno ne žele da podrže američke napore da se obezbedi slobodna plovidba kroz jedan od najvažnijih svetskih energetskih prolaza.",
  "Prema izveštajima svetskih agencija, Vašington je nezadovoljan zbog rezervisanosti Italije i drugih evropskih saveznika prema američkoj strategiji protiv Irana. Italija je, prema navodima diplomatskih izvora, odbila da podrži američko-izraelski rat protiv Irana i nije dozvolila korišćenje baze Sigonela za operacije povezane sa krizom. Rubio je slične primedbe izneo i na račun Španije, upozoravajući da se u NATO-u otvara pitanje pouzdanosti saveznika kada američke snage zatraže pristup evropskoj infrastrukturi.",
  "Kriza oko Ormuza time dobija novu dimenziju. Moreuz kroz koji prolazi veliki deo svetske trgovine energentima više nije samo tačka sukoba između Vašingtona i Teherana. On postaje mesto na kome se meri stvarna cena savezništva: da li evropske države vide američke operacije kao zaštitu zajedničkih interesa, ili kao rizik da budu uvučene u rat čiji politički cilj, pravni okvir i posledice ne kontrolišu.",
  "Evropska uzdržanost nije nužno znak slabosti, već znak duboke nelagodnosti. Mnoge vlade u Evropi znaju da bi zatvaranje Ormuza pogodilo njihove ekonomije, cene energije i lance snabdevanja. Ali isto tako znaju da direktna podrška američkim operacijama može izazvati domaći politički otpor, pravne dileme i opasnost od širenja sukoba. Zato se iza pitanja baza krije mnogo veće pitanje: da li NATO služi samo za odbranu evroatlantskog prostora, ili i za američko projektovanje sile daleko izvan njega.",
  "Rubio upravo tu vidi problem. Ako Sjedinjene Države drže desetine hiljada vojnika i ključne baze u Evropi radi odbrane saveznika, a ti saveznici u trenutku američke krize odbijaju da stave tu infrastrukturu na raspolaganje, onda Vašington počinje da savezništvo posmatra kao jednosmernu ulicu. Takva logika opasna je za Evropu, jer otvara prostor za novu američku raspravu o tome šta SAD dobijaju od NATO-a i koliko su spremne da nastave da nose teret evropske bezbednosti.",
  "Za evropske saveznike dilema je jednako teška. Ako bezuslovno podrže američke operacije, rizikuju da postanu deo šireg rata sa Iranom. Ako ih odbiju, rizikuju da oslabe poverenje Vašingtona u NATO. U oba slučaja, Ormuz postaje mnogo više od geografske tačke na karti. Postaje ogledalo novog zapadnog nesklada, u kome se zajednički interesi sve teže pretvaraju u zajedničku strategiju.",
  "Francuska je već otvoreno upozorila da NATO nije osmišljen za operacije u Ormuskom moreuzu, već za bezbednost evroatlantskog prostora. Takav stav dobro opisuje evropsku logiku: moreuz je globalno važan, ali nije automatski NATO ratište. Vašington, međutim, tu istu uzdržanost vidi kao odbijanje saveznika da pomognu onda kada američka sila štiti plovidbu od koje zavisi i evropska ekonomija.",
  "Zato ova kriza može ostaviti posledice i posle eventualnog otvaranja moreuza. Energetski šok može proći, tankeri se mogu vratiti na rute, a diplomatija može proizvesti privremeni dogovor. Ali pitanje koje je Ormuz otvorio u NATO-u neće lako nestati: koliko je savez čvrst kada američki i evropski interesi nisu potpuno isti, a odluka o ratu i miru ne dolazi iz zajedničkog centra, već iz Vašingtona.",
  "U tom smislu, Ormuz je postao proba budućeg Zapada. Ne zato što će jedna baza ili jedan let odlučiti sudbinu saveza, već zato što pokazuje koliko se brzo stari poredak menja kada kriza iz Zaliva stigne do evropskih aerodroma, vlada i parlamenata. NATO možda ostaje najmoćniji vojni savez na svetu, ali se u Ormuskom moreuzu vidi da moć više nije dovoljna ako izostane poverenje.",
];

export default function OrmuzDeliNatoVasingtonTraziBaze() {
  return (
    <ArticleTemplate
      path="/geopolitika/ormuz-deli-nato-vasington-trazi-baze"
      sectionLabel="Geopolitika"
      title="Ormuz deli NATO: Vašington traži baze, Evropa meri cenu savezništva"
      dateLabel="8. maj 2026."
      authorLabel="Novi Talas"
      deck="Kriza u Ormuskom moreuzu više nije samo sukob SAD i Irana. Ona sada testira unutrašnju čvrstinu NATO-a, spremnost evropskih saveznika da podrže američke operacije i sposobnost Zapada da zaštiti ključne energetske prolaze."
      imageSrc={IMAGE_SRC}
      imageAlt="Ormuski moreuz i NATO saveznici, ilustracija geopolitičke krize"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
