import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Sparkles, Smile, Heart, Star, Zap } from "lucide-react";
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
        "What's my next class?": "🎓 Your next class is Web Development with Dr. Smith at 2:00 PM in Virtual Room 1. Don't forget to bring your project files!",
        "Show my assignments": "📚 You have 3 pending assignments:\n1. React Project (Due: Tomorrow) - 75% complete\n2. Algorithm Analysis (Due: 3 days) - Not started\n3. Database Design (Due: 1 week) - 50% complete\n\nWould you like help with any of them?",
        "Check my attendance": "✅ Your attendance this semester is 92%. You've attended 24 out of 26 classes. Keep up the great work! 🌟",
        "View class schedule": "📅 You have 2 classes today:\n- Web Development at 9:00 AM ✓\n- Data Structures at 2:00 PM\n\nTomorrow you have 3 classes scheduled.",
        "hello": "👋 Hello! I'm so happy to chat with you! How can I help you today?",
        "hi": "Hi there! 😊 What would you like to know about your classes?",
        "help": "💡 I can help you with:\n• Class schedules and timings\n• Assignment deadlines and progress\n• Attendance records\n• Course materials\n• Study tips and resources\n\nJust ask me anything!",
      };

      const lowerMessage = message.toLowerCase();
      let responseContent = responses[message] || responses[lowerMessage];
      
      if (!responseContent) {
        const greetings = ["hello", "hi", "hey", "namaste"];
        const isGreeting = greetings.some(g => lowerMessage.includes(g));
        
        if (isGreeting) {
          responseContent = "👋 Hello! I'm your friendly AI assistant. How can I help you today? 😊";
        } else if (lowerMessage.includes("course")) {
          responseContent = "📖 I can help you explore your courses! You're currently enrolled in Web Development, Data Structures, and Database Management. Would you like to know more about any specific course?";
        } else if (lowerMessage.includes("assignment") || lowerMessage.includes("homework")) {
          responseContent = "📝 Let me check your assignments! You have some pending work. Would you like me to show you the details?";
        } else if (lowerMessage.includes("grade") || lowerMessage.includes("score")) {
          responseContent = "🎯 Your overall performance is excellent! Your average grade is 87%. Keep up the great work!";
        } else {
          responseContent = "I'm here to help you with your academic journey! 🌟 Ask me about classes, assignments, attendance, or anything else you'd like to know!";
        }
      }

      const aiMessage: Message = {
        role: "assistant",
        content: responseContent,
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
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <Sparkles className="w-5 h-5 text-white" />
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
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
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
            <div className="mb-6">
              <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                <Star className="w-3 h-3" />
                Try asking me:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs hover:bg-primary/10 hover:border-primary transition-all"
                    onClick={() => handleSend(question)}
                  >
                    {question}
                  </Button>
                ))}
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
                placeholder="Ask me anything... 💬"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-gradient-to-br from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 glow-pink flex-shrink-0"
                disabled={isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Chat Features Info */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card className="glass-card p-4 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Friendly & Smart</h3>
              <p className="text-xs text-muted-foreground">
                Chat naturally with your AI assistant
              </p>
            </Card>

            <Card className="glass-card p-4 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Instant Answers</h3>
              <p className="text-xs text-muted-foreground">
                Get quick responses to all your questions
              </p>
            </Card>

            <Card className="glass-card p-4 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Always Here</h3>
              <p className="text-xs text-muted-foreground">
                24/7 support for your learning journey
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
