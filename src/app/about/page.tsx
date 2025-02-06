"use client";

import React, { useState, useEffect } from "react";
import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
/*import { IOSChat } from "@/components/ui/ios-chat";*/
import { ContentContainer } from "@/components/ui/content-container";
import { motion, AnimatePresence } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble"

// Dynamic import with no SSR for components that need document
const DynamicIslandController = dynamic(
  () => import('@/components/ui/DynamicIsland/IslandController'),
  { ssr: false }
);

const ActionGrid = dynamic(
  () => import('@/components/ui/action-grid').then(mod => mod.ActionGrid),
  { ssr: false }
);

// Load local font
const doto = localFont({
  src: '../../../public/fonts/doto.ttf',
  variable: '--font-doto'
});

/*const messages = [
  { type: "send", message: "Hey there! What's up" },
  { type: "receive", message: "Checking out iOS7 you know.." },
  { type: "send", message: "Check ousasahdbashdbahbdhabhdbhabsdbhbahsbdhabhbdhbhabdhbdhabhbbht this bubble!" },
  { type: "receive", message: "It's pretty cool..." },
  { type: "receive", message: "Not gonna lie!" },
  { type: "send", message: "Yeah it's pure CSS & HTML" },
  { type: "receive", message: "Wow that's impressive. But what's even more impressive is that this bubble is really high." }
] as const;*/

// Main portfolio page that orchestrates the Dynamic Island controller and content switching
// Uses AnimatePresence for smooth transitions between states and manages the overall layout
export default function Page() {
  const [isComplete, setIsComplete] = useState(false);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  // Debug mount
  useEffect(() => {
    console.log("About page mounted");
  }, []);

  // Debug state changes
  useEffect(() => {
    console.log("isComplete state changed:", isComplete);
  }, [isComplete]);

  const handleActionClick = (content: string) => {
    setActiveContent(content);
  };

  const handleCloseContent = () => {
    setActiveContent(null);
  };

  return (
    <section className={`min-h-screen flex flex-col items-center ${doto.variable}`}>
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="island"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DynamicIslandController onComplete={() => setIsComplete(true)} />
            </motion.div>
          ) : !activeContent ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-[180px]"
            >
              <TextScramble className={`text-6xl font-normal ${doto.className}`}>
                VAMSI BATCHU
              </TextScramble>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ContentContainer 
                isOpen={true}
                onClose={handleCloseContent}
                activeContent={activeContent}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isComplete && (
        <div className="mt-8">
          <ActionGrid 
            show={true} 
            onActionClick={handleActionClick}
            isCollapsed={activeContent !== null}
            initialDelay={1}
          />
        </div>
      )}
    </section>
  );
}





