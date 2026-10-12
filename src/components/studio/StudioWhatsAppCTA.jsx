import { motion } from 'framer-motion'

export default function StudioWhatsAppCTA() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl px-4 sm:px-gutter lg:px-8 border-b-4 border-black shadow-[0_4px_0_0_#191b23]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-space-lg">
        {/* Text Side */}
        <motion.div
          className="flex flex-col gap-space-xs text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1 font-mono text-xs text-secondary-fixed uppercase font-bold">
            <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
            <span>&gt; DIAGNÓSTICO_SIN_COSTO // RESPUESTA_EN_24H</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-4xl uppercase tracking-tight text-on-primary leading-tight">
            ¿Listo para digitalizar y ordenar tu empresa?
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-on-primary-container leading-relaxed">
            Una conversación de 20 minutos basta para identificar tus cuellos de botella operativos y diseñar la solución que tu negocio necesita.
          </p>
        </motion.div>

        {/* Action Button Side */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <a
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-fixed text-black font-mono text-xs sm:text-sm font-black uppercase border-3 border-black shadow-[4px_4px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[1px] active:translate-y-[1px] transition-all text-center"
            href="#cotizacion"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Completar Brief del Proyecto</span>
          </a>

          <a
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-black font-mono text-xs sm:text-sm font-black uppercase border-3 border-black shadow-[4px_4px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[1px] active:translate-y-[1px] transition-all text-center"
            href="https://wa.me/51937718698?text=Hola%20PixelTech%20Studio,%20quisiera%20agendar%20una%20llamada%20de%20diagn%C3%B3stico%20para%20un%20proyecto%20de%20software."
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Chatear por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
