// src/app/(main)/home/components/navbar-test/NavHomeContent.tsx
import React from 'react';

const homeDetails = [
  { title: "Welcome Home", content: "Quick access to main sections and overview.", bgColor: "bg-emerald-800" },
  { title: "Recent Activity", content: "Latest blog posts or project updates.", bgColor: "bg-emerald-800" },
  { title: "Navigation Tips", content: "Hover over items to see more details.", bgColor: "bg-emerald-800" }
];

export default function NavHomeContent() {
  return (
    <div className="flex flex-row w-[1152px] gap-x-6">
      {homeDetails.map((col, index) => (
        <div
          key={index}
          className={`w-[368px] flex-shrink-0 p-6 rounded ${col.bgColor} min-h-0`}
        >
          <h3 className="text-xl font-semibold mb-2">{col.title}</h3>
          <p>{col.content}</p>
        </div>
      ))}
    </div>
  );
} 