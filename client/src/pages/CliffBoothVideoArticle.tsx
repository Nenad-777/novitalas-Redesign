import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/nasa-planeta/tarantino-je-napisao-novi-film-fincer-ga-je-rezirao";
const YOUTUBE_ID = "RjEZaUBbUvU";
const THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

export default function CliffBoothVideoArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="VIDEO · KULTURA"
      title="Tarantino je napisao novi film. Finčer ga je režirao"
      dateLabel="25. SEPTEMBAR 2026."
      deck="Brad Pitt se vraća kao Cliff Booth u filmu „The Further Mis-Adventures of Cliff Booth“. Prvi puni trejler otkriva kako izgleda Tarantinov svet kada iza kamere stane David Fincher."
      imageSrc={THUMBNAIL}
      imageAlt="Brad Pitt kao Cliff Booth u zvaničnom trejleru Netflixa."
      imageFirst={true}
      videoHero={{
        youtubeId: YOUTUBE_ID,
        title: "THE FURTHER MIS-ADVENTURES OF CLIFF BOOTH | Official Trailer | Netflix",
        credit: "Video: Netflix / zvanični YouTube kanal",
      }}
      paragraphs={[
        "Netflix je objavio prvi puni trejler za „The Further Mis-Adventures of Cliff Booth“, nastavak priče o Cliffu Boothu iz filma „Once Upon a Time... in Hollywood“. Brad Pitt ponovo igra nekadašnjeg kaskadera, ali je nova priča smeštena u 1977. godinu, osam godina posle događaja iz Tarantinovog filma.",
        "Ovoga puta Quentin Tarantino ostaje autor scenarija, dok režiju preuzima David Fincher. To je neobičan susret dva izrazito prepoznatljiva filmska rukopisa: Tarantinovih likova i dijaloga sa Finčerovom preciznom, tamnijom režijom.",
        "Cliff više nije samo kaskader i dubler Ricka Daltona. Radi kao barmen i projekcionista, ali postaje i holivudski „fixer“, čovek kome se dolazi kada problem treba rešiti izvan uobičajenih pravila. Netflix novu priču opisuje kroz ubistvo, ucenu, krađu i iznudu, u Holivudu koji je do kraja sedamdesetih već sasvim drugačiji od sveta prethodnog filma.",
        "Uz Pitta igraju Elizabeth Debicki, Scott Caan, Carla Gugino, Yahya Abdul-Mateen II, Peter Weller, Corey Fogelmanis i Karren Karagulian. Finčer ponovo sarađuje i sa nizom svojih dugogodišnjih saradnika iza kamere.",
        "Film počinje ekskluzivno dvonedeljno prikazivanje u IMAX bioskopima 25. novembra, a na Netflix stiže 23. decembra 2026. Tarantino ovoga puta nije iza kamere. Upravo zato će možda najzanimljivije biti videti šta će Finčer uraditi sa njegovim svetom.",
      ]}
      backHref="/nasa-planeta"
      backLabel="Nazad na Našu planetu"
    />
  );
}
