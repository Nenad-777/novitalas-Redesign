import ArticleTemplate from "@/components/ArticleTemplate";

export default function PutinEvropaArticle() {
  return <ArticleTemplate
    path={"/geopolitika/putin-ponudio-obnovu-odnosa-sa-evropom"}
    sectionLabel={"GEOPOLITIKA"}
    title={"Putin ponudio obnovu odnosa sa Evropom: „Ne želimo rat“"}
    dateLabel={"30. oktobar 2026."}
    deck={"Ruski predsednik Vladimir Putin izjavio je da je Moskva spremna za obnovu odnosa sa evropskim državama, nakon neuobičajenog telefonskog razgovora sa liderima Finske i Norveške. Istovremeno je upozorio da bi eventualni sukob Rusije i Evrope mogao imati posledice iz kojih niko ne bi izašao kao pobednik."}
    imageSrc={"/news/putin-odnosi-evropa.jpg"}
    imageAlt={"Vladimir Putin govori na forumu Valdaj 27. oktobra 2022. godine."}
    imageHeightClass={"h-auto"}
    imageObjectFit={"contain"}
    backHref={"/geopolitika"}
    backLabel={"← Geopolitika"}
    imageCredit={<>Vladimir Putin na forumu Valdaj, oktobar 2022. Foto: Presidential Executive Office of Russia / <a href="https://www.kremlin.ru/" target="_blank" rel="noopener noreferrer">Kremlin.ru</a> / <a href="https://commons.wikimedia.org/wiki/File:Vladimir_Putin_(2022-10-27)_01.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Arhivska fotografija. Bez sadržinskih izmena.</>}
    imageBeforeDeck
    paragraphs={["Putin je 29. oktobra, obraćajući se novinarima nakon samita sa afričkim liderima, poručio da Rusija podržava svaki korak usmeren ka ponovnom uspostavljanju punih odnosa sa evropskim zemljama. Naglasio je da Moskva ne želi rat sa Evropom, ali da je spremna za eventualni sukob. Upozorio je da, ukoliko eskalacija ode predaleko, neće biti pobednika.", "Izjava je usledila dva dana nakon telefonskog razgovora koji su sa Putinom inicirali finski predsednik Aleksander Stub i norveški premijer Jonas Gar Støre. Razgovor je trajao oko 90 minuta i bio posvećen ratu u Ukrajini, mogućnostima njegovog okončanja i evropskoj bezbednosti. Dvojica nordijskih lidera prethodno su se konsultovala sa Ukrajinom, a naglasila su da ne nastupaju u ime čitave Evrope.", "Diplomatska inicijativa izazvala je različite reakcije među evropskim državama. Dok su Finska i Norveška ocenile da je direktan razgovor sa Moskvom neophodan za postizanje mira, pojedini evropski lideri upozorili su na opasnost od neusklađenih diplomatskih poteza. Za sada nema potvrde da će ovaj diplomatski kontakt dovesti do novih pregovora ili konkretnog dogovora o okončanju rata u Ukrajini.", "Putinove izjave otvaraju mogućnost intenziviranja diplomatskih kontakata između Moskve i evropskih prestonica, ali zasad nema potvrde o promeni ključnih pozicija u vezi sa ratom u Ukrajini. Rusija insistira na uvažavanju svojih bezbednosnih interesa, dok evropske države naglašavaju potrebu za pravednim i održivim mirom. Ostaje otvoreno pitanje da li će obnovljeni direktni razgovori prerasti u širi diplomatski proces."]}
    infoBox={{"title": "Izvori", "items": ["Reuters, 27–29. oktobar 2026; zvanična saopštenja predsedništva Finske i vlade Norveške."]}}
  />;
}
