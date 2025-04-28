"use client";

import React from 'react';
import Link from 'next/link';
import { priFont, secFont } from '@/lib/config/fonts';

// Rectangle component with proper TypeScript types
interface RectangleProps {
  className?: string;
  color: string;
  width?: string;
  height?: string;
}

const Rectangle: React.FC<RectangleProps> = ({ className, color, width = '32px', height = '32px' }) => {
  return (
    <div 
      className={className} 
      style={{ 
        backgroundColor: color,
        width,
        height
      }}
    />
  );
};

// Pixel Grid component for CardXs
interface PixelGridProps {
  gridSize?: number;
  pixelSize?: number;
  colors?: string[];
  className?: string;
  animated?: boolean;
}

const PixelGrid: React.FC<PixelGridProps> = ({ 
  gridSize = 5, 
  pixelSize = 16, 
  colors = ['#F7F6F4'], 
  className = '',
  animated = false
}) => {
  const [pixelColors, setPixelColors] = React.useState<string[]>([]);
  
  // Initialize or update pixel colors
  React.useEffect(() => {
    const totalPixels = gridSize * gridSize;
    const newColors = Array(totalPixels).fill('').map(() => {
      return colors[Math.floor(Math.random() * colors.length)];
    });
    setPixelColors(newColors);
  }, [colors, gridSize]);
  
  // Animation effect - randomly change colors if animated
  React.useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setPixelColors(prev => {
        const newColors = [...prev];
        // Change a random pixel's color
        const randomIndex = Math.floor(Math.random() * prev.length);
        newColors[randomIndex] = colors[Math.floor(Math.random() * colors.length)];
        return newColors;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, [animated, colors]);
  
  return (
    <div 
      className={`pixel-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${pixelSize}px)`,
        width: `${gridSize * pixelSize}px`,
        height: `${gridSize * pixelSize}px`
      }}
    >
      {pixelColors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: `${pixelSize}px`,
            height: `${pixelSize}px`
          }}
        />
      ))}
    </div>
  );
};

// Comprehensive card configuration interface
interface CardConfiguration {
  // Dimensions
  cardWidth: string;
  primaryWidth: string;
  primaryHeight: string;
  secondaryWidth: string;
  secondaryHeight: string;
  
  // Colors
  primaryBgColor: string;
  secondaryBgColor: string;
  
  // Spacing
  primaryPadding: string;
  secondaryPadding: string;
  primaryGap: string;
  
  // Typography - Title
  titleFontFamily: string;
  titleFontSize: string;
  titleFontWeight: string;
  titleLetterSpacing: string;
  titleLineHeight: string;
  titleColor: string;
  
  // Typography - Subtitle
  subtitleFontFamily: string;
  subtitleFontSize: string;
  subtitleFontWeight: string;
  subtitleLetterSpacing: string;
  subtitleLineHeight: string;
  subtitleColor: string;
  
  // Visual elements
  rectangleSize: string;
  rectangleColor: string;
}

