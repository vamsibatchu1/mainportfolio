"use client";

import React from "react";
import IslandController from "@/components/ui/DynamicIsland/IslandController";
import { IOSChat } from "@/components/ui/ios-chat";
import { ActionGrid } from "@/components/ui/action-grid";


const messages = [
  { type: "send", message: "Hey there! What's up" },
  { type: "receive", message: "Checking out iOS7 you know.." },
  { type: "send", message: "Check ousasahdbashdbahbdhabhdbhabsdbhbahsbdhabhbdhbhabdhbdhabhbbht this bubble!" },
  { type: "receive", message: "It's pretty cool..." },
  { type: "receive", message: "Not gonna lie!" },
  { type: "send", message: "Yeah it's pure CSS & HTML" },
  { type: "receive", message: "Wow that's impressive. But what's even more impressive is that this bubble is really high." }
] as const;

export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center"> {/* Added min-h-screen and flex centering */}
      <div className="w-full h-full flex-row items-center justify-center"> {/* Added flex centering */}
          <IslandController />
          {/*<IOSChat messages={messages} />*/}
          <div className="flex justify-center">
            <ActionGrid />
          </div>      
    </div>
    </section>
  );
}





