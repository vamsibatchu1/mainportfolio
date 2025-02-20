"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './styles.module.css';

// First, let's create the boot sequence text
const BOOT_SEQUENCE = `SEARCHING FOR PORTFOLIO.SYS...
[................................]

ERROR 404: PORTFOLIO NOT FOUND

TEMPORAL ANALYSIS COMPLETE:
> Target "Vamsi Batchu" not found in current timeline
> MESSAGE: Oops! Looks like we're a bit early. 
The designer you're looking for hasn't started his journey yet.

> Recommendation: Time jump required to 2025
[Press ENTER to initiate temporal shift]"`;

function TypewriterText({ 
  text, 
  speed = 100,
  className = "",
  style = {}
}: { 
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <pre
      className={`font-mono ${className}`}
      style={{
        whiteSpace: "pre-wrap",
        display: "block",
        lineHeight: "1.5",
        fontFamily: "'128k', monospace",
        fontSize: "16px",
        ...style
      }}
    >
      {displayText}
      <span className="animate-pulse">_</span>
    </pre>
  );
}

function MacWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.window} data-is-open={true}>
      <div className={styles.titleBar}>
        <h1 className={styles.title}> System Boot</h1>
      </div>
      <div className={styles.detailsBar}>
        <span>MARCH 10, 1984</span>
        <span>RAM: 128K</span>
        <span>SYSTEM STATUS: READY</span>
      </div>
      <div className={styles.windowPane}>
        {children}
      </div>
    </div>
  );
}

// Sequence 1: Retro Boot (1984)
function RetroBootSequence({ onComplete }: { onComplete: () => void }) {
  return (
    <div className={styles.desktop}>
      <div className={styles.desktopBg} />
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{ 
          type: "spring",
          duration: 0.8,
          bounce: 0.2
        }}
      >
        <MacWindow>
          <TypewriterText
            text={BOOT_SEQUENCE}
            speed={50}
            className="text-black"
          />
        </MacWindow>
      </motion.div>
    </div>
  );
}

// Sequence 2: Time Travel
function TimeJumpSequence() {
  return (
    <div className={styles.timeJump}>
      {/* Time travel animation/transition will go here */}
    </div>
  );
}

// Sequence 3: Modern Era (2025)
function ModernSequence() {
  return (
    <div className={styles.modern}>
      {/* Modern UI will go here */}
    </div>
  );
}

// Main sequence controller
function SequenceController() {
  const [currentSequence, setCurrentSequence] = useState<'retro' | 'jump' | 'modern'>('retro');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && currentSequence === 'retro') {
        setCurrentSequence('jump');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSequence]);

  return (
    <div className="h-full w-full">
      <AnimatePresence mode="wait">
        {currentSequence === 'retro' && (
          <RetroBootSequence 
            key="retro"
            onComplete={() => setCurrentSequence('jump')} 
          />
        )}
        {currentSequence === 'jump' && <TimeJumpSequence key="jump" />}
        {currentSequence === 'modern' && <ModernSequence key="modern" />}
      </AnimatePresence>
    </div>
  );
}

// Main page component
export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-[100svh] w-full overflow-hidden relative"
    >
      <SequenceController />
    </motion.div>
  );
}

