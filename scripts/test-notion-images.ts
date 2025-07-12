import { config } from 'dotenv';
import { join } from 'path';
import { Client } from '@notionhq/client';
import { getNotionImageUrl, isNotionImageUrl } from '@/lib/notion-image';

// Cargar variables de entorno
config({ path: join(process.cwd(), '.env.local') });

async function testNotionImages() {
  console.log('🖼️  Probando imágenes de Notion...\n');
  
  const apiKey = process.env.NOTION_API_KEY!;
  const databaseId = process.env.NOTION_DATABASE_ID!;
  
  const notion = new Client({ auth: apiKey });
  
  try {
    // Obtener todas las páginas
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    
    console.log(`📊 Encontradas ${response.results.length} página(s)\n`);
    
    for (const page of response.results) {
      if ('properties' in page) {
        const properties = page.properties;
        
        // Obtener título
        const title = properties['Título']?.type === 'title' 
          ? properties['Título'].title[0]?.plain_text || 'Sin título'
          : 'Sin título';
        
        console.log(`📄 Página: ${title}`);
        
        // Verificar propiedad Imagen
        if (properties['Imagen']) {
          console.log(`   💻 Propiedad 'Imagen': ${properties['Imagen'].type}`);
          
          if (properties['Imagen'].type === 'files') {
            const files = properties['Imagen'].files;
            console.log(`   📁 Archivos encontrados: ${files.length}`);
            
            if (files.length > 0) {
              const file = files[0];
              console.log(`   📎 Tipo de archivo: ${file.type}`);
              
              let imageUrl = '';
              if (file.type === 'external') {
                imageUrl = file.external.url;
                console.log(`   🌐 URL externa: ${imageUrl}`);
              } else if (file.type === 'file') {
                imageUrl = file.file.url;
                console.log(`   📁 URL de archivo: ${imageUrl}`);
              }
              
              if (imageUrl) {
                // Verificar si es una URL de Notion
                const isNotionUrl = isNotionImageUrl(imageUrl);
                console.log(`   🔍 Es URL de Notion: ${isNotionUrl ? 'Sí' : 'No'}`);
                
                // Procesar URL
                const processedUrl = getNotionImageUrl(imageUrl);
                console.log(`   🔄 URL procesada: ${processedUrl}`);
                
                // Probar acceso directo a la imagen
                console.log(`   🌐 Probando acceso directo...`);
                try {
                  const imageResponse = await fetch(imageUrl, { method: 'HEAD' });
                  console.log(`   ✅ Acceso directo: ${imageResponse.status} ${imageResponse.statusText}`);
                  console.log(`   📄 Content-Type: ${imageResponse.headers.get('content-type')}`);
                } catch (error) {
                  console.log(`   ❌ Error en acceso directo: ${error}`);
                }
              }
            } else {
              console.log(`   ⚠️  No hay archivos en la propiedad Imagen`);
            }
          }
        } else {
          console.log(`   ⚠️  No se encontró propiedad 'Imagen'`);
        }
        
        // Verificar imagen alternativa
        if (properties['imagen alternativa']) {
          console.log(`   🔄 Propiedad 'imagen alternativa': ${properties['imagen alternativa'].type}`);
          
          if (properties['imagen alternativa'].type === 'rich_text') {
            const richText = properties['imagen alternativa'].rich_text;
            if (richText.length > 0) {
              const altImageUrl = richText[0].plain_text;
              console.log(`   🖼️  URL alternativa: ${altImageUrl}`);
              
              if (altImageUrl) {
                const processedAltUrl = getNotionImageUrl(altImageUrl);
                console.log(`   🔄 URL alternativa procesada: ${processedAltUrl}`);
              }
            }
          }
        }
        
        console.log(''); // Línea en blanco para separar
      }
    }
    
  } catch (error) {
    console.error('❌ Error al probar imágenes:', error);
  }
}

// Función para probar el proxy de imágenes
async function testImageProxy() {
  console.log('\n🔄 Probando proxy de imágenes...\n');
  
  const apiKey = process.env.NOTION_API_KEY!;
  const databaseId = process.env.NOTION_DATABASE_ID!;
  
  const notion = new Client({ auth: apiKey });
  
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1
    });
    
    if (response.results.length > 0) {
      const page = response.results[0];
      
      if ('properties' in page) {
        const properties = page.properties;
        
        // Buscar imagen para probar
        if (properties['Imagen']?.type === 'files') {
          const files = properties['Imagen'].files;
          
          if (files.length > 0) {
            const file = files[0];
            let imageUrl = '';
            
            if (file.type === 'external') {
              imageUrl = file.external.url;
            } else if (file.type === 'file') {
              imageUrl = file.file.url;
            }
            
            if (imageUrl && isNotionImageUrl(imageUrl)) {
              console.log(`🖼️  Probando proxy con imagen: ${imageUrl.substring(0, 50)}...`);
              
              const proxyUrl = getNotionImageUrl(imageUrl);
              const fullProxyUrl = `http://localhost:3000${proxyUrl}`;
              
              console.log(`🔗 URL del proxy: ${fullProxyUrl}`);
              
              try {
                const proxyResponse = await fetch(fullProxyUrl, { method: 'HEAD' });
                console.log(`✅ Proxy funcionando: ${proxyResponse.status} ${proxyResponse.statusText}`);
                console.log(`📄 Content-Type: ${proxyResponse.headers.get('content-type')}`);
              } catch (error) {
                console.log(`❌ Error en proxy: ${error}`);
                console.log(`💡 Asegúrate de que el servidor Next.js esté corriendo en localhost:3000`);
              }
            }
          }
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Error al probar proxy:', error);
  }
}

// Ejecutar tests
async function main() {
  console.log('🚀 Iniciando pruebas de imágenes de Notion...\n');
  
  await testNotionImages();
  await testImageProxy();
  
  console.log('✅ Pruebas de imágenes completadas!');
}

main().catch(console.error);
