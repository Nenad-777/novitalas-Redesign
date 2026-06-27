/*
 * DESIGN: "Diplomatska Klasika"  -  Geopolitika index (listing)
 * Purpose: show the newest Geopolitika articles without changing global layout.
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

type Article = {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const ARTICLES: Article[] = [
  {
    href: "/geopolitika/krim-u-vanrednoj-situaciji-nakon-masovnog-napada-dronovima",
    title:
      "Krim u vanrednoj situaciji nakon masovnog napada dronovima: rat ulazi u novu fazu",
    description:
      "Prema pisanju međunarodnih medija, ruske vlasti koje upravljaju Krimom proglasile su vanrednu situaciju nakon jednog od najvećih talasa ukrajinskih napada dronovima od početka rata.",
    imageSrc: "/news/crimea-drone-attacks.jpg",
    imageAlt:
      "Minimalist editorial illustration of Crimea following large-scale drone attacks",
  },
  {
    href: "/geopolitika/protesti-u-pragu-zbog-finansiranja-javnog-servisa",
    title:
      "Hiljade građana protestovale u Pragu zbog reforme finansiranja javnog servisa",
    description:
      "Plan češke vlade da promeni model finansiranja javnih medija izazvao je proteste u Pragu, otvarajući širu evropsku raspravu o nezavisnosti javnih servisa u digitalnom dobu.",
    imageSrc: "/news/prague-public-media-protest.jpg",
    imageAlt:
      "Editorial illustration about public broadcasting, media independence and protests in Prague",
  },
  {
    href: "/geopolitika/g7-nova-geopoliticka-strategija",
    title:
      "G7 pokreće novu geopolitičku strategiju: manje zavisnosti od Kine, veći pritisak na Rusiju i podrška sporazumu sa Iranom",
    description:
      "Lideri najrazvijenijih zapadnih ekonomija poslali su sa samita G7 poruku da ulaze u novu fazu geopolitičkog nadmetanja — kroz smanjenje zavisnosti od kineskih sirovina, nastavak podrške Ukrajini i podršku sporazumu između SAD i Irana.",
    imageSrc: "/news/g7-summit-evian-2026.jpg",
    imageAlt: "Leaders of G7 countries during the 2026 summit in Évian, France",
  },
  {
    href: "/geopolitika/g7-podrzala-sporazum-sad-iran",
    title:
      "G7 podržala sporazum SAD i Irana: otvara li se put ka trajnoj stabilizaciji Bliskog istoka?",
    description:
      "Lideri G7 podržali su sporazum Vašingtona i Teherana kojim je zaustavljena najnovija eskalacija u Persijskom zalivu, ali ostaje neizvesno da li dogovor može prerasti u trajniju stabilizaciju Bliskog istoka.",
    imageSrc: "/news/g7-supports-us-iran-deal.jpg",
    imageAlt:
      "Minimalist editorial illustration of G7 support for a US-Iran agreement, with a stylized Middle East map and summit table",
  },
  {
    href: "/geopolitika/london-kampanja-protiv-dezinformacija",
    title: "London pokreće kampanju od 7 miliona funti protiv dezinformacija",
    description:
      "Gradske vlasti tvrde da koordinisane kampanje na društvenim mrežama narušavaju ugled britanske prestonice, zbog čega je pokrenut međunarodni program za promociju Londona i suzbijanje dezinformacija.",
    imageSrc: "/news/london-disinformation-campaign.jpg",
    imageAlt:
      "London skyline with digital message overlays symbolizing disinformation campaigns",
  },
  {
    href: "/geopolitika/madjarska-ogranicenje-mandata-orban",
    title: "Kraj jedne ere: Mađarska zatvara vrata Orbanovom povratku",
    description:
      "Mađarski parlament usvojio je ustavni amandman kojim se mandat premijera ograničava na osam godina, otvarajući pitanje da li se završava politička epoha Viktora Orbana.",
    imageSrc: "/news/orban-era-end-hungary.jpg",
    imageAlt:
      "Senka Viktora Orbana ispred mađarskog parlamenta, simbol kraja jedne političke ere",
  },
  {
    href: "/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan",
    title:
      "SAD i Iran postigli okvirni mirovni dogovor: Ormuski moreuz ponovo se otvara za svetsku trgovinu",
    description:
      "Donald Tramp je objavio da je dogovor sa Teheranom završen i naredio ukidanje američke pomorske blokade. Ipak, ključna pitanja ostaju otvorena.",
    imageSrc: "/news/ormuski-moreuz-nasa.jpg",
    imageAlt:
      "Satelitski prikaz Ormuskog moreuza između Irana, Omana i Ujedinjenih Arapskih Emirata",
  },
  {
    href: "/geopolitika/putin-govori-o-kraju-rata-ukrajina",
    title:
      "Tramp poručio Putinu da je spreman da pomogne u okončanju rata u Ukrajini",
    description:
      "Posle najava o smirivanju krize sa Iranom, američki predsednik pokušava da otvori i ukrajinski front diplomatije.",
    imageSrc: "/news/tramp-zelenski-oval-office.jpg",
    imageAlt:
      "Donald Tramp i Volodimir Zelenski tokom sastanka u Ovalnoj kancelariji Bele kuće",
  },
  {
    href: "/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci",
    title: "Mundijal na granici: fudbal, vize i politika moći",
    description:
      "Dok FIFA slavi najveći fudbalski spektakl na svetu, američka vizna politika, ratne tenzije i pitanje ko ima pravo da učestvuje na Svetskom prvenstvu već su deo turnira.",
    imageSrc: "/news/world-cup-visas.jpg",
    imageAlt: "Mundijal, vize i geopolitika na granici",
  },
  {
    href: "/geopolitika/eu-migration-rules-2026",
    title: "Nova migraciona pravila Evropske unije ulaze u primenu",
    description:
      "Novi evropski pakt menja pravila za azil, granice i deportacije, uz zajedničke procedure i novi sistem solidarnosti među državama članicama.",
    imageSrc: "/news/eu-flags.jpg",
    imageAlt: "Zastave Evropske unije",
  },
  {
    href: "/geopolitika/talibani-otvorili-vatru-na-protest-za-prava-zena",
    title: "Talibani otvorili vatru na protest za prava žena",
    description:
      "Novi protest za prava žena u Avganistanu završen je nasilnom intervencijom talibanskih snaga, dok međunarodna pažnja prema položaju žena slabi.",
    imageSrc: "/news/afganistan-woman.jpg",
    imageAlt: "Protest za prava žena u Avganistanu",
  },
  {
    href: "/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera",
    title: "Tramp pokrenuo udare na Iran nakon obaranja američkog helikoptera",
    description:
      "Obaranje američkog vojnog helikoptera u blizini Ormuskog moreuza pokrenulo je novu otvorenu krizu između Vašingtona i Teherana.",
    imageSrc: "/news/usa-iran-crisis.jpg",
    imageAlt: "Američki i iranski vojni sudar — kriza oko Ormuskog moreuza",
  },
  {
    href: "/geopolitika/moskva-upozorava-putina-ratna-potrosnja-postaje-neodrziva",
    title: "Moskva upozorava Putina: ratna potrošnja postaje neodrživa",
    description:
      "Ruski ekonomski vrh sve otvorenije upozorava da ratna potrošnja pritiska finansijsku stabilnost zemlje i sužava prostor za dugoročno planiranje.",
    imageSrc: "/news/moscow-economy-war.jpg",
    imageAlt: "Moskva, ruska ekonomija i ratna potrošnja",
  },
  {
    href: "/geopolitika/posle-dronova-dolaze-roboti-novo-poglavlje-rata-u-ukrajini",
    title: "Posle dronova dolaze roboti: novo poglavlje rata u Ukrajini",
    description:
      "Rat u Ukrajini sve brže ulazi u fazu robotizovanih sistema, autonomnih platformi i nove tehnološke trke na frontu.",
    imageSrc: "/news/robots-ukraine.jpg",
    imageAlt: "Roboti i dronovi kao novo poglavlje rata u Ukrajini",
  },
  {
    href: "/geopolitika/peking-izmedju-trumpa-i-putina",
    title: "Peking između Trumpa i Putina: Kina u središtu nove velike igre",
    description:
      "Putinova poseta Pekingu, samo nekoliko dana posle Trumpovog susreta sa Sijem, pokazuje kako Kina postaje centralno mesto nove velike igre između Moskve i Vašingtona.",
    imageSrc: "/news/putin-xi.jpg",
    imageAlt: "Vladimir Putin i Si Đinping tokom sastanka u Pekingu",
  },
  {
    href: "/geopolitika/brics-iran-nafta-pukotine-multipolarnog-sveta",
    title:
      "BRICS pred velikim testom: Iran, nafta i pukotine multipolarnog sveta",
    description:
      "Sastanak ministara BRICS-a u Indiji pokazuje kako rat oko Irana, kriza nafte i Ormuski moreuz otkrivaju podele unutar multipolarnog sveta.",
    imageSrc: "/news/brics-breaking.jpg",
    imageAlt: "Sastanak BRICS-a i geopolitička kriza oko Irana i nafte",
  },
  {
    href: "/geopolitika/ormuz-deli-nato-vasington-trazi-baze",
    title:
      "Ormuz deli NATO: Vašington traži baze, Evropa meri cenu savezništva",
    description:
      "Kriza u Ormuskom moreuzu više nije samo sukob SAD i Irana. Ona sada testira unutrašnju čvrstinu NATO-a, spremnost evropskih saveznika da podrže američke operacije i sposobnost Zapada da zaštiti ključne energetske prolaze.",
    imageSrc: "/news/ormuz-nato-problems.jpg",
    imageAlt: "Ormuski moreuz i NATO saveznici, ilustracija geopolitičke krize",
  },
  {
    href: "/geopolitika/americke-sluzbe-iran-moze-da-izdrzi-blokadu-ormuza",
    title:
      "Američke službe upozoravaju: Iran može da izdrži blokadu Ormuza mesecima",
    description:
      "Procena američke obaveštajne zajednice dovodi u pitanje tvrdnje Bele kuće da je Teheran blizu sloma. Iran i dalje raspolaže značajnim raketnim i dronovskim kapacitetima.",
    imageSrc: "/news/washington-cia.jpg",
    imageAlt: "Ilustracija američke obaveštajne procene i Ormuskog moreuza",
  },
  {
    href: "/geopolitika/amerika-povlaci-vojnike-iz-nemacke-nato-nepoverenje",
    title:
      "Amerika povlači vojnike iz Nemačke: NATO ulazi u novu eru nepoverenja",
    description:
      "Povlačenje oko 5.000 američkih vojnika iz Nemačke pokazuje da evropska bezbednost ulazi u period u kome se američka zaštita više ne podrazumeva kao ranije.",
    imageSrc: "/news/us-german-soldiers-germany.jpg",
    imageAlt:
      "Američki i nemački vojnici tokom zajedničke vežbe u Oberlausitzu, Nemačka",
  },
  {
    href: "/geopolitika/svet-na-dan-1-maj-2026",
    title:
      "SVET NA DAN, 1. maj: Ormuz, Ukrajina i Tajvan oblikuju novu mapu pritiska",
    description:
      "Prvi maj 2026. donosi sliku sveta u kome se energetska kriza, rat u Ukrajini i američko-kinesko nadmetanje sve brže spajaju u jednu geopolitičku celinu.",
    imageSrc: "/news/world-1.may.jpg",
    imageAlt: "Geopolitička mapa pritiska: Ormuz, Ukrajina i Tajvan",
  },
  {
    href: "/geopolitika/pomeranje-tezista-orban-evropa",
    title: "POMERANJE TEŽIŠTA: Šta poraz Orbana znači za Evropu i svet",
    description:
      "Analiza političkih i geopolitičkih posledica poraza Viktora Orbana u Mađarskoj i promene ravnoteže unutar Evropske unije.",
    imageSrc: "/news/magyar.jpg",
    imageAlt:
      "Viktor Orban — poraz na izborima u Mađarskoj i geopolitičke posledice",
  },
  {
    href: "/geopolitika/nato-pod-pritiskom-od-saveza-ravnopravnih-ka-sistemu-uslovljene-lojalnosti",
    title:
      "NATO pod pritiskom: od saveza ravnopravnih ka sistemu uslovljene lojalnosti",
    description:
      "U Vašingtonu se sve otvorenije razmatra diferenciranje saveznika prema političkoj i vojnoj usklađenosti sa američkim prioritetima.",
    imageSrc: "/news/Nato-new-relations.jpg",
    imageAlt: "NATO savez pod pritiskom novih uslovljavanja",
  },
  {
    href: "/geopolitika/novac-kao-uslov-trenutak-u-kojem-se-odlucuje-pravac-srbije",
    title: "Novac kao uslov: trenutak u kojem se odlučuje pravac Srbije",
    description:
      "Evropska unija prvi put jasno povezuje finansijsku podršku sa političkim odlukama, otvarajući pitanje daljeg kursa Srbije.",
    imageSrc: "/news/eu-uslov.jpg",
    imageAlt: "Evropska unija i finansijski uslovi za političke odluke Srbije",
  },
  {
    href: "/geopolitika/bugarska-na-raskrsnici-rumen-radev-vodi-prema-izlaznim-anketama",
    title: "Bugarska na raskrsnici: Rumen Radev vodi prema izlaznim anketama",
    description:
      "Rezultati ukazuju na moguće pomeranje spoljnopolitičkog pravca zemlje u trenutku pojačanih tenzija između Zapada i Rusije.",
    imageSrc: "/news/bulgaria-elections.jpg",
    imageAlt: "Predsednički izbori u Bugarskoj",
  },
  {
    href: "/geopolitika/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost",
    title: "Iran zatvara Ormuski moreuz: svet ulazi u energetsku neizvesnost",
    description:
      "Kontrola nad ključnim pomorskim pravcem postaje instrument političkog pritiska u trenutku globalnih tenzija.",
    imageSrc: "/news/closed-again.jpg",
    imageAlt: "Ormuski moreuz pod pojačanom vojnom kontrolom",
  },
  {
    href: "/geopolitika/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja",
    title:
      "Iran otvorio Ormuski moreuz za komercijalni saobraćaj tokom primirja",
    description:
      "Teheran je saopštio da je Ormuski moreuz otvoren za komercijalni saobraćaj tokom trajanja primirja, čime je privremeno smanjena bojazan od novog udara na globalno tržište energije.",
    imageSrc: "/news/open-ormuz.jpg",
    imageAlt: "Ormuski moreuz otvoren za komercijalni saobraćaj tokom primirja",
  },
  {
    href: "/geopolitika/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom",
    title: "SAD odlažu isporuke oružja Evropi zbog rata sa Iranom",
    description:
      "Sjedinjene Američke Države odlažu deo planiranih isporuka oružja evropskim saveznicima zbog pojačanih operativnih zahteva u ratu sa Iranom.",
    imageSrc: "/news/military-cargo.jpg",
    imageAlt: "Vojni transport i logistika na pisti uoči isporuke opreme",
  },
  {
    href: "/geopolitika/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs",
    title:
      "Rusija i Ukrajina dogovorile privremeno primirje za pravoslavni Uskrs",
    description:
      "Rusija i Ukrajina dogovorile su privremeni prekid vatre povodom pravoslavnog Uskrsa, uz obostrane rezerve o njegovom sprovođenju na terenu.",
    imageSrc: "/news/primirje-vaskrs.jpg",
    imageAlt: "Ilustracija uskršnjeg primirja u ratu između Rusije i Ukrajine.",
  },
  {
    href: "/geopolitika/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza",
    title:
      "Rusija, Kina i Francuska blokirale rezoluciju o otvaranju Ormuskog moreuza",
    description:
      "Odluka dodatno produbljuje neizvesnost u regionu Persijskog zaliva i pojačava pritisak na globalne energetske tokove.",
    imageSrc: "/news/un-security-council.jpg",
    imageAlt:
      "Savet bezbednosti Ujedinjenih nacija u Njujorku, gde je blokirana rezolucija o otvaranju Ormuskog moreuza.",
  },
  {
    href: "/geopolitika/harg-srce-iranskog-izvoza-nafte",
    title: "Harg – srce iranskog izvoza nafte",
    description:
      "Sjedinjene Američke Države, prema dostupnim izveštajima, izvele su udare na vojne ciljeve na ostrvu Harg, ključnom energetskom čvorištu Irana u Persijskom zalivu.",
    imageSrc: "/news/harg-oil-terminal.jpg",
    imageAlt:
      "Naftni terminal na ostrvu Harg, jednom od najvažnijih energetskih čvorišta Irana.",
  },
  {
    href: "/geopolitika/oboren-f15e-iran-2026",
    title:
      "Oboren američki F-15E iznad Irana: jedan član posade spašen, drugi nestao",
    description:
      "Incident predstavlja prvi potvrđeni slučaj obaranja američkog aviona sa posadom u aktuelnom sukobu",
    imageSrc: "/news/f15e-iran.jpg",
    imageAlt: "F-15E Strike Eagle u letu",
  },
  {
    href: "/geopolitika/inflacija-evrozona-ecb-mart",
    title: "Inflacija u evrozoni ponovo iznad cilja Evropske centralne banke",
    description:
      "Rast cena energije pogurao inflaciju na 2,5 odsto, dok monetarne vlasti razmatraju sledeće korake",
    imageSrc: "/news/ecb-frankfurt-inflation.jpg",
    imageAlt: "Sedište Evropske centralne banke u Frankfurtu, Nemačka",
  },
  {
    href: "/geopolitika/vens-netanjahu-iran-rat",
    title: "Vens kritikovao Netanjahua zbog procena rata sa Iranom",
    description:
      "JD Vens kritikovao Benjamina Netanjahua zbog procena rata sa Iranom, ukazujući na rastuće razlike unutar savezništva.",
    imageSrc: "/news/vance-netanyahu.jpg",
    imageAlt: "JD Vens i Benjamin Netanjahu tokom sastanka u Jerusalimu",
  },
  {
    href: "/geopolitika/un-istraga-skola-iran",
    title: "UN traži pravdu nakon bombardovanja škole u Iranu",
    description:
      "Ujedinjene nacije traže hitnu istragu nakon bombardovanja škole u Iranu u kojem je stradalo više od 150 civila.",
    imageSrc: "/news/un-investigation.jpg",
    imageAlt: "Zastava Ujedinjenih nacija ispred sedišta UN",
  },
  {
    href: "/geopolitika/orban-prekid-gas-ukrajina",
    title: "Orban najavio prekid isporuke gasa Ukrajini",
    description:
      "Mađarski premijer Viktor Orban najavio postepeni prekid isporuke gasa Ukrajini, uz nove tenzije unutar Evropske unije.",
    imageSrc: "/news/orban-gas.jpg",
    imageAlt: "Viktor Orban tokom obraćanja na sastanku Evropskog saveta",
  },
  {
    href: "/geopolitika/nemacka-kritika-rat-iran",
    title:
      "Nemačka oštro kritikovala rat: „Katastrofalna greška“ i kršenje međunarodnog prava",
    description:
      "Nemački predsednik ocenio rat protiv Irana kao katastrofalnu grešku i upozorio na kršenje međunarodnog prava.",
    imageSrc: "/news/Frank-Walter Steinmeier.jpg",
    imageAlt: "Frank-Valter Štajnmajer tokom obraćanja povodom rata sa Iranom",
  },
  {
    href: "/geopolitika/iran-trump-ormuski-moreuz",
    title:
      "Iran preti zatvaranjem Ormuskog moreuza kao odgovor na Trampov ultimatum",
    description:
      "Iran preti zatvaranjem Ormuskog moreuza kao odgovor na američki ultimatum, uz rizik globalne energetske krize.",
    imageSrc: "/news/trump-iran.jpg",
    imageAlt:
      "Ilustracija sukoba između Donalda Trampa i Irana sa simboličnom kapljom nafte u centru, koja predstavlja globalnu energetsku i političku napetost",
  },
  {
    href: "/geopolitika/meloni-referendum-italija",
    title: "Meloni priznala poraz: Italijani odbacili reformu pravosuđa",
    description:
      "Italijani su na referendumu odbacili reformu pravosuđa, a premijerka Giorgia Meloni priznala poraz.",
    imageSrc: "/news/meloni-referendum.jpg",
    imageAlt:
      "Giorgia Meloni tokom obraćanja nakon referenduma o reformi pravosuđa u Italiji",
  },
  {
    href: "/geopolitika/ormuz-moreuz",
    title: "Evropske zemlje i Japan o bezbednosti Ormuskog moreuza",
    description:
      "Evropske zemlje i Japan objavili su zajedničko saopštenje o bezbednosti Ormuskog moreuza i zaštiti pomorskih ruta za snabdevanje energentima.",
    imageSrc: "/news/ormuz-kriza.jpg",
    imageAlt:
      "Naftni tanker prolazi kroz uski Ormuski moreuz kao simbol globalne energetske napetosti",
  },
  {
    href: "/geopolitika/energetski-rat",
    title:
      "Bliski istok ulazi u energetski rat: posle napada u Zalivu nafta skače, tržišta u panici",
    description:
      "Napadi na energetsku infrastrukturu u Zalivu podižu cenu nafte i šire krizu na Evropu.",
    imageSrc: "/news/nafta-kriza.jpg",
    imageAlt:
      "Minimalistička ilustracija točilice za gorivo kao simbol energetske krize na Bliskom istoku",
  },
  {
    href: "/geopolitika/tanker-bez-pogona",
    title:
      "EVROPA U TRCI SA VREMENOM: tanker bez pogona preti ekološkom katastrofom",
    description:
      "Tanker bez pogona koji prevozi naftu nekontrolisano pluta u evropskim vodama, dok evropski lideri upozoravaju na rizik ekološke katastrofe i traže hitnu koordinisanu reakciju.",
    imageSrc: "/news/tanker.jpg",
    imageAlt: "Tanker bez pogona u evropskim vodama",
  },
  {
    href: "/geopolitika/zapadne-sile-upozorile-izrael",
    title:
      "Zapadne sile upozorile Izrael - ne pokretati kopnenu ofanzivu u Libanu",
    description:
      "Zapadne zemlje upozoravaju Izrael da ne pokreće kopnenu operaciju u Libanu, uz rastući rizik regionalne eskalacije.",
    imageSrc: "/news/west-against-israel.jpg",
    imageAlt: "Zapadne sile upozorile Izrael - kopnena ofanziva u Libanu",
  },
  {
    href: "/geopolitika/svetska-kriza-sve-ozbiljnija",
    title: "SVETSKA KRIZA SVE OZBILJNIJA",
    description: "Zašto je Ormuski moreuz tako važan",
    imageSrc: "/news/brodovi-kriza.jpg",
    imageAlt: "Brodovi u Ormuskom moreuzu — globalna energetska kriza",
  },
  {
    href: "/geopolitika/biennale-rusija",
    title:
      "EU preti povlačenjem finansiranja Venecijanskog bijenala zbog mogućeg povratka Rusije",
    description:
      "Evropska unija zapretila je mogućnošću povlačenja finansijske podrške Venecijanskom bijenalu ukoliko Rusiji bude dozvoljen povratak na ovu prestižnu međunarodnu umetničku manifestaciju.",
    imageSrc: "/news/biennale-venice.jpg",
    imageAlt: "Venecijansko bijenale — povratak Rusije",
  },
  {
    href: "/geopolitika/refugees-iran-un",
    title:
      "Rat u Iranu pokrenuo masovno raseljavanje: UN upozorava na 3,2 miliona izbeglica",
    description:
      "Agencija UN za izbeglice upozorava da se humanitarna kriza ubrzano širi dok milioni ljudi napuštaju svoje domove.",
    imageSrc: "/refugees-iran-un.jpg",
    imageAlt: "Izbeglice iz Irana — humanitarna kriza",
  },
  {
    href: "/geopolitika/rezerve-nafte",
    title: "IEA pokreće najveće oslobađanje naftnih rezervi u istoriji",
    description:
      "Države članice puštaju 400 miliona barela nafte iz strateških rezervi kako bi ublažile globalni energetski šok izazvan krizom u Persijskom zalivu.",
    imageSrc: "/rezerve-nafte.jpg",
    imageAlt: "IEA — oslobađanje strateških naftnih rezervi",
  },
  {
    href: "/geopolitika/sad-specijalna-operacija-iran-uranijum",
    title:
      "SAD razmatraju specijalnu operaciju za preuzimanje iranskog uranijuma",
    description:
      "Američki bezbednosni krugovi razmatraju ograničenu vojnu operaciju usmerenu na iranske zalihe visoko obogaćenog uranijuma.",
    imageSrc: "/us-special-forces-desert.jpg",
    imageAlt: "Američke specijalne snage u pustinjskoj operaciji",
  },
  {
    href: "/geopolitika/francuska-odbrana-ormuza",
    title: "Evropa razmatra vojnu misiju za otvaranje Ormuskog moreuza",
    description:
      "Makron najavljuje odbrambenu pomorsku misiju za zaštitu slobodne plovidbe kroz ključni energetski prolaz.",
    imageSrc: "/hormuz-strait-tankers.jpg",
    imageAlt: "Tankeri u Ormuskom moreuzu",
  },
  {
    href: "/geopolitika/velike-sile-i-kriza-u-iranu",
    title: "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    description:
      "Između podrške Teheranu i izbegavanja velikog rata: kako Rusija i Kina balansiraju strateška partnerstva i globalne interese.",
    imageSrc: "/russia-china-shadows.jpg",
    imageAlt: "Rusija i Kina — senke velikih sila",
  },
  {
    href: "/geopolitika/ormuz",
    title: "Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom",
    description:
      "Ključni pomorski prolaz za naftu pod pritiskom: poremećaji u transportu energenata i rast rizika za globalnu ekonomiju.",
    imageSrc: "/ormuz.jpg",
    imageAlt: "Ormuski moreuz",
  },
  {
    href: "/geopolitika/sukobi-izrael-iran-2026",
    title: "IZRAEL–IRAN: nova eskalacija i crvene linije regiona (2026)",
    description:
      "Šta se menja na terenu, šta u diplomatiji - i gde su granice kontrole u spirali odgovora.",
    imageSrc: "/f22-israel-iran-2026.jpg",
    imageAlt: "Geopolitika  -  Izrael Iran",
  },
  {
    href: "/geopolitika/iran-protesti-2026",
    title:
      "IRAN: Protesti zahvatili najmanje 10 univerziteta, BBC potvrdio snimke sukoba",
    description:
      "Sukobi na kampusima i pojačana represija: relevantni izveštaji govore o stotinama ubijenih u prethodnim talasima protesta.",
    imageSrc: "/tehran-riots.jpg",
    imageAlt: "Geopolitika  -  Iran protesti",
  },
  {
    href: "/geopolitika/ukrajina-cetiri-godine-rata",
    title: "Četiri godine rata: šta sada određuje cenu mira",
    description:
      "Dve perspektive, jedan horizont: rat traje, ali se menja logika odluka - i pragovi rizika.",
    imageSrc: "/geopolitika-ukrajina.jpg",
    imageAlt: "Geopolitika  -  Ukrajina",
  },
  {
    href: "/geopolitika/nova-bezbednosna-arhitektura",
    title:
      "Nova bezbednosna arhitektura Evrope: da li se rađa kontinent tvrde moći?",
    description:
      "Rat u Ukrajini, energija i strateška autonomija - Evropa menja bezbednosni identitet.",
    imageSrc: "/geopolitika-ukrajina.jpg",
    imageAlt: "Nova bezbednosna arhitektura Evrope",
  },
];

function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article className={featured ? "md:col-span-2" : ""}>
      <Link href={article.href} className="no-underline">
        <div
          className="border mb-4 overflow-hidden"
          style={{
            borderColor: isDark ? "#2a2a2e" : "#eee",
            backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
          }}
        >
          <img
            src={article.imageSrc}
            alt={article.imageAlt}
            className={
              featured
                ? "w-full h-[260px] md:h-[360px] object-cover object-center block"
                : "w-full h-[220px] object-cover object-center block"
            }
            loading={featured ? undefined : "lazy"}
            decoding="async"
          />
        </div>

        <span className="kicker">Geopolitika</span>

        <h2
          className={
            featured
              ? "mt-2 text-[24px] md:text-[32px] font-bold leading-[1.15]"
              : "mt-2 text-[22px] md:text-[26px] font-bold leading-[1.2]"
          }
          style={{
            fontFamily: "'Playfair Display', serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          {article.title}
        </h2>

        <p
          className="mt-2 text-[15px] leading-[1.6]"
          style={{
            fontFamily: "'Crimson Pro', serif",
            color: isDark ? "#9a978f" : "#555",
          }}
        >
          {article.description}
        </p>

        <div
          className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: isDark ? "#d9bf7a" : "#8B0000",
          }}
        >
          Otvori tekst →
        </div>
      </Link>
    </article>
  );
}

export default function GeopolitikaIndex() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <section className="max-w-[1000px] mx-auto px-5">
          <div className="mb-10">
            <span className="kicker">Geopolitika</span>
            <p
              className="mt-3 text-[12px] md:text-[13px] uppercase"
              style={{
                fontFamily: "'EB Garamond', 'Garamond', Georgia, serif",
                letterSpacing: "0.28em",
                color: isDark ? "#9a978f" : "#555",
              }}
            >
              SVET DANAS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ARTICLES.map((article, index) => (
              <ArticleCard
                key={article.href}
                article={article}
                featured={index === 0}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
