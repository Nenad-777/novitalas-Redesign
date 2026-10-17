# NOVI TALAS 3.0 — PILOT MESEČNIH MAGAZINA SA PRELAZIMA

**Status:** eksperimentalno, draft, ne za produkciju.  
**Preview:** `/magazini-lab` na Vercel preview deploy-u eksperimentalne grane.  
**Branša:** `experiment/mesecni-magazini-motion-20261017`, zasnovana na `feature/otvoreno-izdanje-pilot-20261017`.  
**Produkcija:** https://novitalas.org nije izmenjena.

## Uključeno

- Biblioteka tri probna mesečna magazina: OKTOBAR, SEPTEMBAR i FEBRUAR 2026.
- Jedna naslovna fotografija/ilustracija po mesecu, iz već objavljenog članka sa datumom iz istog meseca. Slike naslovnica **nisu konačno urednički potvrđene**.
- Otvaranje naslovne fotografije u mesec (shared-image transform animiran pomoću Web Animations API).
- Prikaz objava sa `datePublished` iz postojećih registara `shared/articleMeta.ts` i `shared/seo.ts`, kroz postojeći `shared/articleSearch.ts`. Dva ručno dopunjena teksta iz septembra imaju datume proverene iz postojećih komponenti.
- Dodir članka: pomeranje baš njegove fotografije u pun čitalački prikaz. Čitav postojeći članak se učitava iz svoje React komponente gde je mapiran; za tekstove bez mape postoji link ka kanonskoj adresi.
- Povratna animacija fotografije, lokalno pamćenje skrol-pozicije u biblioteci i mesecu, osnovna istorija preko `pushState` / `popstate`.
- `prefers-reduced-motion` odmah preskače pokret.
- Header sa brzim ulazom u pretragu javnog sajta, link na produkciju, diskretan disclaimer. Preview `noindex,nofollow,noarchive`.
- Eksplicitno ništa na `main`, nijedan produkcioni publishing asset ili članak nije menjan.

## Šta ovo još NIJE

**Nije kompletna arhiva meseca.** Trenutno `shared/articleSearch` ne sadrži proverene `publishedAt` za sve postojeće članke. Pilot zato izričito prikazuje broj **evidentiranih** tekstova, ne garantuje 100% pokrivenost izdanja. Veliki migracioni posao pre produkcije jeste uvođenje pouzdanog datuma i metapodataka za sve članke.

**Nije završen UX/QA.** Vercel `READY` potvrđuje build, ali **ne dokazuje** da je motion prijatan niti da sve radi na iOS Instagram in-app Safari, fizičkom iPhone-u, Androidu ili pomoćnim tehnologijama. Realni korisnički test je sledeći korak.

**Nije sistem automatskog objavljivanja.** Odobrenje za koricu, punu arhivu, datume, kanonske linkove i urednički `OBJAVA` tok mora biti naknadno dizajnirano i provereno.

## Kritične provere na iPhone-u

1. Otvori `/magazini-lab`, vidi biblioteku tri korice.
2. Klikni oktobarsku naslovnicu: ista slika prelazi u magazin; možeš odmah da skroluješ i otvoriš tekst.
3. U oktobarskom izdanju dodirni Starshield: baš fotografija **Starshield** prelazi u čitalački prikaz; pojavljuje se stvarni tekst članka.
4. Klikni `Nazad u oktobar` (i sistemski browser back): fotografija se vraća prema odgovarajućoj priči, a mesečni spisak ostaje gde je bio.
5. Klikni `Sva izdanja`: korica se vraća na svoje mesto u biblioteci.
6. Otvori septembar, klikni Grenland i Renoara; svi originalni datumi moraju biti vidljivi.
7. Otvori februar; slika ALMA teksta pripada februaru 2026; otvori originalni članak, testiraj povratak.
8. `prefers-reduced-motion`: sve osnovne funkcije rade bez prelaza.
9. Brzo skrolovanje, dinamički tekst i VoiceOver: ne sme da postoji skakanje, pokriven naslov ili nečitljiv tekst.
10. Proveri da produkcija i `/izdanje-lab` stare grane rade bez promena.

## Poznati dizajnerski rizici

- Ako korisnik pristupi članku dubokim linkom umesto kroz izdanje, njegovo mesto u biblioteci nije prethodno sačuvano. Tada se vraća na vrh odgovarajućeg meseca.
- Pri promeni stanja, fotografija se klonira samo **vizuelno** radi animacije. Originalni tekst, izvorni URL i prava korišćenja ne kopiraju se niti menjaju.
- Različiti odnosi širine i visine slika zahtevaju proveru crop-a pri prelazu.
- Naslovi i opisi nisu alternativna novinarska priča; koriste se postojeće metapodatkovne oznake i izvorni tekst.
- Stariji članci nisu nužno napravljeni kroz jedinstveni `ArticleTemplate` pa se u njihovom čitalačkom sloju još može razlikovati izgled. To nije prepreka eksperimentalnoj proveri osnovne tranzicije, ali jeste zadatak pre produkcije.
- Završni sistem treba da podrži decenije/mesece po godinama, više stotina članaka i brz pregled bez učitavanja prevelikog DOM-a.

## Princip iz kojeg je nastao eksperiment

**Korica → mesec → članak → povratak na mesto.**

Ovo je **interno** dizajnersko pravilo, ne tekst/slogan koji treba prikazivati posetiocima. Cilj je elegantan, nenametljiv kontinuitet, a ne samopromotivna animacija.
