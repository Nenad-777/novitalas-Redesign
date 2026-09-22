import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/afd-menja-politicku-mapu-nemacke-ruski-gas-se-vraca-u-igru";

const PARAGRAPHS = [
  "Izbori u Meklenburgu-Zapadnoj Pomeraniji doneli su rezultat koji prevazilazi granice jedne nemačke pokrajine. Alternativa za Nemačku osvojila je 38,2 odsto glasova i 32 od 71 mandata, dok je SPD završio drugi sa 35,5 odsto. CDU kancelara Fridriha Merca dobio je 4,9 odsto i ostao ispod izbornog praga. Za stranku koja je decenijama bila jedan od stubova nemačkog političkog sistema, to je istorijski udar.",
  "Rezultat je još upečatljiviji kada se uporedi sa izborima 2021. AfD je tada u ovoj pokrajini imao 16,7 odsto glasova. Pet godina kasnije više nego je udvostručio podršku i postao najjača politička snaga u pokrajini. Istovremeno, CDU je prvi put ostao bez predstavnika u jednom nemačkom pokrajinskom parlamentu. Merc je rezultat svoje stranke opisao kao katastrofu.",
  "Ali izborna noć dobila je dodatnu geopolitičku dimenziju zbog događaja koji joj je prethodio samo dva dana. Reuters je 18. septembra, pozivajući se na dve osobe upoznate sa planovima, objavio da lideri AfD-a i Kiril Dmitrijev, ekonomski izaslanik ruskog predsednika Vladimira Putina, pripremaju mogući sastanak tokom 2027. godine na kojem bi se razgovaralo o obnovi isporuka ruskog gasa Nemačkoj.",
  "Prema tim navodima, u razgovorima bi mogli da učestvuju kopredsednici AfD-a Alis Vajdel i Tino Krupala, a jedna od tema bila bi mogućnost ponovnog pokretanja gasnih tokova preko sistema Nord Stream. Plan je uslovljen širim mirovnim okvirom između Rusije i Ukrajine. AfD i predstavnik Dmitrijeva nisu komentarisali Reutersove navode. Zato je važno napraviti jasnu razliku: nema dogovora o povratku ruskog gasa, niti AfD kao opoziciona stranka može samostalno da vodi nemačku energetsku politiku.",
  "Ipak, politički značaj same ideje nije mali. Nemačka je pre ruske invazije na Ukrajinu veliki deo svojih energetskih potreba oslanjala na relativno jeftin ruski gas. Prekid tog modela posle 2022. postao je deo mnogo šire transformacije nemačke privrede i bezbednosne politike. Danas, kada su troškovi energije ponovo važna politička tema, pitanje odnosa sa Rusijom vraća se u nemačku debatu na način koji je pre nekoliko godina izgledao gotovo nezamislivo.",
  "Dan posle izbora stigla je i reakcija Moskve. Portparol Kremlja Dmitrij Peskov povezao je rast podrške AfD-u sa ekonomskim posledicama nemačkog odustajanja od jeftinog ruskog gasa i prelaska na skuplje izvore energije. To je rusko političko tumačenje izbornog rezultata, a ne dokaz da je energetika glavni uzrok uspona AfD-a. Razlozi za rast te stranke znatno su širi i uključuju nezadovoljstvo tradicionalnim partijama, migracije, troškove života, ekonomsku stagnaciju i duboke političke razlike između istoka i zapada zemlje.",
  "Upravo zato je spoj ova dva događaja važan. AfD jača u trenutku kada otvoreno zagovara drugačiji odnos prema Moskvi i ukidanje ograničenja na ruske energente. Rusija, sa druge strane, ima jasan ekonomski i politički interes da ponovo otvori evropsko tržište za svoj gas. Te dve činjenice ne znače da će se Nord Stream vratiti u funkciju. One znače da se pitanje koje je posle 2022. bilo gotovo politički zatvoreno ponovo pojavljuje kao tema nemačke unutrašnje politike.",
  "To dodatno komplikuje položaj nemačkog političkog centra. Tradicionalne stranke i dalje odbacuju koaliciju sa AfD-om, ali svaki novi rast te stranke povećava cenu njenog isključivanja iz vlasti: za formiranje većina potrebne su sve šire i politički heterogenije koalicije. AfD tako može da utiče na dnevni red i bez učešća u saveznoj vladi — pritiskom na druge partije da odgovaraju na teme koje njegovi birači smatraju najvažnijim.",
  "Nord Stream je zato više od gasovoda. Godinama je bio simbol nemačko-ruskog ekonomskog partnerstva, a posle ruske invazije i eksplozija na cevovodima postao je simbol strateške zavisnosti od Moskve. Njegov povratak u politički govor pokazuje koliko se brzo menja evropski prostor mogućeg: ono što je juče izgledalo kao završena rasprava danas ponovo postaje predmet političkog nadmetanja.",
  "Pobeda AfD-a u Meklenburgu-Zapadnoj Pomeraniji sama po sebi ne menja nemačku spoljnu politiku. Ali pokazuje da se menja odnos snaga unutar zemlje koja je ključna za politički i ekonomski pravac Evropske unije. Istovremeno, najava mogućih razgovora sa Moskvom pokazuje da AfD pokušava da svoj rast pretvori i u spoljnopolitičku alternativu sadašnjoj vladi.",
  "To još nije povratak Nord Streama. Ali jeste povratak Nord Streama kao političke ideje."
];

export default function AfdGermanyRussianGasArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA · NEMAČKA"
      title="AfD menja političku mapu Nemačke — a ruski gas se vraća u igru"
      dateLabel="21. SEPTEMBAR 2026."
      authorLabel=""
      deck="AfD je sa 38,2 odsto glasova pobedio u Meklenburgu-Zapadnoj Pomeraniji, dok je CDU prvi put ostao bez mesta u jednom nemačkom pokrajinskom parlamentu. Samo dva dana ranije pojavila se vest o pripremama za razgovore AfD-a i ruskog izaslanika o mogućem povratku ruskog gasa."
      imageSrc="/news/afd-weidel.jpg"
      imageAlt="Alis Vajdel uz nemačku zastavu i obeležja AfD-a."
      imageCredit="Ilustracija: Novi Talas / AI"
      imageFirst={true}
      imageHeightClass="h-auto"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
