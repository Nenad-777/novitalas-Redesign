import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/f15e-iran.jpg";

const PARAGRAPHS = [
  "Američki borbeni avion F-15E Strike Eagle oboren je iznad jugozapadnog Irana, potvrđuju međunarodni izvori. Jedan član posade je spašen, dok se drugi vodi kao nestao, a potraga je u toku.",
  "Incident predstavlja prvi potvrđeni slučaj obaranja američkog aviona sa posadom u aktuelnom sukobu. Prema dostupnim podacima, letelica je pogođena tokom operacija iznad iranske teritorije, nakon čega je pokrenuta kompleksna spasilačka misija.",
  "Tokom operacije traganja i spasavanja, dva američka helikoptera bila su izložena vatri, ali su uspela da napuste zonu dejstava. Paralelno, registrovano je da je jurišni avion A-10 pogođen i da se srušio u regionu Persijskog zaliva, dok je pilot spašen.",
  "Događaj ukazuje na povećan nivo rizika za američke vazdušne operacije i potvrđuje da Iran zadržava operativne kapacitete protivvazdušne odbrane uprkos intenzivnim udarima.",
  "Istovremeno, situacija ostaje nestabilna i u diplomatskoj sferi, uz odsustvo konkretnog pomaka ka prekidu sukoba.",
];

export default function OborenF15eIran2026() {
  return (
    <ArticleTemplate
      path="/geopolitika/oboren-f15e-iran-2026"
      sectionLabel="Geopolitika"
      title="Oboren američki F-15E iznad Irana: jedan član posade spašen, drugi nestao"
      dateLabel="4. APRIL 2026."
      deck="Incident predstavlja prvi potvrđeni slučaj obaranja američkog aviona sa posadom u aktuelnom sukobu"
      imageSrc={IMAGE_SRC}
      imageAlt="F-15E Strike Eagle u letu"
      imageCredit="F-15E Strike Eagle (foto: U.S. Air Force / Staff Sgt. Michael B. Keller)"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
