const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  )
export function applyMetadata(html, path, pages, configuredOrigin) {
  const origin = (
    configuredOrigin || 'https://pixel-tech-landing.vercel.app'
  ).replace(/\/$/, '')
  const page = pages[path] || {
    title: 'Página no encontrada | PixelTech',
    description: 'Explora los proyectos y soluciones de PixelTech.',
  }
  const url = `${origin}${path === '/' ? '/' : `${path}/`}`
  const image = `${origin}${page.image || '/og-image.png'}`
  const tags = `<title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${escape(url)}" />
    ${pages[path] ? '' : '<meta name="robots" content="noindex" />'}
    <meta property="og:type" content="website" /><meta property="og:site_name" content="PixelTech" />
    <meta property="og:title" content="${escape(page.title)}" /><meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${escape(url)}" /><meta property="og:image" content="${escape(image)}" />
    <meta property="og:image:alt" content="${escape(page.title)}" /><meta property="og:locale" content="es_PE" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" /><meta name="twitter:image" content="${escape(image)}" />`
  const supportFonts =
    path === '/soporte'
      ? '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&amp;display=swap" />'
      : ''
  return html
    .replace(
      /<!-- page-meta:start -->[\s\S]*?<!-- page-meta:end -->/,
      `<!-- page-meta:start -->${tags}<!-- page-meta:end -->`,
    )
    .replace(
      /<!-- support-fonts:start -->[\s\S]*?<!-- support-fonts:end -->/,
      `<!-- support-fonts:start -->${supportFonts}<!-- support-fonts:end -->`,
    )
}
