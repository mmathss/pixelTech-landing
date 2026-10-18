import { ArrowUpRight, Compass, Blocks, RefreshCw } from 'lucide-react'
import { SectionIntro } from './StudioUI'
import { trackEvent } from '../../utils/analytics'
const services = [
  {
    Icon: Compass,
    number: '01',
    title: 'Entender y decidir',
    subtitle: 'Diagnóstico & hoja de ruta',
    desc: 'Revisamos tu operación, tus herramientas y el problema que quieres resolver. Comparamos alternativas antes de proponer desarrollo.',
    items: [
      'Procesos y prioridades',
      'Opciones y recomendaciones',
      'Alcance inicial e inversión estimada',
    ],
    detail:
      'La conversación inicial de 20 minutos es sin costo. Si hace falta un diagnóstico profundo, definimos su alcance y precio antes de empezar.',
  },
  {
    Icon: Blocks,
    number: '02',
    title: 'Construir lo necesario',
    subtitle: 'Implementación por etapas',
    desc: 'Prototipamos la solución y la llevamos a una primera versión útil. Validamos contigo antes de seguir agregando funciones.',
    items: [
      'Sistemas y portales web',
      'Integraciones y automatización',
      'Migración y puesta en marcha',
    ],
    detail:
      'El plazo y presupuesto dependen del alcance acordado. Cada etapa tiene entregables y criterios de aceptación.',
  },
  {
    Icon: RefreshCw,
    number: '03',
    title: 'Seguir mejorando',
    subtitle: 'Evolución & acompañamiento',
    desc: 'Revisamos un sistema existente, resolvemos puntos de fricción y definimos mejoras según el uso real de tu equipo.',
    items: [
      'Auditoría y modernización',
      'Mantenimiento y monitoreo',
      'Mejoras y soporte acordado',
    ],
    detail:
      'La cobertura, horarios y costo del acompañamiento se detallan en la propuesta. La garantía y las nuevas funcionalidades tienen alcances distintos.',
  },
]
export default function StudioServices() {
  return (
    <section id="soluciones" className="pt-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="03 / Cómo podemos ayudarte"
          title="Un aliado en cada etapa."
        >
          Puedes llegar con una idea, un proceso que ya no funciona o un sistema
          que necesita evolucionar. Empezamos donde estés.
        </SectionIntro>
        <div className="pt-services">
          {services.map(({ Icon, ...service }) => (
            <article key={service.number}>
              <div className="pt-service-top">
                <Icon size={27} aria-hidden="true" />
                <span>{service.number}</span>
              </div>
              <span className="pt-eyebrow">{service.subtitle}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="pt-check-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <details>
                <summary>Alcance y condiciones</summary>
                <p>{service.detail}</p>
              </details>
              <a
                className="pt-text-link"
                href="#diagnostico"
                onClick={() =>
                  trackEvent('diagnostic_click', { placement: 'service' })
                }
              >
                Hablemos de tu caso
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
