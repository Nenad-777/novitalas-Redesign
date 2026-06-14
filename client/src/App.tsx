import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, useLocation } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import LegacyApp from "./AppRoutes";
import StaKratkiVideoSnimciRadeDecjemMozgu from "./pages/sta-kratki-video-snimci-rade-decjem-mozgu";

const NERVE_LAB_PATH = "/nasa-planeta/sta-kratki-video-snimci-rade-decjem-mozgu";

export default function App() {
  const [location] = useLocation();
  const normalizedLocation = location.replace(/\/+$/, "") || "/";

  if (normalizedLocation !== NERVE_LAB_PATH) {
    return <LegacyApp />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Route
            path={NERVE_LAB_PATH}
            component={StaKratkiVideoSnimciRadeDecjemMozgu}
          />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
