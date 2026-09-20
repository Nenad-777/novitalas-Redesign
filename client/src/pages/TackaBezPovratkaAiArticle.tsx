import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/nasa-planeta/tacka-bez-povratka-ai";

const PARAGRAPHS = [
  "Do pre nekoliko godina ideja o gubitku kontrole nad veštačkom inteligencijom pripadala je uglavnom naučnoj fantastici. U septembru 2026. isto pitanje postavlja se u samom vrhu tehnološke industrije.",
  "Na AI samitu u Dumfries Houseu u Škotskoj kralj Čarls III upozorio je da su tempo i razvoj veštačke inteligencije istovremeno fascinantni i duboko zabrinjavajući. Govorio je o „egzistencijalnim opasnostima“ i postavio pitanje da li imamo dovoljno snažne mehanizme kontrole pre nego što bude prekasno.",
  "Važnije od kraljevog upozorenja jeste ono što se događa unutar samih AI laboratorija. Reuters je 19. septembra objavio da su zaposleni u OpenAI-ju i Anthropicu dovodili u pitanje da li bezbednosni nadzor uspeva da prati rast sposobnosti njihovih sistema. Kompanije su prijavile i slučajeve u kojima su AI agenti probijali spoljne računarske sisteme.",
  {
    type: "paragraph" as const,
    content: (
      <>
        <strong>
          Ali sada se nešto promenilo: sumnje i upozorenja sve češće dolaze iz
          samih kompanija koje razvijaju najnaprednije modele.
        </strong>
      </>
    ),
  },
  "To ne znači da je katastrofa neizbežna. Ali AI kompanije istovremeno nastavljaju trku za kapitalom, tržištem i sve moćnijim sistemima. Upravo tu nastaje paradoks: tehnološki razvoj ubrzava brže nego što zakoni, institucije i društvo uspevaju da mu odrede granice.",
  "Možda zato „tačka bez povratka“ nije trenutak kada mašina postane moćnija od čoveka. Možda je to trenutak kada više ne znamo gde se ta granica nalazi.",
  {
    type: "paragraph" as const,
    content: (
      <>
        <strong>
          Šta će veštačka inteligencija moći da uradi možda više nije najvažnije
          pitanje. Važnije je: ko će odlučiti šta joj nikada ne smemo dozvoliti?
        </strong>
      </>
    ),
  },
  {
    type: "paragraph" as const,
    content: (
      <>
        Izvori:{" "}
        <a
          href="https://www.reuters.com/business/media-telecom/ten-days-that-changed-course-ai-2026-09-19/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Reuters
        </a>
        {" · "}
        <a
          href="https://www.royal.uk/news-and-activity/2026-09-17/the-kings-speech-at-the-ai-summit-in-scotland"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          The Royal Family
        </a>
        . Fotografija:{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Prince_Charles_(8398765111).jpg"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Peter Broster / Wikimedia Commons
        </a>
        ,{" "}
        <a
          href="https://creativecommons.org/licenses/by/2.0/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          CC BY 2.0
        </a>
        .
      </>
    ),
  },
];

export default function TackaBezPovratkaAiArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="NAŠA PLANETA · AI"
      title="Tačka bez povratka"
      dateLabel="20. SEPTEMBAR 2026."
      deck="Ljudi koji stvaraju najmoćnije sisteme veštačke inteligencije počeli su javno da upozoravaju na njihove rizike. Pitanje više nije samo šta AI može da uradi, nego da li će čovek još moći da ga kontroliše."
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6d/Prince_Charles_%288398765111%29.jpg"
      imageAlt="Tadašnji princ Čarls tokom posete Aberdyfiju u Velsu, 27. juna 2011."
      imageCredit="Foto: Peter Broster / Wikimedia Commons / CC BY 2.0"
      imageFirst={true}
      imageHeightClass="h-[300px] md:h-[500px]"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
