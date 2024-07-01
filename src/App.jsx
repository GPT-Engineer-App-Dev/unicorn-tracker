import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UnicornManagement from "./pages/UnicornManagement.jsx";
import BreedingPairs from "./pages/BreedingPairs.jsx";
import ActivityLog from "./pages/ActivityLog.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import SidebarLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SidebarLayout />}>
                <Route index element={<Index />} />
                <Route path="unicorns" element={<UnicornManagement />} />
                <Route path="breeding-pairs" element={<BreedingPairs />} />
                <Route path="activity-log" element={<ActivityLog />} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;