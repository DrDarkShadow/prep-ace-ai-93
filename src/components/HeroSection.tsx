import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 floating-shapes">
        <div className="floating-triangle animate-particle-float" />
        <div className="floating-square morphing-shape" />
        <div className="floating-hexagon float-animation" />
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="particle" style={{ top: `${Math.random() * 100}%` }} />
          ))}
        </div>
        
        {/* Additional Artistic Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-accent/15 to-primary-glow/10 rounded-full blur-lg float-animation" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-primary-glow/20 to-transparent rounded-full blur-md morphing-shape" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-reveal">Master Your</span>
              <span className="text-shimmer block mt-2">
                Interview Skills
              </span>
              <span className="text-gradient block">with AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-scale">
              Prepare for your dream job with our AI-powered interview simulator. 
              Practice, improve, and succeed with personalized feedback.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-scale">
            <Button 
              variant="hero" 
              size="xl" 
              className="group animate-pulse-glow magnetic-btn glow-on-hover relative overflow-hidden"
            >
              <Sparkles className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">Start Interview Preparation</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            
            <Button 
              variant="secondary-hero" 
              size="xl"
              className="group magnetic tilt-card relative"
            >
              <Target className="mr-2 h-5 w-5" />
              Explore Question Bank
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="glass-card p-6 rounded-xl tilt-card hover:shadow-2xl transition-all duration-500 group">
              <div className="text-3xl font-bold text-primary group-hover:text-shimmer">50K+</div>
              <div className="text-muted-foreground">Practice Sessions</div>
            </div>
            <div className="glass-card p-6 rounded-xl tilt-card hover:shadow-2xl transition-all duration-500 group">
              <div className="text-3xl font-bold text-accent group-hover:text-shimmer">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="glass-card p-6 rounded-xl tilt-card hover:shadow-2xl transition-all duration-500 group">
              <div className="text-3xl font-bold text-primary group-hover:text-shimmer">1000+</div>
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