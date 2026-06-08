import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/luksuzni-raj-ili-gubitak-obale";
const IMAGE_SRC = "/news/albania-trump-shore.jpg";

const PARAGRAPHS = [
  "Projekat luksuznog turističkog kompleksa podržan od strane kompanije povezane sa porodicom Tramp izazvao je oštre podele između zagovornika ekonomskog razvoja i ekoloških aktivista.",
  "Plan za izgradnju velikog luksuznog turističkog kompleksa na albanskoj obali ponovo je pokrenuo raspravu o budućnosti razvoja zemlje. Investitori tvrde da će projekat doneti nova radna mesta, privući strane goste i dodatno pozicionirati Albaniju kao jednu od najbrže rastućih turističkih destinacija na Mediteranu.",
  "Istovremeno, ekološke organizacije i deo lokalnog stanovništva upozoravaju da bi izgradnja mogla trajno promeniti izgled jednog od najvrednijih delova albanske obale. Protesti protiv projekta već su održani, dok kritičari tvrde da kratkoročna ekonomska korist ne sme biti važnija od zaštite prirodnih resursa i javnog interesa.",
  "Spor oko ovog projekta prevazilazi pitanje jednog turističkog kompleksa. On otvara mnogo širu dilemu sa kojom se suočavaju gotovo sve zemlje Balkana: kako privući velike investicije bez ugrožavanja prirodnog nasleđa koje upravo te investicije žele da iskoriste kao svoju najveću prednost.",
  "Albanski slučaj pokazuje da će razvoj turizma u narednim godinama sve češće biti predmet političkih i društvenih rasprava. Između želje za ekonomskim rastom i potrebe za očuvanjem prostora nalazi se ravnoteža koju nijedna država regiona još nije u potpunosti pronašla.",
];

export default function LuksuzniRajIliGubitakObale() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Luksuzni raj ili gubitak obale?"
      dateLabel="8. JUN 2026."
      deck="Veliki turistički projekat na albanskoj obali ponovo otvara pitanje kako uskladiti privlačenje investicija sa zaštitom prostora i javnog interesa."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
