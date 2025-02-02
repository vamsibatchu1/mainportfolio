"use client";
import React, { useState, useEffect } from "react";
import Hello from "./variants/hello";
import Atlanta from "./variants/atlanta";
import FaceId from "./variants/faceid"; 
import { IslandTypes } from "./IslandLayout";
import IslandLayout from "./IslandLayout";
import Work from "./variants/work";

// Configuration for state durations in milliseconds
const STATE_DURATIONS = {
  default: 400,  // Default state
  faceid: 1700,    // Face ID state 
  hello: 2000,     // Hello state
  atlanta: 2200,    // Atlanta state
  work: 3200   // Work state 
} as const;

// Wrapper component that manages the dynamic island states and their transitions
const IslandController = () => {
  const [active, setActive] = useState<IslandTypes>("default");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const states: IslandTypes[] = ["default", "faceid", "default", "hello", "default", "atlanta", "default", "work"];
    let currentIndex = 0;

    const nextState = () => {
      if (currentIndex >= states.length - 1) {
        setIsComplete(true);
        return; // Stop the sequence
      }

      currentIndex += 1;
      const newState = states[currentIndex];
      setActive(newState);
      
      // Schedule next transition if not at the end
      if (currentIndex < states.length - 1) {
        setTimeout(nextState, STATE_DURATIONS[newState]);
      }
    };

    // Start the sequence
    setTimeout(nextState, STATE_DURATIONS[states[0]]);

    return () => {
      // Cleanup
      setIsComplete(false);
    };
  }, []);

  return (
    <div className="relative p-4 min-h-[450px] h-full flex items-center w-full justify-center">
      <IslandLayout active={active}>
        {active === "faceid" && <FaceId />}
        {active === "hello" && <Hello />}
        {active === "atlanta" && <Atlanta />}
        {active === "work" && <Work />}
      </IslandLayout>
    </div>
  );
};

export default IslandController;
