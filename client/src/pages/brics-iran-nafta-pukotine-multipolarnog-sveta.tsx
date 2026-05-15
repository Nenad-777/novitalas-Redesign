import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/brics-breaking.jpg";

const PARAGRAPHS = [
  "Sastanak ministara spoljnih poslova BRICS-a u Indiji dolazi u trenutku kada se ambicija ovog bloka suočava sa ozbiljnim ispitom. BRICS želi da bude glas sveta koji ne pristaje na zapadnu dominaciju, ali kriza oko Irana i Ormuskog moreuza pokazuje koliko je teško zajedničko nezadovoljstvo Zapadom pretvoriti u zajedničku politiku.",
  "Iran traži osudu SAD i Izraela, dok Ujedinjeni Arapski Emirati, takođe član BRICS-a, stoje na drugoj strani regionalne krize. Indija, kao domaćin i predsedavajuća, pokušava da sačuva ravnotežu, jer je i sama pogođena rastom cena energije i nesigurnošću pomorskih tokova. U takvoj situaciji, Ormuz postaje više od energetskog prolaza: postaje test unutrašnje čvrstine novog multipolarnog sveta.",
  "U tome se vidi osnovna slabost BRICS-a. Blok je dovoljno širok da okupi države koje žele veći prostor izvan zapadnih pravila, ali možda previše raznolik da bi lako postao jedinstvena politička sila. Kina, Indija, Rusija, Brazil, Iran, UAE, Južna Afrika, Egipat, Etiopija i Indonezija mogu da se slože da svet ne treba da bude uređen samo po meri Vašingtona i Brisela. Mnogo je teže da se slože šta treba uraditi kada jedna od njih postane središte krize.",
  "Rat oko Irana zato ne testira samo diplomatiju BRICS-a, već i samu ideju multipolarnosti. Lako je govoriti o novom poretku dok su teme razvoj, valute i reforma međunarodnih institucija. Teže je kada se zatvori moreuz, kada nafta poskupi, kada brodovi menjaju rute, a države moraju da biraju između principa, interesa i straha od širenja rata.",
  "BRICS se danas suočava sa paradoksom sopstvenog uspeha: što je širi, deluje važnije, ali što je širi, teže govori jednim glasom. Globalni jug nije jedinstven politički subjekt, već prostor različitih interesa, regionalnih rivalstava i ekonomskih zavisnosti. Iran i UAE ne gledaju na Ormuz istim očima, kao što ga ni Indija i Kina ne posmatraju samo kroz ideologiju, već kroz tankere, rafinerije i cenu goriva.",
  "Zato je ovaj sastanak važan. Ne zato što će jedna deklaracija rešiti rat oko Irana, već zato što pokazuje kako izgleda svet posle dominacije jednog centra. Taj svet nije nužno mirniji ni jednostavniji. On je gušći, nervozniji i pun preklapanja. Države ne žele da budu podređene Zapadu, ali ne žele ni da plate cenu tuđih ratova.",
  "Ako BRICS uspe da iz ove krize izađe sa makar minimalnim zajedničkim jezikom, pokazaće da može da preživi sudar interesa. Ako ne uspe, pokazaće da multipolarni svet ne mora da znači novi poredak, već samo više centara neslaganja.",
];

export default function BricsIranNaftaPukotineMultipolarnogSveta() {
  return (
    <ArticleTemplate
      path="/geopolitika/brics-iran-nafta-pukotine-multipolarnog-sveta"
      sectionLabel="GEOPOLITIKA"
      title="BRICS pred velikim testom: Iran, nafta i pukotine multipolarnog sveta"
      dateLabel="14. maj 2026."
      authorLabel="Novi Talas"
      deck="Sastanak ministara spoljnih poslova BRICS-a u Indiji održava se u trenutku kada rat oko Irana, kriza nafte i podele među članicama testiraju sposobnost bloka da govori jednim glasom."
      imageSrc={IMAGE_SRC}
      imageAlt="Sastanak BRICS-a i geopolitička kriza oko Irana i nafte"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
