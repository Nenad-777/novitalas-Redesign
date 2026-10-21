import ArticleTemplate from "@/components/ArticleTemplate";

const paragraphs = [
  "Gardijan opisuje studentski pokret kao najozbiljniji izazov Vučićevoj vlasti u poslednjih 12 godina. Rojters takođe izdvaja studente kao ključne protivnike vladajuće stranke na izborima 25. oktobra. Ishod ostaje neizvestan.",
  "Pokret je sa ulica prešao u kampanju od vrata do vrata. Studentska lista okuplja 250 kandidata, među kojima su profesori, glumci i poljoprivrednici. Borba protiv korupcije, odgovornost institucija i sloboda medija povezuju zahteve sa protesta sa ponudom biračima.",
  "Izborna utakmica, međutim, odvija se pod izrazito neravnopravnim uslovima. CRTA u izveštaju od 21. oktobra navodi da predstavnici vlasti zauzimaju gotovo tri četvrtine političkog programa televizija sa nacionalnom pokrivenošću. Studentska lista je, prema istom izveštaju, u više od 80 odsto svog medijskog predstavljanja prikazana negativno.",
  "Za birače zato ostaju dva važna pitanja: može li studentski pokret da osvoji većinu i pod kakvim uslovima se o toj većini odlučuje. Međunarodna pažnja pokazuje značaj predstojećeg glasanja, ali ne predstavlja prognozu pobednika. Odgovor o promeni vlasti tek treba da daju izbori."
];

export default function GardijanStudentskiPokretArticle() {
  return (
    <ArticleTemplate
      path="/srbija/da-li-vucic-gubi-vlast-gardijan-o-snazi-studentskog-pokreta"
      sectionLabel="Srbija · Izbori"
      title="Da li Vučić gubi vlast? Gardijan o snazi studentskog pokreta"
      dateLabel="21. OKTOBAR 2026."
      authorLabel="Novi Talas"
      deck="Četiri dana pred parlamentarne izbore, studentski pokret suočava vlast sa ozbiljnim političkim izazovom. Međutim, snaga protesta i izborna pobeda nisu isto: presudno je koliko će se podrške pretvoriti u glasove."
      imageSrc="/news/gardijan-studentski-pokret-2026-10-21.png"
      imageAlt="Minimalistička ilustracija olovke i glasačkog listića sa senkom zgrade vlasti."
      imageFirst={true}
      imageHeightClass="h-auto"
      paragraphs={paragraphs}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
