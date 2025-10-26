'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Import Lottie animations
import loadingAnimation from '/public/images/wip/loading.json';
import viewAnimation from '/public/images/wip/view.json';
import articleAnimation from '/public/images/wip/article.json';
import imageAnimation from '/public/images/wip/image.json';

// Loading animation data - you can customize these
const loadingAnimations = [
  {
    id: 1,
    animation: loadingAnimation,
    text: 'Building something amazing...',
    duration: 2000,
    isLottie: true
  },
  {
    id: 2,
    animation: viewAnimation,
    text: 'Crafting experiences...',
    duration: 2000,
    isLottie: true
  },
  {
    id: 3,
    animation: articleAnimation,
    text: 'Designing the future...',
    duration: 2000,
    isLottie: true
  },
  {
    id: 4,
    animation: imageAnimation,
    text: 'Almost ready...',
    duration: 2000,
    isLottie: true
  }
];

export function WipLanding() {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  
  // Code-level toggle: Change this to false to hide loading images
  const showLoadingImages = true;

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Don't run timer if final message is already shown
    if (showFinalMessage) return;
    
    const timer = setTimeout(() => {
      if (currentAnimation < loadingAnimations.length - 1) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentAnimation(currentAnimation + 1);
          setIsVisible(true);
        }, 300);
      } else {
        setIsVisible(false);
        setTimeout(() => {
          setShowFinalMessage(true);
          setIsVisible(true);
        }, 300);
      }
    }, loadingAnimations[currentAnimation]?.duration || 2000);

    return () => clearTimeout(timer);
  }, [currentAnimation, showFinalMessage]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wip/landing-bg.png"
          alt="Landing background"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Main Content Container - 960px max width */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[960px] mx-auto">
          {/* Loading Animation Container */}
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-16">
            {!showFinalMessage ? (
              <div 
                className={`flex items-center gap-8 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                        {/* Loading Image on the left - Conditionally rendered */}
                        {showLoadingImages && isClient && (
                          <div className="flex-shrink-0 w-[120px] h-[120px] relative">
                            <Lottie
                              animationData={loadingAnimations[currentAnimation].animation}
                              loop={false}
                              autoplay={true}
                              style={{ width: '120px', height: '120px' }}
                              className="drop-shadow-lg"
                            />
                          </div>
                        )}

                {/* Loading Text - Always shown */}
                <div className="flex-1">
                  <h2 className="text-[64px] font-medium text-white leading-[1.13] whitespace-nowrap drop-shadow-lg font-jakarta">
                    {loadingAnimations[currentAnimation].text}
                  </h2>
                </div>
              </div>
            ) : (
              /* Final Landing Message - Positioned at bottom of screen */
              <div 
                className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[960px] px-4 transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src="/images/wip/landing-message.svg"
                  alt="Welcome message"
                  width={960}
                  height={794}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  style={{
                    imageRendering: 'crisp-edges'
                  }}
                  quality={100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}