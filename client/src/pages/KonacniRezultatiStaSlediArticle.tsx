import ArticleTemplate from "@/components/ArticleTemplate";

export default function KonacniRezultatiStaSlediArticle() {
  return <ArticleTemplate
    path="/srbija/konacni-rezultati-izbora-sta-sada-sledi"
    sectionLabel="SRBIJA · INFORMATOR"
    title="Konačni rezultati izbora su proglašeni: Šta sada sledi i kada Srbija dobija novu vlast?"
    dateLabel="5. NOVEMBAR 2026."
    deck="RIK je potvrdio 140 mandata Studentske liste, 103 mandata liste „Aleksandar Vučić – Ujedinjena Srbija“ i sedam mandata manjinskih lista. Objašnjavamo korake do konstituisanja Skupštine i izbora nove Vlade."
    imageSrc="/news/serbian-flag.jpg"
    imageAlt="Akvarelna ilustracija zastave Srbije i Narodne skupštine."
    imageCredit="Ilustracija: Novi talas / AI generisana urednička ilustracija."
    imageBeforeDeck
    backHref="/srbija"
    backLabel="← Nazad na Srbiju"
    paragraphs={[
      "Republička izborna komisija je 5. novembra usvojila ukupne rezultate vanrednih parlamentarnih izbora održanih 25. oktobra, nakon ponovljenog glasanja na 53 biračka mesta 1. novembra. Studentska lista „Studenti pobeđuju“ osvojila je 2.354.417 glasova i 140 poslaničkih mandata, lista „Aleksandar Vučić – Ujedinjena Srbija“ 1.731.323 glasa i 103 mandata, dok sedam mandata pripada manjinskim listama. Studentska lista tako ima samostalnu većinu u parlamentu od 250 poslanika. Međutim, proglašenje rezultata ne znači da je nova Vlada već preuzela dužnost.",
      "Prvi korak je dodela poslaničkih mandata. Republička izborna komisija rešenjem dodeljuje mandate kandidatima po redosledu na izbornim listama u roku od deset dana od objavljivanja ukupnog izveštaja o rezultatima izbora. Potom sledi prva sednica Narodne skupštine, koju saziva predsednik parlamenta iz prethodnog saziva tako da bude održana najkasnije 30 dana od proglašenja konačnih rezultata. Novi saziv smatra se konstituisanim kada se potvrde mandati najmanje dve trećine narodnih poslanika. Ako je relevantni datum 5. novembar, okvirni krajnji datum prve sednice je 5. decembar, ali njen termin može biti raniji.",
      "Slede izbor predsednika Narodne skupštine i ostalih parlamentarnih organa, a zatim postupak izbora Vlade. Predsednik Republike, pošto sasluša mišljenje predstavnika izabranih izbornih lista, predlaže kandidata za predsednika Vlade. Mandatar pred poslanicima iznosi program i predlog sastava kabineta. Za izbor Vlade potrebna je većina od ukupnog broja narodnih poslanika, najmanje 126 glasova. Ustav predviđa rok od 90 dana od konstituisanja Skupštine za izbor nove Vlade. Ako Vlada u tom roku ne bude izabrana, Narodna skupština se raspušta i raspisuju se novi izbori.",
      "Šta to znači za građane? Do izbora nove Vlade, dosadašnja izvršna vlast nastavlja da obavlja poslove u granicama propisanim Ustavom i zakonom, uključujući ograničenja koja važe kada joj je mandat prestao. Škole, bolnice, sudovi i javne službe nastavljaju da rade. Izborna pobeda ne podrazumeva automatsku smenu svih rukovodilaca državnih institucija: za svaku promenu postoje posebne nadležnosti i procedure. Zato su naredni važni datumi objavljivanje rešenja o dodeli mandata, konstitutivna sednica Skupštine i glasanje o novoj Vladi. Izvori: RIK, RTS i Tanjug, 5. novembar 2026; Ustav Republike Srbije i Zakon o izboru narodnih poslanika."
    ]}
  />;
}
