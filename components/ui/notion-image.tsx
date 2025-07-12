'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface NotionImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  fallbackSrc?: string;
}

export function NotionImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes,
  fill = false,
  fallbackSrc,
  ...props
}: NotionImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Generar URL de fallback basada en el alt text
  const generateFallbackSrc = (altText: string): string => {
    // Convertir el alt text a un posible nombre de archivo
    const fileName = altText
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .trim();
    
    return `/projects/${fileName}.jpg`;
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      
      // Intentar con fallback proporcionado
      if (fallbackSrc && fallbackSrc !== imageSrc) {
        console.log(`🔄 Intentando fallback: ${fallbackSrc}`);
        setImageSrc(fallbackSrc);
        setIsLoading(true);
        return;
      }
      
      // Intentar con imagen generada automáticamente
      const autoFallback = generateFallbackSrc(alt);
      if (autoFallback !== imageSrc) {
        console.log(`🔄 Intentando fallback automático: ${autoFallback}`);
        setImageSrc(autoFallback);
        setIsLoading(true);
        return;
      }
      
      // Último recurso: placeholder
      console.log('⚠️  Usando placeholder final');
      setImageSrc('/placeholder.svg');
      setIsLoading(true);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    console.log(`✅ Imagen cargada: ${imageSrc}`);
  };

  // Reset error state when src changes
  useEffect(() => {
    setHasError(false);
    setImageSrc(src);
    setIsLoading(true);
    console.log(`🖼️  Cargando imagen: ${src}`);
  }, [src]);

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center z-10",
            className
          )}
        >
          <div className="text-gray-400 text-sm">
            Cargando...
          </div>
        </div>
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading && "opacity-0",
          hasError && "opacity-75",
          className
        )}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        fill={fill}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
      
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center p-4">
            <div className="text-gray-400 text-sm mb-2">
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">
              Imagen no disponible
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Hook para precargar imágenes
export function useImagePreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
    img.src = src;
  }, [src]);

  return { isLoaded, hasError };
}
