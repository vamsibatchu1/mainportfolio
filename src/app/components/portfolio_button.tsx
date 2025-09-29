'use client';

import React from 'react';
import { jakartaFont } from '../fonts';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// Brand symbol component with customizable color and size
interface BrandSymbolProps {
  color?: string;
  size?: number; // Size in pixels (will be used for both width and height)
  className?: string;
}

export const BrandSymbol: React.FC<BrandSymbolProps> = ({ 
  color = '#f9c842', 
  size = 20,
  className 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0", className)}
  >
    <path 
      d="M0 9.5C0 4.2533 4.25329 0 9.5 0V0C15.299 0 20 4.70101 20 10.5V20H10.2564C4.59195 20 0 15.408 0 9.74359V9.5Z" 
      fill={color}
    />
  </svg>
);

// Portfolio Button Variants
export type PortfolioButtonVariant = 
  | 'default'
  | 'default-selected'
  | 'with-icon'
  | 'with-icon-selected'
  | 'with-symbol'
  | 'with-symbol-selected'
  | 'icon-only'
  | 'icon-only-selected';

// Portfolio Button Props
export interface PortfolioButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PortfolioButtonVariant;
  children?: React.ReactNode;
  icon?: LucideIcon;
  symbolColor?: string;
  symbolSize?: number;
  className?: string;
}

// Base button styles
const baseStyles = "box-border content-stretch flex gap-[5.662px] items-center justify-center px-[12px] py-[8px] relative rounded-[42.899px] size-full transition-colors duration-200";
const textStyles = `${jakartaFont.variable} font-jakarta font-medium leading-[1.1] text-[16px] text-nowrap tracking-[-0.64px]`;
const borderStyles = "absolute border border-black border-solid inset-0 pointer-events-none rounded-[42.899px]";

// Variant styles
const variantStyles = {
  'default': 'bg-white',
  'default-selected': 'bg-black',
  'with-icon': 'bg-white',
  'with-icon-selected': 'bg-black',
  'with-symbol': 'bg-white',
  'with-symbol-selected': 'bg-black',
  'icon-only': 'bg-white',
  'icon-only-selected': 'bg-black',
};

// Text color styles
const textColorStyles = {
  'default': 'text-black',
  'default-selected': 'text-white',
  'with-icon': 'text-black',
  'with-icon-selected': 'text-white',
  'with-symbol': 'text-black',
  'with-symbol-selected': 'text-white',
  'icon-only': 'text-black',
  'icon-only-selected': 'text-white',
};

// Icon color styles
const iconColorStyles = {
  'default': 'text-black',
  'default-selected': 'text-white',
  'with-icon': 'text-black',
  'with-icon-selected': 'text-white',
  'with-symbol': 'text-black',
  'with-symbol-selected': 'text-white',
  'icon-only': 'text-black',
  'icon-only-selected': 'text-white',
};

export const PortfolioButton: React.FC<PortfolioButtonProps> = ({
  variant = 'default',
  children,
  icon: Icon,
  symbolColor = '#f9c842',
  symbolSize = 20,
  className,
  ...props
}) => {
  const isSelected = variant.includes('selected');
  const hasIcon = variant.includes('icon');
  const hasSymbol = variant.includes('symbol');
  const isIconOnly = variant.includes('icon-only');

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Border overlay */}
      <div className={borderStyles} aria-hidden="true" />
      
      {/* Symbol (for symbol variants) */}
      {hasSymbol && (
        <BrandSymbol color={symbolColor} size={symbolSize} />
      )}
      
      {/* Text content */}
      {!isIconOnly && children && (
        <div className={cn(textStyles, textColorStyles[variant])}>
          {children}
        </div>
      )}
      
      {/* Icon (for icon variants) */}
      {hasIcon && Icon && (
        <Icon 
          className={cn(
            "shrink-0 size-[18px]",
            iconColorStyles[variant]
          )} 
        />
      )}
    </button>
  );
};

// Convenience exports for each variant
export const DefaultButton: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="default" {...props} />
);

export const DefaultButtonSelected: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="default-selected" {...props} />
);

export const ButtonWithIcon: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="with-icon" {...props} />
);

export const ButtonWithIconSelected: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="with-icon-selected" {...props} />
);

export const ButtonWithSymbol: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="with-symbol" {...props} />
);

export const ButtonWithSymbolSelected: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="with-symbol-selected" {...props} />
);

export const IconButton: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="icon-only" {...props} />
);

export const IconButtonSelected: React.FC<Omit<PortfolioButtonProps, 'variant'>> = (props) => (
  <PortfolioButton variant="icon-only-selected" {...props} />
);

export default PortfolioButton;
