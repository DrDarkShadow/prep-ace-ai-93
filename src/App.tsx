import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PastInterviews from "./pages/PastInterviews";
import NotFound from "./pages/NotFound";
import InterviewPreparation from "./pages/InterviewPreparation";
import QuestionBank from "./pages/QuestionBank";
import UserFeedback from "./pages/UserFeedback";
import SuggestQuestions from "./pages/SuggestQuestions";
import TrendingQuestions from "./pages/TrendingQuestions";
import Discussions from "./pages/Discussions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/past-interviews" element={<PastInterviews />} />
            <Route path="/interview-preparation" element={<InterviewPreparation />} />
            <Route path="/question-bank" element={<QuestionBank />} />
            <Route path="/user-feedback" element={<UserFeedback />} />
            <Route path="/suggest-questions" element={<SuggestQuestions />} />
            <Route path="/trending-questions" element={<TrendingQuestions />} />
            <Route path="/discussions" element={<Discussions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
