import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Video, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Clock,
  Users,
  FileText,
  Play,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import dashboardBg from "@/assets/dashboard-bg.jpg";
import studentAvatar1 from "@/assets/student-avatar-1.png";
import studentAvatar2 from "@/assets/student-avatar-2.png";
import teacherAvatar from "@/assets/teacher-avatar.png";

const Dashboard = () => {
  const navigate = useNavigate();
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
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${dashboardBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Role Toggle */}
        <div className="flex justify-center mb-8 fade-in-scale">
          <div className="glass-card p-2 rounded-full inline-flex gap-2 border-2 border-navy-light">
            <Button
              onClick={() => setRole("student")}
              variant={role === "student" ? "default" : "ghost"}
              className={`px-6 py-4 transition-all ${role === "student" ? "bg-primary glow-pink scale-105" : "hover:scale-105"}`}
            >
              👨‍🎓 Student View
            </Button>
            <Button
              onClick={() => setRole("teacher")}
              variant={role === "teacher" ? "default" : "ghost"}
              className={`px-6 py-4 transition-all ${role === "teacher" ? "bg-primary glow-pink scale-105" : "hover:scale-105"}`}
            >
              👩‍🏫 Teacher View
            </Button>
          </div>
        </div>

        {/* Welcome Section with Avatar */}
        <div className="mb-8 flex items-center gap-4 slide-in-left glass-card p-6 rounded-2xl border-2 border-navy-light">
          <Avatar className="w-20 h-20 border-4 border-primary glow-pink">
            <AvatarImage src={role === "student" ? studentAvatar1 : teacherAvatar} alt="Profile" />
            <AvatarFallback>{role === "student" ? "S" : "T"}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-pink-light bg-clip-text text-transparent flex items-center gap-2">
              Welcome back, {role === "student" ? "Alex" : "Professor"}! 
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </h1>
            <p className="text-foreground/80 text-base">
              {role === "student" 
                ? "Ready to continue your learning journey? ✨" 
                : "Let's make today's classes amazing! 🚀"}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-navy-light hover:border-primary group"
              style={{ animation: `fade-in-scale 0.5s ease-out ${index * 0.1}s backwards` }}
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-8 h-8 text-primary group-hover:animate-bounce transition-all" />
                <span className="text-2xl font-bold text-primary group-hover:animate-pulse">{stat.value}</span>
              </div>
              <p className="text-sm text-foreground/70 font-semibold">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Classes */}
          <Card className="glass-card p-8 lg:col-span-2 slide-in-left border-2 border-navy-light hover:border-primary transition-all">
            <div className="flex items-center gap-3 mb-6 border-b border-navy-light pb-3">
              <Calendar className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-xl font-bold">📅 Upcoming Classes</h2>
            </div>
            <div className="space-y-4">
              {upcomingClasses.map((cls, index) => (
                <div 
                  key={index}
                  className="glass-card p-5 flex items-center justify-between hover:scale-105 transition-all cursor-pointer border border-navy-light hover:border-primary group"
                  style={{ animation: `slide-in-left 0.5s ease-out ${index * 0.1}s backwards` }}
                  onClick={() => cls.live && navigate("/live-class")}
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/50">
                      <AvatarImage src={studentAvatar2} />
                      <AvatarFallback>
                        <Video className="w-6 h-6 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                        {cls.subject}
                        {cls.live && (
                          <Badge className="bg-primary glow-pink animate-pulse px-2 py-1">
                            <Play className="w-3 h-3 mr-1" />
                            LIVE
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mt-1">
                        👨‍🏫 {cls.instructor} • ⏰ {cls.time}
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className={`px-5 hover:scale-105 transition-all font-semibold ${cls.live ? "bg-primary glow-pink animate-pulse" : "border-2 border-primary"}`}
                    variant={cls.live ? "default" : "outline"}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(cls.live ? "/live-class" : "/schedule");
                    }}
                  >
                    {cls.live ? "🚀 Join Now" : "📌 Schedule"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions & Assignments */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card className="glass-card p-8 slide-in-right border-2 border-navy-light hover:border-primary transition-all">
              <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                ⚡ Quick Actions
              </h2>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start py-5 bg-primary hover:bg-primary/90 hover:scale-105 transition-all glow-pink group"
                  onClick={() => navigate("/live-class")}
                >
                  <Video className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  {role === "student" ? "🎥 Join Live Class" : "🎬 Start Live Class"}
                </Button>
                <Button 
                  className="w-full justify-start py-5 bg-navy hover:bg-navy-light border-2 border-primary/50 hover:border-primary hover:scale-105 transition-all group"
                  onClick={() => navigate("/schedule")}
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  📅 View Schedule
                </Button>
                <Button 
                  className="w-full justify-start py-5 bg-navy hover:bg-navy-light border-2 border-primary/50 hover:border-primary hover:scale-105 transition-all group"
                  onClick={() => navigate("/chatbot")}
                >
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  🤖 Ask AI Assistant
                </Button>
                <Button 
                  className="w-full justify-start py-5 bg-navy hover:bg-navy-light border-2 border-primary/50 hover:border-primary hover:scale-105 transition-all group"
                  onClick={() => navigate("/courses")}
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  📚 Course Materials
                </Button>
              </div>
            </Card>

            {/* Assignments */}
            {role === "student" && (
              <Card className="glass-card p-8 fade-in-scale border-2 border-navy-light hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-6 border-b border-navy-light pb-3">
                  <FileText className="w-7 h-7 text-primary" />
                  <h2 className="text-2xl font-bold">📝 Assignments</h2>
                </div>
                <div className="space-y-4">
                  {assignments.map((assignment, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-navy/50 hover:bg-navy-light transition-all hover:scale-105 cursor-pointer border border-navy-light hover:border-primary"
                    >
                      <div>
                        <p className="font-bold text-base">{assignment.title}</p>
                        <p className="text-sm text-muted-foreground font-medium mt-1">⏰ Due: {assignment.due}</p>
                      </div>
                      <Badge 
                        className={`text-sm px-3 py-1 ${assignment.status === "submitted" ? "bg-green-600" : "bg-primary glow-pink"}`}
                      >
                        {assignment.status === "submitted" ? "✅ Submitted" : "⏳ Pending"}
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
