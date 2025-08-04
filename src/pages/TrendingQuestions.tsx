import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star, TrendingUp, Eye, Clock, ThumbsUp, Filter } from "lucide-react";

const TrendingQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeFilter, setTimeFilter] = useState("week");

  const categories = [
    { name: "All", count: 150 },
    { name: "JavaScript", count: 35 },
    { name: "Python", count: 28 },
    { name: "System Design", count: 22 },
    { name: "React", count: 18 },
    { name: "Algorithms", count: 25 },
    { name: "Behavioral", count: 15 }
  ];

  const timeFilters = [
    { id: "day", label: "Today" },
    { id: "week", label: "This Week" },
    { id: "month", label: "This Month" },
    { id: "all", label: "All Time" }
  ];

  const trendingQuestions = [
    {
      id: 1,
      title: "How do you handle state management in large React applications?",
      category: "React",
      difficulty: "Hard",
      stars: 487,
      views: 12450,
      upvotes: 234,
      timeToSolve: "30 min",
      trending_score: 95,
      tags: ["react", "state-management", "redux", "context"],
      author: "senior_dev_123",
      weeklyGrowth: "+45%"
    },
    {
      id: 2,
      title: "Design a URL shortening service like bit.ly",
      category: "System Design",
      difficulty: "Hard",
      stars: 523,
      views: 18200,
      upvotes: 298,
      timeToSolve: "45 min",
      trending_score: 92,
      tags: ["system-design", "scalability", "microservices"],
      author: "architect_pro",
      weeklyGrowth: "+38%"
    },
    {
      id: 3,
      title: "Implement a debounce function in JavaScript",
      category: "JavaScript",
      difficulty: "Medium",
      stars: 356,
      views: 9800,
      upvotes: 178,
      timeToSolve: "20 min",
      trending_score: 88,
      tags: ["javascript", "closures", "timing", "optimization"],
      author: "js_ninja",
      weeklyGrowth: "+52%"
    },
    {
      id: 4,
      title: "Tell me about a time when you disagreed with your manager",
      category: "Behavioral",
      difficulty: "Medium",
      stars: 289,
      views: 7650,
      upvotes: 145,
      timeToSolve: "10 min",
      trending_score: 85,
      tags: ["behavioral", "conflict-resolution", "communication"],
      author: "hr_expert",
      weeklyGrowth: "+29%"
    },
    {
      id: 5,
      title: "Find the longest palindromic substring",
      category: "Algorithms",
      difficulty: "Medium",
      stars: 412,
      views: 11200,
      upvotes: 189,
      timeToSolve: "25 min",
      trending_score: 83,
      tags: ["algorithms", "strings", "dynamic-programming"],
      author: "algo_master",
      weeklyGrowth: "+33%"
    },
    {
      id: 6,
      title: "Explain Python's GIL and its impact on multi-threading",
      category: "Python",
      difficulty: "Hard",
      stars: 378,
      views: 8900,
      upvotes: 167,
      timeToSolve: "15 min",
      trending_score: 81,
      tags: ["python", "gil", "threading", "performance"],
      author: "python_guru",
      weeklyGrowth: "+41%"
    },
    {
      id: 7,
      title: "How would you optimize a slow database query?",
      category: "Database",
      difficulty: "Hard",
      stars: 334,
      views: 6700,
      upvotes: 134,
      timeToSolve: "20 min",
      trending_score: 78,
      tags: ["database", "optimization", "indexing", "sql"],
      author: "db_specialist",
      weeklyGrowth: "+26%"
    }
  ];

  const filteredQuestions = trendingQuestions.filter(question => 
    selectedCategory === "All" || question.category === selectedCategory
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "default";
      case "Medium": return "secondary";
      case "Hard": return "destructive";
      default: return "default";
    }
  };

  const getTrendingIcon = (score: number) => {
    if (score >= 90) return "🔥";
    if (score >= 80) return "⭐";
    return "📈";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trending 
            <span className="text-gradient"> Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most popular and highly-rated questions from our community based on stars, views, and engagement.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center space-x-2"
                >
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Time Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Period</h3>
            <div className="flex flex-wrap gap-3">
              {timeFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={timeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setTimeFilter(filter.id)}
                  size="sm"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl text-center">
            <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-500">+47%</div>
            <div className="text-sm text-muted-foreground">Weekly Growth</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">2.4K</div>
            <div className="text-sm text-muted-foreground">Total Stars</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Eye className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">89K</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <ThumbsUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">1.3K</div>
            <div className="text-sm text-muted-foreground">Total Upvotes</div>
          </div>
        </div>

        {/* Questions List */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Trending Questions ({filteredQuestions.length})
          </h3>
          
          <ScrollArea className="h-[700px] pr-4">
            <div className="space-y-6">
              {filteredQuestions.map((question, index) => (
                <Card key={question.id} className="interactive-card hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Trending Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    {getTrendingIcon(question.trending_score)}
                    <span className="ml-1">#{index + 1}</span>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start pr-20">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold mb-3 leading-relaxed">
                          {question.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant="outline">{question.category}</Badge>
                          <Badge variant={getDifficultyColor(question.difficulty)}>
                            {question.difficulty}
                          </Badge>
                          <div className="flex items-center text-sm text-green-600 font-medium">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {question.weeklyGrowth}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {question.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                            <span className="font-medium">{question.stars}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>{question.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{question.upvotes}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{question.timeToSolve}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-xs text-muted-foreground">
                            by @{question.author}
                          </span>
                          <Button size="sm">
                            Practice Now
                          </Button>
                        </div>
                      </div>

                      {/* Trending Score Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Trending Score</span>
                          <span className="font-semibold">{question.trending_score}/100</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${question.trending_score}%` }}
                          />
                        </div>
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

export default TrendingQuestions;