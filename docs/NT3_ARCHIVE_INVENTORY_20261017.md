# NOVI TALAS 3.0 — početni inventar arhive

**Datum pregleda:** 17. oktobar 2026.  
**Grana:** `feature/novi-talas-magazine-experience-20261017`  
**Metod:** poređenje statičkih ruta u `client/src/App.tsx` sa `shared/articleMeta.ts`, `shared/seo.ts` i `client/src/pages/homeArticles.ts`.

## Rezultat

- Statičke rute članaka u četiri rubrike: **157**.
- Jedinstvene putanje u tri indeksa (uključujući moguće vanrutne): **74**.
- Rute koje NISU pronađene ni u jednom od tri indeksa: **85**.
- Ovo nije dokaz da članak ne postoji; upravo suprotno, ruta postoji, ali indeks nije potpun.
- Nedostajuće metapodatke ne popunjavati pretpostavkama; datume čitati iz samih članaka i potvrđivati pojedinačno.

| Rubrika | Ruta | Nije u indeksu |
|---|---:|---:|
| srbija | 20 | 6 |
| geopolitika | 77 | 46 |
| nasa-planeta | 45 | 26 |
| obavestajni-izvori | 15 | 7 |

## Važno: kvalitet slika

- Septembarska prethodna naslovna `/news/greenland-us-arctic.jpg` ne postoji kao statički fajl u GitHub stablu, već se pokušava dopremiti pri izgradnji iz spoljnog izvora.
- Noviji kandidat `/news/glasanje-dijaspora-3-oktobar.jpg` ima samo **7.885 bajtova** u GitHub-u.
- Septembarska korica je zato prebačena na već postojeći vizual `/news/afd-weidel.jpg` (**2.506.265 bajtova**) uz članak od 21. septembra 2026. To nije automatska zamena unutar samog članka o Grenlandu.
- Mala veličina fajla je **signal za proveru**, ne dokaz loše rezolucije. Dimenzije i vizuelni kvalitet moraju se posebno pregledati.

### Potencijalno problematični mali fajlovi (ispod 20 KB)

- `client/public/news/vucic-zapad-centri-moci.webp` — 5742 B
- `client/public/news/glasanje-dijaspora-3-oktobar.jpg` — 7885 B
- `client/public/news/uk-self-determination-flags.jpg` — 10903 B
- `client/public/news/king-charles-ai-point-of-no-return.webp` — 15680 B
- `client/public/news/cacilend-15-mart-2025-nenad-maricic.avif` — 16874 B

## Sledeći zadaci

1. Za svaku neindeksiranu rutu izvući stvarni naslov, datum, kategoriju, izvornu fotografiju i potpis iz postojećeg članka.
2. Proveriti originalnu rezoluciju, putanju i pravo korišćenja svih korica, posebno arhivskih.
3. Popuniti centralni indeks tako da svaka rubrika i mesečno izdanje imaju sve potvrđene članke, bez duplikata.
4. Potvrditi redosled od najnovije ka najstarijoj u svakom karuselu i u rubrici Srbija.
5. Proveriti pretragu, stare URL-ove i iPhone swipe pre produkcionog spajanja.

## Rute koje nedostaju u indeksu

