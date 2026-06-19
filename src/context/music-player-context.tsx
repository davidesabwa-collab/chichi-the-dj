
'use client';

import type { Mix } from '@/types/mix';
import { createContext, useContext, useState, ReactNode } from 'react';

interface MusicPlayerContextType {
  currentMix: Mix | null;
  isPlaying: boolean;
  playMix: (mix: Mix) => void;
  togglePlayPause: () => void;
  dismissPlayer: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentMix, setCurrentMix] = useState<Mix | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playMix = (mix: Mix) => {
    if (currentMix?.id === mix.id) {
      togglePlayPause();
    } else {
      setCurrentMix(mix);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (currentMix) setIsPlaying(!isPlaying);
  };

  const dismissPlayer = () => {
    setCurrentMix(null);
    setIsPlaying(false);
  };

  return (
    <MusicPlayerContext.Provider value={{ currentMix, isPlaying, playMix, togglePlayPause, dismissPlayer }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};
