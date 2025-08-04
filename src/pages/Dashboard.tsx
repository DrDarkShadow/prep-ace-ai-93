import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, FileText, TrendingUp, Clock, Target } from "lucide-react";

const Dashboard = () => {
  const [selectedInterview, setSelectedInterview] = useState<string | null>(null);

  // Mock data for demonstration
  const recentInterviews = [
    { id: "1", title: "Frontend Developer Interview", date: "2024-01-15", score: 85, status: "completed" },
    { id: "2", title: "React.js Technical Interview", date: "2024-01-14", score: 92, status: "completed" },
    { id: "3", title: "JavaScript Fundamentals", date: "2024-01-13", score: 78, status: "completed" },
  ];

  const mockQuestions = [
    { id: "q1", question: "What is React?", difficulty: "Easy", score: 90, time: "2:30" },
    { id: "q2", question: "Explain useState hook", difficulty: "Medium", score: 85, time: "3:45" },
    { id: "q3", question: "What is Virtual DOM?", difficulty: "Easy", score: 88, time: "2:15" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">Dashboard</h1>
            <p className="text-muted-foreground text-lg">Track your interview performance and analytics</p>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="interactive-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5h</div>
                <p className="text-xs text-muted-foreground">Practice time</p>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Improvement</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12%</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Recent Interviews
                </CardTitle>
                <CardDescription>Your latest interview performances</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInterviews.map((interview) => (
                  <div 
                    key={interview.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors cursor-pointer"
                    onClick={() => setSelectedInterview(interview.id)}
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{interview.title}</p>
                      <p className="text-sm text-muted-foreground">{interview.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{interview.score}%</div>
                      <div className="text-xs text-muted-foreground">{interview.status}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interview Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Interview Analytics</CardTitle>
                <CardDescription>
                  {selectedInterview ? "Question-wise performance analysis" : "Select an interview to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedInterview ? (
                  <div className="space-y-4">
                    {mockQuestions.map((question) => (
                      <div 
                        key={question.id}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{question.question}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            question.difficulty === 'Easy' ? 'bg-success/10 text-success' :
                            question.difficulty === 'Medium' ? 'bg-warning/10 text-warning' :
                            'bg-destructive/10 text-destructive'
                          }`}>
                            {question.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Score: {question.score}%</span>
                          <span>Time: {question.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Click on an interview to view detailed analytics
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;