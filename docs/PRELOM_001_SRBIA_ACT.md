# PRELOM 001 — SRBIJA Act / evidence-backed proof of concept

**Eksperiment, nije javna vest niti produkciona izmena.** Jedna stvarna priča, jedan pritisak na dugme, proverljiv izvor. 

## Pitanje
Da li je SRBIJA Act postao zakon?

## Verzije (retrospektivni preseci)
- **A / 27. avgust 2026:** H.R. 10183 uveden je u Predstavnički dom; u tom preseku predlog S. 5611 još nije uveden. Izvor: [GovInfo H.R. 10183](https://www.govinfo.gov/app/details/BILLS-119hr10183ih).
- **B / 30. septembar 2026:** u Senatu je uveden **zaseban** S. 5611, čitan dvaput i upućen Odboru za spoljne odnose. Izvor: [GovInfo S. 5611](https://www.govinfo.gov/app/details/BILLS-119s5611is).
- **Nije se promenilo:** činjenica da su predlozi u proceduri, a ne usvojeni zakon. **Ne poistovećivati** proces dva doma s prolaskom jednog predloga kroz oba doma.

Napomena: preseci su naknadne rekonstrukcije zasnovane na sada dostupnim zvaničnim dokumentima. Nisu predstavljeni kao tada objavljeni zaključci redakcije. Izvori i status su provereni 16. oktobra 2026, nisu real-time.

## Funkcije
- Primarna CTA „Pokaži šta ovo menja“ promeni samo čvor Senata.
- Odvojeno prikazuje „Šta se promenilo“ i „Šta nije promenjeno“.
- Svaki od 3 čvora otvara izvor i granicu zaključka.
- „Sačuvaj pitanje“ pamti izbor samo lokalno, bez obaveštenja.
- Deljenje veze, ručni izbor preseka, pristupačni tasteri, podrška smanjenom kretanju.
- Izolovana ruta `/prelom-lab` na eksperimentalnoj grani.

## Za testiranje na telefonu
1. Na prvom ekranu u 10 sekundi prepoznati pitanje i početni odgovor.
2. Kliknuti CTA, uočiti da se izmenio *samo* status Senata.
3. Kliknuti izmenjeni red, otvoriti zvanični S. 5611 i razumeti ograničenje.
4. Vratiti se na prethodni presek, sačuvati pitanje i podeliti link.
5. Proveriti 320, 375, 390, 430px, VoiceOver, tastaturu i iOS Safari.

### Nerešeno, svesno izostavljeno
Bez automatskog real-time praćenja, bez preporuka izvedenih iz AI-ja, bez tvrdnje da je graf potvrđen korisničkim testiranjem. Za produkciju su neophodni poseban fakt-check statusa i uredničko odobrenje.

**Nema merge u main bez izričitog odobrenja.**