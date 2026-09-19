import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/geopolitika/amerika-nije-dobila-grenland-dobija-ono-zbog-cega-ga-je-zelela";

const PARAGRAPHS = [
  "Posle meseci tokom kojih je Donald Tramp govorio o američkoj kontroli nad Grenlandom, Vašington, Kopenhagen i Nuuk približili su se mnogo pragmatičnijem rešenju. Vlade Grenlanda, Danske i Sjedinjenih Država očekuju da tokom Generalne skupštine Ujedinjenih nacija potpišu sporazum o jačanju bezbednosti na Arktiku i severnom Atlantiku. Danska i Grenland naglašavaju da sporazum ne dovodi u pitanje suverenitet Kraljevine Danske niti pravo Grenlanđana na samoopredeljenje. Konačni tekst još nije objavljen, a nakon potpisivanja moraće da prođe potrebne parlamentarne procedure.",
  "Američko vojno prisustvo na Grenlandu, međutim, nije novo. Sporazum iz 1951. već je Sjedinjenim Državama dao široka prava za odbranu ostrva, a američka Pituffik Space Base danas ima važnu ulogu u ranom upozoravanju na raketne napade i nadzoru svemira. Ono što se sada menja jeste geopolitičko okruženje: Rusija ostaje velika arktička vojna sila, Kina pokazuje interesovanje za polarne rute i resurse, dok klimatske promene postepeno povećavaju dostupnost prostora koji je vekovima predstavljao prirodnu prepreku.",
  "Zbog toga Grenland više nije samo ogromno zaleđeno ostrvo između Evrope i Severne Amerike. Njegov položaj postaje važan za odbranu severnog prilaza američkom kontinentu, kontrolu severnog Atlantika i buduće arktičke pomorske pravce. Istovremeno, ostrvo poseduje značajne mineralne resurse, zbog čega se bezbednosni i ekonomski interesi velikih sila sve teže mogu razdvojiti.",
  "U tome je i paradoks čitave priče. Trampova početna retorika bila je teritorijalna — Amerika bi trebalo da „dobije“ Grenland. Rešenje koje se sada oblikuje mnogo je manje spektakularno, ali strateški racionalnije: suverenitet ostaje tamo gde jeste, dok Sjedinjene Države nastoje da dodatno učvrste vojni pristup prostoru koji smatraju ključnim za sopstvenu bezbednost. Konačni obim novih prava i obaveza znaćemo tek kada sporazum bude objavljen.",
  "Možda se zato najvažnija promena ne događa na političkoj karti. Granice ostaju iste. Menja se vrednost prostora unutar njih. Arktik se iz zaleđene periferije pretvara u jednu od zona u kojima će se ukrštati bezbednost, resursi i rivalstvo velikih sila — a Grenland se nalazi gotovo tačno u njegovom središtu."
];

export default function GreenlandUsArcticArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="GEOPOLITIKA · ARKTIK"
      title="Amerika nije dobila Grenland. Dobija ono zbog čega ga je želela"
      dateLabel="19. SEPTEMBAR 2026."
      deck="Sjedinjene Države, Danska i Grenland pripremaju sporazum koji bi trebalo da dodatno ojača američko vojno prisustvo na Arktiku. Suverenitet nad ostrvom se ne menja, ali se menja njegova strateška uloga u svetu u kojem sever više nije periferija geopolitike."
      imageSrc="https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/imagerecords/6000/6695/greenland_tmo_2006177_lrg.jpg?crop=faces%2Cfocalpoint&fit=clip&h=4400&w=3400"
      imageAlt="Satelitski snimak Grenlanda i njegove ledene ploče."
      imageCredit="Foto: NASA Earth Observatory"
      imageFirst={true}
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
