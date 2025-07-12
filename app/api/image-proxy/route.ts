import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    console.log('🔄 Image proxy request for:', imageUrl);

    if (!imageUrl) {
      console.log('❌ Missing image URL parameter');
      return new NextResponse('Missing image URL', { status: 400 });
    }

    // Decode the URL in case it's encoded
    const decodedUrl = decodeURIComponent(imageUrl);
    console.log('🔍 Decoded URL:', decodedUrl);

    // Validate URL
    if (!decodedUrl.startsWith('http://') && !decodedUrl.startsWith('https://')) {
      console.log('❌ Invalid URL format:', decodedUrl);
      return new NextResponse('Invalid URL format', { status: 400 });
    }

    // Fetch the image from the original URL with proper headers
    console.log('🌐 Fetching image from:', decodedUrl.substring(0, 100) + '...');
    
    const imageResponse = await fetch(decodedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });

    console.log('📊 Image response status:', imageResponse.status, imageResponse.statusText);
    console.log('📄 Content-Type:', imageResponse.headers.get('content-type'));
    console.log('📏 Content-Length:', imageResponse.headers.get('content-length'));

    if (!imageResponse.ok) {
      console.log('❌ Failed to fetch image:', imageResponse.status, imageResponse.statusText);
      
      // Try to get error details
      const errorText = await imageResponse.text();
      console.log('📝 Error response:', errorText.substring(0, 200));
      
      return new NextResponse(`Failed to fetch image: ${imageResponse.status} ${imageResponse.statusText}`, { 
        status: imageResponse.status 
      });
    }

    // Get the image data
    const imageBuffer = await imageResponse.arrayBuffer();
    console.log('✅ Image fetched successfully, size:', imageBuffer.byteLength, 'bytes');

    // Get the content type from the original response
    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';

    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // 24 hours instead of 1 year for Notion images
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('❌ Image proxy error:', error);
    return new NextResponse(`Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}`, { 
      status: 500 
    });
  }
}
