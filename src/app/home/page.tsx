"use client";

import React from "react";
import { Benne } from "next/font/google";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";


//Blur Fade Images
const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

//Benne Font
const benne = Benne({
  weight: "400",
  subsets: ["latin"],
});

//
export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#2A3178]">
        {/* Column 1 - Header Title and Description */}
        <div className="w-full px-4 md:px-8 lg:px-12">
          <h1 className={`${benne.className} text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight text-[#E8D8C7]`}>
            <TextAnimate animation="slideUp" by="word">
              Hello, I'm Vamsi Batchu. A product design leader working at the intersection of craft and code.
            </TextAnimate>
          </h1>
          <div className={`${benne.className} text-xl md:text-2xl lg:text-2xl font-light text-[#E8D8C7]`}>
            <TextAnimate animation="slideUp" by="word">
              Hands-on product design leader with ten+ years of experience in designing and leading teams developing highly
              impactful products at scale.
            </TextAnimate>
          </div>
        </div>

        {/* Column 2 - Cards Animation */}
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="columns-2 gap-4 sm:columns-3">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <img
                  className="mb-4 size-full rounded-lg object-contain"
                  src={imageUrl}
                  alt={`Random stock image ${idx + 1}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
