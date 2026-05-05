import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/romania-parliament-bucharest.jpg";

const PARAGRAPHS = [
  "Rumunija je ušla u novu političku krizu u trenutku kada Evropa ima najmanje prostora za još jednu pukotinu. Vlada premijera Ilieja Bolojana pala je posle izglasavanja nepoverenja u parlamentu, čime je srušena proevropska manjinska vlada koja je pokušavala da sprovede nepopularne fiskalne reforme i zadrži zemlju na putu evropske finansijske stabilizacije. Za rušenje vlade glasalo je 281 poslanika, znatno više od potrebne većine od 233 glasa.",
  "Na prvi pogled, ovo je unutrašnja rumunska drama: sukob oko štednje, deficita, javne potrošnje i raspodele političke odgovornosti. U stvarnosti, pad vlade u Bukureštu ima šire značenje. Rumunija je velika država na istočnom krilu NATO-a, sused Ukrajine, zemlja na Crnom moru i jedan od ključnih prostora preko kojih se meri politička izdržljivost evropskog poretka.",
  "Bolojanova vlada pala je nakon što je Socijaldemokratska partija, PSD, napustila široku proevropsku koaliciju i zatim zajedno sa krajnje desnom opozicijom, pre svega partijom AUR, podržala inicijativu za izglasavanje nepoverenja. To je trenutak koji se u evropskoj politici prepoznaje kao opasan: kada velika stranka proevropskog centra, pritisnuta padom popularnosti i cenom reformi, odluči da za rušenje vlade upotrebi glasove krajnje desnice.",
  "Koren krize leži u rumunskim javnim finansijama. Rumunija ima jedan od najtežih budžetskih problema u Evropskoj uniji, a Bolojan je pokušavao da sprovede mere štednje, smanji deficit i obezbedi pristup evropskim fondovima. Ali fiskalna disciplina, kada se sa papira preseli u opštine, javna preduzeća, plate i lokalne mreže moći, prestaje da bude samo ekonomska mera i postaje politički obračun.",
  "PSD je pokušao da se distancira od reformi koje su postajale sve nepopularnije. Stranka koja je do tada bila deo vladajuće koalicije počela je da se predstavlja kao zaštitnik građana od liberalne štednje, iako je i sama nosila deo odgovornosti za stanje javnih finansija. Istovremeno, krajnje desni AUR dobio je ono što takve partije najviše žele: dokaz da bez njih više nema stabilne parlamentarne matematike.",
  "Zato rumunska kriza ima evropski odjek. Ona pokazuje kako krajnja desnica više ne mora nužno da uđe u vladu da bi uticala na pravac države. Dovoljno je da postane sila bez koje se vlade ruše, premijeri smenjuju, reforme zaustavljaju, a proevropske koalicije počinju da pregovaraju pod pritiskom njenog rasta.",
  "Ekonomske posledice mogu biti brze. Kriza je već izazvala zabrinutost za stabilnost rumunske ekonomije, uključujući državni rejting, pristup evropskim fondovima i vrednost nacionalne valute. Rumunija se istovremeno suočava sa rokovima za smanjenje deficita i obezbeđivanje milijardi evra iz evropskih fondova za oporavak.",
  "Predsednik Nicușor Dan sada mora da započne konsultacije o formiranju nove vlade. Vanredni izbori za sada nisu najverovatniji scenario, jer bi mogli dodatno ojačati AUR. Bolojan ostaje privremeni premijer dok se ne izabere nova vlada, a moguće opcije uključuju novu proevropsku kombinaciju bez njega, tehnokratskog premijera ili produženi period pregovora.",
  "Ali čak i ako se nova vlada sastavi, problem neće nestati. Rumunija nije pala u krizu zbog jednog premijera ili jedne sednice parlamenta. Kriza je posledica dubljeg sudara: država mora da smanji deficit, političke partije ne žele da plate cenu štednje, građani su umorni od pada standarda, a krajnja desnica čeka svaki dokaz da je stari poredak iscrpljen.",
  "Za NATO, ovo je naročito važno. Rumunija ima strateški položaj na Crnom moru i nalazi se neposredno uz ratom zahvaćenu Ukrajinu. U trenutku kada se u Evropi raspravlja o američkom vojnom prisustvu, odbrambenim budžetima i sposobnosti kontinenta da preuzme veći deo sopstvene bezbednosti, nestabilnost u Bukureštu nije samo rumunska stvar.",
  "Evropski poredak se danas ne testira samo na liniji fronta u Ukrajini. Testira se i u parlamentima država koje treba da ostanu politički stabilne dok rat traje. Testira se u budžetima, reformama, koalicijama, poverenju birača i sposobnosti centra da podnese cenu odgovornosti.",
  "Rumunija je danas pokazala koliko je evropski centar ranjiv kada se fiskalna štednja, rat u Ukrajini i rast krajnje desnice nađu u istoj političkoj jednačini. Ako nova vlada ne bude brzo formirana i ako reforme ostanu zarobljene u partijskom nadmudrivanju, Bukurešt bi mogao postati još jedan dokaz da se istočno krilo Evrope ne brani samo NATO bazama, već i sposobnošću političkih sistema da ne izgube ravnotežu iznutra.",
];

export default function PadVladeURumuniji() {
  return (
    <ArticleTemplate
      path="/geopolitika/pad-vlade-u-rumuniji-proevropski-zid-nato"
      sectionLabel="Geopolitika"
      title="Pad vlade u Rumuniji: proevropski zid puca na istočnom krilu NATO-a"
      dateLabel="5. MAJ 2026."
      deck="Vlada Ilieja Bolojana pala je posle izglasavanja nepoverenja, nakon što su socijaldemokrate napustile proevropsku koaliciju i udružile glasove sa krajnjom desnicom. Kriza u Bukureštu otvara pitanje političke stabilnosti Rumunije, evropskih fondova i čvrstine istočnog krila NATO-a."
      imageSrc={IMAGE_SRC}
      imageAlt="Palata parlamenta u Bukureštu"
      imageCredit="Palata parlamenta u Bukureštu. Foto: Wikimedia Commons"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
