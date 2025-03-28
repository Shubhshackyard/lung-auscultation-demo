"use client"

import { createContext, useContext, useRef, useState } from 'react';

type AudioContextType = {
  currentlyPlaying: string | null;
  play: (id: string) => void;
  stop: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  
  const play = (id: string) => {
    if (currentlyPlaying === id) return;
    setCurrentlyPlaying(id);
  };
  
  const stop = () => {
    setCurrentlyPlaying(null);
  };

  return (
    <AudioContext.Provider value={{ currentlyPlaying, play, stop }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}