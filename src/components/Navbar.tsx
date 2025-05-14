
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Keyboard, Volume2, VolumeX } from "lucide-react";
import { useSoundContext } from "@/context/SoundContext";

interface NavbarProps {
  openCommandPalette: () => void;
}

const Navbar = ({ openCommandPalette }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const { soundEnabled, toggleSound, playSound } = useSoundContext();

  const handleToggleSound = () => {
    toggleSound();
  };

  const handleLinkClick = () => {
    playSound('click');
  };

  const handleMenuToggle = () => {
    playSound('click');
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCommandPalette = () => {
    playSound('click');
    openCommandPalette();
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SKILLS", path: "/skills" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="glassmorphism border-b border-dark-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-xl sm:text-2xl font-orbitron font-bold tracking-wider text-white text-glow"
            onClick={handleLinkClick}
          >
            DEV<span className="text-neon-blue">PORTFOLIO</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive 
                      ? "text-neon-blue" 
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-200 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="hidden md:flex items-center ml-4 space-x-4">
            <button 
              onClick={handleCommandPalette}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Keyboard className="h-4 w-4 mr-1" />
              <span>Cmd+K</span>
            </button>
            
            <button 
              onClick={handleToggleSound}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
            >
              {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 glassmorphism">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium ${
                    isActive ? "text-neon-blue" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex items-center justify-between pt-2 mt-2 border-t border-dark-border">
              <button 
                onClick={handleCommandPalette}
                className="flex items-center text-sm text-gray-400"
              >
                <Keyboard className="h-4 w-4 mr-1" />
                <span>Cmd+K</span>
              </button>
              
              <button 
                onClick={handleToggleSound}
                className="text-gray-400"
                aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
              >
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
