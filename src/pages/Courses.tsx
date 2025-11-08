import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play } from "lucide-react";
import Navbar from "@/components/Navbar";

const Courses = () => {
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
    <div className="min-h-screen gradient-animated">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">My Courses</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{course.image}</div>
              
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary">
                  {course.level}
                </Badge>
                {course.progress > 0 && (
                  <Badge variant="secondary">
                    In Progress
                  </Badge>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  {course.students} students
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  {course.rating} rating
                </div>
              </div>

              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-semibold">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-navy rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary glow-pink transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <Button className="w-full bg-primary hover:bg-primary/90 glow-pink">
                <Play className="w-4 h-4 mr-2" />
                {course.progress > 0 ? "Continue Learning" : "Start Course"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
