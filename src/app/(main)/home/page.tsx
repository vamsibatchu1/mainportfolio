"use client";

import React, { useState, useEffect, useRef } from 'react';
import { secFont, priFont } from '@/lib/config/fonts';
import { IBM_Plex_Mono } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { TextScramble } from '@/components/ui/text-scramble';
import styles from './components/styles.module.css';
import { GalleryHorizontalEnd } from 'lucide-react'; // Import GalleryHorizontalEnd icon
import { triFont } from '@/app/fonts';
import Navbar from './components/navbar-test/Navbar';

// Initialize IBM Plex Mono font
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
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
    text: "Crafting large scale enterprise products and highly scalable systems"
  },
  {
    imageUrl: "/images/homepage-shape2.svg",
    text: "Developing 0-1 product vision & MVPs of new product verticals"
  },
  {
    imageUrl: "/images/homepage-shape3.svg",
    text: "Designing delightful consumer apps for millions of customers"
  },
  {
    imageUrl: "/images/homepage-shape4.svg",
    text: "Defining product vision and strategy for company wide initiatives"
  },
  {
    imageUrl: "/images/homepage-shape5.svg",
    text: "Setting high bar for for product design craft and user experience"
  },
  {
    imageUrl: "/images/homepage-shape6.svg",
    text: "Leading major redesign efforts of strugglingp roduct experiences"
  }
];

// --- Carousel Pixel Grid Config --- Adjusted for 8x8
const CAROUSEL_GRID_SIZE = 8; // Changed from 10 to 8
const CAROUSEL_PIXEL_SIZE = 8;
const CAROUSEL_TOTAL_PIXELS = CAROUSEL_GRID_SIZE * CAROUSEL_GRID_SIZE; // Now 64
const WHITE_PIXEL_COUNT = 13; // Adjusted from 20 (approx 20% of 64)

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

