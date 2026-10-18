import { FileSpreadsheet, Unplug, Wrench } from 'lucide-react'
import { SectionIntro } from './StudioUI'
const problems = [
  [
    FileSpreadsheet,
    'La información está en todas partes.',
    'Pedidos en WhatsApp, stock en Excel y reportes que se arman a mano. Necesitas una vista compartida de tu operación.',
  ],
  [
    Unplug,
    'Tus herramientas no se hablan.',
    'El equipo copia los mismos datos entre aplicaciones. Una integración puede resolverlo sin reemplazar todo.',
  ],
  [
    Wrench,
    'Tu sistema se quedó atrás.',
    'Quieres corregir lentitud, retomar un proyecto o agregar funciones. Primero revisamos qué conviene conservar.',
  ],
]
export default function StudioProblems() {
  return (
    <section className="pt-section pt-section-muted">
      <div className="pt-container">
        <SectionIntro
          eyebrow="02 / Un buen punto de partida"
          title="¿Te suena familiar?"
        >
          Trabajamos con negocios de comercio y servicios que están creciendo y
          necesitan procesos más claros, herramientas conectadas y menos trabajo
          repetido.
        </SectionIntro>
        <div className="pt-problems">
          {problems.map(([Icon, title, desc]) => (
            <article key={title}>
              <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <p className="pt-consulting-note">
          <strong>El primer paso es entender, no programar.</strong> A veces
          conviene integrar lo que ya usas. Otras, mejorar un proceso o
          construir una herramienta propia. Te ayudamos a elegir.
        </p>
      </div>
    </section>
  )
}
