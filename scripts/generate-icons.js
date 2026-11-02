#!/usr/bin/env node
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

const paperBg = '#f5f4f0'; // --paper 色值

async function generateIcons() {
  const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
  
  // 16×16 和 32×32 favicon
  await sharp(faviconSvg)
    .resize(16, 16)
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'));
  
  await sharp(faviconSvg)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));
  
  console.log('✓ favicon-16x16.png, favicon-32x32.png');
  
  // apple-touch-icon 180×180 带纸底
  const iconSvg = readFileSync(join(publicDir, 'icon.svg'));
  
  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: paperBg
    }
  })
    .composite([{
      input: await sharp(iconSvg).resize(140, 140).toBuffer(),
      top: 20,
      left: 20
    }])
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  
  console.log('✓ apple-touch-icon.png');
  
  // icon-192 和 icon-512 带纸底
  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: paperBg
    }
  })
    .composite([{
      input: await sharp(iconSvg).resize(144, 144).toBuffer(),
      top: 24,
      left: 24
    }])
    .png()
    .toFile(join(publicDir, 'icon-192.png'));
  
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: paperBg
    }
  })
    .composite([{
      input: await sharp(iconSvg).resize(384, 384).toBuffer(),
      top: 64,
      left: 64
    }])
    .png()
    .toFile(join(publicDir, 'icon-512.png'));
  
  console.log('✓ icon-192.png, icon-512.png');
  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
