"use client";

import React, { useState, useEffect } from "react";
import IslandController from "@/components/ui/DynamicIsland/IslandController";
/*import { IOSChat } from "@/components/ui/ios-chat";*/
import { ActionGrid } from "@/components/ui/action-grid";
import { ContentContainer } from "@/components/ui/content-container";
import { motion, AnimatePresence } from "framer-motion";



/*const messages = [
  { type: "send", message: "Hey there! What's up" },
  { type: "receive", message: "Checking out iOS7 you know.." },
  { type: "send", message: "Check ousasahdbashdbahbdhabhdbhabsdbhbahsbdhabhbdhbhabdhbdhabhbbht this bubble!" },
  { type: "receive", message: "It's pretty cool..." },
  { type: "receive", message: "Not gonna lie!" },
  { type: "send", message: "Yeah it's pure CSS & HTML" },
  { type: "receive", message: "Wow that's impressive. But what's even more impressive is that this bubble is really high." }
] as const;*/

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
    <section className="min-h-screen flex flex-col items-center">
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          {!activeContent ? (
            <motion.div
              key="island"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IslandController onComplete={() => setIsComplete(true)} />
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
          />
        </div>
      )}
    </section>
  );
}





