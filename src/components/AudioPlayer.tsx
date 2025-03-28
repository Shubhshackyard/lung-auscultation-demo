"use client"

import { useState, useRef, useEffect } from 'react'
import { useAudio } from '@/context/AudioContext'

interface Sound {
  id: string;
  title: string;
  description: string;
  audioSrc: string;
  category: 'normal' | 'abnormal';
  location: string;
}

interface AudioPlayerProps {
  sound: Sound;
  compact?: boolean;
  autoplayOnMount?: boolean;
}

export default function AudioPlayer({ sound, compact = false, autoplayOnMount = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  const { currentlyPlaying, play, stop } = useAudio()
  
  // Effect for controlling playback based on global context
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (currentlyPlaying === sound.id) {
      audio.play().catch(err => console.log('Error playing sound:', err));
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlaying, sound.id]);
  
  // Autoplay if specified
  useEffect(() => {
    if (autoplayOnMount) {
      play(sound.id);
    }
  }, [autoplayOnMount, play, sound.id]);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const setAudioData = () => {
      setDuration(audio.duration)
    }
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }
    
    const handleEnded = () => {
      setIsPlaying(false)
      stop();
    }
    
    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    audio.addEventListener('ended', handleEnded)
    
    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [sound.audioSrc, stop])
  
  const togglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      play(sound.id);
    }
  }
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }
  
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  if (compact) {
    return (
      <div className="mt-2">
        <audio ref={audioRef} src={sound.audioSrc} preload="metadata" />
        
        <div className="flex items-center gap-2">
          <button 
            onClick={togglePlay} 
            className={`flex items-center justify-center h-8 w-8 rounded-full 
              ${sound.category === 'normal' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
              text-white focus:outline-none transition-colors`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <div className="flex-grow flex items-center">
            <span className="text-xs text-gray-500 w-8">{formatTime(currentTime)}</span>
            <input 
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              step="0.01"
              onChange={handleTimeChange}
              className="w-full h-1 mx-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
            />
            <span className="text-xs text-gray-500 w-8 text-right">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`p-4 rounded-lg ${sound.category === 'normal' ? 'bg-green-50' : 'bg-blue-50'}`}>
      <audio ref={audioRef} src={sound.audioSrc} preload="metadata" />
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium">{sound.title}</h3>
        <button 
          onClick={togglePlay} 
          className={`flex items-center justify-center h-10 w-10 rounded-full 
            ${sound.category === 'normal' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
            text-white focus:outline-none transition-colors`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="flex items-center mt-4">
        <span className="text-xs text-gray-500 w-10">{formatTime(currentTime)}</span>
        <input 
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          step="0.01"
          onChange={handleTimeChange}
          className="w-full h-2 mx-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
        />
        <span className="text-xs text-gray-500 w-10 text-right">{formatTime(duration)}</span>
      </div>

      <div className="text-xs text-gray-500 mt-2 text-center">
        {isPlaying ? 'Now playing' : 'Click play to listen'}
      </div>
    </div>
  )
}