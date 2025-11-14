#!/usr/bin/env node

/**
 * Font Configuration Helper
 * 
 * This script helps configure Daikon fonts if you have different file names
 * Run: node scripts/configure-fonts.js
 */

const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '../assets/fonts');

console.log('Scanning for Daikon font files...\n');

if (!fs.existsSync(fontsDir)) {
  console.log('❌ Fonts directory does not exist. Creating...');
  fs.mkdirSync(fontsDir, { recursive: true });
  console.log('✅ Created fonts directory');
  console.log('\n📁 Please place your Daikon font files in: assets/fonts/');
  process.exit(0);
}

const files = fs.readdirSync(fontsDir).filter(file => 
  file.toLowerCase().includes('daikon') && 
  (file.endsWith('.woff2') || file.endsWith('.woff') || file.endsWith('.ttf') || file.endsWith('.otf'))
);

if (files.length === 0) {
  console.log('⚠️  No Daikon font files found in assets/fonts/');
  console.log('\n📁 Expected file names:');
  console.log('   - Daikon-Light.woff2');
  console.log('   - Daikon-Regular.woff2');
  console.log('   - Daikon-Medium.woff2');
  console.log('   - Daikon-SemiBold.woff2');
  console.log('   - Daikon-Bold.woff2');
  console.log('\n   (and italic variants if available)');
  process.exit(0);
}

console.log(`✅ Found ${files.length} Daikon font file(s):\n`);
files.forEach(file => console.log(`   - ${file}`));

console.log('\n💡 If your files have different names, update app/layout.tsx');
console.log('   to match your actual file names.\n');

