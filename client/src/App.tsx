import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import GeopolitikaIndex from "./pages/GeopolitikaIndex";
import GeopolitikaIran from "./pages/GeopolitikaIran";
import GeopolitikaArticle from "./pages/GeopolitikaArticle";

import UkrajinaCetiriGodine from "./pages/ukrajina-cetiri-godine-rata";
import IranProtesti2026 from "./pages/iran-protesti-2026";
import SukobiIzraelIran2026 from "./pages/sukobi-izrael-iran-2026";
import Ormuz from "./pages/ormuz";
import VelikeSileIKrizaUIranu from "./pages/velike-sile-i-kriza-u-iranu";
import RezerveNafte from "./pages/rezerve-nafte";
import FrancuskaOdbranaOrmuza from "./pages/francuska-odbrana-ormuza";
import SadSpecijalnaOperacijaIranUranijum from "./pages/sad-specijalna-operacija-iran-uranijum";
import IranZatvaraOrmuskiMoreuzSvetUlaziUEnergetskuNeizvesnost from "./pages/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost";
import IranOtvorioHormuskiMoreuzZaKomercijalniSaobracajTokomPrimirja from "./pages/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja";
import BugarskaNaRaskrsniciRumenRadevVodiPremaIzlaznimAnketama from "./pages/bugarska-na-raskrsnici-rumen-radev-vodi-prema-izlaznim-anketama";

/* ✅ NOVA VEST — Obaveštajni izvori */
import NemackaCurenjeInformacija from "./pages/nemacka-curenje-informacija";

import ObavestajniArticle from "./pages/ObavestajniArticle";
import ObavestajniIndex from "./pages/ObavestajniIndex";
import KinaSpyBrodovi from "./pages/kina-spy-brodovi";
import CiaPokrenulaKampanju from "./pages/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira";
import PrviBrifing from "./pages/prvi-brifing";
import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";
import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

/* ✅ NOVA VEST — Geopolitika */
import PomeranjeTezistaOrbanEvropa from "./pages/pomeranje-tezista-orban-evropa";

/* ✅ NOVA VEST — Geopolitika */
import SadOdlazuIsporukeOruzjaEvropiZbogRataSaIranom from "./pages/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom";

/* ✅ NOVA VEST — Geopolitika */
import PrimirjeVaskrs from "./pages/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs";

/* ✅ NOVA VEST — Geopolitika */
import RusijaKinaFrancuskaBlokada from "./pages/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza";

/* ✅ NOVA VEST — Geopolitika */
import HargSrceIranskogIzvozaNafte from "./pages/harg-srce-iranskog-izvoza-nafte";

/* ✅ NOVA VEST — Geopolitika */
import KinaTestiraVodonicniAvion from "./pages/kina-testira-vodonicni-avion-pocetak-nove-energetske-trke-u-avijaciji";

/* ✅ NOVA VEST — Geopolitika */
import OborenF15eIran2026 from "./pages/oboren-f15e-iran-2026";

/* ✅ NOVA VEST — Geopolitika */
import InflacijaEvrozonaEcbMart from "./pages/inflacija-evrozona-ecb-mart";

/* ✅ NOVA VEST — Geopolitika */
import VensNetanjahuIranRat from "./pages/vens-netanjahu-iran-rat";

/* ✅ NOVA VEST — Geopolitika */
import UnIstragaSkolaIran from "./pages/un-istraga-skola-iran";

/* ✅ NOVA VEST — Geopolitika */
import OrbanPrekidGasUkrajina from "./pages/orban-prekid-gas-ukrajina";

/* ✅ NOVA VEST — Geopolitika */
import NemackaKritikaRatIran from "./pages/nemacka-kritika-rat-iran";

/* ✅ NOVA VEST — Geopolitika */
import MeloniReferendumItalija from "./pages/meloni-referendum-italija";

