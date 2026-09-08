// Packages a cPanel-ready deployment folder from the Next.js standalone build output.
// Run after `npm run build` (which produces .next/standalone via output: 'standalone').
// Usage: npm run build:cpanel
import { cpSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const standaloneDir = path.join(root, '.next', 'standalone');

if (!existsSync(standaloneDir)) {
    console.error('No .next/standalone directory found. Run "next build" first (output: "standalone" must be set in next.config.ts).');
    process.exit(1);
}

// Next.js standalone output does not include static assets or the public folder -
// both must be copied in manually so the server can find them at runtime.
const staticSrc = path.join(root, '.next', 'static');
const staticDest = path.join(standaloneDir, '.next', 'static');
rmSync(staticDest, { recursive: true, force: true });
cpSync(staticSrc, staticDest, { recursive: true });

const publicSrc = path.join(root, 'public');
const publicDest = path.join(standaloneDir, 'public');
rmSync(publicDest, { recursive: true, force: true });
cpSync(publicSrc, publicDest, { recursive: true });

console.log('cPanel deployment folder ready at:', standaloneDir);
console.log('Upload its contents to your cPanel Node.js app root, or zip the folder and extract it there.');
