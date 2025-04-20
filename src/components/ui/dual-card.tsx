"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { doto, louize } from '@/app/fonts';

/**
 * Base interfaces for the DualCard components
 */
interface BaseDualCardProps {
  whiteCardContent: React.ReactNode;
  translucentCardContent: React.ReactNode;
  className?: string;
  whiteCardClassName?: string;
  translucentCardClassName?: string;
}

/**
 * Small DualCard component (500px white card + 180px translucent card, 108px height)
 */
export function SmallDualCard({
  whiteCardContent,
  translucentCardContent,
  className,
  whiteCardClassName,
  translucentCardClassName,
}: BaseDualCardProps) {
  return (
    <div className={cn('w-[694px] relative', className)}>
      <div 
        className={cn(
          'absolute left-0 top-0',
          whiteCardClassName
        )}
        style={{
          width: '500px',
          height: '108px',
          borderRadius: '20px 0 0 20px',
          backgroundColor: '#ffffff'
        }}
      >
        {whiteCardContent}
      </div>
      
      <div 
        className={cn(
          'absolute',
          translucentCardClassName
        )}
        style={{
          width: '180px',
          height: '108px',
          borderRadius: '0 20px 20px 0',
          backgroundColor: 'rgba(0, 0, 0, 0.19)',
          left: '512px',
          top: '0'
        }}
      >
        <div className="flex items-center justify-center h-full">
          {translucentCardContent}
        </div>
      </div>
    </div>
  );
}

/**
 * Regular DualCard component (standard card with vertically stacked title and subtitle)
 */
export function RegularDualCard({
  whiteCardContent,
  translucentCardContent,
  className,
  whiteCardClassName,
  translucentCardClassName,
}: BaseDualCardProps) {
  return (
    <div className={cn('card-container', className)}>
      <div 
        className={cn(
          'card-regular flex items-center justify-start',
          whiteCardClassName
        )}
        style={{
          backgroundColor: '#ffffff',
          width: '500px',
          height: '180px',
          borderRadius: '20px 0 0 20px',
        }}
      >
        <div className="flex flex-col items-start justify-center px-8">
          {whiteCardContent}
        </div>
      </div>
      
      <div 
        className={cn(
          'card-regular flex items-center justify-center',
          translucentCardClassName
        )}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.19)',
          width: '180px',
          height: '180px',
          borderRadius: '0 20px 20px 0',
        }}
      >
        <div className="flex items-center justify-center h-full">
          {translucentCardContent}
        </div>
      </div>
    </div>
  );
}

/**
 * Legacy DualCard component for backward compatibility
 * Uses the new components internally based on the size prop
 */
export function DualCard({
  whiteCardContent,
  translucentCardContent,
  size = 'regular',
  className,
  whiteCardClassName,
  translucentCardClassName,
}: BaseDualCardProps & { size?: 'small' | 'regular' }) {
  if (size === 'small') {
    return (
      <SmallDualCard
        whiteCardContent={whiteCardContent}
        translucentCardContent={translucentCardContent}
        className={className}
        whiteCardClassName={whiteCardClassName}
        translucentCardClassName={translucentCardClassName}
      />
    );
  }
  
  return (
    <RegularDualCard
      whiteCardContent={whiteCardContent}
      translucentCardContent={translucentCardContent}
      className={className}
      whiteCardClassName={whiteCardClassName}
      translucentCardClassName={translucentCardClassName}
    />
  );
}

// Title text for the white card
export function CardTitle({ children, className, size = 'regular' }: { 
  children: React.ReactNode, 
  className?: string,
  size?: 'small' | 'regular'
}) {
  return (
    <h3 
      className={cn(
        `${louize.className}`, 
        size === 'regular' ? 'text-[40px] mb-2 leading-tight' : 'text-[36px] mb-2',
        className
      )}
    >
      {children}
    </h3>
  );
}

// Subtitle text for the white card
export function CardSubtitle({ children, className, size = 'regular' }: { 
  children: React.ReactNode, 
  className?: string,
  size?: 'small' | 'regular'
}) {
  return (
    <p 
      className={cn(
        `${doto.className} font-bold`, 
        size === 'small' 
          ? 'text-[24px] text-left text-[#797979] absolute left-[40px] top-[37px]' 
          : 'text-[24px] text-[#797979]',
        className
      )}
    >
      {children}
    </p>
  );
} 