/**
 * DESIGN SYSTEM
 * 
 * This file documents the entire design system for the application.
 * It serves as a central reference for all UI components, styles, and patterns.
 */

/**
 * COLORS
 * 
 * Primary colors used throughout the application
 */
export const colors = {
  // Primary brand colors
  primaryOrange: {
    hex: '#FF531A',
    hsl: 'hsl(14, 100%, 55%)',
    description: 'Main brand color for backgrounds, CTAs, and high emphasis UI elements',
    usage: 'Page backgrounds, primary buttons, key accent elements',
  },
  
  // Semantic colors
  background: {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(240, 10%, 3.9%)',
    description: 'Base background for the application',
    css: 'var(--background)'
  },
  foreground: {
    light: 'hsl(222.2, 84%, 4.9%)',
    dark: 'hsl(0, 0%, 98%)',
    description: 'Primary text color',
    css: 'var(--foreground)'
  },
  
  // UI element colors
  muted: {
    light: 'hsl(210, 40%, 96.1%)',
    dark: 'hsl(240, 3.7%, 15.9%)',
    description: 'For subtle backgrounds and low-emphasis text',
    css: 'var(--muted)'
  },
  accent: {
    light: 'hsl(210, 40%, 96.1%)',
    dark: 'hsl(240, 3.7%, 15.9%)',
    description: 'For accented UI elements',
    css: 'var(--accent)'
  },
  destructive: {
    light: 'hsl(0, 84.2%, 60.2%)',
    dark: 'hsl(0, 62.8%, 30.6%)',
    description: 'For error states and destructive actions',
    css: 'var(--destructive)'
  },
  
  // Surface colors
  card: {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(240, 10%, 3.9%)',
    description: 'Card and surface backgrounds',
    css: 'var(--card)'
  },
  popover: {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(240, 10%, 3.9%)',
    description: 'Popover and modal backgrounds',
    css: 'var(--popover)'
  },
  
  // Border and outline colors
  border: {
    light: 'hsl(214.3, 31.8%, 91.4%)',
    dark: 'hsl(240, 3.7%, 15.9%)',
    description: 'Border color for UI elements',
    css: 'var(--border)'
  },
  input: {
    light: 'hsl(214.3, 31.8%, 91.4%)',
    dark: 'hsl(240, 3.7%, 15.9%)',
    description: 'Border color for input elements',
    css: 'var(--input)'
  },
  ring: {
    light: 'hsl(221.2, 83.2%, 53.3%)',
    dark: 'hsl(240, 4.9%, 83.9%)',
    description: 'Focus ring color for interactive elements',
    css: 'var(--ring)'
  },
};

/**
 * TYPOGRAPHY
 * 
 * Font families, sizes, weights and line heights
 */
export const typography = {
  fontFamilies: {
    sansSerif: 'var(--font-sans, Arial, sans-serif)',
    serif: 'var(--font-serif)',
    mono: 'var(--font-mono, "IBM Plex Mono", monospace)',
    doto: 'var(--font-doto)',
    louize: 'var(--font-louize)',
    ppNeueMontrealBook: 'var(--font-ppNeueMontrealBook)',
  },
  
  fontSizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
    '9xl': '8rem',     // 128px
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

/**
 * SPACING
 * 
 * Consistent spacing values used for margins, paddings, and gaps
 */
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
};

/**
 * BORDER RADIUS
 * 
 * Border radius values for UI elements
 */
export const borderRadius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  DEFAULT: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  lg: 'var(--radius)',
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
  
  // Component-specific radius
  card: 'var(--card-corner-radius)',
  cardDescription: 'Special border radius for cards (20px)',
};

/**
 * SHADOWS
 * 
 * Shadow values for UI elements
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
};

/**
 * BREAKPOINTS
 * 
 * Default breakpoints for responsive design
 */
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * COMPONENTS
 * 
 * Documentation for specific component patterns
 */
