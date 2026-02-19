import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import GeopolitikaArticle from "./pages/GeopolitikaArticle";
import ObavestajniArticle from "./pages/ObavestajniArticle";
import SrbijaPage from "./pages/SrbijaPage";
import GeopolitikaIran from "./pages/GeopolitikaIran";
import GeopolitikaIndex from "./pages/GeopolitikaIndex";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />

      {/* Geopolitika */}
      <Route path={"/geopolitika/iran"} component={GeopolitikaIran} />
      <Route
        path={"/geopolitika/nova-bezbednosna-arhitektura"}
        component={GeopolitikaArticle}
      />
      <Route path={"/geopolitika"} component={GeopolitikaIndex} />

      {/* Ostale rubrike */}
      <Route
        path={"/obavestajni-izvori/rat-senki"}
        component={ObavestajniArticle}
      />
      <Route path={"/srbija"} component={SrbijaPage} />

      {/* Fallback */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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

export default App;
