import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Building2, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InterviewPreparation = () => {
  const navigate = useNavigate();

  const preparationTypes = [
    {
      icon: Brain,
      title: "Practice Based on Skills",
      description: "Enhance your technical and soft skills with targeted practice sessions. Choose from programming languages, frameworks, problem-solving, and communication skills.",
      features: ["Technical Skills", "Soft Skills", "Problem Solving", "Communication"],
      gradient: "from-blue-500 to-cyan-500",
      action: "Start Skill Practice"
    },
    {
      icon: Building2,
      title: "Practice Based on Company",
      description: "Prepare for specific companies with curated question sets. Practice with real interview questions from top tech companies and startups.",
      features: ["FAANG Companies", "Startups", "Fortune 500", "Industry Specific"],
      gradient: "from-purple-500 to-pink-500",
      action: "Start Company Practice"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Interview 
            <span className="text-gradient"> Preparation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preparation path and start mastering interview skills with our AI-powered platform.
          </p>
        </div>

        {/* Preparation Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {preparationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card 
                key={index} 
                className="interactive-card group h-full border-2 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${type.gradient} flex items-center justify-center`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {type.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full mt-6 group-hover:shadow-lg transition-all duration-300" 
                    size="lg"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    {type.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">What You'll Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">AI-Powered</div>
              <div className="text-muted-foreground">Smart feedback and personalized recommendations</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-accent mb-2">Real-time</div>
              <div className="text-muted-foreground">Instant analysis and performance tracking</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">Adaptive</div>
              <div className="text-muted-foreground">Questions that adapt to your skill level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparation;