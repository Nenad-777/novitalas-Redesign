import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/od-primirja-do-novih-udara-kako-je-ponovo-eskalirao-sukob-sad-i-irana";
const IMAGE_SRC = "/news/hormuz-chokepoint.jpg";

const PARAGRAPHS = [
  "Nekoliko dana pošto su obnovljeni diplomatski kontakti između Vašingtona i Teherana podigli očekivanja da bi krhko primirje moglo prerasti u stabilniji aranžman, bezbednosna slika Persijskog zaliva ponovo se naglo pogoršala. Razgovori su ostavili utisak da obe strane traže način da zaustave spiralu odmazde, ali nisu otklonili sporove o regionalnom vojnom prisustvu, sankcijama i uslovima pomorske bezbednosti.",
  "Prvi znak da politički kanal nije dovoljan stigao je sa mora. Novi incidenti sa trgovačkim brodovima i upozorenja posadama u prilazima Ormuskom moreuzu podigli su cenu osiguranja i usporili kretanje tankera. U prostoru u kome se civilni promet, ratni brodovi i obalska odbrana nalaze na malim udaljenostima, i nejasan signal lako prerasta u bezbednosni događaj sa globalnim posledicama.",
  "Vašington je zatim obnovio vojne udare na ciljeve koje opisuje kao povezane sa iranskim kapacitetima za nadzor, bespilotne sisteme i ugrožavanje pomorskih ruta. Američka poruka bila je da operacije imaju ograničen cilj, zaštitu snaga i slobode plovidbe, a ne otvaranje novog fronta. Ipak, svaki udar u ovakvom sukobu istovremeno je i vojna akcija i politički signal, na koji Teheran teško može da odgovori ćutanjem.",
  "Iran je uzvratio upozorenjima da bezbednost plovidbe ne može biti odvojena od njegove bezbednosti i od prisustva stranih snaga u Zalivu. Zvaničnici u Teheranu ostavili su otvorenom mogućnost pojačane kontrole pomorskih prilaza, dok su regionalne države pozvale na uzdržanost i očuvanje komercijalnih koridora. Njihov interes je neposredan: zemlje Zaliva zavise od predvidivog izvoza energije, a susedi Irana od toga da lokalni sukob ne pređe njihove granice.",
  "Reakcija tržišta pokazala je koliko je ta veza neposredna. Dovoljna je bila mogućnost poremećaja da se ponovo otvore pitanja o raspoloživim zalihama, alternativnim rutama i ceni transporta. Za velike uvoznike energije u Aziji, ali i za evropske privrede koje već računaju na stabilnije energetske tokove, Ormus nije udaljena geografska tačka, već prolaz kroz koji se meri cena svakog novog rizika.",
  "Moreuz je zato više od uskog morskog pojasa između Irana i Omana. Kroz njega prolazi značajan deo svetskog pomorskog izvoza nafte i tečnog prirodnog gasa iz Persijskog zaliva. Njegova širina, blizina obale i ograničen broj bezbednih plovnih koridora daju svakoj strani sposobnost da izazove zastoj, čak i bez formalne blokade. Upravo ta kombinacija geografije i energetike čini ga jednim od najosetljivijih mesta savremene geopolitike.",
  {
    type: "heading" as const,
    text: "Energetska bezbednost kao granica eskalacije",
  },
  "Ni Vašington ni Teheran trenutno nemaju jasan interes za puni regionalni rat. Sjedinjene Države nastoje da održe kredibilitet odvraćanja i zaštite saveznike, ali znaju da bi širok sukob iscrpeo vojne kapacitete i uvukao u krizu države koje pokušavaju da ostanu po strani. Iran, sa svoje strane, želi da pokaže da na pritisak može odgovoriti, ali bi otvoreni rat ugrozio njegovu infrastrukturu, ekonomiju i unutrašnju stabilnost.",
  "To ne znači da je deeskalacija izvesna. Naprotiv, ograničeni ciljevi obe strane stvaraju opasnu zonu u kojoj svaka želi da demonstrira odlučnost bez prelaska praga rata. U takvom rasporedu pogrešna procena komandanta na moru, incident sa tankerom ili napad čije posledice nisu odmah jasne mogu pokrenuti lanac odgovora koji diplomatski kanali više ne bi mogli lako da zaustave.",
  "Energetska bezbednost zato postaje središnje pitanje, a ne sporedna ekonomska posledica krize. Ormuski moreuz je jedan od glavnih svetskih naftnih uskih grla: prekid saobraćaja ne bi pogodio samo proizvođače iz Zaliva, već bi brzo promenio računicu rafinerija, brodarskih kompanija, osiguravača i vlada koje upravljaju strateškim rezervama. Alternative postoje, ali nijedna ne može brzo i u potpunosti zameniti tokove koji prolaze kroz moreuz.",
  "Za Evropu bi produžena nestabilnost značila skuplju energiju, veće troškove prevoza i dodatni pritisak na industriju i potrošačke cene. Globalna trgovina bi osetila posledice kroz premije osiguranja, promenjene rute i kašnjenja isporuka, dok bi rast cene nafte dodatno otežao rad centralnih banaka. Najveći rizik nije samo zatvaranje prolaza, već trajna neizvesnost, stanje u kome tržišta počinju da uračunavaju krizu kao novu normalnost.",
  "Zato se budućnost ovog sukoba neće odlučivati samo u pregovaračkim salama ili na vojnim kartama. Ona će se meriti sposobnošću obe strane da kontrolišu događaje u uskom pomorskom prostoru u kome lokalni incident gotovo automatski dobija međunarodnu cenu. Ormuski moreuz ostaje mesto na kome se susreću regionalna bezbednost, globalna energija i granice moći velikih država.",
];

export default function OdPrimirjaDoNovihUdaraSadIran() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA"
      title="Od primirja do novih udara: kako je ponovo eskalirao sukob SAD i Irana"
      dateLabel="16. JUL 2026."
      deck="Nekoliko dana nakon novih pregovora i nagoveštaja smirivanja tenzija, Bliski istok ponovo se našao na ivici ozbiljne eskalacije, dok Ormuski moreuz postaje jedna od ključnih tačaka globalne nestabilnosti."
      imageSrc={IMAGE_SRC}
      imageAlt="Ormuski moreuz, strateški pomorski prolaz između Irana i Omana"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
