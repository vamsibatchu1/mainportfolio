// src/app/(main)/home/components/navbar-test/NavWorkContent.tsx
import React from 'react';

const workDetails = [
  { title: "Case Study Alpha", content: "Details about the enterprise platform redesign.", bgColor: "bg-pink-800" },
  { title: "Service Beta", content: "Improving the customer service portal experience.", bgColor: "bg-pink-800" },
  { title: "Mobile App Gamma", content: "Launching a new consumer application.", bgColor: "bg-pink-800" }
];

export default function NavWorkContent() {
  return (
    <div className="flex flex-row w-[1152px] gap-x-6">
      {workDetails.map((col, index) => (
        <div key={index} className={`w-[368px] flex-shrink-0 p-6 rounded ${col.bgColor} min-h-0`}>
          <h3 className="text-xl font-semibold mb-2">{col.title}</h3>
          <p>{col.content}</p>
        </div>
      ))}
    </div>
  );
} 