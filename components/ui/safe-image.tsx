import Image, { ImageProps } from 'next/image';
import { getNotionImageUrl, isNotionImageUrl } from '@/lib/notion-image';
import { useState } from 'react';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

/**
 * A wrapper around Next.js Image component that automatically handles
 * Notion image URLs by proxying them through our API endpoint
 */
export function SafeImage({ src, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Process the image URL if it's from Notion
  const processedSrc = isNotionImageUrl(imgSrc) ? getNotionImageUrl(imgSrc) : imgSrc;

  const handleError = () => {
    if (!hasError) {
      console.log('Image failed to load:', processedSrc);
      setHasError(true);
      // Try fallback to placeholder
      setImgSrc('/placeholder.svg');
    }
  };

  return (
    <Image
      src={processedSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
