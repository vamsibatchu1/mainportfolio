export interface GridProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  margin?: number; // Legacy: uniform margin in pixels (default: 80)
  marginHorizontal?: number; // Horizontal margin (left/right) in pixels
  marginVertical?: number; // Vertical margin (top/bottom) in pixels
  gap?: number; // Custom gap in pixels (default: 20)
}

export interface GridFieldProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fieldNumber?: number;
}

// New matrix-based field interface
export interface FieldProps {
  rowStart: number;
  rowEnd?: number;
  colStart: number;
  colEnd?: number;
  children?: React.ReactNode;
  className?: string;
  fieldNumber?: number; // Optional for demonstration purposes
}

export interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  margin?: number; // Legacy: uniform margin in pixels (default: 80)
  marginHorizontal?: number; // Horizontal margin (left/right) in pixels
  marginVertical?: number; // Vertical margin (top/bottom) in pixels
} 