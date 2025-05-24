
import { useState } from 'react';
import { Github, Globe, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  // liveUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WEDEASE– Indian Wedding Marketplace",
    description: "Wedease is a full-stack Indian wedding marketplace to book venues, catering, decor, and photography. Vendors can list services with photos, price, and location. Includes real-time location search",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Razorpay"],
    image: "/portfilio_img.jpg",
    githubUrl: "https://github.com/anjali25singhhh/WedEase",
    
    featured: true
  },
  {
    id: 2,
    title: "Ai-powered Crop Disease Detection",
    description: "A deep learning-based web API that detects crop diseases from images, provides diagnosis and treatment advice, offers Grad-CAM explainability, and supports feedback for mislabeled data.",
    tech: ["Python","Next.js","HTML/CSS","JavaScript", "OpenCV", "MongoDB", "Flask", "REST API"],
    image: "/ai_crop_img.jpg",
    githubUrl: "https://github.com/anjali25singhhh/crop_disease_detection",
    
    featured: true
  },
  {
    id: 3,
    title: "Driver Drowsiness Detection System",
    description: "A real-time safety system that uses computer vision to detect signs of driver fatigue by analyzing eye blinks and facial landmarks. If drowsiness is detected, an alarm alerts the driver to prevent accidents.",
    tech: ["Python", "OpenCV", "imutils", "Dlib", "SciPy"],
    image: "/d3-alert.png",
    githubUrl: "https://github.com",
    
    featured: false
  },
 /* {
    id: 4,
    title: "NEXUS CHAT",
    description: "Real-time messaging platform with end-to-end encryption and AI-powered moderation.",
    tech: ["React Native", "Firebase", "TensorFlow", "WebRTC"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },*/
 /* {
    id: 5,
    title: "CYBERSPHERE",
    description: "Immersive 3D visualization platform for data exploration in virtual reality environment.",
    tech: ["Three.js", "WebGL", "A-Frame", "Node.js"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },*/
  {
    id: 6,
    title: "GulpNGo- Food Delivery",
    description: "A responsive web platform where users can browse restaurants, order food online, track deliveries, and make secure payments. Admins can manage orders, menus, and delivery updates.",
    tech: ["Node.js", "Express.js", "JavaScript", "MongoDB", "React", "HTML", " Tailwind CSS", "Google Maps API","Firebase Authentication"],
      image: "/gulpngo_logo.png",
    githubUrl: "https://github.com/anjali25singhhh/GulpnGo-A-food-delivery-app",
    
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
      <AnimatedSection transitionType="slide-up" className="text-center mb-12">
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
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <AnimatedSection 
            key={project.id} 
            delay={index * 100}
            transitionType={index % 3 === 0 ? 'slide-left' : index % 3 === 1 ? 'zoom' : 'slide-right'}
          >
            <div 
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
               <div className="h-48 bg-black flex items-center justify-center overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title} 
    className="max-w-full max-h-full object-contain"
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
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-md border border-dark-border hover:border-neon-purple text-gray-400 hover:text-white transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </div>
                    
                    <a 
                      href={project.githubUrl} 
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
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;
