import { useCallback } from 'react';

type SoundType = 'tab-nav' | 'tab-close' | 'tab-appear';

const SOUND_PATHS = {
  'tab-nav': '/audio/Tabbar_Nav_Click.mp3',
  'tab-close': '/audio/Tabbar_Close.mp3', 
  'tab-appear': '/audio/Tabbar_Slideup.mp3'
} as const;

const DEFAULT_VOLUME = 0.3; // 30% volume for subtle effects

export const useSound = () => {
  const playSound = useCallback((soundType: SoundType, volume: number = DEFAULT_VOLUME) => {
    try {
      const audio = new Audio(SOUND_PATHS[soundType]);
      audio.volume = Math.min(Math.max(volume, 0), 1); // Clamp between 0 and 1
      
      // Play the audio
      const playPromise = audio.play();
      
      // Handle potential autoplay policy restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Audio play failed:', error);
        });
      }
    } catch (error) {
      console.warn('Sound effect failed to load:', error);
    }
  }, []);

  return { playSound };
}; 