/* ✅ NOVA VEST — Geopolitika */
import IranTrumpOrmuskirMoreuz from "./pages/iran-trump-ormuski-moreuz";

/* ✅ NOVA VEST — Geopolitika */
import EnergetskiRat from "./pages/energetski-rat";

/* ✅ NOVA VEST — Geopolitika */
import OrmuzMoreuz from "./pages/ormuz-moreuz";

/* ✅ NOVA VEST — Geopolitika */
import RefugeesIranUn from "./pages/refugees-iran-un";
import BiennaleRusija from "./pages/biennale-rusija";
import SvetskaKrizaSveOzbiljnija from "./pages/svetska-kriza-sve-ozbiljnija";

/* ✅ NOVA VEST — Geopolitika */
import WestAgainstIsraelLiban from "./pages/west-against-israel-liban";

/* ✅ NOVA VEST — Geopolitika */
import TankerBezPogona from "./pages/tanker-bez-pogona";

/* ✅ NOVA VEST */
import SeloNePrastaPoraz from "./pages/selo-ne-prasta-poraz";

/* ✅ NOVA VEST — Srbija */
import TihoGasenjeSrpskihUniverzitetaNaKosovu from "./pages/tiho-gasenje-srpskih-univerziteta-na-kosovu";

/* ✅ NOVA VEST — Srbija */
import KoJePucaoUSrbiju from "./pages/ko-je-pucao-u-srbiju";

/* ✅ NOVA VEST — Srbija */
import AkademijaNovisad from "./pages/akademija-novisad";

/* ✅ NOVA VEST — Srbija */
import LokalniIzboriAnaliza from "./pages/lokalni-izbori-analiza";

/* ✅ NOVA ANALIZA — Srbija */
import SenkeNadEkranom from "./pages/senke-nad-ekranom-tiho-preuzimanje-ili-kontrolisano-gasenje-istine";

/* ✅ NOVA VEST — Srbija */
import IzboriNepravilnostiKrivicnaOdgovornost from "./pages/izbori-nepravilnosti-krivicna-odgovornost";

/* ✅ NOVA VEST — Srbija */
import IzboriRezultati from "./pages/izbori-rezultati";

import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";
import AlmaSkrivenoJezgro from "./pages/alma-skriveno-jezgro";
import SpilbergUpozoravaHolivudPublikaTraziOriginalneFilmove from "./pages/spilberg-upozorava-holivud-publika-trazi-originalne-filmove";
import UmetnostKojaDiseTeamlabTokio from "./pages/umetnost-koja-dise-teamlab-tokio";

/* ✅ NOVA VEST — Naša planeta */
import KoJeDobioOskara from "./pages/ko-je-dobio-oskara";

/* ✅ NOVA VEST — Naša planeta */
import NaucniciPoceliDaUsmeravajuSnove from "./pages/naucnici-poceli-da-usmeravaju-snove";
import AiVestSvest from "./pages/ai-vest-svest";
import Kubrick from "./pages/kubrick";
import KinaMozganiImplantat from "./pages/kina-mozgani-implantat";

/* ✅ NOVA VEST — Naša planeta */
import NajtoplijaDecenijaPlanetaUn from "./pages/najtoplija-decenija-planeta-un";
import MarsReka from "./pages/mars-reka";

/* ✅ BREAKING VEST — Naša planeta */
import BreakingNasaArtemisII from "./pages/breaking-nasa-artemis-ii-mesec-posle-50-godina";

/* ✅ BREAKING VEST — Naša planeta — Rekord udaljenosti */
import ArtemisIIRekordUdaljenosti from "./pages/artemis-ii-rekord-udaljenosti";

/* ✅ BREAKING VEST — Naša planeta — Uživo prenos */
import ArtemisIIUzivoPrenosRekord from "./pages/artemis-ii-uzivo-prenos-rekord";
import ArtemisLiveArhiva from "./pages/artemis-live-arhiva";

