import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 floating-shapes" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Master Your 
              <span className="text-gradient block">
                Interview Skills
              </span>
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Prepare for your dream job with our AI-powered interview simulator. 
              Practice, improve, and succeed with personalized feedback.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-scale">
            <Button 
              variant="hero" 
              size="xl" 
              className="group animate-pulse-glow"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Interview Preparation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="secondary-hero" 
              size="xl"
              className="group"
            >
              <Target className="mr-2 h-5 w-5" />
              Explore Question Bank
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Practice Sessions</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-muted-foreground">Interview Questions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;