// generate-config.js – gera public/config.js com variáveis de ambiente do Vercel
const fs = require('fs');
const path = require('path');
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const content = `window.SUPABASE_CONFIG = {
  URL: "${supabaseUrl}",
  KEY: "${supabaseKey}"
};`;
const targetPath = path.join(__dirname, 'public', 'config.js');
fs.writeFileSync(targetPath, content, 'utf8');
console.log('config.js generated at', targetPath);