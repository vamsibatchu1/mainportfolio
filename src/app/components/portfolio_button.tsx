'use client';

import React from 'react';
import { jakartaFont } from '../fonts';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// Brand symbol component with customizable color
interface BrandSymbolProps {
  color?: string;
  className?: string;
}

const BrandSymbol: React.FC<BrandSymbolProps> = ({ 
  color = '#f9c842', 
  className 
}) => (
  <div 
    className={cn("shrink-0 size-[20px]", className)}
    style={{ 
      backgroundColor: color,
      borderRadius: '200px 210px 200px 190px' // Custom border radius for the symbol shape
    }}
  />
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
        <BrandSymbol color={symbolColor} />
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
