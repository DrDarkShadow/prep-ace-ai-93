import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, ThumbsUp, Reply, Clock, Send, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Discussions = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { toast } = useToast();

  const categories = ["All", "Technical", "Behavioral", "Career", "Salary", "General"];

  const discussions = [
    {
      id: 1,
      title: "How do you negotiate salary as a junior developer?",
      author: { name: "Alex Chen", initials: "AC", reputation: 1250 },
      content: "I'm about to graduate and have received my first job offer. The salary seems a bit low compared to market rates. How should I approach salary negotiation as someone with no professional experience?",
      category: "Salary",
      tags: ["negotiation", "junior-dev", "career-advice"],
      likes: 23,
      replies: 8,
      timeAgo: "2 hours ago",
      isHot: true,
      lastActivity: "30 min ago"
    },
    {
      id: 2,
      title: "Best practices for handling errors in React applications?",
      author: { name: "Sarah Johnson", initials: "SJ", reputation: 890 },
      content: "I'm working on a React app and struggling with proper error handling. What are the best practices for handling errors both in components and in API calls? Should I use error boundaries everywhere?",
      category: "Technical",
      tags: ["react", "error-handling", "best-practices"],
      likes: 45,
      replies: 15,
      timeAgo: "5 hours ago",
      isHot: true,
      lastActivity: "1 hour ago"
    },
    {
      id: 3,
      title: "How to answer 'Tell me about yourself' effectively?",
      author: { name: "Mike Rodriguez", initials: "MR", reputation: 650 },
      content: "I always struggle with this question in interviews. I either ramble too much or keep it too short. What's the ideal structure and length for this answer?",
      category: "Behavioral",
      tags: ["interview-tips", "self-introduction", "behavioral"],
      likes: 31,
      replies: 12,
      timeAgo: "1 day ago",
      isHot: false,
      lastActivity: "3 hours ago"
    },
    {
      id: 4,
      title: "Should I learn TypeScript or focus on JavaScript mastery first?",
      author: { name: "Emma Wilson", initials: "EW", reputation: 420 },
      content: "I'm comfortable with JavaScript basics but not an expert yet. Companies are asking for TypeScript experience. Should I learn TS now or become really good at JS first?",
      category: "Career",
      tags: ["typescript", "javascript", "learning-path"],
      likes: 28,
      replies: 20,
      timeAgo: "2 days ago",
      isHot: false,
      lastActivity: "5 hours ago"
    },
    {
      id: 5,
      title: "Red flags to watch out for during the interview process?",
      author: { name: "David Park", initials: "DP", reputation: 1100 },
      content: "I've been through several interview processes and noticed some warning signs. What are the red flags candidates should watch for when evaluating companies?",
      category: "General",
      tags: ["red-flags", "company-culture", "interview-process"],
      likes: 67,
      replies: 24,
      timeAgo: "3 days ago",
      isHot: true,
      lastActivity: "2 hours ago"
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => 
    selectedCategory === "All" || discussion.category === selectedCategory
  );

  const handlePostQuestion = () => {
    if (!newQuestion.trim()) {
      toast({
        title: "Empty Question",
        description: "Please write your question before posting.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Question Posted!",
      description: "Your question has been posted to the community.",
    });
    setNewQuestion("");
  };

  const getReputationBadge = (reputation: number) => {
    if (reputation >= 1000) return { color: "bg-yellow-500", text: "Expert" };
    if (reputation >= 500) return { color: "bg-blue-500", text: "Advanced" };
    return { color: "bg-green-500", text: "Contributor" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Community 
            <span className="text-gradient"> Discussions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the conversation, ask questions, and share your experiences with fellow interview preparation enthusiasts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Post New Question */}
          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <MessageSquare className="mr-2 h-6 w-6" />
                Ask the Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="What would you like to ask the community? Be specific and provide context..."
                  className="min-h-[100px]"
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Be respectful and follow community guidelines
                  </p>
                  <Button onClick={handlePostQuestion}>
                    <Send className="mr-2 h-4 w-4" />
                    Post Question
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        onClick={() => setSelectedCategory(category)}
                        className="w-full justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  {/* Community Stats */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Community Stats</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Active Users
                        </span>
                        <span className="font-medium">1,247</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Today's Posts
                        </span>
                        <span className="font-medium">42</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Weekly Growth
                        </span>
                        <span className="font-medium text-green-600">+12%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">
                  Latest Discussions ({filteredDiscussions.length})
                </h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Latest</Button>
                  <Button variant="outline" size="sm">Hot</Button>
                  <Button variant="outline" size="sm">Most Liked</Button>
                </div>
              </div>

              <ScrollArea className="h-[800px] pr-4">
                <div className="space-y-6">
                  {filteredDiscussions.map((discussion) => {
                    const reputationBadge = getReputationBadge(discussion.author.reputation);
                    return (
                      <Card key={discussion.id} className="interactive-card hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  {discussion.author.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="font-semibold">{discussion.author.name}</h4>
                                  <div className={`px-2 py-1 rounded-full text-xs text-white ${reputationBadge.color}`}>
                                    {reputationBadge.text}
                                  </div>
                                  <span className="text-xs text-muted-foreground">{discussion.author.reputation} rep</span>
                                </div>
                                <CardTitle className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">
                                  {discussion.title}
                                  {discussion.isHot && (
                                    <Badge variant="destructive" className="ml-2">🔥 Hot</Badge>
                                  )}
                                </CardTitle>
                              </div>
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {discussion.timeAgo}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {discussion.content}
                          </p>
                          
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">{discussion.category}</Badge>
                              {discussion.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <button className="flex items-center hover:text-primary transition-colors">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                {discussion.likes}
                              </button>
                              <button className="flex items-center hover:text-primary transition-colors">
                                <Reply className="h-4 w-4 mr-1" />
                                {discussion.replies} replies
                              </button>
                              <span className="text-xs">
                                Last activity: {discussion.lastActivity}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;