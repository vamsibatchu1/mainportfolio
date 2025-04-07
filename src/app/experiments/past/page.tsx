"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

// Boot sequence text
const BOOT_SEQUENCE = `
INITIALIZING SYSTEM...
[███████████████] 100%

SEARCHING FOR PORTFOLIO.SYS...
[░░░░░░░░░░░░░░░]

<span style="color: #ffa94d; font-size: 42px; text-shadow: 0 0 10px rgba(255, 169, 77, 0.7); display: block; margin: 8px 0;">ERROR 404: PORTFOLIO NOT FOUND</span>

TEMPORAL ANALYSIS COMPLETE:
> Time anomaly detected and target "Vamsi Batchu" not found

[Press ENTER to initiate temporal jump to 2025]`;

function TypewriterText({ 
  text, 
  speed = 100,
  style = {}
}: { 
  text: string;
  speed?: number;
  style?: React.CSSProperties;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarting, setIsStarting] = useState(true);
  const maxLines = 12;

  useEffect(() => {
    if (isStarting) {
      const startDelay = setTimeout(() => {
        setIsStarting(false);
      }, 2000);
      return () => clearTimeout(startDelay);
    }

    if (!isStarting && currentIndex < text.length) {
      if (text[currentIndex] === '<') {
        const closeTagIndex = text.indexOf('>', currentIndex);
        if (closeTagIndex !== -1) {
          setDisplayText(prev => prev + text.substring(currentIndex, closeTagIndex + 1));
          setCurrentIndex(closeTagIndex + 1);
          return;
        }
      }

      const timeout = setTimeout(() => {
        setDisplayText(prev => {
          const newText = prev + text[currentIndex];
          const lines = newText.split('\n');
          return lines.slice(-maxLines).join('\n');
        });
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarting]);

  return (
    <pre
      style={{
        whiteSpace: "pre-wrap",
        lineHeight: "1.5",
        fontFamily: "'VT323', monospace",
        fontSize: "24px",
        color: "#EFE7D1",
        textShadow: "0 0 5px rgba(239, 231, 209, 0.3)",
        position: "absolute",
        bottom: "24px",
        left: "24px",
        right: "24px",
        margin: 0,
        ...style
      }}
      dangerouslySetInnerHTML={{ 
        __html: (isStarting ? '' : displayText) + '<span class="animate-pulse text-amber-500">█</span>' 
      }}
    />
  );
}

function IntroSequence() {
  const router = useRouter();
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        router.push('/experiments/transition');
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router]);
  
  return (
    <div className="w-full h-[100vh] bg-black flex items-center justify-center relative overflow-hidden">
      <TypewriterText text={BOOT_SEQUENCE} />
    </div>
  );
}

export default function Past() {
  return <IntroSequence />;
}