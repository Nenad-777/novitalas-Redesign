export interface SEOData {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

export const seoData: Record<string, SEOData> = {
  "/geopolitika/iran": {
    title:
      "Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran — Novi Talas",
    description:
      "SAD su rasporedile dodatne vazdušne i pomorske kapacitete na Bliskom istoku, dok predsednik Trump još nije doneo konačnu odluku. Potencijalna eskalacija u zoni Ormuskog moreuza.",
    ogTitle:
      "Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran",
    ogDescription:
      "SAD su rasporedile dodatne vazdušne i pomorske kapacitete na Bliskom istoku, dok predsednik Trump još nije doneo konačnu odluku.",
    ogUrl: "https://novitalas.org/geopolitika/iran",
    ogImage: "https://novitalas.org/carrier.jpg",
    twitterTitle:
      "Vašington u fazi odluke: američka vojska spremna za mogući udar na Iran",
    twitterDescription:
      "SAD su rasporedile dodatne vazdušne i pomorske kapacitete na Bliskom istoku, dok predsednik Trump još nije doneo konačnu odluku.",
    twitterImage: "https://novitalas.org/carrier.jpg",
  },

  "/geopolitika/nova-bezbednosna-arhitektura": {
    title:
      "Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći? — Novi Talas",
    description:
      "Kako Evropa odgovara na nove bezbednosne izazove i da li se formira kontinent sposoban za odlučniju odbrambenu politiku.",
    ogTitle:
      "Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?",
    ogDescription:
      "Kako Evropa odgovara na nove bezbednosne izazove i da li se formira kontinent sposoban za odlučniju odbrambenu politiku.",
    ogUrl: "https://novitalas.org/geopolitika/nova-bezbednosna-arhitektura",
    ogImage: "https://novitalas.org/geopolitika-ukrajina.jpg",
    twitterTitle:
      "Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?",
    twitterDescription:
      "Kako Evropa odgovara na nove bezbednosne izazove i da li se formira kontinent sposoban za odlučniju odbrambenu politiku.",
    twitterImage: "https://novitalas.org/geopolitika-ukrajina.jpg",
  },

  "/geopolitika/ukrajina-cetiri-godine-rata": {
    title:
      "Četiri godine rata u Ukrajini: sankcije jačaju, evropsko jedinstvo slabi — Novi Talas",
    description:
      "Analiza stanja posle četiri godine rata u Ukrajini, sa akcentom na ekonomskim sankcijama i koheziji evropskih saveznika.",
    ogTitle:
      "Četiri godine rata u Ukrajini: sankcije jačaju, evropsko jedinstvo slabi",
    ogDescription:
      "Analiza stanja posle četiri godine rata u Ukrajini, sa akcentom na ekonomskim sankcijama i koheziji evropskih saveznika.",
    ogUrl: "https://novitalas.org/geopolitika/ukrajina-cetiri-godine-rata",
    ogImage: "https://novitalas.org/geopolitika-ukrajina.jpg",
    twitterTitle:
      "Četiri godine rata u Ukrajini: sankcije jačaju, evropsko jedinstvo slabi",
    twitterDescription:
      "Analiza stanja posle četiri godine rata u Ukrajini, sa akcentom na ekonomskim sankcijama i koheziji evropskih saveznika.",
    twitterImage: "https://novitalas.org/geopolitika-ukrajina.jpg",
  },

  "/geopolitika/iran-protesti-2026": {
    title:
      "IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba — Novi Talas",
    description:
      "Novi talas nemira na iranskim univerzitetima. BBC je potvrdio autentičnost snimaka nasilnih sukoba studenata sa bezbednosnim snagama.",
    ogTitle:
      "IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba",
    ogDescription:
      "Novi talas nemira na iranskim univerzitetima. BBC je potvrdio autentičnost snimaka nasilnih sukoba studenata sa bezbednosnim snagama.",
    ogUrl: "https://novitalas.org/geopolitika/iran-protesti-2026",
    ogImage: "https://novitalas.org/tehran-riots.jpg",
    twitterTitle:
      "IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba",
    twitterDescription:
      "Novi talas nemira na iranskim univerzitetima. BBC je potvrdio autentičnost snimaka nasilnih sukoba.",
    twitterImage: "https://novitalas.org/tehran-riots.jpg",
  },

  "/geopolitika/sukobi-izrael-iran-2026": {
    title:
      "Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti — Novi Talas",
    description:
      "Eskalacija između Izraela i Irana 2026. uvodi region u novu fazu otvorenih vojnih sukoba i diplomatske nestabilnosti.",
    ogTitle:
      "Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti",
    ogDescription:
      "Eskalacija između Izraela i Irana 2026. uvodi region u novu fazu otvorenih vojnih sukoba i diplomatske nestabilnosti.",
    ogUrl: "https://novitalas.org/geopolitika/sukobi-izrael-iran-2026",
    ogImage: "https://novitalas.org/f22-israel-iran-2026.jpg",
    twitterTitle:
      "Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti",
    twitterDescription:
      "Eskalacija između Izraela i Irana 2026. uvodi region u novu fazu otvorenih vojnih sukoba i diplomatske nestabilnosti.",
    twitterImage: "https://novitalas.org/f22-israel-iran-2026.jpg",
  },

  "/geopolitika/ormuz": {
    title:
      "Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom — Novi Talas",
    description:
      "Ormuski moreuz, kroz koji prolazi petina svetske trgovine naftom, zatvoren — sa trenutnim posledicama po globalna energetska tržišta.",
    ogTitle: "Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom",
    ogDescription:
      "Ormuski moreuz, kroz koji prolazi petina svetske trgovine naftom, zatvoren — sa trenutnim posledicama po globalna energetska tržišta.",
    ogUrl: "https://novitalas.org/geopolitika/ormuz",
    ogImage: "https://novitalas.org/ormuz.jpg",
    twitterTitle: "Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom",
    twitterDescription:
      "Ormuski moreuz, kroz koji prolazi petina svetske trgovine naftom, zatvoren — sa trenutnim posledicama po globalna energetska tržišta.",
    twitterImage: "https://novitalas.org/ormuz.jpg",
  },

  "/geopolitika/francuska-odbrana-ormuza": {
    title:
      "Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza — Novi Talas",
    description:
      "Francuski predsednik Makron predlaže formiranje odbrambene pomorske misije za zaštitu slobodne plovidbe kroz Ormuski moreuz.",
    ogTitle: "Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza",
    ogDescription:
      "Francuski predsednik Makron predlaže formiranje odbrambene pomorske misije za zaštitu slobodne plovidbe kroz Ormuski moreuz.",
    ogUrl: "https://novitalas.org/geopolitika/francuska-odbrana-ormuza",
    ogImage: "https://novitalas.org/hormuz-strait-tankers.jpg",
    twitterTitle: "Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza",
    twitterDescription:
      "Francuski predsednik Makron predlaže formiranje odbrambene pomorske misije za zaštitu slobodne plovidbe kroz Ormuski moreuz.",
    twitterImage: "https://novitalas.org/hormuz-strait-tankers.jpg",
  },

  "/geopolitika/sad-specijalna-operacija-iran-uranijum": {
    title:
      "SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma — Novi Talas",
    description:
      "Američki bezbednosni krugovi razmatraju ograničenu vojnu operaciju za kontrolu iranskih zaliha visoko obogaćenog uranijuma.",
    ogTitle:
      "SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma",
    ogDescription:
      "Američki bezbednosni krugovi razmatraju ograničenu vojnu operaciju za kontrolu iranskih zaliha visoko obogaćenog uranijuma.",
    ogUrl:
      "https://novitalas.org/geopolitika/sad-specijalna-operacija-iran-uranijum",
    ogImage: "https://novitalas.org/us-special-forces-desert.jpg",
    twitterTitle:
      "SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma",
    twitterDescription:
      "Američki bezbednosni krugovi razmatraju ograničenu vojnu operaciju za kontrolu iranskih zaliha visoko obogaćenog uranijuma.",
    twitterImage: "https://novitalas.org/us-special-forces-desert.jpg",
  },

  "/geopolitika/velike-sile-i-kriza-u-iranu": {
    title:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga — Novi Talas",
    description:
      "Između podrške Teheranu i izbegavanja velikog rata. Rusija i Kina razvile su bliske odnose sa Iranom, ali njihove reakcije na aktuelnu krizu pokazuju znatno oprezniji pristup.",
    ogTitle:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    ogDescription: "Između podrške Teheranu i izbegavanja velikog rata.",
    ogUrl:
      "https://novitalas.org/geopolitika/velike-sile-i-kriza-u-iranu",
    ogImage: "https://novitalas.org/og/velike-sile-i-kriza-u-iranu.jpg",
    twitterTitle:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    twitterDescription: "Između podrške Teheranu i izbegavanja velikog rata.",
    twitterImage: "https://novitalas.org/og/velike-sile-i-kriza-u-iranu.jpg",
  },

  "/obavestajni-izvori/kina-spy-brodovi": {
    title:
      "Kina prati američke snage na Bliskom istoku uz pomoć AI i špijunskih brodova — Novi Talas",
    description:
      "Nova analiza zapadnih bezbednosnih službi otkriva kineske nadzorne operacije u regionu Bliskog istoka.",
    ogTitle:
      "Kina prati američke snage na Bliskom istoku uz pomoć AI i špijunskih brodova",
    ogDescription:
      "Nova analiza zapadnih bezbednosnih službi otkriva kineske nadzorne operacije u regionu Bliskog istoka.",
    ogUrl: "https://novitalas.org/obavestajni-izvori/kina-spy-brodovi",
    ogImage:
      "https://novitalas.org/images/obavestajni-izvori/kina-spy-ship.jpg",
    twitterTitle:
      "Kina prati američke snage na Bliskom istoku uz pomoć AI i špijunskih brodova",
    twitterDescription:
      "Nova analiza zapadnih bezbednosnih službi otkriva kineske nadzorne operacije u regionu Bliskog istoka.",
    twitterImage:
      "https://novitalas.org/images/obavestajni-izvori/kina-spy-ship.jpg",
  },

  "/obavestajni-izvori/rat-senki": {
    title:
      "Rat senki: povratak obaveštajnih službi u središte geopolitike — Novi Talas",
    description:
      "Analiza globalnog povratka tajnih službi na poziciju ključnog instrumenta geopolitike u novom multipolarnom svetu.",
    ogTitle:
      "Rat senki: povratak obaveštajnih službi u središte geopolitike",
    ogDescription:
      "Analiza globalnog povratka tajnih službi na poziciju ključnog instrumenta geopolitike u novom multipolarnom svetu.",
    ogUrl: "https://novitalas.org/obavestajni-izvori/rat-senki",
    ogImage: "https://novitalas.org/carrier.jpg",
    twitterTitle:
      "Rat senki: povratak obaveštajnih službi u središte geopolitike",
    twitterDescription:
      "Analiza globalnog povratka tajnih službi na poziciju ključnog instrumenta geopolitike u novom multipolarnom svetu.",
    twitterImage: "https://novitalas.org/carrier.jpg",
  },

  "/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu": {
    title: "Tiho gašenje srpskih univerziteta na Kosovu — Novi Talas",
    description:
      "Hiljade studenata i profesora mogle bi ostati bez univerziteta dok administrativne mere postepeno onemogućavaju rad srpskih fakulteta u Kosovskoj Mitrovici.",
    ogTitle: "Tiho gašenje srpskih univerziteta na Kosovu",
    ogDescription:
      "Hiljade studenata i profesora mogle bi ostati bez univerziteta dok administrativne mere postepeno onemogućavaju rad srpskih fakulteta u Kosovskoj Mitrovici.",
    ogUrl:
      "https://novitalas.org/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu",
    ogImage: "https://novitalas.org/news/kosovo-amfiteatar.jpg",
    twitterTitle: "Tiho gašenje srpskih univerziteta na Kosovu",
    twitterDescription:
      "Hiljade studenata i profesora mogle bi ostati bez univerziteta dok administrativne mere postepeno onemogućavaju rad srpskih fakulteta u Kosovskoj Mitrovici.",
    twitterImage: "https://novitalas.org/news/kosovo-amfiteatar.jpg",
  },

  "/srbija/selo-ne-prasta-poraz-vest": {
    title: "Selo ne prašta poraz — Novi Talas",
    description:
      "Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta bez dogovora sa državom, što otvara ozbiljno političko pitanje u zemlji čiju stabilnost vekovima nosi selo.",
    ogTitle: "Selo ne prašta poraz",
    ogDescription:
      "Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta bez dogovora sa državom.",
    ogUrl: "https://novitalas.org/srbija/selo-ne-prasta-poraz-vest",
    ogImage: "https://novitalas.org/traktori-beograd.jpg",
    twitterTitle: "Selo ne prašta poraz",
    twitterDescription:
      "Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta bez dogovora sa državom.",
    twitterImage: "https://novitalas.org/traktori-beograd.jpg",
  },

  "/srbija/mars-za-pravosudje": {
    title:
      "Marš za pravosuđe: kada institucije postanu centralno političko pitanje — Novi Talas",
    description:
      "Analiza nedelje: protest koji je naterao institucije da postanu centralno pitanje srpske politike i šta to znači za budućnost demokratije.",
    ogTitle:
      "Marš za pravosuđe: kada institucije postanu centralno političko pitanje",
    ogDescription:
      "Protest koji je naterao institucije da postanu centralno pitanje srpske politike.",
    ogUrl: "https://novitalas.org/srbija/mars-za-pravosudje",
    ogImage: "https://novitalas.org/analiza-nedelje-mars.jpg",
    twitterTitle:
      "Marš za pravosuđe: kada institucije postanu centralno političko pitanje",
    twitterDescription:
      "Protest koji je naterao institucije da postanu centralno pitanje srpske politike.",
    twitterImage: "https://novitalas.org/analiza-nedelje-mars.jpg",
  },

  "/srbija/podeljeno-drustvo": {
    title:
      "Podeljeno društvo: Srbija u ogledalu globalne polarizacije — Novi Talas",
    description:
      "Politička podela u savremenim društvima više nije izuzetak, već pravilo. Srbija u kontekstu svetske polarizacije.",
    ogTitle: "Podeljeno društvo: Srbija u ogledalu globalne polarizacije",
    ogDescription:
      "Politička podela u savremenim društvima više nije izuzetak, već pravilo. Srbija u kontekstu svetske polarizacije.",
    ogUrl: "https://novitalas.org/srbija/podeljeno-drustvo",
    ogImage: "https://novitalas.org/images/srbija-polarizacija.jpg",
    twitterTitle: "Podeljeno društvo: Srbija u ogledalu globalne polarizacije",
    twitterDescription:
      "Politička podela u savremenim društvima više nije izuzetak, već pravilo. Srbija u kontekstu svetske polarizacije.",
    twitterImage: "https://novitalas.org/images/srbija-polarizacija.jpg",
  },

  "/nasa-planeta/alma-skriveno-jezgro": {
    title:
      "Najveća ALMA mapa ikad: otkriveno skriveno jezgro Mlečnog puta — Novi Talas",
    description:
      "Radio-teleskop ALMA napravio je najtačniju mapu Centralne molekularne zone Mlečnog puta, otkrivajući njegovo skriveno jezgro.",
    ogTitle:
      "Najveća ALMA mapa ikad: otkriveno skriveno jezgro Mlečnog puta",
    ogDescription:
      "Radio-teleskop ALMA napravio je najtačniju mapu Centralne molekularne zone Mlečnog puta, otkrivajući njegovo skriveno jezgro.",
    ogUrl: "https://novitalas.org/nasa-planeta/alma-skriveno-jezgro",
    ogImage: "https://novitalas.org/alma-mlecni-put.jpg",
    twitterTitle:
      "Najveća ALMA mapa ikad: otkriveno skriveno jezgro Mlečnog puta",
    twitterDescription:
      "Radio-teleskop ALMA napravio je najtačniju mapu Centralne molekularne zone Mlečnog puta, otkrivajući njegovo skriveno jezgro.",
    twitterImage: "https://novitalas.org/alma-mlecni-put.jpg",
  },

  "/nasa-planeta/naucnici-poceli-da-usmeravaju-snove": {
    title:
      "Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije — Novi Talas",
    description:
      "Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći mozak da tokom sna kreativnije rešava probleme.",
    ogTitle:
      "Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije",
    ogDescription:
      "Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći mozak da tokom sna kreativnije rešava probleme.",
    ogUrl:
      "https://novitalas.org/nasa-planeta/naucnici-poceli-da-usmeravaju-snove",
    ogImage: "https://novitalas.org/og/snovi-usmeravanje-snova.jpg",
    twitterTitle:
      "Naučnici počeli da usmeravaju snove: novo otkriće savremene psihologije",
    twitterDescription:
      "Novo istraživanje pokazuje da je moguće uticati na sadržaj snova i podstaći mozak da tokom sna kreativnije rešava probleme.",
    twitterImage: "https://novitalas.org/og/snovi-usmeravanje-snova.jpg",
  },

  "/nasa-planeta/kubrick": {
    title:
      "Stenli Kjubrik i tajna filma koji ne stari — Novi Talas",
    description:
      "Dok se svet ponovo okreće ceremoniji Oskara, jedan reditelj i dalje stoji izvan logike nagrada i podseća nas da film može biti umetnost mišljenja.",
    ogTitle:
      "Stenli Kjubrik i tajna filma koji ne stari",
    ogDescription:
      "Dok se svet ponovo okreće ceremoniji Oskara, jedan reditelj i dalje stoji izvan logike nagrada i podseća nas da film može biti umetnost mišljenja.",
    ogUrl: "https://novitalas.org/nasa-planeta/kubrick",
    ogImage: "https://novitalas.org/kubrick.jpg",
    twitterTitle:
      "Stenli Kjubrik i tajna filma koji ne stari",
    twitterDescription:
      "Dok se svet ponovo okreće ceremoniji Oskara, jedan reditelj i dalje stoji izvan logike nagrada i podseća nas da film može biti umetnost mišljenja.",
    twitterImage: "https://novitalas.org/kubrick.jpg",
  },

  "/nasa-planeta/ai-vest-svest": {
    title:
      "Da li je veštačka inteligencija već svesna? — Novi Talas",
    description:
      "Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti.",
    ogTitle:
      "Da li je veštačka inteligencija već svesna?",
    ogDescription:
      "Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti.",
    ogUrl: "https://novitalas.org/nasa-planeta/ai-vest-svest",
    ogImage: "https://novitalas.org/ai-supercomputer-data-center.jpg",
    twitterTitle:
      "Da li je veštačka inteligencija već svesna?",
    twitterDescription:
      "Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti.",
    twitterImage: "https://novitalas.org/ai-supercomputer-data-center.jpg",
  },

  "/geopolitika/rezerve-nafte": {
    title:
      "IEA pokreće najveće oslobađanje naftnih rezervi u istoriji — Novi Talas",
    description:
      "Države članice Međunarodne agencije za energiju puštaju 400 miliona barela nafte iz strateških rezervi kako bi ublažile globalni energetski šok izazvan krizom u Persijskom zalivu.",
    ogTitle:
      "IEA pokreće najveće oslobađanje naftnih rezervi u istoriji",
    ogDescription:
      "Države članice Međunarodne agencije za energiju puštaju 400 miliona barela nafte iz strateških rezervi kako bi ublažile globalni energetski šok.",
    ogUrl: "https://novitalas.org/geopolitika/rezerve-nafte",
    ogImage: "https://novitalas.org/rezerve-nafte.jpg",
    twitterTitle:
      "IEA pokreće najveće oslobađanje naftnih rezervi u istoriji",
    twitterDescription:
      "Države članice Međunarodne agencije za energiju puštaju 400 miliona barela nafte iz strateških rezervi kako bi ublažile globalni energetski šok.",
    twitterImage: "https://novitalas.org/rezerve-nafte.jpg",
  },

  "/geopolitika/biennale-rusija": {
    title:
      "EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije — Novi Talas",
    description:
      "Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju.",
    ogTitle:
      "EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije",
    ogDescription:
      "Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju.",
    ogUrl: "https://novitalas.org/geopolitika/biennale-rusija",
    ogImage: "https://novitalas.org/news/biennale-venice.jpg",
    twitterTitle:
      "EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije",
    twitterDescription:
      "Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju.",
    twitterImage: "https://novitalas.org/news/biennale-venice.jpg",
  },

  "/geopolitika/refugees-iran-un": {
    title:
      "Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica — Novi Talas",
    description:
      "Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.",
    ogTitle:
      "Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica",
    ogDescription:
      "Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.",
    ogUrl: "https://novitalas.org/geopolitika/refugees-iran-un",
    ogImage: "https://novitalas.org/refugees-iran-un.jpg",
    twitterTitle:
      "Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica",
    twitterDescription:
      "Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.",
    twitterImage: "https://novitalas.org/refugees-iran-un.jpg",
  },

  "/obavestajni-izvori/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira":
    {
      title:
        "CIA pokrenula kampanju za regrutovanje kineskih vojnih oficira — Novi Talas",
      description:
        "Američka CIA pokrenula javnu kampanju usmerenu ka potencijalnim izvorima unutar kineske vojske, objavivši video na kineskom jeziku koji cilja nezadovoljne oficire.",
      ogTitle:
        "CIA pokrenula kampanju za regrutovanje kineskih vojnih oficira",
      ogDescription:
        "Američka CIA pokrenula javnu kampanju usmerenu ka potencijalnim izvorima unutar kineske vojske, objavivši video na kineskom jeziku koji cilja nezadovoljne oficire.",
      ogUrl:
        "https://novitalas.org/obavestajni-izvori/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira",
      ogImage: "https://novitalas.org/news/cia-china.jpg",
      twitterTitle:
        "CIA pokrenula kampanju za regrutovanje kineskih vojnih oficira",
      twitterDescription:
        "Američka CIA pokrenula javnu kampanju usmerenu ka potencijalnim izvorima unutar kineske vojske, objavivši video na kineskom jeziku koji cilja nezadovoljne oficire.",
      twitterImage: "https://novitalas.org/news/cia-china.jpg",
    },
};
