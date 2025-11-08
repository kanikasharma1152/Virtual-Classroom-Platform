import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, MapPin, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const Schedule = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM"];

  const schedule = {
    Monday: [
      { time: "9:00 AM", subject: "Web Development", instructor: "Dr. Smith", room: "Virtual Room 1" },
      { time: "2:00 PM", subject: "Data Structures", instructor: "Prof. Johnson", room: "Virtual Room 2" },
    ],
    Tuesday: [
      { time: "10:30 AM", subject: "AI & ML", instructor: "Dr. Williams", room: "Virtual Room 3" },
      { time: "3:30 PM", subject: "Cloud Computing", instructor: "Prof. Davis", room: "Virtual Room 1" },
    ],
    Wednesday: [
      { time: "9:00 AM", subject: "Web Development", instructor: "Dr. Smith", room: "Virtual Room 1" },
      { time: "12:00 PM", subject: "Mobile Development", instructor: "Dr. Martinez", room: "Virtual Room 4" },
    ],
    Thursday: [
      { time: "10:30 AM", subject: "Cybersecurity", instructor: "Prof. Anderson", room: "Virtual Room 2" },
      { time: "2:00 PM", subject: "Data Structures", instructor: "Prof. Johnson", room: "Virtual Room 2" },
    ],
    Friday: [
      { time: "9:00 AM", subject: "AI & ML", instructor: "Dr. Williams", room: "Virtual Room 3" },
      { time: "3:30 PM", subject: "Cloud Computing", instructor: "Prof. Davis", room: "Virtual Room 1" },
    ],
  };

  const getClassForTimeSlot = (day: string, time: string) => {
    const daySchedule = schedule[day as keyof typeof schedule] || [];
    return daySchedule.find(cls => cls.time === time);
  };

  return (
    <div className="min-h-screen gradient-animated">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Class Schedule</h1>
              <p className="text-muted-foreground">Week of December 16-20, 2024</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 glow-pink">
              <Bell className="w-4 h-4 mr-2" />
              Set Reminders
            </Button>
          </div>
        </div>

        {/* Weekly Calendar Grid */}
        <Card className="glass-card p-6 animate-slide-up overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-6 gap-4 mb-4">
              <div className="font-bold text-muted-foreground">Time</div>
              {days.map(day => (
                <div key={day} className="font-bold text-center">{day}</div>
              ))}
            </div>

            {/* Time Slot Rows */}
            {timeSlots.map((time, timeIndex) => (
              <div 
                key={time} 
                className="grid grid-cols-6 gap-4 mb-4 animate-fade-in"
                style={{ animationDelay: `${timeIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {time}
                </div>
                {days.map(day => {
                  const classInfo = getClassForTimeSlot(day, time);
                  return (
                    <div key={`${day}-${time}`}>
                      {classInfo ? (
                        <Card className="glass-card p-3 hover:scale-105 transition-transform duration-300 border-primary/30 glow-pink cursor-pointer">
                          <h4 className="font-semibold text-sm mb-1">{classInfo.subject}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{classInfo.instructor}</p>
                          <div className="flex items-center gap-1 text-xs text-primary">
                            <MapPin className="w-3 h-3" />
                            {classInfo.room}
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full mt-2 h-7 text-xs bg-primary hover:bg-primary/90"
                            onClick={() => toast.success(`Joining ${classInfo.subject}`)}
                          >
                            <Video className="w-3 h-3 mr-1" />
                            Join
                          </Button>
                        </Card>
                      ) : (
                        <div className="h-full border border-dashed border-muted rounded-lg opacity-30" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Card>

        {/* Today's Classes Summary */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Classes Today</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">6 hrs</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Total Classes</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
