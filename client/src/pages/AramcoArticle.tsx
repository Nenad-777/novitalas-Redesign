import ArticleTemplate from "@/components/ArticleTemplate";

export default function AramcoArticle() {
  return <ArticleTemplate
    path="/geopolitika/aramko-evakuise-sediste-rat-se-priblizava-srcu-svetske-naftne-industrije"
    sectionLabel="GEOPOLITIKA"
    title="Aramko evakuiše sedište: rat se približava srcu svetske naftne industrije"
    dateLabel="24. OKTOBAR 2026."
    deck="Saudijski naftni gigant naredio je zaposlenima da napuste centralu u Dahranu, nakon niza napada na energetsku i civilnu infrastrukturu. Cena nafte premašila je 115 dolara po barelu, dok sukobi na Bliskom istoku sve ozbiljnije ugrožavaju stabilnost globalnog energetskog tržišta."
    imageSrc="/news/aramco-dhahran-2026-10-23.png"
    imageAlt="Akvarelna urednička ilustracija saudijske naftne infrastrukture i cevovoda u pustinji."
    imageHeightClass="h-auto"
    imageObjectFit="contain"
    backHref="/geopolitika"
    backLabel="← Nazad na Geopolitiku"
    paragraphs={["Saudijska državna naftna kompanija Aramko naredila je evakuaciju zaposlenih iz svog sedišta u Dahranu, na istoku Saudijske Arabije. Prema Rojtersu, koji se poziva na šest izvora upoznatih sa situacijom, naređenje je izdato 22. oktobra. Agencija Frans pres prenela je da je deo zaposlenih upućen na rad od kuće. Kompanija nije zvanično saopštila razloge evakuacije.","Odluka je usledila nakon novih napada na saudijsku infrastrukturu. U napadu na međunarodni aerodrom Kralj Fahd u Damamu, 21. oktobra, prema dostupnim izveštajima, poginule su dve osobe, dok je osam povređeno. Sedište Aramka već je pretrpelo oštećenja tokom ranijeg napada, 13. oktobra. Dahran nije samo administrativni centar kompanije, već i jedno od strateški najvažnijih mesta za upravljanje saudijskom naftnom industrijom.","Evakuacija, međutim, ne znači da je proizvodnja nafte obustavljena. Za sada nema potvrde da je ova mera izazvala prekid proizvodnje ili izvoza. Ipak, tržišta sve ozbiljnije reaguju na mogućnost širenja sukoba. Cena sirove nafte tipa Brent dostigla je 23. oktobra tokom trgovanja 115,16 dolara po barelu, odražavajući rastuću zabrinutost zbog bezbednosti energetskih postrojenja i transportnih pravaca.","Za svetsku ekonomiju najveća opasnost nije samo eventualno oštećenje pojedinačnih postrojenja, već mogućnost dugotrajnog ugrožavanja proizvodnje i snabdevanja iz Persijskog zaliva. Sukobi povezani sa jemenskim Hutima, saudijskom bezbednošću i širim regionalnim tenzijama dodatno povećavaju neizvesnost. Ukoliko se napadi nastave, posledice bi mogle da se osete daleko izvan Bliskog istoka, kroz rast cena energenata, transporta i inflacije."]}
    imageBeforeDeck
  />;
}
