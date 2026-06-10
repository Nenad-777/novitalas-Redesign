import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera";
const IMAGE_SRC = "/news/usa-iran-crisis.jpg";

const PARAGRAPHS = [
  "Dovoljno je bilo nekoliko dana da obaranje američkog vojnog helikoptera preraste u novu krizu između Vašingtona i Teherana. Niz događaja koji je započeo u blizini Ormuskog moreuza doveo je do američkih vazdušnih udara na ciljeve povezane sa iranskim vojnim strukturama, nakon čega je usledio iranski odgovor usmeren prema američkim bazama u regionu.",
  "Predsednik Donald Tramp optužio je Iran za odgovornost u incidentu i poručio da će Teheran platiti cenu za napad na američke snage. Ubrzo potom američka vojska izvela je operacije protiv više ciljeva za koje Vašington tvrdi da su povezani sa iranskim vojnim aktivnostima u Persijskom zalivu i oko Ormuskog moreuza.",
  "Iranski odgovor nije dugo čekao. Tokom narednih dana rakete i bespilotne letelice usmerene su prema američkim vojnim objektima u nekoliko država regiona, čime je otvorena nova faza sukoba koji je mesecima tinjao ispod površine diplomatskih saopštenja i povremenih pregovora.",
  "Na prvi pogled, reč je o još jednom u nizu incidenata koji već godinama obeležavaju odnose Sjedinjenih Država i Irana. Međutim, trenutna kriza dolazi u posebno osetljivom trenutku. Posle perioda relativnog zatišja, obe strane ponovo testiraju granice međusobnog odnosa, pri čemu nijedna ne želi da pokaže slabost, ali ni da preuzme rizik otvorenog rata.",
  "U središtu događaja nalazi se Ormuski moreuz, jedan od najvažnijih pomorskih prolaza na svetu. Kroz ovaj uski koridor prolazi značajan deo globalne trgovine energentima, zbog čega svaki ozbiljniji poremećaj u regionu odmah privlači pažnju svetskih tržišta, energetskih kompanija i bezbednosnih službi.",
  "Za američku administraciju ćutanje nakon obaranja helikoptera nije bilo opcija. Svaki izostanak odgovora mogao bi da bude protumačen kao znak slabosti, kako među saveznicima, tako i među protivnicima Sjedinjenih Država.",
  "Sa druge strane, iransko rukovodstvo ne može sebi lako da priušti utisak da je američke udare primilo bez odgovora. Upravo zato svaki američki potez gotovo automatski proizvodi pritisak za novu reakciju Teherana.",
  "Opasnost zbog toga ne proizlazi samo iz pojedinačnih napada, već iz logike događaja koja obe strane postepeno gura ka novim koracima. Istorija Bliskog istoka više puta je pokazala koliko brzo ograničeni sukobi mogu da prerastu u šire regionalne krize.",
  "Zbog toga se pažnja međunarodne zajednice sada ne usmerava samo na vojne operacije koje se odvijaju na terenu, već i na pitanje postoji li još prostor za diplomatiju pre nego što spirala eskalacije dobije sopstvenu dinamiku.",
  "Naredni dani mogli bi pokazati da li je reč o ograničenoj razmeni udara ili o početku nove faze sukoba između dve sile čije odluke već decenijama oblikuju političku i bezbednosnu sliku Bliskog istoka.",
];

export default function TrampPokrenioUdareNaIran() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Geopolitika"
      title="Tramp pokrenuo udare na Iran nakon obaranja američkog helikoptera"
      dateLabel="10. JUN 2026."
      deck="Obaranje američkog vojnog helikoptera u blizini Ormuskog moreuza pokrenulo je niz vojnih i diplomatskih poteza koji su za nekoliko dana prerasli u novu otvorenu krizu između Vašingtona i Teherana."
      imageSrc={IMAGE_SRC}
      imageAlt="Američki i iranski vojni sudar — kriza oko Ormuskog moreuza"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