- `/geopolitika/tramp-zapretio-bombardovanjem-omana-dok-istice-rok-za-sporazum-sa-iranom`
- `/geopolitika/istorijska-susa-ugrozila-nuklearne-elektrane-na-dunavu-rumunija-minira-stenovite-prepreke-madjarska-gasi-reaktore`
- `/geopolitika/zasto-je-desetine-hiljada-ljudi-krenulo-ka-spaniji-kriza-u-seuti-otvara-nova-pitanja-o-granicama-evrope`
- `/geopolitika/mundijal-na-granici-fudbal-vize-i-politika-moci`
- `/geopolitika/sad-i-iran-blizu-sporazuma-pakistan-tvrdi-da-je-tekst-dogovoren-teheran-jos-oprezan`
- `/geopolitika/eu-migration-rules-2026`
- `/geopolitika/luksuzni-raj-ili-gubitak-obale`
- `/geopolitika/tramp-pokrenuo-udare-na-iran-nakon-obaranja-americkog-helikoptera`
- `/geopolitika/nova-bitka-za-iran-pocinje-u-becu`
- `/geopolitika/talibani-otvorili-vatru-na-protest-za-prava-zena`
- `/geopolitika/posle-dronova-dolaze-roboti-novo-poglavlje-rata-u-ukrajini`
- `/geopolitika/moskva-upozorava-putina-ratna-potrosnja-postaje-neodrziva`
- `/geopolitika/evropska-industrija-pred-novim-udarom-energetske-krize`
- `/geopolitika/evropa-trazi-novu-formulu-za-ukrajinu`
- `/geopolitika/nemacka-i-francuska-odustaju-od-zajednickog-borbenog-aviona`
- `/geopolitika/svet-na-dan-1-maj-2026`
- `/geopolitika/nato-pod-pritiskom-od-saveza-ravnopravnih-ka-sistemu-uslovljene-lojalnosti`
- `/geopolitika/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost`
- `/geopolitika/bugarska-na-raskrsnici-rumen-radev-vodi-prema-izlaznim-anketama`
- `/geopolitika/novac-kao-uslov-trenutak-u-kojem-se-odlucuje-pravac-srbije`
- `/geopolitika/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja`
- `/geopolitika/madjarska-ogranicenje-mandata-orban`
- `/geopolitika/pomeranje-tezista-orban-evropa`
- `/geopolitika/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom`
- `/geopolitika/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs`
- `/geopolitika/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza`
- `/geopolitika/harg-srce-iranskog-izvoza-nafte`
- `/geopolitika/kina-testira-vodonicni-avion-pocetak-nove-energetske-trke-u-avijaciji`
- `/geopolitika/oboren-f15e-iran-2026`
- `/geopolitika/inflacija-evrozona-ecb-mart`
- `/geopolitika/vens-netanjahu-iran-rat`
- `/geopolitika/un-istraga-skola-iran`
- `/geopolitika/orban-prekid-gas-ukrajina`
- `/geopolitika/meloni-referendum-italija`
- `/geopolitika/iran-trump-ormuski-moreuz`
- `/geopolitika/ormuz-moreuz`
- `/geopolitika/energetski-rat`
- `/geopolitika/tanker-bez-pogona`
- `/geopolitika/zapadne-sile-upozorile-izrael`
- `/geopolitika/svetska-kriza-sve-ozbiljnija`
- `/geopolitika/london-kampanja-protiv-dezinformacija`
- `/geopolitika/g7-podrzala-sporazum-sad-iran`
- `/geopolitika/g7-nova-geopoliticka-strategija`
- `/geopolitika/nova-orbita-srpske-diplomatije-zasto-se-beograd-priblizava-vasingtonu-bas-sada`
- `/geopolitika/krim-u-vanrednoj-situaciji-nakon-masovnog-napada-dronovima`
- `/geopolitika/protesti-u-pragu-zbog-finansiranja-javnog-servisa`
- `/obavestajni-izvori/sta-se-to-dogadja-u-evropi-priprema-za-rat-bez-fronta`
- `/obavestajni-izvori/nemacka-menja-bnd-najveca-reforma-obavestajne-sluzbe`
- `/obavestajni-izvori/evropa-preispituje-oslanjanje-na-americke-obavestajne-sluzbe`
- `/obavestajni-izvori/spijunske-aktivnosti-ne-jenjavaju-u-evropi`
- `/obavestajni-izvori/kazakstan-spijun`
- `/obavestajni-izvori/nemacka-curenje-informacija`
- `/obavestajni-izvori/prvi-brifing`
- `/srbija/srbija-bez-republike-moze-li-se-obnoviti-drzava-posle-cetrnaest-godina-vlasti-sns-a`
- `/srbija/posle-slavije-vlast-ulazi-u-fazu-politicke-nervoze`
- `/srbija/potpuni-slom-vuciceve-medjunarodne-reputacije`
- `/srbija/izbori-rezultati`
- `/srbija/lokalni-izbori-analiza`
- `/srbija/akademija-novisad`
- `/nasa-planeta/ko-ce-ugasiti-zvezde-astronomi-upozoravaju-da-bi-17-miliona-satelita-moglo-trajno-da-promeni-nocno-nebo`
- `/nasa-planeta/vise-od-1100-strucnjaka-iz-vodecih-ai-kompanija-trazi-usporavanje-razvoja-vestacke-inteligencije`
- `/nasa-planeta/revolucija-u-borbi-protiv-raka-crispr-koji-ne-popravlja-gene-vec-unistava-celije-tumora`
- `/nasa-planeta/planeta-ostaje-bez-daha-kiseonik-nestaje-iz-okeana-jezera-i-reka`
- `/nasa-planeta/pol-makartni-sa-rolingstonsima-na-novom-albumu-koji-izlazi-10-jula`
- `/nasa-planeta/jedno-od-sedam-svetskih-cuda-ponovo-otkriva-svoje-tajne-aleksandrijski-svetionik-izrasta-iz-mora`
- `/nasa-planeta/anthropic-upozorava-da-li-razvoj-vestacke-inteligencije-postaje-brzi-od-nase-sposobnosti-da-je-kontrolisemo`
- `/nasa-planeta/hiljade-vespi-preplavile-rim-povodom-80-godina-italijanske-ikone`
- `/nasa-planeta/sta-kratki-video-snimci-rade-decjem-mozgu`
- `/nasa-planeta/zasto-ljudi-veruju-lazima`
- `/nasa-planeta/prvi-korak-ka-svetu-bez-naslednih-bolesti`
- `/nasa-planeta/nvidia-ulazi-u-globalnu-trku-za-humanoidne-robote`
- `/nasa-planeta/nasa-anounce`
- `/nasa-planeta/nasa-predstavila-posadu-artemis-iii`
- `/nasa-planeta/trump-otvorio-ufo-arhive`
- `/nasa-planeta/homerova-ilijada-pronadjena-u-egipatskoj-mumiji`
- `/nasa-planeta/spilberg-upozorava-holivud-publika-trazi-originalne-filmove`
- `/nasa-planeta/umetnost-koja-dise-teamlab-tokio`
- `/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina`
- `/nasa-planeta/artemis-live`
- `/nasa-planeta/moon-ring`
- `/nasa-planeta/najtoplija-decenija-planeta-un`
- `/nasa-planeta/mars-reka`
- `/nasa-planeta/na-marsu-otkrivene-molekule-povezane-sa-poreklom-zivota`
- `/nasa-planeta/ai-superaplikacija`
- `/nasa-planeta/psihologija-dosada`

