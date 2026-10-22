import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { trackEvent } from '../../utils/analytics'
import { SectionIntro } from './StudioUI'
import StudioFeaturedProject from './StudioFeaturedProject'
export default function StudioProjects() {
  return (
    <section id="proyectos" className="pt-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="01 / El trabajo, a la vista"
          title="Proyectos que toman forma."
        >
          Un producto propio actualmente en desarrollo y demos funcionales para
          explorar soluciones a problemas de inventario, reservas y pedidos.
        </SectionIntro>
        <StudioFeaturedProject />
        <div className="pt-demo-grid-heading">
          <h3>Del problema a una demo.</h3>
          <p>
            Reserva una cita o cambia el estado de un pedido. Son demos propias
            con datos ficticios, sin registro.
          </p>
        </div>
        <div className="pt-project-grid">
          {projects
            .filter((project) => project.id !== 'inventario')
            .map((project) => (
              <article
                className={`pt-project pt-project-${project.color}`}
                key={project.id}
              >
                <a
                  className="pt-project-image"
                  href={`${project.path}/`}
                  onClick={() =>
                    trackEvent('project_open', {
                      project: project.id,
                      placement: 'project_card',
                    })
                  }
                >
                  <div className="pt-project-image-top">
                    <span>{project.category}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <img
                    src={project.preview}
                    alt={`Vista de la demo ${project.name}`}
                    width="1200"
                    height="760"
                    loading="lazy"
                  />
                  <span className="pt-demo-label">
                    Demo funcional · Datos ficticios
                  </span>
                </a>
                <div className="pt-project-copy">
                  <span className="pt-project-number">
                    PROYECTO / {project.number}
                  </span>
                  <h3>{project.name}</h3>
                  <dl className="pt-project-story">
                    <div>
                      <dt>El problema</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>La solución que puedes explorar</dt>
                      <dd>{project.solution}</dd>
                    </div>
                  </dl>
                  <p className="pt-project-try">
                    <strong>En la demo:</strong> {project.actions.join(' · ')}.
                  </p>
                  <div className="pt-project-links">
                    <a
                      href={`${project.path}/`}
                      onClick={() =>
                        trackEvent('project_open', {
                          project: project.id,
                          placement: 'project_cta',
                        })
                      }
                    >
                      Probar demo
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
        <p className="pt-section-note">
          También en el laboratorio:{' '}
          <a
            href="/proyectos/inventario/"
            onClick={() =>
              trackEvent('project_open', {
                project: 'inventario',
                placement: 'laboratory',
              })
            }
          >
            explora la demo básica de inventario ↗
          </a>
          . Es una demostración independiente de Nuvora.
        </p>
      </div>
    </section>
  )
}
