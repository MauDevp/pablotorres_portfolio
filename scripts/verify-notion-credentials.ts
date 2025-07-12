import { config } from 'dotenv';
import { join } from 'path';
import { Client } from '@notionhq/client';

// Cargar variables de entorno
config({ path: join(process.cwd(), '.env.local') });

async function verifyNotionCredentials() {
  console.log('🔍 Verificando credenciales de Notion...\n');
  
  // Mostrar información de las variables
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  console.log('📋 Variables de entorno:');
  console.log(`   NOTION_API_KEY: ${apiKey ? `${apiKey.substring(0, 20)}...` : '❌ No encontrada'}`);
  console.log(`   NOTION_DATABASE_ID: ${databaseId ? `${databaseId.substring(0, 20)}...` : '❌ No encontrada'}`);
  
  if (!apiKey || !databaseId) {
    console.error('\n❌ Faltan variables de entorno necesarias');
    return;
  }
  
  // Verificar formato del token
  console.log('\n🔐 Verificando formato del token...');
  if (apiKey.startsWith('secret_')) {
    console.log('✅ Token tiene formato correcto (secret_...)');
  } else {
    console.log('⚠️  Token no tiene el formato esperado (debería empezar con "secret_")');
  }
  
  // Verificar formato del database ID
  console.log('\n🗄️  Verificando formato del Database ID...');
  if (databaseId.length === 32 && /^[a-f0-9]+$/.test(databaseId)) {
    console.log('✅ Database ID tiene formato correcto (32 caracteres hexadecimales)');
  } else if (databaseId.length === 36 && /^[a-f0-9-]+$/.test(databaseId)) {
    console.log('✅ Database ID tiene formato correcto (36 caracteres con guiones)');
  } else {
    console.log('⚠️  Database ID no tiene el formato esperado');
  }
  
  // Inicializar cliente
  console.log('\n🔌 Inicializando cliente de Notion...');
  const notion = new Client({ auth: apiKey });
  
  try {
    // Probar conexión básica
    console.log('🌐 Probando conexión básica...');
    const user = await notion.users.me();
    console.log(`✅ Conexión exitosa! Usuario: ${user.name}`);
    
    // Probar acceso a la base de datos
    console.log('\n🗂️  Probando acceso a la base de datos...');
    const database = await notion.databases.retrieve({ database_id: databaseId });
    console.log(`✅ Base de datos encontrada: ${database.title?.[0]?.plain_text || 'Sin título'}`);
    
    // Probar query a la base de datos
    console.log('\n📊 Probando consulta a la base de datos...');
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1
    });
    
    console.log(`✅ Consulta exitosa! Encontradas ${response.results.length} página(s)`);
    
    if (response.results.length > 0) {
      console.log('\n📄 Estructura de la primera página:');
      const page = response.results[0];
      console.log('   Properties disponibles:');
      
      if ('properties' in page) {
        Object.keys(page.properties).forEach(prop => {
          console.log(`     - ${prop}: ${page.properties[prop].type}`);
        });
      }
    }
    
  } catch (error: any) {
    console.error('\n❌ Error al conectar con Notion:');
    console.error(`   Código: ${error.code}`);
    console.error(`   Mensaje: ${error.message}`);
    
    if (error.code === 'unauthorized') {
      console.log('\n💡 Posibles soluciones:');
      console.log('   1. Verifica que el token sea válido y no haya expirado');
      console.log('   2. Asegúrate de que el token tenga permisos para acceder a la base de datos');
      console.log('   3. Verifica que la integración esté conectada a la página/base de datos');
    }
    
    if (error.code === 'object_not_found') {
      console.log('\n💡 Posibles soluciones:');
      console.log('   1. Verifica que el Database ID sea correcto');
      console.log('   2. Asegúrate de que la integración tenga acceso a la base de datos');
      console.log('   3. Verifica que la base de datos no haya sido eliminada');
    }
  }
}

// Ejecutar verificación
verifyNotionCredentials().catch(console.error);
