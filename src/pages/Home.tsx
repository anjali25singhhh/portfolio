
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, Github } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "FULL STACK ENGINEER ∞ FUTURE-READY";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-base sm:text-lg text-neon-blue font-medium mb-3 inline-flex items-center">
          <span className="inline-block w-3 h-3 bg-neon-blue rounded-full mr-2 animate-pulse"></span>
          LAUNCH SEQUENCE INITIATED
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 tracking-tight text-glow">
          JOHN <span className="text-gradient">DOE</span>
        </h1>
        
        <div className="h-8 sm:h-10">
          <h3 className="typing-text text-base sm:text-xl font-mono text-gray-300 mx-auto">
            {typedText}
          </h3>
        </div>
        
        <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
          Architecting the future through clean code and innovative solutions. 
          Specializing in scalable web applications with cutting-edge technologies.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 px-6 py-3 bg-dark-lighter border border-neon-blue rounded-md font-medium text-white hover:bg-neon-blue/10 transition-colors group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></span>
            ACCESS PROJECTS
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-dark-lighter border border-dark-border rounded-md font-medium text-white hover:bg-white/5 transition-colors">
            <FileText className="h-5 w-5" />
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
      
      {/* GitHub Stats */}
      <div className="mt-12 pt-8 border-t border-dark-border">
        <h3 className="text-center text-lg sm:text-xl font-orbitron text-white mb-6">GITHUB DASHBOARD</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="futuristic-panel">
            <h4 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Contribution Level</h4>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-white">862 commits</div>
              <Github className="h-4 w-4 text-neon-blue" />
            </div>
            <div className="mt-4 bg-dark-border h-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple w-[75%]"></div>
            </div>
            <div className="mt-1 text-xs text-right text-gray-500">Last year</div>
          </div>
          
          <div className="futuristic-panel">
            <h4 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Popular Repositories</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between text-sm">
                <span className="text-white">AI-ProjectManager</span>
                <span className="text-neon-blue">★ 48</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-white">React-Dashboard</span>
                <span className="text-neon-blue">★ 36</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-white">NextJS-Portfolio</span>
                <span className="text-neon-blue">★ 24</span>
              </li>
            </ul>
          </div>
          
          <div className="futuristic-panel">
            <h4 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["TypeScript", "React", "Node.js", "MongoDB", "Python", "AWS"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs bg-dark-lighter border border-dark-border rounded-md text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature highlights */}
      <div className="mt-20 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          EXPLORE SECTIONS
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div 
            onClick={() => navigate('/skills')}
            className="p-6 bg-dark-lighter border border-dark-border rounded-lg cursor-pointer hover:border-neon-blue transition-colors group"
          >
            <h3 className="text-lg font-orbitron mb-2 text-white group-hover:text-neon-blue transition-colors">
              TECH CORE SYSTEMS
            </h3>
            <p className="text-sm text-gray-400">
              Explore the technical skills, tools, and frameworks in my development arsenal.
            </p>
          </div>
          
          <div 
            onClick={() => navigate('/projects')}
            className="p-6 bg-dark-lighter border border-dark-border rounded-lg cursor-pointer hover:border-neon-purple transition-colors group"
          >
            <h3 className="text-lg font-orbitron mb-2 text-white group-hover:text-neon-purple transition-colors">
              MISSION LOGS
            </h3>
            <p className="text-sm text-gray-400">
              Browse key projects with detailed tech stack, architecture, and outcomes.
            </p>
          </div>
          
          <div 
            onClick={() => navigate('/contact')}
            className="p-6 bg-dark-lighter border border-dark-border rounded-lg cursor-pointer hover:border-neon-pink transition-colors group"
          >
            <h3 className="text-lg font-orbitron mb-2 text-white group-hover:text-neon-pink transition-colors">
              TRANSMIT SIGNAL
            </h3>
            <p className="text-sm text-gray-400">
              Initiate contact through encrypted channels for collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
