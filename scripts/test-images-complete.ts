import { config } from 'dotenv';
import { join } from 'path';
import { fetchCaseStudies } from '@/lib/notion';

// Cargar variables de entorno
config({ path: join(process.cwd(), '.env.local') });

async function testCompleteImageFunctionality() {
  console.log('🖼️  Probando funcionalidad completa de imágenes...\n');
  
  try {
    // Obtener proyectos de Notion
    const projects = await fetchCaseStudies();
    
    if (!projects) {
      console.error('❌ No se pudieron obtener proyectos de Notion');
      return;
    }
    
    console.log(`📊 Proyectos obtenidos: ${projects.length}\n`);
    
    // Probar cada proyecto
    for (const project of projects) {
      console.log(`📄 Proyecto: ${project.title.es || project.title.en}`);
      console.log(`   🔗 URL de imagen: ${project.image}`);
      
      // Verificar tipo de imagen
      if (project.image.startsWith('/api/image-proxy')) {
        console.log('   🔄 Imagen usa proxy de Notion');
        
        // Probar el proxy (solo si el servidor está corriendo)
        try {
          const proxyUrl = `http://localhost:3000${project.image}`;
          const response = await fetch(proxyUrl, { 
            method: 'HEAD',
            signal: AbortSignal.timeout(5000) // Timeout de 5 segundos
          });
          
          if (response.ok) {
            console.log(`   ✅ Proxy funcionando: ${response.status}`);
          } else {
            console.log(`   ⚠️  Proxy con problemas: ${response.status} ${response.statusText}`);
          }
        } catch (error) {
          console.log(`   ⚠️  No se pudo probar el proxy (servidor no corriendo?): ${error}`);
        }
        
      } else if (project.image.startsWith('/projects/')) {
        console.log('   📁 Imagen local en /projects/');
        
        // Verificar si el archivo existe
        const fs = require('fs');
        const imagePath = join(process.cwd(), 'public', project.image);
        
        if (fs.existsSync(imagePath)) {
          console.log('   ✅ Archivo de imagen existe');
        } else {
          console.log('   ❌ Archivo de imagen NO existe');
        }
        
      } else if (project.image.startsWith('/')) {
        console.log('   📁 Imagen local');
      } else if (project.image.startsWith('http')) {
        console.log('   🌐 Imagen externa');
      } else {
        console.log('   ❓ Tipo de imagen desconocido');
      }
      
      console.log(''); // Línea en blanco
    }
    
    // Mostrar resumen
    console.log('📋 Resumen de imágenes:');
    const imageTypes = projects.reduce((acc, project) => {
      if (project.image.startsWith('/api/image-proxy')) {
        acc.proxy = (acc.proxy || 0) + 1;
      } else if (project.image.startsWith('/projects/')) {
        acc.local = (acc.local || 0) + 1;
      } else if (project.image.startsWith('http')) {
        acc.external = (acc.external || 0) + 1;
      } else {
        acc.other = (acc.other || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    console.log(`   🔄 Imágenes con proxy: ${imageTypes.proxy || 0}`);
    console.log(`   📁 Imágenes locales: ${imageTypes.local || 0}`);
    console.log(`   🌐 Imágenes externas: ${imageTypes.external || 0}`);
    console.log(`   ❓ Otras: ${imageTypes.other || 0}`);
    
  } catch (error) {
    console.error('❌ Error en las pruebas:', error);
  }
}

// Función para probar el proxy específicamente
async function testProxyDirectly() {
  console.log('\n🔄 Probando proxy directamente...\n');
  
  // URL de prueba (una de las imágenes de Notion que encontramos)
  const testUrl = 'https://prod-files-secure.s3.us-west-2.amazonaws.com/278b7c49-e346-8179-b665-00038ee6fac7/9243b3c3-8f4d-4fe8-b869-f9579fa5b753/semana_de_la_hispanidad.jpg';
  const proxyUrl = `http://localhost:3000/api/image-proxy?url=${encodeURIComponent(testUrl)}`;
  
  console.log(`🔗 URL de prueba: ${testUrl.substring(0, 50)}...`);
  console.log(`🔗 URL del proxy: ${proxyUrl.substring(0, 80)}...`);
  
  try {
    const response = await fetch(proxyUrl, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(10000) // Timeout de 10 segundos
    });
    
    console.log(`📊 Respuesta: ${response.status} ${response.statusText}`);
    console.log(`📄 Content-Type: ${response.headers.get('content-type')}`);
    console.log(`📏 Content-Length: ${response.headers.get('content-length')}`);
    
    if (response.ok) {
      console.log('✅ Proxy funcionando correctamente');
    } else {
      console.log('❌ Proxy no está funcionando');
    }
    
  } catch (error) {
    console.log(`❌ Error al probar proxy: ${error}`);
    console.log('💡 Asegúrate de que el servidor Next.js esté corriendo en localhost:3000');
  }
}

// Ejecutar pruebas
async function main() {
  console.log('🚀 Iniciando pruebas completas de imágenes...\n');
  
  await testCompleteImageFunctionality();
  await testProxyDirectly();
  
  console.log('\n✅ Pruebas completadas!');
  console.log('\n💡 Para ver las imágenes en tu proyecto:');
  console.log('   1. Asegúrate de que el servidor Next.js esté corriendo');
  console.log('   2. Las imágenes locales deberían funcionar inmediatamente');
  console.log('   3. Las imágenes de Notion necesitan el proxy funcionando');
}

main().catch(console.error);
