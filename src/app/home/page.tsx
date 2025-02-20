"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

function IntroSequence() {
  const [showBoot, setShowBoot] = useState(true);

  return (
    <div className={styles.desktop}>
      {showBoot && (
        <MacWindow>
          <TypewriterText
            text={BOOT_SEQUENCE}
            speed={50}
            className="text-black"
          />
        </MacWindow>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-[100svh] w-full overflow-hidden relative"
    >
      <IntroSequence />
    </motion.div>
  );
}

