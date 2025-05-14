
import { useState } from 'react';
import { Github, Globe, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NEURAL DASHBOARD",
    description: "AI-powered analytics platform with real-time data visualization and predictive insights for business intelligence.",
    tech: ["React", "TypeScript", "Node.js", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "QUANTUM COMMERCE",
    description: "Next-gen e-commerce platform with AI recommendation engine and blockchain payment processing.",
    tech: ["Next.js", "GraphQL", "MongoDB", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "ORBITAL CMS",
    description: "Headless CMS with intuitive interface and API-first architecture for modern content management.",
    tech: ["Vue.js", "Express", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    id: 4,
    title: "NEXUS CHAT",
    description: "Real-time messaging platform with end-to-end encryption and AI-powered moderation.",
    tech: ["React Native", "Firebase", "TensorFlow", "WebRTC"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    id: 5,
    title: "CYBERSPHERE",
    description: "Immersive 3D visualization platform for data exploration in virtual reality environment.",
    tech: ["Three.js", "WebGL", "A-Frame", "Node.js"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    id: 6,
    title: "STELLAR API",
    description: "Microservices framework with service discovery, load balancing, and real-time metrics.",
    tech: ["Go", "gRPC", "Kubernetes", "Prometheus", "Grafana"],
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-base sm:text-lg text-neon-purple font-medium mb-2">
          MISSION LOGS
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4 text-glow-purple">
          FEATURED PROJECTS
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my most significant projects, each representing key milestones in my development journey.
        </p>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-md text-sm transition-colors ${
              activeFilter === 'all'
                ? 'bg-neon-purple/20 text-white border border-neon-purple'
                : 'text-gray-400 border border-dark-border hover:text-white'
            }`}
          >
            ALL PROJECTS
          </button>
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-5 py-2 rounded-md text-sm transition-colors ${
              activeFilter === 'featured'
                ? 'bg-neon-purple/20 text-white border border-neon-purple'
                : 'text-gray-400 border border-dark-border hover:text-white'
            }`}
          >
            FEATURED ONLY
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="relative group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div 
              className={`bg-dark-card border rounded-lg overflow-hidden transition-all duration-300 ${
                hoveredProject === project.id 
                  ? 'border-neon-purple border-glow-purple' 
                  : 'border-dark-border'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-orbitron text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs bg-dark-lighter border border-dark-border rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-md border border-dark-border hover:border-neon-purple text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-md border border-dark-border hover:border-neon-purple text-gray-400 hover:text-white transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-neon-purple hover:underline"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project status indicator */}
            {project.featured && (
              <div className="absolute top-3 right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-md">
                FEATURED
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
