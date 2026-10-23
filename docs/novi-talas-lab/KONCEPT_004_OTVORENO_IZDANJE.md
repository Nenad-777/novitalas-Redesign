# NOVI TALAS LAB — KREATIVNA VIZIJA 004
## OTVORENO IZDANJE: jedan prostor za otkrivanje, mirno čitanje i povratak

**Status:** autorska vizija za diskusiju, ne naučno dokazan model, ne specifikacija koja se automatski implementira.  
**Datum:** 17. oktobar 2026.  
**Temelj:** Dosije 001 (estetika, radoznalost i upotrebljivost), Dosije 002 (muzeji, vizuelna dramaturgija, kontinuitet), Dosije 003 (pet stvarnih članaka, scenariji A/B/C).  
**Produkcija:** https://novitalas.org — bez izmene.  
**Projektna granica:** NOVI TALAS nije SOFIA. Nema testiranja čitalaca kao korisničke funkcije, kognitivnih zadataka, čvorova znanja, nasilnih animacija, beskonačnog feeda.

## Centralna umetnička ideja

Novi talas nije stranica s nizom kartica i nije interaktivni test. To je **otvoreno digitalno izdanje**: nekoliko autorski komponovanih uredničkih scena čija se vizuelna dinamika može menjati, dok navigacija ostaje intuitivna kao običan dodir naslova.

**Sadržaj ostaje novinarstvo. Kompozicija stvara ritam. Čitalac određuje put.**

### I. Prvi ekran

- Topla, skoro bela osnova; tamnoplava/crna tipografija, vrlo uzdržani bordo detalji, tanke linije.
- Elegantni NOVI TALAS masthead; datum izdanja; očigledan tekstualni ulaz „Sve priče“ i pretraga.
- Jedna dominantna urednička slika u stvarno dobroj rezoluciji i naslov izabran prema aktuelnom izdanju.
- Što manje drugih kontrola. Nema blokova pune boje, skrol-vrata, numerisanih problemskih koraka ni komplikovanog objašnjenja interfejsa.
- Tačan raspored je otvoren i ne može se utvrditi naučnim radom bez stvarne dizajnerske probe.

### II. Kompozicija celog izdanja

- Oko pet stvarnih priča prikazano je kao konačno, slobodno pretraživo izdanje, **ne beskrajni tok kartica**.
- Različit vizuelni tretman može biti biran iz malog broja jasno kontrolisanih uredničkih „tempa“: veliki vizuelni trenutak, tipografska pauza, galerijsko predstavljanje slike; stil i navigacija su dosledni.
- Ne sme biti obaveznih „scena“ ili sporih narativnih animacija. Svi naslovi dostupni su preko „Sve priče“ u jednom dodiru.
- Sve mora biti čitljivo u dobrom i lošem mrežnom režimu, uz očuvan redosled i fallback bez animacija.
- Tempo nije „jedna priča po ekranu“ kao carousel. Kratke i duge kompozicije mogu se razlikovati, ali svaka mora jasno pokazati naslov, rubriku i (ako je relevantno) datum.

### III. Otvaranje članka bez gubitka mesta

- **Jedan dodir na naslov/uvod vodi direktno na pun članak**, bez posrednog preview-koraka.
- U podržanim browserima diskretan vizuelni kontinuitet iz uredničke scene u čitalačku površinu; bez dugog prelaza, bez autoplay-a; `prefers-reduced-motion` isključuje efekat.
- Čitalac ima osećaj da je ostao u istom izdanju, iako članak zadržava sopstveni kanonski URL, direktno otvaranje, SEO, deljenje, pristupačnost i potpun sadržaj.
- Povratak treba da restaurira tačan kontekst izdanje/odabrana priča/pozicija, uz očuvanu normalnu istoriju browsera.
- Čitalačka stranica mora biti mirna; interaktivni delovi ne smeju ometati tekst.

### IV. Neočekivano otkriće

