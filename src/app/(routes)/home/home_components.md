# Home Page Components Documentation

This document provides detailed information about all components used in the home page, their functionality, and implementation details.

## Component Overview

The home page is organized into 4 main sections, each implemented as a separate React component:

1. **HomeHero** (`1_home_hero.tsx`) - Hero section with interactive text blocks
2. **HomeHighlights** (`2_home_highlights.tsx`) - Rotating specialties showcase
3. **HomeCaseStudy1** (`3_home_casestudy1.tsx`) - Case study highlight with buttons
4. **HomeCaseStudy2** (`4_home_casestudy2.tsx`) - Detailed case study with images

---

## 1. HomeHero Component

**File:** `1_home_hero.tsx`  
**Function:** `HomeHero()`

### Purpose
The hero section serves as the main introduction to the portfolio, featuring an interactive text-based interface where users can click on different text blocks to learn more about the designer's background and expertise.

### Key Features
- **Interactive Text Blocks**: Multiple clickable text elements that rotate through different variations
- **Randomized Auto-rotation**: Text blocks automatically cycle through different words/phrases in random order
- **Hover Effects**: Visual feedback when hovering over interactive elements
- **Dynamic Subtext**: Contextual descriptions that change based on selected text block
- **Responsive Design**: Adapts to different screen sizes

### Technical Implementation
- **State Management**: Uses React hooks for managing selected text, rotation state, and hover effects
- **Animation**: Framer Motion for smooth transitions and text rotation effects
- **Typography**: Jakarta Sans font for consistent branding
- **Randomized Auto-rotation Logic**: Implements a randomized rotation system that selects any text block at 1.2-second intervals

### Text Rotation System
The component includes 9 rotating text blocks with predefined word arrays:
- Product Builder variations (product designer, design leader, etc.)
- Visual Design variations (design craft, interaction design, etc.)
- Skills variations (skilled, expert, strategic, etc.)
- And 6 more categories with relevant professional terms

### User Interaction
- **Click**: Selects a text block and pauses auto-rotation
- **Hover**: Temporarily stops auto-rotation for that specific block
- **Auto-resume**: Rotation resumes after 5 seconds of inactivity
- **Randomized Timing**: Words rotate every 1.2 seconds in random order for dynamic engagement

---

## 2. HomeHighlights Component

**File:** `2_home_highlights.tsx`  
**Function:** `HomeHighlights()`

### Purpose
Showcases the designer's core specialties through an auto-rotating carousel that highlights different areas of expertise with visual backgrounds and descriptions.

### Key Features
- **Auto-rotating Carousel**: Cycles through 5 different specialties every 3 seconds
- **Visual Backgrounds**: Each specialty has a unique background image
- **Smooth Transitions**: Framer Motion animations for seamless transitions
- **Icon Integration**: Lucide React icons for each specialty category

### Specialties Showcased
1. **Enterprise Design** - Focus on large-scale business applications
2. **Product Design** - User-centered product experiences
3. **UI/UX Design** - Interface and user experience design
4. **Brand Identity** - Visual identity and brand systems
5. **Design Systems** - Scalable design frameworks

### Technical Implementation
- **State Management**: Tracks current specialty index for rotation
- **Animation**: Smooth fade and scale transitions between specialties
- **Image Handling**: Dynamic background images for each specialty
- **Responsive Layout**: Fixed width container with flexible content areas

---

## 3. HomeCaseStudy1 Component

**File:** `3_home_casestudy1.tsx`  
**Function:** `HomeCaseStudy1()`

### Purpose
Provides a detailed case study presentation with images, comprehensive text content, and interactive elements including a dialog system for additional information.

### Key Features
- **Two-column Layout**: Text content on left, images on right
- **Staggered Animations**: Sequential appearance of elements with delays
- **Interactive Dialog**: "Explain like I am 5" button with popup dialog
- **Quick Actions**: Multiple action buttons for case study interaction
- **Image Integration**: Real case study images with proper alt text

### Content Structure
- **Left Column**: 
  - Main case study description (18px)
  - Bullet points with project details (14px)
- **Right Column**: 
  - Two case study images with staggered animations
- **Quick Actions Section**: 
  - Interactive buttons for case study exploration
  - Dialog system for simplified explanations

