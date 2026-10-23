import { useEffect, useRef } from 'react'
import { Plus } from 'lucide-react'
import { SectionIntro } from './StudioUI'

function FAQItem({ question, answer }) {
  const animation = useRef(null)
  const targetOpen = useRef(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finish = () => {
      if (preference.matches) animation.current?.finish()
    }
    preference.addEventListener('change', finish)
    return () => {
      preference.removeEventListener('change', finish)
      animation.current?.cancel()
    }
  }, [])

  const toggle = (event) => {
    const summary = event.currentTarget
    const details = summary.parentElement
    const panel = details.querySelector('.pt-faq-answer')
    // Keep the native keyboard and no-JavaScript behavior as the fallback.
    if (
      !panel.animate ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    event.preventDefault()

    const nextOpen = !(animation.current ? targetOpen.current : details.open)
    const startHeight = details.open ? panel.getBoundingClientRect().height : 0
    const startOpacity = details.open ? getComputedStyle(panel).opacity : 0
    animation.current?.cancel()
    targetOpen.current = nextOpen
    details.open = true
    details.dataset.expanded = String(nextOpen)
    summary.setAttribute('aria-expanded', String(nextOpen))

    const current = panel.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity },
        {
          height: `${nextOpen ? panel.scrollHeight : 0}px`,
          opacity: nextOpen ? 1 : 0,
        },
      ],
      { duration: 340, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'both' },
    )
    animation.current = current
    current.onfinish = () => {
      if (animation.current !== current) return
      details.open = nextOpen
      delete details.dataset.expanded
      summary.removeAttribute('aria-expanded')
      animation.current = null
      current.cancel() // Return to natural height so text can reflow on resize.
    }
  }

  return (
    <details>
      <summary onClick={toggle}>
        {question}
        <span className="pt-faq-toggle" aria-hidden="true">
          <Plus size={17} strokeWidth={1.8} />
        </span>
      </summary>
      <div className="pt-faq-answer">
        <div className="pt-faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </details>
  )
}
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
    'Nuvora es un proyecto propio actualmente en desarrollo. Las otras propuestas están identificadas como demos funcionales con datos ficticios para explorar en el navegador. No se presentan como trabajos contratados ni como resultados de clientes.',
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
        <SectionIntro eyebrow="06 / Antes de empezar" title="Las cosas claras." />
        <div className="pt-faq">
          {faqs.map(([q, a]) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
