
import { useState } from 'react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechNova Systems",
    period: "2022 - Present",
    description: [
      "Architected and implemented microservices-based applications using Next.js, Node.js, and GraphQL",
      "Led development of real-time analytics dashboard with websockets that improved decision-making speed by 40%",
      "Mentored junior developers and conducted code reviews to maintain code quality standards"
    ],
    technologies: ["React", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "DigiCore Solutions",
    period: "2020 - 2022",
    description: [
      "Developed responsive web applications using React and TypeScript, ensuring cross-browser compatibility",
      "Implemented state management with Redux and RTK Query, optimizing performance for complex data flows",
      "Collaborated with UX/UI team to implement design systems and component libraries"
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Jest", "Figma"]
  },
  {
    id: 3,
    role: "Full Stack Engineer",
    company: "Quantum Innovations",
    period: "2018 - 2020",
    description: [
      "Built and maintained RESTful APIs using Express.js and MongoDB",
      "Implemented authentication and authorization systems with JWT and OAuth",
      "Deployed and maintained applications using Docker, AWS EC2, and S3"
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Docker", "AWS"]
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "ByteCraft Studios",
    period: "2016 - 2018",
    description: [
      "Developed front-end features for client websites using HTML, CSS, and JavaScript",
      "Worked with PHP and MySQL to build custom CMS solutions",
      "Participated in Agile development processes including daily standups and sprint planning"
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress"]
  }
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);
  
  const selectedExperience = experienceData.find(item => item.id === activeExperience) || experienceData[0];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-base sm:text-lg text-neon-cyan font-medium mb-2">
          WARP DRIVE LOG
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4 text-glow">
          PROFESSIONAL JOURNEY
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A chronological record of my professional experience and career milestones.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Timeline navigation */}
        <div className="lg:w-1/3">
          <div className="sticky top-20">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-lg font-orbitron text-white mb-4 border-b border-dark-border pb-3">TIMELINE ACCESS</h3>
              
              <div className="space-y-1">
                {experienceData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveExperience(item.id)}
                    className={`w-full text-left p-3 rounded transition-colors flex items-center ${
                      activeExperience === item.id
                        ? 'bg-dark-lighter text-neon-cyan'
                        : 'text-gray-400 hover:text-white hover:bg-dark-lighter/50'
                    }`}
                  >
                    <div className={`w-1 h-12 mr-3 rounded ${
                      activeExperience === item.id ? 'bg-neon-cyan' : 'bg-dark-border'
                    }`}></div>
                    <div>
                      <p className={`font-medium ${activeExperience === item.id ? 'text-white' : ''}`}>{item.role}</p>
                      <p className="text-sm">{item.period}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience details */}
        <div className="lg:w-2/3">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-orbitron text-white mb-1">{selectedExperience.role}</h3>
              <div className="flex items-center text-lg text-neon-cyan mb-4">
                {selectedExperience.company}
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-gray-400 text-base">{selectedExperience.period}</span>
              </div>
              
              <div className="space-y-4 mb-8">
                {selectedExperience.description.map((desc, index) => (
                  <div key={index} className="flex">
                    <span className="text-neon-cyan mr-2">»</span>
                    <p className="text-gray-300">{desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-dark-border pt-5">
                <h4 className="text-sm uppercase text-gray-500 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-dark-lighter border border-dark-border rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Visual timeline */}
            <div className="mt-12 pt-6 border-t border-dark-border">
              <h4 className="text-sm uppercase text-gray-500 mb-4">Career Progress</h4>
              <div className="relative h-2 bg-dark-border rounded-full overflow-hidden">
                {experienceData.map((item, index) => {
                  const leftPosition = `${(index / (experienceData.length - 1)) * 100}%`;
                  return (
                    <div 
                      key={item.id}
                      className={`absolute top-0 h-full ${
                        item.id <= activeExperience ? 'bg-neon-cyan' : 'bg-transparent'
                      }`}
                      style={{ 
                        left: 0, 
                        width: leftPosition,
                        transition: 'width 0.5s ease-in-out'
                      }}
                    ></div>
                  );
                })}
                
                {experienceData.map((item, index) => {
                  const leftPosition = `${(index / (experienceData.length - 1)) * 100}%`;
                  return (
                    <div 
                      key={`marker-${item.id}`}
                      className={`absolute top-0 w-4 h-4 bg-dark-card border-2 rounded-full transform -translate-x-1/2 -translate-y-1/4 ${
                        item.id === activeExperience 
                          ? 'border-neon-cyan animate-pulse' 
                          : item.id < activeExperience 
                            ? 'border-neon-cyan' 
                            : 'border-dark-border'
                      }`}
                      style={{ left: leftPosition }}
                    ></div>
                  );
                })}
              </div>
              
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>2016</span>
                <span>2023</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-orbitron text-white mb-4">EDUCATION</h3>
            
            <div className="mb-6 pb-6 border-b border-dark-border">
              <h4 className="text-lg text-white mb-1">B.S. Computer Science</h4>
              <div className="flex items-center text-neon-cyan mb-3">
                Tech University
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-gray-400">2012 - 2016</span>
              </div>
              <p className="text-gray-400">
                Graduated with honors, specializing in software engineering and artificial intelligence.
                Participated in various hackathons and coding competitions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg text-white mb-1">Key Certifications</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-neon-cyan mr-2">»</span>
                  AWS Certified Solutions Architect
                </li>
                <li className="flex items-center">
                  <span className="text-neon-cyan mr-2">»</span>
                  Google Cloud Professional Developer
                </li>
                <li className="flex items-center">
                  <span className="text-neon-cyan mr-2">»</span>
                  MongoDB Certified Developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
