import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/srbija/izbori-25-oktobra-odihr-biracki-spisak-kontrola-kampanje";

export default function ODIHRInterimReport2026() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="SRBIJA · IZBORI"
      title="Izbori 25. oktobra: ODIHR upozorava na probleme sa biračkim spiskom i kontrolom kampanje"
      dateLabel="10. OKTOBAR 2026."
      deck="Međunarodni posmatrači ukazuju na otvorena pitanja o tačnosti biračkog spiska, korišćenju javnih sredstava i nadzoru medija. Prvi izveštaj Komisije za reviziju biračkog spiska očekuje se tek nakon izbora."
      imageSrc="/news/odihr-izbori-2026.webp"
      imageAlt="Ilustracija izbornog procesa u Srbiji: glasačka kutija sa listićima, birački spisak i zastava Srbije."
      imageCredit="Vizual: Novi Talas / AI ilustracija"
      imageFirst={true}
      imageHeightClass="h-auto"
      paragraphs={[
        "Kancelarija OEBS-a za demokratske institucije i ljudska prava (ODIHR) objavila je 9. oktobra privremeni izveštaj o posmatranju parlamentarnih izbora u Srbiji zakazanih za 25. oktobar. Posmatrači ukazuju na to da značajan deo ranijih preporuka nije sproveden i beleže zabrinutost sagovornika zbog biračkog spiska, pritisaka na učesnike izbornog procesa, korišćenja javnih resursa i kontrole kampanje.",
        "Posebnu pažnju privlači birački spisak, u kojem je približno 6,5 miliona upisanih birača. Prema izveštaju, sagovornici ODIHR-a ukazuju na sumnje u tačnost podataka, uključujući neuobičajeno veliki broj prijavljenih birača na pojedinim adresama. Komisija za reviziju jedinstvenog biračkog spiska treba da podnese prvi izveštaj do 28. oktobra — tri dana nakon glasanja.",
        "U delu posvećenom kampanji ODIHR prenosi primedbe izbornih učesnika i organizacija civilnog društva na korišćenje državnih resursa, uključujući odluku o jednokratnoj pomoći punoletnim građanima ukupne vrednosti od gotovo milijardu evra. Izveštaj navodi i da Regulatorno telo za elektronske medije (REM) prati 11 televizija, dok predlog da se nadzor proširi na Informer TV nije dobio potrebnu većinu. Otvorena ostaju pitanja nadzora digitalne kampanje i ravnopravnih uslova medijskog predstavljanja.",
        "ODIHR konstatuje da Republička izborna komisija sprovodi izborne aktivnosti u predviđenim rokovima, ali istovremeno beleži sporove i prijave nepravilnosti koje se odnose na širi izborni ambijent. Reč je o privremenom, a ne konačnom zaključku posmatračke misije: ocena celokupnog procesa uslediće nakon glasanja. Do tada ostaje činjenica da će građani izaći na izbore pre nego što komisija za reviziju biračkog spiska predstavi svoj prvi izveštaj.",
      ]}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
