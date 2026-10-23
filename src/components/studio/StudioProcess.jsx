import { SectionIntro } from './StudioUI'
const steps = [
  [
    'Escuchamos',
    'Entendemos el problema en una conversación de 20 minutos.',
  ],
  [
    'Damos forma',
    'Acordamos la solución, el presupuesto y las fechas.',
  ],
  [
    'Construimos contigo',
    'Revisas y validas avances por etapas.',
  ],
  [
    'Ponemos en marcha',
    'Entregamos el sistema con documentación y capacitación acordadas.',
  ],
]
export default function StudioProcess() {
  return (
    <section id="proceso" className="pt-section pt-process-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="04 / Sin cajas negras"
          title="Sabes qué viene después."
        />
        <ol className="pt-process">
          {steps.map(([title, desc], index) => (
            <li key={title}>
              <span className="pt-step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
