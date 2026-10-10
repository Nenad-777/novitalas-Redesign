import ArticleTemplate from "@/components/ArticleTemplate";

const PATH = "/nasa-planeta/dzonatan-kornjaca-194-godine-tajna-dugovecnosti";
const IMAGE_SRC = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Jonathan_Tortoise_2022.jpg";

const PARAGRAPHS = [
  "Kada se Džonatan izlegao, oko 1832. godine, kraljica Viktorija još nije stupila na britanski presto, Čarls Darvin tek je započinjao svoje znamenito putovanje brodom Bigl, a svet je izgledao gotovo neprepoznatljivo u odnosu na današnji. Skoro dva veka kasnije, ova džinovska kornjača i dalje živi na ostrvu Sveta Jelena u južnom Atlantiku. Njena izuzetna dugovečnost sada je pružila naučnicima retku priliku da istraže jedno od najvećih pitanja biologije: zbog čega neki organizmi stare mnogo sporije od drugih?",
  "Međunarodni tim istraživača, u kojem su učestvovali stručnjaci sa Univerziteta Vanderbilt i Univerziteta Kembridž, objavio je 7. oktobra u časopisu Science Advances rezultate analize Džonatanovog genoma i epigenoma. Istraživači su identifikovali 287 genetskih varijanti koje bi mogle biti povezane sa procesima popravljanja DNK, zaštitom ćelija i regulacijom metabolizma. Još zanimljivije otkriće pojavilo se prilikom proučavanja hemijskih oznaka koje upravljaju aktivnošću gena.",
  "Pokazalo se da su pojedini delovi Džonatanovog epigenoma, naročito oni povezani sa radom mitohondrija, zadržali neobično stabilnu organizaciju, sličnu onoj kod znatno mlađih kornjača. Mitohondrije obezbeđuju energiju potrebnu za funkcionisanje ćelija, a poremećaji u njihovom radu predstavljaju jedno od važnih obeležja starenja. Upravo očuvanost ovih mehanizama mogla bi biti jedan od razloga zbog kojih je Džonatan doživeo gotovo dva veka.",
  "Ipak, naučnici upozoravaju da istraživanje još ne dokazuje uzročnu vezu između otkrivenih osobina i njegove dugovečnosti. Analiza je zasnovana na ograničenom uzorku ćelija uzetih iz usne duplje, jer bi vađenje krvi predstavljalo nepotreban rizik za životinju. Biće potrebna dodatna istraživanja i poređenja sa drugim dugovečnim vrstama pre nego što se ovi nalazi budu mogli povezati sa mogućim medicinskim postupcima kod ljudi.",
  "Džonatan je na Svetu Jelenu stigao 1882. godine, već kao odrasla kornjača. Danas je slep usled katarakte, ali dobro čuje, ima apetit i živi pod pažljivim nadzorom svojih staratelja. Njegova starost procenjuje se na 194 godine, što ga čini najstarijom poznatom živom kopnenom životinjom.",
  "U njegovim ćelijama možda se nalazi deo odgovora na pitanje kojim se čovek bavi otkako je postao svestan sopstvene prolaznosti. Istraživače, međutim, prvenstveno zanima mogućnost produžavanja zdravog dela života, godina tokom kojih organizam zadržava sposobnost da dobro funkcioniše. Džonatanovo telo, oblikovano evolucijom tokom miliona godina, moglo bi ponuditi dragocene tragove za razumevanje tog procesa.",
  {
    type: "paragraph" as const,
    content: (
      <span>
        <strong>Izvori:</strong>{" "}
        <a href="https://www.cam.ac.uk/research/news/genetic-analysis-of-the-worlds-oldest-land-animal-reveals-secret-of-living-194-years" target="_blank" rel="noreferrer">Univerzitet Kembridž</a>,{" "}
        <a href="https://news.vumc.org/2026/10/07/an-extremely-old-giant-tortoise-named-jonathan-may-hold-the-secret-to-a-long-healthy-life-study/" target="_blank" rel="noreferrer">Vanderbilt Health</a> i{" "}
        <a href="https://doi.org/10.1126/sciadv.adw8887" target="_blank" rel="noreferrer">Science Advances</a>.
        {" "}<strong>Fotografija:</strong>{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Jonathan_Tortoise_2022.jpg" target="_blank" rel="noreferrer">Kevin Gepford / Wikimedia Commons</a>,{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>. Kadar prilagođen prikazu.
      </span>
    ),
  },
];

export default function DzonatanDugovecnostArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="Naša planeta"
      title="Živi već 194 godine, a njegove ćelije kriju moguću tajnu dugovečnosti"
      dateLabel="10. OKTOBAR 2026."
      authorLabel="Novi Talas"
      deck="Najstarija poznata živa kopnena životinja na svetu postala je predmet izuzetnog naučnog istraživanja. Analiza DNK džinovske kornjače Džonatana otkrila je mehanizme koji bi jednog dana mogli pomoći naučnicima da razumeju kako se usporava starenje."
      imageSrc={IMAGE_SRC}
      imageAlt="Džinovska kornjača Džonatan na travnjaku rezidencije guvernera ostrva Sveta Jelena."
      imageCredit="Foto: Kevin Gepford / Wikimedia Commons / CC BY-SA 4.0. Kadar prilagođen prikazu; linkovi ka izvoru i licenci su na kraju teksta."
      imageFirst={true}
      imageHeightClass="h-[300px] md:h-[470px]"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
