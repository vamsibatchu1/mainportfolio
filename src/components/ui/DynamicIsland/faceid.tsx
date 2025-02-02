"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { DynamicIslandProps } from "./DynamicIsland";


const FaceId = ({
  active,
  className,
}: DynamicIslandProps) => {
  return (
    <motion.div
      className={cn(
        `relative  bg-black ${
          active === "event" ? "rounded-3xl" : "rounded-full"
        } px-3 py-2.5 text-white border-[1px]  flex items-start justify-start`,
        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium">Face ID</p>
      </div>
    </motion.div>
  );
};

export default FaceId;