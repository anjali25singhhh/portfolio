
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "TRANSMISSION RECEIVED",
        description: "Your message has been successfully sent. Expect a response shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-base sm:text-lg text-neon-pink font-medium mb-2">
          TRANSMIT SIGNAL
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4 text-glow-pink">
          CONTACT PROTOCOL
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ready to collaborate? Use the secure communication channel below to initiate contact.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit}
            className="bg-dark-card border border-dark-border rounded-lg p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-md text-white focus:outline-none focus:border-neon-pink transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-md text-white focus:outline-none focus:border-neon-pink transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-md text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder="Project inquiry / Job opportunity / Collaboration"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-md text-white resize-none focus:outline-none focus:border-neon-pink transition-colors"
                placeholder="Describe your project, requirements, or message..."
              />
            </div>
            
            <div className="text-right">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-dark-lighter border border-neon-pink rounded-md font-medium text-white hover:bg-neon-pink/10 transition-colors group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></span>
                {isSubmitting ? 'SENDING...' : 'ENGAGE TRANSMISSION'}
                <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'}`} />
              </button>
            </div>
          </form>
          
          <div className="mt-8 bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-orbitron text-white mb-4">SECURE CONNECTION STATUS</h3>
            <div className="terminal-text">
              <p className="text-gray-500 mb-1">
                <span className="text-neon-pink">$</span> initiating_connection...
              </p>
              <p className="text-gray-300 mb-1">
                <span className="text-neon-pink">&gt;</span> Connection established via HTTPS
              </p>
              <p className="text-gray-300 mb-1">
                <span className="text-neon-pink">&gt;</span> End-to-end encryption active
              </p>
              <p className="text-gray-300 mb-1">
                <span className="text-neon-pink">&gt;</span> Form submission channels open
              </p>
              <p className="text-gray-500">
                <span className="text-neon-pink">$</span> _
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-orbitron text-white mb-4">CONTACT INFO</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3 mt-1">
                  <Mail className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                  <a href="mailto:contact@developer.com" className="text-white hover:text-neon-pink transition-colors">
                    contact@developer.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3 mt-1">
                  <Linkedin className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
                    linkedin.com/in/developer
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3 mt-1">
                  <Github className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
                    github.com/developer
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3 mt-1">
                  <Twitter className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Twitter</h4>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
                    twitter.com/developer
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <h3 className="text-lg font-orbitron text-white mb-4">AVAILABILITY</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Current Status</h4>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-400">Available for new projects</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Response Time</h4>
                <p className="text-white">
                  Usually within 24 hours
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Preferred Communication</h4>
                <p className="text-white">
                  Email or LinkedIn message
                </p>
              </div>
              
              <div className="pt-4 border-t border-dark-border">
                <div className="inline-flex items-center px-3 py-1 bg-neon-pink/10 border border-neon-pink rounded-full text-neon-pink text-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-neon-pink animate-pulse mr-2"></span>
                  Open to freelance opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