// Default configurations for each variant
const cardVariants: Record<string, CardConfiguration> = {
  xs: {
    // Dimensions
    cardWidth: '480px',
    primaryWidth: 'flex-grow', // using flex-grow as it's calculated
    primaryHeight: '80px',
    secondaryWidth: '80px',
    secondaryHeight: '80px',
    
    // Colors
    primaryBgColor: '#000000',
    secondaryBgColor: '#FBAF1D',
    
    // Spacing
    primaryPadding: '32px',
    secondaryPadding: '0px',
    primaryGap: '10px',
    
    // Typography - Title
    titleFontFamily: 'var(--font-pri)',
    titleFontSize: '40px',
    titleFontWeight: '400',
    titleLetterSpacing: '-0.8px',
    titleLineHeight: 'normal',
    titleColor: '#f7f6f4',
    
    // Typography - Subtitle (not used in XS, but defined for consistency)
    subtitleFontFamily: 'var(--font-sec)',
    subtitleFontSize: '14px',
    subtitleFontWeight: '400',
    subtitleLetterSpacing: '-0.28px',
    subtitleLineHeight: 'normal',
    subtitleColor: 'rgba(247, 246, 244, 0.7)',
    
    // Visual elements
    rectangleSize: '32px',
    rectangleColor: '#F7F6F4'
  },
  
  sm: {
    // Dimensions
    cardWidth: '640px',
    primaryWidth: 'flex-grow',
    primaryHeight: '160px',
    secondaryWidth: '160px',
    secondaryHeight: '160px',
    
    // Colors
    primaryBgColor: '#000000',
    secondaryBgColor: '#FBAF1D',
    
    // Spacing
    primaryPadding: '48px',
    secondaryPadding: '0px',
    primaryGap: '10px',
    
    // Typography - Title
    titleFontFamily: 'var(--font-pri)',
    titleFontSize: '64px',
    titleFontWeight: '400',
    titleLetterSpacing: '-1.28px',
    titleLineHeight: 'normal',
    titleColor: '#f7f6f4',
    
    // Typography - Subtitle (not used in SM, but defined for consistency)
    subtitleFontFamily: 'var(--font-sec)',
    subtitleFontSize: '16px',
    subtitleFontWeight: '400',
    subtitleLetterSpacing: '-0.32px',
    subtitleLineHeight: 'normal',
    subtitleColor: 'rgba(247, 246, 244, 0.7)',
    
    // Visual elements
    rectangleSize: '64px',
    rectangleColor: '#F7F6F4'
  },
  
  md: {
    // Dimensions
    cardWidth: '680px',
    primaryWidth: 'flex-grow',
    primaryHeight: 'auto',
    secondaryWidth: 'auto',
    secondaryHeight: '100%',
    
    // Colors
    primaryBgColor: '#000000',
    secondaryBgColor: '#FBAF1D',
    
    // Spacing
    primaryPadding: '42px',
    secondaryPadding: '42px',
    primaryGap: '24px',
    
    // Typography - Title
    titleFontFamily: 'var(--font-pri)',
    titleFontSize: '48px',
    titleFontWeight: '400',
    titleLetterSpacing: '-0.96px',
    titleLineHeight: '1.2',
    titleColor: '#f7f6f4',
    
    // Typography - Subtitle
    subtitleFontFamily: 'var(--font-sec)',
    subtitleFontSize: '16px',
    subtitleFontWeight: '400',
    subtitleLetterSpacing: '-0.32px',
    subtitleLineHeight: 'normal',
    subtitleColor: 'rgba(247, 246, 244, 0.7)',
    
    // Visual elements
    rectangleSize: '32px',
    rectangleColor: '#F7F6F4'
  }
};

// Unified DualCard component
interface DualCardProps {
  variant: 'xs' | 'sm' | 'md';
  primaryContent?: React.ReactNode;
  secondaryContent?: React.ReactNode;
  config?: Partial<CardConfiguration>;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
}

