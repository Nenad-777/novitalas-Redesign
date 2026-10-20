import ArticleTemplate from "@/components/ArticleTemplate";

const paragraphs = [
  "Izbori u Srbiji biće održani 25. oktobra, ali međunarodni posmatrači već nedeljama analiziraju uslove u kojima se odvija kampanja.",
  "Delegacija Parlamentarne skupštine Saveta Evrope saopštila je 14. oktobra da se izbori pripremaju u izrazito polarizovanoj atmosferi. Posebnu zabrinutost izazvale su prijave pritisaka i nadzora nad političkim protivnicima, novinarima i predstavnicima civilnog društva, kao i nedovoljno sprovedene preporuke za unapređenje izbornog zakonodavstva.",
  "Jedno od najozbiljnijih upozorenja odnosi se na dijasporu. Ograničen broj biračkih mesta i pravila prema kojima će pojedini građani morati da glasaju tokom noći mogli bi, prema oceni Saveta Evrope, značajnom broju državljana Srbije otežati ostvarivanje biračkog prava.",
  "OEBS/ODIHR je u Srbiju rasporedio dugoročne posmatrače, a za izborni dan planirano je angažovanje još 300 kratkoročnih posmatrača. Njima se pridružuju predstavnici parlamentarnih skupština OEBS-a i Saveta Evrope, kao i Evropskog parlamenta.",
  "Njihova pažnja neće biti usmerena samo na brojanje glasova, već i na medije, finansiranje kampanje, rad institucija i postupanje po izbornim prigovorima.",
  "Prva zajednička međunarodna ocena očekuje se 26. oktobra u 15 časova. Ona neće automatski odlučivati o priznavanju rezultata, ali bi mogla imati značajnu političku i diplomatsku težinu.",
  "Međunarodni posmatrači još ne znaju kakav će biti ishod izbora u Srbiji. Ali već su dokumentovali razloge zbog kojih će način njihovog održavanja biti pod posebnom pažnjom.",
  "Izvori: Parlamentarna skupština Saveta Evrope, 14. oktobar 2026; OEBS/ODIHR, septembar–oktobar 2026; Parlamentarna skupština OEBS-a, 15. oktobar 2026."
];

export default function MedjunarodniPosmatraciArticle() {
  return <ArticleTemplate path="/srbija/sta-medjunarodni-posmatraci-vec-znaju-o-izborima-u-srbiji" sectionLabel="Srbija · Izbori" title="Šta međunarodni posmatrači već znaju o izborima u Srbiji?" dateLabel="20. OKTOBAR 2026." authorLabel="Novi Talas" deck="Pet dana pred parlamentarne izbore, međunarodne institucije već upozoravaju na ozbiljne probleme u izbornom procesu. Savet Evrope ukazuje na neravnopravne uslove, političke pritiske i rizik da deo dijaspore ostane bez mogućnosti glasanja. Prva zajednička međunarodna ocena očekuje se 26. oktobra." imageSrc="/news/medjunarodni-posmatraci-izbori-2026-10-20.jpg" imageAlt="Minimalistička digitalna mapa Evrope sa Srbijom označenom zlatnom bojom i tankim svetlosnim linijama." imageFirst={true} imageHeightClass="h-auto" paragraphs={paragraphs} backHref="/srbija" backLabel="← Nazad na Srbiju" />;
}
