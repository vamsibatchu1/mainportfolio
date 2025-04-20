"use client";

import React from 'react';
import { louize, doto } from '../../fonts';

export default function Research() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className={`${doto.className} text-4xl font-bold mb-4`}>Research</h2>
        <div className={`${louize.className} text-xl text-gray-600`}>
          Understanding user needs through comprehensive research methods.
        </div>
      </div>
      
      {/* Content Placeholder */}
      <div className="p-12 bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
        <p className={`${louize.className} text-lg text-gray-500`}>
          Research content will go here, including user interviews, surveys, and competitive analysis.
        </p>
      </div>
    </div>
  );
} 