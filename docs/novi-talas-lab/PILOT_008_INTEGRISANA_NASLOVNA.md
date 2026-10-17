# NOVI TALAS 3.0 — PILOT 03: INTEGRISANA NASLOVNA, RUBRIKE I MAGAZINI

**Status:** dizajnerski preview, bez objavljivanja ili spajanja u produkciju.  
**Datum:** 17. oktobar 2026.  
**Ruta:** `/novi-talas-3-lab`, izdvojen od glavnog sajta.  
**Povezana eksperimentalna biblioteka:** `/magazini-lab`.  
**Grana:** `experiment/novi-talas-3-home-rubrike-20261017` iz prethodne grane za mesečne magazine.

## Šta je novo

Kombinovane su smernice korisnika iz PR-ova za:
- čistu uredničku naslovnu s prirodnom smenom različitih kompozicija,
- **jasno imenovane rubrike i vidljive rubričke naslove**, i na iPhone-u,
- **mesečne magazine kao izdvojenu biblioteku**, ne zamenu za NASLOVNU,
- diskretan **shared-photo transition** iz naslovne priče u članak i nazad na isto mesto.

Naslovna sadrži jedno dominantno uredničko otvaranje (Starshield), dve istaknute priče (Kekova i Vilson), zatim rubrike: Geopolitika, Obaveštajni izvori, Srbija, Naša planeta i urednički prostor za Kulturu. Četiri produkciono definisane rubrike zadržavaju postojeće naslove i kanonske linkove. Kultura je vidljiva kao oblast sadržaja, ali nije predstavljena kao već postojeća peta samostalna produkciona ruta.

Priče su stvarne, izvorni naslovni vizuali su korišćeni direktno iz postojećeg sajta; potpuni postojeći članci se čitaju preko postojećih React komponenti i opt-in `EditionEmbedContext`. Članci su i dalje dostupni preko svojih kanonskih URL-ova, sa deljenjem.

Korisnik ima na naslovnoj diskretno smeštenu biblioteku tri magazina sa fotografijama iz članaka stvarno objavljenih u tim mesecima: oktobar, septembar i februar 2026. „Svi magazini“ vodi na postojeći Pilot 02, gde se može testirati efekat korica → mesec → članak → nazad.

## Važno ograničenje

**Naslovna i biblioteka mesečnih magazina trenutno su dve povezane, zasebne pilot rute.** Naslovna → magazin radi kao normalan web-link, **još nema jedinstvenog shared-photo prelaza preko tih različitih ruta**. Međutim, iz same naslovne → članak → nazad i unutar eksperimentalne biblioteke → mesečno izdanje → članak → nazad koriste se pokreti kad god ih okruženje podržava.

Nije ispitano da li je tranzicija ugodna na realnom iPhone-u; potvrda Vercel READY odnosi se samo na uspešnu izgradnju aplikacije. Instagram in-app browser može promeniti ponašanje.

Sadašnji pilot koristi **ograničen skup** trenutno postojećih vesti i ne zamenjuje produkciono uredničko pravilo 1 glavna + 8 sekundarnih, ne daje kompletan arhivski indeks svih meseci i ne zamenjuje workflow OBJAVA. Konačna implementacija treba da očuva sve rubrike, sve naslove i sve arhivske tekstove, uključujući postojeće SEO rute. Korice su vizuelni kandidati, nisu konačno odobrene naslovnice.

## Test na telefonu — urednički pregled

1. Otvori `/novi-talas-3-lab`, oceni **prvi ekran naslovne** i lakoću pronalaženja rubrika.
2. Prevuci vodoravno kroz traku rubrika (ili otvori meni); tapni na „Geopolitika“ ili „Srbija“, proveri da li se prirodno dolazi do te rubrike.
3. Dodirni naslovnu priču o Starshieldu: potvrdi da je originalna fotografija prešla u članak i da je čitav tekst odmah dostupan.
4. Iz članka se vrati na naslovnu: proveri da li se položaj skrolovanja i vizuelna orijentacija vraćaju bez skoka.
5. Otvori Kekovu, Vilsona i jednu priču iz rubrika: svaki tekst mora raditi samostalno.
6. Skroluj do odeljka **Izdanja**: proveri da magazini imaju jasno odvojenu funkciju od naslovne i da su njihovi meseci i godine čitljivi i na malom telefonu.
7. Otvori „Svi magazini“: testiraj biblioteku, otvaranje korice, članak, vraćanje na mesec, pa povratak na biblioteku.
8. Vrati se u glavnu pilotsku naslovnu iz browser istorije; proveri normalan Back.
9. Uključi iOS *Reduce Motion*: ništa ne sme postati neupotrebljivo.
10. Ne praviti konačne produkcione odluke dok nisu provereni iPhone Safari, Instagram webview, VoiceOver, promenjena veličina slova i realna brzina uređaja.

