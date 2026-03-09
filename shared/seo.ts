export interface SEOData {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

export const seoData: Record<string, SEOData> = {
  "/nasa-planeta/san-i-mozak": {
    title:
      "Mozak dok spimo: kako san čisti toksine i gradi uspomene — Novi Talas",
    description:
      "Glimfatički sistem, konsolidacija pamćenja i REM faza — nova neurološka otkrića otkrivaju zašto je san biološka nužnost, a ne luksuz.",
    ogTitle:
      "Mozak dok spimo: kako san čisti toksine i gradi uspomene",
    ogDescription:
      "Nova otkrića o glimfatičkom sistemu i REM fazi spavanja.",
    ogUrl: "https://novitalas.org/nasa-planeta/san-i-mozak",
    ogImage: "https://novitalas.org/san-mozak.jpg",
    twitterTitle:
      "Mozak dok spimo: kako san čisti toksine i gradi uspomene",
    twitterDescription:
      "Nova otkrića o glimfatičkom sistemu i REM fazi spavanja.",
    twitterImage: "https://novitalas.org/san-mozak.jpg",
  },
  "/geopolitika/velike-sile-i-kriza-u-iranu": {
    title:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga — Novi Talas",
    description:
      "Između podrške Teheranu i izbegavanja velikog rata. Rusija i Kina razvile su bliske odnose sa Iranom, ali njihove reakcije na aktuelnu krizu pokazuju znatno oprezniji pristup.",
    ogTitle:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    ogDescription: "Između podrške Teheranu i izbegavanja velikog rata.",
    ogUrl:
      "https://novitalas.org/geopolitika/velike-sile-i-kriza-u-iranu",
    ogImage: "https://novitalas.org/og/velike-sile-i-kriza-u-iranu.jpg",
    twitterTitle:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    twitterDescription: "Između podrške Teheranu i izbegavanja velikog rata.",
    twitterImage: "https://novitalas.org/og/velike-sile-i-kriza-u-iranu.jpg",
  },
};
