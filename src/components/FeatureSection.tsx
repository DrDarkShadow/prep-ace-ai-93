import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp, HelpCircle } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "User Feedback",
      description: "Share your experience and help us improve the platform with your valuable feedback.",
      gradient: "from-blue-500 to-cyan-500",
      action: "Share Feedback"
    },
    {
      icon: HelpCircle,
      title: "Suggest Questions",
      description: "Contribute to our question bank by suggesting new interview questions with proper tags.",
      gradient: "from-purple-500 to-pink-500",
      action: "Suggest Question"
    },
    {
      icon: TrendingUp,
      title: "Trending Questions",
      description: "Discover the most popular and highly-rated questions from our community.",
      gradient: "from-green-500 to-emerald-500",
      action: "View Trending"
    },
    {
      icon: Users,
      title: "Discussions",
      description: "Join the community discussions and get answers to your interview preparation questions.",
      gradient: "from-orange-500 to-red-500",
      action: "Join Discussion"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community & 
            <span className="text-gradient"> Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of interview preparation enthusiasts and access powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="interactive-card group h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;