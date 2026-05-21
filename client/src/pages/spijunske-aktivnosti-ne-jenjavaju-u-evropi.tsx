/*
 * Špijunske aktivnosti ne jenjavaju u Evropi
 * Obaveštajni izvori — 21. maj 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/germany-police.jpg";

const PARAGRAPHS = [
  "Evropske bezbednosne službe beleže kontinuiran porast obaveštajnih aktivnosti stranih država na tlu kontinenta. Nemačka, kao ekonomski i politički centar Evropske unije, posebno je izložena naporima koji dolaze iz Kine i Rusije, a domaće agencije upozoravaju da se pritisak ne smanjuje ni u periodima diplomatske smirenosti.",

  "Savezni ured za zaštitu ustavnog poretka (BfV) u godišnjim izveštajima navodi da kineske obaveštajne operacije u Nemačkoj pokrivaju nekoliko prioritetnih oblasti: tehnološku industrijsku špijunažu, praćenje kineske dijaspore i azilanata, infiltraciju u akademske i istraživačke institucije, kao i prikupljanje podataka o vojnoj infrastrukturi i logistici. Posebno je naglašen pritisak na kompanije koje razvijaju napredne čipove, robotiku i veštačku inteligenciju.",

  "U protekloj godini nemačka policija i kontraobaveštajne strukture pokrenule su više istraga vezanih za kineske mreže. Nekoliko slučajeva završilo je optužnicama, a deo je i dalje u fazi prikupljanja dokaza. Zajednički imenilac u gotovo svim slučajevima jeste upotreba legalnih poslovnih kontakata i akademskih razmena kao pokrova za prikupljanje osetljivih podataka.",

  "Šef BfV-a Thomas Haldenwang više je puta javno upozorio da su kineski i ruski obaveštajni aparat razvili sofisticirane metode koje kombinuju digitalne i fizičke operacije. Dok Rusija dominantno deluje kroz hakovanje, dezinformacije i regrutovanje agenata sa istorijskim vezama sa Moskvom, Kina se oslanja na dugoročno umrežavanje, postepeno izgrađivanje poverenja i prikupljanje naizgled bezopasnih parcijalnih informacija čija vrednost postaje jasna tek u sklopu šire slike.",

  "Slični trendovi evidentni su i u susednim zemljama. Francuska kontraobaveštajna agencija DGSI zabeležila je povećanje broja operacija usmerenih ka odbrambenim dobavljačima i istraživačkim centrima. Belgija, kao sedište EU i NATO-a, suočava se sa posebno intenzivnim pritiskom diplomatskih i paradiplomaskih kanala. Nordijske zemlje beleže porast aktivnosti koji prethodi svakom ciklusu NATO proširenja ili pregovorima o infrastrukturnim projektima.",

  "Stručnjaci upozoravaju da odgovor mora biti sveobuhvatan i koordinisan. Nacionalne agencije sve intenzivnije sarađuju kroz forume poput Kluba Bern i bilateralne sporazume o razmeni operativnih informacija. Paralelno se jača zakonodavni okvir, a kompanije u strateškim sektorima prolaze obuke za prepoznavanje pokušaja regrutovanja i krađe podataka.",

  "Poruka koja dolazi iz evropskih bezbednosnih krugova je jasna: obaveštajni rat nije stvar hladnog rata ni daleke prošlosti. On se vodi svakodnevno, u poslovnim parkovima, na univerzitetskim hodnicima i u diplomatskim salama, daleko od reflektora javnosti.",
];

export default function SpijunskeAktivnostiNeJenjavajuUEvropi() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/spijunske-aktivnosti-ne-jenjavaju-u-evropi"
      sectionLabel="Obaveštajni izvori"
      title="Špijunske aktivnosti ne jenjavaju u Evropi"
      dateLabel="21. MAJ 2026."
      deck="Evropske kontraobaveštajne službe beleže kontinuiran rast stranih operacija na tlu kontinenta. Nemačka je posebno izložena kineskim i ruskim naporima usmerenim ka industrijskim tajnama, vojnoj logistici i akademskim institucijama."
      imageSrc={IMAGE_SRC}
      imageAlt="Nemačka policija na ulicama — pojačane bezbednosne mere zbog obaveštajnih pretnji"
      imageCredit="Foto: ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
