
import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.classList.add('animate-section-visible');
          }, delay);
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(section);
    
    return () => {
      observer.disconnect();
    };
  }, [delay]);
  
  return (
    <div 
      ref={sectionRef} 
      className={`animate-section ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
