import { SectionIntro } from './StudioUI'
const steps = [
  [
    'Escuchamos',
    'En una conversación inicial de 20 minutos, revisamos tu contexto y acordamos el siguiente paso.',
    'Un problema bien definido',
  ],
  [
    'Damos forma',
    'Evaluamos alternativas y, si corresponde, diseñamos un prototipo. Acordamos alcance, costos y fechas.',
    'Propuesta y criterios de aceptación',
  ],
  [
    'Construimos contigo',
    'Validas avances por etapas. Usamos IA como apoyo al desarrollo y revisamos el código con pruebas.',
    'Entregables que puedes revisar',
  ],
  [
    'Ponemos en marcha',
    'Preparamos la entrega, la documentación y la capacitación acordada. Definimos cómo cuidar y mejorar el sistema.',
    'Entrega y plan de acompañamiento',
  ],
]
export default function StudioProcess() {
  return (
    <section id="proceso" className="pt-section pt-process-section">
      <div className="pt-container">
        <SectionIntro
          eyebrow="04 / Sin cajas negras"
          title="Sabes qué viene después."
        >
          Un proceso claro, decisiones explicadas y comunicación directa. La
          tecnología es moderna; el compromiso se demuestra en cada entrega.
        </SectionIntro>
        <ol className="pt-process">
          {steps.map(([title, desc, output], index) => (
            <li key={title}>
              <span className="pt-step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="pt-step-output">↳ {output}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
