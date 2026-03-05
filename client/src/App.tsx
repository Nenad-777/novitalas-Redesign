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

import ObavestajniArticle from "./pages/ObavestajniArticle";
import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";
import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

/* ✅ NOVA VEST */
import SeloNePrastaPoraz from "./pages/selo-ne-prasta-poraz";

import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";
import AlmaSkrivenoJezgro from "./pages/alma-skriveno-jezgro";

function NormalizePath() {
  const [location, setLocation] = useLocation();

  if (location === "/") return null;

  const normalized = location.replace(/\/+$/, "");

  if (normalized !== location) {
    setLocation(normalized, { replace: true } as any);
  }

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

        <Route path="/geopolitika" component={GeopolitikaIndex} />

        {/* =========================
            OBAVEŠTAJNI IZVORI
           ========================= */}
        <Route path="/obavestajni-izvori" component={ObavestajniArticle} />

        <Route
          path="/obavestajni-izvori/rat-senki"
          component={ObavestajniArticle}
        />

        {/* =========================
            SRBIJA
           ========================= */}
        <Route path="/srbija" component={SrbijaPage} />

        <Route
          path="/srbija/selo-ne-prasta-poraz"
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
          path="/nasa-planeta/alma-skriveno-jezgro"
          component={AlmaSkrivenoJezgro}
        />

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
