import ArticleTemplate from "@/components/ArticleTemplate";

export default function DzudiDencArticle() {
  return <ArticleTemplate
    path={"/kultura/na-kraju-jedne-velicanstvene-karijere-dzudi-denc"}
    sectionLabel={"Kultura · Pozorište"}
    title={"Na kraju jedne veličanstvene karijere"}
    dateLabel={"22. OKTOBAR 2026."}
    authorLabel={"Novi Talas"}
    deck={"Džudi Denč godinama je učila tekst slušajući prijatelje. Sada kaže da više ne može na scenu. Šekspirove stihove i dalje nosi u pamćenju."}
    imageSrc={"/news/dzudi-denc-paladium-2023.jpg"}
    imageAlt={"Džudi Denč na sceni londonskog Paladijuma, pod svetlom reflektora, 5. marta 2023."}
    imageHeightClass={"h-auto"}
    imageObjectFit={"contain"}
    backHref={"/kultura"}
    backLabel={"← Nazad na Kulturu"}
    imageFirst={true}
    imageCredit={<>Foto: <a href="https://commons.wikimedia.org/wiki/File:GylesDamesPalladium050323_(28_of_74)_(52728573115).jpg">Raph_PH / Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</>}
    paragraphs={[
      "Džudi Denč izjavila je za BBC da joj je vid toliko oslabio da više ne može da igra u pozorištu, snima filmove ili čita. Glumica, koja ima 91 godinu, više od decenije živi sa makularnom degeneracijom. Danas joj teškoće stvara i prepoznavanje lica.",
      "Godinama je pronalazila načine da nastavi da radi. Kada više nije mogla da čita scenarije, prijatelji su joj pomagali da tekst uči slušanjem. Još 2023. govorila je da traži rešenje za duže uloge, oslanjajući se na pamćenje koje ju je služilo tokom karijere. U tom periodu iza nje su bili „Belfast“, za koji je dobila nominaciju za Oskara, i „Allelujah“. Njene današnje reči dolaze posle dugog nastojanja da sačuva mogućnost da radi posao kojem je posvetila život.",
      "Posebno mesto u tom životu zauzima Šekspir. U razgovoru je objasnila da sonete voli zbog jednostavnosti kojom izražavaju ono što ljudi osećaju. Ta veza ima i upečatljiv javni trag: u emisiji Grejema Nortona 2023. izgovorila je napamet Sonet 29. U njemu se osećanje odbačenosti i nezadovoljstva sopstvenom sudbinom preobražava kroz pomisao na voljenu osobu. U kontekstu njenih današnjih teškoća, taj nastup dobija dodatnu težinu: stihovi koje više ne može da pročita već su deo njenog glumačkog pamćenja.",
      "Jedan trag početaka tog pozorišnog života sačuvan je i u Beogradu. Tokom jugoslovenske turneje Old Vika 1959. godine, Stevan Kragujević fotografisao je mladu Džudi Denč sa Lorensom Olivijeom, Džonom Nevilom i Džozefom O’Konorom kod Spomenika Neznanom junaku na Avali. Između te fotografije i današnjeg razgovora staje gotovo sedam decenija. Zato njena izjava ima težinu veću od zdravstvene vesti: govori o trenutku kada umetnica mora da se prilagodi životu u kojem joj je rad na sceni postao nedostupan." ,
      { type: "image", src: "/news/dzudi-denc-avala-1959.jpg", alt: "Džudi Denč, Lorens Olivije, Džon Nevil i Džozef O’Konor na Avali tokom turneje Old Vika 1959.", heightClass: "h-auto", credit: <>Džudi Denč sa kolegama na Avali, 1959. Foto: <a href="https://commons.wikimedia.org/wiki/File:Stevan_Kragujevic,_Laurence_Olivier,_Judi_Dench,_John_Neville_and_Joseph_O%27Conor_in_Belgrade.JPG">Stevan Kragujević / Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by-sa/3.0/rs/">CC BY-SA 3.0 RS</a>. Verzija sa osvetljenjem prilagođenim na Wikimedia Commonsu.</> }
    ]}
  />;
}
