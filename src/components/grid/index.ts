// Export grid components using named exports
export { default as Grid6Field } from './Grid6Field';
export { default as Grid8Field } from './Grid8Field';
export { default as Grid18Field } from './Grid18Field';
export { default as Grid20Field } from './Grid20Field';
export { default as Grid36Field } from './Grid36Field';

// Export container and field components
export { GridContainer } from './GridContainer';
export { Field } from './Grid6Field';
export { GridDemo } from './GridDemo';

// Type definitions
export interface GridProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  margin?: number; // Legacy: uniform margin in pixels (default: 80)
  marginHorizontal?: number; // Horizontal margin (left/right) in pixels
  marginVertical?: number; // Vertical margin (top/bottom) in pixels
  gap?: number; // Custom gap in pixels (default: 20)
}

export interface FieldProps {
  rowStart: number;
  rowEnd?: number;
  colStart: number;
  colEnd?: number;
  children?: React.ReactNode;
  className?: string;
  fieldNumber?: number; // Optional for demonstration purposes
} 