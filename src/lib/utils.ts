import fs from 'node:fs';
import path from 'node:path';

/** Strings beginning with "TODO" render as visible placeholders. */
export const isTodo = (s?: string) => !s || /^\s*TODO/i.test(s);

/** Prefix internal links with the configured base path (needed for GitHub Pages). */
export function url(p: string): string {
  if (/^(https?:|mailto:|#)/.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${p.startsWith('/') ? p : `/${p}`}`;
}

/** True if a file exists inside /public (used to swap placeholders for real images). */
export function publicFileExists(p: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', p));
  } catch {
    return false;
  }
}

/** Escapes text and turns *phrase* into <em>phrase</em> (italic serif emphasis in headings). */
export function emph(s: string): string {
  const esc = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\*(.+?)\*/g, '<em>$1</em>');
}
