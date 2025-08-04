import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Filter, Star, Eye, Clock } from "lucide-react";

const QuestionBank = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", count: 1500 },
    { name: "JavaScript", count: 250, subtopics: ["React", "Node.js", "ES6+", "Async/Await"] },
    { name: "Python", count: 200, subtopics: ["Django", "Flask", "Data Science", "Machine Learning"] },
    { name: "System Design", count: 150, subtopics: ["Scalability", "Databases", "Microservices", "Caching"] },
    { name: "Data Structures", count: 180, subtopics: ["Arrays", "Linked Lists", "Trees", "Graphs"] },
    { name: "Algorithms", count: 160, subtopics: ["Sorting", "Searching", "Dynamic Programming", "Greedy"] },
    { name: "Behavioral", count: 120, subtopics: ["Leadership", "Teamwork", "Problem Solving", "Communication"] }
  ];

  const mockQuestions = [
    {
      id: 1,
      title: "Explain the concept of closures in JavaScript",
      category: "JavaScript",
      subtopic: "ES6+",
      difficulty: "Medium",
      views: 1250,
      rating: 4.8,
      timeToSolve: "15 min",
      tags: ["closures", "scope", "functions"]
    },
    {
      id: 2,
      title: "Design a URL shortening service like bit.ly",
      category: "System Design",
      subtopic: "Scalability",
      difficulty: "Hard",
      views: 980,
      rating: 4.9,
      timeToSolve: "45 min",
      tags: ["system-design", "scalability", "databases"]
    },
    {
      id: 3,
      title: "Implement a binary search algorithm",
      category: "Algorithms",
      subtopic: "Searching",
      difficulty: "Easy",
      views: 2100,
      rating: 4.6,
      timeToSolve: "20 min",
      tags: ["binary-search", "algorithms", "sorting"]
    },
    {
      id: 4,
      title: "Tell me about a time you had to work with a difficult team member",
      category: "Behavioral",
      subtopic: "Teamwork",
      difficulty: "Medium",
      views: 850,
      rating: 4.7,
      timeToSolve: "10 min",
      tags: ["behavioral", "teamwork", "conflict-resolution"]
    },
    {
      id: 5,
      title: "What is React Virtual DOM and how does it work?",
      category: "JavaScript",
      subtopic: "React",
      difficulty: "Medium",
      views: 1500,
      rating: 4.8,
      timeToSolve: "12 min",
      tags: ["react", "virtual-dom", "performance"]
    }
  ];

  const filteredQuestions = mockQuestions.filter(question => {
    const matchesCategory = selectedCategory === "All" || question.category === selectedCategory;
    const matchesSubtopic = !selectedSubtopic || question.subtopic === selectedSubtopic;
    const matchesSearch = !searchQuery || 
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSubtopic && matchesSearch;
  });

  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Question 
            <span className="text-gradient"> Bank</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of interview questions across different technologies and skills.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search questions, tags, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Filter className="mr-2 h-6 w-6" />
            Categories
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setSelectedSubtopic("");
                }}
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Subtopics */}
          {selectedCategoryData?.subtopics && (
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Subtopics</h4>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={!selectedSubtopic ? "default" : "outline"}
                  onClick={() => setSelectedSubtopic("")}
                >
                  All
                </Button>
                {selectedCategoryData.subtopics.map((subtopic) => (
                  <Button
                    key={subtopic}
                    size="sm"
                    variant={selectedSubtopic === subtopic ? "default" : "outline"}
                    onClick={() => setSelectedSubtopic(subtopic)}
                  >
                    {subtopic}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Questions List */}
        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-2xl font-semibold mb-4">
            Questions ({filteredQuestions.length})
          </h3>
          
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {filteredQuestions.map((question) => (
                <Card key={question.id} className="interactive-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold text-left flex-1 pr-4">
                        {question.title}
                      </CardTitle>
                      <Badge 
                        variant={question.difficulty === "Easy" ? "default" : 
                                question.difficulty === "Medium" ? "secondary" : "destructive"}
                      >
                        {question.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{question.category}</Badge>
                        <Badge variant="outline">{question.subtopic}</Badge>
                        {question.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {question.views}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                          {question.rating}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {question.timeToSolve}
                        </div>
                        <Button size="sm">
                          Practice
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;