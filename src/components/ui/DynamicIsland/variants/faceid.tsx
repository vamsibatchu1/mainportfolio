"use client";
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import React from "react";
import FaceIdAnimation from "../animations/faceid.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: FaceIdAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const FaceId = () => {
  return (
    <motion.div className="flex items-center justify-between">
     <Lottie options={defaultOptions} />
    </motion.div>
  );
};

export default FaceId;