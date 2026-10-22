import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { trackEvent } from '../../utils/analytics'

const previews = ['pedidos', 'reservas', 'inventario'].map((id) => projects.find((project) => project.id === id))
const labels = { pedidos: 'Pedidos', reservas: 'Reservas', inventario: 'Inventario' }

export default function StudioDemoShowcase() {
  return (
    <div className="pt-demo-showcase">
      <div className="pt-showcase-heading">
        <span>HECHO PARA USARSE</span>
        <span aria-hidden="true">↙ EXPLORA UNA IDEA</span>
      </div>
      <div className="pt-showcase-window">
        <div className="pt-showcase-bar">
          <span><i /> pixeltech / laboratorio</span>
          <span aria-hidden="true">— □ ×</span>
        </div>
        <fieldset className="pt-showcase-picker">
          <legend className="sr-only">Vista previa de las demos</legend>
          {previews.map((project, index) => (
            <label key={project.id}>
              <input className="sr-only" type="radio" name="hero-demo" id={`hero-${project.id}`} value={project.id} defaultChecked={index === 0} />
              <span>{labels[project.id]}</span>
            </label>
          ))}
        </fieldset>
        {previews.map((project, index) => (
          <div key={project.id} className="pt-showcase-preview" data-preview={project.id}>
            <a href={`${project.path}/#demo`} aria-label={`Abrir demo de ${labels[project.id].toLowerCase()}`} onClick={() => trackEvent('project_open', { project: project.id, placement: 'hero_preview' })}>
              <img src={project.preview} alt={`Vista de la demo ${project.name}`} width="1240" height={project.id === 'reservas' ? 608 : 662} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} />
            </a>
            <div className="pt-showcase-caption">
              <span><strong>{project.name}</strong>Demo funcional · Datos ficticios</span>
              <a href={`${project.path}/#demo`} aria-label={`Probar ${project.name}`} onClick={() => trackEvent('project_open', { project: project.id, placement: 'hero_preview_cta' })}><ArrowUpRight size={23} aria-hidden="true" /></a>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-showcase-note"><span aria-hidden="true">↳</span><p>Menos imaginar cómo sería.<br /><strong>Más verlo y probarlo.</strong></p><span className="pt-showcase-stamp">SIN<br />REGISTRO</span></div>
    </div>
  )
}
