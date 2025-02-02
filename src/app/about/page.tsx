"use client";

import React, { useState, useEffect } from "react";
import IslandController from "@/components/ui/DynamicIsland/IslandController";
/*import { IOSChat } from "@/components/ui/ios-chat";*/
import { ActionGrid } from "@/components/ui/action-grid";
/*import { motion } from "framer-motion";*/


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

  // Debug mount
  useEffect(() => {
    console.log("About page mounted");
  }, []);

  // Debug state changes
  useEffect(() => {
    console.log("isComplete state changed:", isComplete);
  }, [isComplete]);

  return (
    <section className="min-h-screen flex flex-col items-center">
      <IslandController 
        onComplete={() => {
          console.log("IslandController animation sequence complete");
          console.log("Setting isComplete to true");
          setIsComplete(true);
        }} 
      />
      
      {/* Only render ActionGrid after IslandController is complete */}
      {isComplete && (
        <div className="mt-8">
          <ActionGrid show={true} />
        </div>
      )}
    </section>
  );
}





