import { ArrowUpRight, ArrowDown, ClipboardList, Blocks, RefreshCw, Check } from 'lucide-react'
import { SectionIntro } from './StudioUI'
import { trackEvent } from '../../utils/analytics'
const services = [
  {
    Icon: ClipboardList,
    number: '01',
    title: 'Ordenar tu operación',
    subtitle: 'Sistemas web a medida',
    desc: 'Gestiona pedidos, reservas o inventario desde una herramienta hecha para tu equipo.',
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
    desc: 'Automatiza registros, avisos y reportes entre las aplicaciones que ya usas.',
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
    desc: 'Recupera un sistema lento o amplía sus funciones según lo que tu negocio necesita.',
    items: [
      'Revisión técnica y prioridades de mejora',
      'Correcciones y funciones acordadas',
      'Actualización y documentación del sistema',
    ],
    detail:
      'El alcance depende del estado y los accesos del sistema. Si necesitas mantenimiento continuo, su cobertura, horarios y costo se acuerdan por separado.',
  },
]

function ServiceExample({ number }) {
  return (
    <div className={`pt-solution-example pt-solution-example-${number}`}>
      <div className="pt-example-bar"><span>EJEMPLO ILUSTRATIVO</span><span aria-hidden="true">— □ ×</span></div>
      {number === '01' ? (
        <div className="pt-example-dashboard">
          <span className="pt-example-kicker">TU OPERACIÓN / UNA SOLA VISTA</span>
          <h4>¿En qué va cada pedido?</h4>
          <div className="pt-example-columns"><span>Pedido de ejemplo</span><span>Estado</span></div>
          {['Recibido', 'En preparación', 'Listo para entregar'].map((status, index) => (
            <div className="pt-example-order" key={status}><span><i /> Pedido {String.fromCharCode(65 + index)}</span><strong>{status}</strong></div>
          ))}
        </div>
      ) : number === '02' ? (
        <div className="pt-example-workflow">
          <span className="pt-example-kicker">UN DATO / UN RECORRIDO</span>
          {[['01', 'Llega una solicitud', 'Formulario'], ['02', 'Se guarda el registro', 'Tu sistema'], ['03', 'Se envía un aviso', 'Correo del equipo']].map(([step, title, destination], index) => (
            <div className="pt-example-workflow-step" key={step}>
              {index > 0 && <ArrowDown size={20} aria-hidden="true" />}
              <div><span>{step}</span><p><strong>{title}</strong>{destination}</p><Check size={18} aria-hidden="true" /></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="pt-example-revision">
          <span className="pt-example-kicker">REVISAR ANTES DE CAMBIAR</span>
          <h4>Una mejora con dirección.</h4>
          {[['01', 'Entender', 'Qué funciona y dónde se atasca'], ['02', 'Priorizar', 'Qué corregir, actualizar o ampliar'], ['03', 'Validar', 'Pruebas antes de la entrega']].map(([step, title, text]) => (
            <div key={step}><span>{step}</span><p><strong>{title}</strong>{text}</p></div>
          ))}
        </div>
      )}
      <div className="pt-example-footer">Una idea de solución. El alcance se define contigo.</div>
    </div>
  )
}

export default function StudioServices() {
  return (
    <section id="soluciones" className="pt-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="03 / Cómo podemos ayudarte"
          title="Soluciones para tu día a día."
        />
        <div className="pt-solution-selector">
          <fieldset className="pt-solution-picker">
            <legend className="sr-only">¿Qué necesitas mejorar en tu negocio?</legend>
            {services.map(({ Icon, ...service }, index) => (
              <label key={service.number}>
                <input className="sr-only" type="radio" id={`solution-${service.number}`} name="solution-example" value={service.number} defaultChecked={index === 0} />
                <span className="pt-solution-choice"><span>{service.number}</span><Icon size={22} aria-hidden="true" /><strong>{service.title}</strong><ArrowUpRight size={18} aria-hidden="true" /></span>
              </label>
            ))}
          </fieldset>
          {services.map((service) => (
            <div key={service.number} className="pt-solution-panel" data-solution={service.number}>
              <div className="pt-solution-copy">
              <span className="pt-eyebrow">{service.subtitle}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <details>
                <summary>Alcance y condiciones</summary>
                <ul className="pt-check-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
              </div>
              <ServiceExample number={service.number} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
