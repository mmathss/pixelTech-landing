import fs from 'node:fs/promises'
import path from 'node:path'
import { loadEnv } from 'vite'
import { render, pages } from '../.prerender/entry-server.js'
import { applyMetadata } from './metadata.js'
const env = loadEnv('production', process.cwd(), '')
const template = await fs.readFile('dist/index.html', 'utf8')
for (const route of [...Object.keys(pages), '/404']) {
  const destination =
    route === '/'
      ? 'dist/index.html'
      : route === '/404'
        ? 'dist/404.html'
        : path.join('dist', route.slice(1), 'index.html')
  let html = applyMetadata(template, route, pages, env.VITE_SITE_URL)
  html = html.replace(
    '<div id="root"></div>',
    () => `<div id="root">${render(route)}</div>`,
  )
  await fs.mkdir(path.dirname(destination), { recursive: true })
  await fs.writeFile(destination, html)
}
const origin = (
  env.VITE_SITE_URL || 'https://pixel-tech-landing.vercel.app'
).replace(/\/$/, '')
const urls = Object.keys(pages)
  .map(
    (route) =>
      `<url><loc>${origin}${route === '/' ? '/' : `${route}/`}</loc></url>`,
  )
  .join('')
await fs.writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
)
await fs.writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
)
console.log(
  `Prerendered ${Object.keys(pages).length} pages + 404, sitemap and robots.txt.`,
)
