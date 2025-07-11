"use client";

import React, { useEffect, useState } from "react";

/**
 * Simple Header Animation
 * A compact rotating animation perfect for headers
 */

// Alternative frame sets for different styles
const FRAME_SETS = {
  spinner: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"],
  dots: ["⣀", "⣄", "⣆", "⣇", "⣧", "⣷", "⣿", "⢿", "⡿", "⠿", "⠟", "⠋"],
  lines: ["│", "╱", "─", "╲"],
  blocks: ["█", "▉", "▊", "▋", "▌", "▍", "▎", "▏"],
  arrows: ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"]
};

export default function HeaderAnimation({
  speed = 100,
  style = "spinner"
}: {
  speed?: number;
  style?: "spinner" | "dots" | "lines" | "blocks" | "arrows";
}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = FRAME_SETS[style];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex(prev => (prev + 1) % frames.length);
    }, speed);

    return () => clearInterval(interval);
  }, [speed, frames.length]);

  return (
    <div className="flex items-center justify-center w-4 h-8 bg-white text-black">
      <span className="font-mono text-lg leading-none">
        {frames[frameIndex]}
      </span>
    </div>
  );
}
