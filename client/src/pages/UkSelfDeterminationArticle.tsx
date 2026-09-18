import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/da-li-se-menja-mapa-ujedinjenog-kraljevstva";

const PARAGRAPHS = [
  "U Kardifu su 14. septembra John Swinney iz Škotske nacionalne partije, Rhun ap Iorwerth iz Plaid Cymru, kao i Michelle O’Neill i Mary Lou McDonald iz Sinn Féina potpisali zajednički memorandum o pravu na samoopredeljenje. Važna nijansa je da su nastupali kao lideri političkih pokreta, a ne kao tri vlade koje zajedno donose pravno obavezujuću odluku o izlasku iz Ujedinjenog Kraljevstva.",
  "Politička poruka memoranduma usmerena je na pitanje ko treba da odlučuje o ustavnom statusu. Potpisnici navode da Westminster ne bi trebalo da sprečava građane njihovih nacija da demokratski odlučuju o tom pitanju. Memorandum zato nije plan za trenutni raspad UK, već koordinisana poruka Londonu o pravu na ustavnu promenu.",
  "Istog dana potpisan je i poseban Cardiff Agreement između vlada Velsa i Škotske, kojim se dve administracije obavezuju na bližu saradnju u ekonomiji, životnom standardu, klimatskoj politici, međunarodnim odnosima i vezama sa Evropskom unijom. Severna Irska nije deo tog bilateralnog sporazuma, što je važna razlika: jedan dokument govori o političkom pravu na samoopredeljenje, a drugi o praktičnoj saradnji dve vlade.",
  "Zato vest nije da se Ujedinjeno Kraljevstvo već raspada, već da su tri nacionalna pokreta koordinisano postavila isto pitanje: ko na kraju ima pravo da odluči o budućnosti njihovih nacija? Ono što je do sada bila odvojena rasprava u Škotskoj, Velsu i Severnoj Irskoj sada je dobilo zajedničku političku platformu.",
];

export default function UkSelfDeterminationArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA · EVROPA"
      title="Da li se menja mapa Ujedinjenog Kraljevstva? Tri nacionalna pokreta zajedno otvorila pitanje samoopredeljenja"
      dateLabel="18. SEPTEMBAR 2026."
      deck="Lideri SNP-a, Plaid Cymru i Sinn Féina potpisali su u Kardifu zajednički memorandum kojim traže da građani Škotske, Velsa i Severne Irske sami odlučuju o svojoj ustavnoj budućnosti. Dokument ne znači izlazak iz UK, ali pokazuje da se pitanje budućnosti Ujedinjenog Kraljevstva više ne vodi samo odvojeno u Edinburgu, Kardifu i Belfastu."
      imageSrc="/news/uk-self-determination-flags.jpg"
      imageAlt="Zastave Škotske i Velsa uz Ulster Banner, simbol koji se često koristi za predstavljanje Severne Irske, na jarbolima pod otvorenim nebom."
      imageCredit="Vizuelizacija: Novi talas / AI"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
