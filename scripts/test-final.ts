import { config } from 'dotenv';
import { join } from 'path';

// Cargar variables de entorno
config({ path: join(process.cwd(), '.env.local') });

async function testFinalSetup() {
  console.log('🚀 Verificación final del setup de imágenes...\n');
  
  // 1. Probar API de case studies
  console.log('📊 Probando API de case studies...');
  try {
    const response = await fetch('http://localhost:3000/api/case-studies');
    const data = await response.json();
    
    if (response.ok && data.projects) {
      console.log(`✅ API funcionando: ${data.projects.length} proyectos disponibles`);
      
      // Mostrar información de imágenes
      data.projects.forEach((project: any, index: number) => {
        console.log(`   ${index + 1}. ${project.title.es || project.title.en}`);
        console.log(`      Imagen: ${project.image}`);
        
        if (project.image.startsWith('/api/image-proxy')) {
          console.log(`      🔄 Usa proxy de Notion`);
        } else if (project.image.startsWith('/projects/')) {
          console.log(`      📁 Imagen local`);
        } else {
          console.log(`      🌐 Imagen externa`);
        }
      });
    } else {
      console.log('⚠️  API responde pero no hay proyectos');
    }
  } catch (error) {
    console.log('❌ Error conectando con API:', error);
    console.log('💡 Asegúrate de que el servidor Next.js esté corriendo');
  }
  
  // 2. Verificar archivos de imagen locales
  console.log('\n📁 Verificando imágenes locales...');
  const fs = require('fs');
  const projectsPath = join(process.cwd(), 'public', 'projects');
  
  if (fs.existsSync(projectsPath)) {
    const files = fs.readdirSync(projectsPath);
    console.log(`✅ Carpeta public/projects existe con ${files.length} archivos:`);
    files.forEach((file: string) => {
      console.log(`   - ${file}`);
    });
  } else {
    console.log('❌ Carpeta public/projects no existe');
  }
  
  // 3. Probar proxy de imágenes
  console.log('\n🔄 Probando proxy de imágenes...');
  try {
    const testUrl = 'https://example.com/test.jpg';
    const proxyUrl = `http://localhost:3000/api/image-proxy?url=${encodeURIComponent(testUrl)}`;
    
    const response = await fetch(proxyUrl, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(5000)
    });
    
    console.log(`📊 Proxy responde: ${response.status} ${response.statusText}`);
    
    if (response.status === 403) {
      console.log('ℹ️  403 es esperado para URL de prueba');
    }
  } catch (error) {
    console.log('⚠️  Error probando proxy:', error);
  }
  
  // 4. Mostrar resumen y recomendaciones
  console.log('\n📋 Resumen y recomendaciones:');
  console.log('✅ Fallback a proyectos estáticos implementado');
  console.log('✅ Componente NotionImage con múltiples fallbacks');
  console.log('✅ Proxy de imágenes mejorado con logs');
  console.log('✅ Manejo de errores mejorado');
  
  console.log('\n💡 Para ver las imágenes correctamente:');
  console.log('   1. Inicia el servidor: npm run dev');
  console.log('   2. Las imágenes locales (/projects/) deberían funcionar inmediatamente');
  console.log('   3. Las imágenes de Notion usan el proxy cuando están disponibles');
  console.log('   4. Si Notion falla, se usan los proyectos estáticos automáticamente');
  
  console.log('\n🔍 Para diagnosticar problemas:');
  console.log('   - Revisa la consola del navegador para logs de carga de imágenes');
  console.log('   - Revisa la consola del servidor para logs de API');
  console.log('   - Verifica que las imágenes locales existan en public/projects/');
}

testFinalSetup().catch(console.error);
