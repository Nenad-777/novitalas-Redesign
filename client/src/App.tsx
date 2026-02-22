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

import ObavestajniArticle from "./pages/ObavestajniArticle";

import SrbijaPage from "./pages/SrbijaPage";
import SrbijaPolarizacija from "./pages/SrbijaPolarizacija";

// Ako imaš (ili napraviš) drugi fajl za drugi tekst, otkomentariši:
// import SrbijaMarsZaPravosudje from "./pages/SrbijaMarsZaPravosudje";

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

      <Route path="/geopolitika" component={GeopolitikaIndex} />
      <Route path="/geopolitika/" component={GeopolitikaIndex} />

      {/* Obaveštajni izvori */}
      <Route path="/obavestajni-izvori" component={ObavestajniArticle} />
      <Route path="/obavestajni-izvori/" component={ObavestajniArticle} />

      <Route path="/obavestajni-izvori/rat-senki" component={ObavestajniArticle} />
      <Route path="/obavestajni-izvori/rat-senki/" component={ObavestajniArticle} />

      {/* Srbija - INDEX */}
      <Route path="/srbija" component={SrbijaPage} />
      <Route path="/srbija/" component={SrbijaPage} />

      {/* Srbija - ČLANCI (ove rute rešavaju 404) */}
      <Route path="/srbija/podeljeno-drustvo" component={SrbijaPolarizacija} />
      <Route path="/srbija/podeljeno-drustvo/" component={SrbijaPolarizacija} />

      // Ako imaš drugi page za drugi članak, otkomentariši ove dve:
      // <Route path="/srbija/mars-za-pravosudje" component={SrbijaMarsZaPravosudje} />
      // <Route path="/srbija/mars-za-pravosudje/" component={SrbijaMarsZaPravosudje} />

      {/* Fallback: ako neko pogodi nepoznat Srbija slug, bar da ne pukne hard */}
      <Route path="/srbija/:slug" component={NotFound} />

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
