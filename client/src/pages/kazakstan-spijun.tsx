/*
 * Berlin u senci špijunaže: uhapšen osumnjičeni ruski agent
 * Obaveštajni izvori — 29. april 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/kazakstan-spy.jpg";

const PARAGRAPHS = [
  "Nemačke vlasti uhapsile su u Berlinu državljanina Kazahstana, identifikovanog kao Sergej K, zbog sumnje da je radio za rusku obaveštajnu službu. Prema navodima saveznog tužilaštva, osumnjičeni je od najmanje maja 2025. godine održavao kontakt sa ruskim obaveštajnim strukturama i prikupljao informacije koje se odnose na nemačku vojnu pomoć Ukrajini.",

  "U fokusu navodne obaveštajne aktivnosti bili su podaci o nemačkoj odbrambenoj industriji, kompanijama koje razvijaju dronove i robotiku, kao i informacije o kretanju NATO vojnih konvoja na nemačkim auto-putevima. Takvi podaci imaju posebnu težinu u trenutku kada je Nemačka jedan od ključnih evropskih oslonaca vojne i logističke pomoći Ukrajini.",

  "Slučaj dolazi u periodu pojačane bezbednosne nervoze u Evropi, gde se sve češće govori o ruskim obaveštajnim, sajber i mogućim sabotažnim operacijama. Za evropske službe bezbednosti, rat u Ukrajini sve više znači i tihu borbu za logističke rute, industrijske kapacitete, tehnološke podatke i slabosti unutar zapadne infrastrukture.",

  "Ako se navodi nemačkog tužilaštva potvrde, hapšenje u Berlinu pokazuje da se obaveštajni pritisak ne završava na diplomatskim kanalima i sajber prostoru. On se spušta i na puteve, fabrike, kompanije i konvoje, tamo gde se vojna pomoć pretvara u realnu logističku snagu.",
];

export default function KazakstanSpijun() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/kazakstan-spijun"
      sectionLabel="Obaveštajni izvori"
      title="Berlin u senci špijunaže: uhapšen osumnjičeni ruski agent, meta bile informacije o Ukrajini i NATO konvojima"
      dateLabel="29. APRIL 2026."
      deck="Nemački tužioci tvrde da je državljanin Kazahstana mesecima bio u kontaktu sa ruskom obaveštajnom službom i dostavljao podatke o vojnoj pomoći Ukrajini, odbrambenoj industriji i kretanju NATO konvoja."
      imageSrc={IMAGE_SRC}
      imageAlt="Uhapšeni osumnjičeni špijun u Berlinu, kazahstanski državljanin Sergej K"
      imageCredit="Foto: ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