## Obavezne zaštite

- Nema izmena `main`, produkcionog domena, samih članaka, fotografija, potpisâ, SEO-a i komandnog workflow-a OBJAVA.
- U pilota se čita iz postojeće baze članaka i njihovih React komponenti.
- Ne stvarati neutemeljene političke uzročne veze, simulirane novosti ili lažnu hiperaktuelnost arhivskih vesti.
- Pristupačnost i reducirani pokret imaju prednost nad atraktivnom animacijom.
- Nema dodatnih motiva ili rečenica poput „Kraj izdanja...“, niti mešanja sa SOFIA eksperimentima.

**Urednički princip:** *Naslovna je živa. Rubrike su jasne. Magazini čuvaju istoriju. Prelazi povezuju iskustvo.*
(Interna napomena, ne reklamni slogan na sajtu.)

## Iteracija 03a — vraćanje male foto-trake ispod naslovne (urednička reakcija)

Urednik je eksplicitno odabrao element koji se najviše dopao u prvom pilotu: **horizontalni niz malih fotografija odmah posle glavne naslovne priče**. Novi objedinjeni pilot zadržava glavne uredničke scene, sve rubrike i zasebne mesečne magazine, ali vraća taj pregled po sledećim pravilima:

- Jedinstvena foto-traka **IZBOR REDAKCIJE** pod naslovnom; prvih pet kadrova zadržava omiljeni vizuelni kontrast: Starshield, Kekova, Vilson, Grenland, Renoar. Dodatne priče dostupne su prevlačenjem.
- Foto-traka je ručni horizontalni karusel, **bez autoplay-a**. I na malom ekranu vidi se više fotografija odjednom i jasno kontrolno dugme za sledeće.
- Svaka fotografija predstavlja pravu priču i jednim dodirom otvara **pun originalni članak**, bez posrednog „odaberi pa još jednom klikni“.
- Shared-photo transition koristi **fotografiju koju je čitalac stvarno dodirnuo**, ne drugu kopiju iste fotografije na donjem delu naslovne; povratak čuva mesto.
- Traka predstavlja izabrane **vesti**, a **mesečni magazini** ostaju svoj zaseban deo niže na naslovnoj. Ta dva nivoa arhitekture se ne mešaju.
- Rubrike Geopolitika, Obaveštajni izvori, Srbija i Naša planeta, sa izdvojenom Kulturom, ostaju vidljive i netaknute.
- Ovo je estetska/UX iteracija u eksperimentalnoj grani, bez izmene produkcije. Konačni efekat i dalje zahteva probu na iPhone-u.

Ne dodavati marketinške slogane, suvišne instrukcije, automatsko listanje ili dekorativne numeričke korake čitaocu.

## Iteracija 03b — klikabilne rubrike i redizajn njihovih pregleda

- Nazivi rubrika u horizontalnoj navigaciji otvaraju **poseban pregled rubrike**, ne samo skok na odeljak naslovne.
- Naslovi rubrika na samoj naslovnoj i tekstualne oznake rubrika u glavnoj i sekundarnim pričama takođe otvaraju isti pregled.
- Svaki pregled ima jasan naziv rubrike, veliku vodeću priču i **ručno prevlačivi horizontalni karusel fotografija i naslova**. Nema autoplay-a.
- Iz karusela se direktno ulazi u originalni članak; povratak čuva rubriku. Dugme za povratak na naslovnu je stalno dostupno.
- Za rubrike sa postojećim produkcionim kategorijama nalazi se i link „Svi tekstovi rubrike na postojećem sajtu“. Pilot ne prikazuje čitavu arhivu i ne sme da glumi da je ima.
- „Kultura“ je u pilotu urednička kategorija sa jednom dostupnom pričom; nije predstavljena kao već postojeća zasebna produkciona ruta.
- Oznake na koricama magazina preimenovane su u „MESEČNO IZDANJE“ da ne budu nekonzistentni neklikabilni nazivi rubrika.
- URL-ovi probnih rubrika koriste `/novi-talas-3-lab?rubrika=<slug>`, a članak u okviru rubrike `?rubrika=<slug>&clanak=<id>`; nema promene postojećih javnih ruta.
- Testirati povratak browser back, klik na rubriku unutar kartice, direktno otvaranje linka rubrike i iPhone/Instagram webview. `prefers-reduced-motion` ostaje podržan.

**Produkcioni zahtevi za sledeću fazu:** vezati rubrike za stvarnu kompletnu bazu članaka, sa uredničkim redosledom, SEO canonical URL-ovima i funkcionalnom pretragom; ne praviti zasebnu produkcionu kategoriju Kultura bez uredničke odluke.
