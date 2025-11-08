import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Clock,
  Users,
  FileText,
  Play
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [role, setRole] = useState<"student" | "teacher">("student");

  const upcomingClasses = [
    { subject: "Web Development", time: "10:00 AM", instructor: "Dr. Smith", live: true },
    { subject: "Data Structures", time: "2:00 PM", instructor: "Prof. Johnson", live: false },
    { subject: "AI & Machine Learning", time: "4:30 PM", instructor: "Dr. Williams", live: false },
  ];

  const assignments = [
    { title: "React Project", due: "Tomorrow", status: "pending" },
    { title: "Algorithm Analysis", due: "3 days", status: "submitted" },
    { title: "Database Design", due: "1 week", status: "pending" },
  ];

  const stats = role === "student" 
    ? [
        { label: "Classes Attended", value: "24", icon: Video },
        { label: "Assignments", value: "8", icon: FileText },
        { label: "Performance", value: "92%", icon: TrendingUp },
        { label: "Hours Learned", value: "48", icon: Clock },
      ]
    : [
        { label: "Total Students", value: "156", icon: Users },
        { label: "Active Classes", value: "6", icon: Video },
        { label: "Assignments", value: "18", icon: FileText },
        { label: "Avg. Attendance", value: "89%", icon: TrendingUp },
      ];

  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Role Toggle */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="glass-card p-1 rounded-full inline-flex gap-2">
            <Button
              onClick={() => setRole("student")}
              variant={role === "student" ? "default" : "ghost"}
              className={role === "student" ? "bg-primary glow-pink" : ""}
            >
              Student View
            </Button>
            <Button
              onClick={() => setRole("teacher")}
              variant={role === "teacher" ? "default" : "ghost"}
              className={role === "teacher" ? "bg-primary glow-pink" : ""}
            >
              Teacher View
            </Button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {role === "student" ? "Alex" : "Professor"}! 👋
          </h1>
          <p className="text-muted-foreground">
            {role === "student" 
              ? "Ready to continue your learning journey?" 
              : "Let's make today's classes amazing!"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in glow-blue"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Classes */}
          <Card className="glass-card p-6 lg:col-span-2 animate-slide-up">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Upcoming Classes</h2>
            </div>
            <div className="space-y-4">
              {upcomingClasses.map((cls, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 flex items-center justify-between hover:scale-102 transition-transform"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        {cls.subject}
                        {cls.live && (
                          <Badge className="bg-primary glow-pink">
                            <Play className="w-3 h-3 mr-1" />
                            LIVE
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cls.instructor} • {cls.time}
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className={cls.live ? "bg-primary glow-pink" : ""}
                    variant={cls.live ? "default" : "outline"}
                  >
                    {cls.live ? "Join Now" : "Schedule"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions & Assignments */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-navy hover:bg-navy-light">
                  <Video className="w-4 h-4 mr-2" />
                  {role === "student" ? "Join Live Class" : "Start Live Class"}
                </Button>
                <Button className="w-full justify-start bg-navy hover:bg-navy-light">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {role === "student" ? "View Notes" : "Upload Notes"}
                </Button>
                <Button className="w-full justify-start bg-navy hover:bg-navy-light">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask AI Assistant
                </Button>
              </div>
            </Card>

            {/* Assignments */}
            {role === "student" && (
              <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Assignments</h2>
                </div>
                <div className="space-y-3">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{assignment.title}</p>
                        <p className="text-xs text-muted-foreground">Due: {assignment.due}</p>
                      </div>
                      <Badge variant={assignment.status === "submitted" ? "secondary" : "destructive"}>
                        {assignment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
