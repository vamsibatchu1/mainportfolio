import { NextRequest, NextResponse } from 'next/server';
import { dynamicPaths } from '../app/dynamic-paths';

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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}; 