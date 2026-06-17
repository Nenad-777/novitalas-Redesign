import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Lideri najrazvijenijih zapadnih ekonomija pružili su podršku sporazumu između Sjedinjenih Američkih Država i Irana kojim je zaustavljena najnovija eskalacija sukoba u Persijskom zalivu. Iako je dogovor dočekan kao značajan diplomatski uspeh, brojni analitičari upozoravaju da ostaju otvorena pitanja koja će odrediti da li je reč o trajnom zaokretu ili tek privremenom predahu.",
  "Na samitu G7 dominirala je zabrinutost zbog posledica koje je nedavni sukob imao po globalnu ekonomiju, energetska tržišta i bezbednost međunarodne plovidbe. Posebna pažnja posvećena je Ormuskom moreuzu, jednom od najvažnijih svetskih pomorskih koridora kroz koji prolazi značajan deo globalne trgovine naftom i gasom.",
  "Zajednička podrška sporazumu između Vašingtona i Teherana predstavlja pokušaj da se region vrati političkom dijalogu nakon perioda ozbiljne vojne konfrontacije. Lideri G7 ocenili su da bi smirivanje tenzija moglo doprineti stabilizaciji energetskih tržišta i smanjenju rizika od novih poremećaja u globalnim lancima snabdevanja.",
  "Sporazum predviđa prekid neprijateljstava i nastavak pregovora o ključnim bezbednosnim pitanjima, uključujući budućnost iranskog nuklearnog programa i bezbednost plovidbe u Persijskom zalivu. Upravo će ti pregovori predstavljati najveći test održivosti postignutog dogovora.",
  "Ipak, uprkos optimističnim tonovima koji su se mogli čuti nakon samita, među zapadnim saveznicima ne postoji potpuno jedinstvo u proceni budućih odnosa sa Iranom. Dok pojedine evropske države zagovaraju postepenu normalizaciju odnosa kroz diplomatske i ekonomske kanale, deo političkog spektra u Sjedinjenim Državama i dalje zastupa tvrđi pristup prema Teheranu.",
  "Dodatnu neizvesnost unose i izjave američkog predsednika Donalda Trumpa, koji je poručio da će budućnost sporazuma zavisiti od toga da li Iran bude poštovao preuzete obaveze. Takve poruke pokazuju da, uprkos postignutom dogovoru, poverenje između dve strane ostaje ograničeno.",
  "Za zemlje Evropske unije stabilizacija Bliskog istoka ima poseban značaj. Rat u regionu tokom prethodnih meseci izazvao je rast cena energenata, povećao troškove transporta i pojačao strahovanja od novih migrantskih talasa. Zbog toga evropske vlade sporazum posmatraju ne samo kao bezbednosno, već i kao važno ekonomsko pitanje.",
  "U širem geopolitičkom kontekstu, podrška G7 predstavlja signal da vodeće zapadne sile žele da spreče dalje širenje nestabilnosti u regionu koji već decenijama ostaje jedno od ključnih žarišta svetske politike. Međutim, iskustvo prethodnih mirovnih inicijativa pokazuje da formalni sporazumi sami po sebi ne garantuju dugoročnu stabilnost.",
  "Da li će najnoviji dogovor između SAD i Irana postati temelj novog bezbednosnog poretka na Bliskom istoku ili samo kratka pauza između dve krize, zavisiće od spremnosti obe strane da političke obaveze pretoče u konkretne poteze na terenu. Upravo zato naredni meseci mogli bi biti presudni za budućnost čitavog regiona.",
];

export default function G7UsIranAgreementArticle() {
  return (
    <ArticleTemplate
      path="/geopolitika/g7-podrzala-sporazum-sad-iran"
      sectionLabel="Geopolitika"
      title="G7 podržala sporazum SAD i Irana: otvara li se put ka trajnoj stabilizaciji Bliskog istoka?"
      dateLabel="17. jun 2026."
      deck="Lideri G7 podržali su sporazum Vašingtona i Teherana kojim je zaustavljena najnovija eskalacija u Persijskom zalivu, ali ostaje neizvesno da li dogovor može prerasti u trajniju stabilizaciju Bliskog istoka."
      imageSrc="/news/g7-supports-us-iran-deal.jpg"
      imageAlt="Minimalist editorial illustration of G7 support for a US-Iran agreement, with a stylized Middle East map and summit table"
      imageCredit="AI generated illustration / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
