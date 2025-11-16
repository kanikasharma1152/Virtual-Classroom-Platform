import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Sparkles, Heart, Zap, Star, Rocket, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Building modern web applications with cutting-edge technologies"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Always exploring new ideas and creative solutions"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to crafting exceptional digital experiences"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
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
            <Sparkles className="w-24 h-24 text-primary float pulse-glow" />
            <Star className="w-8 h-8 text-pink-light absolute -top-2 -right-2 animate-pulse" />
          </div>
          <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-1 glow-pink animate-pulse">
            ✨ Welcome to My Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-pink-light bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Kanika
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium slide-in-left max-w-2xl mx-auto">
            Creative Developer & Designer
          </p>
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly digital experiences that make a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
            <Link to="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink px-8 py-6 transition-all hover:scale-105 font-semibold text-lg">
                🎨 View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 transition-all hover:scale-105 font-semibold text-lg backdrop-blur-sm bg-background/20">
                💌 Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60 glow-pink" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-pink-light rounded-full animate-float opacity-40 pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-50 glow-pink" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-primary rounded-full animate-float opacity-50 pulse-glow" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-pink-light rounded-full animate-float opacity-60 glow-pink" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 fade-in-scale">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-1">
            ✨ What I Do
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
            My Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining creativity with technical skills to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary/60 group cursor-pointer slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all glow-pink">
                  <skill.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-navy-dark to-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card p-8 text-center border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105 cursor-pointer">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4 glow-pink" />
            <h3 className="text-5xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground text-lg">Projects Completed</p>
          </Card>
          
          <Card className="glass-card p-8 text-center border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105 cursor-pointer">
            <Star className="w-16 h-16 text-primary mx-auto mb-4 glow-pink" />
            <h3 className="text-5xl font-bold text-primary mb-2">100%</h3>
            <p className="text-muted-foreground text-lg">Client Satisfaction</p>
          </Card>
          
          <Card className="glass-card p-8 text-center border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105 cursor-pointer">
            <Rocket className="w-16 h-16 text-primary mx-auto mb-4 glow-pink" />
            <h3 className="text-5xl font-bold text-primary mb-2">3+</h3>
            <p className="text-muted-foreground text-lg">Years Experience</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="glass-card p-12 text-center border-2 border-primary/40 relative overflow-hidden group hover:border-primary/80 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-pink-light/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 pulse-glow" />
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and help bring your ideas to life.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink px-10 py-6 transition-all hover:scale-110 font-semibold text-lg">
                💌 Start a Conversation
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 mt-20 py-12 glass-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary glow-pink" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
                Kanika
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">
                © 2024 Kanika. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with ❤️ and creativity
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
