"use client";

import React, { useState, useEffect, useRef } from 'react';
import { secFont, priFont } from '@/lib/config/fonts';
import { IBM_Plex_Mono, Work_Sans } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { TextScramble } from '@/components/ui/text-scramble';
import styles from './components/styles.module.css';
import UnifiedActionBar from './components/UnifiedActionBar';

// Initialize IBM Plex Mono font
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

// Initialize Work Sans font
const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

// --- Define Brand Colors Locally ---
const brandColors = {
  white: "#FFFFFF",
  black: "#000000",
  zenith: "#FBAF1D",
  nebula: "#E29FC8",
  juniper: "#4F7834",
  breeze: "#90D9E0",
  paprika: "#F25A3F"
};

// Define the carousel content
const carouselContent = [
  {
    imageUrl: "/images/homepage-shape1.svg",
    text: "Crafting large scale enterprise products"
  },
  {
    imageUrl: "/images/homepage-shape2.svg",
    text: "Developing 0-1 product vision & MVPs of new products"
  },
  {
    imageUrl: "/images/homepage-shape3.svg",
    text: "Designing delightful consumer apps for millions of customers"
  },
  {
    imageUrl: "/images/homepage-shape4.svg",
    text: "Defining product vision and strategy"
  },
  {
    imageUrl: "/images/homepage-shape5.svg",
    text: "Setting high bar for for product design craft"
  },
  {
    imageUrl: "/images/homepage-shape6.svg",
    text: "Leading major redesign overhaul of product interfaces"
  }
];

// --- Carousel Pixel Grid Config ---
const CAROUSEL_GRID_SIZE = 10;
const CAROUSEL_PIXEL_SIZE = 8;
const CAROUSEL_TOTAL_PIXELS = CAROUSEL_GRID_SIZE * CAROUSEL_GRID_SIZE; // 100
const WHITE_PIXEL_COUNT = 20; // Number of white pixels per grid

// Accent colors for the base grid
const accentColors = [
  brandColors.zenith,
  brandColors.nebula,
  brandColors.juniper,
  brandColors.breeze,
  brandColors.paprika
];

// Sequence of base colors for each carousel item
const carouselBaseColors = carouselContent.map((_, index) => accentColors[index % accentColors.length]);

// Helper to generate a grid with a base color and N random white pixels
const generateBaseGridWithWhiteAccents = (
  baseColor: string, 
  totalPixels: number, 
  whitePixelCount: number, 
  whiteColor: string
): string[] => {
  const grid = Array(totalPixels).fill(baseColor);
  const whiteIndices = new Set<number>();
  
  // Ensure exactly whitePixelCount unique indices are selected
  while (whiteIndices.size < whitePixelCount && whiteIndices.size < totalPixels) {
    const randomIndex = Math.floor(Math.random() * totalPixels);
    whiteIndices.add(randomIndex);
  }
  
  whiteIndices.forEach(index => {
    grid[index] = whiteColor;
  });
  
  return grid;
};

// Add ImageCard component from current.tsx
function ImageCard({ delay }: { delay: number }) {
  return (
    <motion.div 
      className="bg-[#1F1F1F] rounded-2xl w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
    />
  );
}

// Add a new ImgCard component for cards with images
function ImgCard({ delay, imageSrc }: { delay: number; imageSrc: string }) {
  return (
    <motion.div 
      className="bg-[#1F1F1F] rounded-2xl w-full h-full relative overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
    >
      <img 
        src={imageSrc} 
        alt="Carousel image" 
        className="block w-auto h-auto max-w-full max-h-full object-contain"
      />
    </motion.div>
  );
}

// Define different image grid layouts that correspond to each carousel item
const GridLayout1 = ({ delay = 0 }: { delay?: number }) => (
  <div className="grid grid-cols-2 gap-6 h-full w-full">
    <div className="col-span-2 h-[347px]">
       <ImgCard delay={delay + 0.2} imageSrc="/productshots/carousel-A1.svg" />
    </div>
    <div className="h-[161px]">
      <ImgCard delay={delay + 0.4} imageSrc="/productshots/carousel-A2.svg" />
    </div>
    <div className="h-[161px]">
      <ImgCard delay={delay + 0.6} imageSrc="/productshots/carousel-A3.svg" />
    </div>
  </div>
);

