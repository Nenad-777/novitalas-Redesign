/*
 * Nemačka menja BND: najveća reforma obaveštajne službe u poslednjim decenijama
 * Obaveštajni izvori — 28. jun 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/germany-bnd-modernization.jpg";

const PARAGRAPHS = [
  "Nemačka priprema najopsežniju reformu svoje spoljne obaveštajne službe, Savezne obaveštajne službe (Bundesnachrichtendienst – BND), sa ciljem da je prilagodi novim bezbednosnim izazovima koje donose rat u Ukrajini, sajber pretnje i ubrzani razvoj veštačke inteligencije. Kako piše Financial Times, reforma podrazumeva veći budžet, nova ovlašćenja i snažniji fokus na elektronsko izviđanje i prikupljanje obaveštajnih podataka.",

  "Plan reforme dolazi nakon višegodišnjih kritika da je BND potcenio pojedine međunarodne bezbednosne rizike, uključujući pripreme Rusije za invaziju na Ukrajinu. Cilj Berlina je da izgradi moderniju i operativno efikasniju službu koja će moći brže da odgovori na promene u globalnom bezbednosnom okruženju.",

  "Prema navodima Financial Timesa, jedan od ključnih motiva reforme jeste i želja Nemačke da smanji zavisnost od obaveštajnih procena i tehničkih kapaciteta Sjedinjenih Američkih Država. U Berlinu smatraju da Evropa mora razviti snažnije sopstvene obaveštajne sposobnosti, posebno u oblastima satelitskog izviđanja, sajber bezbednosti i analize velikih količina podataka.",

  "Promene u BND-u deo su šireg trenda koji je zahvatio evropske bezbednosne službe nakon početka rata u Ukrajini. Umesto modela zasnovanog pre svega na klasičnoj špijunaži, sve veći značaj dobijaju digitalni nadzor, analiza otvorenih izvora, veštačka inteligencija i zaštita kritične infrastrukture. Reforma nemačke službe zato se posmatra kao jedan od najznačajnijih bezbednosnih projekata u Evropi, čije bi posledice mogle da utiču na budući razvoj evropske obaveštajne saradnje.",
];

export default function GermanyBNDReformArticle() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/nemacka-menja-bnd-najveca-reforma-obavestajne-sluzbe"
      sectionLabel="Obaveštajni izvori"
      title="Nemačka menja BND: najveća reforma obaveštajne službe u poslednjim decenijama"
      dateLabel="28. jun 2026."
      deck="Berlin priprema najopsežniju reformu Savezne obaveštajne službe u poslednjim decenijama, sa fokusom na sajber operacije, elektronsko izviđanje i veštačku inteligenciju."
      imageSrc={IMAGE_SRC}
      imageAlt="Editorial illustration about the modernization of Germany's Federal Intelligence Service (BND)"
      imageCredit="AI generated illustration / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
