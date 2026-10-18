import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import StudioLanding from './components/studio/StudioLanding'
import SupportLanding from './components/SupportLanding'
import ProjectPage from './components/demos/ProjectPage'
import ContentPage from './components/ContentPage'
import { projects } from './data/projects'
import { pages, resolvePath } from './data/pages'
import './studio.css'
import './demos.css'

export default function App({ pathname }) {
  const path = resolvePath(pathname ?? window.location.href)
  const project = projects.find((item) => item.path === path)
  useEffect(() => {
    const meta = pages[path]
    document.title = meta?.title ?? 'Página no encontrada | PixelTech'
    document.body.style.backgroundColor =
      path === '/soporte' ? '#004bd6' : '#fafbf6'
    document.body.style.color = path === '/soporte' ? '#ffffff' : '#171b25'
    const url = new URL(window.location.href)
    if (url.searchParams.has('view')) {
      url.searchParams.delete('view')
      url.pathname = path === '/' ? '/' : `${path}/`
      if (window.location.pathname !== url.pathname) {
        window.location.replace(url)
        return
      }
      window.history.replaceState({}, '', url)
    }
    // Legacy section links remain useful after the content reorganization.
    const aliases = {
      '#cotizacion': '#diagnostico',
      '#respaldo': '#lider',
      '#faq': '#preguntas',
    }
    const hash = aliases[window.location.hash] || window.location.hash
    if (hash)
      requestAnimationFrame(() =>
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: 'instant' }),
      )
  }, [path])
  return (
    <>
      <a className="pt-skip" href="#contenido">
        Saltar al contenido
      </a>
      {path === '/' ? (
        <StudioLanding />
      ) : path === '/soporte' ? (
        <SupportLanding />
      ) : project ? (
        <ProjectPage project={project} />
      ) : (
        <ContentPage path={path} />
      )}
      <Analytics />
    </>
  )
}
