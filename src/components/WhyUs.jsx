import { motion } from 'framer-motion'

const reasons = [
  {
    icon: 'fa-solid fa-user-check',
    title: 'Técnicos Certificados',
    description: 'Personal capacitado con experiencia comprobada en hardware y software de marcas líderes.',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Diagnóstico Sin Costo',
    description: 'Evaluamos tu equipo sin cobrar nada por adelantado. Solo pagas si decidimos reparar.',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Garantía por Escrito',
    description: 'Cada servicio incluye garantía documentada. Sin letra chica, sin sorpresas al final.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Respuesta Inmediata',
    description: 'Atendemos tu consulta en minutos vía WhatsApp. Agenda tu servicio el mismo día.',
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'Precios Justos',
    description: 'Tarifas transparentes y competitivas. Cotización clara antes de comenzar cualquier trabajo.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Datos 100% Seguros',
    description: 'Respaldo de tu información antes de cualquier intervención. Tu privacidad es prioridad.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-brand-darkblue border-b-4 border-black relative overflow-hidden" id="por-que-elegirnos">
      <div className="absolute right-0 top-0 w-24 h-24 pixel-checker opacity-10 border-l-2 border-black" />
      <div className="absolute left-0 bottom-0 w-24 h-24 pixel-checker-neon opacity-10 border-r-2 border-black" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-block bg-white text-black font-pixel font-bold text-sm uppercase px-4 py-1.5 border-2 border-black shadow-brutal-sm mb-4">
            Diferencial PixelTech
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Por Qué Elegirnos
          </h2>
          <div className="w-24 h-1.5 bg-brand-neon mt-3 border border-black" />
          <p className="text-blue-100 mt-4 max-w-2xl text-base">
            Más que soporte técnico: compromiso real con tu equipo y tu tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              className="bg-brand-blue border-3 border-black p-6 flex items-start gap-5 shadow-brutal group hover:-translate-y-1 transition-transform"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 shrink-0 bg-brand-neon text-black border-2 border-black flex items-center justify-center text-xl shadow-brutal-sm group-hover:scale-110 transition-transform">
                <i className={icon} />
              </div>
              <div>
                <h3 className="font-black text-base text-white uppercase tracking-tight mb-1.5 group-hover:text-brand-neon transition-colors">
                  {title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            className="brutal-btn-neon inline-flex items-center gap-3 bg-brand-neon text-black px-8 py-4 font-black uppercase text-base border-[3px] border-black shadow-brutal"
            href="https://wa.me/51937718698?text=Hola%20PixelTech,%20solicito%20diagn%C3%B3stico%20t%C3%A9cnico"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-2xl text-emerald-800" />
            Solicitar Servicio Ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
