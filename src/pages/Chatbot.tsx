import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import aiRobot from "@/assets/ai-robot.png";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your EduCloud AI Assistant powered by IBM Watson. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What's my next class?",
    "Show my assignments",
    "Check my attendance",
    "View class schedule",
  ];

  const handleSend = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        "What's my next class?": "Your next class is Web Development with Dr. Smith at 2:00 PM in Virtual Room 1.",
        "Show my assignments": "You have 3 pending assignments:\n1. React Project (Due: Tomorrow)\n2. Algorithm Analysis (Due: 3 days)\n3. Database Design (Due: 1 week)",
        "Check my attendance": "Your attendance this semester is 92%. You've attended 24 out of 26 classes.",
        "View class schedule": "You have 2 classes today:\n- Web Development at 9:00 AM\n- Data Structures at 2:00 PM",
      };

      const aiMessage: Message = {
        role: "assistant",
        content: responses[message] || "I can help you with class schedules, assignments, attendance, and more. What would you like to know?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in text-center">
            <div className="inline-block mb-3">
              <img src={aiRobot} alt="AI Robot Assistant" className="w-24 h-24 animate-float" />
            </div>
            <h1 className="text-2xl font-bold mb-2">AI Assistant</h1>
            <Badge className="bg-primary glow-pink text-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Powered by IBM Watson
            </Badge>
          </div>

          {/* Chat Container */}
          <Card className="glass-card p-6 animate-slide-up mb-6">
            {/* Messages */}
            <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground glow-pink"
                        : "glass-card"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="glass-card rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/schedule")}
                  className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  View Schedule
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/courses")}
                  className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  My Courses
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/live-class")}
                  className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  Join Live Class
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/dashboard")}
                  className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  Dashboard
                </Button>
              </div>
            </div>

            {/* Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-2"
            >
              <Input
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-navy border-navy-light focus:border-primary glow-pink"
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-primary hover:bg-primary/90 glow-pink flex-shrink-0"
                disabled={isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Features Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card 
              className="glass-card p-4 text-center animate-fade-in cursor-pointer hover:scale-105 transition-all" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => navigate("/schedule")}
            >
              <MessageSquare className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">24/7 Available</h3>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </Card>
            <Card 
              className="glass-card p-4 text-center animate-fade-in cursor-pointer hover:scale-105 transition-all" 
              style={{ animationDelay: '0.3s' }}
              onClick={() => navigate("/courses")}
            >
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">Smart Responses</h3>
              <p className="text-xs text-muted-foreground">Powered by IBM Watson</p>
            </Card>
            <Card 
              className="glass-card p-4 text-center animate-fade-in cursor-pointer hover:scale-105 transition-all" 
              style={{ animationDelay: '0.4s' }}
              onClick={() => navigate("/live-class")}
            >
              <Bot className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">Personalized</h3>
              <p className="text-xs text-muted-foreground">Learns your preferences</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
