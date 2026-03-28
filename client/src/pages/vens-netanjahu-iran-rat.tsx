import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/vance-netanyahu.jpg";

const PARAGRAPHS = [
  "Potpredsednik Sjedinjenih Američkih Država JD Vens uputio je oštre primedbe izraelskom premijeru Benjaminu Netanjahuu tokom razgovora o toku rata sa Iranom, navode američki zvaničnici.",
  "Prema dostupnim informacijama, Vens je ocenio da su ranije procene izraelskog rukovodstva o brzini i ishodu sukoba bile previše optimistične i da se situacija razvija drugačije od očekivanog.",
  "U razgovoru je istaknuto da su pretpostavke o mogućem brzom slabljenju iranskog režima i kratkom trajanju sukoba bile pogrešne, što dodatno komplikuje američku strategiju u regionu.",
  "Ovakav razvoj događaja ukazuje na rastuće razlike u pristupu unutar savezništva SAD i Izraela, u trenutku kada rat ulazi u produženu i neizvesnu fazu.",
  "Američki zvaničnici upozoravaju da produžavanje sukoba i neispunjena očekivanja povećavaju pritisak na političke i vojne odluke u Vašingtonu.",
];

export default function VensNetanjahuIranRat() {
  return (
    <ArticleTemplate
      path="/geopolitika/vens-netanjahu-iran-rat"
      sectionLabel="Geopolitika"
      title="Vens kritikovao Netanjahua zbog procena rata sa Iranom"
      dateLabel="28. MART 2026."
      deck="JD Vens kritikovao Benjamina Netanjahua zbog procena rata sa Iranom, ukazujući na rastuće razlike unutar savezništva."
      imageSrc={IMAGE_SRC}
      imageAlt="JD Vens i Benjamin Netanjahu tokom sastanka u Jerusalimu"
      imageCredit="Foto: Nathan Howard / The New York Times / AP"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
