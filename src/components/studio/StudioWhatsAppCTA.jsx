import { motion } from 'framer-motion'

export default function StudioWhatsAppCTA() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl px-gutter shadow-[0_4px_0_0_#191b23]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Text Side */}
        <motion.div
          className="flex flex-col gap-space-xs text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary-fixed uppercase">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>&gt; COTIZACIÓN_DIRECTA_POR_CORREO</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-primary">
            ¿Tienes una idea o proyecto en mente?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container">
            Cuéntame qué necesitas construir y te responderé con una propuesta técnica y cotización clara directamente a tu correo electrónico.
          </p>
        </motion.div>

        {/* Action Button Side */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-space-md"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <a
            className="inline-flex items-stretch overflow-hidden shadow-[6px_6px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#191b23] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#191b23] transition-all"
            href="#cotizacion"
          >
            <span className="bg-surface-container-lowest text-primary px-space-md py-space-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">send</span>
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-space-lg py-space-sm flex flex-col justify-center">
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                ENVIAR_BRIEF
              </span>
              <span className="font-headline-sm text-headline-sm tracking-tight">
                COTIZAR PROYECTO
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
