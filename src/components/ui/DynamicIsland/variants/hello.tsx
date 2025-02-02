"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Lottie from 'react-lottie';
import HelloAnimation from "../animations/hello.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: HelloAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
 

// Main Call component that renders the entire call interface
const Hello = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
      className={cn("flex justify-between items-start origin-start")}
    >
      <Lottie options={defaultOptions} />
    </motion.div>
  );
};

export default Hello;
