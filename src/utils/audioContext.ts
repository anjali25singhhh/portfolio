
class AudioManager {
  private context: AudioContext | null = null;
  private sounds: Record<string, AudioBuffer> = {};
  private enabled: boolean = false;
  private gainNode: GainNode | null = null;

  constructor() {
    try {
      // Create audio context only after user interaction
      this.initializeContext = this.initializeContext.bind(this);
      this.playSound = this.playSound.bind(this);
      this.toggleSound = this.toggleSound.bind(this);
      this.loadSound = this.loadSound.bind(this);
    } catch (error) {
      console.error("Web Audio API is not supported in this browser", error);
    }
  }

  initializeContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.context.createGain();
      this.gainNode.connect(this.context.destination);
      this.gainNode.gain.value = 1; // Default volume
    }
    return this.context;
  }

  async loadSound(name: string, url: string) {
    try {
      if (!this.context) this.initializeContext();
      
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.context!.decodeAudioData(arrayBuffer);
      this.sounds[name] = audioBuffer;
      return true;
    } catch (error) {
      console.error(`Error loading sound ${name}:`, error);
      return false;
    }
    console.error(`Error loading sound ${name} from ${url}:`, error);

  }

  playSound(name: string) {
  if (!this.enabled) {
    console.log('Sound is disabled');
    return;
  }
  if (!this.context) {
    console.log('AudioContext not initialized');
    return;
  }
  if (!this.sounds[name]) {
    console.log(`Sound ${name} not loaded`);
    return;
  }
  console.log(`Playing sound: ${name}`);
  
  try {
    const source = this.context.createBufferSource();
    source.buffer = this.sounds[name];
    source.connect(this.gainNode!);
    source.start(0);
  } catch (error) {
    console.error(`Error playing sound ${name}:`, error);
  }
}


  toggleSound(enabled: boolean) {
    this.enabled = enabled;
    
    // Initialize context on first enable
    if (enabled && !this.context) {
      this.initializeContext();
    }
    
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

// Singleton instance
const audioManager = new AudioManager();
export default audioManager;
