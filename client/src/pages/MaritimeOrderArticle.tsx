import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/geopolitika/poredak-koji-je-drzao-svet-na-okupu-pocinje-da-puca";

const PARAGRAPHS = [
  "Gotovo sve što savremeni svet proizvodi, kupuje ili troši u nekom trenutku zavisi od mora. Energenti, žitarice, rude, automobili, računari i milioni drugih proizvoda kreću se sistemom koji većina ljudi gotovo nikada ne vidi. Više od 80 odsto svetske trgovine po obimu prevozi se morem. Decenijama je taj sistem počivao na pretpostavci da politički sukobi mogu da potresaju kopno, ali da međunarodni trgovački putevi moraju ostati relativno otvoreni, predvidljivi i uređeni zajedničkim pravilima.",
  "Sada grupa od 18 velikih pomorskih država upozorava da se upravo ta pretpostavka kruni. Consultative Shipping Group, u kojoj su Belgija, Kanada, Danska, Finska, Francuska, Nemačka, Grčka, Italija, Japan, Južna Koreja, Holandija, Norveška, Poljska, Portugal, Singapur, Španija, Švedska i Ujedinjeno Kraljevstvo, 8. septembra je objavila retko zajedničko upozorenje. Prema grupi, ratovi, sankcije, sporne interpretacije pomorskog prava i politička borba za strateške prolaze više nisu niz odvojenih incidenata, već znaci strukturne promene u okruženju globalne trgovine.",
  "Najvidljiviji simbol te promene su takozvane flote iz senke. Reč je pre svega o tankerima koji prevoze sankcionisanu robu izvan tradicionalnog sistema zapadnog osiguranja, finansiranja i transparentnog vlasništva. Financial Times navodi procene prema kojima takvom paralelnom tržištu pripada više od 1.500 tankera. Mnogi od njih često menjaju zastave, vlasničke strukture i registracije, a deo posluje bez standardnog osiguranja koje je decenijama bilo jedan od temelja odgovornosti na moru.",
  "Problem, međutim, nije samo u Rusiji, Iranu ili sankcijama. Sve jasnije se pojavljuju dva paralelna pomorska sveta: jedan koji se oslanja na postojeća pravila Međunarodne pomorske organizacije, transparentno vlasništvo i priznate osiguravače, i drugi koji pokušava da funkcioniše izvan tog sistema. Što je drugi veći, to je teže utvrditi ko je odgovoran kada dođe do sudara, izlivanja nafte, havarije ili političkog spora.",
  "A onda dolaze moreuzi. Hormuz je jedan od najboljih primera koliko je globalizacija fizički ranjiva. Uska morska vrata između Irana i Omana ostaju jedan od ključnih energetskih prolaza planete. Ove nedelje saobraćaj je ponovo usporio nakon iranskih pretnji odmazdom na nove američke napade. Prema podacima koje prenosi Reuters, broj trgovačkih plovila kroz moreuz ostao je znatno ispod uobičajenih nivoa, dok su procene rizika i troškovi transporta porasli.",
  "Ista logika vidi se i drugde. Crveno more i Bab el Mandeb postali su prostor napada na trgovačke brodove. Crno more je istovremeno trgovački pravac i ratna zona. Panamski kanal je tokom prethodnih godina pokazao da čak i suša može da postane geopolitički faktor kada ograniči broj plovila koja mogu da prođu. Ono što je nekada izgledalo kao neutralna infrastruktura globalizacije sve češće postaje sredstvo pritiska.",
  "Tu se možda nalazi stvarni značaj upozorenja pomorskih država. Posleratna globalizacija nije počivala samo na trgovinskim sporazumima, kontejnerima i jeftinoj proizvodnji. Počivala je na poverenju da brod koji krene iz Šangaja, Roterdama ili Dubaija neće na svakoj strateškoj tački morati iznova da pita ko kontroliše prolaz, kojoj geopolitičkoj grupi pripada njegov vlasnik i da li će njegovo osiguranje biti priznato na sledećem delu puta.",
  "Ako ta pretpostavka nestane, svet neće prestati da trguje. Ali trgovina postaje skuplja, sporija i politički podeljenija. Brodovi menjaju rute, osiguranje poskupljuje, kompanije stvaraju veće zalihe, a države pokušavaju da preuzmu veću kontrolu nad lukama, lancima snabdevanja i strateškim sirovinama.",
  "UN Trade and Development upozorava da takvi poremećaji posebno pogađaju mala i srednja preduzeća. Ona čine oko 90 odsto kompanija u svetu i obezbeđuju oko 70 odsto zaposlenosti, ali imaju mnogo manje prostora od velikih korporacija da promene dobavljača, rutu, izvor finansiranja ili apsorbuju nagli rast troškova transporta i osiguranja. Kada takve firme ispadnu iz međunarodnih lanaca snabdevanja, oporavak ukupne trgovine može da prikrije mnogo koncentrisaniju ekonomiju.",
  "Zato ovo nije vest samo za vlasnike brodova. Ako se na morima zaista učvršćuje svet paralelnih pravila, pred nama nije samo kriza pomorskog saobraćaja. To je simptom šire transformacije međunarodnog poretka: prelaska iz sistema u kojem se očekivalo da zajednička pravila važe čak i među suparnicima, u sistem u kojem velike sile sve češće grade sopstvene trgovačke, finansijske, tehnološke i energetske zone.",
  "Svet možda još nije deglobalizovan. Ali njegovi okeani više nisu onoliko neutralni koliko smo navikli da verujemo.",
  "Izvori: Consultative Shipping Group, Financial Times, Reuters, Lloyd's List i UN Trade and Development, 8. septembar 2026.",
];

export default function MaritimeOrderArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Svet · Analiza"
      title="Poredak koji je držao svet na okupu počinje da puca"
      dateLabel="8. SEPTEMBAR 2026."
      deck="Osamnaest velikih pomorskih država upozorava da ratovi, sankcije, flote iz senke i borba za ključne moreuze više nisu prolazni poremećaji. Počinje da se menja sistem po kojem su svetska mora funkcionisala decenijama."
      imageSrc="/news/pomorski-poredak-2026.jpg"
      imageAlt="Veliki trgovački brodovi prolaze kroz uski morski prolaz u sumrak."
      imageCredit="Ilustracija: Novi Talas"
      imageFirst={true}
      imageHeightClass="h-auto"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
