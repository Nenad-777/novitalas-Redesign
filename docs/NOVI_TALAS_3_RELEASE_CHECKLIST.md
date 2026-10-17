# NOVI TALAS 3.0 — urednički i tehnički presek (17. oktobar 2026)

## Implementirano na izolovanoj grani
- Nova naslovna sa jednom glavnom pričom, mesečnim magazinima odmah ispod, izborom redakcije i karuselima po rubrikama.
- Fokus karusela: kartica najbliža sredini je malo uvećana (CSS scale 1.025 naspram 0.958); promene fokusa prate stvarno horizontalno skrolovanje, a ne lažni autoplay.
- Visokokontrastne korice (bela tipografija, tamni gradijent), reduced-motion, tastatura, kontrole prethodno/sledeće.
- Biblioteka 9 izdanja (februar–oktobar 2026), pojedinačne stranice izdanja i četiri rubrične stranice.
- Originalni URL-ovi članaka ostaju nepromenjeni; novi magazini samo povezuju postojeće objave.
- Postojeći pilot /izdanje-lab i /magazini-lab ostaje dostupan na ovoj grani.

## Arhivski integritet — važna ograničenja
Nijedan mesec ne sme da dobije izmišljenu naslovnu fotografiju ili izmišljen datum.
Početna automatska indeksacija oslanja se na shared/articleSearch.ts, odnosno articleMeta.ts i seo.ts, koji ne pokrivaju sve članke. Neki članci imaju naslov, sliku i putanju, ali nemaju datum objavljivanja u registru.
Za takve tekstove je potrebna naknadna provera izvornog članka pre dodeljivanja mesecu.
Jun i avgust mogu biti prazni dok se ne popuni evidencija. To NE znači da u tim mesecima nije bilo objava.
Mesečne korice su automatski uzete iz postojećih članaka sa evidentiranim datumom, a konačan urednički izbor ostaje na potvrdi.
Rubrične stranice prikazuju postojeći centralni indeks; stari članak ostaje izvor istine.

## Obavezna provera pre produkcije
1. Uporediti sve rute članaka iz App.tsx sa centralnim indeksom; popisati nedostajuće.
2. Za svaku vest potvrditi originalni datum, naslov, rubriku, sliku, licencu i URL. NIKADA ne pretpostavljati mesec iz GitHub commit datuma.
3. Proveriti da sve slike postoje u produkciji i nisu smanjene rezolucije.
4. Na iPhone Safari/Instagram in-app browser testirati swipe, centriranje aktivne kartice, navigaciju, pretragu i povratak.
5. Proveriti pretragu ćirilica/latinica, sve kategorije, sve članke i 404, Lighthouse i VoiceOver.
6. Potvrditi pravilo 1 glavna + 8 sekundarnih vesti i pravilo izguravanja najstarije vesti pri OBJAVA.
7. Proveriti build i Vercel preview pre spajanja; napravljen je backup branch backup/main-before-nt3-20261017.

Ne spajati nepotpunu arhivu u produkciju bez uredničke odluke.