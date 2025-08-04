import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Plus, X, Send, HelpCircle, Tag, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SuggestQuestions = () => {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [sampleAnswer, setSampleAnswer] = useState("");
  const [hints, setHints] = useState("");
  const [questionType, setQuestionType] = useState("");
  const { toast } = useToast();

  const categories = [
    "JavaScript", "Python", "Java", "React", "Node.js", "System Design",
    "Data Structures", "Algorithms", "Behavioral", "Database", "DevOps",
    "Machine Learning", "Cybersecurity", "Product Management"
  ];

  const questionTypes = [
    { id: "technical", label: "Technical Question", description: "Coding or technical concept question" },
    { id: "behavioral", label: "Behavioral Question", description: "Soft skills and experience-based question" },
    { id: "system-design", label: "System Design", description: "Architecture and design question" },
    { id: "case-study", label: "Case Study", description: "Problem-solving scenario question" }
  ];

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim().toLowerCase())) {
      setTags([...tags, newTag.trim().toLowerCase()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question || !category || !difficulty || !questionType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (tags.length === 0) {
      toast({
        title: "Add Tags",
        description: "Please add at least one tag to help categorize your question.",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission
    toast({
      title: "Question Submitted!",
      description: "Thank you for contributing to our question bank. Your question will be reviewed and added soon.",
    });

    // Reset form
    setQuestion("");
    setCategory("");
    setDifficulty("");
    setExpectedTime("");
    setTags([]);
    setNewTag("");
    setSampleAnswer("");
    setHints("");
    setQuestionType("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Suggest 
            <span className="text-gradient"> Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help grow our question bank by contributing high-quality interview questions with proper tags and explanations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <HelpCircle className="mr-2 h-8 w-8" />
                Add New Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Question Type */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    Question Type *
                  </Label>
                  <RadioGroup value={questionType} onValueChange={setQuestionType}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {questionTypes.map((type) => (
                        <Label 
                          key={type.id}
                          htmlFor={type.id}
                          className={`cursor-pointer border-2 rounded-lg p-4 transition-all duration-300 hover:shadow-md ${
                            questionType === type.id 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={type.id} id={type.id} />
                              <span className="font-medium">{type.label}</span>
                            </div>
                            <p className="text-sm text-muted-foreground ml-6">
                              {type.description}
                            </p>
                          </div>
                        </Label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Question */}
                <div>
                  <Label htmlFor="question" className="text-lg font-semibold mb-2 block">
                    Question *
                  </Label>
                  <Textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Write your interview question here. Be clear and specific."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                {/* Category and Difficulty */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-lg font-semibold mb-2 block">
                      Category *
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-2 block">
                      Difficulty *
                    </Label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Expected Time */}
                <div>
                  <Label htmlFor="time" className="text-lg font-semibold mb-2 block">
                    Expected Time to Solve
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <Input
                      id="time"
                      value={expectedTime}
                      onChange={(e) => setExpectedTime(e.target.value)}
                      placeholder="e.g., 15 minutes, 30 minutes, 1 hour"
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <Label className="text-lg font-semibold mb-2 block">
                    Tags * (Help others find this question)
                  </Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-5 w-5 text-muted-foreground" />
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a tag (e.g., arrays, recursion, leadership)"
                        className="flex-1 h-12"
                      />
                      <Button type="button" onClick={handleAddTag} disabled={!newTag.trim()}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                            <span>{tag}</span>
                            <X 
                              className="h-3 w-3 cursor-pointer hover:text-destructive" 
                              onClick={() => handleRemoveTag(tag)}
                            />
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-sm text-muted-foreground">
                      Add relevant tags to help categorize your question. At least one tag is required.
                    </p>
                  </div>
                </div>

                {/* Sample Answer */}
                <div>
                  <Label htmlFor="answer" className="text-lg font-semibold mb-2 block">
                    Sample Answer (Optional)
                  </Label>
                  <Textarea
                    id="answer"
                    value={sampleAnswer}
                    onChange={(e) => setSampleAnswer(e.target.value)}
                    placeholder="Provide a sample answer or key points that should be covered"
                    className="min-h-[100px]"
                  />
                </div>

                {/* Hints */}
                <div>
                  <Label htmlFor="hints" className="text-lg font-semibold mb-2 block">
                    Hints or Tips (Optional)
                  </Label>
                  <Textarea
                    id="hints"
                    value={hints}
                    onChange={(e) => setHints(e.target.value)}
                    placeholder="Any hints or tips that might help candidates approach this question"
                    className="min-h-[80px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-12">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Question
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Question Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-green-600">✓ Good Questions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Clear and specific</li>
                  <li>• Relevant to real interviews</li>
                  <li>• Well-categorized with tags</li>
                  <li>• Include context when needed</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-red-600">✗ Avoid</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vague or ambiguous questions</li>
                  <li>• Duplicate existing questions</li>
                  <li>• Off-topic content</li>
                  <li>• Questions without proper tags</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-blue-600">💡 Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use specific, searchable tags</li>
                  <li>• Include difficulty level</li>
                  <li>• Add helpful hints</li>
                  <li>• Review before submitting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestQuestions;