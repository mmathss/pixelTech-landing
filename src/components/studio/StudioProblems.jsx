import { FileSpreadsheet, Unplug, Wrench } from 'lucide-react'
import { SectionIntro } from './StudioUI'
const problems = [
  [
    FileSpreadsheet,
    'La información está en todas partes.',
    'Reúne pedidos, stock y reportes en una sola vista.',
  ],
  [
    Unplug,
    'Tus herramientas no se hablan.',
    'Conecta tus aplicaciones y deja de copiar datos a mano.',
  ],
  [
    Wrench,
    'Tu sistema se quedó atrás.',
    'Corrige errores, mejora la velocidad o suma funciones.',
  ],
]
export default function StudioProblems() {
  return (
    <section id="problemas" className="pt-section pt-section-muted">
      <div className="pt-container">
        <SectionIntro
          eyebrow="02 / Un buen punto de partida"
          title="¿Te suena familiar?"
        />
        <div className="pt-problems">
          {problems.map(([Icon, title, desc]) => (
            <article key={title}>
              <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
