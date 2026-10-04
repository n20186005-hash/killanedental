import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import ContactPage from "@/pages/ContactPage";
import { ContentPage } from "@/pages/ContentPage";
import ReviewsPage from "@/pages/ReviewsPage";
import { landingPages } from "@/lib/pageContent";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path={landingPages.medicalCard.path} component={() => <ContentPage page={landingPages.medicalCard} />} />
        <Route path={landingPages.preventive.path} component={() => <ContentPage page={landingPages.preventive} />} />
        <Route path={landingPages.hygiene.path} component={() => <ContentPage page={landingPages.hygiene} />} />
        <Route path={landingPages.restorative.path} component={() => <ContentPage page={landingPages.restorative} />} />
        <Route path={landingPages.cosmetic.path} component={() => <ContentPage page={landingPages.cosmetic} />} />
        <Route path={landingPages.family.path} component={() => <ContentPage page={landingPages.family} />} />
        <Route path={landingPages.nervousPatients.path} component={() => <ContentPage page={landingPages.nervousPatients} />} />
        <Route path={landingPages.newPatients.path} component={() => <ContentPage page={landingPages.newPatients} />} />
        <Route path={landingPages.aboutDoctor.path} component={() => <ContentPage page={landingPages.aboutDoctor} />} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

