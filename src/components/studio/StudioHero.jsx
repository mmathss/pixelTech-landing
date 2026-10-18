import { ArrowRight, Check, Play } from 'lucide-react'
import { DiagnosticLink } from './StudioUI'
import { trackEvent } from '../../utils/analytics'
export default function StudioHero() {
  return (
    <section id="inicio" className="pt-hero">
      <div className="pt-container pt-hero-grid">
        <div className="pt-hero-copy">
          <span className="pt-eyebrow">
            <span className="pt-status-dot" />
            Criterio de negocio. Mentalidad de producto.
          </span>
          <h1>
            Tu negocio avanza.
            <br />
            Tu software <span className="pt-highlight">también debería.</span>
          </h1>
          <p>
            Consultoría y software para empresas que necesitan ordenar su
            operación. Entendemos el problema, definimos el camino y construimos
            lo que realmente hace falta.
          </p>
          <div className="pt-hero-actions">
            <DiagnosticLink placement="hero">
              Agenda un diagnóstico
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
              Trato directo con Diego
            </span>
          </div>
        </div>
        <div className="pt-hero-visual">
          <div className="pt-window">
            <div className="pt-window-bar">
              <span>
                <span className="pt-window-square" />
                pixeltech / laboratorio
              </span>
              <span aria-hidden="true">— □ ×</span>
            </div>
            <a
              className="pt-hero-screen"
              href="/proyectos/inventario/"
              onClick={() =>
                trackEvent('project_open', {
                  project: 'inventario',
                  placement: 'hero',
                })
              }
            >
              <img
                src="/projects/inventario.png"
                alt="Demo de inventario: productos, alertas e historial de movimientos"
                width="1200"
                height="760"
                fetchPriority="high"
              />
              <span className="pt-preview-play">
                <Play size={15} fill="currentColor" aria-hidden="true" />
                Abrir demo funcional
              </span>
            </a>
            <div className="pt-window-footer">
              <span className="pt-status-dot" />
              <span>Datos de ejemplo. Software para explorar.</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
          <span className="pt-hero-sticker">
            Menos tareas repetidas.
            <br />
            <strong>Más claridad para decidir.</strong>
          </span>
        </div>
      </div>
      <div className="pt-container pt-hero-bottom">
        <span>HECHO EN PERÚ · COLABORACIÓN REMOTA</span>
        <span>Diagnosticar → Prototipar → Construir → Mejorar</span>
      </div>
    </section>
  )
}
