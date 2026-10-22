import { ArrowUpRight, ClipboardList, Blocks, RefreshCw } from 'lucide-react'
import { SectionIntro } from './StudioUI'
import { trackEvent } from '../../utils/analytics'
const services = [
  {
    Icon: ClipboardList,
    number: '01',
    title: 'Ordenar tu operación',
    subtitle: 'Sistemas web a medida',
    desc: 'Si tus pedidos, reservas o existencias están repartidos entre chats y archivos, creamos una herramienta para consultarlos y darles seguimiento.',
    items: [
      'Panel de pedidos, reservas o inventario',
      'Accesos según las funciones de tu equipo',
      'Reportes y capacitación acordados',
    ],
    detail:
      'Definimos los módulos, los datos a trasladar y los entregables según tu operación. El plazo y el presupuesto quedan acordados antes de construir.',
  },
  {
    Icon: Blocks,
    number: '02',
    title: 'Conectar tus herramientas',
    subtitle: 'Integraciones y automatización',
    desc: 'Si tu equipo copia los mismos datos entre aplicaciones o arma reportes a mano, conectamos esos pasos para reducir el trabajo repetido.',
    items: [
      'Intercambio de datos entre aplicaciones',
      'Registros, avisos o reportes automáticos',
      'Historial y seguimiento de las ejecuciones',
    ],
    detail:
      'Primero comprobamos qué conexiones permiten tus aplicaciones. La propuesta detalla el flujo, los servicios externos necesarios y sus posibles costos.',
  },
  {
    Icon: RefreshCw,
    number: '03',
    title: 'Mejorar tu sistema actual',
    subtitle: 'Revisión y modernización',
    desc: 'Si tu sistema es lento, presenta errores o ya no acompaña a tu negocio, revisamos qué conviene corregir, actualizar o ampliar.',
    items: [
      'Revisión técnica y prioridades de mejora',
      'Correcciones y funciones acordadas',
      'Actualización y documentación del sistema',
    ],
    detail:
      'El alcance depende del estado y los accesos del sistema. Si necesitas mantenimiento continuo, su cobertura, horarios y costo se acuerdan por separado.',
  },
]
export default function StudioServices() {
  return (
    <section id="soluciones" className="pt-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="03 / Cómo podemos ayudarte"
          title="Soluciones para tu día a día."
        >
          ¿Qué necesitas mejorar? Podemos ordenar un proceso, conectar lo que ya
          usas o hacer que tu sistema vuelva a responder a tu negocio.
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
