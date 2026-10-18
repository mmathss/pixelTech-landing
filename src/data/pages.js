import { projects } from './projects.js'
import { articles } from './articles.js'
export const pages = {
  '/': {
    title: 'PixelTech | Consultoría y software para tu negocio',
    description:
      'Ordena tu operación con consultoría, integraciones y software a medida. Explora demos funcionales y conversa con Diego Arévalo en un diagnóstico inicial sin costo.',
    image: '/og-image.png',
  },
  '/soporte': {
    title: 'PixelTech Pro | Soporte técnico en Huacho',
    description:
      'Diagnóstico, mantenimiento, reparación y repotenciación de computadoras y laptops en Huacho, Lima. Consulta tu caso con PixelTech Pro.',
    image: '/og-support.png',
  },
  '/ideas': {
    title: 'Ideas para tu negocio | PixelTech',
    description:
      'Guías prácticas para decidir cuándo ordenar procesos, integrar herramientas o construir software. Ejemplos conectados con demos que puedes probar.',
  },
  '/privacidad': {
    title: 'Privacidad y datos de contacto | PixelTech',
    description:
      'Cómo PixelTech utiliza los datos de consulta, las demos de navegador y las mediciones de uso.',
  },
  ...Object.fromEntries(
    projects.map((p) => [
      p.path,
      {
        title: `${p.name} — Demo funcional | PixelTech`,
        description: `${p.solution} Proyecto propio con datos ficticios para explorar sin registro.`,
        image: p.preview,
      },
    ]),
  ),
  ...Object.fromEntries(
    articles.map((a) => [
      `/ideas/${a.id}`,
      { title: `${a.title} | PixelTech`, description: a.intro },
    ]),
  ),
}
export function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/'
}
export function resolvePath(location) {
  const url = new URL(location, 'https://pixel-tech-landing.vercel.app')
  const legacy = url.searchParams.get('view')
  if (legacy === 'soporte') return '/soporte'
  if (['studio', 'hub'].includes(legacy)) return '/'
  return normalizePath(url.pathname)
}
