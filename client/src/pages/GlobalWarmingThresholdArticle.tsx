import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/svet-ce-gotovo-izvesno-preci-granicu-od-1-5-stepeni";

const PARAGRAPHS = [
  {
    type: "paragraph" as const,
    content: (
      <>
        Svet će gotovo izvesno preći granicu globalnog zagrevanja od 1,5 stepeni
        Celzijusa u odnosu na predindustrijski period, ocenjuje Program
        Ujedinjenih nacija za životnu sredinu (UNEP) u novom izveštaju{" "}
        <em>Limiting Overshoot</em>. Uz sadašnje politike i realne kratkoročne
        putanje emisija, prekoračenje ove granice više se ne smatra scenarijem
        koji se može izbeći. To nije isto što i podatak da je prosečna globalna
        temperatura tokom pojedinih godina već prelazila 1,5 stepeni: klimatski
        cilj odnosi se na dugoročno zagrevanje, a upravo se tom pragu svet sada
        približava.
      </>
    ),
  },
  "Čak i najpovoljniji scenario koji UNEP razmatra predviđa da će zagrevanje dostići vrhunac od približno 1,8 stepeni, dok drugi scenariji vode iznad dva stepena. Time se menja i osnovna logika klimatske politike. Umesto nastojanja da se svako prekoračenje 1,5 stepeni potpuno izbegne, svet ulazi u razdoblje u kojem će cilj biti da ono bude što manje i što kraće, a zatim da se temperatura ponovo spusti. Granica postavljena Pariskim sporazumom, dakle, ne nestaje, ali put do nje postaje znatno teži.",
  "Razlika između 1,5, 1,8 i dva stepena nije samo nekoliko decimala u klimatskim modelima. Sa svakom dodatnom desetinom stepena rastu rizici od ekstremnih vrućina, suša, požara i poplava, ubrzava se gubitak ekosistema i povećava mogućnost promena koje više neće biti moguće potpuno poništiti. IPCC upozorava da posebno osetljivi polarni, planinski i priobalni sistemi mogu pretrpeti trajne posledice čak i ako globalna temperatura kasnije počne da opada. Zato brzina i trajanje prekoračenja postaju gotovo jednako važni kao i sama granica.",
  "Povratak ispod 1,5 stepeni zahtevao bi mnogo više od dostizanja neto nulte emisije. Svet bi morao da uđe u period neto negativnih emisija, odnosno da iz atmosfere uklanja više ugljen-dioksida nego što ga ispušta. Takve mogućnosti postoje kroz prirodne ponore ugljenika i različite tehnologije njegovog uklanjanja, ali njihova primena u razmerama potrebnim za globalno snižavanje temperature još nije dokazana. Zbog toga naredne decenije neće biti samo trka za smanjenje novih emisija, već i pokušaj da se ograniči šteta već nastala njihovim nagomilavanjem.",
  "Novi izveštaj zato ne znači da je Pariski sporazum izgubio smisao niti da je borba protiv klimatskih promena izgubljena. Naprotiv, ako prekoračenje 1,5 stepeni više nije moguće izbeći, onda svaka sledeća desetina stepena postaje još važnija. Klimatska politika ulazi u novu fazu u kojoj pitanje više nije samo da li će svet preći 1,5 stepeni, već koliko će daleko otići, koliko dugo će tamo ostati i kakav će svet postojati kada temperatura ponovo počne da pada.",
];

export default function GlobalWarmingThresholdArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Svet će gotovo izvesno preći granicu od 1,5 stepeni"
      dateLabel="2. septembar 2026."
      deck="UNEP ocenjuje da se prekoračenje ključne granice globalnog zagrevanja više ne može realno izbeći. Pariski cilj ne nestaje, ali se menja pitanje: koliko ćemo tu granicu prekoračiti, koliko dugo ćemo iznad nje ostati i možemo li se vratiti ispod nje?"
      imageSrc="/news/global-warming-1-5-degree-threshold.jpg"
      imageAlt="Grafička ilustracija Zemlje koja prelazi simboličnu granicu globalnog zagrevanja"
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
