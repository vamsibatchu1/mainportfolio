"use client";

import React from "react";
import { Benne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { TextAnimate } from "@/components/ui/text-animate";

//Benne Font
const benne = Benne({
  weight: "400",
  subsets: ["latin"],
});

//DM Sans Font
const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

//
export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="bg-white min-h-screen relative">
        <div className="w-full px-8 md:px-[6%] absolute bottom-0">
          <div className="bg-[#DFF6E9] rounded-t-3xl p-16 min-h-[80vh]">
            <h1 className={`${benne.className} text-[#388D4F] text-4xl md:text-5xl lg:text-6xl font-serif max-w-4xl leading-tight`}>
              Hi there ! I am Vamsi Batchu. A product design leader working at the intersection of craft&nbsp;
              <span className="inline-block w-6 h-6 bg-yellow-400 transform rounded-4 rotate-45 ml-2" aria-hidden="true" />
              &nbsp;and code
              <span className="inline-block w-6 h-6 bg-orange-400 rounded-full ml-2" aria-hidden="true" />
            </h1>

             {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-40">
        {/* Left Column - Text */}
        <div className={`${dmSans.className} text-[#797979] text-xl md:text-2xl lg:text-2xl font-light`}>
            <TextAnimate animation="slideUp" by="word">
          Hands-on product design leader with ten+ years of experience in designing and leading teams developing highly impactful products at scale.
            </TextAnimate>
        </div>
        
        {/* Right Column - Cards */}
        <div className="grid grid-cols-2 gap-4">
        <div className="p-8">
    </div>
        </div>
      </div>
          </div>
        </div>
      </section>
    </main>
  );
}
