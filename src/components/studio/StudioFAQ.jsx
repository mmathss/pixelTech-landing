import { SectionIntro } from './StudioUI'
const faqs = [
  [
    '¿Necesito saber qué software quiero?',
    'No. Puedes llegar con un problema: tareas repetidas, información dispersa o una herramienta que ya no te sirve. En la conversación inicial revisamos tu contexto y definimos si conviene profundizar el diagnóstico, integrar herramientas o desarrollar.',
  ],
  [
    '¿El diagnóstico es gratuito?',
    'La conversación inicial de 20 minutos es sin costo y sin compromiso. Sirve para entender el caso y acordar un siguiente paso; no sustituye una auditoría completa. Si necesitas un análisis más profundo, recibirás su alcance y precio antes de contratarlo.',
  ],
  [
    '¿Cuánto cuesta y cuánto demora?',
    'Depende del problema, las integraciones, los datos y las funciones necesarias. La propuesta define entregables, fechas, criterios de aceptación y presupuesto por etapa. Podemos empezar por una versión acotada; los plazos se estiman para cada proyecto.',
  ],
  [
    '¿Qué gastos tendré después de la entrega?',
    'Según la solución, puede haber costos de dominio, alojamiento, servicios externos o licencias. Se explican en la propuesta. El mantenimiento y las nuevas funciones se acuerdan aparte.',
  ],
  [
    '¿Quién tendrá el código y los datos?',
    'La propuesta y el contrato detallan la entrega del código desarrollado, los accesos, los datos y la documentación. Las bibliotecas y servicios de terceros conservan sus propias licencias. Buscamos que tengas claridad y autonomía para continuar tu proyecto.',
  ],
  [
    '¿Qué cubren la garantía y el soporte?',
    'El período y la cobertura de garantía se definen en cada propuesta y cubren correcciones respecto al alcance aceptado. Nuevas funciones, cambios de alcance y planes de mantenimiento se cotizan por separado, con horarios y canales de atención acordados.',
  ],
  [
    '¿Los proyectos que muestran son de clientes?',
    'Son demos propias con datos ficticios para explorar funcionalidades en el navegador. No son testimonios, trabajos contratados ni evidencia de resultados económicos de clientes.',
  ],
  [
    '¿Cómo usan inteligencia artificial?',
    'Como apoyo para explorar alternativas, prototipar y desarrollar. Las decisiones técnicas, la revisión del código y las pruebas tienen supervisión humana. El uso de datos o servicios externos para tu proyecto se acuerda contigo.',
  ],
]
export default function StudioFAQ() {
  return (
    <section id="preguntas" className="pt-section pt-section-muted">
      <div className="pt-container pt-faq-layout">
        <SectionIntro eyebrow="06 / Antes de empezar" title="Las cosas claras.">
          Qué puedes esperar, qué necesitamos definir y qué está incluido en el
          primer paso.
        </SectionIntro>
        <div className="pt-faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
