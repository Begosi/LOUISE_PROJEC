// generate-config.js
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY ||
    process.env.SUPABASE_KEY || '';

if (!supabaseUrl) {
    console.error('❌ SUPABASE_URL não está definido nas variáveis de ambiente.');
    process.exit(1);
}
if (!supabaseKey) {
    console.error('❌ SUPABASE_KEY (ou ANON_KEY) não está definido nas variáveis de ambiente.');
    process.exit(1);
}

const content = `window.SUPABASE_CONFIG = {
  URL: "${supabaseUrl}",
  KEY: "${supabaseKey}"
};`;

const targetPath = path.join(__dirname, 'public', 'config.js');
fs.writeFileSync(targetPath, content, 'utf8');
console.log('✅ config.js gerado em', targetPath);
