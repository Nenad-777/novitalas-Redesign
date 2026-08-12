import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/obavestajni-izvori/sta-se-to-dogadja-u-evropi-priprema-za-rat-bez-fronta";

const PARAGRAPHS = [
  "Na istoku Evrope poslednjih dana ne podižu se nove linije fronta, ali se pojačava zaštita objekata bez kojih savremene države ne mogu da funkcionišu. Elektrane, brane, gasna skladišta, cevovodi i komunikacione veze sve više se posmatraju kao moguća poprišta sukoba koji ne mora početi prelaskom vojske preko granice.",
  "Povod za nove mere jesu obaveštajne procene o mogućim prikrivenim napadima na teritoriji NATO-a. Prema podacima koje je objavio Reuters, Poljska, Litvanija, Letonija i Estonija pojačavaju zaštitu ključne infrastrukture, oslanjajući se na informacije svojih i savezničkih službi.",
  "Jedan od scenarija koji se razmatra posebno je neobičan: mogućnost da Rusija upotrebi zaplenjene ukrajinske dronove za napad na neku od država NATO-a. Poreklo same letelice moglo bi, makar u prvim satima posle udara, da usmeri sumnju prema Ukrajini i oteža utvrđivanje odgovornosti.",
  "Za sada nema javno dostupnih dokaza da je takva operacija naređena niti da je napad neposredan. Reč je o obaveštajnoj proceni i mogućem scenariju za koji se države pripremaju, a ne o potvrđenom ruskom planu. Upravo je ta razlika presudna kada se govori o bezbednosnim informacijama ove vrste.",
  "Mere su, međutim, sasvim stvarne. Litvanija je angažovala vojsku na zaštiti važnih energetskih objekata, dok je Letonija pojačala obezbeđenje brane na Daugavi i podzemnog skladišta gasa Inčukalns. U Poljskoj se dodatno razmatraju zaštita energetskog sistema i alternativni pravci snabdevanja.",
  "Ono što evropske službe zabrinjava prevazilazi mogućnost uništenja jednog objekta. Prikriveni napad može imati sasvim drugačiji cilj: da izazove pometnju, međusobne optužbe i politički spor pre nego što istraga uopšte utvrdi šta se dogodilo.",
  "Zamislimo udar drona na elektranu u Poljskoj ili branu u Litvaniji. Pronađeni ostaci ukazuju na ukrajinsko poreklo letelice. Ali ko ju je lansirao? Da li je skrenula sa putanje? Da li je njen let promenjen elektronskim ometanjem? Da li je prethodno zaplenjena i ponovo osposobljena?",
  "Odgovori bi zahtevali vreme. Političke posledice ne bi.",
  "Upravo je tu jedna od najvećih teškoća sa kojima se NATO suočava u vremenu hibridnih sukoba. Član 5 Severnoatlantskog ugovora zasniva se na načelu kolektivne odbrane, ali savez pre donošenja odluka mora dovoljno pouzdano da utvrdi prirodu napada i njegovog počinioca. NATO je već upozorio da i veliki sajbernapadi i druge teške hibridne operacije, u zavisnosti od njihovih razmera i posledica, mogu dovesti do kolektivnog odgovora.",
  "Takav način ratovanja nije ruski izum niti pripada samo jednoj strani. Sabotaže, obmane, tajne operacije i prikrivanje odgovornosti deo su istorije ratovanja i obaveštajnog delovanja mnogo pre pojave dronova i računarskih mreža. Ono što se promenilo jeste broj sredstava kojima je danas moguće izvesti napad, a zatim otežati dokazivanje njegovog porekla.",
  "Rat u Ukrajini samo je ubrzao tu promenu.",
  "Bespilotne letelice više puta su ulazile ili padale na teritoriju susednih država. Elektronsko ratovanje može da poremeti njihovu putanju. Sajbernapad može biti izveden sa infrastrukture koja nema očiglednu vezu sa njegovim nalogodavcem. Saboter ne mora nositi uniformu, a oštećenje kabla na morskom dnu može nedeljama ostati predmet istrage.",
  "Istovremeno, evropske zemlje poslednjih godina beleže niz oštećenja podmorskih energetskih i komunikacionih kablova, požara, pokušaja sabotaže i sajbernapada. NATO je optužio Rusiju za intenziviranje prikrivenih aktivnosti protiv država članica, uključujući sabotaže, elektronsko ometanje, sajbernapade i dezinformacije. Moskva takve optužbe odbacuje. Za svaki pojedinačni incident, međutim, odgovornost mora biti posebno utvrđena.",
  "To je važno upravo zato što bi brzopleto pripisivanje krivice moglo da proizvede posledice gotovo jednako opasne kao i sam napad.",
  "U svetu nuklearnih sila i vojnih saveza pogrešna procena može pokrenuti lanac odluka koje je kasnije teško zaustaviti. Zbog toga sposobnost da se pouzdano utvrdi poreklo napada postaje deo odbrane isto koliko i protivvazdušni sistemi, vojska ili obaveštajne službe.",
  "Postoji i druga strana takvog sukoba — borba za tumačenje događaja.",
  "Nekoliko minuta posle eksplozije fotografije i snimci već bi bili na društvenim mrežama. Za nekoliko sati pojavile bi se različite tvrdnje o poreklu napada. Države, političke stranke, mediji i anonimni nalozi nudili bi sopstvena objašnjenja mnogo pre nego što bi stručnjaci završili prve analize.",
  "U takvim okolnostima više nije dovoljno pogoditi metu. Moguće je pogoditi i poverenje društva u sopstvenu sposobnost da sazna šta se dogodilo.",
  "Tu se nalazi suština rata bez fronta.",
  "Njegovo bojište mogu biti električna mreža, železnica, luka, računarski sistem, podmorski kabl ili javno mnjenje. Njegovi učesnici mogu biti vojnici, obaveštajci, hakeri, posrednici ili ljudi koji možda ni sami ne znaju u čijem interesu deluju.",
  "Zbog toga mere koje danas preduzimaju Poljska i baltičke države imaju šire značenje od jednog obaveštajnog upozorenja. Evropa se priprema za mogućnost sukoba u kojem granica između rata i mira neće uvek biti jasno vidljiva, a prvi zadatak države posle napada neće nužno biti da uzvrati.",
  "Biće da utvrdi šta se dogodilo.",
  "Jer u ratu bez fronta možda neće biti najteže odbraniti se od neprijatelja.",
  {
    type: "paragraph" as const,
    content: (
      <strong>Najteže će biti pouzdano utvrditi ko je neprijatelj.</strong>
    ),
  },
];

export default function EuropeWarWithoutFrontArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Obaveštajni izvori"
      title="Šta se to događa u Evropi: priprema za rat bez fronta?"
      dateLabel="12. avgust 2026."
      deck="Poljska i baltičke države pojačavaju zaštitu elektrana, brana, gasnih skladišta i druge ključne infrastrukture. Među scenarijima koje razmatraju obaveštajne službe nalazi se i mogućnost napada čije bi poreklo bilo namerno prikriveno. Rat u Ukrajini pokazao je da u savremenom sukobu nije dovoljno odbraniti granicu — ponekad je najteže utvrditi ko ju je zapravo napao."
      imageSrc="/news/europe-war-without-front.jpg"
      imageAlt="Naftna platforma na otvorenom moru kao simbol ranjivosti evropske energetske i kritične infrastrukture."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
