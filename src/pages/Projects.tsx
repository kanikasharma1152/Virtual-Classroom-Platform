import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "✅",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing creative work with smooth animations and interactive elements.",
      tags: ["Next.js", "TypeScript", "Framer Motion"],
      image: "🎨",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location search, forecasts, and beautiful data visualizations.",
      tags: ["React", "Weather API", "Charts"],
      image: "🌤️",
      featured: false
    },
    {
      title: "Social Media App",
      description: "Social networking platform with posts, comments, likes, and real-time notifications.",
      tags: ["React", "Socket.io", "Express"],
      image: "💬",
      featured: true
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, SEO optimization, and analytics dashboard.",
      tags: ["Next.js", "MDX", "PostgreSQL"],
      image: "📝",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 fade-in-scale">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-1 glow-pink">
            🎨 My Work
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105 overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-pink-light/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-pink-light/30 transition-all">
                <span className="text-8xl">{project.image}</span>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/40 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary/40 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/40 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="glass-card p-12 text-center border-2 border-primary/40 mt-16">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 pulse-glow" />
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              Have a Project in Mind?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing digital experiences.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow-pink px-8 py-6 text-lg">
            💌 Let's Talk
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Projects;