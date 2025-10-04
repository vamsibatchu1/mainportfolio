# Component Architecture Guide

## 🧩 **Component System Overview**

This document provides a detailed guide to the component architecture and organization within the Vamsi Batchu Portfolio.

---

## 📂 **Component Directory Structure**

```
src/components/
├── 📁 ai-elements/               # AI Chat Interface Components
├── 📁 content-views/             # Content Display Components  
├── 📁 editor/                    # Rich Text Editor System
└── 📁 ui/                        # Reusable UI Components

src/app/components/               # App-Specific Components
├── 📁 casestudy_dialog.tsx       # Case study modal
├── 📁 main-nav.tsx               # Navigation component
├── 📁 portfolio_button.tsx       # Custom button variants
└── 📁 ... (11 total files)
```

---

## 🤖 **AI Elements (`src/components/ai-elements/`)**

### **Purpose**
Components for AI chat interface and conversational UI elements.

### **Components**

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `actions.tsx` | Action buttons for AI responses | Click handlers, styling variants |
| `branch.tsx` | Conversation branching logic | Decision trees, conditional rendering |
| `code-block.tsx` | Syntax-highlighted code display | Language detection, copy functionality |
| `conversation.tsx` | Main conversation container | Message threading, scroll management |
| `image.tsx` | Image display in AI responses | Responsive images, lazy loading |
| `inline-citation.tsx` | Inline reference citations | Hover states, source links |
| `loader.tsx` | Loading states for AI responses | Typing indicators, progress bars |
| `message.tsx` | Individual message components | User/assistant variants, timestamps |
| `prompt-input.tsx` | User input field | Auto-resize, send button |
| `reasoning.tsx` | AI reasoning display | Step-by-step thinking process |
| `response.tsx` | AI response container | Streaming support, formatting |
| `sources.tsx` | Source attribution | Reference links, citations |
| `suggestion.tsx` | Suggested prompts | Quick actions, auto-complete |
| `task.tsx` | Task management interface | Progress tracking, status updates |
| `tool.tsx` | Tool execution display | Function calls, results |
| `web-preview.tsx` | Web content preview | URL previews, metadata |

### **Usage Pattern**
```tsx
import { Conversation, Message, PromptInput } from '@/components/ai-elements';

function ChatInterface() {
  return (
    <Conversation>
      <Message role="user" content="Hello" />
      <Message role="assistant" content="Hi there!" />
      <PromptInput onSubmit={handleSubmit} />
    </Conversation>
  );
}
```

---

## 📄 **Content Views (`src/components/content-views/`)**

### **Purpose**
Specialized components for displaying different types of content.

### **Components**

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `skills-view.tsx` | Skills and expertise display | Interactive skills matrix, progress bars |
| `story-view.tsx` | Narrative content presentation | Timeline layout, story progression |
| `testimonials-view.tsx` | Client testimonials | Carousel layout, quote styling |
| `work-view.tsx` | Portfolio work showcase | Project cards, filtering, case studies |

### **Usage Pattern**
```tsx
import { WorkView, SkillsView } from '@/components/content-views';

function Portfolio() {
  return (
    <div>
      <SkillsView skills={skillsData} />
      <WorkView projects={projectsData} />
    </div>
  );
}
```

---

## ✏️ **Editor System (`src/components/editor/`)**

### **Purpose**
Comprehensive rich text editor built on Lexical framework.

### **Directory Structure**

```
src/components/editor/
├── 📁 context/                   # React Context Providers
├── 📁 editor-hooks/              # Custom Editor Hooks
├── 📁 editor-ui/                 # Editor UI Components
├── 📁 nodes/                     # Custom Editor Nodes
├── 📁 plugins/                   # Editor Plugins (99 files)
├── 📁 shared/                    # Shared Utilities
├── 📁 themes/                    # Editor Themes
├── 📁 transformers/              # Data Transformers
└── 📁 utils/                     # Editor Utilities
```

### **Key Components**

#### **Context (`context/`)**
- `floating-link-context.tsx` - Link editing context
- `shared-autocomplete-context.tsx` - Autocomplete functionality
- `toolbar-context.tsx` - Toolbar state management

