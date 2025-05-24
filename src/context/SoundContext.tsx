
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import audioManager from '@/utils/audioContext';
import { toast } from '@/components/ui/sonner';

type SoundContextType = {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (soundName: string) => void;
  downloadSounds: () => void;
  isSoundsLoaded: boolean;
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
    loadSounds();
  }, []);

  const loadSounds = async () => {
    try {
      // Create base URL for sounds
      const baseUrl = window.location.origin;
      
      // Load UI sounds
      await Promise.all([
        audioManager.loadSound('click', `${baseUrl}/sounds/click.mp3`),
        audioManager.loadSound('hover', `${baseUrl}/sounds/hover.mp3`),
        audioManager.loadSound('success', `${baseUrl}/sounds/success.mp3`),
        audioManager.loadSound('notification', `${baseUrl}/sounds/notification.mp3`)
      ]);
      console.log(`${baseUrl}/sounds/click.mp3`);

      setSoundsLoaded(true);
      console.log('Sounds loaded successfully');
    } catch (error) {
      console.error('Failed to load sounds:', error);
      toast.error('Failed to load sounds');
    }
  };

  const downloadSounds = () => {
    const sounds = [
      { name: 'click.mp3', url: 'cyber-port-nexus/public/sound/click.mp3' },
      { name: 'hover.mp3', url: 'C:/Users/ASUS/Desktop/portfolio/cyber-port-nexus/public/sound/hover1.mp3' },
      { name: 'success.mp3', url: 'cyber-port-nexus/public/sound/success.mp3' },
      { name: 'notification.mp3', url: 'cyber-port-nexus/public/sound/notification.mp3' }
    ];

    sounds.forEach(sound => {
      const a = document.createElement('a');
      a.href = sound.url;
      a.download = sound.name;
      a.target = '_blank';
      a.click();
    });

    toast.success('Sound files downloading. Place them in your /public/sounds/ folder');
  };

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
    <SoundContext.Provider value={{ 
      soundEnabled, 
      toggleSound, 
      playSound, 
      downloadSounds,
      isSoundsLoaded: soundsLoaded 
    }}>
      {children}
    </SoundContext.Provider>
  );
};