const GridLayout2 = ({ delay = 0 }: { delay?: number }) => (
  <div className="flex flex-row gap-6 h-full w-full">
    <div className="w-[calc((100%-24px)/2)] h-full">
      <ImageCard delay={delay + 0.2} />
    </div>
    <div className="w-[calc((100%-24px)/2)] h-full">
      <ImageCard delay={delay + 0.4} />
    </div>
  </div>
);

const GridLayout3 = ({ delay = 0 }: { delay?: number }) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
    <ImageCard delay={delay + 0.2} />
    <ImageCard delay={delay + 0.3} />
    <ImageCard delay={delay + 0.4} />
    <ImageCard delay={delay + 0.5} />
  </div>
);

const GridLayout4 = ({ delay = 0 }: { delay?: number }) => (
  <div className="h-full w-full">
    <ImageCard delay={delay + 0.2} />
  </div>
);

const GridLayout5 = ({ delay = 0 }: { delay?: number }) => (
  // Refactored using CSS Grid with specific column/row templates
  <div 
    className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full"
    style={{
      gridTemplateColumns: '388px 212px', // Define unequal column widths
      gridTemplateRows: '254px 254px'     // Define equal row heights
    }}
  >
    {/* Top Left */}
    <ImageCard delay={delay + 0.2} /> 
    {/* Top Right */}
    <ImageCard delay={delay + 0.3} />
    {/* Bottom Left */}
    <ImageCard delay={delay + 0.4} />
    {/* Bottom Right */}
    <ImageCard delay={delay + 0.5} />
  </div>
);

const GridLayout6 = ({ delay = 0 }: { delay?: number }) => (
  // Refactored to 2 columns: 1 card left, 2 cards stacked right
  <div className="flex flex-row gap-6 h-full w-full">
    {/* Column 1 (Single Card) */}
    <div className="w-[300px] h-full">
      <ImageCard delay={delay + 0.1} />
    </div>
    {/* Column 2 (Stacked Cards) */}
    <div className="w-[300px] h-full flex flex-col gap-6">
      {/* Top card in Column 2 */}
      <div className="h-[254px]">
        <ImageCard delay={delay + 0.2} />
      </div>
      {/* Bottom card in Column 2 */}
      <div className="h-[254px]">
        <ImageCard delay={delay + 0.3} />
      </div>
    </div>
  </div>
);

// Array of grid layouts to match with carousel items
const gridLayouts = [
  GridLayout1, // Crafting large scale enterprise products
  GridLayout2, // Developing 0-1 product vision & MVPs of new products
  GridLayout3, // Designing delightful consumer apps for millions of customers
  GridLayout4, // Defining product vision and strategy
  GridLayout5, // Setting high bar for for product design craft
  GridLayout6  // Leading major redesign overhaul of product interfaces
];

// --- PixelGrid Component (for Carousel) ---
interface PixelGridProps {
  id?: string;
  pixelColors: string[];
  gridSize: number;
  pixelSize: number;
  className?: string;
}

