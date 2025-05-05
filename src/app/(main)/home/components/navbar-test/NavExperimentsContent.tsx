import React from 'react';

const experimentsDetails = [
    { title: "Animation Test", content: "Exploring Framer Motion capabilities.", bgColor: "bg-red-800" },
    { title: "Component Library", content: "Building reusable UI elements.", bgColor: "bg-red-800" },
    { title: "Data Visualization", content: "Experimenting with D3.js.", bgColor: "bg-red-800" }
];

export default function NavExperimentsContent() {
  return (
    <div className="flex flex-row w-[1152px] gap-x-6">
      {experimentsDetails.map((col, index) => (
        <div key={index} className={`w-[368px] flex-shrink-0 p-6 rounded ${col.bgColor} min-h-0`}>
          <h3 className="text-xl font-semibold mb-2">{col.title}</h3>
          <p>{col.content}</p>
        </div>
      ))}
    </div>
  );
} 