import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ImageInfo {
  id: string;
  url: string;
  page: string;
  src: string;
  alt?: string;
  fileName: string;
  localPath: string;
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Scan the local codebase for images
    // This is more reliable than web scraping and allows us to update files directly
    const images = await scanLocalCodebase();

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error scanning images:', error);
    return NextResponse.json(
      { error: 'Failed to scan images' },
      { status: 500 }
    );
  }
}

async function scanLocalCodebase(): Promise<ImageInfo[]> {
  const images: ImageInfo[] = [];
  const publicDir = path.join(process.cwd(), 'public', 'images');
  
  // Define page mappings based on image paths
  const pageMappings: Record<string, string> = {
    'wip/home': 'home',
    'wip/about': 'about',
    'syn-highlights': 'highlights',
    'nav-highlights': 'highlights',
    'wip': 'home',
  };

  // Recursively scan the images directory
  const scanDirectory = (dir: string, relativePath: string = ''): void => {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const relativeFilePath = path.join(relativePath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath, relativeFilePath);
      } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
        // Determine page based on path
        let page = 'unknown';
        for (const [key, pageName] of Object.entries(pageMappings)) {
          if (relativeFilePath.includes(key)) {
            page = pageName;
            break;
          }
        }

        const imageSrc = `/images/${relativeFilePath}`;
        const imageInfo: ImageInfo = {
          id: `${relativeFilePath}-${file}`,
          url: imageSrc,
          page,
          src: imageSrc,
          fileName: file,
          localPath: fullPath,
        };

        images.push(imageInfo);
      }
    });
  };

  scanDirectory(publicDir);

  // Also scan component files to find image references
  const componentFiles = [
    'src/app/(routes)/wip/main/core/home',
    'src/app/(routes)/wip/main/core/about',
    'src/app/(routes)/wip/main/core/highlights',
  ];

  componentFiles.forEach((componentDir) => {
    const fullDir = path.join(process.cwd(), componentDir);
    if (fs.existsSync(fullDir)) {
      scanComponentFiles(fullDir, images);
    }
  });

  return images;
}

function scanComponentFiles(dir: string, images: ImageInfo[]): void {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanComponentFiles(fullPath, images);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const imageRegex = /src=["']([^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi;
      let match;

      while ((match = imageRegex.exec(content)) !== null) {
        const imageSrc = match[1];
        if (imageSrc.startsWith('/images/')) {
          // Check if we already have this image
          const existingImage = images.find(img => img.src === imageSrc);
          if (!existingImage) {
            const fileName = path.basename(imageSrc);
            const page = dir.includes('home') ? 'home' : 
                        dir.includes('about') ? 'about' :
                        dir.includes('highlights') ? 'highlights' : 'unknown';
            
            const imageInfo: ImageInfo = {
              id: `${imageSrc}-${Date.now()}`,
              url: imageSrc,
              page,
              src: imageSrc,
              fileName,
              localPath: path.join(process.cwd(), 'public', imageSrc),
            };

            images.push(imageInfo);
          }
        }
      }
    }
  });
}

