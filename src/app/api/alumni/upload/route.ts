import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || '';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || '';

export async function POST(request: Request) {
  try {
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { error: 'Cloudinary credentials are not configured on the server.' },
        { status: 500 }
      );
    }

    const data = await request.formData();
    const file = data.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
    }

    // Verify it is an image
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Uploaded file must be an image.' }, { status: 400 });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);
    
    // Sort parameters alphabetically to sign
    // Parameters used: timestamp
    const signatureStr = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const signature = createHash('sha1').update(signatureStr).digest('hex');

    // Create payload
    const uploadForm = new FormData();
    uploadForm.append('file', file);
    uploadForm.append('api_key', CLOUDINARY_API_KEY);
    uploadForm.append('timestamp', timestamp.toString());
    uploadForm.append('signature', signature);

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
    
    console.log('Uploading image to Cloudinary:', CLOUDINARY_CLOUD_NAME);
    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: uploadForm,
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Cloudinary API upload error:', result);
      return NextResponse.json(
        { error: result.error?.message || 'Failed to upload image to Cloudinary.' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      url: result.secure_url,
    });

  } catch (error: any) {
    console.error('Upload route error:', error);
    return NextResponse.json({ error: 'Internal Server Error during upload.' }, { status: 500 });
  }
}
