# WIP Landing Page

This is a work-in-progress landing page for the portfolio that serves as a staging area while other pages are being built.

## Features

- **Background Image**: Uses `landing-bg.png` as the background
- **Lottie Animations**: Cycles through 4 different Lottie animations with text
- **Final Message**: Shows `landing-message.svg` after all animations complete
- **Responsive Design**: 960px max width container with proper mobile responsiveness
- **Dynamic Positioning**: Final message positioned at bottom of screen
- **Code Toggle**: Easy toggle to show/hide animations for testing

## Required Files

Place these files in `/public/images/wip/`:

### Background & Final Message
1. `landing-bg.png` - Background image
2. `landing-message.svg` - Final welcome message (960x794px)

### Lottie Animations
3. `loading.json` - Spinner/dots animation (144x144px)
4. `view.json` - View/eye animation (500x500px)
5. `article.json` - Article/document animation (500x500px)
6. `image.json` - Image/media animation (500x500px)

## Animation Sequence

1. **Loading Spinner**: Shows `loading.json` with "Building something amazing..." for 2 seconds
2. **View Animation**: Shows `view.json` with "Crafting experiences..." for 2 seconds
3. **Article Animation**: Shows `article.json` with "Designing the future..." for 2 seconds
4. **Image Animation**: Shows `image.json` with "Almost ready..." for 2 seconds
5. **Final Message**: Shows `landing-message.svg` at bottom of screen

## Technical Details

- **Lottie Size**: All animations displayed at 120x120px
- **Animation Behavior**: Each Lottie plays once (no loops)
- **Font**: Plus Jakarta Sans, 64px, medium weight
- **Container**: 960px max width, centered
- **Final Message**: Fixed position at bottom of viewport

## Code Toggle

For testing purposes, you can toggle animations on/off by changing this line in `WipLanding.tsx`:

```typescript
// Code-level toggle: Change this to false to hide loading images
const showLoadingImages = true; // Change to false for text-only mode
```

## Customization

You can customize the loading animations by modifying the `loadingAnimations` array in `WipLanding.tsx`:

```typescript
const loadingAnimations = [
  {
    id: 1,
    animation: loadingAnimation,
    text: 'Your custom text here...',
    duration: 2000, // Duration in milliseconds
    isLottie: true
  },
  // ... more animations
];
```

## Dependencies

- `lottie-react` - For rendering Lottie animations
- `next/image` - For optimized image loading
- `tailwindcss` - For styling

## Usage

Navigate to `/wip` to see the landing page in action.

## Animation Behavior

- **No Loops**: Each Lottie animation plays once during its 2-second display
- **Smooth Transitions**: 300ms fade transitions between animations
- **Final Stop**: Animation stops permanently after showing the final message
- **Responsive**: Adapts to any screen height with final message at bottom
