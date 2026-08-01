import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/zasto-je-desetine-hiljada-ljudi-krenulo-ka-spaniji-kriza-u-seuti-otvara-nova-pitanja-o-granicama-evrope";

const PARAGRAPHS = [
  "Španija je postavila novu plutajuću barijeru na morskoj granici kod Seute, pokušavajući da spreči novi talas ilegalnih prelazaka iz Maroka. Ova mera usledila je nakon nekoliko dramatičnih dana tokom kojih je između 50.000 i 60.000 ljudi pokušalo da uđe u ovaj mali španski grad na severu Afrike, izazvavši jednu od najvećih migrantskih kriza u novijoj istoriji Evropske unije. Prema podacima španskih vlasti, najmanje 67 ljudi izgubilo je život, uglavnom utapanjem ili u metežu na graničnim prelazima.",
  "Da bi se razumele razmere događaja, potrebno je objasniti i zašto je upravo Seuta postala poprište ove krize.",
  "Seuta je mali španski grad na severnoj obali Afrike, potpuno okružen teritorijom Maroka. Iako se geografski nalazi na afričkom kontinentu, ona je sastavni deo Španije i predstavlja jednu od spoljašnjih granica Evropske unije. Zbog toga se decenijama smatra jednim od najvažnijih ulaza ka Evropi za migrante koji dolaze iz severne i podsaharske Afrike.",
  "Ovoga puta nije postojao jedan jedini uzrok masovnog pokreta ljudi. Španske vlasti tvrde da su krijumčarske mreže preko društvenih mreža širile glasine da će ulazak u Seutu omogućiti lakši nastavak puta ka evropskom kopnu. Istovremeno, deo migranata poverovao je da će nedavna odluka Vrhovnog suda Španije, koja ograničava mogućnost trenutnog vraćanja osoba koje u Seutu stignu morskim putem, povećati njihove šanse da ostanu na teritoriji Španije. Ta odluka često je pogrešno tumačena ili namerno predstavljana kao svojevrsna „otvorena kapija“ ka Evropi, iako ona to nije.",
  "Odgovor španskih vlasti usledio je gotovo odmah. Madrid je, u tesnoj saradnji sa marokanskim vlastima, pokrenuo jednu od najvećih operacija vraćanja migranata u svojoj novijoj istoriji. Prema zvaničnim podacima, više od 48.000 ljudi vraćeno je u Maroko ili se dobrovoljno vratilo nakon što je postalo jasno da im neće biti dozvoljen nastavak puta ka evropskom kopnu. Španska vlada istovremeno je naglasila da migrantima koji ostanu u Seuti neće biti omogućen slobodan prelazak na teritoriju kontinentalne Španije, čime je sprečeno da se migrantski talas proširi na ostatak Evropske unije.",
  "Pojedini političari u Evropi i Sjedinjenim Državama tvrdili su da je migrantski talas posledica španske politike regularizacije ilegalnih migranata ili čak namerne odluke Maroka da oslabi kontrolu granice. Međutim, za takve tvrdnje do sada nisu predstavljeni uverljivi dokazi. Španska vlada insistira da je krizu pre svega izazvala kombinacija ekonomskih prilika u regionu, dezinformacija koje su širile krijumčarske grupe i pogrešnog razumevanja pravnih promena.",
  "Posle noći bez novih većih pokušaja prelaska granice, španske vlasti započele su postavljanje plutajuće barijere duge oko 500 metara kod plaže Tarahal. Reč je o sistemu velikih povezanih plovaka usidrenih uz morsko dno, čija je namena da fizički oteža plivanje oko postojećih graničnih ograda, ali da pritom omogući nesmetano kretanje patrolnih čamaca. Istovremeno, policija i vojska ostale su u stanju pripravnosti, dok Madrid i Rabat nastavljaju koordinaciju radi sprečavanja novih masovnih pokušaja prelaska granice.",
  "Kriza u Seuti izazvala je burne reakcije širom Evrope. Više država članica Evropske unije zatražilo je hitne konsultacije o zaštiti spoljnih granica, dok su pojedine zemlje privremeno pooštrile kontrole prema Španiji. Lokalni događaj na svega nekoliko kvadratnih kilometara tako je prerastao u evropsko političko pitanje koje ponovo otvara raspravu o migracionoj politici, zaštiti spoljnih granica Unije i saradnji sa državama severne Afrike.",
  "Seuta je još jednom pokazala da se najveće evropske krize često ne rađaju u prestonicama, već na mestima gde se sudaraju siromaštvo, geografska blizina i nada u bolji život. Kada desetine hiljada ljudi u svega nekoliko dana krenu ka istoj granici, postaje jasno da nijedna ograda, ma koliko bila visoka ili plutala na moru, ne može sama rešiti problem čiji su uzroci mnogo dublji od same granice.",
];

export default function CeutaMigrationCrisisArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Zašto je desetine hiljada ljudi krenulo ka Španiji? Kriza u Seuti otvara nova pitanja o granicama Evrope"
      dateLabel="1. avgust 2026."
      deck="Posle najvećeg migrantskog talasa u novijoj istoriji Seute, Španija pooštrava kontrolu granice, dok Evropa ponovo otvara raspravu o zaštiti svojih spoljašnjih granica i migrantskoj politici."
      imageSrc="/news/ceuta-border-fence.jpg"
      imageAlt="Granična ograda koja razdvaja špansku enklavu Seutu od teritorije Maroka."
      imageCredit="Foto: Xemenendura / Wikimedia Commons (CC BY-SA 4.0)"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
