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
  work: 2800   // Work state 
} as const;

// Add onComplete prop
interface IslandControllerProps {
  onComplete?: () => void;
}

// Wrapper component that manages the dynamic island states and their transitions
export default function IslandController({ onComplete }: IslandControllerProps) {
  const [active, setActive] = useState<IslandTypes>("default");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return; // Don't start sequence if already finished

    console.log("IslandController mounted");
    const states: IslandTypes[] = ["default", "faceid", "default", "hello", "default", "atlanta", "default", "work"];
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const nextState = () => {
      if (currentIndex === states.length - 1) {
        console.log("Reached final work state - stopping sequence");
        setIsFinished(true);
        onComplete?.();
        return;
      }

      currentIndex += 1;
      const newState = states[currentIndex];
      console.log(`Setting active state to: ${newState}`);
      setActive(newState);
      
      timeoutId = setTimeout(nextState, STATE_DURATIONS[newState]);
    };

    // Start the sequence
    timeoutId = setTimeout(nextState, STATE_DURATIONS[states[0]]);

    return () => {
      console.log("Cleaning up IslandController");
      clearTimeout(timeoutId);
    };
  }, [onComplete, isFinished]); // Add isFinished to dependencies

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
}
