import { Client } from '@notionhq/client';
import type { Project } from '@/data/projects';
import { getNotionImageUrl } from '@/lib/notion-image';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY!,
});

// Extract database ID from the URL
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

interface NotionProjectData {
  id: string;
  properties: {
    [key: string]: any;
  };
}

// Helper function to extract text from Notion property
function extractText(property: any): string {
  if (!property) return '';
  
  if (property.rich_text?.length > 0) {
    return property.rich_text[0].plain_text || '';
  }
  if (property.title?.length > 0) {
    return property.title[0].plain_text || '';
  }
  if (property.select) {
    return property.select.name || '';
  }
  if (property.url) {
    return property.url || '';
  }
  if (property.files?.length > 0) {
    // Handle Notion file/image properties
    const file = property.files[0];
    if (file.type === 'external') {
      return file.external.url || '';
    } else if (file.type === 'file') {
      return file.file.url || '';
    }
  }
  return '';
}

// Helper function specifically for extracting image URLs
function extractImageUrl(property: any): string {
  if (!property) return '';
  
  // Si es un property de tipo 'files' (imagen subida a Notion)
  if (property.files?.length > 0) {
    const file = property.files[0];
    if (file.type === 'external') {
      return file.external.url || '';
    } else if (file.type === 'file') {
      return file.file.url || '';
    }
  }
  
  // Si es un property de tipo 'url' (URL externa)
  if (property.url) {
    return property.url || '';
  }
  
  // Si es un property de tipo 'rich_text' con una URL
  if (property.rich_text?.length > 0) {
    const text = property.rich_text[0].plain_text || '';
    // Verificar si el texto parece una URL
    if (text.startsWith('http://') || text.startsWith('https://')) {
      return text;
    }
  }
  
  return '';
}

// Helper function to extract array of strings from Notion property
function extractTextArray(property: any): string[] {
  if (!property || !property.rich_text) return [];
  
  const text = property.rich_text[0]?.plain_text || '';
  // Split by newline or semicolon
  return text.split(/[\n;]/).map((item: string) => item.trim()).filter(Boolean);
}

// Convert Notion data to Project format
function notionToProject(notionData: NotionProjectData): Project | null {
  try {
    const props = notionData.properties;
    
    return {
      id: extractText(props['ID']) || notionData.id,
      title: {
        en: extractText(props['Título en Inglés']) || extractText(props['Título']),
        es: extractText(props['Título']) || extractText(props['Título en Inglés']),
      },
      category: {
        en: extractText(props['Categoría en Inglés']) || extractText(props['Categoría']),
        es: extractText(props['Categoría']) || extractText(props['Categoría en Inglés']),
      },
      increase: {
        en: extractText(props['Porcentaje en Inglés']) || extractText(props['Porcentaje de Mejora']),
        es: extractText(props['Porcentaje de Mejora']) || extractText(props['Porcentaje en Inglés']),
      },
      slug: extractText(props['Slug']) || notionData.id,
      image: (() => {
        // Intentar extraer la imagen de diferentes propiedades
        const notionImageUrl = extractImageUrl(props['Imagen']) || extractText(props['Imagen']);
        const altImageUrl = extractImageUrl(props['imagen alternativa']) || extractText(props['imagen alternativa']);
        const fallbackImageUrl = extractImageUrl(props['Image']) || extractText(props['Image']);
        
        // Priorizar imagen alternativa si existe (más confiable)
        if (altImageUrl && altImageUrl.startsWith('/')) {
          return altImageUrl; // URL local, usar directamente
        }
        
        // Si hay imagen de Notion, usar el proxy
        if (notionImageUrl) {
          return getNotionImageUrl(notionImageUrl);
        }
        
        // Usar imagen alternativa si existe
        if (altImageUrl) {
          return getNotionImageUrl(altImageUrl);
        }
        
        // Usar imagen de fallback
        if (fallbackImageUrl) {
          return getNotionImageUrl(fallbackImageUrl);
        }
        
        // Fallback final
        return '/placeholder.svg';
      })(),
      link: extractText(props['Link']) || undefined,
      materialsLink: extractText(props['Enlace de Materiales']) || undefined,
      projectLink: extractText(props['Enlace de Proyecto']) || undefined,
      summary: {
        en: extractText(props['Resumen en Inglés']) || extractText(props['Resumen']),
        es: extractText(props['Resumen']) || extractText(props['Resumen en Inglés']),
      },
      challenge: {
        en: extractText(props['Desafío en Inglés']) || extractText(props['Desafío']),
        es: extractText(props['Desafío']) || extractText(props['Desafío en Inglés']),
      },
      solution: {
        en: extractText(props['Solución en Inglés']) || extractText(props['Solución']),
        es: extractText(props['Solución']) || extractText(props['Solución en Inglés']),
      },
      results: {
        en: extractTextArray(props['Resultados en Inglés']) || extractTextArray(props['Resultados']),
        es: extractTextArray(props['Resultados']) || extractTextArray(props['Resultados en Inglés']),
      },
      testimonial: props['Cita Testimonial en Inglés'] || props['Cita Testimonial'] ? {
        quote: {
          en: extractText(props['Cita Testimonial en Inglés']) || extractText(props['Cita Testimonial']),
          es: extractText(props['Cita Testimonial']) || extractText(props['Cita Testimonial en Inglés']),
        },
        author: {
          en: extractText(props['Autor del Testimonial']) || '',
          es: extractText(props['Autor del Testimonial']) || '',
        },
        position: {
          en: extractText(props['Cargo del Autor en Inglés']) || extractText(props['Cargo del Autor']),
          es: extractText(props['Cargo del Autor']) || extractText(props['Cargo del Autor en Inglés']),
        },
      } : undefined,
    };
  } catch (error) {
    console.error('Error converting Notion data to Project:', error);
    return null;
  }
}

// Fetch all case studies from Notion
export async function fetchCaseStudies(): Promise<Project[] | null> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });

    const projects: Project[] = [];
    
    for (const page of response.results) {
      const project = notionToProject(page as NotionProjectData);
      if (project) {
        projects.push(project);
      }
    }

    return projects;
  } catch (error) {
    console.error('Error fetching case studies from Notion:', error);
    return null;
  }
}

// Fetch a single case study by slug
export async function fetchCaseStudyBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    return notionToProject(response.results[0] as NotionProjectData);
  } catch (error) {
    console.error('Error fetching case study by slug:', error);
    return null;
  }
}
