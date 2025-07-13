import { NextResponse } from 'next/server';
import { fetchCaseStudies } from '@/lib/notion';
import { projects as staticProjects } from '@/data/projects';

// ISR Configuration - Revalidate every 3600 seconds (1 hour)
export const revalidate = 3600;

export async function GET() {
  try {
    // Intentar obtener proyectos de Notion
    const notionProjects = await fetchCaseStudies();
    
    if (notionProjects && notionProjects.length > 0) {
      console.log('✅ Usando proyectos de Notion');
      
      // Create response with proper caching headers
      const response = NextResponse.json({ 
        projects: notionProjects,
        source: 'notion',
        timestamp: new Date().toISOString()
      });
      
      // Add caching headers
      response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
      response.headers.set('CDN-Cache-Control', 'public, s-maxage=3600');
      response.headers.set('Vercel-CDN-Cache-Control', 'public, s-maxage=3600');
      
      return response;
    }
    
    // Fallback a proyectos estáticos
    console.log('⚠️  Notion no disponible, usando proyectos estáticos');
    
    const response = NextResponse.json({ 
      projects: staticProjects,
      source: 'static',
      timestamp: new Date().toISOString()
    });
    
    // Add caching headers for static fallback
    response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    response.headers.set('CDN-Cache-Control', 'public, s-maxage=1800');
    response.headers.set('Vercel-CDN-Cache-Control', 'public, s-maxage=1800');
    
    return response;
    
  } catch (error) {
    console.error('❌ API Error:', error);
    
    // Enhanced error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const isNotionError = errorMessage.includes('Notion') || errorMessage.includes('API');
    
    // Log error details for debugging
    console.error('Error details:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      isNotionError
    });
    
    // Fallback a proyectos estáticos en caso de error
    console.log('⚠️  Error en Notion, usando proyectos estáticos como fallback');
    
    const response = NextResponse.json({ 
      projects: staticProjects,
      source: 'static-fallback',
      timestamp: new Date().toISOString(),
      error: {
        occurred: true,
        type: isNotionError ? 'notion_api_error' : 'general_error',
        message: 'Using static data as fallback due to API error'
      }
    });
    
    // Add caching headers for error fallback (shorter cache time)
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    response.headers.set('CDN-Cache-Control', 'public, s-maxage=300');
    response.headers.set('Vercel-CDN-Cache-Control', 'public, s-maxage=300');
    
    return response;
  }
}
