import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/orban-era-end-hungary.jpg";

const PARAGRAPHS = [
  "Postoje političari koji izgube izbore, pa se vrate. Postoje i oni koji izgube izbore, ali ostanu da žive u institucijama koje su sami oblikovali. Viktor Orban pripada ovoj drugoj grupi.",
  "Zato odluka mađarskog parlamenta da ograniči mandat premijera na ukupno osam godina nije samo tehnička ustavna izmena. To je politička poruka. Možda čak i istorijska prekretnica.",
  "Mađarski parlament usvojio je ustavni amandman kojim se mandat predsednika vlade ograničava na najviše osam godina, čime je praktično zatvoren put za povratak Viktora Orbana na funkciju premijera. Odluku je izgurala nova vlada premijera Petera Mađara, nakon aprilskih izbora i osvajanja dvotrećinske većine u parlamentu.",
  "Za mnoge Evropljane, Orban nije bio samo lider jedne države. Tokom šesnaest godina vlasti postao je simbol novog evropskog nacionalnog konzervativizma, političar koji je otvoreno osporavao liberalni konsenzus Evropske unije, gradio bliske odnose sa Moskvom i predstavljao uzor brojnim populističkim pokretima širom Zapada.",
  "Njegovi protivnici tvrde da je za to vreme sistematski oslabio nezavisnost institucija, sudstva i medija. Njegove pristalice odgovaraju da je štitio nacionalni suverenitet, tradicionalne vrednosti i interese Mađarske u vremenu kada su mnoge evropske vlade gubile dodir sa sopstvenim biračima.",
  "Istina je, verovatno, složenija od obe slike. Ali jedno je nesporno. Orban je obeležio čitavu političku epohu.",
  "Kada jedan čovek toliko dugo dominira političkom scenom, izborni poraz ne predstavlja samo smenu vlasti. On otvara pitanje šta ostaje iza njega: institucije, ideologija, mreža lojalnosti ili samo uspomena na vreme koje se više neće ponoviti.",
  "Novi premijer Peter Mađar tvrdi da je upravo to razlog za ograničenje mandata. Cilj je, prema njegovoj političkoj logici, obnova demokratskih mehanizama i sprečavanje prevelike koncentracije moći u rukama jednog čoveka.",
  "Međutim, u toj odluci postoji i zanimljiv paradoks. Ako je demokratija pravo građana da biraju svoje lidere, da li je demokratski unapred zabraniti povratak političaru koji i dalje ima značajnu podršku dela birača? To pitanje neće nestati usvajanjem jednog zakona.",
  "Uprkos porazu, Orban nije nestao iz mađarske politike. Ponovo je izabran za lidera Fidesa i poručio da se ne povlači. U tome je možda najvažnija lekcija ove priče: političke ere retko završavaju onog trenutka kada se ugase reflektori.",
  "Češće nastavljaju da žive u ljudima, idejama i podelama koje su ostavile iza sebe.",
  "Mađarska je danas odlučila da zatvori ustavna vrata povratku Viktora Orbana. Ali ostaje otvoreno pitanje koje će određivati njenu budućnost: da li je Orban poražen kao političar ili tek počinje život posle Orbanove Mađarske?",
];

export default function MadjarskaOgranicenjeMandataOrban() {
  return (
    <ArticleTemplate
      path="/geopolitika/madjarska-ogranicenje-mandata-orban"
      sectionLabel="Geopolitika"
      title="Kraj jedne ere: Mađarska zatvara vrata Orbanovom povratku"
      dateLabel="16. JUN 2026."
      deck="Mađarski parlament usvojio je ustavni amandman kojim se mandat premijera ograničava na osam godina. Odluka otvara pitanje da li se završava politička epoha Viktora Orbana ili tek počinje nova faza njegove političke borbe."
      imageSrc={IMAGE_SRC}
      imageAlt="Senka Viktora Orbana ispred mađarskog parlamenta, simbol kraja jedne političke ere"
      imageCredit="Novi Talas / ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