/* ✅ NOVA VEST — Naša planeta */
import ArtemisIIOrionPolovinaPuta from "./pages/artemis-ii-orion-polovina-puta-do-meseca";

/* ✅ NOVA VEST — Naša planeta */
import ArtemisIIFotografijeDubokogSvemira from "./pages/artemis-ii-fotografije-dubokog-svemira";

/* ✅ GLAVNA VEST — Naša planeta — Artemis II splashdown */
import ArtemisIISplashdown from "./pages/artemis-ii-splashdown";

/* ✅ NOVA VEST — Naša planeta */
import MoonRing from "./pages/moon-ring";

/* ✅ NOVA VEST — Naša planeta */
import AiSuperaplikacija from "./pages/ai-superaplikacija";
import PsihologijaDosada from "./pages/psihologija-dosada";

/* ✅ ARHIVSKA STRANICA — Februar 2026 */
import ArhivaFebruar2026 from "./pages/ArhivaFebruar2026";

/* ✅ IZDANJE — Februar 2026 (nova, odvojena stranica) */
import IzdanjeFebruar2026 from "./pages/IzdanjeFebruar2026";

function NormalizePath() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location === "/") return;
    const normalized = location.replace(/\/+$/, "");
    if (normalized !== location) {
      setLocation(normalized, { replace: true } as any);
    }
  }, [location, setLocation]);

  return null;
}

