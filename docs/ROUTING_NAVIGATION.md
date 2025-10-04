# Routing & Navigation Guide

## 🗺️ **Routing Architecture Overview**

This document provides a comprehensive guide to the routing and navigation system in the Vamsi Batchu Portfolio.

---

## 🏗️ **Next.js App Router Structure**

### **Route Groups & Organization**

```
src/app/
├── 📁 (archive)/                 # Route Group - Legacy/Archive Content
│   ├── actionbar-content/        # Not a route - component content
│   ├── animations/               # Not a route - animation assets
│   ├── mobile/                   # Mobile-specific components
│   └── productshots/             # Not a route - product assets
├── 📁 (routes)/                  # Route Group - Main Application Routes
│   ├── about/                    # /about route
│   ├── highlights/               # /highlights route
│   ├── home/                     # /home route
│   ├── play/                     # /play route
│   ├── work/                     # /work route
│   ├── work-tab/                 # /work-tab route
│   └── writing/                  # /writing route
├── 📁 api/                       # API Routes (not pages)
│   ├── chat/                     # /api/chat endpoint
│   └── dummy/                    # /api/dummy endpoint
├── 📄 layout.tsx                 # Root layout
├── 📄 page.tsx                   # Root route (/)
└── 📄 middleware.ts              # Route middleware
```

---

## 🎯 **Route Definitions & URLs**

### **Public Routes**

| Route | URL | Component | Purpose |
|-------|-----|-----------|---------|
| **Root** | `/` | `page.tsx` | Welcome screen with loading animation |
| **Home** | `/home` | `(routes)/home/page.tsx` | Main portfolio homepage |
| **About** | `/about` | `(routes)/about/page.tsx` | Personal information & bio |
| **Highlights** | `/highlights` | `(routes)/highlights/page.tsx` | Portfolio highlights showcase |
| **Work** | `/work` | `(routes)/work/page.tsx` | Professional work showcase |
| **Work Tab** | `/work-tab` | `(routes)/work-tab/WorkTab.tsx` | Interactive work interface |
| **Play** | `/play` | `(routes)/play/page.tsx` | Interactive terminal/playground |
| **Writing** | `/writing` | `(routes)/writing/page.tsx` | Blog/writing section |

### **Nested Routes**

| Route | URL | Component | Purpose |
|-------|-----|-----------|---------|
| **About Slack** | `/about/slack` | `(routes)/about/slack/page.tsx` | Slack-style about interface |

### **API Routes**

| Route | URL | Method | Purpose |
|-------|-----|--------|---------|
| **Chat API** | `/api/chat` | POST | AI chat functionality |
| **Dummy API** | `/api/dummy` | POST | Testing/development endpoint |

---

## 🚀 **Route Configuration**

### **Next.js Configuration (`next.config.js`)**

```javascript
const nextConfig = {
  // Image optimization domains
  images: {
    domains: [
      'images.unsplash.com',
      'assets.dub.co',
      'blog-interaction.vercel.app',
      'placehold.co',
      'images.pexels.com'
    ],
  },
  
  // URL rewrites - redirect root to home
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  
  // URL redirects
  async redirects() {
    return [
      {
        source: '/home-new',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};
```

### **Middleware Configuration (`src/app/middleware.ts`)**

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { dynamicPaths } from './config/dynamic-paths';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the current path is in our dynamicPaths list
  const isDynamic = dynamicPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  );
  
  // If this is a dynamic path, add headers to force dynamic rendering
  if (isDynamic) {
    const response = NextResponse.next();
    response.headers.set('x-nextjs-data', 'true');
    response.headers.set('x-middleware-force-dynamic', '1');
    return response;
  }
  
  return NextResponse.next();
}

// Configure middleware to run on all pages
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
```

### **Dynamic Paths Configuration (`src/app/config/dynamic-paths.ts`)**

```typescript
export const dynamicPaths = [
  '/play',
  '/work-tab',
  '/about/slack',
  // Add other paths that should be dynamically rendered
];
```

---

## 🧭 **Navigation Components**

### **Main Navigation (`src/app/components/main-nav.tsx`)**

```typescript
const NAVBAR_DATA = {
  navbar: [
    { href: "/home", icon: HomeIcon, label: "Home" },
    { href: "/casestudies", icon: FolderOpen, label: "Case Studies" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
    { href: "/about", icon: UserIcon, label: "About Me" }
  ],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vamsikbatchu",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "mailto:vamsibatchuk@gmail.com",
        icon: Icons.email,
      },
    },
  },
};
```

### **Route-Based Navigation Patterns**

#### **1. Programmatic Navigation**
```typescript
import { useRouter } from 'next/navigation';

function NavigationComponent() {
  const router = useRouter();
  
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  
  return (
    <button onClick={() => handleNavigation('/home')}>
      Go to Home
    </button>
  );
}
```

#### **2. Link-Based Navigation**
```typescript
import Link from 'next/link';

