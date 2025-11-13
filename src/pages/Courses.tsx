import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Dr. Smith",
      students: 156,
      duration: "12 weeks",
      rating: 4.8,
      progress: 65,
      image: "🌐",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      instructor: "Prof. Johnson",
      students: 142,
      duration: "10 weeks",
      rating: 4.9,
      progress: 45,
      image: "🧮",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      instructor: "Dr. Williams",
      students: 198,
      duration: "16 weeks",
      rating: 4.7,
      progress: 30,
      image: "🤖",
      level: "Advanced"
    },
    {
      id: 4,
      title: "Cloud Computing with IBM",
      instructor: "Prof. Davis",
      students: 134,
      duration: "8 weeks",
      rating: 4.6,
      progress: 80,
      image: "☁️",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Dr. Martinez",
      students: 167,
      duration: "14 weeks",
      rating: 4.8,
      progress: 20,
      image: "📱",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "Cybersecurity Basics",
      instructor: "Prof. Anderson",
      students: 189,
      duration: "10 weeks",
      rating: 4.9,
      progress: 0,
      image: "🔒",
      level: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-navy-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-12 relative z-10">
        <div className="mb-8 text-center fade-in-scale">
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-pink-light bg-clip-text text-transparent">
            📚 My Courses
          </h1>
          <p className="text-foreground/80 text-base">Continue your learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className="glass-card p-8 hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer border-2 border-navy-light hover:border-primary group"
              style={{ animation: `fade-in-scale 0.5s ease-out ${index * 0.1}s backwards` }}
            >
              <div className="text-8xl mb-6 group-hover:animate-bounce">{course.image}</div>
              
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary text-base px-3 py-1 glow-pink">
                  {course.level}
                </Badge>
                {course.progress > 0 && (
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    ⚡ In Progress
                  </Badge>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
              <p className="text-base text-muted-foreground mb-6 font-medium">👨‍🏫 {course.instructor}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-base text-foreground/80 font-medium">
                  <Users className="w-5 h-5 text-primary" />
                  👥 {course.students} students enrolled
                </div>
                <div className="flex items-center gap-3 text-base text-foreground/80 font-medium">
                  <Clock className="w-5 h-5 text-primary" />
                  ⏱️ {course.duration} duration
                </div>
                <div className="flex items-center gap-3 text-base text-foreground/80 font-medium">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  ⭐ {course.rating} rating
                </div>
              </div>

              {course.progress > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between text-base mb-3">
                    <span className="text-foreground/80 font-semibold">Progress</span>
                    <span className="text-primary font-bold text-lg">{course.progress}%</span>
                  </div>
                  <div className="h-3 bg-navy rounded-full overflow-hidden border border-navy-light">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-pink-light glow-pink transition-all duration-500 animate-pulse"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <Button className="w-full bg-primary hover:bg-primary/90 glow-pink text-lg py-7 hover:scale-105 transition-all font-semibold">
                <Play className="w-5 h-5 mr-2" />
                {course.progress > 0 ? "🚀 Continue Learning" : "▶️ Start Course"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
