'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface VoiceAboutMeSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VoiceOption {
  id: string;
  name: string;
  description: string;
  voiceId: string; // ElevenLabs voice ID
}

const voiceOptions: VoiceOption[] = [
  {
    id: 'jenna',
    name: 'Jenna',
    description: 'Calm and Mysterious',
    voiceId: '21m00Tcm4TlvDq8ikWAM' // Rachel voice
  },
  {
    id: 'tolstoy',
    name: 'Tolstoy',
    description: 'Confident and concise',
    voiceId: 'pNInz6obpgDQGcFmaJgB' // Adam voice
  }
];

export const VoiceAboutMeSheet: React.FC<VoiceAboutMeSheetProps> = ({ isOpen, onClose }) => {
  const [selectedVoice, setSelectedVoice] = useState<VoiceOption | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentState, setCurrentState] = useState<'selection' | 'playing'>('selection');
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Text content for voice generation
  const fullText = "What truly excites me about design is its potential to orchestrate meaningful change. Every pixel we place, every interaction we craft, and every system we architect has the power to make someone's day better, their work more efficient, or their goals more achievable. After all, a designer just doesn't just solve problems; they create possibilities.";

  // Helper function to format time in MM:SS format
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Calculate remaining time and display
  const remainingTime = duration - currentTime;
  const timeDisplay = duration > 0 
    ? `${formatTime(remainingTime)} seconds left`
    : isLoading 
      ? 'Loading...'
      : `${formatTime(duration)} seconds left`;

  if (!isOpen) return null;

  const handleVoiceSelect = (voice: VoiceOption) => {
    setSelectedVoice(voice);
  };

  const handleStartListening = async () => {
    if (!selectedVoice) return;
    
    setCurrentState('playing');
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice.voiceId}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': 'sk_af9f1a88dd869f0a833adcac15742f4f3b545014584d7eb5'
        },
        body: JSON.stringify({
          text: fullText,
          model_id: "eleven_flash_v2_5", // Using faster Flash model
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        setCurrentAudio(audio);
        
        // Set up audio event listeners
        audio.onloadedmetadata = () => {
          setDuration(audio.duration);
        };
        
        audio.ontimeupdate = () => {
          setCurrentTime(audio.currentTime);
        };
        
        audio.onended = () => {
          setIsPlaying(false);
          setCurrentAudio(null);
          setCurrentTime(0);
          setDuration(0);
          URL.revokeObjectURL(audioUrl);
        };
        
        // Audio is ready, start playing
        setIsLoading(false);
        setIsPlaying(true);
        
        await audio.play();
      } else {
        console.error('Error generating speech:', response.status);
        setIsLoading(false);
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error calling ElevenLabs API:', error);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const handleRestart = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }
    setCurrentState('selection');
    setSelectedVoice(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  const handleStopListening = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300 flex justify-center">
        <div className="bg-[#ffffff] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_0px_24px_0px_rgba(17,17,17,0.12)] mx-3 w-full max-w-[calc(393px-24px)] sm:w-[calc(393px-24px)]">
          {currentState === 'selection' ? (
            // State 1: Voice Selection
            <div className="flex flex-col items-center relative w-full h-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start pb-8 pt-10 px-6 relative w-full h-full">
                
                {/* Header */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
                    <div className="font-jakarta font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[28px] text-left text-nowrap">
                      <p className="block leading-[32px] overflow-inherit whitespace-pre">
                        Interactive about me
                      </p>
                    </div>
                    <button 
                      onClick={onClose}
                      className="relative shrink-0 w-6 h-6"
                    >
                      <X className="w-full h-full" />
                    </button>
                  </div>
                </div>
                
                {/* Voice Style Title */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
                    <div className="font-jakarta font-semibold leading-[0] relative shrink-0 text-[#111111] text-[20px] text-left text-nowrap">
                      <p className="block leading-[24px] whitespace-pre">
                        Choose your voice style
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Voice Options */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
                    {voiceOptions.map((voice) => (
                      <button
                        key={voice.id}
                        onClick={() => handleVoiceSelect(voice)}
                        className={`aspect-[160/160] basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative rounded-[20px] shrink-0 ${
                          selectedVoice?.id === voice.id ? 'ring-2 ring-[#010101]' : ''
                        }`}
                      >
                        <div className="flex flex-col justify-end overflow-clip relative w-full h-full">
                          <div className="aspect-[160/160] box-border content-stretch flex flex-col gap-2.5 items-start justify-end px-5 py-6 relative w-full h-full">
                            <div className="h-[94px] relative shrink-0 w-full">
                              <div className="box-border content-stretch flex flex-col gap-2 h-[94px] items-start justify-end p-0 relative w-full">
                                <div className="relative shrink-0 w-full">
                                  <div className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] p-0 relative text-left w-full">
                                    <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                                      <p className="block leading-[24px]">{voice.name}</p>
                                    </div>
                                    <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[12px] w-full">
                                      <p className="block leading-[16px]">
                                        {voice.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {selectedVoice?.id === voice.id && (
                          <div className="absolute border-2 border-[#010101] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Start Listening Button */}
                <button
                  onClick={handleStartListening}
                  disabled={!selectedVoice}
                  className="bg-[#111111] h-12 relative rounded-[48px] shrink-0 w-[321px] disabled:opacity-50"
                >
                  <div className="flex flex-row items-center justify-center relative w-full h-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-5 py-3 relative w-[321px]">
                      <div className="font-jakarta font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                        <p className="block leading-[24px] whitespace-pre">
                          Start listening
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            // State 2: Voice Playing
            <div className="relative w-full h-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-8 pt-10 px-6 relative w-full h-full">
                
                {/* Header */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
                    <div className="font-jakarta font-semibold leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#111111] text-[28px] text-left text-nowrap">
                      <p className="block leading-[32px] overflow-inherit whitespace-pre">
                        Interactive about me
                      </p>
                    </div>
                    <button 
                      onClick={onClose}
                      className="relative shrink-0 w-6 h-6"
                    >
                      <X className="w-full h-full" />
                    </button>
                  </div>
                </div>
                
                                                 {/* Audio Wave Visualization */}
                <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-full min-h-[120px]">
                  <div className="flex flex-col justify-center overflow-clip relative w-full h-full">
                    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center px-5 py-6 relative w-full">
                      <div className="flex items-center justify-center relative shrink-0 w-full">
                        {isLoading ? (
                          // Loading indicator
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#111111] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-[#111111] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-[#111111] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            <span className="text-[#111111] text-sm ml-3 font-jakarta">Generating voice...</span>
                          </div>
                        ) : (
                          // Enhanced Audio Wave Visualizer
                          <div className="h-8 w-64 flex items-center justify-center gap-0.5">
                            {Array.from({ length: 48 }, (_, i) => (
                              <div
                                key={i}
                                className={`w-0.5 rounded-full transition-all duration-300 ${
                                  isPlaying
                                    ? 'bg-[#111111] animate-pulse'
                                    : 'bg-[#111111]/30 h-1'
                                }`}
                                style={
                                  isPlaying
                                    ? {
                                        height: `${20 + Math.random() * 80}%`,
                                        animationDelay: `${i * 0.05}s`,
                                        animationDuration: '1s'
                                      }
                                    : undefined
                                }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Control Section */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative text-left w-full">
                        <div className="font-jakarta font-semibold relative shrink-0 text-[#111111] text-[18px] w-full">
                          <p className="block leading-[24px]">About me</p>
                        </div>
                        <div className="font-jakarta font-medium relative shrink-0 text-[#545454] text-[14px] w-full">
                          <p className="block leading-[16px]">{timeDisplay}</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0">
                      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative">
                        <button
                          onClick={() => {
                            if (currentAudio) {
                              if (isPlaying) {
                                currentAudio.pause();
                                setIsPlaying(false);
                              } else {
                                currentAudio.play();
                                setIsPlaying(true);
                              }
                            }
                          }}
                          className="bg-[#e4e4e4] relative rounded-2xl shrink-0 size-12"
                        >
                          <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative size-12">
                              <div className="relative shrink-0 size-6">
                                {isPlaying ? (
                                  <svg className="block max-w-none size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="6" y="4" width="4" height="16"/>
                                    <rect x="14" y="4" width="4" height="16"/>
                                  </svg>
                                ) : (
                                  <svg className="block max-w-none size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="6,3 20,12 6,21"/>
                                  </svg>
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                        <button
                          onClick={handleStopListening}
                          className="bg-[#e4e4e4] relative rounded-2xl shrink-0 size-12"
                        >
                          <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative size-12">
                              <div className="relative shrink-0 size-6">
                                <svg className="block max-w-none size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"/>
                                  <rect x="9" y="9" width="6" height="6"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </button>
                        <button
                          onClick={handleRestart}
                          className="bg-[#e4e4e4] relative rounded-2xl shrink-0 size-12"
                        >
                          <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative size-12">
                              <div className="relative shrink-0 size-6">
                                <svg className="block max-w-none size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                  <path d="M3 3v5h5"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}; 