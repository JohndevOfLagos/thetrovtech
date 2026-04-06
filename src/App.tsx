import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoginEmail from "./pages/LoginEmail.tsx";
import LoginPassword from "./pages/LoginPassword.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* "/" now shows 404 */}
          <Route path="/" element={<NotFound />} />

          {/* Your login page is now at /box/mail */}
          <Route path="/box/mail" element={<LoginEmail />} />
          <Route path="/box/mail/password" element={<LoginPassword />} />

          {/* Everything else also 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;