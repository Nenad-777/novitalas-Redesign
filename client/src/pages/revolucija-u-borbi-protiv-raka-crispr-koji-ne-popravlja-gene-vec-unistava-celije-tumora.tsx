import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/nasa-planeta/revolucija-u-borbi-protiv-raka-crispr-koji-ne-popravlja-gene-vec-unistava-celije-tumora";

const PARAGRAPHS = [
  "Napredak u genskoj medicini dugo je počivao na jednoj velikoj ideji: pronaći grešku u genetskom kodu i popraviti je. Nova generacija CRISPR sistema mogla bi, međutim, da promeni samu logiku tog pristupa.",
  "Umesto popravljanja gena u oboleloj ćeliji, istraživači ispituju mogućnost da se precizno prepozna opasna genetska promena i pokrene uništavanje ćelije koja je nosi. Takav pristup mogao bi da otvori novo poglavlje u borbi protiv raka — naročito kod tumora čije je mutacije teško ili nemoguće direktno ispraviti postojećim metodama.",
  {
    type: "heading" as const,
    text: "Od genetskih makaza do ćelijskog prekidača",
  },
  "CRISPR je javnosti najpoznatiji kao sistem „genetskih makaza“: molekularni alat koji može da pronađe određeni deo DNK, preseče ga i omogući njegovu izmenu. Ta tehnologija već je promenila biološka istraživanja i otvorila put prvim genskim terapijama.",
  "Novi pravac istraživanja ide korak dalje. Pojedini CRISPR sistemi, kada prepoznaju zadatu genetsku metu, ne deluju samo na jednu precizno određenu tačku. Njihova aktivacija može da izazove šire oštećenje genetskog materijala i dovede do smrti ćelije.",
  "U laboratorijskim uslovima to svojstvo može da se pretvori u prednost: sistem se programira tako da reaguje samo kada naiđe na molekularni znak karakterističan za obolelu ćeliju. Zdrave ćelije, koje taj znak nemaju, trebalo bi da ostanu pošteđene.",
  "Time CRISPR više ne bi služio isključivo za ispravljanje genetske greške. Postao bi i svojevrsni molekularni prekidač koji uklanja ćeliju u kojoj je prepoznata opasna promena.",
  {
    type: "heading" as const,
    text: "Zašto je ova ideja važna za lečenje raka",
  },
  "Rak nije jedna bolest, već velika grupa bolesti nastalih zbog različitih promena u genima koji regulišu rast, deobu i opstanak ćelija. Neke od tih promena moguće je napasti postojećim lekovima, dok su druge decenijama ostajale izvan domašaja medicine.",
  "Poseban problem predstavljaju mutacije koje podstiču nekontrolisano razmnožavanje ćelija, ali nemaju lako dostupnu strukturu za koju bi se lek mogao vezati. U takvim slučajevima nije dovoljno znati koja mutacija izaziva bolest — potrebno je pronaći način da se upravo ćelija sa tom mutacijom selektivno ukloni.",
  "Tu se nalazi najveći potencijal novog pristupa. Umesto pokušaja da se svaki oštećeni gen popravi ili blokira posebnim lekom, CRISPR sistem mogao bi da bude programiran da prepozna genetski potpis tumorske ćelije i aktivira njen mehanizam uništenja.",
  "U teoriji, takva terapija mogla bi da bude veoma precizna. Njena meta ne bi bila određena samo mestom na kojem se tumor nalazi već njegovim jedinstvenim molekularnim karakteristikama.",
  { type: "heading" as const, text: "Najveći izazov ostaje preciznost" },
  "Između uspešnog laboratorijskog eksperimenta i terapije koja se bezbedno koristi kod ljudi nalazi se veliki broj prepreka.",
  "Prva je način unošenja CRISPR sistema u organizam. Molekularni alat mora da stigne do dovoljnog broja tumorskih ćelija, a da pritom ne izazove neželjenu reakciju imunskog sistema i ne ošteti zdrava tkiva.",
  "Druga prepreka je sama raznolikost tumora. Ćelije unutar jednog tumora nisu uvek genetski identične. Terapija usmerena na jednu mutaciju mogla bi da uništi veliki deo tumora, ali da poštedi ćelije koje tu mutaciju nemaju.",
  "Treći izazov jeste kontrola aktivnosti sistema. Mehanizam koji može da izazove masovno oštećenje genetskog materijala mora biti izuzetno precizno usmeren. Svaka neželjena aktivacija u zdravoj ćeliji predstavljala bi ozbiljan bezbednosni rizik.",
  "Zbog toga će biti potrebna opsežna ispitivanja pre nego što se može govoriti o primeni kod pacijenata. Rezultati dobijeni na ćelijskim kulturama ili eksperimentalnim modelima ne znače automatski da će isti pristup biti efikasan i bezbedan u ljudskom organizmu.",
  { type: "heading" as const, text: "Nova paradigma precizne medicine" },
  "Uprkos ograničenjima, promena koju ova istraživanja nagoveštavaju mogla bi biti velika.",
  "Prva generacija precizne onkologije pokušavala je da pronađe lek za određenu mutaciju. Nova generacija mogla bi da programira biološki sistem koji tu mutaciju sam prepoznaje i uklanja ćeliju u kojoj se ona nalazi.",
  "To ne znači da će hemoterapija, radioterapija, hirurgija ili imunoterapija postati suvišne. Mnogo je verovatnije da bi se CRISPR pristupi jednog dana koristili zajedno sa postojećim metodama — kao dodatno oružje protiv tumora koji se vraćaju, razvijaju otpornost ili ne odgovaraju na standardno lečenje.",
  "Najveća promena možda neće biti u jednom konkretnom leku, već u načinu na koji se terapija osmišljava. Umesto univerzalnog napada na sve ćelije koje se brzo dele, lečenje bi se sve više zasnivalo na molekularnom identitetu svake bolesti.",
  {
    type: "heading" as const,
    text: "Oprez između naučnog proboja i kliničke primene",
  },
  "Istorija medicine puna je otkrića koja su u laboratoriji izgledala revolucionarno, ali nisu uspela da postanu bezbedne i delotvorne terapije. Zbog toga je važno razlikovati naučni potencijal od dokazane kliničke koristi.",
  "Nova istraživanja još ne predstavljaju lek protiv raka. Ona pokazuju da CRISPR može imati širu ulogu nego što se ranije pretpostavljalo — ne samo da menja genetski kod već i da selektivno uklanja ćelije na osnovu njihove genetske osobenosti.",
  "Ako istraživači uspeju da reše problem precizne isporuke, bezbednosti i raznolikosti tumora, ova tehnologija mogla bi da postane deo nove generacije personalizovanih terapija.",
  "Revolucija, dakle, još nije stigla u bolnice. Ali ideja koja je pokreće već menja granice mogućeg: umesto da pokušava da popravi svaku opasno izmenjenu ćeliju, medicina bi jednog dana mogla da je prepozna — i ukloni pre nego što bolest nastavi da se širi.",
];

export default function RevolucijaUBorbiProtivRakaCrisprArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Revolucija u borbi protiv raka: CRISPR koji ne popravlja gene, već uništava ćelije tumora"
      dateLabel="29. jul 2026."
      deck="Nova istraživanja otvaraju mogućnost da se CRISPR tehnologija koristi ne samo za ispravljanje gena već i za selektivno uništavanje obolelih ćelija. Iako je put do терапије за пацијенте још дуг, научници говоре о новом правцу у развоју прецизнијих метода лечења рака."
      imageSrc="/news/    crispr-cancer-therapy.jpg"
      imageAlt="Mikroskopska ilustracija tumorske ćelije koju napada precizno usmerena CRISPR terapija."
      imageCredit="Ilustracija: Novi talas"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
