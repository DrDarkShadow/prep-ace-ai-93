import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Star, Send, Bug, Lightbulb, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserFeedback = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [rating, setRating] = useState(0);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const feedbackTypes = [
    { id: "general", label: "General Feedback", icon: MessageSquare, color: "blue" },
    { id: "bug", label: "Bug Report", icon: Bug, color: "red" },
    { id: "feature", label: "Feature Request", icon: Lightbulb, color: "yellow" },
    { id: "interview", label: "Interview Experience", icon: Star, color: "green" },
    { id: "website", label: "Website Usability", icon: Heart, color: "purple" }
  ];

  const categoryOptions = [
    "User Interface", "Performance", "Content Quality", "Navigation", 
    "Mobile Experience", "Accessibility", "Documentation", "Pricing"
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setCategories([...categories, category]);
    } else {
      setCategories(categories.filter(c => c !== category));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackType || !subject || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your feedback. We'll review it and get back to you soon.",
    });

    // Reset form
    setFeedbackType("");
    setRating(0);
    setSubject("");
    setDescription("");
    setCategories([]);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            User 
            <span className="text-gradient"> Feedback</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your feedback helps us improve and build better features. Share your thoughts, report bugs, or suggest new ideas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Share Your Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Feedback Type */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    What type of feedback do you have? *
                  </Label>
                  <RadioGroup value={feedbackType} onValueChange={setFeedbackType}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {feedbackTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <Label 
                            key={type.id}
                            htmlFor={type.id}
                            className={`cursor-pointer border-2 rounded-lg p-4 transition-all duration-300 hover:shadow-md ${
                              feedbackType === type.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={type.id} id={type.id} />
                              <Icon className={`h-5 w-5 text-${type.color}-500`} />
                              <span className="font-medium">{type.label}</span>
                            </div>
                          </Label>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>

                {/* Rating */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    Overall Rating (Optional)
                  </Label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`h-8 w-8 transition-colors ${
                            star <= rating 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300 hover:text-yellow-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      You rated: {rating} star{rating !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    Related Areas (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categoryOptions.map((category) => (
                      <Label 
                        key={category}
                        className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-secondary/50"
                      >
                        <Checkbox 
                          checked={categories.includes(category)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <span className="text-sm">{category}</span>
                      </Label>
                    ))}
                  </div>
                  {categories.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge key={category} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-lg font-semibold mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief summary of your feedback"
                    className="h-12"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description" className="text-lg font-semibold mb-2 block">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide detailed feedback. For bug reports, include steps to reproduce the issue."
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Minimum 10 characters. Be as specific as possible.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-lg font-semibold mb-2 block">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="h-12"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Provide your email if you'd like us to follow up with you.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-12">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Feedback
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Why Your Feedback Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Improve Features</h4>
                <p className="text-muted-foreground text-sm">
                  Your suggestions help us enhance existing features and build new ones.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Bug className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Fix Issues</h4>
                <p className="text-muted-foreground text-sm">
                  Bug reports help us identify and resolve problems quickly.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Better Experience</h4>
                <p className="text-muted-foreground text-sm">
                  Your feedback shapes a better user experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;