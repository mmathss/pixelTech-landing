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
          title="De la idea a la pantalla."
        >
          Prueba nuestras demos con datos ficticios y conoce Nuvora, nuestro producto en desarrollo.
        </SectionIntro>
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
                  aria-label={`Ver la demo ${project.name}`}
                  onClick={() =>
                    trackEvent('project_open', {
                      project: project.id,
                      placement: 'project_card',
                    })
                  }
                >
                  <div className="pt-project-image-top">
                    <span>pixeltech / {project.id}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <img
                    src={project.preview}
                    alt={`Vista de la demo ${project.name}`}
                    width="1200"
                    height="760"
                    loading="lazy"
                  />
                  <span className="pt-demo-label">Demo funcional · Datos ficticios <ArrowUpRight size={16} aria-hidden="true" /></span>
                </a>
                <div className="pt-project-copy">
                  <span className="pt-project-number">
                    {project.number} / {project.category}
                  </span>
                  <h3>{project.name}</h3>
                  <p>{project.solution}</p>
                  <details className="pt-project-question">
                    <summary>Qué puedes probar</summary>
                    <ol className="pt-project-steps" aria-label={`Qué probar en ${project.name}`}>
                      {project.actions.map((action, index) => <li key={action}><span aria-hidden="true">0{index + 1}</span>{action}</li>)}
                    </ol>
                    <p>{project.problem}</p>
                  </details>
                  <div className="pt-project-action">
                    <a
                      className="pt-button"
                      href={`${project.path}/#demo`}
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
        <StudioFeaturedProject />
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
