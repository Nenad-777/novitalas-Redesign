import ArticleTemplate from "@/components/ArticleTemplate";

export default function BecMoskvaArticle() {
  return <ArticleTemplate
    path={"/obavestajni-izvori/bec-proteruje-ruske-diplomate-moskva-najavljuje-odgovor"}
    sectionLabel={"OBAVEŠTAJNI IZVORI"}
    title={"Beč proteruje ruske diplomate, Moskva najavljuje odgovor"}
    dateLabel={"23. OKTOBAR 2026."}
    deck={"Austrija je četvorici ruskih diplomata naložila da napuste zemlju. Među njima je i predstavnik pri OEBS-u koji se bavio vojnom bezbednošću i kontrolom naoružanja."}
    imageSrc={"/news/bec-moskva-diplomate-2026-10-23.webp"}
    imageAlt={"Urednička ilustracija: dve prazne stolice, ravnopravno postavljene zastavice Austrije i Rusije i zatvorena fascikla na diplomatskom stolu."}
    imageHeightClass={"h-auto"}
    imageObjectFit={"contain"}
    imageCredit={"Ilustracija: Novi Talas"}
    backHref={"/obavestajni-izvori"}
    backLabel={"← Nazad na Obaveštajne izvore"}
    paragraphs={["Austrijsko ministarstvo spoljnih poslova saopštilo je 23. oktobra da je odluka doneta na osnovu nalaza bezbednosnih službi, zbog aktivnosti nespojivih sa diplomatskim statusom. Trojica diplomata radila su u ruskoj ambasadi, a četvrti u delegaciji pri OEBS-u.", "Neimenovani austrijski zvaničnik rekao je za Associated Press da je proterivanje povezano sa špijunažom. Ministarstvo nije objavilo detalje navodnih aktivnosti, a diplomatama je ostavljen rok da odu narednih dana.", "Moskva je najavila odgovor. Zamenik ruskog ministra spoljnih poslova Dmitrij Ljubinski izjavio je za TASS da je reakcija neizbežna.", "Beč, sedište brojnih međunarodnih organizacija, dugo je važio za važno obaveštajno središte. Najnovija odluka povećala je broj ruskih diplomata proteranih iz Austrije od 2020. na 18."]}
    imageBeforeDeck
  />;
}
