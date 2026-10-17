# NOVI TALAS 3.0 — ZAHTEV 005: MESEČNI DIGITALNI MAGAZINI

**Status:** obavezan urednički/product zahtev za potpuno renoviranje sajta, formulisan po direktnoj instrukciji vlasnika/urednika 17. oktobra 2026. 
**Prioritet:** ključni deo arhitekture budućeg sajta; ne menjati produkciju bez posebnog odobrenja.
**Povezano:** Koncept 004 „Otvoreno izdanje“, Dosijei 001–003, prototip na izolovanoj grani `feature/otvoreno-izdanje-pilot-20261017`.

## Osnovna ideja

**Svaki kalendarski mesec treba predstaviti kao jedno digitalno izdanje-magazin sa sopstvenom naslovnom stranom.** Naslovna ima **jednu dominantnu sliku** koja potiče iz **jedne stvarne objave nastale u tom istom mesecu**, izabranu prema uredničkom kriterijumu. Naslovna je identitet celog meseca, ne generička ilustracija ili slučajan kolaž.

Primer uredničke organizacije: „OKTOBAR 2026“ ima jednu odobrenu fotografiju ili ilustraciju iz teksta objavljenog u oktobru; otvaranjem korice prikazuju se sve objave sa datumom objavljivanja u oktobru 2026, unutar elegantno dizajniranog magazina. „SEPTEMBAR 2026“ je zaseban magazin sa svojom naslovnom fotografijom iz septembra i svojim tekstovima.

**Ne postoji obaveza da svi tekstovi meseca imaju novu fotografiju; naslovna je jedna urednički odabrana slika.** Čitaoci su slobodni da otvore bilo koji članak.

## Tri nivoa buduće strukture

1. **Aktuelni Novi talas / novo izdanje**: elegantan pregled aktuelnih najvažnijih tekstova. Ovo može uključivati izdvojene starije analize, ali tada mora biti jasno označeno da su iz arhive.
2. **Magazini / biblioteka izdanja**: pregled po mesecima u obliku biblioteke korica (npr. Oktobar 2026, Septembar 2026, Avgust 2026), poređan od najnovijeg ka starijim mesecima; vidljive kompletne godine.
3. **Unutrašnjost jednog magazina**: urednički uređena naslovna + pregled svih objava koje zaista pripadaju mesecu, sa originalnim datumom, rubrikom, naslovom i ulazom u pun članak. Uređivanje meseca ne sme menjati ili brisati canonical URL tekstova.

## Urednička pravila naslovne

- Jedan mesec = jedna naslovna slika + naziv meseca i godina. 
- Cover media se bira **iz postojećeg članka objavljenog tog meseca**, ne iz nekog drugog perioda.
- **Urednik ručno potvrđuje** izbor jedne naslovne fotografije (tekst/priča i slika); softver može predložiti kandidata, ali ne objavljuje automatski izabranu naslovnicu.
- Koristiti odobren **originalni vizual visoke rezolucije**, ne mali thumbnail, ne izveštački povećanu kompresovanu sliku.
- Poštovati kredit, dozvolu korišćenja, alt tekst i činjenicu da li je AI ilustracija ili fotografija.
- Cover može da vodi do kompletnog mesečnog magazina; može se dodati diskretna veza „Naslovna priča“ prema izvornom članku, ako korisničko testiranje pokaže da to ne zbunjuje.
- Ne premeštati stare tekstove u novi mesec zbog uredničkog isticanja. Za tematske preporuke koristiti „Iz arhive“ + originalan datum.
- Istorijski magazini treba da ostanu postojani; kasnije ispravke članaka i ažuriranja mogu biti dostupni uz jasnu evidenciju, bez manipulacije datumom objavljivanja.

## Dizajn magazina

- Izgled kao polica elegantnih izdanja ili mirna biblioteka magazina, **bez jeftinih 3D maketa, prenatrpanosti i bez instrukcijskih slogana**.
- Jedna fotografija, naziv meseca i godina; eventualno mali broj urednički važnih naslovnih tema, ali zadati minimum je fotografija + mesec/godina.
- Na telefonu jedan dominantan magazin u fokusu i pregled ostalih lako dostupan; na računaru može biti mirna, pregledna galerija korica.
- Klik na koricu otvara mesečno izdanje sa istim principom „Otvorenog izdanja“: pregled svih članaka, različita estetska dramaturgija, čitanje celog teksta i vraćanje tačno na mesto.
- Čitaocu nije nametnut vremenski limit, kviz, skrol-korak ili personalizovana politička analiza.
- Pretraga mora indeksirati sve mesečne publikacije i tekstove. Direktne veze ostaju.
- Korice ne smeju da budu automatski preuzete sa spoljnog neautorizovanog izvora.

