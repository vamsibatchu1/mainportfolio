# Deployment & Configuration Guide

## 🚀 **Deployment Overview**

This document provides comprehensive guidance for deploying and configuring the Vamsi Batchu Portfolio application.

---

## 🌐 **Deployment Platforms**

### **Primary Platform: Vercel**

The portfolio is primarily designed for deployment on Vercel, leveraging Next.js optimization features.

#### **Vercel Configuration (`vercel.json`)**

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "framework": "nextjs",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "build": {
    "env": {
      "NODE_ENV": "production",
      "NEXT_PUBLIC_VERCEL_ENV": "production",
      "NEXT_PRIVATE_SKIP_STATIC_GENERATION_DURING_BUILD": "true"
    }
  }
}
```

#### **Deployment Steps**

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy from project directory
   vercel
   ```

2. **Environment Variables Setup**
   ```bash
   # Set environment variables via Vercel dashboard or CLI
   vercel env add GEMINI_API_KEY
   vercel env add NEXT_PUBLIC_GEMINI_API_KEY
   vercel env add NEXT_PUBLIC_APP_URL
   ```

3. **Custom Domain Configuration**
   ```bash
   # Add custom domain
   vercel domains add yourdomain.com
   ```

---

## 🔧 **Build Configuration**

### **Next.js Configuration (`next.config.js`)**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile packages that need special handling
  transpilePackages: ['gsap'],
  
  // Webpack configuration for GSAP
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'gsap/MorphSVGPlugin': 'gsap/dist/MorphSVGPlugin'
    };
    return config;
  },
  
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
  
  // URL rewrites
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
  
  // Output configuration for static export
  output: 'export', // Uncomment for static export
  trailingSlash: true, // Uncomment for static export
  images: {
    unoptimized: true, // Uncomment for static export
  },
};

module.exports = nextConfig;
```

### **Build Scripts (`package.json`)**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "build:static": "next build && next export",
    "analyze": "cross-env ANALYZE=true next build",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🔐 **Environment Variables**

### **Required Environment Variables**

#### **Development (`.env.local`)**
```bash
# API Keys
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Application Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=/api

# Feature Flags
NEXT_PUBLIC_ENABLE_AI_CHAT=true
NEXT_PUBLIC_ENABLE_EXPERIMENTS=true

# Development
NEXT_PUBLIC_DEBUG=true
```

#### **Production Environment Variables**
```bash
# API Keys (Server-side)
GEMINI_API_KEY=your_production_gemini_api_key

# API Keys (Client-side)
NEXT_PUBLIC_GEMINI_API_KEY=your_production_gemini_api_key

# Application Configuration
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=/api

# Feature Flags
NEXT_PUBLIC_ENABLE_AI_CHAT=true
NEXT_PUBLIC_ENABLE_EXPERIMENTS=false

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id

# Performance Monitoring
NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING=true
```

### **Environment Variable Validation**

```typescript
// src/lib/validations/env.ts
import { z } from 'zod';

const envSchema = z.object({
  GEMINI_API_KEY: z.string().min(1, 'Gemini API key is required'),
  NEXT_PUBLIC_GEMINI_API_KEY: z.string().min(1, 'Public Gemini API key is required'),
  NEXT_PUBLIC_APP_URL: z.string().url('Valid app URL is required'),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

export const env = envSchema.parse(process.env);
```

---

## 🏗️ **Build Optimization**

### **Static Export Configuration**

For static hosting (GitHub Pages, Netlify, etc.):

```javascript
// next.config.js - Static Export
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server-side features
  experimental: {
    appDir: true,
  },
};
```

### **Build Performance Optimization**

```javascript
// next.config.js - Performance optimizations
const nextConfig = {
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Bundle analyzer (development only)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
      return config;
    },
  }),
};
```

### **Image Optimization**

```javascript
// next.config.js - Image optimization
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

---

## 📱 **Deployment Strategies**

### **1. Vercel Deployment**

