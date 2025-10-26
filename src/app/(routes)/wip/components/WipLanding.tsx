'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FadedButton } from './faded_button';

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
  const [showFadedButton, setShowFadedButton] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);
  const [showFirstAnimation, setShowFirstAnimation] = useState(false);
  
  // Code-level toggle: Change this to false to hide loading images
  const showLoadingImages = true;

  // Handle background loading and animation start
  useEffect(() => {
    if (isBackgroundLoaded) {
      // Start animations after 200ms delay
      setTimeout(() => {
        setStartAnimations(true);
        // Show first animation with fade-in after a brief delay
        setTimeout(() => {
          setShowFirstAnimation(true);
        }, 100);
      }, 200);
    }
  }, [isBackgroundLoaded]);

  useEffect(() => {
    // Don't run timer if final message is already shown or animations haven't started
    if (showFinalMessage || !startAnimations) return;
    
    const timer = setTimeout(() => {
      if (currentAnimation < loadingAnimations.length - 1) {
        setShowFirstAnimation(false);
        setTimeout(() => {
          setCurrentAnimation(currentAnimation + 1);
          setShowFirstAnimation(true);
        }, 300);
      } else {
        setShowFirstAnimation(false);
        setTimeout(() => {
          setShowFinalMessage(true);
          setIsVisible(true);
          // Show faded button after 1 second of landing message
          setTimeout(() => {
            setShowFadedButton(true);
          }, 1000);
        }, 300);
      }
    }, loadingAnimations[currentAnimation]?.duration || 2000);

    return () => clearTimeout(timer);
  }, [currentAnimation, showFinalMessage, startAnimations, showFirstAnimation]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden fixed inset-0">
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
          onLoad={() => setIsBackgroundLoaded(true)}
        />
      </div>

      {/* Main Content Container - Responsive width */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-5 md:px-4">
        <div className="w-full max-w-[90vw] md:max-w-[960px] mx-auto">
          {/* Loading Animation Container */}
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-16">
            {!showFinalMessage && startAnimations && (
              <motion.div 
                className="flex items-center gap-4 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: showFirstAnimation ? 1 : 0, 
                  y: showFirstAnimation ? 0 : 20 
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut" 
                }}
              >
                {/* Loading Image on the left - Conditionally rendered */}
                {showLoadingImages && (
                  <div className="flex-shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px] relative">
                    <Lottie
                      animationData={loadingAnimations[currentAnimation].animation}
                      loop={false}
                      autoplay={true}
                      className="w-full h-full drop-shadow-lg"
                    />
                  </div>
                )}

                {/* Loading Text - Always shown */}
                <div className="flex-1">
                  <h2 className="text-[32px] md:text-[64px] font-medium text-white leading-[1.13] drop-shadow-lg font-jakarta md:whitespace-nowrap">
                    {loadingAnimations[currentAnimation].text}
                  </h2>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Final Landing Message - Only shown when animations complete */}
      {showFinalMessage && (
        <div 
          className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[95vw] md:max-w-[960px] px-3 md:px-4 transition-opacity duration-300 ${
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
      
      {/* FadedButton - Positioned at bottom right of entire page with Framer Motion */}
      {showFadedButton && (
        <motion.div 
          className="fixed bottom-[64px] right-[64px] w-auto z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut" 
          }}
        >
          <FadedButton />
        </motion.div>
      )}
    </div>
  );
}