### Technical Implementation
- **Animation System**: Framer Motion with staggered delays (3.0s, 3.4s, 3.8s, 4.2s)
- **Dialog Management**: State-controlled dialog visibility
- **Typography**: Multiple font families (Poppins, Inter) for hierarchy
- **Button System**: Shadcn UI buttons with custom styling

### Interactive Elements
- **Case Study Dialog**: Popup component for simplified explanations
- **View Full Case Study**: Button for complete case study access
- **Expand Button**: Icon-only button for additional actions

---

## 4. HomeCaseStudy2 Component

**File:** `4_home_casestudy2.tsx`  
**Function:** `HomeCaseStudy2()`

### Purpose
Presents a case study highlight in a clean, structured layout with placeholder images, descriptive text, and interactive buttons using the portfolio button system.

### Key Features
- **Two-column Layout**: Large text on left, detailed content on right
- **Image Placeholders**: Two gray placeholder areas for case study visuals
- **Structured Content**: Main description, bullet points, and action buttons
- **Portfolio Buttons**: Uses the custom button system with symbol, default, and icon variants

### Content Structure
- **Left Column**: Large headline text (38px) describing the case study
- **Right Column**: 
  - Detailed description (21px)
  - Bullet points with key features (16px)
  - Three action buttons (symbol, default, icon)

### Technical Implementation
- **Typography**: Jakarta Sans font with specific sizing and spacing
- **Layout**: Flexbox-based responsive design
- **Button Integration**: Uses portfolio button components with proper variants
- **Icon Integration**: Lucide React icons (Airplay icon for icon button)

---

## Design System Integration

### Typography
- **Primary Font**: Jakarta Sans (jakartaFont) - Used across most components
- **Secondary Fonts**: Poppins (triFont), Inter (interFont) - Used for specific content types
- **Font Loading**: Optimized with Next.js font loading system

### Color System
- **Primary Colors**: Black text on white backgrounds
- **Accent Colors**: Gray placeholders (#f2f2f2, #e2e2e2)
- **Button Colors**: Custom portfolio button system with brand colors

### Spacing System
- **Consistent Gaps**: 24px, 40px, 96px for different section spacing
- **Component Spacing**: 8px, 16px, 20px, 32px for internal spacing
- **Responsive Spacing**: Maintains proportions across screen sizes

### Animation System
- **Framer Motion**: Used for all animations and transitions
- **Staggered Delays**: Sequential element appearance for visual hierarchy
- **Smooth Transitions**: Consistent easing and duration across components

---

## File Organization

```
src/app/home/components/
├── 1_home_hero.tsx          # Hero section with interactive text
├── 2_home_highlights.tsx    # Rotating specialties showcase  
├── 3_home_casestudy1.tsx    # Detailed case study with images
├── 4_home_casestudy2.tsx    # Case study highlight with buttons
├── index.ts                 # Component exports
└── home_components.md       # This documentation file
```

## Usage in Home Page

The components are imported and used in the following order in `src/app/home/page.tsx`:

```tsx
import { HomeHero, HomeHighlights, HomeCaseStudy1, HomeCaseStudy2 } from './components';

// Used in sequence:
<HomeHero />           // 1. Hero section
<HomeHighlights />     // 2. Specialties showcase
<HomeCaseStudy1 />     // 3. Detailed case study with images
<HomeCaseStudy2 />     // 4. Case study highlight with buttons
```

## Dependencies

### External Libraries
- **Framer Motion**: Animation and transition library
- **Lucide React**: Icon library for consistent iconography
- **Next.js**: Framework-specific font loading and optimization

### Internal Dependencies
- **Portfolio Button System**: Custom button components with variants
- **Font System**: Centralized font configuration from `app/fonts.ts`
- **UI Components**: Shadcn UI components for consistent styling
- **Dialog System**: Custom case study dialog component

---

## Future Considerations

### Potential Enhancements
- **Accessibility**: Add ARIA labels and keyboard navigation
- **Performance**: Implement lazy loading for images and animations
- **Responsiveness**: Enhanced mobile and tablet layouts
- **Content Management**: Consider CMS integration for dynamic content
- **Analytics**: Add tracking for user interactions with text blocks

### Maintenance Notes
- **Animation Timing**: Adjust delays if adding/removing components
- **Content Updates**: Update text arrays in HomeHero for new rotation options
- **Randomization Logic**: Auto-rotation timing (1.2s intervals) can be adjusted in HomeHero component
- **Image Optimization**: Replace placeholder images with optimized assets
- **Button Variants**: Extend portfolio button system as needed
