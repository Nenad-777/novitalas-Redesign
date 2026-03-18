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

import ObavestajniArticle from "./pages/ObavestajniArticle";
import ObavestajniIndex from "./pages/ObavestajniIndex";
import KinaSpyBrodovi from "./pages/kina-spy-brodovi";
import CiaPokrenulaKampanju from "./pages/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira";
import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";
import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

/* ✅ NOVA VEST — Geopolitika */
import RefugeesIranUn from "./pages/refugees-iran-un";
import BiennaleRusija from "./pages/biennale-rusija";
import SvetskaKrizaSveOzbiljnija from "./pages/svetska-kriza-sve-ozbiljnija";

/* ✅ NOVA VEST — Geopolitika */
import WestAgainstIsraelLiban from "./pages/west-against-israel-liban";

/* ✅ NOVA VEST */
import SeloNePrastaPoraz from "./pages/selo-ne-prasta-poraz";

/* ✅ NOVA VEST — Srbija */
import TihoGasenjeSrpskihUniverzitetaNaKosovu from "./pages/tiho-gasenje-srpskih-univerziteta-na-kosovu";

/* ✅ NOVA VEST — Srbija */
import KoJePucaoUSrbiju from "./pages/ko-je-pucao-u-srbiju";

/* ✅ NOVA VEST — Srbija */
import AkademijaNovisad from "./pages/akademija-novisad";

import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";
import AlmaSkrivenoJezgro from "./pages/alma-skriveno-jezgro";

/* ✅ NOVA VEST — Naša planeta */
import KoJeDobioOskara from "./pages/ko-je-dobio-oskara";

/* ✅ NOVA VEST — Naša planeta */
import NaucniciPoceliDaUsmeravajuSnove from "./pages/naucnici-poceli-da-usmeravaju-snove";
import AiVestSvest from "./pages/ai-vest-svest";
import Kubrick from "./pages/kubrick";
import KinaMozganiImplantat from "./pages/kina-mozgani-implantat";

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
          path="/obavestajni-izvori/cia-pokrenula-kampanju-za-regrutovanje-kineskih-vojnih-oficira"
          component={CiaPokrenulaKampanju}
        />

        <Route
          path="/obavestajni-izvori/kina-spy-brodovi"
          component={KinaSpyBrodovi}
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
