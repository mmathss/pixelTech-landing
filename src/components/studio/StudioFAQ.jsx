import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StudioFAQ() {
  const [openIndex, setOpenIndex] = useState(0) // El primero abierto por defecto

  const faqs = [
    {
      q: '¿Cuánto cuesta desarrollar un software a medida?',
      a: 'Depende de las funciones y el alcance de tu proyecto. En nuestra llamada de diagnóstico inicial de 20 minutos analizamos qué necesitas resolver y te entregamos una propuesta personalizada con presupuesto cerrado. Además, podemos organizar el desarrollo en fases (MVP) para que comiences con lo esencial y escales a tu propio ritmo según tu presupuesto.',
    },
    {
      q: '¿Cuánto tiempo toma tener mi sistema listo?',
      a: 'Los tiempos varían según la complejidad, pero no creemos en proyectos eternos que demoran meses. Un prototipo funcional o primera versión operativa (MVP) suele estar listo en pocas semanas (entre 2 y 4 semanas). Trabajamos con entregas por etapas para que tu equipo pruebe avances funcionales desde los primeros días.',
    },
    {
      q: '¿Qué pasa si solo tengo una idea básica o todos mis datos están en Excel?',
      a: 'Es el punto de partida del 90% de nuestros clientes. No necesitas saber de tecnología ni tener un documento técnico preparado. Cuéntanos qué problema quieres resolver; nosotros nos encargamos de mapear tus procesos, diseñar las pantallas y migrar todos tus datos de Excel al nuevo sistema sin frenar tu operación.',
    },
    {
      q: '¿El software será propiedad de mi empresa?',
      a: 'Sí, 100%. Todo el código desarrollado, la base de datos y la arquitectura son propiedad exclusiva de tu empresa. A diferencia de las plataformas comerciales enlatadas, no te cobramos mensualidades obligatorias de alquiler por usuario ni penalidades si decides mover tu sistema.',
    },
    {
      q: '¿Puedo mejorar o ampliar un software que ya tengo funcionando?',
      a: 'Por supuesto. Realizamos auditorías sobre sistemas existentes para corregir lentitudes, solucionar fallas que tu proveedor anterior no resolvió, agregar nuevos módulos o conectar pasarelas de pago y facturación electrónica.',
    },
    {
      q: '¿Cómo es el soporte después de poner el sistema en producción?',
      a: 'Todos nuestros proyectos incluyen un período de garantía y soporte técnico prioritario post-lanzamiento para asegurar una transición fluida. También ofrecemos planes de mantenimiento y mejoras continuas para acompañar el crecimiento de tu empresa a medida que tus operaciones demanden nuevas funciones.',
    },
  ]

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="w-full bg-surface py-space-xl px-4 sm:px-gutter lg:px-8 border-b-4 border-black shadow-[0_4px_0_0_#191b23] scroll-mt-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col gap-space-xs text-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-primary uppercase font-bold">
            <span className="material-symbols-outlined text-[16px]">help</span>
            <span>&gt; PREGUNTAS_FRECUENTES // RESOLVIENDO_DUDAS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg uppercase text-on-background tracking-tight">
            Todo lo que necesitas saber antes de empezar
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
            Transparencia total en costos, tiempos y alcance para que tomes la mejor decisión para tu negocio.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.q}
                className="bg-surface-container-lowest border-3 border-black shadow-[3px_3px_0px_#191b23] overflow-hidden transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-headline-sm text-base sm:text-lg font-black uppercase tracking-tight text-on-surface hover:text-primary transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary bg-surface-container px-2 py-0.5 border border-black/15 font-bold">
                      0{index + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border-2 border-black font-black text-sm shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-secondary-fixed text-black rotate-180' : 'bg-surface-container text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t-2 border-black/10 text-on-surface-variant font-body-md text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Contact Prompt below FAQ */}
        <div className="bg-surface-container p-4 border-2 border-black shadow-[2px_2px_0px_#191b23] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-on-surface">
            <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
            <span>¿Tienes una duda específica sobre tu caso?</span>
          </div>
          <a
            href="#cotizacion"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-secondary-fixed text-black font-mono text-xs font-black uppercase border border-black shadow-[1.5px_1.5px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <span>Consultar sin compromiso</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
