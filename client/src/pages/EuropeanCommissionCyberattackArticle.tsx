import ArticleTemplate from "@/components/ArticleTemplate";

export default function EuropeanCommissionCyberattackArticle() {
  return <ArticleTemplate
    path="/obavestajni-izvori/sajbernapad-evropska-komisija-vestacka-inteligencija"
    sectionLabel="Obaveštajni izvori"
    title="Sajbernapad na srce Evropske unije: Brisel potvrdio da su napadači koristili veštačku inteligenciju"
    dateLabel="19. NOVEMBAR 2026."
    authorLabel="Novi Talas"
    deck="Evropska komisija prvi put je javno potvrdila da je bila meta sajberkampanje u kojoj su korišćeni alati veštačke inteligencije. Napad je otkriven još 22. oktobra, ali je javnost o njemu obaveštena tek 19. novembra. Pojedini digitalni sistemi morali su da budu isključeni, dok identitet napadača i puni razmeri incidenta još nisu poznati."
    imageSrc="/news/brussels.jpg"
    imageAlt="Zgrada Berlaymont, sedište Evropske komisije u Briselu, sa zastavama Evropske unije."
    imageCredit="Foto: KenSwe72 / Wikimedia Commons · CC BY 4.0"
    imageFirst={true}
    imageHeightClass="h-auto aspect-video"
    imageObjectFit="cover"
    backHref="/obavestajni-izvori"
    backLabel="← Obaveštajni izvori"
    paragraphs={[
  "Evropska komisija potvrdila je u četvrtak, 19. novembra, da su njeni informacioni sistemi bili meta sajberkampanje sprovedene uz pomoć veštačke inteligencije. Portparol Komisije Tomas Renije izjavio je na konferenciji za novinare u Briselu da je incident prvi put otkriven 22. oktobra, a potvrđen preliminarnom istragom četiri dana kasnije. Kao preventivnu meru, institucija je privremeno isključila nekoliko digitalnih aplikacija. Većina je u međuvremenu ponovo uspostavljena, ali pojedini sistemi još nisu dostupni. Komisija nije saopštila ko stoji iza napada niti koliku je štetu on mogao da izazove.",
  "Prema informacijama koje je prethodno objavio Politico, napad je trajao najmanje deset dana i pogodio sisteme koji se koriste za obračun zarada, evidenciju radnog vremena, refundaciju medicinskih troškova i prevodilačke usluge. Postoji i sumnja da su kompromitovani određeni lični podaci zaposlenih, ali Evropska komisija nije potvrdila ove navode. Renije je naglasio da dosadašnja istraga nije pronašla dokaze o masovnom curenju podataka zaposlenih. To, međutim, ne znači da je mogućnost pojedinačnih kompromitovanja potpuno isključena. Istraga se nastavlja uz saradnju evropskog tima za odgovor na računarske incidente CERT-EU i Evropskog supervizora za zaštitu podataka.",
  "Posebnu pažnju bezbednosnih stručnjaka privukla je upotreba veštačke inteligencije. Prema navodima specijalizovanog portala The Record, koji se poziva na ranije izveštavanje Politica, napadači su koristili alat ARTEX, platformu namenjenu automatizovanom pronalaženju ranjivosti u računarskim sistemima. Evropska komisija potvrdila je upotrebu javno dostupnog AI alata, ali nije zvanično identifikovala njegov naziv. Ovakva tehnologija može ubrzati pretragu bezbednosnih propusta i omogućiti izvođenje složenijih operacija uz manje ljudskog angažovanja. Ipak, sama upotreba određenog alata ne otkriva identitet napadača, niti dokazuje da iza operacije stoji neka država ili obaveštajna služba.",
  "Slučaj otvara pitanje otpornosti evropskih institucija na novu generaciju digitalnih pretnji. Evropska komisija nije saopštila da li je napad imao za cilj krađu informacija, ometanje rada ili pripremu za kasnije upade. Nije potvrđeno ni da su pogođeni sistemi Evropskog parlamenta ili Evropskog saveta. Ono što je već poznato jeste da su napadači uspeli da izazovu dovoljno ozbiljnu bezbednosnu reakciju da pojedine aplikacije budu isključene. U vremenu kada veštačka inteligencija ubrzava i odbrambene i napadačke sposobnosti, ovaj incident pokazuje koliko je važno da institucije raspolažu nezavisnim bezbednosnim proverama, pouzdanim sistemima zaštite i jasnim pravilima za obaveštavanje javnosti."
]}
  />;
}
