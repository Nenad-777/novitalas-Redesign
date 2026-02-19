import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import GeopolitikaArticle from "./pages/GeopolitikaArticle";
import GeopolitikaIran from "./pages/GeopolitikaIran";
import GeopolitikaIndex from "./pages/GeopolitikaIndex";
import ObavestajniArticle from "./pages/ObavestajniArticle";
import SrbijaPage from "./pages/SrbijaPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />

      {/* Geopolitika */}
      <Route path={"/geopolitika"} component={GeopolitikaIndex} />
      <Route path={"/geopolitika/"} component={GeopolitikaIndex} />

      <Route path={"/geopolitika/iran"} component={GeopolitikaIran} />
      <Route path={"/geopolitika/iran/"} component={GeopolitikaIran} />

      <Route
        path={"/geopolitika/nova-bezbednosna-arhitektura"}
        component={GeopolitikaArticle}
      />
      <Route
        path={"/geopolitika/nova-bezbednosna-arhitektura/"}
        component={GeopolitikaArticle}
      />

      {/* Ostalo */}
      <Route
        path={"/obavestajni-izvori/rat-senki"}
        component={ObavestajniArticle}
      />
      <Route
        path={"/obavestajni-izvori/rat-senki/"}
        component={ObavestajniArticle}
      />

      <Route path={"/srbija"} component={SrbijaPage} />
      <Route path={"/srbija/"} component={SrbijaPage} />

      {/* Fallback */}
      <Route path={"/404"} component={NotFound} />
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