#### **Editor UI (`editor-ui/`)**
- `code-button.tsx` - Code block insertion
- `colorpicker.tsx` - Color selection interface
- `content-editable.tsx` - Main editable area
- `equation-component.tsx` - Math equation rendering
- `excalidraw-component.tsx` - Drawing integration
- `image-component.tsx` - Image handling
- `poll-component.tsx` - Interactive polls

#### **Custom Nodes (`nodes/`)**
- `autocomplete-node.tsx` - Autocomplete functionality
- `collapsible-container-node.ts` - Collapsible sections
- `emoji-node.tsx` - Emoji support
- `equation-node.tsx` - Math equations
- `excalidraw-node.tsx` - Drawing nodes
- `image-node.tsx` - Image nodes
- `mention-node.ts` - User mentions
- `poll-node.tsx` - Poll nodes

#### **Plugins (`plugins/`)**
99 plugin files providing:
- **Text Formatting**: Bold, italic, underline, strikethrough
- **Lists**: Ordered, unordered, nested lists
- **Tables**: Table creation and editing
- **Links**: URL insertion and editing
- **Media**: Image, video, audio support
- **Code**: Syntax highlighting, code blocks
- **Math**: LaTeX equation support
- **Drawing**: Excalidraw integration
- **Collaboration**: Real-time editing
- **Export**: Markdown, HTML export

### **Usage Pattern**
```tsx
import { Editor } from '@/components/editor';
import { EditorProvider } from '@/components/editor/context';

function RichTextEditor() {
  return (
    <EditorProvider>
      <Editor
        placeholder="Start writing..."
        onChange={handleChange}
        initialValue={content}
      />
    </EditorProvider>
  );
}
```

---

## 🎨 **UI Components (`src/components/ui/`)**

### **Purpose**
Reusable UI components built on Shadcn/ui and Radix UI.

### **Component Categories**

#### **Layout Components**
| Component | Purpose | Features |
|-----------|---------|----------|
| `content-container.tsx` | Main content wrapper | Responsive padding, max-width |
| `dock.tsx` | macOS-style dock | Icon grouping, magnification |
| `sidebar.tsx` | Side navigation | Collapsible, responsive |
| `sheet.tsx` | Slide-out panels | Multiple positions, overlay |

#### **Interactive Components**
| Component | Purpose | Features |
|-----------|---------|----------|
| `button.tsx` | Button variants | Multiple styles, sizes, states |
| `dialog.tsx` | Modal dialogs | Overlay, animations, accessibility |
| `dropdown-menu.tsx` | Dropdown menus | Keyboard navigation, positioning |
| `popover.tsx` | Popover panels | Trigger-based, positioning |
| `tooltip.tsx` | Hover tooltips | Delayed display, positioning |

#### **Form Components**
| Component | Purpose | Features |
|-----------|---------|----------|
| `input.tsx` | Text inputs | Validation states, icons |
| `textarea.tsx` | Multi-line text | Auto-resize, character count |
| `select.tsx` | Dropdown selection | Search, multi-select |
| `checkbox.tsx` | Checkboxes | Indeterminate state, grouping |
| `switch.tsx` | Toggle switches | Animated, accessibility |

#### **Data Display**
| Component | Purpose | Features |
|-----------|---------|----------|
| `table.tsx` | Data tables | Sorting, filtering, pagination |
| `card.tsx` | Content cards | Multiple variants, hover effects |
| `badge.tsx` | Status badges | Color variants, sizes |
| `avatar.tsx` | User avatars | Fallbacks, sizes, grouping |
| `chart.tsx` | Data visualization | Multiple chart types |

#### **Navigation Components**
| Component | Purpose | Features |
|-----------|---------|----------|
| `navigation-menu.tsx` | Main navigation | Dropdown support, responsive |
| `breadcrumb.tsx` | Breadcrumb navigation | Separators, links |
| `tabs.tsx` | Tab interface | Keyboard navigation, lazy loading |
| `accordion.tsx` | Collapsible content | Single/multiple open, animations |

#### **Specialized Components**

##### **Dynamic Island (`DynamicIsland/`)**
iOS-style dynamic island component:
- `IslandController.tsx` - Main controller
- `IslandLayout.tsx` - Layout management
- `variants/` - Different island states:
  - `atlanta.tsx` - Location-based
  - `faceid.tsx` - Authentication
  - `hello.tsx` - Greeting
  - `work.tsx` - Work status

