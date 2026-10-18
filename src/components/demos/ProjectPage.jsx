import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { articles } from '../../data/articles'
import StudioNavbar from '../studio/StudioNavbar'
import StudioFooter from '../studio/StudioFooter'
import { DiagnosticLink } from '../studio/StudioUI'
import InventoryDemo from './InventoryDemo'
import BookingDemo from './BookingDemo'
import OrdersDemo from './OrdersDemo'
import { trackEvent } from '../../utils/analytics'
const demos = {
  inventario: InventoryDemo,
  reservas: BookingDemo,
  pedidos: OrdersDemo,
}
export default function ProjectPage({ project }) {
  const Demo = demos[project.id]
  const guide = articles.find((article) => article.project === project.id)
  return (
    <div className="pt-site">
      <StudioNavbar />
      <main id="contenido">
        <section className="pt-project-header pt-container">
          <a className="pt-text-link" href="/#proyectos">
            <ArrowLeft size={17} />
            Volver a proyectos
          </a>
          <div className="pt-project-header-grid">
            <div>
              <span className="pt-eyebrow">
                Proyecto de demostración / {project.category}
              </span>
              <h1>{project.headline}</h1>
              <p>{project.solution}</p>
            </div>
            <div className="pt-project-context">
              <strong>El problema</strong>
              <p>{project.problem}</p>
              <strong>Pensado para</strong>
              <p>{project.audience}</p>
            </div>
          </div>
          <div className="pt-demo-notice">
            <strong>Demo funcional · Datos ficticios</strong>
            <span>
              No es un proyecto de cliente. Los cambios se guardan solo en esta
              sesión del navegador y puedes restablecerlos.
            </span>
          </div>
        </section>
        <section id="demo" className="pt-demo-section">
          <div className="pt-container">
            <div className="pt-demo-instructions">
              <strong>Pruébalo:</strong>
              {project.actions.map((action, index) => (
                <span key={action}>
                  {index + 1}. {action}
                </span>
              ))}
            </div>
            <Demo />
            <div className="pt-demo-limits">
              <p>
                <strong>Alcance de esta demo:</strong> {project.limitation} No
                es un sistema listo para producción.
              </p>
              <a
                className="pt-text-link"
                href={`/ideas/${guide.id}/`}
                onClick={() =>
                  trackEvent('article_open', { article: guide.id })
                }
              >
                Leer la guía
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="pt-section">
          <div className="pt-container pt-project-followup">
            <div>
              <span className="pt-eyebrow">
                Tu operación tiene sus propias reglas
              </span>
              <h2>¿Necesitas resolver algo parecido?</h2>
              <p>
                Podemos revisar qué partes de esta idea servirían para tu
                negocio y qué habría que adaptar.
              </p>
            </div>
            <DiagnosticLink placement={`project_${project.id}`}>
              Hablemos de tu caso
            </DiagnosticLink>
          </div>
        </section>
      </main>
      <StudioFooter />
    </div>
  )
}
