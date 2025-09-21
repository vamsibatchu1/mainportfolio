"use client";
import { type JSX, useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  // Reset state when component mounts or text changes
  useEffect(() => {
    setDisplayText('');
    setIsAnimating(false);
  }, [text]);

  const scramble = async () => {
    console.log('Scramble called for:', text, 'isAnimating:', isAnimating);
    if (isAnimating) return;
    setIsAnimating(true);

    // Start with fully scrambled text
    let initialScrambled = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        initialScrambled += ' ';
      } else {
        initialScrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
      }
    }
    setDisplayText(initialScrambled);

    const startTime = Date.now();
    const totalDuration = duration * 1000; // Convert to milliseconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      let scrambled = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);

      // Continue scrambling even after text is complete to fill the full duration
      if (progress >= 1) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        console.log('Scramble completed for:', text);
        onScrambleComplete?.();
      }
    }, speed * 1000);

    // Store interval reference for cleanup
    return interval;
  };

  useEffect(() => {
    console.log('TextScramble useEffect triggered for:', text, 'trigger:', trigger);
    if (!trigger) return;

    // Reset animation state when component mounts
    setIsAnimating(false);

    // Small delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      scramble();
    }, 50);

    return () => {
      clearTimeout(timer);
      // Clear any existing intervals when component unmounts or dependencies change
      setIsAnimating(false);
    };
  }, [trigger, children, duration, speed, characterSet]); // Add all dependencies

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