export const components = {
  /**
   * DUAL CARD COMPONENT SYSTEM
   * 
   * A card component system with a white card on the left 
   * and a translucent card on the right
   */
  dualCard: {
    description: `
      The dual card component consists of two connected cards: 
      a white card on the left and a translucent card on the right.
      The white card has rounded corners on the left side, while
      the translucent card has rounded corners on the right side.
    `,
    
    sizes: {
      small: {
        whiteCard: {
          width: '500px',
          height: '108px',
          cornerRadius: '20px (top-left and bottom-left only)',
          css: 'card-white card-small',
          tailwind: 'w-card-white h-card-small bg-white rounded-l-card rounded-r-none',
        },
        translucentCard: {
          width: '180px',
          height: '108px',
          cornerRadius: '20px (top-right and bottom-right only)',
          css: 'card-translucent card-small',
          tailwind: 'w-card-translucent h-card-small bg-white/20 backdrop-blur-md rounded-r-card rounded-l-none',
        },
      },
      
      regular: {
        whiteCard: {
          width: '500px',
          height: '180px',
          cornerRadius: '20px (top-left and bottom-left only)',
          css: 'card-white card-regular',
          tailwind: 'w-card-white h-card-regular bg-white rounded-l-card rounded-r-none',
        },
        translucentCard: {
          width: '180px',
          height: '180px',
          cornerRadius: '20px (top-right and bottom-right only)',
          css: 'card-translucent card-regular',
          tailwind: 'w-card-translucent h-card-regular bg-white/20 backdrop-blur-md rounded-r-card rounded-l-none',
        },
      },
    },
    
    gap: '12px',
    
    usage: `
      Import the DualCard component from '@/components/ui/dual-card' and use it like:
      
      <DualCard 
        whiteCardContent={<YourContentHere />}
        translucentCardContent={<IconOrContentHere />}
        size="small" // or "regular"
      />
      
      For more customization, you can use the TailwindDualCard component,
      or the individual WhiteCard and TranslucentCard components.
    `,
    
    cssVariables: {
      '--card-white-width': '500px',
      '--card-translucent-width': '180px',
      '--card-small-height': '108px',
      '--card-regular-height': '180px',
      '--card-gap': '12px',
      '--card-corner-radius': '20px',
    },
    
    tailwindUtilities: {
      'w-card-white': 'Width for the white card (500px)',
      'w-card-translucent': 'Width for the translucent card (180px)',
      'h-card-small': 'Height for small card variant (108px)',
      'h-card-regular': 'Height for regular card variant (180px)',
      'gap-card': 'Standard gap between cards (12px)',
      'rounded-l-card': 'Left-side rounded corners for cards (20px)',
      'rounded-r-card': 'Right-side rounded corners for cards (20px)',
    },
  },
  
  /**
   * ACTION BAR
   * 
   * Navigation component that appears at the bottom of the screen
   */
  actionBar: {
    description: 'A fixed navigation bar that appears at the bottom of the screen',
    usage: 'Primary navigation for the application',
    cssClass: 'actionBarWrapper',
    properties: {
      position: 'fixed',
      zIndex: 60,
      bottom: '32px',
    },
  },
  
  /**
   * CARD SYSTEM
   * 
   * General card system used throughout the application
   */
  card: {
    description: 'Standard card component for displaying content in a container',
    variants: {
      default: {
        background: 'white',
        borderRadius: 'var(--radius)',
        shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      },
      destructive: {
        background: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
      },
    },
  },
};

/**
 * ANIMATIONS
 * 
 * Standard animation patterns
 */
export const animations = {
  slideUpFade: {
    css: 'var(--slide-up-fade)',
    description: 'Elements slide up and fade in',
    timing: '1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  },
  fadeIn: {
    css: 'var(--fade-in)',
    description: 'Elements fade in',
    timing: '0.2s ease-in-out forwards',
  },
  scrollX: {
    css: 'scroll-x 20s linear infinite',
    description: 'Horizontal infinite scrolling animation',
  },
  grid: {
    css: 'grid 15s linear infinite',
    description: 'Grid animation for background patterns',
  },
};

/**
 * Z-INDEX
 * 
 * Standardized z-index values to maintain proper layering
 */
export const zIndex = {
  0: 0,
  10: 10,     // Background elements
  20: 20,     // Standard UI elements
  30: 30,     // Floating elements (tooltips, etc.)
  40: 40,     // Dropdown menus
  50: 50,     // Overlay backgrounds
  60: 60,     // Fixed navigation (action bar)
  100: 100,   // Modals and dialogs
  tooltip: 50,
  modal: 100,
  drawer: 40,
  dropdown: 30,
};

/**
 * How to use this design system
 * 
 * This file serves as documentation and reference for the design system.
 * When implementing UI components, refer to this file for:
 * 
 * 1. Colors: Use the defined color system for consistency
 * 2. Typography: Follow the typographic scale and font choices
 * 3. Spacing: Use the spacing scale for margins, padding and gaps
 * 4. Components: Implement components according to their specifications
 * 5. Breakpoints: Follow the responsive breakpoints for media queries
 * 
 * Example usage in TSX:
 * import { colors, spacing } from '@/lib/design-system';
 * 
 * <div 
 *   style={{ 
 *     backgroundColor: colors.primaryOrange.hex,
 *     padding: spacing[4]
 *   }}
 * >
 *   Content
 * </div>
 */ 