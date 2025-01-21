"use client";

import React from "react";
import localFont from "next/font/local";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RetroGrid } from "@/components/ui/retro-grid";
export type IconProps = React.HTMLAttributes<SVGElement>;

const benne = localFont({
  src: '../../../src/fonts/benne.woff2',
  display: "swap",
  variable: "--font-benne",
});

export default function Page() {
  return (
    <main className="relative min-h-screen z-3">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <RetroGrid className="z-2" />
        <div className="container mx-auto px-4 relative z-10">
          <TypingAnimation className={benne.className} width="50%">
            Hello, I am a hands-on product design leader with ten+ years of
            experience in designing and leading teams developing highly
            impactful products at scale.Currently, leading the enterprise and AI
            design teams dedicated to banking & operations product experiences
            at Rocket Mortgage.
          </TypingAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 bg-background/80">
        <div className="container mx-auto px-4">
          {/* Your about content will go here */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Your projects content will go here */}
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-20 bg-background/80">
        <div className="container mx-auto px-4">
          {/* Your experience content will go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Your contact content will go here */}
        </div>
      </section>
    </main>
  );
}
