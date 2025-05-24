
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, Github, Zap, Star, Rocket } from 'lucide-react';
import RotatingCube from '@/components/RotatingCube';
import AnimatedSection from '@/components/AnimatedSection';
import HackerEffect from '@/components/HackerEffect';
import { AspectRatio } from '@/components/ui/aspect-ratio';


const Home = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "FULL STACK WEB DEVELOPER ∞ FUTURE-READY";
  
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
          <span className="relative inline-block w-4 h-4 mr-2">
            <span className="absolute inset-0 rounded-full bg-neon-blue animate-pulse"></span>
            <span className="absolute inset-0 rounded-full bg-neon-blue opacity-60 animate-[pulse-ring_1.5s_cubic-bezier(0.25,0.46,0.45,0.94)_infinite]"></span>
          </span>
          <HackerEffect text="Enthusiastic Developer" duration={1000} />
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 tracking-tight text-glow">
          ANJALI <span className="text-gradient">SINGH</span>
        </h1>
        
        <div className="h-8 sm:h-10">
          <h3 className="typing-text text-base sm:text-xl font-mono text-gray-300 mx-auto">
            {typedText}
          </h3>
        </div>
        
        <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
          "Energetic developer with a deep curiosity for technology and a sharp eye for detail. I bring ideas to life through code, with a focus on performance, aesthetics, and user experience."
        </p>
        
        <div className="mt-8">
          <RotatingCube />
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 px-6 py-3 bg-dark-lighter border border-neon-blue rounded-md font-medium text-white hover:bg-neon-blue/10 transition-colors group relative overflow-hidden scan-line"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <Rocket className="h-5 w-5 mr-1 animate-[float-vertical_3s_ease-in-out_infinite]" />
            ACCESS PROJECTS
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
  href="/Anjali_Singh_Resume.pdf"
  download
  className="flex items-center gap-2 px-6 py-3 bg-dark-lighter border border-neon-purple rounded-md font-medium text-white hover:bg-neon-purple/10 transition-colors group relative overflow-hidden scan-line"
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></span>
  <FileText className="h-5 w-5 group-hover:text-neon-purple transition-colors" />
  DOWNLOAD RESUME
</a>



        </div>
      </div>  

      {/* GitHub Stats */}
      <AnimatedSection className="mt-12 pt-8 border-t border-dark-border" delay={300}>
        <h3 className="text-center text-lg sm:text-xl font-orbitron text-white mb-6 relative inline-flex items-center">
          <span className="mr-2 text-neon-cyan animate-pulse"><Star size={18} /></span>
          GITHUB DASHBOARD
          <span className="ml-2 text-neon-cyan animate-pulse"><Star size={18} /></span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="futuristic-panel skill-card scan-line">
            <h4 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Contribution Level</h4>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-white">100 commits</div>
              <Github className="h-4 w-4 text-neon-blue" />
            </div>
            <div className="mt-4 bg-dark-border h-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple w-[75%]"></div>
            </div>
            <div className="mt-1 text-xs text-right text-gray-500">Last year</div>
          </div>
          
          <div className="futuristic-panel skill-card scan-line">
            <h4 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Popular Repositories</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between text-sm">
                <span className="text-white">Crop_Disease_Detection</span>
                <span className="text-neon-blue flex items-center"><Star size={14} className="mr-1" /> 48</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-white">WedEase </span>
                <span className="text-neon-blue flex items-center"><Star size={14} className="mr-1" /> 36</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-white">Driver_drowsiness_detection_system</span>
                <span className="text-neon-blue flex items-center"><Star size={14} className="mr-1" /> 24</span>
              </li>
            </ul>
          </div>
          
          <div className="futuristic-panel skill-card scan-line">
            <h4 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["TypeScript", "React","Next.js", "Node.js", "MongoDB", "Python", "AWS", "c++", "HTML", "CSS", "Express.js", "GitHub", "PostgreSQL" ].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs bg-dark-lighter border border-dark-border rounded-md text-gray-300 hover:border-neon-blue hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Feature highlights */}
      <AnimatedSection className="mt-20 text-center" delay={600}>
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 inline-flex items-center">
          <Zap size={16} className="text-neon-purple mr-2" />
          EXPLORE SECTIONS
          <Zap size={16} className="text-neon-purple ml-2" />
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div 
            onClick={() => navigate('/skills')}
            className="p-6 bg-dark-lighter border border-dark-border rounded-lg cursor-pointer hover:border-neon-blue transition-colors group skill-card overflow-hidden"
            data-text="TECH CORE SYSTEMS"
          >
            <div className="absolute -inset-px opacity-0 group-hover:opacity-20 bg-neon-blue rounded-lg blur-sm group-hover:animate-pulse transition-opacity"></div>
            <h3 className="text-lg font-orbitron mb-2 text-white group-hover:text-neon-blue transition-colors">
              TECH CORE SYSTEMS
            </h3>
            <p className="text-sm text-gray-400">
              Explore the technical skills, tools, and frameworks in my development arsenal.
            </p>
          </div>
          
          <div 
            onClick={() => navigate('/projects')}
            className="p-6 bg-dark-lighter border border-dark-border rounded-lg cursor-pointer hover:border-neon-purple transition-colors group skill-card overflow-hidden"
          >
            <div className="absolute -inset-px opacity-0 group-hover:opacity-20 bg-neon-purple rounded-lg blur-sm group-hover:animate-pulse transition-opacity"></div>
            <h3 className="text-lg font-orbitron mb-2 text-white group-hover:text-neon-purple transition-colors">
              MISSION LOGS
            </h3>
            <p className="text-sm text-gray-400">
              Browse key projects with detailed tech stack, architecture, and outcomes.
            </p>
          </div>
          
          <div 
            onClick={() => navigate('/contact')}
            className="p-6 bg-dark-lighter border border-dark-border rounded-lg cursor-pointer hover:border-neon-pink transition-colors group skill-card overflow-hidden"
          >
            <div className="absolute -inset-px opacity-0 group-hover:opacity-20 bg-neon-pink rounded-lg blur-sm group-hover:animate-pulse transition-opacity"></div>
            <h3 className="text-lg font-orbitron mb-2 text-white group-hover:text-neon-pink transition-colors">
              TRANSMIT SIGNAL
            </h3>
            <p className="text-sm text-gray-400">
              Initiate contact through encrypted channels for collaboration opportunities.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      {/* New section: Featured work */}
      <AnimatedSection className="mt-20" delay={900}>
        <div className="cyber-line"></div>
        <h3 className="text-center text-lg sm:text-xl font-orbitron text-white mb-8">
          
        </h3>
        
        <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-neon-blue transition-all duration-300 skill-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6">
              <h4 className="text-xl font-orbitron text-white mb-2"></h4>
              
              
              <div className="mb-4">
                <h5 className="text-xs uppercase text-gray-500 tracking-wider mb-2">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TensorFlow", "MongoDB", "AWS"].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs bg-dark-lighter border border-dark-border rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
              
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Home;
