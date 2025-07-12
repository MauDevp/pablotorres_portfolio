import { config } from 'dotenv';
import { join } from 'path';
import { fetchCaseStudies, fetchCaseStudyBySlug } from '@/lib/notion';
import { getNotionImageUrl, isNotionImageUrl } from '@/lib/notion-image';

// Cargar variables de entorno
config({ path: join(process.cwd(), '.env.local') });

// Función para probar la conexión con Notion
async function testNotionConnection() {
  console.log('🔍 Testing Notion API connection...');
  
  try {
    const projects = await fetchCaseStudies();
    
    if (!projects) {
      console.error('❌ Failed to fetch case studies from Notion');
      return;
    }
    
    console.log(`✅ Successfully fetched ${projects.length} projects from Notion`);
    
    // Probar cada proyecto y sus imágenes
    for (const project of projects) {
      console.log(`\n📋 Project: ${project.title.en || project.title.es}`);
      console.log(`   ID: ${project.id}`);
      console.log(`   Slug: ${project.slug}`);
      console.log(`   Original Image URL: ${project.image}`);
      
      // Verificar si la imagen es de Notion
      if (isNotionImageUrl(project.image)) {
        console.log(`   ✅ Image is from Notion (AWS S3)`);
        console.log(`   🔄 Processed URL: ${getNotionImageUrl(project.image)}`);
      } else {
        console.log(`   ℹ️  Image is not from Notion: ${project.image}`);
      }
      
      // Probar si la URL de imagen es accesible
      await testImageUrl(project.image);
    }
    
  } catch (error) {
    console.error('❌ Error testing Notion connection:', error);
  }
}

// Función para probar si una URL de imagen es accesible
async function testImageUrl(imageUrl: string) {
  try {
    console.log(`   🌐 Testing image URL: ${imageUrl}`);
    
    const response = await fetch(imageUrl, { method: 'HEAD' });
    
    if (response.ok) {
      console.log(`   ✅ Image URL is accessible (${response.status})`);
      console.log(`   📄 Content-Type: ${response.headers.get('content-type')}`);
    } else {
      console.log(`   ❌ Image URL failed (${response.status}): ${response.statusText}`);
    }
  } catch (error) {
    console.log(`   ❌ Error accessing image URL: ${error}`);
  }
}

// Función para probar el proxy de imágenes
async function testImageProxy() {
  console.log('\n🔄 Testing image proxy...');
  
  try {
    const projects = await fetchCaseStudies();
    
    if (!projects || projects.length === 0) {
      console.log('❌ No projects to test proxy with');
      return;
    }
    
    // Encontrar un proyecto con imagen de Notion
    const projectWithNotionImage = projects.find(p => isNotionImageUrl(p.image));
    
    if (!projectWithNotionImage) {
      console.log('ℹ️  No projects with Notion images found');
      return;
    }
    
    console.log(`📋 Testing proxy with project: ${projectWithNotionImage.title.en || projectWithNotionImage.title.es}`);
    
    // Construir URL del proxy
    const proxyUrl = getNotionImageUrl(projectWithNotionImage.image);
    const fullProxyUrl = `http://localhost:3000${proxyUrl}`;
    
    console.log(`   🔄 Proxy URL: ${fullProxyUrl}`);
    
    // Probar el proxy
    const response = await fetch(fullProxyUrl, { method: 'HEAD' });
    
    if (response.ok) {
      console.log(`   ✅ Proxy working correctly (${response.status})`);
      console.log(`   📄 Content-Type: ${response.headers.get('content-type')}`);
    } else {
      console.log(`   ❌ Proxy failed (${response.status}): ${response.statusText}`);
    }
    
  } catch (error) {
    console.error('❌ Error testing image proxy:', error);
  }
}

// Función para mostrar información detallada de un proyecto
async function showProjectDetails(slug?: string) {
  if (!slug) {
    console.log('\n📄 Showing details for all projects...');
    const projects = await fetchCaseStudies();
    
    if (!projects) {
      console.error('❌ Failed to fetch projects');
      return;
    }
    
    projects.forEach(project => {
      console.log(`\n📋 Project: ${project.title.en || project.title.es}`);
      console.log(`   Raw data:`, JSON.stringify(project, null, 2));
    });
  } else {
    console.log(`\n📄 Showing details for project: ${slug}`);
    const project = await fetchCaseStudyBySlug(slug);
    
    if (!project) {
      console.error(`❌ Project with slug "${slug}" not found`);
      return;
    }
    
    console.log(`📋 Project found:`, JSON.stringify(project, null, 2));
  }
}

// Función principal
async function main() {
  console.log('🚀 Starting Notion API tests...\n');
  
  // Verificar variables de entorno
  console.log('🔐 Checking environment variables...');
  console.log(`   NOTION_API_KEY: ${process.env.NOTION_API_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log(`   NOTION_DATABASE_ID: ${process.env.NOTION_DATABASE_ID ? '✅ Set' : '❌ Missing'}`);
  
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    console.error('❌ Missing required environment variables');
    return;
  }
  
  // Verificar formato del token
  const apiKey = process.env.NOTION_API_KEY;
  if (apiKey.startsWith('secret_') || apiKey.startsWith('ntn_')) {
    console.log('✅ Token format appears correct');
  } else {
    console.log('⚠️  Token format may be incorrect');
  }
  
  // Ejecutar tests
  await testNotionConnection();
  await testImageProxy();
  await showProjectDetails();
  
  console.log('\n✅ Notion API tests completed!');
}

// Ejecutar el script
main().catch(console.error);
