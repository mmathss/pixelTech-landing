import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import StudioNavbar from './studio/StudioNavbar'
import StudioFooter from './studio/StudioFooter'
import { DiagnosticLink } from './studio/StudioUI'
import { articles } from '../data/articles'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { trackEvent } from '../utils/analytics'
export default function ContentPage({ path }) {
  const article = articles.find((a) => `/ideas/${a.id}` === path)
  const project = article && projects.find((p) => p.id === article.project)
  return (
    <div className="pt-site">
      <StudioNavbar />
      <main id="contenido" className="pt-content-page pt-container">
        {path === '/ideas' ? (
          <>
            <span className="pt-eyebrow">Ideas para tu negocio</span>
            <h1>
              Antes del software,
              <br />
              buenas preguntas.
            </h1>
            <p className="pt-content-intro">
              Guías para tomar decisiones con contexto. Cada idea tiene una demo
              para explorar cómo podría verse en una herramienta.
            </p>
            <div className="pt-article-grid">
              {articles.map((a) => (
                <article key={a.id}>
                  <span className="pt-eyebrow">{a.category}</span>
                  <h2>
                    <a
                      href={`/ideas/${a.id}/`}
                      onClick={() =>
                        trackEvent('article_open', { article: a.id })
                      }
                    >
                      {a.title}
                    </a>
                  </h2>
                  <p>{a.intro}</p>
                  <a
                    className="pt-text-link"
                    href={`/ideas/${a.id}/`}
                    onClick={() =>
                      trackEvent('article_open', { article: a.id })
                    }
                  >
                    Leer la guía
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </>
        ) : article ? (
          <article className="pt-prose">
            <a className="pt-text-link" href="/ideas/">
              <ArrowLeft size={16} />
              Todas las ideas
            </a>
            <span className="pt-eyebrow">
              {article.category} · Por Diego Arévalo
            </span>
            <h1>{article.title}</h1>
            <p className="pt-content-intro">{article.intro}</p>
            {article.sections.map(([title, body]) => (
              <section key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </section>
            ))}
            <aside className="pt-article-demo">
              <strong>De la idea a una prueba</strong>
              <h2>{project.name}</h2>
              <p>
                Demo propia con datos de ejemplo. Puedes explorarla sin
                registro.
              </p>
              <a
                className="pt-button pt-button-primary"
                href={`${project.path}/`}
                onClick={() =>
                  trackEvent('project_open', {
                    project: project.id,
                    placement: 'article',
                  })
                }
              >
                Probar la demo
                <ArrowUpRight size={18} />
              </a>
            </aside>
            <DiagnosticLink placement="article">
              Revisemos tu caso
            </DiagnosticLink>
          </article>
        ) : path === '/privacidad' ? (
          <article className="pt-prose">
            <span className="pt-eyebrow">Información y contacto</span>
            <h1>Tu información, con un propósito claro.</h1>
            <section>
              <h2>Consultas</h2>
              <p>
                Diego Arévalo, responsable de PixelTech, utiliza el nombre,
                correo y descripción que envías para responder tu consulta y
                coordinar el diagnóstico. No utilizamos el formulario para
                suscribirte a campañas. Evita compartir contraseñas, datos
                sensibles o información confidencial de terceros.
              </p>
            </section>
            <section>
              <h2>Envío y conservación</h2>
              <p>
                Las consultas se envían mediante Resend al buzón de atención de
                PixelTech y se conservan mientras sean necesarias para atender
                la conversación y su seguimiento. Puedes solicitar la
                actualización o eliminación de tus datos escribiendo a{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </section>
            <section>
              <h2>Demostraciones</h2>
              <p>
                Las demos usan datos ficticios. Los cambios se guardan en
                sessionStorage en tu navegador, no en una base de datos de
                PixelTech, y puedes borrarlos con “Restablecer demo”. Cerrar la
                sesión del navegador elimina este almacenamiento según su
                configuración. No ingreses información personal en las demos.
              </p>
            </section>
            <section>
              <h2>Medición de uso</h2>
              <p>
                La web integra Vercel Web Analytics para medir visitas y
                acciones como abrir una demo o solicitar un diagnóstico. Los
                eventos personalizados usan únicamente identificadores de
                proyectos, ubicaciones y tipos de acción; no incluyen el nombre,
                correo ni el texto de tu consulta. La recopilación depende de
                que el servicio esté habilitado en el alojamiento.
              </p>
            </section>
            <section>
              <h2>Servicios externos</h2>
              <p>
                Los enlaces a WhatsApp, GitHub y LinkedIn abren servicios con
                sus propias condiciones. Las tipografías se sirven desde Google
                Fonts. Para consultas sobre la información de esta web, contacta
                a Diego en el correo indicado.
              </p>
            </section>
          </article>
        ) : (
          <div className="pt-prose">
            <span className="pt-eyebrow">404 / Página no encontrada</span>
            <h1>Este camino no lleva a una página.</h1>
            <p>
              Vuelve al inicio para explorar las soluciones y los proyectos de
              PixelTech.
            </p>
            <a className="pt-button pt-button-primary" href="/">
              Volver al inicio
              <ArrowUpRight size={18} />
            </a>
          </div>
        )}
      </main>
      <StudioFooter />
    </div>
  )
}
