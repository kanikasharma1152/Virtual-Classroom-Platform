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
    <div className="min-h-screen gradient-animated">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">Web Development - Live Class</h1>
              <p className="text-muted-foreground">Dr. Smith • Started 15 minutes ago</p>
            </div>
            <Badge className="bg-primary glow-pink animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-2" />
              LIVE
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <Card className="glass-card lg:col-span-3 p-6 animate-slide-up">
            {/* Video Display */}
            <div className="aspect-video bg-navy rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-50" />
              <div className="relative z-10 text-center">
                <Video className="w-24 h-24 text-primary mx-auto mb-4 animate-float" />
                <p className="text-xl font-semibold">Dr. Smith is presenting</p>
                <p className="text-sm text-muted-foreground mt-2">Video stream active</p>
              </div>
              
              {/* Participant count overlay */}
              <div className="absolute top-4 right-4 glass-card px-3 py-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-semibold">{participants.length}</span>
              </div>
            </div>

            {/* Control Bar */}
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant={isMuted ? "destructive" : "secondary"}
                className="rounded-full h-14 w-14"
                onClick={() => {
                  setIsMuted(!isMuted);
                  toast.success(isMuted ? "Microphone on" : "Microphone muted");
                }}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>

              <Button
                size="lg"
                variant={isVideoOff ? "destructive" : "secondary"}
                className="rounded-full h-14 w-14"
                onClick={() => {
                  setIsVideoOff(!isVideoOff);
                  toast.success(isVideoOff ? "Camera on" : "Camera off");
                }}
              >
                {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-14 w-14"
                onClick={() => toast.success("Screen sharing started")}
              >
                <MonitorUp className="w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-14 w-14"
              >
                <Settings className="w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="destructive"
                className="rounded-full h-14 w-14 glow-pink"
                onClick={handleLeaveClass}
              >
                <PhoneOff className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Participants Panel */}
            <Card className="glass-card p-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Participants ({participants.length})</h3>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {participants.map((participant, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-navy/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${participant.active ? 'bg-primary glow-pink' : 'bg-muted'}`} />
                      <span className="text-sm">{participant.name}</span>
                    </div>
                    {participant.role === "instructor" && (
                      <Badge variant="secondary" className="text-xs">Host</Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Chat Panel */}
            <Card className="glass-card p-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Live Chat</h3>
              </div>
              
              {/* Messages */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-primary">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-muted-foreground">{msg.message}</p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-navy border-navy-light focus:border-primary"
                />
                <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 glow-pink">
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
