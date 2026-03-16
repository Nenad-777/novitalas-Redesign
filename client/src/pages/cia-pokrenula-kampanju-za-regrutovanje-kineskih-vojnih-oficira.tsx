/*
 * CIA pokrenula kampanju za regrutovanje kineskih vojnih oficira
 * Obaveštajni izvori — 14. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/cia-china.jpg";

const PARAGRAPHS = [
  "Američka Centralna obaveštajna agencija (CIA) pokrenula je novu javnu kampanju usmerenu ka potencijalnim izvorima unutar kineske vojske i državnog aparata. Kao deo te inicijative, CIA je objavila video na kineskom jeziku u kojem se obraća pojedincima koji bi mogli imati pristup poverljivim informacijama.",

  "Video prikazuje fiktivnog kineskog vojnog oficira koji izražava nezadovoljstvo korupcijom i političkim pritiscima unutar sistema, nakon čega odlučuje da stupi u kontakt sa američkom obaveštajnom službom. Poruka videa jasno sugeriše da CIA traži saradnike među ljudima koji imaju pristup strateški važnim informacijama.",

  "Ovakav pristup predstavlja relativno neuobičajenu strategiju, jer obaveštajne službe retko javno objavljuju kampanje za regrutovanje potencijalnih izvora. Analitičari smatraju da je cilj ove inicijative da iskoristi period političkih i institucionalnih potresa unutar kineske vojske.",

  "U poslednjih godinu dana u Kini je smenjeno više visokih vojnih zvaničnika u okviru antikorupcijskih istraga, što je izazvalo spekulacije o unutrašnjim tenzijama u vrhu vojnog aparata.",

  "Stručnjaci za bezbednost ocenjuju da ovakvi potezi ukazuju na intenziviranje obaveštajnog rivalstva između Sjedinjenih Država i Kine, koje sve više poprima karakter globalnog nadmetanja u tehnologiji, vojnoj moći i pristupu poverljivim informacijama.",
];

export default function CiaPokrenulaKampanju() {
  return (
    <ArticleTemplate
      path="/obavestajni-izvori/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira"
      sectionLabel="Obaveštajni izvori"
      title="CIA pokrenula kampanju za regrutovanje kineskih vojnih oficira"
      dateLabel="14. MART 2026."
      deck="Američka obaveštajna agencija objavila video na kineskom jeziku kojim cilja potencijalne izvore unutar kineske vojske i državnog aparata"
      imageSrc={IMAGE_SRC}
      imageAlt="CIA kampanja za regrutovanje kineskih vojnih oficira"
      paragraphs={PARAGRAPHS}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajni izvori"
    />
  );
}
