
import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  FileTextIcon, 
  DatabaseIcon, 
  ClockIcon, 
  MessageSquareIcon, 
  MailIcon,
  GithubIcon, 
  FileIcon, 
  XIcon 
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  // Close on escape
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [onClose]);

  // Handle navigation
  const handleSelect = (value: string) => {
    switch (value) {
      case 'home':
      case 'projects':
      case 'skills':
      case 'experience':
      case 'testimonials':
      case 'contact':
        navigate(`/${value === 'home' ? '' : value}`);
        break;
      case 'github':
        window.open('https://github.com/', '_blank');
        break;
      case 'resume':
        // You can replace this with actual resume download functionality
        alert('Resume downloading...');
        break;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-28">
      <div 
        className="w-full max-w-xl rounded-lg border border-dark-border bg-dark-card shadow-2xl overflow-hidden"
        style={{
          boxShadow: '0 0 0 1px rgba(0, 240, 255, 0.1), 0 8px 16px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 240, 255, 0.2)'
        }}
      >
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
          >
            <XIcon size={16} />
          </button>
          
          <Command
            className="bg-transparent"
            value={search}
            onValueChange={setSearch}
          >
            <Command.Input 
              placeholder="Search commands..." 
              className="w-full py-5 px-6 bg-transparent border-b border-dark-border text-base text-white placeholder-gray-500 focus:outline-none"
              autoFocus
            />
            <Command.List className="py-2 max-h-80 overflow-y-auto scrollbar-hidden">
              <Command.Group heading={
                <div className="px-4 py-2 text-xs text-gray-500 uppercase font-medium tracking-wider">
                  Navigation
                </div>
              }>
                <Command.Item 
                  value="home" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <HomeIcon size={16} className="text-neon-blue" />
                  Go to Home
                </Command.Item>
                <Command.Item 
                  value="projects" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <FileTextIcon size={16} className="text-neon-purple" />
                  View Projects
                </Command.Item>
                <Command.Item 
                  value="skills" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <DatabaseIcon size={16} className="text-neon-pink" />
                  Tech Skills
                </Command.Item>
                <Command.Item 
                  value="experience" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <ClockIcon size={16} className="text-neon-cyan" />
                  Experience Timeline
                </Command.Item>
                <Command.Item 
                  value="testimonials" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <MessageSquareIcon size={16} className="text-neon-blue" />
                  Testimonials
                </Command.Item>
                <Command.Item 
                  value="contact" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <MailIcon size={16} className="text-neon-purple" />
                  Contact Me
                </Command.Item>
              </Command.Group>
              
              <Command.Group heading={
                <div className="px-4 py-2 text-xs text-gray-500 uppercase font-medium tracking-wider">
                  External Links
                </div>
              }>
                <Command.Item 
                  value="github" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <GithubIcon size={16} className="text-neon-blue" />
                  GitHub Profile
                </Command.Item>
                <Command.Item 
                  value="resume" 
                  onSelect={handleSelect}
                  className="px-4 py-3 m-1 rounded flex items-center gap-3 text-sm text-white cursor-pointer hover:bg-dark-lighter aria-selected:bg-dark-lighter"
                >
                  <FileIcon size={16} className="text-neon-pink" />
                  Download Resume
                </Command.Item>
              </Command.Group>
            </Command.List>
            
            <div className="border-t border-dark-border px-4 py-2 text-xs text-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  Press <kbd className="px-1.5 py-0.5 bg-dark-lighter rounded border border-dark-border">Enter</kbd> to select
                </div>
                <div>
                  Press <kbd className="px-1.5 py-0.5 bg-dark-lighter rounded border border-dark-border">Esc</kbd> to close
                </div>
              </div>
            </div>
          </Command>
        </div>
      </div>
    </div>
  );
}
