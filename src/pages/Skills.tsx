import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Layout, Smartphone, Database, Zap, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript / JavaScript", level: 85 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Database Design", level: 75 },
        { name: "Authentication", level: 80 }
      ]
    },
    {
      icon: Palette,
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Design Systems", level: 85 }
      ]
    },
    {
      icon: Zap,
      title: "Tools & Technologies",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Vite / Webpack", level: 80 },
        { name: "Testing", level: 75 }
      ]
    }
  ];

  const softSkills = [
    {
      icon: Sparkles,
      title: "Problem Solving",
      description: "Breaking down complex challenges into manageable solutions"
    },
    {
      icon: Layout,
      title: "Creative Thinking",
      description: "Bringing innovative ideas and fresh perspectives to projects"
    },
    {
      icon: Smartphone,
      title: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 fade-in-scale">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-1 glow-pink">
            💎 My Expertise
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card p-8 border-2 border-primary/20 hover:border-primary/60 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/20 glow-pink">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              Professional Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={index}
                className="glass-card p-8 border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105 text-center"
              >
                <skill.icon className="w-12 h-12 text-primary mx-auto mb-4 glow-pink" />
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="glass-card p-12 text-center border-2 border-primary/40">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 pulse-glow" />
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Skills;