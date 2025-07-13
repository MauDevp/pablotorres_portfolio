import { NextResponse } from 'next/server';
import { fetchCaseStudyBySlug } from '@/lib/notion';
import { projects as staticProjects } from '@/data/projects';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Intentar obtener proyecto de Notion
    let project = await fetchCaseStudyBySlug(slug);
    
    if (project) {
      console.log('✅ Usando proyecto de Notion:', slug);
      return NextResponse.json({ project });
    }
    
    // Fallback a proyectos estáticos
    console.log('⚠️  Notion no disponible, buscando en proyectos estáticos:', slug);
    project = staticProjects.find(p => p.slug === slug);
    
    if (project) {
      console.log('✅ Proyecto encontrado en estáticos:', slug);
      return NextResponse.json({ project });
    }
    
    // No encontrado en ninguna fuente
    return NextResponse.json(
      { 
        error: 'Caso de estudio no encontrado.',
        message: 'Case study not found.'
      },
      { status: 404 }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    
    // Fallback a proyectos estáticos en caso de error
    console.log('⚠️  Error en Notion, buscando en proyectos estáticos:', params.slug);
    const project = staticProjects.find(p => p.slug === params.slug);
    
    if (project) {
      console.log('✅ Proyecto encontrado en estáticos (fallback):', params.slug);
      return NextResponse.json({ project });
    }
    
    return NextResponse.json(
      { 
        error: 'Servicio temporalmente no disponible. Por favor, intenta más tarde.',
        message: 'Service temporarily unavailable. Please try again later.'
      },
      { status: 500 }
    );
  }
}
