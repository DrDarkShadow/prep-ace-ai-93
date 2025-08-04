import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Award, Clock, Eye } from "lucide-react";

const PastInterviews = () => {
  // Mock data for past interviews
  const pastInterviews = [
    {
      id: 1,
      title: "Frontend Developer Technical Interview",
      date: "2024-01-15",
      duration: "45 min",
      score: 85,
      totalQuestions: 15,
      correctAnswers: 13,
      difficulty: "Medium",
      category: "Frontend",
      status: "Completed"
    },
    {
      id: 2,
      title: "React.js Specialist Interview",
      date: "2024-01-14",
      duration: "60 min",
      score: 92,
      totalQuestions: 20,
      correctAnswers: 18,
      difficulty: "Hard",
      category: "React",
      status: "Completed"
    },
    {
      id: 3,
      title: "JavaScript Fundamentals Assessment",
      date: "2024-01-13",
      duration: "30 min",
      score: 78,
      totalQuestions: 12,
      correctAnswers: 9,
      difficulty: "Easy",
      category: "JavaScript",
      status: "Completed"
    },
    {
      id: 4,
      title: "Full Stack Developer Interview",
      date: "2024-01-12",
      duration: "90 min",
      score: 88,
      totalQuestions: 25,
      correctAnswers: 22,
      difficulty: "Hard",
      category: "Full Stack",
      status: "Completed"
    },
    {
      id: 5,
      title: "Node.js Backend Interview",
      date: "2024-01-11",
      duration: "50 min",
      score: 76,
      totalQuestions: 18,
      correctAnswers: 14,
      difficulty: "Medium",
      category: "Backend",
      status: "Completed"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success/10 text-success border-success/20';
      case 'Medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'Hard': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 75) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">Past Interviews</h1>
            <p className="text-muted-foreground text-lg">Review your interview history and performance</p>
          </div>

          {/* Statistics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="interactive-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{pastInterviews.length}</p>
                    <p className="text-sm text-muted-foreground">Total Interviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Award className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {Math.round(pastInterviews.reduce((acc, interview) => acc + interview.score, 0) / pastInterviews.length)}%
                    </p>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4.2h</p>
                    <p className="text-sm text-muted-foreground">Total Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary-glow/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interview History Table */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Interview History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastInterviews.map((interview) => (
                  <div 
                    key={interview.id}
                    className="p-6 rounded-lg border bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      {/* Left Section */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{interview.title}</h3>
                          <Badge className={getDifficultyColor(interview.difficulty)}>
                            {interview.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {interview.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {interview.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {interview.category}
                          </div>
                        </div>
                      </div>

                      {/* Middle Section - Results */}
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${getScoreColor(interview.score)}`}>
                            {interview.score}%
                          </div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold">
                            {interview.correctAnswers}/{interview.totalQuestions}
                          </div>
                          <div className="text-xs text-muted-foreground">Correct</div>
                        </div>
                      </div>

                      {/* Right Section - Actions */}
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PastInterviews;