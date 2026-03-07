export const BASE_URL = "https://novitalas.org";

export type RouteMeta = {
  title: string;
  description: string;
  image: string;
  imageType: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  type: string;
};

export const DEFAULT_META: RouteMeta = {
  title: "NOVI TALAS — Vaš prozor u svet",
  description:
    "Novi Talas — nezavisni portal za geopolitiku, bezbednost i obaveštajne analize. Veritas ante omnia.",
  image: `${BASE_URL}/tehran-riots.jpg`,
  imageType: "image/png",
  imageWidth: 1536,
  imageHeight: 1024,
  url: BASE_URL,
  type: "website",
};

export const ROUTES_META: Record<string, Partial<RouteMeta>> = {
  "/geopolitika/iran-protesti-2026": {
    title: "IRAN: Protesti zahvatili najmanje 10 univerziteta — NOVI TALAS",
    description:
      "BBC potvrdio snimke sukoba studenata i Basija na iranskim univerzitetima. Analiza Novi Talasa.",
    image: `${BASE_URL}/tehran-riots.jpg`,
    imageType: "image/png",
    imageWidth: 1536,
    imageHeight: 1024,
    url: `${BASE_URL}/geopolitika/iran-protesti-2026`,
    type: "article",
  },
  "/geopolitika/sukobi-izrael-iran-2026": {
    title:
      "Otvoreni sukobi Izraela i Irana: region ulazi u novu fazu nestabilnosti — NOVI TALAS",
    description:
      "Direktni vojni sukobi između Izraela i Irana 2026. godine menjaju bezbednosnu arhitekturu Bliskog istoka.",
    image: `${BASE_URL}/f22-israel-iran-2026.jpg`,
    imageType: "image/png",
    imageWidth: 1536,
    imageHeight: 1024,
    url: `${BASE_URL}/geopolitika/sukobi-izrael-iran-2026`,
    type: "article",
  },
  "/geopolitika/ormuz": {
    title:
      "Zatvoren Ormuski moreuz: svet suočen sa energetskim šokom — NOVI TALAS",
    description:
      "Blokada Ormuskog moreuza uzrokuje energetsku krizu globalnih razmera. Analiza posledica za naftu i gas.",
    image: `${BASE_URL}/ormuz.jpg`,
    imageType: "image/jpeg",
    imageWidth: 1024,
    imageHeight: 576,
    url: `${BASE_URL}/geopolitika/ormuz`,
    type: "article",
  },
  "/geopolitika/ukrajina-cetiri-godine-rata": {
    title:
      "Ukrajina — četiri godine rata: bilans i perspektive — NOVI TALAS",
    description:
      "Četiri godine od ruske invazije: analiza vojnog, humanitarnog i geopolitičkog bilansa rata u Ukrajini.",
    image: `${BASE_URL}/geopolitika-ukrajina.jpg`,
    imageType: "image/png",
    imageWidth: 1536,
    imageHeight: 1024,
    url: `${BASE_URL}/geopolitika/ukrajina-cetiri-godine-rata`,
    type: "article",
  },
  "/geopolitika/nova-bezbednosna-arhitektura": {
    title: "Nova bezbednosna arhitektura — NOVI TALAS",
    description:
      "Analiza promena u globalnoj bezbednosnoj arhitekturi i novog poretka moći.",
    image: `${BASE_URL}/carrier.jpg`,
    imageType: "image/png",
    imageWidth: 1536,
    imageHeight: 1024,
    url: `${BASE_URL}/geopolitika/nova-bezbednosna-arhitektura`,
    type: "article",
  },
  "/srbija/podeljeno-drustvo": {
    title: "Podeljeno društvo: Srbija na raskrsnici — NOVI TALAS",
    description:
      "Analiza društvene polarizacije u Srbiji i njenih dugoročnih posledica po demokratiju i stabilnost.",
    image: `${BASE_URL}/images/srbija-polarizacija.jpg`,
    imageType: "image/png",
    imageWidth: 1024,
    imageHeight: 1024,
    url: `${BASE_URL}/srbija/podeljeno-drustvo`,
    type: "article",
  },
  "/srbija/mars-za-pravosudje": {
    title: "Marš za pravosuđe — NOVI TALAS",
    description:
      "Hiljade građana na ulicama Srbije zahteva nezavisno pravosuđe. Izveštaj Novi Talasa.",
    image: `${BASE_URL}/traktori-beograd.jpg`,
    imageType: "image/png",
    imageWidth: 1536,
    imageHeight: 1024,
    url: `${BASE_URL}/srbija/mars-za-pravosudje`,
    type: "article",
  },
  "/srbija/selo-ne-prasta-poraz-vest": {
    title: "Selo ne prašta poraz — NOVI TALAS",
    description:
      "Seljaci i farmeri protestuju: pohod traktora ka Beogradu. Izveštaj sa terena.",
    image: `${BASE_URL}/traktori-beograd-2.jpg`,
    imageType: "image/png",
    imageWidth: 1536,
    imageHeight: 1024,
    url: `${BASE_URL}/srbija/selo-ne-prasta-poraz-vest`,
    type: "article",
  },
  "/nasa-planeta/alma-skriveno-jezgro": {
    title: "ALMA: Skriveno jezgro Mlečnog puta — NOVI TALAS",
    description:
      "Teleskop ALMA otkriva skrivene strukture u centru Mlečnog puta. Naučna analiza Novi Talasa.",
    image: `${BASE_URL}/alma-mlecni-put.jpg`,
    imageType: "image/jpeg",
    imageWidth: 1280,
    imageHeight: 470,
    url: `${BASE_URL}/nasa-planeta/alma-skriveno-jezgro`,
    type: "article",
  },
};

export function getMetaForRoute(urlPath: string): RouteMeta {
  const override = ROUTES_META[urlPath];
  if (!override) return { ...DEFAULT_META, url: `${BASE_URL}${urlPath}` };
  return { ...DEFAULT_META, ...override };
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function injectOgTags(html: string, meta: RouteMeta): string {
  const tags = [
    `    <title>${escapeAttr(meta.title)}</title>`,
    `    <meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `    <meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `    <meta property="og:type" content="${escapeAttr(meta.type)}" />`,
    `    <meta property="og:url" content="${escapeAttr(meta.url)}" />`,
    `    <meta property="og:site_name" content="NOVI TALAS" />`,
    `    <meta property="og:image" content="${escapeAttr(meta.image)}" />`,
    `    <meta property="og:image:secure_url" content="${escapeAttr(meta.image)}" />`,
    `    <meta property="og:image:type" content="${escapeAttr(meta.imageType)}" />`,
    `    <meta property="og:image:width" content="${meta.imageWidth}" />`,
    `    <meta property="og:image:height" content="${meta.imageHeight}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `    <meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `    <meta name="twitter:image" content="${escapeAttr(meta.image)}" />`,
  ].join("\n");

  // Strip existing <title> and og:/twitter: meta tags, then inject fresh ones
  const stripped = html
    .replace(/<title>[^<]*<\/title>/g, "")
    .replace(
      /<meta\s+(?:property="og:[^"]*"|name="twitter:[^"]*")[^>]*\/?>/g,
      "",
    );

  return stripped.replace("</head>", `${tags}\n  </head>`);
}
