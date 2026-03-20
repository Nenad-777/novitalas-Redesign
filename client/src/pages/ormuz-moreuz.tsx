import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/ormuz-kriza.jpg";

const PARAGRAPHS = [
  "Evropske zemlje i Japan objavili su zajedničko saopštenje povodom situacije u Ormuskom moreuzu, jednom od ključnih pomorskih prolaza za globalno snabdevanje energentima.",
  "U saopštenju se naglašava značaj očuvanja slobode plovidbe i stabilnosti u regionu, uz poziv na smanjenje tenzija i izbegavanje poteza koji bi mogli da ugroze međunarodni transport nafte i gasa.",
  "Ormuskim moreuzom prolazi značajan deo svetskog izvoza nafte, zbog čega svaka nestabilnost u tom području ima direktne posledice po globalno tržište energenata.",
  "Zajednički istup dolazi u trenutku pojačanih tenzija na Bliskom istoku i rastuće zabrinutosti zbog mogućih poremećaja u pomorskim rutama.",
  "Evropske zemlje i Japan poručuju da je neophodno očuvati bezbednost pomorskih puteva i sprečiti eskalaciju koja bi mogla imati šire međunarodne posledice.",
];

export default function OrmuzMoreuz() {
  return (
    <ArticleTemplate
      path="/geopolitika/ormuz-moreuz"
      sectionLabel="Geopolitika"
      title="Evropske zemlje i Japan o bezbednosti Ormuskog moreuza"
      dateLabel="20. MART 2026."
      deck="Evropske zemlje i Japan objavili su zajedničko saopštenje o bezbednosti Ormuskog moreuza i zaštiti pomorskih ruta za snabdevanje energentima."
      imageSrc={IMAGE_SRC}
      imageAlt="Naftni tanker prolazi kroz uski Ormuski moreuz kao simbol globalne energetske napetosti"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
