import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Video, BookOpen, MessageSquare, TrendingUp, Shield, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section 
        className="relative container mx-auto px-4 pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto text-center fade-in-scale relative z-10">
          <div className="inline-block mb-6 relative">
            <GraduationCap className="w-24 h-24 text-primary float pulse-glow" />
            <Sparkles className="w-8 h-8 text-pink-light absolute -top-2 -right-2 animate-pulse" />
          </div>
          <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-1 glow-pink animate-pulse">
            🚀 Welcome to the Future of Education
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-pink-light bg-clip-text text-transparent animate-fade-in">
            Welcome to EduCloud
          </h1>
          <p className="text-base md:text-lg text-foreground/90 mb-6 font-medium slide-in-left max-w-2xl mx-auto">
            Next-generation virtual classroom powered by IBM Cloud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
            <Link to="/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink px-8 py-5 transition-all hover:scale-105 font-semibold">
                🚀 Get Started
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-5 transition-all hover:scale-105 font-semibold backdrop-blur-sm bg-background/20">
                ✨ View Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60 glow-pink" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-pink-light rounded-full animate-float opacity-40 pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-50 glow-pink" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-pink-light rounded-full animate-float opacity-30 pulse-glow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-light rounded-full animate-float opacity-50" style={{ animationDelay: '2.5s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-navy-dark">
        <div className="text-center mb-12 fade-in-scale">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">Powerful Features</h2>
          <p className="text-foreground/80 text-base">Everything you need for modern online education</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-navy-light hover:border-primary group"
              style={{ animation: `fade-in-scale 0.5s ease-out ${index * 0.1}s backwards` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-bounce transition-all" />
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why Choose EduCloud?</h2>
            <p className="text-foreground/80 text-base">Trusted by thousands of students and educators worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-sm text-muted-foreground">Student Satisfaction</p>
            </Card>
            
            <Card className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50K+</h3>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </Card>
            
            <Card className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-sm text-muted-foreground">Courses Available</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Our Students Say</h2>
            <p className="text-foreground/80 text-base">Real experiences from real learners</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg">👨‍🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-xs text-muted-foreground">Computer Science Student</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">"EduCloud transformed my learning experience. The AI assistant helped me understand complex concepts faster than ever before!"</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg">👩‍🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-xs text-muted-foreground">Data Science Student</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80">"The live classes are incredibly interactive. I feel more engaged here than in traditional classrooms. Highly recommend!"</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="glass-card p-12 text-center max-w-4xl mx-auto glow-blue border-2 border-primary/30 fade-in-scale relative overflow-hidden">
          <div className="absolute inset-0 shimmer opacity-30"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-foreground/80 text-base mb-6 relative z-10">
            Join thousands of students and teachers already using EduCloud
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink px-10 py-5 hover:scale-105 transition-all relative z-10 font-bold">
              🎓 Start Your Journey
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
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Powered by <span className="text-primary font-semibold">IBM Cloud</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Using IBM Watson, Cloudant, Cloud Object Storage & Cloud Foundry
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
