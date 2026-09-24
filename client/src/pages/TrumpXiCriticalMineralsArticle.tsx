import ArticleTemplate from "@/components/ArticleTemplate";

const ARTICLE = {
  path: "/geopolitika/pred-razgovore-trampa-i-sija-amerika-ostaje-zavisna-od-kineskih-kriticnih-minerala",
  title: "Pred razgovore Trampa i Sija: Amerika ostaje zavisna od kineskih kritičnih minerala",
  dateLabel: "24. SEPTEMBAR 2026.",
  authorLabel: "",
  deck: "Kina kontroliše ključne delove lanca retkih zemalja potrebnih američkoj industriji, tehnologiji i odbrani. Pred razgovore Donalda Trampa i Si Đinpinga u Vašingtonu, ta zavisnost postaje jedno od centralnih pitanja odnosa dve najveće svetske ekonomije.",
  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/President_Donald_Trump_participates_in_a_bilateral_meeting_with_Chinese_President_Xi_Jinping_at_the_Gimhae_International_Airport_terminal_%2854889568887%29.jpg",
  imageAlt: "Donald Tramp i Si Đinping sa američkom i kineskom delegacijom tokom bilateralnog sastanka u Busanu 2025.",
  imageCredit: "Donald Tramp i Si Đinping tokom bilateralnog sastanka / Foto: Daniel Torok, The White House / Public Domain",
  paragraphs: [
    {
      type: "paragraph" as const,
      content: <>Donald Tramp i Si Đinping razgovaraju u Vašingtonu u trenutku kada su trgovina, veštačka inteligencija i strateške sirovine postale deo istog nadmetanja dve najveće svetske ekonomije. Uoči sastanka američki ministar finansija Skot Besent rekao je da su Sjedinjene Države otvorene i za produženje postojećeg trgovinskog primirja, koje ističe 10. novembra, i za mogućnost šireg dogovora sa Pekingom. Ali iza pokušaja stabilizacije trgovinskih odnosa ostaje problem koji Vašington ne može brzo da reši: Sjedinjene Države i dalje zavise od Kine za snabdevanje retkim zemljama neophodnim savremenoj industriji, tehnologiji i odbrani. Reuters, pozivajući se na podatke Benchmark Mineral Intelligencea, navodi da će ta zavisnost trajati duboko u 2030-im godinama.</>,
    },
    {
      type: "paragraph" as const,
      content: <>Retke zemlje su grupa od 17 hemijskih elemenata koji se koriste u proizvodnji snažnih magneta, električnih vozila, računara, avionskih motora, poluprovodnika i sofisticiranih vojnih sistema. Njihov naziv može da zavara: problem nije samo u tome koliko ih ima u prirodi, već gde se mogu ekonomično eksploatisati i, još važnije, ko ima kapacitete da ih preradi. Kina danas kontroliše do 70 odsto globalne eksploatacije retkih zemalja, više od 85 odsto kapaciteta za njihovu preradu i oko 90 odsto proizvodnje legura i magneta, prema podacima koje prenosi Reuters. Upravo je prerada najteži deo lanca koji SAD pokušavaju da izgrade izvan Kine.</>,
    },
    {
      type: "paragraph" as const,
      content: <>Koliko je ta zavisnost konkretna pokazuje itrijum, jedna od retkih zemalja važna za vazduhoplovnu industriju i proizvodnju čipova. Reuters je 24. septembra objavio da su američki i japanski zvaničnici, zajedno sa predstavnicima kompanija, dve nedelje pred sastanak Trampa i Sija posebno razgovarali o problemima u snabdevanju kineskim itrijumom. Peking je već pokazao da kontrolu nad ovim lancem može da koristi kao instrument trgovinske politike, dok Vašington pokušava da ograniči kineski pristup najnaprednijim poluprovodnicima i tehnologijama. Kritični minerali zato više nisu sporedna industrijska tema: postali su jedan od instrumenata u odnosima dve sile.</>,
    },
    {
      type: "paragraph" as const,
      content: <>To menja i prirodu razgovora u Vašingtonu. Sjedinjene Države zadržavaju snažnu poziciju u najnaprednijim tehnologijama, ali Kina kontroliše veliki deo lanca snabdevanja materijalima bez kojih deo tih tehnologija ne može da se proizvodi. Bela kuća je još posle majskih razgovora Trampa i Sija navela da će Kina rešavati američke primedbe u vezi sa nestašicama retkih zemalja i drugih kritičnih minerala, uključujući itrijum, skandijum i neodimijum. Četiri meseca kasnije, pitanje je ponovo na stolu. To je možda i najvažnija činjenica pred razgovore Trampa i Sija: tehnološko nadmetanje SAD i Kine više se ne vodi samo oko toga ko može da napravi najnapredniji proizvod, već i oko toga ko kontroliše materijale bez kojih taj proizvod ne može da nastane.</>,
    },
  ],
};

export default function TrumpXiCriticalMineralsArticle() {
  return <ArticleTemplate path={ARTICLE.path} sectionLabel="Geopolitika" title={ARTICLE.title} dateLabel={ARTICLE.dateLabel} authorLabel={ARTICLE.authorLabel} deck={ARTICLE.deck} imageSrc={ARTICLE.imageSrc} imageAlt={ARTICLE.imageAlt} imageCredit={ARTICLE.imageCredit} imageFirst={true} imageHeightClass="h-auto" paragraphs={ARTICLE.paragraphs} backHref="/geopolitika" backLabel="← Nazad na Geopolitiku" />;
}
