import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Venecijansko bijenale, najstarija i jedna od najvažnijih svetskih smotri savremene umetnosti, ušlo je u krizu nekoliko dana pre otvaranja. Međunarodni žiri 61. izdanja podneo je kolektivnu ostavku posle spora oko učešća Rusije i Izraela u konkurenciji za nagrade. Žiri je prethodno zauzeo stav da ne želi da dodeljuje priznanja umetnicima iz zemalja čiji se lideri suočavaju sa optužbama pred Međunarodnim krivičnim sudom, što je protumačeno kao odluka koja se odnosi na Rusiju i Izrael.",
  "Organizatori Bijenala nisu prihvatili takav pristup. Fondacija je potvrdila ostavku žirija, ali je istovremeno branila princip otvorenog učešća, uz obrazloženje da Bijenale ne treba da isključuje države koje Italija priznaje. U nedostatku žirija, tradicionalni sistem dodele nagrada je promenjen, a organizatori su najavili da će deo priznanja biti prepušten publici.",
  "Naizgled, reč je o institucionalnoj krizi jednog velikog umetničkog događaja. U suštini, Venecija je postala mesto na kome se sudaraju tri pitanja: sloboda umetnosti, moralna odgovornost institucija i činjenica da nacionalni paviljoni na Bijenalu nikada nisu samo umetnički prostor. Oni su i kulturna diplomatija, produžetak državnog predstavljanja, tiha borba za ugled, prisustvo i pravo da se bude viđen.",
  "Zato je pitanje oštrije nego što izgleda: da li je smisleno umetnosti postavljati granice?",
  "Ako se umetniku zatvore vrata zbog države iz koje dolazi, da li je to moralni stav ili kolektivna kazna? Ako se vrata ne zatvore, da li umetnička institucija brani slobodu stvaranja ili se pravi da ne vidi ratove, razaranja i optužbe koje prate zvanične države učesnice? I ko uopšte ima pravo da presudi gde prestaje umetnik, a počinje zastava pod kojom nastupa?",
  "Rusija se u Veneciju vraća posle izostanka sa prethodnih izdanja nakon početka invazije na Ukrajinu. Njeno prisustvo izazvalo je oštre reakcije ukrajinskih predstavnika, dela evropske javnosti i političkih krugova u Italiji i Evropskoj uniji. Prema izveštajima svetskih medija, Evropska komisija je zbog ruskog učešća dovela u pitanje finansijsku podršku Bijenalu, dok je italijanski ministar kulture najavio bojkot događaja.",
  "Izrael je druga tačka spora. Njegovo učešće dolazi u trenutku kada se rat u Gazi i posledice tog rata nalaze u središtu svetskih političkih i moralnih rasprava. Umetničke institucije širom sveta već mesecima se suočavaju sa pritiscima, peticijama, bojkotima i optužbama da ili ćute pred patnjom, ili kažnjavaju umetnike zbog odluka vlada. Venecijansko bijenale sada je samo najvidljiviji primer tog šireg loma.",
  "Umetnost je oduvek želela da pređe granice. Države su, s druge strane, oduvek želele da je koriste kao dokaz sopstvene civilizovanosti. Zato su međunarodne izložbe složeni prostori: na njima umetnik govori svojim jezikom, ali se njegovo delo često izlaže pod nacionalnim imenom, u nacionalnom paviljonu, u trenutku kada svet tu naciju gleda kroz rat, sankcije, optužbe ili diplomatske saveze.",
  "Tu nastaje nelagodnost. Jer umetnik nije ministar. Nije general. Nije predsednik. Ali na velikim manifestacijama on neretko nosi teret države, čak i onda kada je njegov rad možda upravo kritika te države. Umetnost, koja bi trebalo da otvara prostor za složenost, biva gurnuta u logiku političkog svrstavanja: za ili protiv, dozvoljeno ili nedozvoljeno, nagradivo ili nenagradivo.",
  "Odluka žirija da se povuče zato nije samo protest. To je priznanje da stari mehanizam više ne funkcioniše mirno. Nekada se verovalo da umetničke institucije mogu da izdrže pritisak politike tako što će ostati iznad nje. Danas se od njih traži suprotno: da pokažu stav, da povuku liniju, da odluče ko sme da bude u konkurenciji, a ko više ne može da bude tretiran kao deo istog kulturnog sveta.",
  "Ali svaka povučena linija nosi opasnost. Ako umetnosti postavimo granice po meri trenutne politike, rizikujemo da umetnička dela pretvorimo u produžetak diplomatskih odluka. Ako granice nikada ne postavimo, rizikujemo da veliki kulturni događaji postanu utočište za simboličko pranje državne moći. Između ta dva rizika nema jednostavnog rešenja.",
  "Venecija je ovim slučajem otvorila staro, ali nikad do kraja rešeno pitanje: da li se na međunarodnoj umetničkoj sceni predstavljaju umetnici, države ili politički trenutak iz koga dolaze. Kada se ratovi produže, kada optužbe za ratne zločine postanu deo diplomatske svakodnevice, a kulturne institucije postanu mesta pritiska, ni najstarije umetničke manifestacije više ne mogu da se ponašaju kao da izlažu u praznom prostoru.",
  "Zato ova kriza neće ostati samo venecijanska. Ona najavljuje novo vreme u kome će se od muzeja, festivala, bijenala i velikih kulturnih institucija sve češće tražiti da odgovore na pitanje na koje umetnost nikada nije volela da odgovara jednostavno: kome pripada delo kada svet oko njega traži presudu?",
  "Možda je najveća vrednost umetnosti upravo u tome što ne pristaje lako na granice. Ali savremeni svet, očigledno, sve češće od nje traži da ih prizna. Venecijansko bijenale je zato postalo više od izložbe: postalo je ogledalo trenutka u kome ni lepota, ni ideja, ni stvaralaštvo više ne mogu potpuno da pobegnu od istorije koja kuca na vrata paviljona.",
];

export default function VenecijanskoBijenaleZiriOstavkaUmetnostGranice() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/venecijansko-bijenale-ziri-ostavka-umetnost-granice"
      sectionLabel="KULTURA"
      title="Može li se zabraniti umetnost zbog države iz koje dolazi?"
      dateLabel="1. MAJ 2026."
      deck="Ostavka međunarodnog žirija Venecijanskog bijenala, nekoliko dana pre otvaranja izložbe, otvorila je pitanje koje prevazilazi jedan kulturni događaj: da li umetnost treba da ostane prostor bez granica, ili se od nje danas traži da potvrdi granice koje politika povlači."
      imageSrc="/news/venice-biennale-arsenale-2024.jpg"
      imageAlt="Izložbeni prostor Arsenala tokom 60. Venecijanskog bijenala 2024."
      imageCredit="Izložbeni prostor Arsenala tokom 60. Venecijanskog bijenala 2024. Foto: Jennifer 8. Lee / Wikimedia Commons, CC BY-SA 4.0"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
