"use client";
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import React from "react";
import AtlantaAnimation from "../animations/atlanta.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: AtlantaAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const Atlanta = () => {
  return (
    <motion.div className="flex items-center justify-between">
    {/* <img src="/images/faceid.svg" alt="faceid" height={60} width={60}/> */}

     <Lottie options={defaultOptions} />

    </motion.div>
  );
};

export default Atlanta;