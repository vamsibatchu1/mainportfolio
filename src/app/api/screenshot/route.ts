import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');
    
    if (!url) {
      return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Set viewport for consistent screenshots
    await page.setViewport({ 
      width: 1200, 
      height: 800,
      deviceScaleFactor: 1
    });

    // Navigate to the URL with timeout
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 10000 
    });

    // Take screenshot
    const screenshot = await page.screenshot({ 
      type: 'png',
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 800
      }
    });

    await browser.close();

    // Return the screenshot as a response
    return new NextResponse(screenshot, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Screenshot error:', error);
    return NextResponse.json({ error: 'Failed to take screenshot' }, { status: 500 });
  }
}