##### **iOS Chat (`ios-chat.tsx`)**
iPhone-style messaging interface:
- Message bubbles
- Typing indicators
- Timestamp display
- Send button animations

##### **Animation Components**
| Component | Purpose | Features |
|-----------|---------|----------|
| `animated-dynamic-island.tsx` | Animated dynamic island | State transitions, morphing |
| `animated-logo.tsx` | Animated logo | SVG animations, hover effects |
| `animated-tooltip.tsx` | Animated tooltips | Smooth transitions, delays |
| `text-animate.tsx` | Text animations | Typewriter, fade-in effects |
| `text-scramble.tsx` | Text scrambling | Character scrambling effects |
| `typing-animation.tsx` | Typing indicators | Cursor animation, speed control |

##### **Layout Effects**
| Component | Purpose | Features |
|-----------|---------|----------|
| `blur-fade.tsx` | Blur fade effects | Background blur, fade transitions |
| `bounce-cards.tsx` | Bouncing card effects | Physics-based animations |
| `retro-grid.tsx` | Retro grid background | Animated grid patterns |
| `stacked-cards.tsx` | Stacked card layout | 3D stacking effects |

### **Usage Patterns**

#### **Basic Component Usage**
```tsx
import { Button, Card, Dialog } from '@/components/ui';

function ExampleComponent() {
  return (
    <Card>
      <h2>Example</h2>
      <Button variant="primary">Click me</Button>
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>Content</Dialog.Content>
      </Dialog>
    </Card>
  );
}
```

#### **Compound Components**
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

function TabbedInterface() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}
```

#### **Animation Components**
```tsx
import { TextAnimate, AnimatedLogo } from '@/components/ui';

function AnimatedSection() {
  return (
    <div>
      <AnimatedLogo />
      <TextAnimate 
        text="Welcome to my portfolio"
        type="typewriter"
        speed={100}
      />
    </div>
  );
}
```

---

## 🎯 **Component Design Patterns**

### **1. Compound Component Pattern**
```tsx
// Complex components split into multiple parts
<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
```

### **2. Render Props Pattern**
```tsx
// Flexible component composition
<DataProvider>
  {({ data, loading, error }) => (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {data && <DataDisplay data={data} />}
    </div>
  )}
</DataProvider>
```

### **3. Custom Hook Pattern**
```tsx
// Reusable logic extraction
function useApiData(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // API logic
  }, [url]);
  
  return { data, loading, error };
}
```

### **4. Context Provider Pattern**
```tsx
// State management across components
<ThemeProvider>
  <UserProvider>
    <App />
  </UserProvider>
</ThemeProvider>
```

---

## 🎨 **Styling & Theming**

### **CSS-in-JS with Tailwind**
```tsx
// Utility-first approach
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    Title
  </h1>
  <Button variant="outline" size="sm">
    Action
  </Button>
</div>
```

### **CSS Variables for Theming**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
}
```

### **Component Variants**
```tsx
// Using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

---

## 🔧 **Component Development Guidelines**

### **1. Component Structure**
```tsx
// Standard component structure
interface ComponentProps {
  // Props interface
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    <div className="component-class">
      {/* JSX */}
    </div>
  );
}
```

### **2. TypeScript Best Practices**
```tsx
// Proper typing
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

// Generic components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
```

### **3. Accessibility Guidelines**
```tsx
// ARIA attributes and keyboard navigation
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  Close
</button>
```

### **4. Performance Optimization**
```tsx
// Memoization for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => 
    processLargeDataset(data), [data]
  );
  
  return <div>{/* Render */}</div>;
});

// Lazy loading for heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

---

## 📱 **Responsive Design Patterns**

### **Mobile-First Approach**
```tsx
// Tailwind responsive classes
<div className="
  w-full p-4
  sm:w-auto sm:p-6
  md:w-1/2 md:p-8
  lg:w-1/3 lg:p-10
  xl:w-1/4 xl:p-12
">
  Content
</div>
```

### **Conditional Rendering**
```tsx
// Different components for different screen sizes
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
```

---

## 🧪 **Testing Components**

### **Component Testing Structure**
```tsx
// Test file structure
describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

---

This component architecture provides a solid foundation for building consistent, accessible, and maintainable UI components throughout the portfolio application.
