import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Calendar, Clock, CheckCircle2, AlertCircle, BookOpen, Trophy, Target, Sparkles, Star, Award, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const Assignments = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const assignments = [
    {
      id: 1,
      title: "React Hooks Assignment",
      subject: "Web Development",
      dueDate: "2025-11-20",
      daysLeft: 6,
      status: "pending",
      points: 100,
      description: "Create a custom React hook for form validation",
      submitted: false,
    },
    {
      id: 2,
      title: "Database Design Project",
      subject: "Database Systems",
      dueDate: "2025-11-18",
      daysLeft: 4,
      status: "pending",
      points: 150,
      description: "Design a normalized database schema for e-commerce",
      submitted: false,
    },
    {
      id: 3,
      title: "AI Model Training",
      subject: "Machine Learning",
      dueDate: "2025-11-15",
      daysLeft: 1,
      status: "submitted",
      points: 200,
      description: "Train a CNN model for image classification",
      submitted: true,
      submittedDate: "2025-11-14",
    },
    {
      id: 4,
      title: "REST API Development",
      subject: "Backend Development",
      dueDate: "2025-11-10",
      daysLeft: 0,
      status: "graded",
      points: 120,
      score: 115,
      description: "Build a RESTful API with authentication",
      submitted: true,
      submittedDate: "2025-11-09",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/50";
      case "submitted":
        return "bg-blue-500/20 text-blue-300 border-blue-500/50";
      case "graded":
        return "bg-green-500/20 text-green-300 border-green-500/50";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "submitted":
        return <CheckCircle2 className="w-4 h-4" />;
      case "graded":
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (assignmentId: number) => {
    if (!selectedFile) {
      toast.error("Please select a file to submit");
      return;
    }
    toast.success("Assignment submitted successfully! 🎉");
    setSelectedFile(null);
  };

  const completedAssignments = assignments.filter((a) => a.status === "graded").length;
  const totalAssignments = assignments.length;
  const overallProgress = (completedAssignments / totalAssignments) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in-scale">
          <div className="inline-block mb-4 animate-bounce">
            <span className="text-6xl">📚</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
            My Assignments
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Track, submit, and ace your coursework! 🎯
          </p>
        </div>

        {/* Achievement Banner */}
        <div className="mb-8 animate-slide-in-left">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 via-pink-500/10 to-primary/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl animate-pulse">🏆</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Keep up the great work!</h3>
                    <p className="text-sm text-muted-foreground">You're on track to complete all assignments on time</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-center px-4 py-2 bg-primary/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{completedAssignments}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center px-4 py-2 bg-yellow-500/20 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">
                      {assignments.filter((a) => a.status === "pending").length}
                    </div>
                    <div className="text-xs text-muted-foreground">Pending</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur-sm animate-slide-in-right">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-primary animate-pulse" />
              Your Progress Journey ✨
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm items-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  Completed Assignments
                </span>
                <span className="font-semibold text-lg">
                  {completedAssignments} / {totalAssignments}
                </span>
              </div>
              <div className="relative">
                <Progress value={overallProgress} className="h-4" />
                <div className="absolute top-0 right-0 -mt-1 -mr-1">
                  <span className="text-xl animate-bounce">🎯</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 hover:scale-105 transition-transform">
                  <div className="text-3xl mb-1">⏳</div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {assignments.filter((a) => a.status === "pending").length}
                  </div>
                  <div className="text-xs text-muted-foreground">Pending</div>
                </div>
                <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:scale-105 transition-transform">
                  <div className="text-3xl mb-1">✅</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {assignments.filter((a) => a.status === "submitted").length}
                  </div>
                  <div className="text-xs text-muted-foreground">Submitted</div>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20 hover:scale-105 transition-transform">
                  <div className="text-3xl mb-1">🌟</div>
                  <div className="text-2xl font-bold text-green-400">
                    {completedAssignments}
                  </div>
                  <div className="text-xs text-muted-foreground">Graded</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assignments Tabs */}
        <Tabs defaultValue="all" className="animate-fade-in-scale">
          <TabsList className="grid w-full grid-cols-4 mb-6 p-2 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              📋 All
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              ⏳ Pending
            </TabsTrigger>
            <TabsTrigger value="submitted" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              ✅ Submitted
            </TabsTrigger>
            <TabsTrigger value="graded" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              🌟 Graded
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {assignments.map((assignment, index) => (
              <Card
                key={assignment.id}
                className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="flex-1">
                      <CardTitle className="text-lg mb-2 flex items-center gap-2 flex-wrap">
                        {assignment.title}
                        <Badge className={getStatusColor(assignment.status)}>
                          {getStatusIcon(assignment.status)}
                          {assignment.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-xs mb-2">{assignment.description}</CardDescription>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                        <span className="flex items-center gap-1 text-muted-foreground bg-primary/5 px-2 py-1 rounded">
                          📖 {assignment.subject}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground bg-primary/5 px-2 py-1 rounded">
                          📅 Due: {assignment.dueDate}
                        </span>
                        {assignment.daysLeft > 0 && assignment.status === "pending" && (
                          <span
                            className={`flex items-center gap-1 font-semibold px-2 py-1 rounded ${
                              assignment.daysLeft <= 2 
                                ? "bg-red-500/20 text-red-400 animate-pulse" 
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            ⏰ {assignment.daysLeft} days left
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right bg-gradient-to-br from-primary/10 to-pink-500/10 p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Trophy className="w-5 h-5 text-primary" />
                        <div className="text-2xl font-bold text-primary">{assignment.points}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">Points</div>
                      {assignment.status === "graded" && assignment.score && (
                        <div className="mt-3 pt-3 border-t border-primary/20">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Star className="w-4 h-4 text-green-400" />
                            <div className="text-xl font-semibold text-green-400">{assignment.score}</div>
                          </div>
                          <div className="text-xs text-muted-foreground">Your Score ✨</div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                {assignment.status === "pending" && (
                  <CardContent className="pt-0">
                    <div className="flex flex-col gap-3 p-4 bg-gradient-to-r from-primary/5 via-pink-500/5 to-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">📤</span>
                        <span className="text-sm font-semibold">Submit Your Work</span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <Input
                          type="file"
                          onChange={handleFileChange}
                          className="flex-1 text-xs border-primary/20"
                          accept=".pdf,.doc,.docx,.zip"
                        />
                        <Button
                          onClick={() => handleSubmit(assignment.id)}
                          size="sm"
                          className="gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 glow-pink"
                        >
                          <Upload className="w-4 h-4" />
                          Submit 🚀
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>📁</span>
                        Accepted: PDF, DOC, DOCX, ZIP (Max 10MB)
                      </p>
                    </div>
                  </CardContent>
                )}

                {assignment.status === "submitted" && (
                  <CardContent className="pt-0">
                    <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/30">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl animate-bounce">✅</span>
                        <div>
                          <p className="text-sm font-semibold text-blue-300 mb-1">
                            Successfully Submitted!
                          </p>
                          <p className="text-xs text-muted-foreground">
                            📅 {assignment.submittedDate} • ⏳ Waiting for grading
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}

                {assignment.status === "graded" && (
                  <CardContent className="pt-0">
                    <div className="p-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-lg border border-green-500/30">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">🎉</span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-green-300 mb-1 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Graded Successfully!
                          </p>
                          <p className="text-xs text-muted-foreground">
                            You scored <span className="font-bold text-green-400">{assignment.score}</span> out of{" "}
                            <span className="font-bold">{assignment.points}</span> points
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">
                            {Math.round((assignment.score! / assignment.points) * 100)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {assignments
              .filter((a) => a.status === "pending")
              .map((assignment, index) => (
                <Card
                  key={assignment.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{assignment.title}</CardTitle>
                        <CardDescription className="text-xs">{assignment.description}</CardDescription>
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            Due: {assignment.dueDate}
                          </span>
                          <span
                            className={`flex items-center gap-1 font-semibold ${
                              assignment.daysLeft <= 2 ? "text-red-400" : "text-yellow-400"
                            }`}
                          >
                            <Clock className="w-3 h-3" />
                            {assignment.daysLeft} days left
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-3">
                        <Input
                          type="file"
                          onChange={handleFileChange}
                          className="flex-1 text-xs"
                        />
                        <Button onClick={() => handleSubmit(assignment.id)} size="sm" className="gap-2">
                          <Upload className="w-4 h-4" />
                          Submit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="submitted" className="space-y-4">
            {assignments
              .filter((a) => a.status === "submitted")
              .map((assignment, index) => (
                <Card
                  key={assignment.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{assignment.title}</CardTitle>
                    <CardDescription className="text-xs">{assignment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-xs text-blue-300">
                        ✅ Submitted on {assignment.submittedDate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="graded" className="space-y-4">
            {assignments
              .filter((a) => a.status === "graded")
              .map((assignment, index) => (
                <Card
                  key={assignment.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{assignment.title}</CardTitle>
                        <CardDescription className="text-xs">{assignment.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{assignment.score}</div>
                        <div className="text-xs text-muted-foreground">
                          out of {assignment.points}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
          </TabsContent>
        </Tabs>

        {/* Study Tips Section */}
        <div className="mt-12 mb-8 animate-fade-in-scale">
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
            💡 Quick Study Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-semibold mb-2">Start Early</h3>
                <p className="text-xs text-muted-foreground">
                  Don't wait until the last minute. Break down tasks into smaller chunks!
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Set Goals</h3>
                <p className="text-xs text-muted-foreground">
                  Create a study schedule and stick to it. Consistency is key!
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-semibold mb-2">Ask for Help</h3>
                <p className="text-xs text-muted-foreground">
                  Use the AI chatbot or reach out to instructors when stuck!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Motivation Section */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 via-pink-500/5 to-primary/5 backdrop-blur-sm animate-fade-in-scale">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-4xl animate-bounce">🌟</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: "0.1s" }}>✨</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>💪</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
              You're Doing Amazing!
            </h2>
            <p className="text-muted-foreground mb-4">
              Every assignment you complete brings you closer to your goals. Keep pushing forward! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => navigate("/chatbot")}
                className="gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
              >
                <Sparkles className="w-4 h-4" />
                Get AI Help 🤖
              </Button>
              <Button
                onClick={() => navigate("/courses")}
                variant="outline"
                className="gap-2 border-primary/50"
              >
                <BookOpen className="w-4 h-4" />
                Browse Courses 📚
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Assignments;
