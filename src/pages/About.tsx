import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Star, Trophy, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-scale">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-1 glow-pink">
              👤 Get to Know Me
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate creator bringing ideas to life through code and design
            </p>
          </div>

          {/* Main Content */}
          <Card className="glass-card p-12 mb-12 border-2 border-primary/20">
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="w-12 h-12 text-primary glow-pink" />
              <h2 className="text-3xl font-bold text-foreground">My Story</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Kanika</span>, a creative developer and designer with a passion 
                for building beautiful, functional digital experiences.
              </p>
              <p>
                My journey in the world of technology started with a curiosity about how things work, 
                and it has evolved into a career where I get to combine creativity with technical expertise 
                to solve real-world problems.
              </p>
              <p>
                I believe that great design is not just about aesthetics—it's about creating intuitive, 
                accessible experiences that make people's lives easier and more enjoyable.
              </p>
            </div>
          </Card>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
                What Drives Me
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card p-6 border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105">
                <Heart className="w-10 h-10 text-primary mb-4 glow-pink" />
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  I love what I do and pour my heart into every project
                </p>
              </Card>

              <Card className="glass-card p-6 border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105">
                <Target className="w-10 h-10 text-primary mb-4 glow-pink" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering the highest quality in everything
                </p>
              </Card>

              <Card className="glass-card p-6 border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-105">
                <Zap className="w-10 h-10 text-primary mb-4 glow-pink" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Always exploring new technologies and creative solutions
                </p>
              </Card>
            </div>
          </div>

          {/* Achievements */}
          <Card className="glass-card p-12 border-2 border-primary/20">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="w-12 h-12 text-primary glow-pink" />
              <h2 className="text-3xl font-bold text-foreground">Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">50+ Successful Projects</h3>
                  <p className="text-muted-foreground">
                    Delivered high-quality solutions across various domains
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">100% Client Satisfaction</h3>
                  <p className="text-muted-foreground">
                    Building long-term relationships through exceptional work
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">3+ Years Experience</h3>
                  <p className="text-muted-foreground">
                    Continuously learning and growing in the field
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Modern Tech Stack</h3>
                  <p className="text-muted-foreground">
                    Proficient in latest tools and technologies
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;