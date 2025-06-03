# Grid System

A robust, responsive grid system with 5 different layouts and fully customizable spacing options including separate horizontal and vertical margins. Now features a flexible matrix-based field system for ultimate layout control.

## Grid Layouts

### Specifications
- **Margins**: Fully customizable with uniform or separate H/V control (default: 80px)
- **Gaps**: Customizable (default: 20px between fields)
- **Fields**: Each field is a flex stretch div
- **Responsive**: Works on any device size

### Available Grids

1. **6-field**: 2 columns × 3 rows
2. **8-field**: 2 columns × 4 rows  
3. **18-field**: 2 columns × 9 rows
4. **36-field**: 6 columns × 6 rows
5. **20-field**: 4 columns × 5 rows

## Usage

### Basic Usage (Default Spacing)
```tsx
import { Grid6Field, Grid8Field, Grid18Field, Grid36Field, Grid20Field } from '@/components/grid';

// Use with default 80px margin and 20px gap
<Grid6Field />
<Grid8Field />
<Grid18Field />
<Grid36Field />
<Grid20Field />
```

### Uniform Custom Spacing
```tsx
// Custom uniform margin and gap
<Grid6Field margin={40} gap={15} />

// Edge-to-edge with large gaps
<Grid20Field margin={0} gap={30} />

// Tight layout
<Grid8Field margin={10} gap={5} />
```

### Separate Horizontal/Vertical Margins
```tsx
// Wide screen layout (more horizontal space)
<Grid6Field marginHorizontal={120} marginVertical={20} gap={15} />

// Mobile portrait (more vertical space)  
<Grid36Field marginHorizontal={20} marginVertical={100} gap={8} />

// Header/footer layout (full width, vertical spacing)
<Grid20Field marginHorizontal={0} marginVertical={80} gap={20} />

// Sidebar layout (full height, horizontal spacing)
<Grid36Field marginHorizontal={100} marginVertical={0} gap={15} />

// Asymmetric design
<Grid6Field marginHorizontal={160} marginVertical={40} gap={25} />
```

### With Custom Styling
```tsx
<Grid6Field 
  marginHorizontal={60} 
  marginVertical={40}
  gap={25}
  className="my-custom-class" 
  style={{ background: 'red' }} 
/>
```

## Props

All grid components accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `margin` | `number` | `80` | Uniform margin in pixels (legacy/convenience) |
| `marginHorizontal` | `number` | `undefined` | Left/right margin in pixels |
| `marginVertical` | `number` | `undefined` | Top/bottom margin in pixels |
| `gap` | `number` | `20` | Gap in pixels between fields |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Inline styles |

**Note**: If `marginHorizontal` or `marginVertical` are provided, they take precedence over the `margin` prop for their respective directions.

## Demo

```tsx
import { GridDemo } from '@/components/grid';

// Interactive demo with all grids and H/V margin controls
<GridDemo />
```

## Common Use Cases

### Wide Monitor Layout
```tsx
<Grid20Field marginHorizontal={120} marginVertical={20} />
```

### Mobile Portrait Optimization
```tsx
<Grid36Field marginHorizontal={20} marginVertical={100} />
```

### Header/Footer Layouts
```tsx
<Grid6Field marginHorizontal={0} marginVertical={80} />
```

### Sidebar Layouts
```tsx
<Grid20Field marginHorizontal={100} marginVertical={0} />
```

### Print Layouts
```tsx
<Grid6Field marginHorizontal={72} marginVertical={108} /> // 1" and 1.5" margins
```

### Compact Dashboard
```tsx
<Grid36Field margin={30} gap={5} />
```

## Backward Compatibility

The original `margin` prop is fully supported:

```tsx
// These work exactly as before
<Grid6Field margin={80} gap={20} />
<Grid20Field margin={40} gap={15} />
```

## Components

- `GridContainer`: Base container with customizable margins
- `Grid6Field`: 6-field grid layout
- `Grid8Field`: 8-field grid layout
- `Grid18Field`: 18-field grid layout
- `Grid36Field`: 36-field grid layout
- `Grid20Field`: 20-field grid layout
- `GridDemo`: Interactive demo component with H/V controls

## Test Pages

Visit these URLs to test the grid system:

- `/grid-test` - Interactive demo with full controls
- `/grid-individual` - Individual grid testing
- `/grid-custom` - Custom content examples
- `/grid-custom-examples` - Various spacing configurations
- `/grid-hv-margins` - Horizontal/vertical margin examples

## Matrix-Based Field System

All grid components now support a flexible matrix positioning system that allows you to position and span fields across multiple rows and columns.

### Field Component

Each grid exports a `Field` component with matrix positioning:

```typescript
interface FieldProps {
  rowStart: number;      // Starting row (1-indexed)
  rowEnd?: number;       // Ending row (defaults to rowStart + 1)
  colStart: number;      // Starting column (1-indexed)  
  colEnd?: number;       // Ending column (defaults to colStart + 1)
  children?: React.ReactNode;
  className?: string;
  fieldNumber?: number;  // Optional for demonstration
}
```

### Matrix Usage

```tsx
import { GridContainer, Field } from '@/components/grid';

// Custom layout using matrix positioning
<GridContainer marginHorizontal={400} marginVertical={80}>
  <div className="grid grid-cols-2 grid-rows-4 w-full h-full" style={{ gap: '20px' }}>
    <Field rowStart={1} colStart={1}>Header Content</Field>
    <Field rowStart={1} rowEnd={3} colStart={2}>Spanning 2 rows</Field>
    <Field rowStart={2} colStart={1}>Regular field</Field>
    <Field rowStart={3} colStart={1} colEnd={3}>Spanning 2 columns</Field>
    <Field rowStart={4} colStart={1}>Bottom left</Field>
    <Field rowStart={4} colStart={2}>Bottom right</Field>
  </div>
</GridContainer>
```

### Field Spanning Examples

#### Horizontal Spanning
```tsx
// Span across 2 columns
<Field rowStart={1} colStart={1} colEnd={3}>Wide content</Field>
```

#### Vertical Spanning  
```tsx
// Span across 3 rows
<Field rowStart={1} rowEnd={4} colStart={1}>Tall content</Field>
```

#### Block Spanning
```tsx
// Span 2×2 block
<Field rowStart={1} rowEnd={3} colStart={1} colEnd={3}>Large block</Field>
```

### Matrix Coordinates

Think of each grid as a coordinate system:

**Grid8Field (2×4):**
```
[1,1] [1,2]
[2,1] [2,2]  
[3,1] [3,2]
[4,1] [4,2]
```

**Grid36Field (6×6):**
```
[1,1] [1,2] [1,3] [1,4] [1,5] [1,6]
[2,1] [2,2] [2,3] [2,4] [2,5] [2,6]
...and so on
``` 