/*
 * Naša planeta  -  Kina odobrila prvi moždani implantat za komercijalnu upotrebu
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/china-brain.jpg";

const PARAGRAPHS = [
  "Kineske vlasti odobrile su prvi moždani implantat namenjen komercijalnoj upotrebi, čime je napravljen značajan korak u razvoju tehnologije koja omogućava direktnu komunikaciju između ljudskog mozga i računara.",
  "Reč je o takozvanom brain-computer interface (BCI) sistemu, uređaju koji se ugrađuje u mozak i omogućava da se moždani signali pretvaraju u digitalne komande. Takva tehnologija može omogućiti pacijentima sa paralizom ili teškim neurološkim poremećajima da upravljaju računarima, robotima ili drugim uređajima samo pomoću misli.",
  "Očekuje se da će implantat u početku biti korišćen u medicinske svrhe, pre svega u rehabilitaciji pacijenata sa povredama kičmene moždine ili neurodegenerativnim bolestima.",
  "Razvoj ove tehnologije deo je globalne trke u oblasti neurotehnologije, u kojoj učestvuju vodeće naučne institucije i tehnološke kompanije širom sveta. U Sjedinjenim Državama, na primer, kompanija Neuralink razvija slične implantate koji takođe imaju za cilj povezivanje mozga i računara.",
  "Stručnjaci smatraju da bi ovakvi sistemi u budućnosti mogli značajno promeniti medicinu, ali i otvoriti nova pitanja o etici, bezbednosti i zaštiti podataka koji potiču direktno iz ljudskog mozga.",
];

export default function KinaMozganiImplantat() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/kina-mozgani-implantat"
      sectionLabel="Naša planeta"
      title="Kina odobrila prvi moždani implantat za komercijalnu upotrebu"
      dateLabel="14. MART 2026."
      deck="Kineske vlasti odobrile su prvi moždani implantat namenjen komercijalnoj upotrebi, čime je napravljen značajan korak u razvoju tehnologije koja omogućava direktnu komunikaciju između ljudskog mozga i računara."
      imageSrc={IMAGE_SRC}
      imageAlt="Kina — prvi moždani implantat za komercijalnu upotrebu"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
