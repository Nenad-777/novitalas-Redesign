import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/moscow-economy-war.jpg";

const PARAGRAPHS = [
  "Rat u Ukrajini ulazi u novu fazu u kojoj se sve više pažnje posvećuje ekonomskim posledicama dugotrajnog sukoba. Prema navodima međunarodnih medija, pojedini visoki ruski finansijski zvaničnici upozorili su predsednika Vladimira Putina da sadašnji nivo vojne potrošnje postaje teško održiv i da dugoročno može ugroziti stabilnost državnih finansija.",
  "Prema dostupnim informacijama, u vrhu ruske administracije vodi se rasprava između ekonomskih institucija, koje upozoravaju na rastuće budžetske pritiske, i predstavnika vojnog sektora, koji smatraju da ratni ciljevi zahtevaju nastavak visokih izdvajanja bez značajnijih ograničenja. U središtu spora nalazi se pitanje koliko dugo ruska ekonomija može održavati sadašnji tempo finansiranja vojnih operacija.",
  "Rusija je tokom prethodnih godina pokazala veću otpornost na sankcije nego što su mnogi zapadni analitičari očekivali. Prihodi od izvoza energenata, prilagođavanje trgovinskih tokova i rast vojne proizvodnje omogućili su Moskvi da nastavi finansiranje rata uprkos međunarodnim restrikcijama. Međutim, rast vojnih rashoda postepeno smanjuje prostor za ulaganja u infrastrukturu, tehnološki razvoj i civilne sektore privrede.",
  "Dodatni izazov predstavljaju visoke kamatne stope i inflatorni pritisci sa kojima se suočava ruska ekonomija. Kako rat traje duže od očekivanog, troškovi održavanja vojne proizvodnje, isplate vojnicima i finansiranja bezbednosnog aparata postaju sve značajnija stavka državnog budžeta.",
  "Za Kremlj ovo nije samo ekonomsko pitanje. Tokom istorije, dugotrajni sukobi često su pokazivali da sposobnost države da finansira rat može biti podjednako važna kao i događaji na samom frontu. Upravo zato rasprava o budžetu i ratnoj potrošnji postaje jedan od najvažnijih pokazatelja budućeg razvoja sukoba.",
  "Komentar",
  "Ratovi se ne vode samo na bojištima. Oni se vode i u ministarstvima finansija, centralnim bankama i budžetskim komisijama. Ukoliko se upozorenja ruskih ekonomskih zvaničnika pokažu tačnim, naredna faza rata mogla bi biti određena ne samo vojnim događajima, već i sposobnošću države da izdrži finansijski teret dugotrajnog sukoba. Istorija pokazuje da se granice ekonomske izdržljivosti često približavaju neprimetno — sve dok ne postanu presudan faktor.",
];

export default function MoskvaUpozoravaPutinaRatnaPotrosnjaPostajeNeodrziva() {
  return (
    <ArticleTemplate
      path="/geopolitika/moskva-upozorava-putina-ratna-potrosnja-postaje-neodrziva"
      sectionLabel="Geopolitika"
      title="Moskva upozorava Putina: ratna potrošnja postaje neodrživa"
      dateLabel="2. JUN 2026."
      authorLabel="Novi Talas"
      deck="Ruski finansijski zvaničnici navodno upozoravaju da troškovi rata u Ukrajini sve ozbiljnije pritiskaju budžet, dok vojni vrh traži nova sredstva i odbija smanjenje odbrambenih rashoda."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija"
      imageCredit="Ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