#### **Automatic Deployment**
```bash
# Connect to Vercel
vercel --prod

# Set up automatic deployments
# Connect GitHub repository in Vercel dashboard
```

#### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### **2. Static Export Deployment**

#### **GitHub Pages**
```bash
# Build static export
npm run build:static

# Deploy to GitHub Pages
# Push out/ directory to gh-pages branch
```

#### **Netlify**
```bash
# Build command
npm run build:static

# Publish directory
out/

# Environment variables
# Set in Netlify dashboard
```

### **3. Docker Deployment**

#### **Dockerfile**
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### **Docker Compose**
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - GEMINI_API_KEY=${GEMINI_API_KEY}
    volumes:
      - ./public:/app/public
```

---

## 🔍 **Performance Monitoring**

### **Core Web Vitals Monitoring**

```typescript
// src/lib/analytics/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}
```

### **Performance Monitoring Setup**

```typescript
// src/app/layout.tsx
import { reportWebVitals } from '@/lib/analytics/web-vitals';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 🛡️ **Security Configuration**

### **Content Security Policy**

```typescript
// src/app/layout.tsx
export const metadata = {
  title: 'Vamsi Batchu | Portfolio',
  description: 'Product Design Leader Portfolio',
  other: {
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src 'self' https://api.generativeai.google.com;
    `,
  },
};
```

### **Security Headers**

```javascript
// next.config.js - Security headers
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

---

## 📊 **Analytics & Monitoring**

### **Google Analytics Setup**

```typescript
// src/lib/analytics/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

### **Error Monitoring**

```typescript
// src/lib/monitoring/error-tracking.ts
export function reportError(error: Error, context?: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', error, 'Context:', context);
  }
  
  // Send to monitoring service in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry, LogRocket, etc.
    // Sentry.captureException(error, { extra: context });
  }
}
```

---

## 🧪 **Testing in Production**

### **Health Check Endpoint**

```typescript
// src/app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check database connection
    // Check external API connections
    // Check critical services
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
```

### **Environment Validation**

```typescript
// src/lib/validation/env-check.ts
export function validateEnvironment() {
  const requiredEnvVars = [
    'GEMINI_API_KEY',
    'NEXT_PUBLIC_GEMINI_API_KEY',
    'NEXT_PUBLIC_APP_URL',
  ];
  
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
  
  return true;
}
```

---

## 🔄 **CI/CD Pipeline**

### **GitHub Actions Workflow**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
      
      - name: Run tests
        run: npm test
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 📋 **Deployment Checklist**

### **Pre-Deployment**

- [ ] Environment variables configured
- [ ] API keys secured and valid
- [ ] Build passes without errors
- [ ] Tests pass
- [ ] Linting passes
- [ ] Type checking passes
- [ ] Performance budget met
- [ ] Security headers configured

### **Post-Deployment**

- [ ] Site loads correctly
- [ ] All routes accessible
- [ ] API endpoints working
- [ ] Analytics tracking
- [ ] Error monitoring active
- [ ] Performance monitoring active
- [ ] SSL certificate valid
- [ ] CDN configuration correct

### **Monitoring**

- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] Error tracking
- [ ] Analytics data
- [ ] Security monitoring
- [ ] Backup strategy

---

## 🚨 **Troubleshooting**

### **Common Deployment Issues**

#### **Build Failures**
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

#### **Environment Variable Issues**
```bash
# Verify environment variables
vercel env ls

# Update environment variables
vercel env add VARIABLE_NAME
```

#### **Performance Issues**
```bash
# Analyze bundle size
npm run analyze

# Check Core Web Vitals
lighthouse https://yourdomain.com
```

### **Debug Mode**

```typescript
// Enable debug mode in production
const DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true';

if (DEBUG) {
  console.log('Debug information:', {
    environment: process.env.NODE_ENV,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    // Add more debug info
  });
}
```

---

This deployment guide ensures a smooth, secure, and performant deployment process for the Vamsi Batchu Portfolio application across different platforms and environments.