function NavigationLinks() {
  return (
    <nav>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/work">Work</Link>
      <Link href="/play">Play</Link>
    </nav>
  );
}
```

#### **3. Conditional Navigation**
```typescript
function ConditionalNavigation() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleNavigation = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };
  
  return (
    <button onClick={handleNavigation}>
      {isAuthenticated ? 'Dashboard' : 'Login'}
    </button>
  );
}
```

---

## 📱 **Route Components Structure**

### **Home Route (`src/app/(routes)/home/`)**

```
home/
├── 📁 components/                # Home-specific components
│   ├── 1_home_hero.tsx          # Hero section
│   ├── 2_home_highlights.tsx    # Highlights section
│   ├── 3_home_casestudy1.tsx    # Case study 1
│   ├── 4_home_casestudy2.tsx    # Case study 2
│   ├── 5_home_casestudy3.tsx    # Case study 3
│   └── index.ts                 # Component exports
├── 📄 page.tsx                  # Home page component
└── 📄 home_components.md        # Component documentation
```

### **Play Route (`src/app/(routes)/play/`)**

```
play/
├── 📁 terminal/                 # Terminal/playground components
│   ├── 📁 components/           # Terminal components
│   │   ├── Terminal.tsx         # Main terminal component
│   │   ├── ChatArea.tsx         # Chat interface
│   │   ├── dock.tsx             # macOS-style dock
│   │   └── ... (15 more files)
│   ├── 📁 services/             # Terminal services
│   │   └── gemini.ts            # Gemini AI integration
│   └── 📄 page.tsx              # Terminal page
└── 📄 page.tsx                  # Play route entry point
```

### **Work Tab Route (`src/app/(routes)/work-tab/`)**

```
work-tab/
├── chat-interface.tsx           # Chat interface component
├── chatbot.tsx                  # Chatbot implementation
├── editor.tsx                   # Rich text editor
├── nodes.ts                     # Editor node definitions
├── plugins.tsx                  # Editor plugins
└── WorkTab.tsx                  # Main work tab component
```

---

## 🎭 **Route Animations & Transitions**

### **Page Transition System**

#### **Framer Motion Integration**
```typescript
import { motion, AnimatePresence } from 'framer-motion';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
```

#### **Route-Based Animation Triggers**
```typescript
function RouteTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const handleRouteChangeStart = () => setIsTransitioning(true);
    const handleRouteChangeComplete = () => setIsTransitioning(false);
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  
  return (
    <AnimatePresence mode="wait">
      {isTransitioning && <LoadingSpinner />}
    </AnimatePresence>
  );
}
```

---

## 🔄 **Route State Management**

### **URL State Synchronization**
```typescript
function useUrlState<T>(key: string, defaultValue: T) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [state, setState] = useState<T>(() => {
    const urlValue = searchParams.get(key);
    return urlValue ? JSON.parse(urlValue) : defaultValue;
  });
  
  const updateState = (newState: T) => {
    setState(newState);
    const params = new URLSearchParams(searchParams);
    params.set(key, JSON.stringify(newState));
    router.push(`?${params.toString()}`);
  };
  
  return [state, updateState] as const;
}
```

### **Route-Based Data Fetching**
```typescript
function useRouteData() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/data/${router.query.id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
  
  return { data, loading };
}
```

---

## 🛡️ **Route Protection & Guards**

### **Authentication Guards**
```typescript
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const { authenticated } = await response.json();
        setIsAuthenticated(authenticated);
        
        if (!authenticated) {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);
  
  if (loading) return <LoadingSpinner />;
  if (!isAuthenticated) return null;
  
  return <>{children}</>;
}
```

### **Route-Based Permissions**
```typescript
function useRoutePermissions() {
  const router = useRouter();
  const [permissions, setPermissions] = useState<string[]>([]);
  
  const hasPermission = (permission: string) => {
    return permissions.includes(permission);
  };
  
  const canAccessRoute = (route: string) => {
    const routePermissions = getRoutePermissions(route);
    return routePermissions.every(permission => hasPermission(permission));
  };
  
  return { permissions, hasPermission, canAccessRoute };
}
```

---

## 📊 **Route Analytics & Tracking**

### **Page View Tracking**
```typescript
function usePageTracking() {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page view
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_TRACKING_ID', {
          page_path: url,
        });
      }
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
}
```

### **Route Performance Monitoring**
```typescript
function useRoutePerformance() {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChangeStart = () => {
      performance.mark('route-change-start');
    };
    
    const handleRouteChangeComplete = () => {
      performance.mark('route-change-end');
      performance.measure('route-change', 'route-change-start', 'route-change-end');
      
      const measure = performance.getEntriesByName('route-change')[0];
      console.log(`Route change took ${measure.duration}ms`);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
}
```

---

## 🎯 **Navigation Best Practices**

### **1. Consistent Navigation Patterns**
```typescript
// Use consistent navigation structure
const navigationItems = [
  { href: '/home', label: 'Home', icon: HomeIcon },
  { href: '/about', label: 'About', icon: UserIcon },
  { href: '/work', label: 'Work', icon: BriefcaseIcon },
  { href: '/play', label: 'Play', icon: PlayIcon },
];
```

### **2. Accessible Navigation**
```typescript
function AccessibleNavigation() {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href}
              aria-current={router.pathname === item.href ? 'page' : undefined}
            >
              <item.icon aria-hidden="true" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### **3. Mobile Navigation**
```typescript
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mobile-nav">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <HamburgerIcon />
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
```

### **4. Breadcrumb Navigation**
```typescript
function BreadcrumbNavigation() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);
  
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          
          return (
            <li key={href}>
              {isLast ? (
                <span aria-current="page">{segment}</span>
              ) : (
                <Link href={href}>{segment}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
```

---

## 🔧 **Route Development Guidelines**

### **1. Route Component Structure**
```typescript
// Standard route component structure
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: PageProps) {
  // Component logic
  
  return (
    <div className="page-container">
      {/* Page content */}
    </div>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

### **2. Dynamic Routes**
```typescript
// Dynamic route: [slug]/page.tsx
interface DynamicPageProps {
  params: { slug: string };
}

export default function DynamicPage({ params }: DynamicPageProps) {
  return (
    <div>
      <h1>Dynamic Page: {params.slug}</h1>
    </div>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}
```

### **3. Route Loading States**
```typescript
function RouteWithLoading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  
  return (
    <>
      {loading && <LoadingSpinner />}
      {/* Route content */}
    </>
  );
}
```

---

This routing and navigation system provides a robust foundation for building a modern, accessible, and performant single-page application with the Next.js App Router.
