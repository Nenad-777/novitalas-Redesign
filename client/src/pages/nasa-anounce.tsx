import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/nasa-anounce.jpg";

const PARAGRAPHS = [
  "NASA je zvanično najavila prošireni program lunarnih misija koji predviđa uspostavljanje trajne baze na Mesecu do kraja decenije. Prema saopštenju svemirske agencije, program obuhvata seriju posadnih i robotskih misija koje bi postepeno izgradile infrastrukturu neophodnu za dugotrajni boravak astronauta na lunarnoj površini.",
  "Centralna tačka novog plana je izgradnja Lunarne kapije — svemirske stanice na lunarnoj orbiti koja bi služila kao međustanica za misije ka površini Meseca. Kapija bi bila polazna tačka za rotaciju posada, logistiku i naučne eksperimente, a u kasnijoj fazi i za misije prema Marsu.",
  "NASA-ini zvaničnici naglasili su da trajni boravak na Mesecu nije više pitanje nauke već strateški cilj. Pristup lunarnim resursima, posebno ledu vode otkrivenom u polarnim kraterima, otvara mogućnost proizvodnje goriva i kiseonika direktno na Mesecu, što bi drastično smanjilo troškove budućih dubokih svemirskih misija.",
  "Pored Artemis programa koji je već uspešno okončao prvu misiju sa ljudskom posadom od 1972. godine, NASA planira i niz specijalizovanih misija za kartografisanje lunarnog terena, testiranje građevinskih tehnologija u vakuumu i bez gravitacije, kao i razvoj sistema za ekstrakciju vode.",
  "Međunarodna dimenzija programa nije zanemarena: NASA je potvrdila nastavak saradnje sa Evropskom svemirskom agencijom, Japanskom svemirskom agencijom JAXA i Kanadskom svemirskom agencijom, koje će doprineti ključnim segmentima izgradnje Lunarne kapije i opremanja površinske baze.",
  "Kritičari upozoravaju na ambicioznost rokova i visoke troškove programa, koji se procenjuju na više stotina milijardi dolara tokom narednih petnaest godina. Međutim, NASA i podržavajući kongresmeni ističu da geopolitička konkurencija u svemiru, posebno kineske ambicije ka Mesecu, čini ovaj program pitanjem nacionalnog i strateškog interesa.",
  "Prva od novih misija planirana je za 2027. godinu i predviđa kraći boravak posade na lunarnoj površini u privremenom modularnom habitatu. Trajni objekat, koji bi omogućio višemesečni boravak, očekuje se do 2031. godine.",
];

export default function NasaAnounce() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/nasa-anounce"
      sectionLabel="Naša planeta"
      title="NASA najavila nove misije ka Mesecu i plan trajne baze"
      dateLabel="28. MAJ 2026."
      authorLabel="Novi Talas"
      deck="Američka svemirska agencija predstavila je detaljan plan izgradnje trajne baze na Mesecu, uz seriju novih posadnih misija koje bi postepeno izgradile lunarnu infrastrukturu."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
