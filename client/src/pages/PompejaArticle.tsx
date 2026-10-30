import ArticleTemplate from "@/components/ArticleTemplate";

export default function PompejaArticle() {
  return <ArticleTemplate
    path={"/kultura/pompeja-posle-2000-godina-otkriva-tajnu-jednog-doma"}
    sectionLabel={"KULTURA"}
    title={"Pompeja posle 2.000 godina otkriva tajnu jednog doma"}
    dateLabel={"30. oktobar 2026."}
    deck={"Arheolozi su u drevnoj Pompeji rekonstruisali sadržaj drvenog ormara koji je gotovo dva milenijuma ostao zatrpan pod vulkanskim pepelom. Među pronađenim predmetima nalaze se nakit, parfemi, novac i dečje amajlije, tragovi života prekinutog erupcijom Vezuva 79. godine."}
    imageSrc={"/news/pompeja-otkrice.jpg"}
    imageAlt={"Panorama Pompeje sa Vezuvom u pozadini."}
    imageCredit={"Pompeja i Vezuv. Foto: Valentin Popescu / Wikimedia Commons (javni domen). Ilustrativna fotografija."}
    imageHeightClass={"h-auto aspect-video"}
    imageObjectFit={"contain"}
    backHref={"/kultura"}
    backLabel={"← Kultura"}
    imageBeforeDeck
    paragraphs={["Otkriće je predstavljeno 29. oktobra, nakon istraživanja kuće u ulici Via dell’Abbondanza, jednoj od najprometnijih ulica antičke Pompeje. Arheolozi su na osnovu sačuvanih tragova rekonstruisali drveni ormar i njegov sadržaj. Kuća se povezuje sa izvesnim Kornelijem Maksimom, ali identitet njenih nekadašnjih stanovnika nije pouzdano utvrđen.", "Posebnu pažnju privukla je ogrlica sa najmanje 24 minijaturne amajlije izrađene od kosti, stakla i gorskog kristala. Slični predmeti poklanjani su deci kao simboli zaštite, a često su čuvani i tokom odraslog života kao uspomene na detinjstvo. Pronađeni su i pribor za šminkanje, bočica za mirisna ulja, posude za pripremu hrane i 38 bronzanih novčića u maloj pletenoj korpi.", "Činjenica da su novac i predmeti lične vrednosti ostali u ormaru navodi istraživače na pretpostavku da stanovnici nisu imali vremena da ih ponesu tokom katastrofe. Direktor Arheološkog parka Pompeje Gabrijel Cuhtrigel istakao je da upravo ovakvi nalazi omogućavaju razumevanje svakodnevnih navika, rada i uspomena ljudi koji su živeli pre gotovo dve hiljade godina.", "Pompeja tako ponovo otkriva svoju najpotresniju dimenziju: ne samo istoriju grada uništenog vulkanom, već i priče običnih ljudi. U jednom ormaru ostali su sačuvani novac, mirisi, nakit i uspomene, predmeti koji nas podsećaju koliko je svakodnevni život antičkog sveta bio blizak našem."]}
    infoBox={{"title": "Izvori", "items": ["Reuters, ANSA, Arheološki park Pompeje, 29. oktobar 2026."]}}
  />;
}
