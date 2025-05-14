
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechNova Systems",
    content: "Working with John has been exceptional. His technical expertise and problem-solving skills transformed our platform. He consistently delivered high-quality code and innovative solutions that exceeded our expectations. A true professional who thinks beyond the immediate requirements.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "DigiCore Solutions",
    content: "John's contribution to our project was invaluable. His deep understanding of frontend architectures and state management patterns helped us build a more maintainable and scalable application. He communicates clearly and is always willing to share knowledge with the team.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "Quantum Innovations",
    content: "I've worked with many developers, but John stands out for his combination of technical skill and collaborative approach. He tackles complex problems methodically and produces elegant, efficient solutions. His code is clean, well-documented, and a pleasure to work with.",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    company: "NexTech",
    content: "John helped us build our MVP from scratch and his input was crucial to our early success. His full-stack capabilities enabled rapid development without compromising on quality. He has a rare ability to understand business requirements and translate them into technical solutions.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    name: "Alexandra Peters",
    role: "UX Director",
    company: "Creative Digital",
    content: "As a UX professional, I appreciate developers who care about the user experience. John excels at implementing designs with pixel-perfect accuracy while also suggesting improvements from a technical perspective. The result is always a seamless, high-performance user interface.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(1);
  
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-base sm:text-lg text-neon-blue font-medium mb-2">
          SYSTEM LOGS
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4 text-glow">
          CLIENT TESTIMONIALS
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Feedback from clients and colleagues who have experienced working with me firsthand.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Main testimonial display */}
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`bg-dark-card border rounded-lg p-6 transition-all duration-300 ${
                activeTestimonial === testimonial.id
                  ? 'border-neon-blue border-glow scale-100 opacity-100'
                  : 'border-dark-border scale-95 opacity-0 hidden'
              }`}
            >
              <div className="flex items-start">
                <div className="relative flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-2 border-neon-blue object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-dark-card rounded-full border border-dark-border flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-neon-blue" />
                  </div>
                </div>
                
                <div className="ml-5">
                  <h3 className="text-xl font-medium text-white mb-1">{testimonial.name}</h3>
                  <p className="text-neon-blue">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 terminal-text">
                <div className="mb-2 text-gray-500">
                  <span className="text-neon-blue">$</span> cat testimonial.txt
                </div>
                <div className="pl-4 border-l-2 border-dark-border">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-neon-blue">&gt; CLIENT_REPORT:</span> "{testimonial.content}"
                  </p>
                </div>
                <div className="mt-2 text-gray-500">
                  <span className="text-neon-blue">$</span> _
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={`dot-${testimonial.id}`}
                onClick={() => setActiveTestimonial(testimonial.id)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === testimonial.id
                    ? 'bg-neon-blue'
                    : 'bg-dark-border hover:bg-gray-500'
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
        
        <div>
          {/* Testimonial selection */}
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <h3 className="text-lg font-orbitron text-white mb-4 border-b border-dark-border pb-3">SELECT TESTIMONIAL</h3>
            
            <div className="space-y-3">
              {testimonials.map((testimonial) => (
                <button
                  key={`select-${testimonial.id}`}
                  onClick={() => setActiveTestimonial(testimonial.id)}
                  className={`w-full text-left p-3 rounded flex items-center transition-colors ${
                    activeTestimonial === testimonial.id
                      ? 'bg-dark-lighter border border-neon-blue'
                      : 'border border-dark-border hover:border-neon-blue'
                  }`}
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className={`font-medium ${
                      activeTestimonial === testimonial.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Collaboration info */}
          <div className="mt-6 bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-orbitron text-white mb-4">COLLABORATION STATS</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Project Completion Rate</span>
                  <span className="text-neon-blue">98%</span>
                </div>
                <div className="w-full bg-dark-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue w-[98%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Client Satisfaction</span>
                  <span className="text-neon-blue">95%</span>
                </div>
                <div className="w-full bg-dark-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue w-[95%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">On-Time Delivery</span>
                  <span className="text-neon-blue">92%</span>
                </div>
                <div className="w-full bg-dark-border h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
