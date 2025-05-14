
import { useState } from 'react';
import { Database } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  description: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

const skills: Skill[] = [
  { name: "React", level: 90, description: "Building responsive, state-driven UIs with modern React patterns", category: "frontend" },
  { name: "TypeScript", level: 85, description: "Type-safe development with advanced TypeScript features", category: "frontend" },
  { name: "Node.js", level: 80, description: "Server-side JavaScript with Express and RESTful APIs", category: "backend" },
  { name: "Next.js", level: 85, description: "Server-side rendering and static site generation", category: "frontend" },
  { name: "MongoDB", level: 75, description: "Document-based NoSQL database design and optimization", category: "backend" },
  { name: "PostgreSQL", level: 70, description: "Relational database design and complex queries", category: "backend" },
  { name: "GraphQL", level: 75, description: "Query language for APIs and runtime for fulfilling queries", category: "backend" },
  { name: "Redux", level: 80, description: "State management for complex React applications", category: "frontend" },
  { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework for rapid UI development", category: "frontend" },
  { name: "Docker", level: 65, description: "Containerization of applications for consistent deployment", category: "devops" },
  { name: "AWS", level: 70, description: "Cloud infrastructure design and deployment", category: "devops" },
  { name: "CI/CD", level: 75, description: "Automated testing and deployment pipelines", category: "devops" },
  { name: "Git", level: 85, description: "Version control and collaborative development", category: "tools" },
  { name: "Jest", level: 80, description: "JavaScript testing framework for unit and integration tests", category: "tools" },
  { name: "Figma", level: 70, description: "UI/UX design and prototyping", category: "tools" },
  { name: "Python", level: 65, description: "Data analysis and automation scripts", category: "backend" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'devops' | 'tools'>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'ALL SYSTEMS' },
    { id: 'frontend', name: 'FRONTEND' },
    { id: 'backend', name: 'BACKEND' },
    { id: 'devops', name: 'DEVOPS' },
    { id: 'tools', name: 'TOOLS' },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-base sm:text-lg text-neon-blue font-medium mb-2">
          TECH CORE SYSTEMS
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4 text-glow">
          SKILLS & EXPERTISE
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive view of my technical capabilities, representing years of hands-on experience.
        </p>
      </div>
      
      <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                activeCategory === category.id
                  ? 'bg-neon-blue/20 text-white border border-neon-blue'
                  : 'text-gray-400 border border-dark-border hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className={`bg-dark-lighter border rounded-lg p-5 cursor-pointer transition-all duration-300 ${
                activeSkill?.name === skill.name
                  ? 'border-neon-blue border-glow'
                  : 'border-dark-border hover:border-neon-blue'
              }`}
              onClick={() => setActiveSkill(skill)}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-white">{skill.name}</h3>
                <span className="text-neon-blue font-mono text-sm">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-dark-border h-2 rounded-full overflow-hidden mb-4">
                <div 
                  className={`h-full rounded-full ${
                    skill.category === 'frontend' ? 'bg-neon-blue' :
                    skill.category === 'backend' ? 'bg-neon-purple' :
                    skill.category === 'devops' ? 'bg-neon-pink' : 'bg-neon-cyan'
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card border border-dark-border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
              <Database className="h-5 w-5 text-neon-blue" />
            </div>
            <h3 className="text-xl font-orbitron text-white">FRONTEND</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Creating intuitive, responsive interfaces with modern frameworks and tools. Focused on performance optimization and accessibility.
          </p>
        </div>
        
        <div className="bg-dark-card border border-dark-border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
              <Database className="h-5 w-5 text-neon-purple" />
            </div>
            <h3 className="text-xl font-orbitron text-white">BACKEND</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Building scalable, robust server architectures with efficient data models and API designs. Expertise in both SQL and NoSQL solutions.
          </p>
        </div>
        
        <div className="bg-dark-card border border-dark-border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
              <Database className="h-5 w-5 text-neon-pink" />
            </div>
            <h3 className="text-xl font-orbitron text-white">DEVOPS</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Automating deployment pipelines and infrastructure provisioning. Experience with containerization and cloud services for reliable operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
