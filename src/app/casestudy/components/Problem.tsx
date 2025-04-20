"use client";

import React from 'react';
import { louize, doto } from '../../fonts';

export default function Problem() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className={`${doto.className} text-4xl font-bold mb-4`}>The Problem</h2>
        <div className={`${louize.className} text-xl text-gray-600`}>
          Identifying the key issues that were preventing users from engaging with the platform effectively.
        </div>
      </div>
      
      {/* Problem Statement */}
      <div className="mb-12 p-6 bg-gray-100 border-l-4 border-black rounded-r-lg">
        <h3 className={`${doto.className} text-xl font-bold mb-3`}>Problem Statement</h3>
        <p className={`${louize.className} text-lg italic`}>
          &ldquo;How might we redesign the digital platform to reduce cognitive load, simplify navigation, and increase engagement among our target users?&rdquo;
        </p>
      </div>
      
      {/* Key Issues Grid */}
      <div className="mb-12">
        <h3 className={`${doto.className} text-2xl font-bold mb-6`}>Key Issues Identified</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <span className={`${doto.className} text-red-600 font-bold`}>1</span>
              </div>
              <h4 className={`${doto.className} text-lg font-bold`}>Complex Navigation</h4>
            </div>
            <p className={`${louize.className}`}>
              Users struggled to find important features due to deeply nested menus and inconsistent navigation patterns.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <span className={`${doto.className} text-red-600 font-bold`}>2</span>
              </div>
              <h4 className={`${doto.className} text-lg font-bold`}>Outdated Visual Design</h4>
            </div>
            <p className={`${louize.className}`}>
              The interface looked dated compared to competitors, reducing perceived credibility and user trust.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <span className={`${doto.className} text-red-600 font-bold`}>3</span>
              </div>
              <h4 className={`${doto.className} text-lg font-bold`}>Poor Mobile Experience</h4>
            </div>
            <p className={`${louize.className}`}>
              The platform was not fully responsive, causing frustration for the 60% of users who access it via mobile devices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <span className={`${doto.className} text-red-600 font-bold`}>4</span>
              </div>
              <h4 className={`${doto.className} text-lg font-bold`}>Confusing User Flows</h4>
            </div>
            <p className={`${louize.className}`}>
              Critical tasks like account setup and checkout had high abandonment rates due to unnecessarily complex flows.
            </p>
          </div>
        </div>
      </div>
      
      {/* Supporting Data */}
      <div className="mb-12">
        <h3 className={`${doto.className} text-2xl font-bold mb-4`}>Supporting Data</h3>
        <div className={`${louize.className} text-lg space-y-4`}>
          <p>
            Our analysis of the existing platform revealed several concerning metrics:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className={`${doto.className} p-3 text-left border border-gray-300`}>Metric</th>
                  <th className={`${doto.className} p-3 text-left border border-gray-300`}>Current Value</th>
                  <th className={`${doto.className} p-3 text-left border border-gray-300`}>Industry Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${louize.className} p-3 border border-gray-300`}>Avg. Session Duration</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>1:42 minutes</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>3:15 minutes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className={`${louize.className} p-3 border border-gray-300`}>Bounce Rate</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>62%</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>41%</td>
                </tr>
                <tr>
                  <td className={`${louize.className} p-3 border border-gray-300`}>Conversion Rate</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>1.8%</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>3.2%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className={`${louize.className} p-3 border border-gray-300`}>Mobile Engagement</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>-42% vs desktop</td>
                  <td className={`${louize.className} p-3 border border-gray-300`}>-15% vs desktop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* User Pain Points */}
      <div>
        <h3 className={`${doto.className} text-2xl font-bold mb-4`}>User Pain Points</h3>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <img 
            src="/images/placeholder-user-journey.jpg" 
            alt="User Journey Map showing pain points" 
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <p className={`${louize.className} text-sm text-gray-500 italic text-center`}>
            User journey map highlighting key pain points in the current experience
          </p>
        </div>
      </div>
    </div>
  );
} 