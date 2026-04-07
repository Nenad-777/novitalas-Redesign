import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/harg-oil-terminal.jpg";

const PARAGRAPHS = [
  "Prema dostupnim izveštajima, Sjedinjene Američke Države izvele su udare na vojne ciljeve na ostrvu Harg, ključnom naftnom terminalu Irana u Persijskom zalivu. Ostrvo Harg predstavlja centralnu tačku za izvoz iranske nafte i jednu od najosetljivijih strateških tačaka u iranskoj energetskoj infrastrukturi.",
  "Prve informacije ukazuju da su meta bile vojne instalacije povezane sa zaštitom ostrva i terminala, a ne sama postrojenja za izvoz nafte. Ipak, i ovakav napad nosi snažnu simboličku i geopolitičku poruku, jer je reč o mestu kroz koje protiče veliki deo iranskog energetskog izvoza.",
  "Gađanje Harga prevazilazi okvir lokalne vojne operacije. To je signal koji se šalje i Teheranu i međunarodnim tržištima, jer svaki ozbiljniji poremećaj na toj tački može imati posledice po cenu nafte, bezbednost pomorskih ruta i ukupnu stabilnost Persijskog zaliva.",
  "Ukoliko se ovakvi udari nastave ili ako usledi odgovor Irana preko regionalnih saveznika i posrednih aktera, region bi mogao ući u novu fazu opasne eskalacije. Zato vest o Hargu nije samo informacija o jednom napadu, već upozorenje da energetska infrastruktura ponovo postaje centralno bojno polje savremenih sukoba.",
];

export default function HargSrceIranskogIzvozaNafte() {
  return (
    <ArticleTemplate
      path="/geopolitika/harg-srce-iranskog-izvoza-nafte"
      sectionLabel="Geopolitika"
      title="Harg – srce iranskog izvoza nafte"
      dateLabel="7. APRIL 2026."
      deck="Sjedinjene Američke Države, prema dostupnim izveštajima, izvele su udare na vojne ciljeve na ostrvu Harg, ključnom energetskom čvorištu Irana u Persijskom zalivu. Reč je o tački od izuzetnog strateškog značaja za izvoz iranske nafte i za stabilnost čitavog regiona."
      imageSrc={IMAGE_SRC}
      imageAlt="Naftni terminal na ostrvu Harg, jednom od najvažnijih energetskih čvorišta Irana."
      imageCredit="Wikimedia Commons"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
