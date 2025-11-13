import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  MonitorUp, 
  MessageSquare,
  Users,
  Settings,
  PhoneOff,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const LiveClass = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [message, setMessage] = useState("");

  const participants = [
    { name: "Dr. Smith", role: "instructor", active: true },
    { name: "Alex Johnson", role: "student", active: true },
    { name: "Sarah Williams", role: "student", active: false },
    { name: "Mike Davis", role: "student", active: true },
    { name: "Emma Wilson", role: "student", active: true },
  ];

  const chatMessages = [
    { user: "Dr. Smith", message: "Welcome everyone!", time: "10:00" },
    { user: "Alex", message: "Good morning!", time: "10:01" },
    { user: "Sarah", message: "Can you share the slides?", time: "10:02" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast.success("Message sent!");
      setMessage("");
    }
  };

  const handleLeaveClass = () => {
    toast.success("You left the class");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-navy-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-12 relative z-10">
        <div className="mb-8 fade-in-scale">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-pink-light bg-clip-text text-transparent">
                🎥 Web Development - Live Class
              </h1>
              <p className="text-foreground/80 text-base font-medium">👨‍🏫 Dr. Smith • Started 15 min ago</p>
            </div>
            <Badge className="bg-primary glow-pink animate-pulse px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-bounce" />
              🔴 LIVE
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Video Area */}
          <Card className="glass-card lg:col-span-3 p-8 slide-in-left border-2 border-navy-light hover:border-primary transition-all">
            {/* Video Display */}
            <div className="aspect-video bg-navy rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden border-2 border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-70" />
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center">
                <Video className="w-24 h-24 text-primary mx-auto mb-4 pulse-glow animate-bounce" />
                <p className="text-2xl font-bold mb-2">Dr. Smith is presenting</p>
                <p className="text-base text-foreground/80 font-medium mt-2">📡 Video stream active</p>
              </div>
              
              {/* Participant count overlay */}
              <div className="absolute top-4 right-4 glass-card px-4 py-2 flex items-center gap-2 border-2 border-primary/50">
                <Users className="w-5 h-5 text-primary animate-pulse" />
                <span className="font-bold text-base">{participants.length} online</span>
              </div>
            </div>

            {/* Control Bar */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                variant={isMuted ? "destructive" : "secondary"}
                className={`rounded-full h-12 w-12 hover:scale-105 transition-all ${isMuted ? "glow-pink animate-pulse" : ""}`}
                onClick={() => {
                  setIsMuted(!isMuted);
                  toast.success(isMuted ? "🎤 Microphone on" : "🔇 Microphone muted");
                }}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>

              <Button
                size="lg"
                variant={isVideoOff ? "destructive" : "secondary"}
                className={`rounded-full h-12 w-12 hover:scale-105 transition-all ${isVideoOff ? "glow-pink animate-pulse" : ""}`}
                onClick={() => {
                  setIsVideoOff(!isVideoOff);
                  toast.success(isVideoOff ? "📹 Camera on" : "📵 Camera off");
                }}
              >
                {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-12 w-12 hover:scale-105 transition-all"
                onClick={() => toast.success("🖥️ Screen sharing started")}
              >
                <MonitorUp className="w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-12 w-12 hover:scale-105 transition-all"
              >
                <Settings className="w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="destructive"
                className="rounded-full h-12 w-12 glow-pink hover:scale-105 transition-all animate-pulse"
                onClick={handleLeaveClass}
              >
                <PhoneOff className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Participants Panel */}
            <Card className="glass-card p-6 slide-in-right border-2 border-navy-light hover:border-primary transition-all">
              <div className="flex items-center gap-2 mb-5 border-b border-navy-light pb-3">
                <Users className="w-5 h-5 text-primary animate-pulse" />
                <h3 className="font-bold text-lg">👥 Participants ({participants.length})</h3>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {participants.map((participant, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-navy/50 transition-all cursor-pointer border border-navy-light hover:border-primary hover:scale-105"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${participant.active ? 'bg-primary glow-pink animate-pulse' : 'bg-muted'}`} />
                      <span className="text-sm font-medium">{participant.name}</span>
                    </div>
                    {participant.role === "instructor" && (
                      <Badge variant="secondary" className="text-xs px-2">👨‍🏫 Host</Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Chat Panel */}
            <Card className="glass-card p-6 slide-in-right border-2 border-navy-light hover:border-primary transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-5 border-b border-navy-light pb-3">
                <MessageSquare className="w-5 h-5 text-primary animate-pulse" />
                <h3 className="font-bold text-lg">💬 Live Chat</h3>
              </div>
              
              {/* Messages */}
              <div className="space-y-3 mb-5 max-h-72 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div 
                    key={index} 
                    className="text-sm p-2 rounded-lg bg-navy/30 hover:bg-navy/50 transition-all"
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-primary text-sm">{msg.user}</span>
                      <span className="text-xs text-muted-foreground font-medium">⏰ {msg.time}</span>
                    </div>
                    <p className="text-foreground/80 text-sm">{msg.message}</p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-navy border-2 border-navy-light focus:border-primary text-sm py-4"
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 glow-pink h-10 w-10 hover:scale-105 transition-all">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
