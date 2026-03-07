export const BASE_URL = "https://novitalas.org";

export interface RouteMetadata {
  title: string;
  description: string;
  image: string;
}

export const DEFAULT_META: RouteMetadata = {
  title: "NOVI TALAS — Vaš prozor u svet",
  description:
    "Novi Talas — nezavisni portal za geopolitiku, bezbednost i obaveštajne analize. Veritas ante omnia.",
  image: "/tehran-riots.jpg",
};

export const ROUTE_META: Record<string, RouteMetadata> = {
  "/": {
    title: "NOVI TALAS — Vaš prozor u svet",
    description:
      "Novi Talas — nezavisni portal za geopolitiku, bezbednost i obaveštajne analize. Veritas ante omnia.",
    image: "/tehran-riots.jpg",
  },
  "/geopolitika/iran-protesti-2026": {
    title: "Iran: Protesti 2026 — NOVI TALAS",
    description:
      "Analiza iranskih protesta 2026. godine — uzroci, tok događaja i geopolitičke posledice.",
    image: "/tehran-riots.jpg",
  },
  "/geopolitika/ukrajina-cetiri-godine-rata": {
    title: "Ukrajina: Četiri godine rata — NOVI TALAS",
    description:
      "Četiri godine od ruske invazije na Ukrajinu — bilans, analize i perspektive.",
    image: "/geopolitika-ukrajina.jpg",
  },
  "/geopolitika/ormuz": {
    title: "Ormuški moreuz — NOVI TALAS",
    description:
      "Strateški značaj Ormuškog moreuza i geopolitičke tenzije na Bliskom istoku.",
    image: "/ormuz.jpg",
  },
  "/srbija/selo-ne-prasta-poraz-vest": {
    title: "Selo ne prašta poraz — NOVI TALAS",
    description:
      "Protesti traktora u Beogradu — kako je selo odgovorilo na poraz vlasti.",
    image: "/traktori-beograd.jpg",
  },
};

/** Return metadata for a given pathname, falling back to site-wide defaults. */
export function getRouteMeta(pathname: string): RouteMetadata {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return ROUTE_META[normalized] ?? DEFAULT_META;
}
