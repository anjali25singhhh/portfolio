import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { CommandPalette } from "./CommandPalette";
import ParticleBackground from "./ParticleBackground";
import { Github, Linkedin } from "lucide-react";

const Layout = () => {
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setShowCommandPalette((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white relative overflow-hidden">
      <Navbar openCommandPalette={() => setShowCommandPalette(true)} />

      {/* Particle background */}
      <ParticleBackground />

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-neon-pink/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className={`flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 transition-opacity duration-300 ${
        transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
      }`}>
        <div className="ov-hidden">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-dark-border relative overflow-hidden">
        <div className="cyber-line"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
          <p className="mb-2 flex items-center justify-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full"></span>
            <span className="text-xs tracking-wider uppercase"></span>
          </p>
          <p className="flex items-center justify-center gap-4 text-white">
            © {new Date().getFullYear()} Made by Anjali —
            <a
              href="https://github.com/anjali25singhhh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-singh-09909b257/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-purple transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </p>
        </div>
      </footer>

      {/* Command Palette */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
      />
    </div>
  );
};

export default Layout;
