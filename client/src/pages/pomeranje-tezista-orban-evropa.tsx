import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/magyar.jpg";

const PARAGRAPHS = [
  "U političkim sistemima koji dugo funkcionišu oko jedne ličnosti, izborni poraz retko znači samo smenu vlasti. Mnogo češće označava trenutak u kojem se menja način na koji sistem funkcioniše.",
  "Poraz Viktora Orbana posle šesnaest godina vlasti zato prevazilazi okvir unutrašnje politike Mađarske. Njegovo političko delovanje vremenom je izašlo iz nacionalnih granica i postalo deo šire geopolitičke strukture.",
  "Orbanova politika balansiranja između Evropske unije i Rusije, uz istovremeno približavanje globalnim desnim pokretima i otvorenu podršku Donalda Trampa, oblikovala je položaj Mađarske kao specifične tačke unutar evropskog sistema, mesta na kojem su se sudarale različite političke logike.",
  "Zbog toga njegov poraz ima težinu koja se ne može svesti na unutrašnju promenu vlasti.",
  "Evropska unija godinama je delovala uz stalno prisutan unutrašnji otpor koji nije dolazio spolja, već iz samog sistema. Orban je bio njegov najvidljiviji politički izraz. Kroz blokiranje odluka, usporavanje procesa i održavanje paralelnih odnosa sa Moskvom, Mađarska je menjala način na koji Unija funkcioniše iznutra.",
  "Sa njegovim odlaskom ta napetost ne nestaje, ali gubi svoj najefikasniji politički kanal.",
  "Reakcije tržišta brzo su pokazale kako se ova promena čita izvan političkog jezika.",
  "Jačanje forinte i rast očekivanja investitora ukazuju na pretpostavku da će se odnos Budimpešte i Brisela stabilizovati i da će se Mađarska vratiti u predvidiviji okvir evropske politike.",
  "Geopolitička dimenzija ovog događaja otvara širi horizont.",
  "Tokom prethodnih godina formirao se prepoznatljiv obrazac saradnje između različitih političkih aktera, u kojem su se preplitali ruski model stabilnosti zasnovan na kontroli, američki populistički pokret okupljen oko Donalda Trampa i evropski suverenistički lideri koji su takav pristup prilagođavali sopstvenim sistemima. Orban je bio figura koja je taj spoj prenela u institucionalni prostor Evropske unije.",
  "Njegov poraz menja ravnotežu unutar tog neformalnog političkog sklopa.",
  "Ipak, svako tumačenje koje bi ovu promenu opisalo kao povratak liberalnog poretka ostaje nedovoljno.",
  "Strukture koje su izgrađene tokom njegove vladavine ne nestaju zajedno sa izbornim rezultatom. One ostaju prisutne u institucijama, u ekonomskim odnosima i u političkoj kulturi. Činjenica da su njegovi protivnici morali da pobede unutar takvog sistema govori o njegovoj dubini.",
  "Promena vlasti ne znači automatski promenu sistema.",
  "Zato se ovo pomeranje ne može razumeti kao jasan prelom.",
  "Orbanov poraz treba da se posmatra kao promena unutar postojećeg okvira. Evropska unija dobija prostor za koherentnije delovanje. Rusija gubi pouzdanog partnera u evropskim institucijama, ali ne i kapacitet za uticaj. Globalni politički tokovi ostaju otvoreni i nestabilni.",
  "Ovaj trenutak otkriva ono što je do sada bilo manje vidljivo.",
  "Model koji je Orban predstavljao nije bio izolovan fenomen. Bio je deo šire strukture koja je već oblikovala način na koji savremeni politički sistemi funkcionišu.",
  "Strukture tog tipa ne nestaju izbornim porazom. Menjaju formu i nastavljaju da deluju.",
];

export default function PomeranjeTezistaOrbanEvropa() {
  return (
    <ArticleTemplate
      path="/geopolitika/pomeranje-tezista-orban-evropa"
      sectionLabel="Geopolitika"
      title="POMERANJE TEŽIŠTA: Šta poraz Orbana znači za Evropu i svet"
      dateLabel="13. APRIL 2026."
      deck="Analiza političkih i geopolitičkih posledica poraza Viktora Orbana u Mađarskoj"
      imageSrc={IMAGE_SRC}
      imageAlt="Viktor Orban — poraz na izborima u Mađarskoj i geopolitičke posledice"
      imageCredit="Novi Talas / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
