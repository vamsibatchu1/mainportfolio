# Vamsi Batchu's Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Framer Motion. This portfolio showcases projects, experiments, blog posts, and provides an interactive AI chat experience.

## Architecture Overview

This portfolio is built using a component-based architecture with a focus on interactivity, smooth animations, and responsive design. The project uses Next.js 14 with the App Router pattern for efficient page routing and server components where appropriate.

### Tech Stack

- **Frontend Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font Management**: Next.js Font Optimization
- **Icons**: Lucide React
- **Animation Library**: Lottie

### Project Structure

```
src/
├── animations/        # Lottie JSON animation files
├── app/
│   ├── fonts.ts       # Custom font definitions
│   ├── home/          # Main home section
│   │   ├── components/
│   │   │   ├── ActionBar.tsx        # Main navigation component
│   │   │   ├── StatusCard.tsx       # User status display component
│   │   │   └── menu-content/        # Dynamic menu content for ActionBar
│   │   │       ├── index.ts         # Content registry
│   │   │       ├── types.ts         # Shared types
│   │   │       ├── HomeContent.tsx  # Home menu content
│   │   │       ├── WorkContent.tsx  # Work menu content
│   │   │       ├── BlogContent.tsx  # Blog menu content
│   │   │       ├── ExperimentsContent.tsx # Experiments menu content
│   │   │       ├── AboutContent.tsx # About menu content
│   │   │       └── AskContent.tsx   # AI chat interface
│   │   ├── layout.tsx               # Layout wrapper for home pages
│   │   ├── page.tsx                 # Home page component
│   │   ├── blog/                    # Blog section
│   │   ├── work/                    # Work section
│   │   ├── about/                   # About section
│   │   ├── experiments/             # Experiments section
│   │   └── ask/                     # Ask section
│   └── layout.tsx                   # Root layout
├── public/
│   ├── fonts/                       # Custom font files
│   └── images/                      # Image assets
```

## Key Components

### ActionBar

The ActionBar is the central navigation component of the portfolio. It's a fixed bar at the bottom of the screen that expands to reveal content when users hover over different menu items.

**Features:**
- Dynamic content loading based on selected menu item
- Lottie animations for menu icons
- Smooth expanding/collapsing animations
- Content-specific heights and layouts

### Menu Content System

The menu content system is built to be modular and extensible, using a registry pattern to map routes to their respective content components.

**Components:**
- `HomeContent`: Displays featured projects and recent activity
- `WorkContent`: Showcases professional work experience and projects
- `BlogContent`: Presents blog posts with a clean, readable layout
- `ExperimentsContent`: Displays experimental projects in a card layout
- `AboutContent`: Shows information about the creator in a multi-column layout
- `AskContent`: Provides an interactive AI chat interface

### StatusCard

A collapsible card component that displays the user's current status, what they're listening to, and recent projects. Features:
- Hover-based expansion/collapse
- Custom icon integration
- Fixed positioning for consistent access

### Blog Page

The blog page features a clean, readable layout with:
- Introduction text in DOTO font
- Blog posts in a three-column layout (title, content, image)
- Subtle animations for content loading

## Animation System

The portfolio uses a carefully crafted animation system:

1. **Page Transitions**: Handled by AnimatePresence in the layout component
2. **Component Animations**: Individual components have their own entrance animations
3. **Interaction Animations**: Hover and click animations for interactive elements
4. **Lottie Animations**: Used for menu icons and special effects

## Custom Font System

The portfolio uses Next.js font optimization with a mix of custom and Google fonts:
- DOTO: Custom font for headlines and featured text
- IBM Plex Mono: For code snippets and technical content
- Newake: For bold typography in specific sections
- Other specialty fonts for specific UI elements

## Responsive Design

The portfolio is designed with a mobile-first approach using Tailwind CSS:
- Fixed width containers where appropriate (1000px, 1200px)
- Responsive layouts that adapt to different screen sizes
- Mobile-optimized navigation and content display

## Interactive Features

- **AI Chat Interface**: Allows visitors to ask questions directly
- **Blog Cards**: Interactive cards with hover effects
- **Experiment Showcase**: Cards that link to experimental projects
- **Hover-to-Expand Navigation**: Intuitive navigation system

## Development Practices

- TypeScript for type safety
- Client components marked with "use client" directive where needed
- Dynamic imports for code splitting
- Console log cleanup for production
- Error handling for missing assets

## Future Enhancements

- Server-side rendering optimization
- Image optimization with next/image
- Performance monitoring with Core Web Vitals
- Expanded AI capabilities
- Additional interactive experiments

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd mainportfolio

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

The site should be available at http://localhost:3000
