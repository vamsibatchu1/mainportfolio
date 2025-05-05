// src/app/(main)/home/components/navbar-test/NavAskContent.tsx
import React from 'react';

const askDetails = [
    { title: "Contact Form", content: "Send a direct message or inquiry.", bgColor: "bg-sky-800" },
    { title: "FAQ", content: "Frequently asked questions about projects or skills.", bgColor: "bg-sky-800" },
    { title: "Availability", content: "Check current availability for projects.", bgColor: "bg-sky-800" }
];

export default function NavAskContent() {
  return (
    <div className="flex flex-row w-[1152px] gap-x-6">
      {askDetails.map((col, index) => (
        <div key={index} className={`w-[368px] flex-shrink-0 p-6 rounded ${col.bgColor} min-h-0`}>
          <h3 className="text-xl font-semibold mb-2">{col.title}</h3>
          <p>{col.content}</p>
        </div>
      ))}
    </div>
  );
} 