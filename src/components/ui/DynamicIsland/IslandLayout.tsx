"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type IslandTypes = "hello" | "atlanta" | "default" | "faceid" | "work";
export type IslandSize = "xsmall" | "small" | "medium" | "large";

export interface IslandProps {
  children?: React.ReactNode;
  className?: string;
  active: IslandTypes;
}

const sizeStyles = {
  xsmall: "min-w-[auto] min-h-[auto] rounded-[32px] p-[24px]",
  small: "min-w-[173px] min-h-[38px] rounded-full p-[12px]",
  medium: "min-w-[367px] min-h-[48px] rounded-[69px] pt-[16px] pb-[16px] pl-[24px] pr-[24px]",
  large: "min-w-[367px] min-h-[162px] rounded-[48px] pt-[16px] pb-[24px] pl-[24px] pr-[24px]",
} as const;

const getIslandSize = (type: IslandTypes): IslandSize => {
  switch (type) {
    case "faceid":
      return "xsmall";
    case "default":
      return "small";
    case "hello":
      return "medium";
    case "atlanta":
      return "large";
    case "work":
      return "large";
  }
};

const IslandLayout = ({
  children,
  active,
  className,
}: IslandProps) => {
  const size = getIslandSize(active);

  return (
    <motion.div
      className={cn(
        "relative bg-black",
        "inline-flex items-center justify-start",
        sizeStyles[size],
        "w-fit h-fit",
        className
      )}
      layout
      style={{ transformOrigin: "top", originX: 0.5, originY: 0 }}
      transition={{
        layout: {
          duration: 0.65,
          stiffness: 110,
          damping: 12,
          type: "spring",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default IslandLayout;
