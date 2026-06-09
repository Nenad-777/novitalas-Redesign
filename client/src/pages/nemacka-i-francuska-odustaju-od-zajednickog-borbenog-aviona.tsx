import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/germany-france-delayed.jpg";

const PARAGRAPHS = [
  "Jedan od najambicioznijih evropskih odbrambenih projekata poslednje decenije suočio se sa ozbiljnim zastojem nakon što Francuska i Nemačka nisu uspele da prevaziđu višegodišnje nesuglasice oko razvoja borbenog aviona nove generacije. Program Future Combat Air System (FCAS), zamišljen kao budući stub evropske vazdušne moći, trebalo je da zameni francuske avione Rafale i nemačke Eurofightere, istovremeno potvrđujući sposobnost Evrope da samostalno razvija najsloženije vojne tehnologije.",
  "Sporovi oko upravljanja projektom, raspodele tehnoloških prava i industrijskog vođstva postepeno su udaljili partnere od prvobitne vizije. Francuski Dassault Aviation i evropski konzorcijum Airbus godinama nisu uspevali da pronađu zajednički jezik oko ključnih segmenata programa, što je na kraju dovelo u pitanje budućnost čitavog projekta.",
  "FCAS je pokrenut sa ambicijom da postane simbol evropske tehnološke i strateške samostalnosti. Umesto toga, postao je podsetnik na teškoće sa kojima se suočavaju zajednički evropski projekti kada se sudare nacionalni interesi, industrijska konkurencija i različite političke vizije.",
  "Evropska unija poslednjih godina sve češće govori o potrebi strateške autonomije i jačanja sopstvene odbrambene industrije. Rat u Ukrajini, rastuća neizvesnost međunarodnog poretka i pozivi da Evropa preuzme veću odgovornost za sopstvenu bezbednost dodatno su pojačali značaj ovakvih projekata.",
  "Zbog toga ova odluka prevazilazi okvire vazduhoplovne industrije. Ona otvara pitanje da li Evropa može da izgradi zajedničke instrumente moći u trenutku kada bezbednosni izazovi postaju sve složeniji.",
  "Ako dve vodeće sile Evropske unije ne uspeju da pronađu zajednički jezik oko projekta od ovakvog značaja, skeptici će dobiti novi argument da je evropska strateška autonomija i dalje više politička ambicija nego ostvariva realnost.",
  "Istorija evropskih integracija pokazuje da su najveći koraci često nastajali upravo nakon perioda krize. Ostaje da se vidi da li će i ovaj neuspeh postati podsticaj za novi dogovor ili će ostati simbol granica evropskog zajedništva u vremenu velikih geopolitičkih promena.",
];

export default function NemackaIFrancuskaOdustajuOdZajednickogBorbenogAviona() {
  return (
    <ArticleTemplate
      path="/geopolitika/nemacka-i-francuska-odustaju-od-zajednickog-borbenog-aviona"
      sectionLabel="Geopolitika"
      title="Nemačka i Francuska odustaju od zajedničkog borbenog aviona"
      dateLabel="9. jun 2026."
      authorLabel="Novi Talas"
      deck="Program FCAS, koji je trebalo da postane simbol evropske strateške autonomije i tehnološke samostalnosti, zapao je u ozbiljnu krizu nakon višegodišnjih sporova Francuske i Nemačke oko upravljanja, industrijskog vođstva i tehnoloških prava."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija evropskog borbenog aviona FCAS"
      imageCredit="Foto: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
