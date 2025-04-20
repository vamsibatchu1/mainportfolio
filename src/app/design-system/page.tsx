"use client";

import React from 'react';
import { 
  colors, 
  typography, 
  spacing, 
  borderRadius, 
} from '@/lib/design-system';
import { DualCard, TailwindDualCard, WhiteCard, TranslucentCard } from '@/components/ui/dual-card';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Design System</h1>
        
        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Colors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorCard 
              name="Primary Orange" 
              hex={colors.primaryOrange.hex} 
              description={colors.primaryOrange.description}
            />
            <ColorCard 
              name="Background (Light)" 
              hex="#FFFFFF" 
              description={colors.background.description}
            />
            <ColorCard 
              name="Background (Dark)" 
              hex="#0F0F13" 
              description={colors.background.description}
              textColor="white"
            />
            <ColorCard 
              name="Accent" 
              hex="#F5F7FA" 
              description={colors.accent.description}
            />
            <ColorCard 
              name="Destructive" 
              hex="#EF4444" 
              description={colors.destructive.description}
              textColor="white"
            />
            <ColorCard 
              name="Muted" 
              hex="#F5F7FA" 
              description={colors.muted.description}
            />
          </div>
        </section>
        
        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Typography</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Font Sizes</h3>
              <div className="space-y-4">
                {Object.entries(typography.fontSizes).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <div className="w-24 text-sm font-mono">{key}</div>
                    <div className="w-24 text-sm font-mono">{value}</div>
                    <div style={{ fontSize: value }}>The quick brown fox jumps over the lazy dog</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Font Weights</h3>
              <div className="space-y-4">
                {Object.entries(typography.fontWeights).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <div className="w-24 text-sm font-mono">{key}</div>
                    <div className="w-24 text-sm font-mono">{value}</div>
                    <div style={{ fontWeight: value }}>The quick brown fox jumps over the lazy dog</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Spacing</h2>
          
          <div className="flex flex-wrap gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((size) => (
              <div key={size} className="flex flex-col items-center">
                <div 
                  className="bg-primary-orange" 
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
        
        {/* Dual Card Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Dual Card Component</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Small Size</h3>
              <DualCard 
                size="small"
                whiteCardContent={
                  <div className="p-8">
                    <h4 className="text-xl font-bold">Analyzing your data</h4>
                  </div>
                }
                translucentCardContent={
                  <div className="flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V12L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Regular Size</h3>
              <DualCard 
                whiteCardContent={
                  <div className="p-8 flex flex-col h-full justify-center">
                    <h4 className="text-2xl font-bold mb-2">Vamsi Batchu</h4>
                    <p className="text-gray-600">Product design leader</p>
                  </div>
                }
                translucentCardContent={
                  <div className="flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="6" width="12" height="12" rx="2" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                }
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Using Tailwind Classes</h3>
              <TailwindDualCard 
                whiteCardContent={
                  <div className="p-8 flex flex-col h-full justify-center">
                    <h4 className="text-2xl font-bold mb-2">Small</h4>
                    <p className="text-gray-600">regular</p>
                  </div>
                }
                translucentCardContent={
                  <div className="flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
              />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Individual Components</h3>
              <div className="flex gap-3">
                <WhiteCard size="small">
                  <p className="font-medium">White Card Component</p>
                </WhiteCard>
                
                <TranslucentCard size="small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </TranslucentCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* Border Radius */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Border Radius</h2>
          
          <div className="flex flex-wrap gap-6">
            {Object.entries(borderRadius).filter(([key]) => key !== 'cardDescription').map(([key, value]) => (
              <div key={key} className="flex flex-col items-center">
                <div 
                  className="bg-primary-orange w-20 h-20" 
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