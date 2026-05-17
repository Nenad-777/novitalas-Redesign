import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/london-spy-law.jpg";

const PARAGRAPHS = [
  "Britanska vlada najavila je novo zakonodavstvo kojim želi da odgovori na rastuće pretnje stranih država i njihovih posredničkih mreža. Prema izveštajima svetskih agencija, zakon bi omogućio vlastima da zabrane organizacije povezane sa špijunažom, sabotažom, političkim mešanjem i nasiljem, kao i da uvedu krivična dela za članstvo i podršku takvim grupama. Britanski premijer Kir Starmer poručio je da država mora da odgovori na maligni strani uticaj, posebno posle incidenata koji su pogodili jevrejsku zajednicu i iranske disidente u Britaniji.",
  "U pozadini ove najave nalazi se sve veća zabrinutost Londona zbog stranih proxy mreža, odnosno kriminalnih ili političkih struktura koje deluju po nalogu ili u interesu drugih država. Britanija je prethodno uvela sankcije protiv više osoba i organizacija zbog navodnih aktivnosti povezanih sa Iranom, uključujući pretnje, nasilje, pokušaje destabilizacije i korišćenje kriminalnih mreža za obavljanje operacija u inostranstvu. Među strukturama koje britanske vlasti povezuju sa iranskim obaveštajnim delovanjem pominju se i mreže osumnjičene za planiranje otmica i napada na protivnike Teherana.",
  "Ova vest pokazuje kako se evropske države sve više udaljavaju od starog modela kontraobaveštajne zaštite, u kome su špijunaža i strani uticaj tretirani uglavnom kao rad službi u senci. Novi model ide ka javnom, pravnom i političkom odgovoru: zabrani organizacija, sankcijama, krivičnom gonjenju posrednika i jasnijem imenovanju država koje koriste mreže van sopstvenih ambasada i službenih kanala.",
  "Za Britaniju, ovo je i pitanje unutrašnje bezbednosti i pitanje spoljne politike. Ako država može da dokaže da strane sile koriste kriminalne grupe, radikalne organizacije ili finansijske mreže za zastrašivanje disidenata, napade na zajednice i politički pritisak, onda se granica između špijunaže, terorizma i organizovanog kriminala sve više briše. Upravo tu nastaje nova bezbednosna realnost: rat država više se ne vodi samo preko vojske i diplomatskih nota, već i preko posrednika koji deluju unutar društava koja su formalno u miru.",
];

export default function BritanijaZakonStraneProxyMreze() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/britanija-zakon-strane-proxy-mreze"
      sectionLabel="OBAVEŠTAJNI IZVORI"
      title="Britanija sprema zakon protiv mreža stranih država"
      dateLabel="15. maj 2026."
      authorLabel="Novi Talas"
      deck="London najavljuje novo zakonodavstvo kojim bi država mogla da zabrani organizacije povezane sa špijunažom, sabotažom, nasiljem i političkim uticajem stranih režima. U fokusu su proxy mreže koje deluju za račun neprijateljskih država, posebno u kontekstu iranskih aktivnosti na britanskom tlu."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija bezbednosnog nadzora i zakonskih mera protiv stranih mreža"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
