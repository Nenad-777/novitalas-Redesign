import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/obavestajni-izvori/direktor-cia-u-moskvi";

const PARAGRAPHS = [
  "Direktor američke Centralne obaveštajne agencije Džon Retklif boravio je 25. avgusta u Moskvi, gde je razgovarao sa predstavnicima ruskih obaveštajnih službi. Poseta nije bila unapred najavljena, a Kremlj je danas potvrdio da su razgovori održani. Portparol ruskog predsednika Dmitrij Peskov rekao je da se Retklif nije sastao sa Vladimirom Putinom, ali da je ruski predsednik obavešten o rezultatima sastanaka. Američka strana nije objavila pojedinosti o razgovorima.",
  "Dolazak direktora CIA u Moskvu izuzetan je već zbog nivoa neposrednog kontakta između američkog i ruskog bezbednosnog aparata. To je prva poznata poseta šefa CIA ruskoj prestonici od 2021. godine, kada je tadašnji direktor Vilijam Berns razgovarao sa ruskim zvaničnicima nekoliko meseci pre početka rata u Ukrajini. Retklifova poseta događa se u sasvim drugačijim okolnostima: rat traje više od četiri godine, odnosi Moskve i Vašingtona ostaju duboko poremećeni, a obe države raspolažu najvećim nuklearnim arsenalima na svetu.",
  "Posebnu pažnju izazivaju izveštaji da je Vašington u vreme Retklifovog boravka u Moskvi tražio od Kijeva da privremeno ne izvodi određene napade na ruskoj teritoriji. Prema navodima AP-a, visoki ukrajinski zvaničnik potvrdio je da je takav zahtev postojao. Ta okolnost pokazuje da je bezbednost posete bila tretirana na najvišem nivou, ali sama po sebi ne otkriva sadržaj razgovora niti dokazuje postojanje šireg političkog dogovora između Moskve i Vašingtona.",
  "Upravo je zato značaj ove posete pre svega u činjenici da se direktan obaveštajni kanal između dve nuklearne sile koristi i usred njihove najveće konfrontacije od završetka Hladnog rata. Obaveštajne službe mogu održavati kontakte i onda kada su politički odnosi gotovo zamrznuti — radi razmene upozorenja, sprečavanja pogrešnih procena ili razgovora o pitanjima koja vlade ne žele da vode pred kamerama. Za sada nema osnova da se Retklifov dolazak predstavlja kao najava sporazuma ili preokreta u ratu. Ali činjenica da je direktor CIA otišao u Moskvu, da su razgovori održani i da je Putin o njihovom ishodu odmah obavešten dovoljno je neuobičajena da pokaže da, iza javne konfrontacije Vašingtona i Moskve, kanali neposrednog razgovora nisu zatvoreni.",
];

export default function CIADirectorMoscowArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Obaveštajni izvori"
      title="Direktor CIA u Moskvi"
      dateLabel="26. avgust 2026."
      deck="Džon Retklif boravio je u nenajavljenoj poseti Moskvi i razgovarao sa predstavnicima ruskih obaveštajnih službi. Vladimir Putin nije učestvovao u sastancima, ali je, prema Kremlju, obavešten o njihovim rezultatima. Sadržaj razgovora nije objavljen, ali sama činjenica da je šef CIA stigao u rusku prestonicu predstavlja redak direktan kontakt dve sile u trenutku duboke konfrontacije zbog rata u Ukrajini."
      imageSrc="/news/john-ratcliffe-cia.jpg"
      imageAlt="Direktor CIA Džon Retklif tokom sastanka u Situacionoj sobi Bele kuće."
      imageCredit="Foto: The White House / Wikimedia Commons / Public Domain"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
