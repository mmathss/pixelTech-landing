import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function Services() {
  return (
    <section className="py-20 bg-brand-blue relative border-b-4 border-black" id="servicios">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-block bg-brand-neon text-black font-pixel font-bold text-sm uppercase px-4 py-1.5 border-2 border-black shadow-brutal-sm mb-4">
            Catálogo Especializado
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Mis Servicios
          </h2>
          <div className="w-24 h-1.5 bg-brand-neon mt-3 border border-black" />
          <p className="text-blue-100 mt-4 max-w-2xl text-base">
            Soluciones integrales de hardware y software para particulares, profesionales y empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, title, description, tag }, i) => (
            <motion.div
              key={title}
              className="service-card bg-brand-darkblue border-[3px] border-black p-6 flex flex-col justify-between shadow-brutal text-left group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div>
                <div className="w-14 h-14 bg-brand-neon text-black border-2 border-black flex items-center justify-center text-2xl shadow-brutal-sm mb-5 group-hover:scale-110 transition-transform">
                  <i className={icon} />
                </div>
                <h3 className="font-black text-lg text-white group-hover:text-brand-neon uppercase tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-brand-neon uppercase">
                <span>{tag}</span>
                <i className="fa-solid fa-arrow-right" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
