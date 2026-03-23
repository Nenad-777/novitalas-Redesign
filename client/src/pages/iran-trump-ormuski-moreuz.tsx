/*
 * Iran preti zatvaranjem Ormuskog moreuza — GEOPOLITIKA (single article)
 * Date: 23. MART 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/trump-iran.jpg";

const PARAGRAPHS = [
  "Iran je zapretio potpunim zatvaranjem Ormuskog moreuza ukoliko Sjedinjene Američke Države sprovedu najavljene napade na njegovu energetsku infrastrukturu, čime se kriza na Bliskom istoku dodatno zaostrava.",

  "Do pretnje dolazi nakon što je američki predsednik Donald Tramp postavio rok od 48 sati za otvaranje ovog ključnog pomorskog prolaza, uz upozorenje da bi u suprotnom usledili udari na iranske energetske objekte.",

  "Iranske vlasti poručuju da bi takav potez izazvao direktan odgovor, uključujući zatvaranje moreuza i potencijalne udare na ciljeve u regionu.",

  "Ormuski moreuz predstavlja jednu od najvažnijih tačaka globalne energetike, kroz koju prolazi oko petine svetske trgovine naftom i gasom, zbog čega svaka destabilizacija ima neposredne posledice po globalna tržišta.",

  "Ukoliko dođe do zatvaranja moreuza ili udara na energetsku infrastrukturu, sukob bi mogao da preraste u globalni ekonomski i bezbednosni problem, sa direktnim uticajem na cene energije, transport i političke odnose velikih sila.",
];

export default function IranTrumpOrmuskirMoreuz() {
  return (
    <ArticleTemplate
      path="/geopolitika/iran-trump-ormuski-moreuz"
      sectionLabel="Geopolitika"
      title="Iran preti zatvaranjem Ormuskog moreuza kao odgovor na Trampov ultimatum"
      dateLabel="23. MART 2026."
      deck="Iran preti zatvaranjem Ormuskog moreuza kao odgovor na američki ultimatum, uz rizik globalne energetske krize."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija sukoba između Donalda Trampa i Irana sa simboličnom kapljom nafte u centru, koja predstavlja globalnu energetsku i političku napetost"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