---

## Status nakon automatskog arhiviranja — 17. oktobar 2026.

**Ovaj odeljak ažurira početno stanje prikazano iznad.** Prethodna brojka od 85 neindeksiranih ruta bila je rezultat starog statičkog sistema, pre generatora.

- Novi `scripts/generate-archive-index.mjs` skenira **157 ruta članaka** pri izgradnji sajta.
- Iz izvornog koda direktno izvučeno je **146 arhivskih zapisa** sa potvrđenim datumom (ili eksplicitno navedenim mesecom), naslovom i originalnom vezom.
- Pregledani izvorni meseci: februar 1, mart 36, april 25, maj 16, jun 28, jul 9, avgust 10, septembar 10, oktobar 11.
- Brojevi se odnose **samo na automatski izvučene izvore**; postojeći SEO i urednički registri dodatno popunjavaju arhivu, uz prioritet već odobrenih zapisa.
- `/nasa-planeta/artemis-live` predstavlja arhivsku navigacionu stranicu, ne pojedinačnu vest, te se namerno ne dodeljuje jednom datumu.
- Preostale oznake za pregled uključuju stare tekstove sa datumom u posebnim registrima i članke bez odgovarajuće fotografije. Kada slike nema, koristi se tipografska kartica, ne tuđa ili proizvoljna fotografija.
- Članak o izložbi teamLab ima potvrđen samo **april 2026.** i uvrštava se u taj mesec bez izmišljanja dana.
- Popravljena je obrada istorijske putanje do CRISPR fotografije koja sadrži razmake u nazivu fajla.
- Pet rubrika je sačuvano, uključujući `Kultura`, i mesečna izdanja koriste originalne URL adrese tekstova.

### Preostale obavezne provere pre spajanja

1. Vizuelna provera fotografija i naslovnica na telefonu, posebno rezolucije septembarske korice.
2. Provera svakog izuzetka iz `shared/archiveExtracted.report.json` nastalog prilikom izgradnje.
3. Uporedna provera sa postojećim SEO registrima da se ne mešaju datum događaja i datum objavljivanja.
4. Hronološki redosled u svakoj rubrici; tekst sa samo mesecom poznatim ne treba lažno datirati na prvi dan u mesecu.
5. Test navigacije, pretrage, deljenja, povratka iz članka i pravila rotacije naslovne pri komandi OBJAVA.

**Zaštita produkcije:** sve izmene su i dalje na izolovanoj grani `feature/novi-talas-magazine-experience-20261017`; postojeći `main` nije zamenjen.
