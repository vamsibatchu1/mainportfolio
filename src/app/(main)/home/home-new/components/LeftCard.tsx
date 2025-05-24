'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { priFont, fiveFont } from '@/app/fonts';

// Brand colors (ensure these match your design system)
const brandColors = {
  white: "#FFFFFF",
  black: "#000000",
  zenith: "#FBAF1D",      // Orange/Yellow for MiscMisc6 (symbol1)
  nebula: "#E29FC8",      // Pink for Flower (symbol3)
  juniper: "#4F7834",     // Green for Vector (symbol6) - large square
  breeze: "#90D9E0",      // Light Blue for Triangle (symbol5)
  paprika: "#F25A3F",     // Red-Orange for EllipseEllipse6 (symbol4)
  lavenderBlush: "#C2B8FF", // Purple-ish for Rectangle (symbol2)
  darkGray: "#000000",   // Dark gray for empty blocks, matching image
};

// Icon Components (assuming these are already defined to use Image and are 64x64)
const MiscMisc6: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol1.svg" alt="Misc Symbol" width={48} height={48} className={className} />
);
const Rectangle: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol2.svg" alt="Rectangle Symbol" width={48} height={48} className={className} />
);
const Flower: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol3.svg" alt="Flower Symbol" width={48} height={48} className={className} />
);
const EllipseEllipse6: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol4.svg" alt="Ellipse Symbol" width={48} height={48} className={className} />
);
const Triangle: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol5.svg" alt="Triangle Symbol" width={48} height={48} className={className} />
);
const Vector: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="/images/symbol6.svg" alt="Vector Symbol" width={80} height={80} className={className} />
);

interface UnitBlockProps {
  bgColor?: string;
  content?: React.ReactNode;
  className?: string;
  gridSpanCol?: number;
  gridSpanRow?: number;
}

const UnitBlock: React.FC<UnitBlockProps> = ({
  bgColor = brandColors.white,
  content,
  className = "",
  gridSpanCol,
  gridSpanRow,
}) => {
  const style: React.CSSProperties = { backgroundColor: bgColor };
  const combinedClassName = `w-full h-full flex items-center justify-center ${className}`;
  if (gridSpanCol) style.gridColumn = `span ${gridSpanCol} / span ${gridSpanCol}`;
  if (gridSpanRow) style.gridRow = `span ${gridSpanRow} / span ${gridSpanRow}`;
  
  if (className.includes('items-start')) {
    // For text block, ensure text align start is preserved 
    // No need to set display flex here as combinedClassName already does
  } else {
    // Default to centering for other blocks
    // display, alignItems, justifyContent are handled by combinedClassName
  }

  return (
    <div style={style} className={combinedClassName}>
      {content}
    </div>
  );
};

// Updated animation variants for fade-in only
const blockAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

const STAGGER_DELAY = 75; // ms

// Define unique IDs for all 22 blocks
const allBlockIds = [
  'r1c1-v', 'r1c2-a', 'r1c3-m', 'r1c4-s', 'r1c5-icon', 'r1c6-i', 'r1c7-dark', 'r1c8-dark', 'r1c9-dark',
  'r2c1-dark', 'r2c2-text', 'r2c5-ellipse', 'r2c6-rectangle', 'r2c7-dark',
  'r3c1-dark', 'r3c2-dark', 'r3c3-dark', 'r3c4-flower', 'r3c5-batchu', 'r3c6-triangle', 'r3c7-dark',
  'large-square'
];

const LeftCard: React.FC = () => {
  const [blockVisibility, setBlockVisibility] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const shuffledIds = [...allBlockIds].sort(() => Math.random() - 0.5);

    shuffledIds.forEach((id, index) => {
      setTimeout(() => {
        setBlockVisibility(prev => ({ ...prev, [id]: true }));
      }, index * STAGGER_DELAY);
    });
  }, []);

  return (
    <div 
      className="grid gap-4 bg-black p-0 m-0"
      style={{
        gridTemplateColumns: 'repeat(9, 96px)',
        gridTemplateRows: 'repeat(3, 96px)',
        width: '992px',
        height: '320px'
      }}
    >
      {/* Row 1 */}
      <motion.div key="r1c1-v" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c1-v'] ? "visible" : "hidden"}>
        <UnitBlock content={<div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>v</div>} />
      </motion.div>
      <motion.div key="r1c2-a" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c2-a'] ? "visible" : "hidden"}>
        <UnitBlock content={<div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>a</div>} />
      </motion.div>
      <motion.div key="r1c3-m" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c3-m'] ? "visible" : "hidden"}>
        <UnitBlock content={<div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>m</div>} />
      </motion.div>
      <motion.div key="r1c5-icon" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c5-icon'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.zenith} content={<MiscMisc6 />} />
      </motion.div>
      <motion.div key="r1c4-s" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c4-s'] ? "visible" : "hidden"}>
        <UnitBlock content={<div className={`${priFont.className} text-[80px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>s</div>} />
      </motion.div>
      <motion.div key="r2c5-ellipse" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r2c5-ellipse'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.paprika} content={<EllipseEllipse6 />} />
      </motion.div>
      <motion.div key="r1c7-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c7-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r1c8-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c8-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r1c9-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c9-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>

      {/* Row 2 */}
      <motion.div key="r2c1-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r2c1-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r2c2-text" style={{ gridColumn: 'span 3 / span 3' }} variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r2c2-text'] ? "visible" : "hidden"}>
        <UnitBlock 
          bgColor={brandColors.black}
          className={`${fiveFont.className} text-[#dedede] text-[20px] leading-[24px] p-3 text-right items-start justify-end`}
          content="hands on product design leader with 10+ years of experience in designing & leading teams developing highly impactful products at scale."
        />
      </motion.div>
      <motion.div key="r2c6-rectangle" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r2c6-rectangle'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.lavenderBlush} content={<Rectangle />} />
      </motion.div>
      <motion.div key="r1c6-i" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r1c6-i'] ? "visible" : "hidden"}>
        <UnitBlock content={<div className={`${priFont.className} text-[72px] leading-[64px] text-black`} style={{ lineHeight: '1' }}>i</div>} />
      </motion.div>
      
      <motion.div key="r2c7-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r2c7-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>

      {/* Row 3 */}
      <motion.div key="r3c1-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c1-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r3c2-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c2-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r3c3-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c3-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r3c4-flower" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c4-flower'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.darkGray} />
      </motion.div>
      <motion.div key="r3c5-batchu" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c5-batchu'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.nebula} content={<Flower />} />
      </motion.div>
      <motion.div key="r3c6-triangle" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c6-triangle'] ? "visible" : "hidden"}>
        <UnitBlock content={<div className={`${priFont.className} text-[32px] leading-[32px] text-center text-black`}><p>bat</p><p>chu</p></div>} />
      </motion.div>
      <motion.div key="r3c7-dark" variants={blockAnimationVariants} initial="hidden" animate={blockVisibility['r3c7-dark'] ? "visible" : "hidden"}>
        <UnitBlock bgColor={brandColors.breeze} content={<Triangle />} />
      </motion.div>
      
      {/* Large 2x2 Square */}
      <motion.div 
        key="large-square"
        className="flex items-center justify-center"
        style={{
          gridColumn: '8 / span 2',
          gridRow: '2 / span 2',
          backgroundColor: brandColors.juniper,
          width: '208px',
          height: '208px'
        }}
        variants={blockAnimationVariants}
        initial="hidden"
        animate={blockVisibility['large-square'] ? "visible" : "hidden"}
      >
        <Vector />
      </motion.div>
    </div>
  );
};

export default LeftCard; 