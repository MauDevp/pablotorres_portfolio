/**
 * Helper function to handle Notion image URLs
 * Converts Notion's temporary S3 URLs to use our proxy endpoint
 */
export function getNotionImageUrl(originalUrl: string): string {
  // Si no hay URL, retornar vacío
  if (!originalUrl || originalUrl.trim() === '') {
    return '';
  }
  
  // Si es una URL relativa o ya procesada, retornar como está
  if (originalUrl.startsWith('/')) {
    return originalUrl;
  }
  
  // Si no es una URL válida, retornar vacío
  if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
    return '';
  }
  
  // Si es una imagen de Notion/AWS, usar el proxy
  if (isNotionImageUrl(originalUrl)) {
    const encodedUrl = encodeURIComponent(originalUrl);
    return `/api/image-proxy?url=${encodedUrl}`;
  }
  
  // Para otras URLs externas, retornar como está
  return originalUrl;
}

/**
 * Check if a URL is a Notion image URL that needs proxying
 */
export function isNotionImageUrl(url: string): boolean {
  return url?.includes('prod-files-secure.s3.us-west-2.amazonaws.com') ||
    url.includes('s3.us-west-2.amazonaws.com') ||
    url.includes('amazonaws.com')
  );
}