export const DualCard: React.FC<DualCardProps> = ({
  variant = 'sm',
  primaryContent,
  secondaryContent,
  config = {},
  className = '',
  primaryClassName = '',
  secondaryClassName = ''
}) => {
  // Get the default configuration for this variant
  const defaultConfig = cardVariants[variant];
  
  // Merge default config with any custom configs
  const mergedConfig = { ...defaultConfig, ...config };
  
  // Default content for each section based on variant
  const defaultPrimaryContent = {
    'xs': (
      <div 
        className={priFont.className}
        style={{
          color: mergedConfig.titleColor,
          fontSize: mergedConfig.titleFontSize,
          fontWeight: mergedConfig.titleFontWeight,
          letterSpacing: mergedConfig.titleLetterSpacing,
          lineHeight: mergedConfig.titleLineHeight,
          whiteSpace: 'nowrap',
          width: 'fit-content'
        }}
      >
        vamsi batchu
      </div>
    ),
    'sm': (
      <div 
        className={priFont.className}
        style={{
          color: mergedConfig.titleColor,
          fontSize: mergedConfig.titleFontSize,
          fontWeight: mergedConfig.titleFontWeight,
          letterSpacing: mergedConfig.titleLetterSpacing,
          lineHeight: mergedConfig.titleLineHeight,
          whiteSpace: 'nowrap',
          width: 'fit-content'
        }}
      >
        vamsi batchu
      </div>
    ),
    'md': (
      <>
        <div 
          className={priFont.className}
          style={{
            color: mergedConfig.titleColor,
            fontSize: mergedConfig.titleFontSize,
            fontWeight: mergedConfig.titleFontWeight,
            letterSpacing: mergedConfig.titleLetterSpacing,
            lineHeight: mergedConfig.titleLineHeight
          }}
        >
          This is a long headline that spans along ...
        </div>
        <div 
          className={secFont.className}
          style={{
            color: mergedConfig.subtitleColor,
            fontSize: mergedConfig.subtitleFontSize,
            fontWeight: mergedConfig.subtitleFontWeight,
            letterSpacing: mergedConfig.subtitleLetterSpacing,
            lineHeight: mergedConfig.subtitleLineHeight
          }}
        >
          product design leader at the intersection of craft and code
        </div>
      </>
    )
  };

  const defaultSecondaryContent = {
    'xs': <PixelGrid colors={['#F7F6F4']} gridSize={5} pixelSize={16} />,
    'sm': <PixelGrid colors={['#F7F6F4']} gridSize={10} pixelSize={16} />,
    'md': <Rectangle className="rectangle-rectangle-6" color={mergedConfig.rectangleColor} width={mergedConfig.rectangleSize} height={mergedConfig.rectangleSize} />
  };

  // Check if secondaryContent is a PixelGrid (or using the default PixelGrid)
  const isUsingPixelGrid = React.isValidElement(secondaryContent) && 
    secondaryContent.type === PixelGrid || 
    (!secondaryContent && (variant === 'xs' || variant === 'sm'));

  return (
    <div 
      className={`card-${variant} ${className}`}
      style={{
        width: mergedConfig.cardWidth,
        display: 'flex',
        alignItems: variant === 'md' ? 'stretch' : 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      <div 
        className={`frame ${primaryClassName}`}
        style={{ 
          backgroundColor: mergedConfig.primaryBgColor,
          padding: mergedConfig.primaryPadding,
          flex: '1',
          display: 'flex',
          flexDirection: variant === 'md' ? 'column' : 'row',
          alignItems: variant === 'md' ? 'flex-start' : 'center',
          justifyContent: variant === 'md' ? 'space-between' : 'center',
          gap: mergedConfig.primaryGap,
          height: mergedConfig.primaryHeight !== 'auto' ? mergedConfig.primaryHeight : undefined
        }}
      >
        {primaryContent || defaultPrimaryContent[variant]}
      </div>
      <div 
        className={`rectangle-wrapper ${secondaryClassName}`}
        style={{ 
          backgroundColor: mergedConfig.secondaryBgColor,
          padding: isUsingPixelGrid ? 0 : mergedConfig.secondaryPadding,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: variant === 'md' ? 'center' : 'flex-start',
          alignSelf: 'stretch',
          gap: '10px'
        }}
      >
        {secondaryContent || defaultSecondaryContent[variant]}
      </div>
    </div>
  );
};

// Legacy components for backward compatibility
export const CardXs = (props: Partial<DualCardProps>) => <DualCard variant="xs" {...props} />;
export const CardSm = (props: Partial<DualCardProps>) => <DualCard variant="sm" {...props} />;
export const CardMd = (props: Partial<DualCardProps>) => <DualCard variant="md" {...props} />;
export { PixelGrid };

// Export the page component
export const DualCardPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-8 md:p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${priFont.className} text-4xl font-bold mb-8`}>Card Components</h1>
        
        
        {/* Card Sizes Section */}
        <section className="mb-16">
          <div className="grid grid-rows-1 lg:grid-rows-3 gap-8">
            
            {/* Card XS */}
            <div>
              <h3 className={`${priFont.className} text-2xl font-semibold mb-6`}>card-xs</h3>
              <DualCard variant="xs" />
            </div>
            
            {/* Card SM */}
            <div>
              <h3 className={`${priFont.className} text-2xl font-semibold mb-6`}>card-sm</h3>
              <DualCard variant="sm" />
            </div>
            
            {/* Card MD */}
            <div>
              <h3 className={`${priFont.className} text-2xl font-semibold mb-6`}>card-md</h3>
              <DualCard variant="md" />
            </div>
          </div>
        </section>
        
        
        
        
        {/* Navigation */}
        <div className="mt-12">
          <Link href="/design-system" className="text-zenith hover:underline">
            ← Back to Design System
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DualCardPage; 