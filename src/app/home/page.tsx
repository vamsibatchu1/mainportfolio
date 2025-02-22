"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from './styles.module.css';

// First, let's create the boot sequence text
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
    // Initial delay with just cursor blinking (4 blinks = ~2 seconds)
    if (isStarting) {
      const startDelay = setTimeout(() => {
        setIsStarting(false);
      }, 2000); // 2000ms = 4 blinks at 500ms per blink
      return () => clearTimeout(startDelay);
    }

    // Start typing after initial delay
    if (!isStarting && currentIndex < text.length) {
      // Skip HTML tags
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

function CoordinateDisplay() {
  return (
    <div className="p-0 font-mono text-[#EFE7D1] w-full h-full flex flex-col justify-between">
      {/* Top Section */}
      <div className="space-y-4">
        {/* Header */}
        <div className="text-sm">
          <div>Loading SAT / LNK</div>
          <div>Extracting R:\das6391\tracking_</div>
        </div>

        {/* Coordinates */}
        <div className="space-y-2">
          {/* Latitude Section */}
          <div>
            <div className="text-[#ffa94d]">LATITUDE:</div>
            <div className="grid grid-cols-3 gap-1 bg-[#1a0f02] p-1">
              <div className="bg-[#2a1705] px-2">N 30°</div>
              <div className="bg-[#2a1705] px-2">54&apos;</div>
              <div className="bg-[#2a1705] px-2">16.4929&quot;</div>
            </div>
          </div>

          {/* Longitude Section */}
          <div>
            <div className="text-[#ffa94d]">LONGITUDE:</div>
            <div className="grid grid-cols-3 gap-1 bg-[#1a0f02] p-1">
              <div className="bg-[#2a1705] px-2">W 3°</div>
              <div className="bg-[#2a1705] px-2">56&apos;</div>
              <div className="bg-[#2a1705] px-2">18.9551&quot;</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Array Values */}
        <div className="space-y-1 mt-4 font-mono">
          <div className="bg-[#ffa94d] px-2 py-1 inline-block">
            <span className="text-[#2a1705] font-bold">C_ARRAY 49C/E58AA1</span>
          </div>
          <div className="bg-[#ffa94d] px-2 py-1 inline-block">
            <span className="text-[#2a1705] font-bold">A_ARRAY 9B/1761268</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm space-y-1">
          <div>Tracked Location (Approximate)</div>
          <div>Address: N13, Atlanta</div>
          <div>Latitude: NOT FOUND</div>
          <div>Longitude: NOT FOUND</div>
          <div className="flex justify-between">
            <div>
              <div>Accuracy: route</div>
              <div>Status: 400</div>
            </div>
            {/* Battery Icon */}
            <div className="w-4 h-6 border border-[#EFE7D1] relative">
              <div className="w-2 h-1 bg-[#EFE7D1] absolute -top-1 left-1/2 -translate-x-1/2"></div>
              <div className="w-full h-2/3 bg-[#EFE7D1] absolute bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeaponSystemDisplay() {
  const [time, setTime] = useState(33.33);
  const [temp, setTemp] = useState(75);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 0.01;
        return newTime > 0 ? Number(newTime.toFixed(2)) : 33.33;
      });

      setTemp((prev) => {
        const newTemp = prev + Math.random() * 2 - 1;
        return Math.min(100, Math.max(0, newTemp));
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 font-mono text-[#EFE7D1] border border-[#EFE7D1] border-1 rounded-2xl p-4">
      {/* Header */}
      <div className="border-b border-[#EFE7D1] pb-2 mb-4 flex justify-between items-center">
        <div className="w-6 h-6 border border-[#EFE7D1] rounded-full flex items-center justify-center text-sm">A</div>
        <div className="text-center">
          <div className="text-base">UA 571-C</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div className="space-y-4">
          {/* Rounds Display */}
          <div>
            <div className="text-sm mb-1">Rounds Remaining</div>
            <div className="flex items-center">
              <div className="text-xl mr-2">▶</div>
              <div className="border border-[#EFE7D1] px-3 py-1 text-2xl">500</div>
            </div>
          </div>

          {/* Time Display */}
          <div>
            <div className="text-sm mb-1">
              TIME AT 100%
              <br />
              (secs)
            </div>
            <div className="border border-[#EFE7D1] px-3 py-1 text-2xl">{time.toFixed(2)}</div>
          </div>
        </div>

        {/* Status Bars */}
        <div className="flex justify-between h-full">
          {/* Temperature Bar */}
          <div className="flex flex-col h-full">
            <div className="text-xs mb-1">Temp</div>
            <div className="flex-1 w-6 border border-[#EFE7D1] relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-[#EFE7D1] transition-all duration-300"
                style={{ height: `${temp}%`, opacity: 0.3 }}
              />
            </div>
          </div>

          {/* R(M) Bar */}
          <div className="flex flex-col h-full">
            <div className="text-xs mb-1">R(M)</div>
            <div className="flex-1 w-6 border border-[#EFE7D1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadarDisplay() {
  return (
    <div className={styles.radarDisplay}>
      {/* Radar Grid */}
      <div className={styles.radarGrid}>
        {/* Pulsating Blips */}
        <div className={styles.radarBlip} style={{ top: '30%', left: '40%' }}></div>
        <div className={styles.radarBlip} style={{ top: '60%', left: '70%' }}></div>
        <div className={styles.radarBlip} style={{ top: '20%', left: '80%' }}></div>
      </div>

      {/* Weapon System Display */}
      <WeaponSystemDisplay />
    </div>
  );
}

function IntroSequence() {
  return (
    <div className={styles.desktop}>
      <motion.div 
        className={styles.terminalCard}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 1,
          duration: 0.8
        }}
      >
        {/* First column: Typing */}
        <div className={styles.mainSection}>
          <TypewriterText text={BOOT_SEQUENCE} speed={50} />
        </div>

        {/* Second column: Coordinates */}
        <div className={styles.sideSection}>
          <CoordinateDisplay />
        </div>

        {/* Third column: Radar */}
        <div className={styles.sideSection}>
          <RadarDisplay />
        </div>
      </motion.div>
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

