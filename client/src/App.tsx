import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import GeopolitikaIndex from "./pages/GeopolitikaIndex";
import GeopolitikaIran from "./pages/GeopolitikaIran";
import GeopolitikaArticle from "./pages/GeopolitikaArticle";

// ✅ VAŽNO: import mora da pogodi TAČNO ime fajla u /pages
import UkrajinaCetiriGodine from "./pages/ukrajina-cetiri-godine-rata";
import IranProtesti2026 from "./pages/iran-protesti-2026";

import ObavestajniArticle from "./pages/ObavestajniArticle";
import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";
import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";
import AlmaSkrivenoJezgro from "./pages/alma-skriveno-jezgro";

import SukobiIzraelIran2026 from "./pages/sukobi-izrael-iran-2026";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Geopolitika */}
      <Route path="/geopolitika/iran" component={GeopolitikaIran} />
      <Route path="/geopolitika/iran/" component={GeopolitikaIran} />

      <Route
        path="/geopolitika/nova-bezbednosna-arhitektura"
        component={GeopolitikaArticle}
      />
      <Route
        path="/geopolitika/nova-bezbednosna-arhitektura/"
        component={GeopolitikaArticle}
      />

      {/* ✅ NOVA VEST: Ukrajina */}
      <Route
        path="/geopolitika/ukrajina-cetiri-godine-rata"
        component={UkrajinaCetiriGodine}
      />
      <Route
        path="/geopolitika/ukrajina-cetiri-godine-rata/"
        component={UkrajinaCetiriGodine}
      />

      {/* ✅ NOVA VEST: Iran – protesti */}
      <Route
        path="/geopolitika/iran-protesti-2026"
        component={IranProtesti2026}
      />
      <Route
        path="/geopolitika/iran-protesti-2026/"
        component={IranProtesti2026}
      />

            {/* ✅ NOVA VEST: Izrael - Iran */}
      <Route
        path="/geopolitika/sukobi-izrael-iran-2026"
        component={SukobiIzraelIran2026}
      />
      <Route
        path="/geopolitika/sukobi-izrael-iran-2026/"
        component={SukobiIzraelIran2026}
      />

      <Route path="/geopolitika" component={GeopolitikaIndex} />
      <Route path="/geopolitika/" component={GeopolitikaIndex} />

      {/* Obaveštajni izvori */}
      <Route path="/obavestajni-izvori" component={ObavestajniArticle} />
      <Route path="/obavestajni-izvori/" component={ObavestajniArticle} />

      <Route
        path="/obavestajni-izvori/rat-senki"
        component={ObavestajniArticle}
      />
      <Route
        path="/obavestajni-izvori/rat-senki/"
        component={ObavestajniArticle}
      />

      {/* Srbija */}
      <Route path="/srbija" component={SrbijaPage} />
      <Route path="/srbija/" component={SrbijaPage} />

      <Route
        path="/srbija/mars-za-pravosudje"
        component={SrbijaMarsZaPravosudje}
      />
      <Route
        path="/srbija/mars-za-pravosudje/"
        component={SrbijaMarsZaPravosudje}
      />

      <Route path="/srbija/podeljeno-drustvo" component={SrbijaPolarizacija} />
      <Route
        path="/srbija/podeljeno-drustvo/"
        component={SrbijaPolarizacija}
      />

      {/* ✅ Naša planeta */}
      <Route path="/nasa-planeta" component={NasaPlanetaIndex} />
      <Route path="/nasa-planeta/" component={NasaPlanetaIndex} />

      <Route
        path="/nasa-planeta/alma-skriveno-jezgro"
        component={AlmaSkrivenoJezgro}
      />
      <Route
        path="/nasa-planeta/alma-skriveno-jezgro/"
        component={AlmaSkrivenoJezgro}
      />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
