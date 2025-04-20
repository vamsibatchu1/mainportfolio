"use client";

import React from 'react';
import { louize, doto } from '../../fonts';

export default function Overview() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className={`${doto.className} text-4xl font-bold mb-4`}>Project Overview</h2>
        <div className={`${louize.className} text-xl text-gray-600`}>
          A comprehensive redesign of the client&apos;s digital platform to improve user experience and engagement.
        </div>
      </div>
      
      {/* Main Image */}
      <div className="mb-10 bg-gray-200 rounded-lg overflow-hidden">
        <img 
          src="/images/placeholder-project-hero.jpg" 
          alt="Project Hero" 
          className="w-full h-[400px] object-cover"
        />
      </div>
      
      {/* Key Info Cards */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className={`${doto.className} text-lg font-bold mb-2`}>Timeline</h3>
          <p className={`${louize.className}`}>8 weeks (Q3 2023)</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className={`${doto.className} text-lg font-bold mb-2`}>My Role</h3>
          <p className={`${louize.className}`}>UX/UI Designer, Research Lead</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className={`${doto.className} text-lg font-bold mb-2`}>Key Metrics</h3>
          <p className={`${louize.className}`}>+42% User Engagement</p>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="mb-12">
        <h3 className={`${doto.className} text-2xl font-bold mb-4`}>Project Background</h3>
        <div className={`${louize.className} text-lg space-y-4`}>
          <p>
            The client approached our team with a challenge: their existing platform was suffering from low engagement rates and high abandonment. Despite having valuable content and services, users were struggling to navigate and interact with the platform effectively.
          </p>
          <p>
            Our task was to reimagine the user experience from the ground up, focusing on intuitive navigation, clear information architecture, and a modern, accessible interface that would resonate with their target audience.
          </p>
        </div>
      </div>
      
      {/* Team & Tools */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className={`${doto.className} text-2xl font-bold mb-4`}>Team Composition</h3>
          <ul className={`${louize.className} text-lg space-y-2`}>
            <li>• Product Manager</li>
            <li>• UX/UI Designer (me)</li>
            <li>• User Researcher</li>
            <li>• Frontend Developer</li>
            <li>• Backend Developer</li>
          </ul>
        </div>
        <div>
          <h3 className={`${doto.className} text-2xl font-bold mb-4`}>Tools Used</h3>
          <ul className={`${louize.className} text-lg space-y-2`}>
            <li>• Figma for design and prototyping</li>
            <li>• Maze for usability testing</li>
            <li>• Miro for workshop collaboration</li>
            <li>• React & Tailwind for implementation</li>
            <li>• FullStory for analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 