const PixelGrid: React.FC<PixelGridProps> = ({ 
  id,
  pixelColors,
  gridSize,
  pixelSize,
  className = ''
}) => {
  return (
    <div 
      id={id} // Pass the id prop
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${gridSize}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${pixelSize}px)`,
        width: `${gridSize * pixelSize}px`,
        height: `${gridSize * pixelSize}px`,
        gap: 0, 
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

const PIXEL_TRANSITION_STAGGER_DELAY = 5; // ms between each pixel color change

export default function NewHomePage() {
  // Card visibility states
  const [firstCardVisible, setFirstCardVisible] = useState(false);
  const [secondCardVisible, setSecondCardVisible] = useState(false);
  
  // First card content states
  const [nameVisible, setNameVisible] = useState(false);
  const [scrambleFirst, setScrambleFirst] = useState(false);
  const [scrambleSecond, setScrambleSecond] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Second card content states
  const [imageVisible, setImageVisible] = useState(false);
  const [iconTextVisible, setIconTextVisible] = useState(false);
  const [carouselElementsVisible, setCarouselElementsVisible] = useState(false);
  
  // Carousel state
  const [currentPair, setCurrentPair] = useState(0);
  const previousPairRef = useRef(currentPair); // Ref to store previous pair index
  
  // Letter-by-letter scramble states
  const [nameVamsi, setNameVamsi] = useState("vamsi");
  const [nameBatchu, setNameBatchu] = useState("batchu");
  const [mobileNameVamsi, setMobileNameVamsi] = useState("Vamsi");
  
  // Scramble a single random letter in the provided text
  const scrambleSingleLetter = (text: string, isUppercase = false) => {
    // Choose a random position in the string
    const position = Math.floor(Math.random() * text.length);
    // Create an array from the string
    const chars = text.split('');
    // Get a random character from the alphabet
    const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    // Replace the character at the chosen position
    chars[position] = isUppercase ? randomChar : randomChar.toLowerCase();
    
    // Return the modified string
    return chars.join('');
  };
  
  // Create visual scrambling effect by rapidly changing a single letter multiple times
  const createLetterScrambleEffect = (
    word: string, 
    setWord: React.Dispatch<React.SetStateAction<string>>, 
    originalWord: string,
    isUppercase = false
  ) => {
    // Number of rapid changes to create the scrambling effect
    const iterations = 6;
    let count = 0;
    
    // Create rapid scrambling effect with multiple changes
    const interval = setInterval(() => {
      setWord(scrambleSingleLetter(word, isUppercase));
      count++;
      
      // After several quick changes, restore the original word
      if (count >= iterations) {
        clearInterval(interval);
        setWord(originalWord);
      }
    }, 50); // Very quick interval between changes
  };
  
  // Handle periodic random letter scrambling
  useEffect(() => {
    // Only start periodic animations after initial load is complete
    if (scrambleFirst && scrambleSecond && contentVisible) {
      // Initial delay to let everything settle after loading
      const startDelay = setTimeout(() => {
        const periodicScrambleTimer = setInterval(() => {
          // Decide which name to scramble (randomly)
          const scrambleFirstName = Math.random() > 0.5;
          
          if (scrambleFirstName) {
            // Scramble a letter in "vamsi"
            createLetterScrambleEffect(nameVamsi, setNameVamsi, "vamsi");
            // Also scramble in mobile version
            createLetterScrambleEffect(mobileNameVamsi, setMobileNameVamsi, "Vamsi", true);
          } else {
            // Scramble a letter in "batchu"
            createLetterScrambleEffect(nameBatchu, setNameBatchu, "batchu");
          }
        }, 10000); // Every 10 seconds
        
        return () => clearInterval(periodicScrambleTimer);
      }, 5000); // Wait 5 seconds after initial load before starting periodic animations
      
      return () => clearTimeout(startDelay);
    }
  }, [scrambleFirst, scrambleSecond, contentVisible, nameVamsi, nameBatchu, mobileNameVamsi]);
  
  // --- Generate Carousel Grid Data (Memoized) ---
  const carouselGridData = React.useMemo(() => {
    return carouselBaseColors.map(baseColor => 
      generateBaseGridWithWhiteAccents(
        baseColor,
        CAROUSEL_TOTAL_PIXELS, 
        WHITE_PIXEL_COUNT, 
        brandColors.white
      )
    );
  // Ensure dependency includes the base colors array if it were dynamic
  // Since it's derived from static content, empty array is okay here.
  }, []); 

  // State for the grid colors actually displayed (for transition)
  const [displayedGridColors, setDisplayedGridColors] = useState<string[]>(() => carouselGridData[0]);

  // Ref to store pixel transition timers
  const pixelTransitionTimers = useRef<NodeJS.Timeout[]>([]);

  // Effect to handle carousel rotation
  useEffect(() => {
    if (iconTextVisible) {
      const carouselTimer = setInterval(() => {
        setTimeout(() => {
          previousPairRef.current = currentPair; 
          setCurrentPair((prev) => (prev + 1) % carouselContent.length);
        }, 300);
      }, 4000);
      return () => clearInterval(carouselTimer);
    }
  }, [iconTextVisible, currentPair]);

  // Effect to handle the pixel grid color transition
  useEffect(() => {
    // Clear any ongoing pixel transition timers
    pixelTransitionTimers.current.forEach(clearTimeout);
    pixelTransitionTimers.current = [];

    const oldGridColors = carouselGridData[previousPairRef.current];
    const newGridColors = carouselGridData[currentPair];

    // Animate if the grid data has actually changed
    if (JSON.stringify(oldGridColors) !== JSON.stringify(newGridColors)) {
      for (let i = 0; i < CAROUSEL_TOTAL_PIXELS; i++) {
        const timer = setTimeout(() => {
          setDisplayedGridColors(prevColors => {
            const nextColors = [...prevColors];
            nextColors[i] = newGridColors[i];
            return nextColors;
          });
        }, i * PIXEL_TRANSITION_STAGGER_DELAY);
        pixelTransitionTimers.current.push(timer);
      }
    }
    // Update previous pair ref *after* using it to get oldGridColors
    // Note: This update is slightly redundant due to the other useEffect, but safe.
    previousPairRef.current = currentPair; 

    // Cleanup timers on unmount or if currentPair changes again
    return () => {
      pixelTransitionTimers.current.forEach(clearTimeout);
      pixelTransitionTimers.current = [];
    };
  // Dependency: Run whenever the target grid data changes (identified by currentPair)
  }, [currentPair, carouselGridData]); 

  // Trigger animations with proper timing
  useEffect(() => {
    // First show the first card
    const firstCardTimer = setTimeout(() => {
      setFirstCardVisible(true);
    }, 100);
    
    // Then start first card content animations after the card is in place
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
    }, 700);
    
    // Start text scramble animations
    const firstTimer = setTimeout(() => {
      setScrambleFirst(true);
    }, 1000);
    
    const secondTimer = setTimeout(() => {
      setScrambleSecond(true);
    }, 1500);
    
    // Show the rest of the content after the name scrambles
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 2200);
    
    // Then show the second card after first card's content animations are complete
    const secondCardTimer = setTimeout(() => {
      setSecondCardVisible(true);
    }, 4300);
    
    // Show image grid first
    const imageTimer = setTimeout(() => {
      setImageVisible(true);
    }, 5100);
    
    // Only show icon+text after image grid has fully loaded 
    const iconTextTimer = setTimeout(() => {
      setIconTextVisible(true);
      setCarouselElementsVisible(true);
    }, 5900); 
    
    return () => {
      // Cleanup all timers
      clearTimeout(firstCardTimer);
      clearTimeout(secondCardTimer);
      clearTimeout(nameTimer);
      clearTimeout(contentTimer);
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(imageTimer);
      clearTimeout(iconTextTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-white"
    >
      {/* === DESKTOP LAYOUT === */}
      <div className="hidden lg:flex items-center justify-center w-full h-full">
        {/* Centered Content Container - Using flex layout (auto layout) */}
        <div className="flex flex-col items-start">
          {/* Two Cards Container - Updated total width */}
          <div className="flex flex-row w-[1120px]"> {/* Updated width: 400px + 720px = 1120px */}
            
            {/* Left Card Container - Updated width */}
            <AnimatePresence>
              {firstCardVisible && (
          <motion.div
                  className="w-[400px] h-[628px]" // Updated width
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Left Card Content - Restructured */}
                  <motion.div 
                    className="bg-black w-full h-full p-12 flex flex-col" // Removed justify-between
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Group 1: Title and Subtitle */}
                    <div className="flex flex-col gap-8"> {/* Added gap */} 
                      <AnimatePresence>
                        {nameVisible && (
                          <div 
                            id="title" // Added ID for title
                            className={`${priFont.className} text-white text-[80px] font-bold leading-[80px] tracking-[-2%] `} // Removed mb-44
                          >
                            <TextScramble
                              duration={1.0}
                              speed={0.04}
                              characterSet="abcdefghijklmnopqrstuvwxyz"
                              className="block"
                              trigger={scrambleFirst}
                            >
                              {nameVamsi}
                            </TextScramble>
                            <TextScramble
                              duration={1.0}
                              speed={0.04}
                              characterSet="abcdefghijklmnopqrstuvwxyz"
                              className="block"
                              trigger={scrambleSecond}
                            >
                              {nameBatchu}
                            </TextScramble>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* Moved Subtitle into this group */} 
                      <AnimatePresence>
                        {contentVisible && (
                          <motion.div 
                            id="subtitle" // Added ID for subtitle
                            className={`${secFont.className} text-[#A9A9A9] text-[26px] font-normal leading-[32px] tracking-[-1.1px]`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                          </motion.div>
                        )}
                       </AnimatePresence>
                    </div>

                    {/* Group 2: Carousel Pixel Grid / Text */}
                    <div className="mt-auto"> 
                      {/* Wrapper div for layout */}
                      <div className="flex items-center gap-[20px]">
                        {/* Pixel Grid - Rendered based on persistent state */}
                        {carouselElementsVisible && (
                           <PixelGrid
                            id="carousel-pixelgrid"
                            pixelColors={displayedGridColors}
                            gridSize={CAROUSEL_GRID_SIZE}
                            pixelSize={CAROUSEL_PIXEL_SIZE}
                          />
                        )}

                        {/* Text - Renders based on persistent state, content updates */}
                        <div className="w-auto"> 
                          {carouselElementsVisible && (
                            <div 
                              id="carousel-text" 
                              className={`${secFont.className} text-white text-[21.7px] font-normal leading-[26.1px] tracking-[-0.65px]`}>
                              {carouselContent[currentPair].text}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                  </motion.div>
          </motion.div>
        )}
            </AnimatePresence>
            
         
            
            {/* Right Card Container - Updated width */}
            <AnimatePresence>
              {secondCardVisible && (
          <motion.div
                  className="w-[720px] h-[628px]" // Updated width
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Right Card Content - Updated padding */}
                  <motion.div 
                    className="bg-black w-full h-full p-12 flex flex-col justify-between text-white" // Updated background to black, default text to white
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Larger image grid - Now dynamically changes based on carousel item */}
                    <AnimatePresence mode="wait">
                      {imageVisible && (
                        <motion.div 
                          id="carousel-image-grid"
                          key={currentPair}
                          className="w-full h-full overflow-hidden"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Dynamically render the current grid layout based on carousel index */}
                          {React.createElement(gridLayouts[currentPair], { delay: 0 })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Navigation Hint Container - Below cards */}
          <motion.div 
            className={`${styles.navigationHint} ${ibmPlexMono.className}`}
            style={{ 
              marginTop: '16px'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 5.0, 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9.49958L2 11.9996L11.6422 16.8207C11.7734 16.8863 11.839 16.9191 11.9078 16.932C11.9687 16.9434 12.0313 16.9434 12.0922 16.932C12.161 16.9191 12.2266 16.8863 12.3578 16.8207L22 11.9996L17 9.49958M7 14.4996L2 16.9996L11.6422 21.8207C11.7734 21.8863 11.839 21.9191 11.9078 21.932C11.9687 21.9434 12.0313 21.9434 12.0922 21.932C12.161 21.9191 12.2266 21.8863 12.3578 21.8207L22 16.9996L17 14.4996M2 6.99958L11.6422 2.17846C11.7734 2.11287 11.839 2.08008 11.9078 2.06717C11.9687 2.05574 12.0313 2.05574 12.0922 2.06717C12.161 2.08008 12.2266 2.11287 12.3578 2.17846L22 6.99958L12.3578 11.8207C12.2266 11.8863 12.161 11.9191 12.0922 11.932C12.0313 11.9434 11.9687 11.9434 11.9078 11.932C11.839 11.9191 11.7734 11.8863 11.6422 11.8207L2 6.99958Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            TAP SPACEBAR TO NAVIGATE
          </motion.div>
        </div>
      </div>
      
      {/* === MOBILE & TABLET LAYOUT === */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full h-full px-6">
        {/* Mobile Card Container - Combined content */}
        <AnimatePresence>
          {firstCardVisible && (
          <motion.div
              className="relative w-full max-w-md mx-auto bg-black p-8 rounded-[20px]" // Updated background to black
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Name - Smaller for mobile */}
              <AnimatePresence>
                {nameVisible && (
                  <div className={`${priFont.className} text-white text-[120px] font-bold leading-[120px] tracking-[-2%] mb-12`}>
                    <TextScramble
                      duration={1.0}
                      speed={0.04}
                      characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                      className="block"
                      trigger={scrambleFirst}
                    >
                      {mobileNameVamsi}
                    </TextScramble>
                    <TextScramble
                      duration={1.0}
                      speed={0.04}
                      characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                      className="block"
                      trigger={scrambleSecond}
                    >
                      {nameBatchu}
                    </TextScramble>
                  </div>
                )}
              </AnimatePresence>
              
              {/* Bio Text - Condensed for mobile */}
              <AnimatePresence>
                {contentVisible && (
                  <>
                    <motion.div 
                      className={`${secFont.className} text-white text-[22px] font-normal leading-[28px] tracking-[-0.8px] mb-10`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                    </motion.div>
                    
                    {/* Bottom Subtitle */}
                    <motion.div 
                      className={`${workSans.className} text-[#9FC486] text-[16px] font-normal leading-[22px] tracking-[0px] mb-6`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      Currently leading the enterprise AI design teams at Rocket
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              
              {/* Mobile second card content - sequential animation */}
              <AnimatePresence>
                {secondCardVisible && (
                  <>
                    {/* Profile Image Placeholder - with equal spacing */}
                    <AnimatePresence mode="wait">
                      {imageVisible && (
                        <motion.div 
                          key={currentPair}
                          className="w-full h-[500px] overflow-hidden"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Create simplified versions of the grid layouts for mobile */}
                          {currentPair === 0 && (
                            <div className="relative h-full w-full">
                              {/* Updated mobile layout to match desktop */}
                              <div className="absolute left-0 top-0 w-full h-[65%]">
                                <ImgCard delay={0.2} imageSrc="/productshots/carousel-A1.svg" />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[48%] h-[30%]">
                                <ImgCard delay={0.4} imageSrc="/productshots/carousel-A2.svg" />
                              </div>
                              <div className="absolute right-0 bottom-0 w-[48%] h-[30%]">
                                <ImgCard delay={0.6} imageSrc="/productshots/carousel-A3.svg" />
                              </div>
                            </div>
                          )}
                          {currentPair === 1 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[48%] h-full">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[48%] h-full">
                                <ImageCard delay={0.4} />
                              </div>
                            </div>
                          )}
                          {currentPair === 2 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.3} />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute right-0 bottom-0 w-[48%] h-[48%]">
                                <ImageCard delay={0.5} />
                              </div>
                            </div>
                          )}
                          {currentPair === 3 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-full h-full">
                                <ImageCard delay={0.2} />
                              </div>
                            </div>
                          )}
                          {currentPair === 4 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[61%] h-[48%]">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-0 w-[35%] h-[48%]">
                                <ImageCard delay={0.3} />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[35%] h-[48%]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute right-0 bottom-0 w-[61%] h-[48%]">
                                <ImageCard delay={0.5} />
                              </div>
                            </div>
                          )}
                          {currentPair === 5 && (
                            <div className="relative h-full w-full">
                              <div className="absolute left-0 top-0 w-[61%] h-[48%]">
                                <ImageCard delay={0.1} />
                              </div>
                              <div className="absolute right-0 top-0 w-[35%] h-[22%]">
                                <ImageCard delay={0.2} />
                              </div>
                              <div className="absolute right-0 top-[26%] w-[35%] h-[22%]">
                                <ImageCard delay={0.3} />
                              </div>
                              <div className="absolute left-0 bottom-0 w-[29%] h-[48%]">
                                <ImageCard delay={0.4} />
                              </div>
                              <div className="absolute left-[33%] bottom-0 w-[67%] h-[48%]">
                                <ImageCard delay={0.5} />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </AnimatePresence>
              
              {/* Right Side Content with rotating Icon/Text pairs for mobile - consistent padding */}
              <AnimatePresence>
                {iconTextVisible && (
                  <div className="flex items-center h-[60px]">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentPair}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <img 
                          src={carouselContent[currentPair].imageUrl} 
                          alt="Shape icon" 
                          className="w-8 h-8 object-contain" 
                        />
                        <div className={`${priFont.className} text-white text-[18px] font-normal leading-[24px] tracking-[-0.5px]`}>
                          {carouselContent[currentPair].text}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
      
      {/* Space-triggered Navigation Bar */}
      <UnifiedActionBar />
    </div>
  );
}