## Pravilo sadržaja i strukture podataka

Jedno kanonsko polje `datePublished` ili pouzdana metapodatkovna evidencija odlučuje kojem mesecu pripada tekst. Ne grupisati po datumu iz naslova, datumu izmene fajla, vremenu poslednje izmene stranice ili datumu kada je vest ponovo izdvojena.

Predlog podataka (ilustrativno, **ne implementirati slepo**):

- `monthId`: `2026-10`
- `title`: `OKTOBAR 2026`
- `coverArticlePath`: izvorni URL stvarne oktobarske vesti
- `coverImageSrc`: originalna odobrena slika **iz tog članka**
- `coverAlt`, `coverCredit`, `coverKind` (foto / ilustracija / AI ilustracija)
- `articlePaths`: svi kanonski URL-ovi članaka sa datumom `2026-10-01` do `2026-10-31`
- `coverApprovedByEditor`: ručna urednička potvrda, uz evidenciju datuma odluke

**Automatizacija:** dodavanje nove vesti kroz OBJAVA proces treba da je pojavi u pravom mesečnom magazinu, bez ručnog upisivanja i bez promene postojećeg pravila glavne strane sve dok novi sajt nije zvanično odobren.

## Važna postojeća osnova

U postojećem projektu `client/src/pages/IzdanjeFebruar2026.tsx` i `client/src/pages/ArhivaFebruar2026.tsx` već postoje dve stranice povezane sa februarskom arhivom. Pre renoviranja treba pregledati postojeće datume, preklapanja i kanonske rute, pa objediniti prikaz umesto pravljenja duplih/konkurentnih arhiva. Time ne tvrdimo da trenutno postoji potpuna biblioteka magazina sa izabranim koricama.

## Pilot i razlika od pravog mesečnog izdanja

Sadašnji pilot `/izdanje-lab` koristi **pet uzornih vesti, uključujući članke objavljene u septembru i oktobru**. On je demonstracija korisničkog iskustva, **nije** pravi magazin „OKTOBAR 2026“ i ne sme se tako nazivati.

Za pilot mesečnih magazina treba posebno demonstrirati:
1. Biblioteku mesečnih korica (barem tri meseca kada su dostupni potvrđeni članci i odobrene slike).
2. Jednu odabranu mesečnu naslovnu iz istog meseca.
3. Ulazak u magazin i pregled svih tekstova tekućeg meseca, bez mešanja starih objava kao novih.
4. Povratak na biblioteku na isto mesto.
5. Postojeće rubrike, arhivu, pretragu i SEO očuvane.

## Obavezni dizajnerski princip: TRANSITIONS — kontinuitet pri otvaranju i zatvaranju

**Odluka urednika, 17. oktobar 2026:** u punom redizajnu prelazi (*transitions*) ne smeju se zaboraviti niti ostaviti kao kozmetički dodatak pri kraju. Njihova svrha je da **otvaranje vesti i kretanje između izdanja postane estetski zadovoljstvo**, uz potpuno prirodnu orijentaciju. Ovo je visoki prioritet budućeg prototipa i prihvatnog testiranja, **nije tvrdnja da je učinak na zadovoljstvo već empirijski dokazan na Novom talasu**.

### Tri povezana prelaza (jedinstven vizuelni jezik)

1. **Biblioteka mesečnih korica → magazin:** dodir izabrane korice; ta korica se vizuelno razvija u uvodnu scenu pripadajućeg mesečnog izdanja, sa prepoznatljivom slikom koja čuva kontinuitet. Nema zasebnog „loading intro“ koraka niti glumljenja okretanja 3D stranice.
2. **Pregled mesečnog magazina → pun članak:** slika i naslov iz konkretne scene imaju diskretan zajednički vizuelni kontinuitet prema čitalačkoj strani. Čitalac može da čita odmah; animacija ne krije tekst i nije preduslov za navigaciju.
3. **Članak → nazad u isti magazin → biblioteka:** povratna tranzicija vraća korisnika na **isti članak u pregledu, istu poziciju skrolovanja i isti izabrani mesec**, bez „teleportovanja“ na vrh. Browser Back, direktne veze i deljenje rade očekivano.

