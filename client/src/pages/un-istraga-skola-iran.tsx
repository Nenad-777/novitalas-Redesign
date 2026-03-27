import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/un-investigation.jpg";

const PARAGRAPHS = [
  "Ujedinjene nacije zatražile su hitnu istragu i odgovornost nakon bombardovanja škole u Iranu, u kojem je, prema dostupnim podacima, stradalo više od 150 dece i nastavnika.",
  "Visoki komesar UN za ljudska prava upozorio je da civili, a posebno deca, ne smeju biti meta u oružanim sukobima i pozvao na utvrđivanje odgovornosti.",
  "Debata u Savetu za ljudska prava UN održana je po hitnom postupku, uz pozive više država da se rezultati istrage učine javnim.",
  "Preliminarni navodi ukazuju na mogućnost da su u napad bile uključene američke snage, ali zvanična istraga još nije završena.",
  "Napad je već označen kao jedan od najsmrtonosnijih incidenata po civile u aktuelnom sukobu, dok međunarodni pritisak raste da se utvrdi puna odgovornost.",
];

export default function UnIstragaSkolaIran() {
  return (
    <ArticleTemplate
      path="/geopolitika/un-istraga-skola-iran"
      sectionLabel="Geopolitika"
      title="UN traži pravdu nakon bombardovanja škole u Iranu"
      dateLabel="27. MART 2026."
      deck="Ujedinjene nacije traže hitnu istragu nakon bombardovanja škole u Iranu u kojem je stradalo više od 150 civila."
      imageSrc={IMAGE_SRC}
      imageAlt="Zastava Ujedinjenih nacija ispred sedišta UN"
      imageCredit="Foto: ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
