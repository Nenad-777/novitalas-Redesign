import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

export default function KoJePucaoUSrbiju() {
  useSEO("/srbija/ko-je-pucao-u-srbiju");
  return (
    <ArticleTemplate
      sectionLabel="Srbija"
      title="Ko je pucao u Srbiju?"
      dateLabel="15. MART 2026."
      deck="Događaji od 15. marta i dalje predstavljaju jedno od najtežih otvorenih pitanja savremene srpske politike, ko je i čime udario na demonstrante u centru Beograda?"
      imageSrc="/news/zvucni-top.jpg"
      imageAlt="Zvučni top, akustično oružje upotrebljeno na protestu u Beogradu"
      paragraphs={[
        "Događaji od 15. marta i dalje predstavljaju jedno od najtežih otvorenih pitanja savremene srpske politike. Tog dana, tokom masovnog okupljanja građana u centru Beograda, veliki broj ljudi prijavio je snažan udarni talas koji je izazvao paniku u masi. U javnosti se ubrzo pojavila sumnja da je protiv demonstranata upotrebljeno akustično sredstvo velike snage, takozvani „zvučni top\u201d.",
        "Zvanične institucije Srbije negirale su upotrebu takvog uređaja. Međutim, događaj je ubrzo dobio međunarodnu dimenziju. Evropski sud za ljudska prava izdao je privremenu meru kojom od Srbije traži da spreči eventualnu upotrebu akustičnih uređaja za kontrolu demonstracija u budućnosti.",
        "Istovremeno, specijalni izvestioci Ujedinjenih nacija zatražili su od srpskih vlasti zvanično objašnjenje u vezi sa događajima od 15. marta i mogućom upotrebom akustičnog oružja. Vlada Srbije dostavila je odgovor u kojem negira da je takvo sredstvo korišćeno, ali međunarodne institucije navode da niz pitanja i dalje ostaje otvoren.",
        "U međuvremenu, nezavisni istraživači, novinari i tehnički stručnjaci analizirali su dostupne snimke i fotografije sa protesta. Pojedine analize ukazuju na mogućnost da je sa jedne od terasa u ulici Kralja Milana korišćen cevasti uređaj dužine približno 1,5 do 1,6 metara. Prema mišljenju nekih stručnjaka, dimenzije tog objekta odgovaraju improvizovanom akustičnom ili cevnom uređaju.",
        "Takve tvrdnje do danas nisu zvanično potvrđene, ali su dodatno produbile sumnju u javnosti. Upravo zato događaj od 15. marta sve više prerasta iz pitanja jednog incidenta u širu raspravu o transparentnosti institucija, odgovornosti bezbednosnih struktura i zaštiti građanskih prava.",
        "Ko je pucao u Srbiju?",
      ]}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
