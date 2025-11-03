import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;
    const imageId = formData.get('imageId') as string;
    const localPath = formData.get('localPath') as string;

    if (!imageFile || !localPath) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure the directory exists
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Convert File to Buffer
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Write the new image file
    fs.writeFileSync(localPath, buffer);

    return NextResponse.json({
      success: true,
      message: 'Image replaced successfully',
      path: localPath,
    });
  } catch (error) {
    console.error('Error replacing image:', error);
    return NextResponse.json(
      { error: 'Failed to replace image' },
      { status: 500 }
    );
  }
}