// Define different image grid layouts that correspond to each carousel item
const GridLayout1 = ({ delay = 0 }: { delay?: number }) => (
  // Refactored using CSS Grid
  <div className="grid grid-cols-2 gap-6 h-full w-full"> 
    {/* Top large card - Replaced ImgCard with ImageCard */}
    <div className="col-span-2 h-[347px]">
       <ImageCard delay={delay + 0.2} />
    </div>
    {/* Bottom left card - Replaced ImgCard with ImageCard */}
    <div className="h-[161px]">
      <ImageCard delay={delay + 0.4} />
    </div>
    {/* Bottom right card - Replaced ImgCard with ImageCard */}
    <div className="h-[161px]">
      <ImageCard delay={delay + 0.6} />
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
  // Changed from inline style to flexible Tailwind grid
  <div 
    className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full"
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
  // Changed from fixed-width flex to flexible grid
  <div className="grid grid-cols-2 gap-6 h-full w-full">
    {/* Column 1 (Single Card) */}
    <div className="h-full">
      <ImageCard delay={delay + 0.1} />
    </div>
    {/* Column 2 (Stacked Cards) - Removed fixed width */}
    <div className="h-full flex flex-col gap-6">
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
        gap: '2px', // Updated gap to 2px
      }}
    >
      {/* Slice the array to only map over the required number of pixels */}
      {pixelColors.slice(0, gridSize * gridSize).map((color, index) => (
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
  
  // Second card content states & persistent states
  const [rightCardGridVisible, setRightCardGridVisible] = useState(false);
  const [carouselElementsVisible, setCarouselElementsVisible] = useState(false);
  const [carouselTextAndImagesVisible, setCarouselTextAndImagesVisible] = useState(false);
  
  // Carousel state
  const [currentPair, setCurrentPair] = useState(0);
  const previousPairRef = useRef(currentPair);
  
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

  const [displayedGridColors, setDisplayedGridColors] = useState<string[]>(() => 
    // Start with black background before initial fill
    Array(CAROUSEL_TOTAL_PIXELS).fill(brandColors.black) 
  );
  const pixelTransitionTimers = useRef<NodeJS.Timeout[]>([]);

  // Effect to handle carousel rotation
  useEffect(() => {
    // Start rotation only after text and images are visible
    if (carouselTextAndImagesVisible) { 
      const carouselTimer = setInterval(() => {
        setTimeout(() => {
          previousPairRef.current = currentPair; // Update previous ref before changing currentPair
          setCurrentPair((prev) => (prev + 1) % carouselContent.length);
        }, 300); // Keep a small delay before content switch
      }, 4000);
      return () => clearInterval(carouselTimer);
    }
  }, [carouselTextAndImagesVisible, currentPair]);

  // Effect to handle SUBSEQUENT pixel grid color transitions (shuffled)
  useEffect(() => {
    // Don't run on initial load (when previous pair is still 0)
    // Also don't run if the carousel isn't even visible yet
    if (!carouselElementsVisible || (previousPairRef.current === currentPair && currentPair === 0)) return; 

    pixelTransitionTimers.current.forEach(clearTimeout);
    pixelTransitionTimers.current = [];

    // Note: No need for oldGridColors comparison, as we always animate towards the new target
    const newGridColors = carouselGridData[currentPair];

    const indices = Array.from({ length: CAROUSEL_TOTAL_PIXELS }, (_, k) => k);
    // Shuffle the indices array (Fisher-Yates shuffle algorithm)
    for (let j = indices.length - 1; j > 0; j--) {
        const randIndex = Math.floor(Math.random() * (j + 1));
        [indices[j], indices[randIndex]] = [indices[randIndex], indices[j]]; // Swap elements
    }

    // Iterate through the *shuffled* indices to transition colors
    indices.forEach((pixelIndex, i) => {
      const timer = setTimeout(() => {
        setDisplayedGridColors(prevColors => {
          const nextColors = [...prevColors];
          // Update the pixel at the shuffled index to the new target color
          nextColors[pixelIndex] = newGridColors[pixelIndex]; 
          return nextColors;
        });
      // Stagger delay is based on the iteration order 'i'
      }, i * PIXEL_TRANSITION_STAGGER_DELAY);
      pixelTransitionTimers.current.push(timer);
    });
      
    // Update previous pair ref *after* triggering the transition
    previousPairRef.current = currentPair; 

    // Cleanup timers on unmount or if currentPair changes again
    return () => {
      pixelTransitionTimers.current.forEach(clearTimeout);
      pixelTransitionTimers.current = [];
    };
  // Dependency: Run whenever the target grid data changes (identified by currentPair)
  }, [currentPair, carouselGridData, carouselElementsVisible]); // Added carouselElementsVisible dependency

  // Effect for INITIAL pixel grid fill animation (now uses random fill)
  useEffect(() => {
    if (carouselElementsVisible) {
      pixelTransitionTimers.current.forEach(clearTimeout);
      pixelTransitionTimers.current = [];

      const initialGridData = carouselGridData[0]; 
      const indices = Array.from({ length: CAROUSEL_TOTAL_PIXELS }, (_, k) => k);
      // Shuffle the indices for a random fill effect
      for (let j = indices.length - 1; j > 0; j--) {
          const randIndex = Math.floor(Math.random() * (j + 1));
          [indices[j], indices[randIndex]] = [indices[randIndex], indices[j]];
      }

      // Iterate through shuffled indices to fill the grid randomly
      indices.forEach((pixelIndex, i) => {
        const timer = setTimeout(() => {
          setDisplayedGridColors(prevColors => {
            // Directly set the target color from the initial pattern
             const nextColors = [...prevColors];
             nextColors[pixelIndex] = initialGridData[pixelIndex];
             return nextColors;
          });
        }, i * PIXEL_TRANSITION_STAGGER_DELAY); // Stagger based on random order
        pixelTransitionTimers.current.push(timer);
      });
      
      return () => {
         pixelTransitionTimers.current.forEach(clearTimeout);
         pixelTransitionTimers.current = [];
      };
    }
  }, [carouselElementsVisible, carouselGridData]);

  // Trigger initial animations with updated timing
  useEffect(() => {
    const firstCardTimer = setTimeout(() => setFirstCardVisible(true), 100);
    const secondCardTimer = setTimeout(() => setSecondCardVisible(true), 100); 
    const nameTimer = setTimeout(() => setNameVisible(true), 700);
    const firstTimer = setTimeout(() => setScrambleFirst(true), 1000);
    const secondTimer = setTimeout(() => setScrambleSecond(true), 1500);
    const contentTimer = setTimeout(() => setContentVisible(true), 2200); // Subtitle appears (ends ~3000ms)
    
    // Pixel Grid appears and starts *randomly filling* after subtitle
    const pixelGridTimer = setTimeout(() => {
      setCarouselElementsVisible(true); 
    }, 3100); // Updated timing

    // Text and Right Images appear after initial pixel grid fill completes
    const textImageTimer = setTimeout(() => {
        setRightCardGridVisible(true);
        setCarouselTextAndImagesVisible(true);
    }, 3700); // Updated timing (3100ms start + ~500ms fill + 100ms buffer)
    
    return () => {
      clearTimeout(firstCardTimer);
      clearTimeout(secondCardTimer);
      clearTimeout(nameTimer);
      clearTimeout(contentTimer);
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(pixelGridTimer);
      clearTimeout(textImageTimer);
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-black lg:bg-white">
      {/* === DESKTOP LAYOUT === */}
      <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
        {/* Centered Content Container */}
        <div className="flex flex-col items-start">
          {/* Two Cards Container - Updated total width to 1248px */}
          <div className="flex flex-row w-full lg:w-[1248px]">
            
            {/* Left Card Container (Remains 400px) */}
            <AnimatePresence>
              {firstCardVisible && (
                <motion.div
                  className="w-[400px] h-[628px]" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* Left Card Content - Simplified Structure */}
                  <motion.div 
                    className="bg-black w-full h-full p-12 pr-0 flex flex-col justify-between" 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* New Flex Container for Row 1 and Row 2 */}
                    <div className="flex flex-col gap-6"> 
                      {/* Row 1: Title */}
                      <AnimatePresence>
                        {nameVisible && (
                          <div 
                            id="title" 
                            className={`${priFont.className} text-white text-[80px] font-bold leading-[80px] tracking-[-2%]`}
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

                      {/* Row 2: Subtitle */}
                      <AnimatePresence>
                        {contentVisible && (
                          <motion.div 
                            id="subtitle" 
                            className={`${secFont.className} text-[#A9A9A9] text-[30px] font-light leading-[40px] tracking-[-1.1px]`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          >
                            Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                          </motion.div>
                        )}
                       </AnimatePresence>
                    </div> {/* End of new flex container for Row 1 & 2 */}

                    {/* Flex Container for Row 3 and Row 4 */}
                    <div className="flex flex-row items-end justify-between">
                      {/* Row 3: Carousel Pixel Grid */}
                      <div className="min-h-[78px]">
                          {carouselElementsVisible && ( 
                             <PixelGrid
                              id="carousel-pixelgrid"
                              pixelColors={displayedGridColors} 
                              gridSize={CAROUSEL_GRID_SIZE}
                              pixelSize={CAROUSEL_PIXEL_SIZE}
                            />
                          )}
                      </div>

                      {/* Row 4: Carousel Text */}
                      <div className="min-h-[52px] w-[240px]"> {/* Removed flex-1, added w-[240px] */} 
                        {carouselTextAndImagesVisible && (
                          <div 
                            id="carousel-text" 
                            className={`${triFont.className} text-white text-[18px] font-light leading-[26.1px] tracking-[-0.65px]`}>
                            {carouselContent[currentPair].text} 
                          </div>
                        )}
                      </div>
                    </div> { /* End of new flex container */ }
                    
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Right Card Container - Updated width to 848px */}
            <AnimatePresence>
              {secondCardVisible && (
                <motion.div
                  className="w-[848px] h-[628px]" // Updated width
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
                      {rightCardGridVisible && (
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
          
          {/* Navigation Hint Container - Updated width */}
          <motion.div 
            className={`${styles.navigationHint} ${ibmPlexMono.className} text-black w-full lg:w-[1248px] justify-end`}
            style={{ 
              marginTop: '8px' // Changed from 16px for mobile, applies lg:mt-4 effectively? No, need explicit lg
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
            <GalleryHorizontalEnd size={24} strokeWidth={2} color="black" />
            TAP SPACEBAR TO NAVIGATE
          </motion.div>
        </div>
      </div>
      
      {/* === MOBILE & TABLET LAYOUT === */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full h-auto py-10 px-4">
        {/* Mobile Card Container - Combined content, adjusted padding */}
        <AnimatePresence>
          {firstCardVisible && (
          <div
              className="relative w-full max-w-md mx-auto bg-black p-2 flex flex-col gap-8 min-h-[800px]" 
            >
              {/* Section 1: Title (From Desktop Left Card) - Keeps its animation */}
              <AnimatePresence>
                {nameVisible && (
                    <motion.div // Keep motion here
                      className={`${priFont.className} text-white text-[60px] font-bold leading-[60px] tracking-[-1.5px]`}
                      initial={{ opacity: 0 }} // Keep internal animations
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }} // Example internal transition
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
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Section 2: Subtitle (From Desktop Left Card) */}
              <AnimatePresence>
                {contentVisible && (
                    <motion.div 
                      className={`${secFont.className} text-[#A9A9A9] text-[26px] font-normal leading-[3px] tracking-[-0.8px]`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      Hands on product design leader with 11+ years of experience in designing & leading teams developing highly impactful products at scale.
                    </motion.div>
                )}
              </AnimatePresence>
              
              {/* Section 3: Pixel Grid & Carousel Text (From Desktop Left Card) */}
              {carouselElementsVisible && (
                <div className="flex flex-row items-start gap-8">
                  {/* Pixel Grid (Mobile) - Adjust min-height */}
                  <div className="min-h-[58px]"> {/* Changed from min-h-[78px] for 6x6 grid */}
                     <PixelGrid
                      id="carousel-pixelgrid-mobile"
                      pixelColors={displayedGridColors} 
                      gridSize={6} // Changed from CAROUSEL_GRID_SIZE to 6
                      pixelSize={CAROUSEL_PIXEL_SIZE} // Keep pixel size 8px
                    />
                  </div>
                  {/* Carousel Text (Mobile) */}
                  <div className="flex-1 min-h-[52px]">
                    {carouselTextAndImagesVisible && (
                      <div 
                        className={`${triFont.className} text-white text-[14px] font-normal leading-[20px] tracking-[-0.8px]`}> {/* Adjusted text size */} 
                        {carouselContent[currentPair].text} 
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Section 4: Image Grid (From Desktop Right Card - Simplified Container) */}
              {secondCardVisible && rightCardGridVisible && (
                 <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentPair} // Key for transition
                      className="w-full h-[300px] overflow-hidden relative" // Adjusted height for mobile
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Render the same dynamic grid layout component as desktop */} 
                      {React.createElement(gridLayouts[currentPair], { delay: 0 })}
                    </motion.div>
                </AnimatePresence>
              )}

              {/* REMOVED old mobile-specific bottom subtitle */}
              {/* REMOVED old mobile-specific icon/text carousel */}
              
          </div>
        )}
      </AnimatePresence>
      </div>
      
      {/* Replace UnifiedActionBar with Navbar */}
      <Navbar />
    </div>
  );
}