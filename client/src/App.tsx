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

// ✅ VAŽNO: import mora da pogodi TAČNO ime fajla u /pages
import UkrajinaCetiriGodine from "./pages/ukrajina-cetiri-godine-rata";
import IranProtesti2026 from "./pages/iran-protesti-2026";
import SukobiIzraelIran2026 from "./pages/sukobi-izrael-iran-2026";
import Ormuz from "./pages/ormuz";

import ObavestajniArticle from "./pages/ObavestajniArticle";
import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";
import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

import NasaPlanetaIndex from "./pages/NasaPlanetaIndex";
import AlmaSkrivenoJezgro from "./pages/alma-skriveno-jezgro";

/**
 * ✅ Normalizuje URL:
 * - /nešto/  -> /nešto
 * - //...   -> /
 * - ne dira root "/"
 *
 * Ovo ti zamenjuje potrebu da dupliraš sve rute sa i bez trailing slash.
 */
function NormalizePath() {
  const [location, setLocation] = useLocation();

  // ne diramo root
  if (location === "/") return null;

  // skini višak slash-eva na kraju
  const normalized = location.replace(/\/+$/, "");

  // ako se razlikuje, preusmeri
  if (normalized !== location) {
    // replace: true da ne pravi novu istoriju (wouter podržava objekat)
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
            GEOPOLITIKA (specifično)
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

        {/* ✅ NOVA VEST: Ormuski moreuz */}
        <Route path="/geopolitika/ormuz" component={Ormuz} />

        {/* Geopolitika index (mora posle specifičnih ruta) */}
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
