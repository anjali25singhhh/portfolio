// src/pages/SoundDemo.tsx

import React from 'react';
import { useSoundContext } from '@/context/SoundContext';

const SoundDemo = () => {
  const { playSound, toggleSound, soundEnabled, isSoundsLoaded } = useSoundContext();

  return (
    <div>
      <h1>Sound Demo</h1>
      <button onClick={toggleSound} disabled={!isSoundsLoaded}>
        {soundEnabled ? 'Disable Sounds' : 'Enable Sounds'}
      </button>

      <button onClick={() => playSound('click')} disabled={!soundEnabled}>
        Play Click Sound

        
      </button>

      {/* Your other content */}
    </div>
  );
};

export default SoundDemo;
