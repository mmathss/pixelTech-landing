import { ArrowUpRight } from 'lucide-react'
import { FaGithub as Github } from 'react-icons/fa6'
import { projects } from '../../data/projects'
import { trackEvent } from '../../utils/analytics'
import { SectionIntro } from './StudioUI'
export default function StudioProjects() {
  return (
    <section id="proyectos" className="pt-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="01 / El trabajo, a la vista"
          title="Ideas que puedes probar."
        >
          Explora cómo resolvemos problemas concretos. Son demos propias con
          datos de ejemplo, no trabajos ni resultados atribuidos a clientes.
        </SectionIntro>
        <div className="pt-project-grid">
          {projects.map((project) => (
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
                <p>{project.solution}</p>
                <ul className="pt-tags">
                  {project.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      trackEvent('source_click', { project: project.id })
                    }
                  >
                    <Github size={16} aria-hidden="true" />
                    Ver código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="pt-section-note">
          Cada demo funciona en tu navegador. Puedes explorarla sin registrarte
          ni ingresar información personal.
        </p>
      </div>
    </section>
  )
}
