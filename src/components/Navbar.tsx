import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-2 border-border/20">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Sparkles className="w-10 h-10 text-primary group-hover:animate-spin transition-all glow-pink" />
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-light bg-clip-text text-transparent">
              Kanika
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              ✨ Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              👤 About
            </Link>
            <Link to="/skills" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              💎 Skills
            </Link>
            <Link to="/projects" className="text-foreground hover:text-primary transition-all hover:scale-110 font-semibold text-lg">
              🎨 Projects
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all text-base px-6 glow-pink">
                💌 Contact
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
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-5 fade-in-scale border-t border-border/20 pt-6">
            <Link to="/" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              ✨ Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              👤 About
            </Link>
            <Link to="/skills" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              💎 Skills
            </Link>
            <Link to="/projects" className="text-foreground hover:text-primary transition-all font-semibold text-lg">
              🎨 Projects
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base py-6 glow-pink">
                💌 Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
