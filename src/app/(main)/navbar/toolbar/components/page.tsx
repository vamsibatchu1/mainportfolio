'use client';

import React from 'react';
import MarqueeAlongSvgPath from "./marquee";
import Image from "next/image";
import useScreenSize from "@/hooks/use-screen-size";
import DragElements from "./dragelements";

const ComponentsPage = () => {
  const examplePath = "M10,50 Q50,10 90,50 T170,50"; // A simple quadratic bezier curve

  const urls = [
    "https://images.unsplash.com/photo-1683746531526-3bca2bc901b8?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1631561729243-9b3291efceae?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1635434002329-8ab192fe01e1?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719586799413-3f42bb2a132d?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720561467986-ca3d408ca30b?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724403124996-64115f38cd3f?q=80&w=3082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const DragElementsDemo: React.FC = () => {
    const screenSize = useScreenSize();
    return (
      <div className="w-dvw h-dvh relative bg-[#eeeeee] overflow-hidden">
        <h1 className="absolute text-xl md:text-4xl md:ml-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground uppercase w-full">
          all your
          <span className="font-bold text-foreground dark:text-muted">
            {" "}
            memories.{" "}
          </span>
        </h1>
        <DragElements dragMomentum={false} className="p-40">
          {urls.map((url, index) => {
            const rotation = randomInt(-12, 12);
            const width = screenSize.lessThan(`md`)
              ? randomInt(90, 120)
              : randomInt(120, 150);
            const height = screenSize.lessThan(`md`)
              ? randomInt(120, 140)
              : randomInt(150, 180);

            return (
              <div
                key={index}
                className={`flex items-start justify-center bg-white shadow-2xl p-4`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  width: `${width}px`,
                  height: `${height}px`,
                }}
              >
                <div
                  className={`relative overflow-hidden`}
                  style={{
                    width: `${width - 4}px`,
                    height: `${height - 30}px`,
                  }}
                >
                  <Image
                    src={url}
                    fill
                    alt={`Analog photo ${index + 1}`}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </DragElements>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Component Playground</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">MarqueeAlongSvgPath Test</h2>
        <div className="relative w-full h-48 border border-dashed border-gray-400 rounded-md overflow-hidden">
          <MarqueeAlongSvgPath
            path={examplePath}
            baseVelocity={2}
            direction="normal"
            // showPath // Uncomment to see the path
            repeat={2} // Number of times to repeat the children
            slowdownOnHover
          >
            {/* Add children to animate along the path */}
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">1</div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">2</div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">3</div>
          </MarqueeAlongSvgPath>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Testing the marquee component with a sample path and items.
          The `cssVariableInterpolation` feature may not work correctly due to unresolved linter errors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">DragElements Test</h2>
        <DragElementsDemo />
      </section>

      {/* You can add more component tests here */}
    </div>
  );
};

export default ComponentsPage; 