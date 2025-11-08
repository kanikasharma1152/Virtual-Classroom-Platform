import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent, role: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Welcome back, ${role}!`);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-animated flex items-center justify-center p-4">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 group">
        <GraduationCap className="w-8 h-8 text-primary group-hover:animate-float" />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
          EduCloud
        </span>
      </Link>

      <Card className="glass-card w-full max-w-md p-8 animate-fade-in glow-pink">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Login to continue your learning journey</p>
        </div>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-navy">
            <TabsTrigger value="student" className="data-[state=active]:bg-primary">
              Student
            </TabsTrigger>
            <TabsTrigger value="teacher" className="data-[state=active]:bg-primary">
              Teacher
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <form onSubmit={(e) => handleLogin(e, "Student")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </Label>
                <Input
                  id="student-email"
                  type="email"
                  placeholder="student@example.com"
                  className="bg-navy border-navy-light focus:border-primary glow-pink"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Password
                </Label>
                <Input
                  id="student-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-navy border-navy-light focus:border-primary glow-pink"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 glow-pink"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login as Student"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="teacher">
            <form onSubmit={(e) => handleLogin(e, "Teacher")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teacher-email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </Label>
                <Input
                  id="teacher-email"
                  type="email"
                  placeholder="teacher@example.com"
                  className="bg-navy border-navy-light focus:border-primary glow-pink"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher-password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Password
                </Label>
                <Input
                  id="teacher-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-navy border-navy-light focus:border-primary glow-pink"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 glow-pink"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login as Teacher"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button className="text-primary hover:underline font-semibold">
              Sign up
            </button>
          </p>
          <button className="text-sm text-muted-foreground hover:text-primary">
            Forgot password?
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
