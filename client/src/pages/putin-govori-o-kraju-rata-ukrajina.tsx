import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/putin-end-war.jpg";

const PARAGRAPHS = [
  "Vladimir Putin izjavio je da veruje da se rat u Ukrajini približava kraju, u poruci koja je odmah izazvala pažnju svetske javnosti. Izjava je došla posle obeležavanja Dana pobede u Moskvi, u atmosferi pojačane bezbednosti, skromnije parade i krhkog primirja za koje su obe strane već optužile jedna drugu da ga krše. Prema izveštajima svetskih agencija, Putin je rekao da misli da se “stvar približava kraju”, ali nije ponudio konkretan plan, datum ili uslove pod kojima bi rat zaista mogao da se zaustavi.",
  "Zato ovu vest treba čitati istovremeno sa nadom i oprezom. Nada postoji zato što se reč “kraj” sve češće pojavljuje u jeziku velikih aktera, uključujući Moskvu, Vašington i posrednike koji pokušavaju da otvore pregovarački prostor. Oprez je neophodan jer se na terenu i dalje puca: Ukrajina prijavljuje borbe, dronovske napade i civilne žrtve uprkos američki posredovanom primirju, dok Rusija tvrdi da je obarala ukrajinske dronove i odgovarala na napade.",
  "Najvažnije u Putinovoj izjavi možda nije sama tvrdnja da je rat blizu kraja, već priznanje da rat ulazi u fazu u kojoj se sve više govori o završnici. To ne mora da znači mir. Može da znači pritisak, iscrpljenost, pokušaj oblikovanja pregovora pod povoljnijim uslovima ili političku poruku domaćoj javnosti. Ali i takva promena jezika ima težinu: ratovi se ne završavaju samo kada oružje utihne, već i kada vođe počnu da pripremaju javnost za mogućnost da jednom mora da dođe kraj.",
  "Za ljude u Ukrajini, Rusiji i Evropi svaka takva rečenica nosi teret nade. Ipak, istina je da mir još nije potpisan, front još nije utihnuo, a uslovi budućeg dogovora ostaju duboko sporni. Zato je najpoštenije reći: možda još nismo na kraju rata, ali smo možda ušli u trenutak kada kraj rata ponovo može da se izgovori kao politička mogućnost. Posle godina razaranja, i to nije malo.",
];

export default function PutinGovoriOKrajuRataUkrajina() {
  return (
    <ArticleTemplate
      path="/geopolitika/putin-govori-o-kraju-rata-ukrajina"
      sectionLabel="GEOPOLITIKA"
      title="Putin govori o kraju rata: između nade i opreza"
      dateLabel="9. maj 2026."
      authorLabel="Novi Talas"
      deck="Ruski predsednik kaže da veruje da se rat u Ukrajini približava završetku. Njegove reči ne znače da je mir blizu, ali pokazuju da se, posle godina rata, u diplomatski prostor vraća pitanje završnice."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija: Vladimir Putin i tema završnice rata u Ukrajini"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
