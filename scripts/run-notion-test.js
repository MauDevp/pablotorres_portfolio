const { exec } = require('child_process');
const path = require('path');

// Ejecutar el test usando tsx
const testScript = path.join(__dirname, 'test-notion-api.ts');
const command = `npx tsx ${testScript}`;

console.log('🚀 Running Notion API test...');
console.log(`Command: ${command}`);

exec(command, { cwd: path.dirname(__dirname) }, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error}`);
    return;
  }
  
  if (stderr) {
    console.error(`⚠️  Stderr: ${stderr}`);
  }
  
  console.log(stdout);
});
