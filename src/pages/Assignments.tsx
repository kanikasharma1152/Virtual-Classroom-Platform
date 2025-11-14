import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Calendar, Clock, CheckCircle2, AlertCircle, BookOpen } from "lucide-react";
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
            📚 My Assignments
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Track, submit, and manage your coursework all in one place
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur-sm animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Completed Assignments</span>
                <span className="font-semibold">
                  {completedAssignments} / {totalAssignments}
                </span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {assignments.filter((a) => a.status === "pending").length}
                  </div>
                  <div className="text-xs text-muted-foreground">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {assignments.filter((a) => a.status === "submitted").length}
                  </div>
                  <div className="text-xs text-muted-foreground">Submitted</div>
                </div>
                <div className="text-center">
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
        <Tabs defaultValue="all" className="animate-slide-in-right">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
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
                      <CardTitle className="text-lg mb-2 flex items-center gap-2">
                        {assignment.title}
                        <Badge className={getStatusColor(assignment.status)}>
                          {getStatusIcon(assignment.status)}
                          {assignment.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-xs">{assignment.description}</CardDescription>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <BookOpen className="w-3 h-3" />
                          {assignment.subject}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          Due: {assignment.dueDate}
                        </span>
                        {assignment.daysLeft > 0 && assignment.status === "pending" && (
                          <span
                            className={`flex items-center gap-1 font-semibold ${
                              assignment.daysLeft <= 2 ? "text-red-400" : "text-yellow-400"
                            }`}
                          >
                            <Clock className="w-3 h-3" />
                            {assignment.daysLeft} days left
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{assignment.points}</div>
                      <div className="text-xs text-muted-foreground">Points</div>
                      {assignment.status === "graded" && assignment.score && (
                        <div className="mt-2">
                          <div className="text-lg font-semibold text-green-400">{assignment.score}</div>
                          <div className="text-xs text-muted-foreground">Your Score</div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                {assignment.status === "pending" && (
                  <CardContent className="pt-0">
                    <div className="flex flex-col gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-3">
                        <Input
                          type="file"
                          onChange={handleFileChange}
                          className="flex-1 text-xs"
                          accept=".pdf,.doc,.docx,.zip"
                        />
                        <Button
                          onClick={() => handleSubmit(assignment.id)}
                          size="sm"
                          className="gap-2"
                        >
                          <Upload className="w-4 h-4" />
                          Submit
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Accepted formats: PDF, DOC, DOCX, ZIP (Max 10MB)
                      </p>
                    </div>
                  </CardContent>
                )}

                {assignment.status === "submitted" && (
                  <CardContent className="pt-0">
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-xs text-blue-300">
                        ✅ Submitted on {assignment.submittedDate} - Waiting for grading
                      </p>
                    </div>
                  </CardContent>
                )}

                {assignment.status === "graded" && (
                  <CardContent className="pt-0">
                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-xs text-green-300">
                        🎉 Graded! You scored {assignment.score} out of {assignment.points} points
                      </p>
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
      </main>
    </div>
  );
};

export default Assignments;