- U izdanju ili **po završetku** članka, na nenametljivom mestu, jedan kuratorski izabrani tekst iz arhive: „Možda će vas zainteresovati“ i kratak iskren razlog.
- Uvek originalni datum, rubrika i krediti. Nikad simulirana novost i nikad izmišljena uzročna veza.
- Ne mora se prikazivati svakome, svaki put, niti algoritamski personalizovati. Potrebna je urednička kontrola.
- U prvoj proveri uključiti/isključiti ovu funkciju nezavisno od izdanja, kao što nalaže Dosije 003.

### V. Originalnost: ne „muzej kao sajt“, već kombinacija

Predložena sinteza:
1. **Jedna urednička površina** u kojoj se vide odabrane priče kao celina.
2. **Besprekorno otvaranje i vraćanje članka** tako da korisnik zadržava prostor i kontekst, umesto osećaja fragmentiranih stranica.
3. **Kvalitetno arhivsko otkriće** koje malom mediju daje vrednost mimo dnevnog tempa objavljivanja.

Nije dokazano da je ovaj sklop globalno originalan, niti da će postići bolje ishode od sadašnjeg portala. On je objašnjiva, falsifikabilna projektantska hipoteza.

### VI. Kako izgleda dramaturgija na pet stvarnih članaka

- Starshield: vizuelno odlučan otvarajući kadar koji poštuje činjenicu da je fotografija AI ilustracija.
- Brodolom Kekova: prostor za vizuelnu atmosferu, ali fotografija eksplicitno ostaje ilustracija.
- Vilson / Srbija: čvrsta tipografska kompozicija i jasna atribucija tvrdnji, bez zagrevanja političke napetosti u vizuelnom dizajnu.
- Grenland: arhivski sloj, impresivna geografija, jasno istaknut originalni datum 19.09.2026.
- Renoar: galerijsko predstavljanje same slike, s izvornim kreditom i datumom 09.09.2026.

Sadržaj i fotografska prava ostaju u postojećim komponentama. Dizajn uvodi različitu **kompoziciju**, ne različitu činjeničnu verziju iste priče.

### VII. Urednička održivost

Izdanje može nastati i sa tri do pet novih priča nedeljno. Za novu dramaturgiju nije potreban potpuno novi kod za svaku vest: nekoliko kvalitetnih uredničkih rasporeda mogu biti kontrolisani izbor uredništva. Čitaoci moraju razlikovati *novoobjavljeno* od *ponovo izdvojenog iz arhive*.

Postojeći sistem „hero + osam sekundarnih“ i pravila OBJAVA ostaju u produkciji dok eventualni novi sistem eksplicitno ne bude odobren i implementiran sa migracionim planom.

### VIII. Kritički rizici

- Ako velika vizuelna scena znači da se na iPhone-u ostale priče ne vide dovoljno brzo, to je veliki problem.
- Ako je povratak pogrešan, korisnik se gubi.
- Ako su kompozicije previše različite, lepota postaje haos.
- Ako arhivska preporuka deluje nasumično, ruši uredničko poverenje.
- Ako tranzicija izaziva zamor, pokret se ukida.
- Ako stvaramo dodatni „preview“ korak umesto neposrednog čitanja, koncept promašuje osnovnu nameru.

### IX. Kako ga proveriti

Pre prve linije koda treba proveriti tri zadatka UX dizajna u tekstu i statičkim konceptima: (1) vidljivost svih priča, (2) ulaz u članak jednim izborom, (3) povratak na mesto. Zatim, uz eksplicitnu saglasnost, mali izolovan prototip sa pet postojećih tekstova.

Kvalitativno poređenje sa aktuelnim sajtom mora odvojeno meriti estetski utisak, spontan izbor priče i navigacione neuspehe. Dug boravak nije samostalna metrika uspeha.

**Status: ideja koju treba kritikovati; nijedna promena produkcije nije odobrena.**
