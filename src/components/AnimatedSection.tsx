
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export type TransitionType = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'rotate';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  transitionType?: TransitionType;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  transitionType = 'fade'
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.classList.add('animate-section-visible');
            section.dataset.visible = 'true';
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
  
  const getTransitionClass = () => {
    switch (transitionType) {
      case 'slide-up':
        return 'transition-slide-up';
      case 'slide-left':
        return 'transition-slide-left';
      case 'slide-right':
        return 'transition-slide-right';
      case 'zoom':
        return 'transition-zoom';
      case 'rotate':
        return 'transition-rotate';
      case 'fade':
      default:
        return 'transition-fade';
    }
  };
  
  return (
    <div 
      ref={sectionRef} 
      className={cn(`animate-section ${getTransitionClass()}`, className)}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
