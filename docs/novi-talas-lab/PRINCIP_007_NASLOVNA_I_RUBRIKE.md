# NOVI TALAS 3.0 — PRINCIP 007: ŽIVA NASLOVNA I SAČUVANE RUBRIKE

**Urednički zahtev:** 17. oktobar 2026.  
**Status:** obavezna arhitektonska smernica za narednu iteraciju, bez izmena produkcije.  
**Osnova:** korisnik je pohvalio prikaz mesečnih magazina, ali je izričito naglasio da to **ne treba da bude konačan izgled naslovne strane**, i da **ne smemo izgubiti rubrike i njihove jasne nazive**.

## Presudna razlika

**NASLOVNA STRANA ≠ BIBLIOTEKA MESEČNIH MAGAZINA.**

Biblioteka korica je važan deo arhive i identiteta novog portala, ali ne sme zameniti živu naslovnu sa istaknutim aktuelnim novinarstvom.

Tri osnovna, komplementarna načina pristupa informacijama:
1. **NASLOVNA** — glavna aktuelna urednička selekcija, reprezentativna naslovna vest i pažljivo raspoređene ostale aktuelne priče, uz identitet svih rubrika.
2. **RUBRIKE** — stalna i jasna navigacija i zasebni ulazi na tematske stranice; članak zadržava svoju pripadnost rubrici bez obzira da li je istaknut na naslovnoj ili u mesečnom magazinu.
3. **MESEČNA IZDANJA** — biblioteka izdanja sa jednom odobrenom naslovnom slikom iz priče istog meseca, ulaz u celokupan mesečni pregled i u članke.

## Postojeće rubrike u produkcionom kodu

U `client/src/components/Header.tsx` trenutno je niz:
- **Geopolitika** — `/geopolitika`
- **Obaveštajni izvori** — `/obavestajni-izvori`
- **Srbija** — `/srbija`
- **Naša planeta** — `/nasa-planeta`

Ova imena i postojeće odredišne rute ne smeju da nestanu tokom renoviranja. **Kultura** postoji kao urednička oblast/oznaka u sadržaju, ali nije jedna od četiri stavke postojećeg `navItems` niza; pitanje da li će dobiti zasebnu glavnu rubriku treba da odluči uredništvo, ne prototip.

## Predlog buduće naslovne — za uredničko razmatranje, ne usvojeni konačni wireframe

1. Elegantni NOVI TALAS masthead sa neposrednim, preglednim pristupom rubrici i pretrazi.
2. Snažna aktuelna naslovna priča, zadržava naslov, fotografiju i datum; estetski standard Otvorenog izdanja.
3. Druge aktuelne urednički odabrane priče u neuniformnom, ali urednom ritmu.
4. Vidljivi **naslovi rubrika** kao urednički odeljci koji vode na njihove tematske stranice. Korisnik mora moći lako da razume da Novi talas pokriva više oblasti.
5. **Mesečni magazini** kao pažljivo komponovan deo naslovne i zaseban stalan ulaz „Izdanja“, ne čitava naslovna.
6. Članak treba da se otvara prijatnim, smislenim prelazom i vrati korisnika tačno tamo gde je bio (iz rubrike, naslovne ili magazina).

**Postojeće produkciono pravilo je jedan vodeći + osam sekundarnih tekstova**, uz istiskivanje starijih sa home pri OBJAVA. Ne menjati to bez eksplicitnog uredničkog odobrenja i ažuriranja pravila objavljivanja.

## Mobilna navigacija

Sa iPhone ekrana ne smeju nestati imena rubrika iza same oznake „Izdanja“. Moguća rešenja za eksperiment: vidljiva tanka traka tema ispod mastheada sa vodoravnim pomeranjem i jasnim indikatorom, ili veoma pregledan meni „Rubrike“ koji otvara **punu listu pravih imena**. Pri dizajnerskom poređenju pošteno proveriti koja opcija zaista radi bez dodatnog učenja.

Izdanja i rubrike su **različiti osnovni načini pronalaženja**: prva su hronologija, druge tematika.

## Ispravna informacijska arhitektura

`NASLOVNA → VEST`  
`NASLOVNA → RUBRIKA → VEST`  
`NASLOVNA → IZDANJA → MESEC → VEST`

Iz vesti se čitalac vraća na izvorni kontekst, uz elegantnu tranziciju i restaurisano mesto.

## Šta se trenutno vidi u Pilot 02

Trenutni `/magazini-lab` demonstrira **biblioteku izdanja kao zasebnu stranicu**, a ne predlog zamene za `/`. To je ciljano test okruženje za motion i mesečne korice. Nedostaju mu pregledne rubrike i puna buduća naslovna; to je eksplicitno sledeći zadatak.

## Naredna iteracija

- Najpre osmišljavanje naslovne sa stvarnim naslovi­ma rubrika, novim i istaknutim pričama i diskretno integrisanim koricama mesečnih magazina.
- Ne dopustiti da čitav prvi ekran zauzme uvod „Biblioteka izdanja“ kada je korisnik otvorio NASLOVNU.
- U mesečnom magazinu mogu ostati vidljive rubrike pored datuma i naslova, i opciono tematsko grupisanje, ali **svi članci meseca** moraju ostati dostupni, bez gubitka globalne navigacije.
- Nastaviti korisničke provere prelaza korica → mesec → članak → povratak.
- Bez automatskih promena `main`, produkcije, kanonskih URL-ova, prava na slike ili workflow-a OBJAVA.

**Urednički princip:** Novi talas mora istovremeno biti **živa naslovna, organizovan po oblastima, i biblioteka lepih mesečnih izdanja**. Nijedna od te tri dimenzije ne sme izbrisati ostale.
