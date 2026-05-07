import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/washington-cia.jpg";

const PARAGRAPHS = [
  "Američka obaveštajna procena dostavljena Beloj kući zaključuje da Iran može da izdrži američku pomorsku blokadu najmanje tri do četiri meseca pre nego što se suoči sa težim ekonomskim posledicama. Prema izveštaju Washington Posta, ta procena dovodi u pitanje optimistične tvrdnje predsednika Donalda Trumpa da je iranska ekonomija pred brzim slomom i da je vojni pritisak već ozbiljno oslabio kapacitete Teherana.",
  "Isti izveštaj navodi da Iran i dalje raspolaže značajnim delom predratnog arsenala, uključujući oko 70 odsto zaliha raketa i oko 75 odsto mobilnih lansera. Teheran je, prema navodima američkih zvaničnika, obnovio deo podzemnih skladišta, popravio deo oštećenih raketa i zadržao sposobnost da koristi dronove i pretnju tankerima kao sredstvo pritiska na Ormuski moreuz.",
  "To znači da se američka strategija suočava sa problemom vremena. Ako blokada ne donese brzi politički rezultat, ona prestaje da bude instrument pritiska i postaje rat izdržljivosti. Iran ne mora da pobedi američku mornaricu; dovoljno je da održi neizvesnost oko plovidbe, osiguranja tankera i cene energije. U takvoj krizi, i jedan dron može biti dovoljan da tržišta poveruju da moreuz nije bezbedan.",
  "Zato evropske inicijative za otvaranje Ormuza dobijaju dodatnu težinu. Ako američki pritisak ne može sam da proizvede rešenje, tada diplomatija ponovo postaje strateški instrument, a ne samo prateći dekor vojne sile. Ormuz se tako pretvara u test ne samo američke moći, već i sposobnosti sveta da zaštiti ključne prolaze globalne ekonomije pre nego što blokada preraste u dugotrajnu krizu energije, savezništava i političke volje.",
];

export default function AmerickeSluzbeIranMozeDaIzdrziBlokaduOrmuza() {
  return (
    <ArticleTemplate
      path="/geopolitika/americke-sluzbe-iran-moze-da-izdrzi-blokadu-ormuza"
      sectionLabel="Geopolitika"
      title="Američke službe upozoravaju: Iran može da izdrži blokadu Ormuza mesecima"
      dateLabel="7. maj 2026."
      authorLabel="Novi Talas"
      deck="Procena američke obaveštajne zajednice dovodi u pitanje tvrdnje Bele kuće da je Teheran blizu sloma. Iran, prema tim procenama, i dalje raspolaže značajnim raketnim i dronovskim kapacitetima, dok se kriza oko Ormuskog moreuza sve jasnije pretvara u rat izdržljivosti."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija američke obaveštajne procene i Ormuskog moreuza"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
