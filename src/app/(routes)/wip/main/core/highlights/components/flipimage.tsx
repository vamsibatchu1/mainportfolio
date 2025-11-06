'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  type HTMLMotionProps,
  type Transition,
  type Variant,
  motion,
} from 'framer-motion';

import { cn } from '@/lib/utils';
import { jakartaFont } from '@/app/fonts';

type FlipDirection = 'top' | 'bottom' | 'left' | 'right';

interface FlipImageProps extends HTMLMotionProps<'div'> {
  src: string;
  alt: string;
  backText: string;
  transition?: Transition;
  frontClassName?: string;
  backClassName?: string;
  from?: FlipDirection;
}

const defaultSpanClassName =
  'absolute inset-0 flex items-center justify-center rounded-[14px] overflow-hidden';

const FlipImage = React.forwardRef<HTMLDivElement, FlipImageProps>(
  (
    {
      src,
      alt,
      backText,
      transition = { type: 'spring', stiffness: 280, damping: 20 },
      className,
      frontClassName,
      backClassName,
      from = 'top',
      ...props
    },
    ref,
  ) => {
    const isVertical = from === 'top' || from === 'bottom';
    const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

    const frontOffset = from === 'top' || from === 'left' ? '50%' : '-50%';
    const backOffset = from === 'top' || from === 'left' ? '-50%' : '50%';

    const buildVariant = (
      opacity: number,
      rotation: number,
      offset: string | null = null,
    ): Variant => ({
      opacity,
      [rotateAxis]: rotation,
      ...(isVertical && offset !== null ? { y: offset } : {}),
      ...(!isVertical && offset !== null ? { x: offset } : {}),
    });

    const frontVariants = {
      initial: buildVariant(1, 0, '0%'),
      hover: buildVariant(0, 90, frontOffset),
    };

    const backVariants = {
      initial: buildVariant(0, 90, backOffset),
      hover: buildVariant(1, 0, '0%'),
    };

    return (
      <motion.div
        ref={ref}
        initial="initial"
        whileHover="hover"
        className={cn(
          'relative inline-block w-full h-full cursor-pointer perspective-[1000px] focus:outline-none',
          className,
        )}
        {...props}
      >
        <motion.span
          variants={frontVariants}
          transition={transition}
          className={cn(
            defaultSpanClassName,
            'bg-neutral-200',
            frontClassName,
          )}
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </motion.span>
        <motion.span
          variants={backVariants}
          transition={transition}
          className={cn(
            defaultSpanClassName,
            `${jakartaFont.className} bg-black text-white p-5 text-sm items-start justify-start text-left`,
            backClassName,
          )}
        >
          {backText}
        </motion.span>
        <span className="invisible">{alt}</span>
      </motion.div>
    );
  },
);

FlipImage.displayName = 'FlipImage';

export { FlipImage, type FlipImageProps, type FlipDirection };


