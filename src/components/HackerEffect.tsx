
import { useState, useEffect } from 'react';

interface HackerEffectProps {
  text: string;
  className?: string;
  duration?: number;
  charSet?: string;
}

const HackerEffect = ({ 
  text, 
  className = '',
  duration = 1500,
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|{}[]()=+-_~^'
}: HackerEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const length = text.length;
    let animationFrameId: number;
    let startTime: number | null = null;
    
    const scrambleText = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Number of characters that should be correct
      const correctChars = Math.floor(length * percentage);
      
      let result = '';
      for (let i = 0; i < length; i++) {
        if (i < correctChars) {
          result += text[i];
        } else {
          const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
          result += randomChar;
        }
      }
      
      setDisplayText(result);
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(scrambleText);
      }
    };
    
    animationFrameId = requestAnimationFrame(scrambleText);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, duration, charSet]);
  
  return <span className={className}>{displayText}</span>;
};

export default HackerEffect;
