# NOVI TALAS — TRAJNO UPUTSTVO ZA STATISTIKU ČITANOSTI

**Namena:** Kada urednik kaže „Sofija, statistika Novog talasa“, ChatGPT treba da SAMOSTALNO pročita statistiku produkcionog sajta preko povezanog Vercel naloga i pruži urednički izveštaj, bez molbe za screenshot ili ponovno podešavanje analitike.

## Identitet projekta

- Sajt: https://novitalas.org (takođe https://www.novitalas.org).
- Vercel project: `novitalas-redesign`.
- Vercel projectId: `prj_AsRytQRAGWRASe3JnDodWm9vbP5v`.
- Vercel teamId: `team_8rhBJOkZnwbEVqmDECOrYxz1`.
- GitHub repository: `Nenad-777/novitalas-Redesign`.
- Vremenska zona za dnevne izveštaje: `Europe/Belgrade`.
- Vercel Web Analytics je uključen (korisnik to pokazao na snimcima ekrana 18.10.2026, i Vercel upiti su vratili podatke).
- U `client/index.html` nalazi se skripta `/_vercel/insights/script.js`, objavljena kroz PR #541, 18.10.2026. Stare Umami vrednosti su uklonjene.
- Analitika nije retroaktivna. Ne tvrditi da „0“ znači da sajt nema posete ako je period pre aktivacije ili nema podataka.
- Ovo je privatni interni urednički izveštaj; ne dodavati javni brojač na sajt.

## Neophodan postupak — bez web pretrage

1. Na početku odgovora na zahtev za statistiku pronađi aktuelne povezane Vercel alate. Ako koristiš `functions.exec`, pregledaj `ALL_TOOLS` za `mcp__Vercel__count_pageviews` i `mcp__Vercel__aggregate_pageviews` (nazivi/specifikacije se mogu menjati). Koristi isključivo trenutno dostupne tool definicije, ne pogađaj.
2. Utvrdi današnji lokalni datum/vreme u Beogradu, npr. dostupnim alatom za lokalno vreme (ako zahtev zavisi od „danas“).
3. Pozovi `tools.mcp__Vercel__count_pageviews({projectId:"prj_AsRytQRAGWRASe3JnDodWm9vbP5v",teamId:"team_8rhBJOkZnwbEVqmDECOrYxz1",since:"YYYY-MM-DD",until:"YYYY-MM-DD"})` za ukupno posetilaca i pregleda. Odaberi dan i sedmodnevni period pažljivo.
4. Pozovi `tools.mcp__Vercel__aggregate_pageviews({projectId:"...",teamId:"...",since:"...",until:"...",by:["requestPath"],limit:30})` za najčitanije stranice. Za izvor poseta ponovi sa `by:["referrerHostname"]`; za države sa `by:["country"]`; za uređaje sa `by:["deviceType"]`; za dnevni trend sa `by:["day"]`. Sve u okviru istog vremenskog perioda.
5. Za konkretnu vest primeni `filter:"requestPath eq '/putanja-clanka'"` na `count_pageviews`. Primer konkretne vesti: `/kultura/klara-i-sunce-premijera-film-po-romanu-nobelovca-kazua-isigura`.
6. Ako vraćena vrednost ima `text` koji sadrži JSON, prvo parsiraj, pa pročitaj `result.data.visitors` i `result.data.pageviews`. Za agregate je `result.data` niz stavki.
7. **Važna napomena o datumima:** Vercel upiti sa vremenskim oznakama i lokalnim UTC offsetom mogu zaokružiti period na granice dana i dati neočekivane krajnje tačke (zabeleženo 18.10.2026). Proveri `result.query.since/until` i uporedi ukupan broj sa zbirnim `by:["day"]` / `by:["requestPath"]`. Koristi eksplicitne ISO datume kad je moguće. Ako podaci izgledaju nedosledno, navedi neizvesnost i ne prikazuj lažnu preciznost.
8. Prikaži datum i vreme očitavanja, jedinstvene posetioce, preglede, najčitanije tekstove, izvore poseta, zemlje, uređaje i kratki urednički zaključak. Ako je uzorak mali, naglasi da se ne mogu donositi zaključci o trendovima. Ne mešaj posetioce sa pregledima i ne sabiraj jedinstvene posetioce po URL-u kao ukupan broj jedinstvenih ljudi.

## Proverena referenca (NIJE tekuće stanje)

Pri prvim očitavanjima dana **18.10.2026** Vercel je preko povezanih alata pokazao:

- 2 jedinstvena posetioca; 4 pregleda stranica nakon aktivacije.
- Naslovna `/`: 3 pregleda; Klara i Sunce: 1 pregled.
- Referer `l.instagram.com`: 3 pregleda; direktno/neutvrđeno: 1 pregled.
- Mobilni: 4 pregleda; zemlja Srbija: 4 pregleda.
- Ovi brojevi su ISTORIJSKI PRIMER RADA KONEKTORA, nikad ih ne prenositi kao sveže brojke bez novog upita.

## Ako drugi razgovor nema pristup Vercelu

- Prvo pretraži trenutno dostupne povezane alate za Vercel, pa tek onda reci da nema pristupa.
- Uputstvo za pronalaženje je ova datoteka: `docs/NOVI_TALAS_STATISTIKA.md` na `main` u navedenom GitHub repozitorijumu.
- Ako konektor nije dostupan/povezan, pošteno objasni da ne možeš dobiti aktuelne brojeve. Zatraži povezivanje Vercela, ne screenshot kao prvi izbor.
- Ne predstavljaj server/CDN Requests kao jedinstvene posetioce: to su različite metrike.

## Predloženi format pitanja i odgovora

Korisnik: **„Sofija, statistika Novog talasa“**

Asistent: automatski očita Vercel, saopšti datum i vremenski period, ukupno jedinstvenih posetilaca i pregleda, pet najčitanijih vesti, izvor poseta, poređenje sa prethodnim danom/periodom ako ima podataka, i napiše jednu uredničku preporuku koja se zasniva isključivo na stvarnim brojkama. Bez dodatnih pitanja kada su podaci dostupni.
