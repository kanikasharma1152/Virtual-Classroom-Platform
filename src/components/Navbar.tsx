import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-2 border-navy-light">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <GraduationCap className="w-10 h-10 text-primary group-hover:animate-bounce transition-all glow-pink" />
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              EduCloud
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              🏠 Home
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              📊 Dashboard
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              📚 Courses
            </Link>
            <Link to="/schedule" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              📅 Schedule
            </Link>
            <Link to="/live-class" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              🎥 Live Class
            </Link>
            <Link to="/chatbot" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              🤖 AI Chat
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all text-base px-6 glow-pink">
                🚀 Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-all hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-5 fade-in-scale border-t border-navy-light pt-6">
            <Link to="/" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              🏠 Home
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              📊 Dashboard
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              📚 Courses
            </Link>
            <Link to="/schedule" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              📅 Schedule
            </Link>
            <Link to="/live-class" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              🎥 Live Class
            </Link>
            <Link to="/chatbot" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              🤖 AI Chat
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base py-6 glow-pink">
                🚀 Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