function Router() {
  return (
    <>
      <NormalizePath />

      <Switch>
        {/* Home */}
        <Route path="/" component={Home} />

        {/* =========================
            GEOPOLITIKA
           ========================= */}
        <Route
          path="/geopolitika/iran-zatvara-ormuski-moreuz-svet-ulazi-u-energetsku-neizvesnost"
          component={IranZatvaraOrmuskiMoreuzSvetUlaziUEnergetskuNeizvesnost}
        />

        <Route
          path="/geopolitika/bugarska-na-raskrsnici-rumen-radev-vodi-prema-izlaznim-anketama"
          component={BugarskaNaRaskrsniciRumenRadevVodiPremaIzlaznimAnketama}
        />

        <Route
          path="/geopolitika/iran-otvorio-hormuski-moreuz-za-komercijalni-saobracaj-tokom-primirja"
          component={IranOtvorioHormuskiMoreuzZaKomercijalniSaobracajTokomPrimirja}
        />

        <Route
          path="/geopolitika/pomeranje-tezista-orban-evropa"
          component={PomeranjeTezistaOrbanEvropa}
        />

        <Route
          path="/geopolitika/sad-odlazu-isporuke-oruzja-evropi-zbog-rata-sa-iranom"
          component={SadOdlazuIsporukeOruzjaEvropiZbogRataSaIranom}
        />

        <Route
          path="/geopolitika/rusija-i-ukrajina-dogovorile-privremeno-primirje-za-pravoslavni-uskrs"
          component={PrimirjeVaskrs}
        />

        <Route
          path="/geopolitika/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza"
          component={RusijaKinaFrancuskaBlokada}
        />

        <Route
          path="/geopolitika/harg-srce-iranskog-izvoza-nafte"
          component={HargSrceIranskogIzvozaNafte}
        />

        <Route
          path="/geopolitika/kina-testira-vodonicni-avion-pocetak-nove-energetske-trke-u-avijaciji"
          component={KinaTestiraVodonicniAvion}
        />

        <Route
          path="/geopolitika/oboren-f15e-iran-2026"
          component={OborenF15eIran2026}
        />

        <Route
          path="/geopolitika/inflacija-evrozona-ecb-mart"
          component={InflacijaEvrozonaEcbMart}
        />

        <Route
          path="/geopolitika/vens-netanjahu-iran-rat"
          component={VensNetanjahuIranRat}
        />

        <Route
          path="/geopolitika/un-istraga-skola-iran"
          component={UnIstragaSkolaIran}
        />

        <Route
          path="/geopolitika/orban-prekid-gas-ukrajina"
          component={OrbanPrekidGasUkrajina}
        />

        <Route
          path="/geopolitika/nemacka-kritika-rat-iran"
          component={NemackaKritikaRatIran}
        />

        <Route
          path="/geopolitika/meloni-referendum-italija"
          component={MeloniReferendumItalija}
        />

        <Route
          path="/geopolitika/iran-trump-ormuski-moreuz"
          component={IranTrumpOrmuskirMoreuz}
        />

        <Route
          path="/geopolitika/ormuz-moreuz"
          component={OrmuzMoreuz}
        />

        <Route
          path="/geopolitika/energetski-rat"
          component={EnergetskiRat}
        />

        <Route path="/geopolitika/iran" component={GeopolitikaIran} />

        <Route
          path="/geopolitika/nova-bezbednosna-arhitektura"
          component={GeopolitikaArticle}
        />

        <Route
          path="/geopolitika/ukrajina-cetiri-godine-rata"
          component={UkrajinaCetiriGodine}
        />

        <Route
          path="/geopolitika/iran-protesti-2026"
          component={IranProtesti2026}
        />

        <Route
          path="/geopolitika/sukobi-izrael-iran-2026"
          component={SukobiIzraelIran2026}
        />

        <Route path="/geopolitika/ormuz" component={Ormuz} />

        <Route
          path="/geopolitika/francuska-odbrana-ormuza"
          component={FrancuskaOdbranaOrmuza}
        />

        <Route
          path="/geopolitika/sad-specijalna-operacija-iran-uranijum"
          component={SadSpecijalnaOperacijaIranUranijum}
        />

        <Route
          path="/geopolitika/rezerve-nafte"
          component={RezerveNafte}
        />

        <Route
          path="/geopolitika/biennale-rusija"
          component={BiennaleRusija}
        />

        <Route
          path="/geopolitika/refugees-iran-un"
          component={RefugeesIranUn}
        />

        <Route
          path="/geopolitika/tanker-bez-pogona"
          component={TankerBezPogona}
        />

        <Route
          path="/geopolitika/zapadne-sile-upozorile-izrael"
          component={WestAgainstIsraelLiban}
        />

        <Route
          path="/geopolitika/svetska-kriza-sve-ozbiljnija"
          component={SvetskaKrizaSveOzbiljnija}
        />

        <Route
          path="/geopolitika/velike-sile-i-kriza-u-iranu"
          component={VelikeSileIKrizaUIranu}
        />

        <Route path="/geopolitika" component={GeopolitikaIndex} />

        {/* =========================
            OBAVEŠTAJNI IZVORI
           ========================= */}
        <Route path="/obavestajni-izvori" component={ObavestajniIndex} />

        <Route
          path="/obavestajni-izvori/nemacka-curenje-informacija"
          component={NemackaCurenjeInformacija}
        />

        <Route
          path="/obavestajni-izvori/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira"
          component={CiaPokrenulaKampanju}
        />

        <Route
          path="/obavestajni-izvori/kina-spy-brodovi"
          component={KinaSpyBrodovi}
        />

        <Route
          path="/obavestajni-izvori/prvi-brifing"
          component={PrviBrifing}
        />

        <Route
          path="/obavestajni-izvori/rat-senki"
          component={ObavestajniArticle}
        />

        {/* =========================
            SRBIJA
           ========================= */}
        <Route path="/srbija" component={SrbijaPage} />

        <Route
          path="/srbija/senke-nad-ekranom-tiho-preuzimanje-ili-kontrolisano-gasenje-istine"
          component={SenkeNadEkranom}
        />

        <Route
          path="/srbija/izbori-nepravilnosti-krivicna-odgovornost"
          component={IzboriNepravilnostiKrivicnaOdgovornost}
        />

        <Route
          path="/srbija/izbori-rezultati"
          component={IzboriRezultati}
        />

        <Route
          path="/srbija/lokalni-izbori-analiza"
          component={LokalniIzboriAnaliza}
        />

        <Route
          path="/srbija/akademija-novisad"
          component={AkademijaNovisad}
        />

        <Route
          path="/srbija/tiho-gasenje-srpskih-univerziteta-na-kosovu"
          component={TihoGasenjeSrpskihUniverzitetaNaKosovu}
        />

        <Route
          path="/srbija/ko-je-pucao-u-srbiju"
          component={KoJePucaoUSrbiju}
        />

        <Route
          path="/srbija/selo-ne-prasta-poraz-vest"
          component={SeloNePrastaPoraz}
        />

        <Route
          path="/srbija/mars-za-pravosudje"
          component={SrbijaMarsZaPravosudje}
        />

        <Route
          path="/srbija/podeljeno-drustvo"
          component={SrbijaPolarizacija}
        />

        {/* =========================
            NAŠA PLANETA
           ========================= */}
        <Route path="/nasa-planeta" component={NasaPlanetaIndex} />

        <Route
          path="/nasa-planeta/spilberg-upozorava-holivud-publika-trazi-originalne-filmove"
          component={SpilbergUpozoravaHolivudPublikaTraziOriginalneFilmove}
        />
        <Route
          path="/nasa-planeta/umetnost-koja-dise-teamlab-tokio"
          component={UmetnostKojaDiseTeamlabTokio}
        />

        <Route
          path="/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina"
          component={BreakingNasaArtemisII}
        />

        <Route
          path="/nasa-planeta/artemis-ii-rekord-udaljenosti"
          component={ArtemisIIRekordUdaljenosti}
        />

        <Route
          path="/nasa-planeta/artemis-ii-uzivo-prenos-rekord"
          component={ArtemisIIUzivoPrenosRekord}
        />

        <Route
          path="/nasa-planeta/artemis-live"
          component={ArtemisLiveArhiva}
        />

        <Route
          path="/nasa-planeta/artemis-ii-orion-polovina-puta-do-meseca"
          component={ArtemisIIOrionPolovinaPuta}
        />

        <Route
          path="/nasa-planeta/artemis-ii-splashdown"
          component={ArtemisIISplashdown}
        />

        <Route
          path="/nasa-planeta/artemis-ii-fotografije-dubokog-svemira"
          component={ArtemisIIFotografijeDubokogSvemira}
        />

        <Route
          path="/nasa-planeta/moon-ring"
          component={MoonRing}
        />

        <Route
          path="/nasa-planeta/najtoplija-decenija-planeta-un"
          component={NajtoplijaDecenijaPlanetaUn}
        />

        <Route
          path="/nasa-planeta/mars-reka"
          component={MarsReka}
        />

        <Route
          path="/nasa-planeta/ai-superaplikacija"
          component={AiSuperaplikacija}
        />

        <Route
          path="/nasa-planeta/ko-je-dobio-oskara"
          component={KoJeDobioOskara}
        />

        <Route
          path="/nasa-planeta/alma-skriveno-jezgro"
          component={AlmaSkrivenoJezgro}
        />

        <Route
          path="/nasa-planeta/naucnici-poceli-da-usmeravaju-snove"
          component={NaucniciPoceliDaUsmeravajuSnove}
        />

        <Route
          path="/nasa-planeta/ai-vest-svest"
          component={AiVestSvest}
        />

        <Route
          path="/nasa-planeta/kubrick"
          component={Kubrick}
        />

        <Route
          path="/nasa-planeta/kina-mozgani-implantat"
          component={KinaMozganiImplantat}
        />

        <Route
          path="/nasa-planeta/psihologija-dosada"
          component={PsihologijaDosada}
        />

        {/* =========================
            ARHIVA
           ========================= */}
        <Route path="/arhiva/februar-2026" component={ArhivaFebruar2026} />
        <Route path="/izdanje/februar-2026" component={IzdanjeFebruar2026} />

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
