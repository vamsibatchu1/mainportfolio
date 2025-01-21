"use client";

import React from "react";
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Page() {
  return (
    <main className="relative min-h-screen z-3">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 relative z-10">
          
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
