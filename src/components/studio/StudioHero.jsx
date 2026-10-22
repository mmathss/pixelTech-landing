import { ArrowRight, Check } from 'lucide-react'
import { DiagnosticLink } from './StudioUI'
import StudioDemoShowcase from './StudioDemoShowcase'
export default function StudioHero() {
  return (
    <section id="inicio" className="pt-hero pt-hero-showcase">
      <div className="pt-container pt-hero-grid">
        <div className="pt-hero-copy">
          <span className="pt-eyebrow">
            <span className="pt-status-dot" />
            Criterio de negocio. Mentalidad de producto.
          </span>
          <h1>
            Entendemos tu negocio.
            <br />
            <span className="pt-highlight">Construimos lo que necesita.</span>
          </h1>
          <p>
            Creamos sistemas web, conectamos tus herramientas y automatizamos
            tareas para que tu negocio trabaje con más orden y menos trabajo
            manual.
          </p>
          <div className="pt-hero-actions">
            <DiagnosticLink placement="hero">
              Cuéntanos qué quieres mejorar
            </DiagnosticLink>
            <a className="pt-text-link" href="#proyectos">
              Explora los proyectos
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="pt-hero-notes">
            <span>
              <Check size={16} />
              20 minutos, sin costo
            </span>
            <span>
              <Check size={16} />
              Trato directo con nuestro equipo
            </span>
          </div>
        </div>
        <div className="pt-hero-visual">
          <StudioDemoShowcase />
        </div>
      </div>
      <div className="pt-container pt-hero-bottom">
        <span>HECHO EN PERÚ · COLABORACIÓN REMOTA</span>
        <span>Diagnosticar → Prototipar → Construir → Mejorar</span>
      </div>
    </section>
  )
}
