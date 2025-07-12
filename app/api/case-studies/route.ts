import { NextResponse } from 'next/server';
import { fetchCaseStudies } from '@/lib/notion';
import { projects as staticProjects } from '@/data/projects';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Intentar obtener proyectos de Notion
    const notionProjects = await fetchCaseStudies();
    
    if (notionProjects && notionProjects.length > 0) {
      console.log('✅ Usando proyectos de Notion');
      return NextResponse.json({ projects: notionProjects });
    }
    
    // Fallback a proyectos estáticos
    console.log('⚠️  Notion no disponible, usando proyectos estáticos');
    return NextResponse.json({ projects: staticProjects });
    
  } catch (error) {
    console.error('API Error:', error);
    
    // Fallback a proyectos estáticos en caso de error
    console.log('⚠️  Error en Notion, usando proyectos estáticos');
    return NextResponse.json({ projects: staticProjects });
  }
}
