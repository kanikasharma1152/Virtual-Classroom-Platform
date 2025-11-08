import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Video, BookOpen, MessageSquare, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = () => {
  const features = [
    {
      icon: Video,
      title: "Live Classes",
      description: "Interactive virtual classrooms with real-time collaboration"
    },
    {
      icon: BookOpen,
      title: "Smart Notes",
      description: "AI-powered note-taking and document management"
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "24/7 intelligent chatbot powered by IBM Watson"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Track progress with advanced performance insights"
    },
    {
      icon: Shield,
      title: "IBM Cloud",
      description: "Enterprise-grade security and reliability"
    },
    {
      icon: GraduationCap,
      title: "Personalized",
      description: "Adaptive learning paths for every student"
    }
  ];

  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <GraduationCap className="w-20 h-20 text-primary float animate-glow-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-pink-light bg-clip-text text-transparent">
            Welcome to EduCloud
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Next-generation virtual classroom powered by IBM Cloud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                View Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-light rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-light rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">Everything you need for modern online education</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-navy-light"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="glass-card p-12 text-center max-w-3xl mx-auto glow-blue">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of students and teachers already using EduCloud
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink text-lg px-10 py-6">
              Start Your Journey
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-light mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-semibold">EduCloud</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Powered by IBM Cloud | Built for Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
