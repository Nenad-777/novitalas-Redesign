import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";

// Geopolitika
import GeopolitikaIndex from "./pages/GeopolitikaIndex";
import GeopolitikaIran from "./pages/GeopolitikaIran";
import GeopolitikaArticle from "./pages/GeopolitikaArticle";
import UkrajinaCetiriGodine from "./pages/UkrajinaCetiriGodine";

// Obaveštajni izvori
import ObavestajniArticle from "./pages/ObavestajniArticle";

// Srbija
import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";
import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

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

      {/* Geopolitika — Ukrajina (nova vest) */}
      <Route
        path="/geopolitika/ukrajina-cetiri-godine-rata"
        component={UkrajinaCetiriGodine}
      />
      <Route
        path="/geopolitika/ukrajina-cetiri-godine-rata/"
        component={UkrajinaCetiriGodine}
      />

      {/* Geopolitika index */}
      <Route path="/geopolitika" component={GeopolitikaIndex} />
      <Route path="/geopolitika/" component={GeopolitikaIndex} />

      {/* Obaveštajni izvori */}
      <Route path="/obavestajni-izvori" component={ObavestajniArticle} />
      <Route path="/obavestajni-izvori/" component={ObavestajniArticle} />

      <Route path="/obavestajni-izvori/rat-senki" component={ObavestajniArticle} />
      <Route path="/obavestajni-izvori/rat-senki/" component={ObavestajniArticle} />

      {/* Srbija */}
      <Route path="/srbija" component={SrbijaPage} />
      <Route path="/srbija/" component={SrbijaPage} />

      <Route path="/srbija/mars-za-pravosudje" component={SrbijaMarsZaPravosudje} />
      <Route path="/srbija/mars-za-pravosudje/" component={SrbijaMarsZaPravosudje} />

      <Route path="/srbija/podeljeno-drustvo" component={SrbijaPolarizacija} />
      <Route path="/srbija/podeljeno-drustvo/" component={SrbijaPolarizacija} />

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
