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

// Privremena stranica da se sajt NE RUŠI i da link radi.
// Kasnije možeš napraviti poseban fajl SrbijaMarsZaPravosudje.tsx i ovde samo import.
function SrbijaMarsZaPravosudje() {
  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "48px 20px",
        fontFamily: "Crimson Pro, serif",
      }}
    >
      <h1 style={{ fontFamily: "Playfair Display, serif", marginBottom: 12 }}>
        Marš za pravosuđe
      </h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Tekst je u pripremi / vraćamo ga odmah čim finalizujemo uredničku verziju.
      </p>

      <p style={{ lineHeight: 1.75 }}>
        Ako želiš, pošalji mi tačan tekst ili link izvora i pretvaramo ovo u pun članak
        u vašem formatu (vest + komentar), bez ikakvog rizika po build.
      </p>
    </div>
  );
}

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

      {/* Srbija (index + 2 članka) */}
      <Route path="/srbija" component={SrbijaPage} />
      <Route path="/srbija/" component={SrbijaPage} />
      <Route path="/srbija/mars-za-pravosudje" component={SrbijaMarsZaPravosudje} />
<Route path="/srbija/mars-za-pravosudje/" component={SrbijaMarsZaPravosudje} />

      {/* 1) Podeljeno društvo */}
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
