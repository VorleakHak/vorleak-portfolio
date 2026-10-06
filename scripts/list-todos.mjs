// Lists every TODO placeholder and every image that hasn't been added yet.
// Usage: npm run todos
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const files = ['src/content.ts', 'astro.config.mjs'];

console.log('\n📝 Text TODOs\n');
for (const f of files) {
  fs.readFileSync(path.join(root, f), 'utf8').split('\n').forEach((line, i) => {
    if (/TODO/.test(line)) console.log(`  ${f}:${i + 1}  ${line.trim()}`);
  });
}

console.log('\n🖼  Images still missing (drop files at these paths)\n');
const content = fs.readFileSync(path.join(root, 'src/content.ts'), 'utf8');
const srcs = [...new Set([...content.matchAll(/src:\s*'([^']+)'/g)].map((m) => m[1]))];
for (const s of srcs) {
  if (!fs.existsSync(path.join(root, 'public', s))) console.log(`  public${s}`);
}
for (const s of ['/resume.pdf', '/og-image.png']) {
  if (!fs.existsSync(path.join(root, 'public', s))) console.log(`  public${s}`);
}
console.log('');
