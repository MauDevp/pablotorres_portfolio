"use client";

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  fallbackSrc?: string;
  aspectRatio?: number;
  eager?: boolean;
}

// Shimmer effect for loading state
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = '/placeholder.jpg',
  aspectRatio,
  eager = false,
  priority = false,
  quality = 85,
  sizes,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate placeholder
  const placeholderDataUrl = `data:image/svg+xml;base64,${toBase64(
    shimmer(Number(width) || 700, Number(height) || 475)
  )}`;

  // Handle intersection observer for lazy loading
  useEffect(() => {
    if (priority || eager) {
      setIsInView(true);
      return;
    }

    const img = document.querySelector(`img[data-src="${src}"]`);
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, [src, priority, eager]);

  // Calculate sizes if not provided
  const calculateSizes = () => {
    if (sizes) return sizes;
    
    // Default responsive sizes
    return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`;
  };

  // Handle image error
  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  // Aspect ratio container styles
  const containerStyles = aspectRatio
    ? { paddingBottom: `${(1 / aspectRatio) * 100}%` }
    : {};

  const imageElement = (
    <Image
      src={isInView ? imgSrc : placeholderDataUrl}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-0' : 'opacity-100',
        className
      )}
      quality={quality}
      sizes={calculateSizes()}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="blur"
      blurDataURL={placeholderDataUrl}
      onLoad={() => setIsLoading(false)}
      onError={handleError}
      data-src={src}
      {...props}
    />
  );

  if (aspectRatio) {
    return (
      <div className="relative overflow-hidden" style={containerStyles}>
        <div className="absolute inset-0">
          {imageElement}
        </div>
      </div>
    );
  }

  return imageElement;
}

// Preload critical images
export function preloadImage(src: string) {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

// Utility to generate optimized srcSet
export function generateSrcSet(src: string, sizes: number[]) {
  return sizes
    .map((size) => {
      const url = src.includes('?') 
        ? `${src}&w=${size}` 
        : `${src}?w=${size}`;
      return `${url} ${size}w`;
    })
    .join(', ');
}
