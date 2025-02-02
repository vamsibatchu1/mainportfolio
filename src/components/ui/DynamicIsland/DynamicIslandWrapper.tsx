"use client";
import React, { useState, useEffect } from "react";
import Call from "./call";
import Event from "./event";
import FaceId from "./faceid";
import DynamicIsland, { DynamicIslandTypes } from "./DynamicIsland";

// Configuration for state durations in milliseconds
const STATE_DURATIONS = {
  default: 2000,  // Default state shows for 2s
  call: 4000,     // Call state shows for 4s
  event: 3000,    // Event state shows for 3s
  faceid: 5000    // FaceID state shows for 5s
} as const;

// Wrapper component that manages the dynamic island states and their transitions
const DynamicIslandWrapper = () => {
  const [active, setActive] = useState<DynamicIslandTypes>("default");

  useEffect(() => {
    const states: DynamicIslandTypes[] = ["default", "call", "event", "faceid"];
    let currentIndex = 0;

    const nextState = () => {
      currentIndex = (currentIndex + 1) % states.length;
      const newState = states[currentIndex];
      setActive(newState);
      // Schedule next transition based on current state's duration
      setTimeout(nextState, STATE_DURATIONS[newState]);
    };

    // Start the cycle
    setTimeout(nextState, STATE_DURATIONS[states[0]]);

    return () => {
      // Cleanup any pending timeouts when component unmounts
      clearTimeout(nextState as unknown as number);
    };
  }, []);

  return (
    <div className="relative p-4 min-h-[450px] h-full flex items-start w-full justify-center">
      <DynamicIsland active={active}>
        {active === "call" && <Call />}
        {active === "event" && <Event />}
        {active === "faceid" && <FaceId active={active} />}
      </DynamicIsland>
    </div>
  );
};

export default DynamicIslandWrapper;
