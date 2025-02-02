"use client";

import React from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
export type IconProps = React.HTMLAttributes<SVGElement>;
import DynamicIslandWrapper from "@/components/ui/DynamicIsland/DynamicIslandWrapper";
import { motion, useInView } from "framer-motion";


export default function Page() {
  return (
  <section>
        <div className="w-full h-full justify-center items-center">
          <DynamicIslandWrapper />
        </div>
  </section>
  );
}
