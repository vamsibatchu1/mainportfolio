"use client";

import React from 'react';
import { 
  typography, 
  spacing, 
  borderRadius, 
} from '@/lib/design-system';
import { priFont, secFont, triFont } from '@/lib/config/fonts';

// Define types for font examples
type FontSizeExample = {
  size: string;
  text: string;
};

type FontWeightExample = {
  weight: string;
  text: string;
};

type FontDisplayItem = {
  name: string;
  variable: string;
  fontClass: string;
  description: string;
  weights: string[];
  examples: FontSizeExample[] | FontWeightExample[];
};

export default function DesignSystemPage() {
  // New color definitions
  const brandColors = {
    black: {
      hex: "#000000",
      description: "Primary black color used for text and backgrounds"
    },
    white: {
      hex: "#FFFFFF",
      description: "Primary white color used for text and backgrounds"
    },
    zenith: {
      hex: "#FBAF1D",
      description: "Vibrant yellow-orange accent color"
    },
    nebula: {
      hex: "#E29FC8",
      description: "Soft pink accent color"
    },
    juniper: {
      hex: "#4F7834",
      description: "Deep green accent color"
    },
    breeze: {
      hex: "#90D9E0",
      description: "Light blue accent color"
    },
    paprika: {
      hex: "#F25A3F",
      description: "Bright red-orange accent color"
    }
  };

  // Font showcase data
  const fontDisplay: FontDisplayItem[] = [
    {
      name: "Primary Font (W95FA)",
      variable: priFont.variable,
      fontClass: "font-pri",
      description: "Used for headings, titles, and UI elements",
      weights: ["Regular"],
      examples: [
        { size: "text-xl", text: "The quick brown fox jumps over the lazy dog" },
        { size: "text-2xl", text: "Primary Header Example" },
        { size: "text-4xl", text: "LARGE HEADER" },
      ] as FontSizeExample[]
    },
    {
      name: "Secondary Font (Louize)",
      variable: secFont.variable,
      fontClass: "font-sec",
      description: "Used for body text, paragraphs, and longer content",
      weights: ["Regular"],
      examples: [
        { size: "text-base", text: "The quick brown fox jumps over the lazy dog" },
        { size: "text-lg", text: "Secondary text example with Louize" },
        { size: "text-xl", text: "Larger paragraph text" },
      ] as FontSizeExample[]
    },
    {
      name: "Tertiary Font (Poppins)",
      variable: triFont.variable,
      fontClass: "font-tri",
      description: "Used for UI components, buttons, and smaller elements",
      weights: ["Light", "Regular", "Medium", "SemiBold", "Bold"],
      examples: [
        { weight: "light", text: "Poppins Light (300)" },
        { weight: "normal", text: "Poppins Regular (400)" },
        { weight: "medium", text: "Poppins Medium (500)" },
        { weight: "semibold", text: "Poppins SemiBold (600)" },
        { weight: "bold", text: "Poppins Bold (700)" },
      ] as FontWeightExample[]
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8 md:p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-pri">Design System</h1>
        
        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 font-pri">Colors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorCard 
              name="Black" 
              hex={brandColors.black.hex} 
              description={brandColors.black.description}
              textColor="white"
            />
            <ColorCard 
              name="White" 
              hex={brandColors.white.hex} 
              description={brandColors.white.description}
            />
            <ColorCard 
              name="Zenith" 
              hex={brandColors.zenith.hex} 
              description={brandColors.zenith.description}
            />
            <ColorCard 
              name="Nebula" 
              hex={brandColors.nebula.hex} 
              description={brandColors.nebula.description}
            />
            <ColorCard 
              name="Juniper" 
              hex={brandColors.juniper.hex} 
              description={brandColors.juniper.description}
              textColor="white"
            />
            <ColorCard 
              name="Breeze" 
              hex={brandColors.breeze.hex} 
              description={brandColors.breeze.description}
            />
            <ColorCard 
              name="Paprika" 
              hex={brandColors.paprika.hex} 
              description={brandColors.paprika.description}
              textColor="white"
            />
          </div>
        </section>
        
        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 font-pri">Typography</h2>
          
          <div className="space-y-12">
            {fontDisplay.map((font) => (
              <div key={font.name} className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2 text-white font-pri">{font.name}</h3>
                <p className="text-sm text-gray-300 mb-6 font-sec">{font.description}</p>
                
                <div className="space-y-6">
                  {font.name === "Tertiary Font (Poppins)" ? (
                    <div className="space-y-4">
                      {(font.examples as FontWeightExample[]).map((example, i) => (
                        <div key={i} className="text-xl">
                          <span
                            className={`${font.fontClass} font-${example.weight}`}
                            style={{ fontWeight: example.weight === 'normal' ? 400 : undefined }}
                          >
                            {example.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {(font.examples as FontSizeExample[]).map((example, i) => (
                        <div key={i} className={`${example.size} ${font.fontClass}`}>
                          {example.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4 font-pri">Font Sizes</h3>
            <div className="space-y-4">
              {Object.entries(typography.fontSizes).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <div className="w-24 text-sm font-mono">{key}</div>
                  <div className="w-24 text-sm font-mono">{value}</div>
                  <div style={{ fontSize: value }} className="font-sec">The quick brown fox jumps over the lazy dog</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 font-pri">Spacing</h2>
          
          <div className="flex flex-wrap gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((size) => (
              <div key={size} className="flex flex-col items-center">
                <div 
                  className="bg-[#FBAF1D]" 
                  style={{ 
                    width: spacing[size as keyof typeof spacing], 
                    height: spacing[size as keyof typeof spacing],
                  }}
                ></div>
                <div className="mt-2 text-sm text-center">
                  <div className="font-mono">{size}</div>
                  <div className="font-mono">{spacing[size as keyof typeof spacing]}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        
        {/* Border Radius */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Border Radius</h2>
          
          <div className="flex flex-wrap gap-6">
            {Object.entries(borderRadius).filter(([key]) => key !== 'cardDescription').map(([key, value]) => (
              <div key={key} className="flex flex-col items-center">
                <div 
                  className="bg-[#FBAF1D] w-20 h-20" 
                  style={{ 
                    borderRadius: typeof value === 'string' ? value : undefined,
                  }}
                ></div>
                <div className="mt-2 text-sm text-center font-mono">{key}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Color card component for the design system
function ColorCard({ 
  name, 
  hex, 
  description,
  textColor = 'black' 
}: { 
  name: string; 
  hex: string; 
  description: string;
  textColor?: 'black' | 'white';
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div 
        className="h-24 p-4 flex items-end"
        style={{ backgroundColor: hex, color: textColor }}
      >
        <div className="font-mono">{hex}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
} 