import ArticleTemplate from "../components/ArticleTemplate";

export default function FinalElectionsArticle() {
  return (
    <ArticleTemplate
      path="/srbija/evo-rezultata-ponovljenih-izbora-pobeda-potvrdjena"
      sectionLabel="SRBIJA · IZBORI 2026"
      title="Evo rezultata ponovljenih izbora: Pobeda potvrđena!"
      dateLabel="1. novembar 2026."
      deck="Ponovljeno glasanje na 53 biračka mesta nije promenilo ishod vanrednih parlamentarnih izbora u Srbiji. Studentska lista, prema najnovijim preliminarnim rezultatima i projekcijama raspodele mandata, osvojila je oko 53 odsto glasova i 140 poslaničkih mesta, čime je zadržala samostalnu većinu u Narodnoj skupštini. Iako je ponovljeno glasanje donelo promenu u projekciji jednog mandata, izborni pobednik ostao je isti."
      imageSrc="/news/final-elections.jpg"
      imageAlt="Urednička ilustracija glasačke kutije i listića osvetljenih zlatnom svetlošću."
      imageCredit="Ilustracija: Novi talas / AI generisana urednička ilustracija."
      imageFirst
      imageHeightClass="h-auto"
      imageObjectFit="contain"
      backHref="/srbija"
      backLabel="← Srbija"
      paragraphs={[
        "Prema poslednjem dostupnom preliminarnom preseku Republičke izborne komisije, Studentska lista osvojila je 2.353.179 glasova, odnosno 53 odsto, dok je lista Ujedinjena Srbija dobila 1.730.646 glasova ili 38,98 odsto. Prednost Studentske liste iznosi više od 622.000 glasova. Ovi podaci obuhvataju 8.387 od ukupno 8.392 biračka mesta, pa se konačni rezultati još očekuju. Preostali glasovi ne dovode u pitanje samostalnu većinu Studentske liste prema dosadašnjim projekcijama.",
        "Ponovljeni izbori doneli su jednu važnu promenu u projekciji raspodele poslaničkih mesta. Prema projekciji posmatračke organizacije CRTA, Studentska lista sada ima 140 mandata, jedan manje nego u ranijoj projekciji, dok je lista Usame Zukorlića, Pokret za ujedinjenje, projektovana za jedan mandat. Prema navodima CRTA, svega 12 glasova bilo je presudno za ovu promenu. Na većini obrađenih biračkih mesta na kojima je glasanje ponovljeno lista dosadašnje vlasti osvojila je više glasova od Studentske liste, ali to nije značajnije uticalo na ukupan rezultat.",
        "Ponovljeno glasanje pratile su i prijave izbornih nepravilnosti. CRTA je saopštila da je u Aleksincu zabeležila sumnju na pokušaj kupovine glasova u korist Zukorlićeve liste. Ove navode potrebno je ispitati, posebno imajući u vidu malu razliku koja je, prema projekcijama, odlučivala o poslednjem poslaničkom mandatu. Konačnu raspodelu mesta u Narodnoj skupštini utvrdiće Republička izborna komisija po završetku svih zakonom predviđenih postupaka.",
        "Pobeda Studentske liste tako je potvrđena i nakon ponovljenog glasanja. Sa projektovanih 140 od ukupno 250 poslaničkih mesta, nova parlamentarna većina ima mogućnost da samostalno formira vladu. Pred Srbijom sada stoji sledeće veliko pitanje: kako će izborna pobeda biti pretočena u promenu institucija, uspostavljanje odgovornosti i funkcionisanje države nakon političkog preokreta. Izbori su pokazali kome su građani dali poverenje. Na novoj većini je da pokaže kako će ga opravdati."
      ]}
    />
  );
}
