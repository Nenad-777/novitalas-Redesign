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
    ogImage: "https://novitalas.org/russia-china-shadows.jpg",
    twitterTitle:
      "Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga",
    twitterDescription: "Između podrške Teheranu i izbegavanja velikog rata.",
    twitterImage: "https://novitalas.org/russia-china-shadows.jpg",
  },
};
