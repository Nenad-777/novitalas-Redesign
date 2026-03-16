import ArticleTemplate from "@/components/ArticleTemplate";

export default function SeloNePrastaPoraz() {
  return (
    <ArticleTemplate
      path="/srbija/selo-ne-prasta-poraz-vest"
      sectionLabel="Srbija"
      title="Selo ne prašta poraz"
      dateLabel="6. MART 2026."
      deck="Blokade puteva su završene, ali poljoprivrednici odlaze sa protesta bez dogovora sa državom, što otvara ozbiljno političko pitanje u zemlji čiju stabilnost vekovima nosi selo."
      imageSrc="/traktori-beograd.jpg"
      imageAlt="Kolona traktora na putu ka Beogradu"
      paragraphs={[
        "Posle više od tri nedelje blokada puteva širom Srbije, poljoprivrednici su uklonili traktore sa saobraćajnica i vratili se na svoja imanja kako bi započeli prolećne radove.",
        "Protesti su započeli zbog nezadovoljstva cenama poljoprivrednih proizvoda, visinom subvencija i politikom uvoza hrane. Tokom blokada traktori su se pojavili na magistralnim putevima širom zemlje.",
        "Iako su blokade završene, predstavnici udruženja poručuju da ključni zahtevi nisu rešeni i da je protest prekinut zbog početka radova na njivama, a ne zbog sporazuma sa državom.",
        "U političkoj logici to često predstavlja najosetljiviji trenutak za svaku vlast. Protest koji se završava dogovorom zatvara krizu. Protest koji se završava bez rešenja ostavlja otvoreno pitanje koje može ponovo da se pojavi.",
        "U istoriji Srbije više puta se pokazalo da trenutak kada selo odlazi nezadovoljno retko ostaje bez političkih posledica.",
      ]}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
