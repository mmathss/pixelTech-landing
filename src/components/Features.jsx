import { motion } from 'framer-motion'

const pillars = [
  { icon: 'fa-solid fa-clock-rotate-left', title: 'Atención Rápida', sub: 'Tiempos ágiles sin esperas' },
  { icon: 'fa-solid fa-circle-check', title: 'Trabajo Garantizado', sub: 'Calidad comprobada 100%' },
  { icon: 'fa-solid fa-thumbs-up', title: 'Experiencia en Rubro', sub: 'Técnicos calificados' },
  { icon: 'fa-solid fa-handshake', title: 'Trato Respetuoso', sub: 'Transparencia y claridad' },
]

export default function Features() {
  return (
    <section className="bg-brand-neon text-black py-7 border-b-4 border-black font-sans" id="garantia">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {pillars.map(({ icon, title, sub }, i) => (
            <motion.div
              key={title}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2 bg-white/70 sm:bg-transparent border-2 sm:border-0 border-black shadow-brutal-sm sm:shadow-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-black text-brand-neon rounded-none border-2 border-black flex items-center justify-center text-xl shadow-brutal-sm">
                <i className={icon} />
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-sm uppercase tracking-wide">{title}</h4>
                <p className="text-xs text-neutral-800 font-semibold">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
