
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import audioManager from '@/utils/audioContext';
import { toast } from '@/components/ui/sonner';

type SoundContextType = {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (soundName: string) => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundsLoaded, setSoundsLoaded] = useState(false);

  // Load sounds on mount
  useEffect(() => {
    const loadSounds = async () => {
      // Create base URL for sounds
      const baseUrl = window.location.origin;
      
      // Load UI sounds
      await Promise.all([
        audioManager.loadSound('click', `${baseUrl}/sounds/click.mp3`),
        audioManager.loadSound('hover', `${baseUrl}/sounds/hover.mp3`),
        audioManager.loadSound('success', `${baseUrl}/sounds/success.mp3`),
        audioManager.loadSound('notification', `${baseUrl}/sounds/notification.mp3`)
      ]);
      
      setSoundsLoaded(true);
      console.log('Sounds loaded successfully');
    };

    loadSounds();
  }, []);

  const toggleSound = () => {
    if (!soundsLoaded && !soundEnabled) {
      toast.info('Loading sounds...');
      return;
    }
    
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    audioManager.toggleSound(newState);
    
    if (newState) {
      // Play a sound to confirm sound is working
      setTimeout(() => audioManager.playSound('notification'), 100);
      toast.success('Sound effects enabled');
    } else {
      toast.info('Sound effects disabled');
    }
  };

  const playSound = (soundName: string) => {
    if (soundEnabled) {
      audioManager.playSound(soundName);
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