### Kvalitet pokreta

- Elegantan, kratak, smiren, sa prirodnim easingom; **pokret treba da objašnjava prostorni odnos, ne da demonstrira tehniku**.
- Trajanje i krive kretanja odabrati posle probe na pravom iPhone-u; kao početnu hipotezu za mikroprelaze može se ispitati oko 180–300 ms, ali ovo **nije obavezna brojka** niti naučno dokazani optimum.
- Bez automatskog listanja, paralaksa, nepotrebnog zuma, bljeskova, zumiranja cele stranice, čekanja na animaciju ili opterećivanja glavnog thread-a.
- **Izbor odmah reaguje na dodir** i navigacija ostaje funkcionalna kada su animacije isključene ili nepodržane.
- Poštovati `prefers-reduced-motion`; alternativa može biti neposredna zamena prikaza bez kretanja.
- Koristiti mogućnosti nativne platforme samo uz proveru kompatibilnosti; ako je View Transitions API podržan, razmotriti ga kao progresivno poboljšanje, a ne obaveznu zavisnost. CSS ili jednostavni prelaz su prihvatljivi fallback.
- Ne menjati sadržaj članaka, izvore, datume, SEO i kanonske URL-ove zbog efekta animacije.

### Kriterijumi prihvatanja

- [ ] Otvaranje korice jasno pokazuje da pripadamo istom mesečnom izdanju.
- [ ] Otvaranje članka zaista stvara osećaj kontinuiteta iz prikazane uredničke scene, bez dodatnog koraka.
- [ ] Vraćanje iz članka restaurira baš prethodnu poziciju i fokus; vraćanje na biblioteku čuva izabrani mesec.
- [ ] Na iPhone-u sa Instagram in-app preglednikom i Safarijem nema treperenja, seckanja, blokiranja dodira ili naglog skakanja rasporeda.
- [ ] Na Androidu, desktopu, sa većim fontovima i VoiceOver-om sve radi i kada je motion isključen.
- [ ] U kratkom korisničkom testu odvojeno pitati koliko je prelaz prijatan i koliko je jasan; ne zaključivati zadovoljstvo samo iz estetske makete.
- [ ] Ako neki prelaz na konkretnom uređaju stvara smetnju ili degradira navigaciju, treba ga pojednostaviti ili ukloniti za taj slučaj, bez ukidanja osnovne ideje.

**Sažeto interno pravilo:** `Korica se otvara u magazin → magazin se otvara u članak → zatvaranjem se vraćamo tačno tamo gde smo bili.` Ne prikazivati ovo kao promotivni slogan korisnicima.

## Validacija pre produkcije

- Za svaki mesec postoji jedna i samo jedna izabrana cover slika, iz odgovarajuće vesti.
- Svi članci datog meseca dostupni su unutar magazina i pretrage.
- Originalna rezolucija, krediti, licence, alt tekst i datumi očuvani.
- Navigacija korica → magazin → tekst → nazad zaista radi u iPhone Safariju i na računaru; čitljivost i VoiceOver.
- SEO: magazin ima kanonsku adresu, ali članak zadržava postojeći kanonski URL; izbeći dupliran sadržaj i duple arhivske stranice.
- OBJAVA nastavlja da radi; automatizovano grupisanje po mesecu ne sme „izgurati“ vesti koje su urednički predviđene na home-u ili vratiti stare vesti na glavni tok.
- Nijedan produkcioni merge/deploy bez uredničke komande i odobrenja.

## Estetski princip

**Korice pozivaju. Magazin otkriva. Članak se čita.**

Ovo je interno projektantsko pravilo, ne slogan koji se prikazuje publici. Svi suvišni tekstovi poput „Kraj izdanja. Otkrij nešto novo, kad god poželiš“, „Pet priča, pet pogleda“ i objašnjenja navigacije treba da budu uklonjeni iz javnog interfejsa.

---
**Novi talas je medij, SOFIA nije deo koncepta.**
