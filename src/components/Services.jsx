import { motion } from 'framer-motion'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6">
      <div className="max-w-container mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent-green text-xs mb-2">&gt;_ CATÁLOGO</p>
          <h2 className="font-mono font-bold text-4xl mb-4">
            Mis <span className="text-accent-cyan">Servicios</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Soluciones integrales de hardware y software para particulares, profesionales y empresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ id, tag, title, description, Icon }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,255,0.12)' }}
              className="bg-bg-card rounded-lg p-5 border border-accent-cyan/20 flex flex-col gap-3 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan border border-accent-cyan/30 px-2 py-0.5 rounded">
                  {tag}
                </span>
                <div className="p-1.5 rounded bg-accent-cyan/10">
                  <Icon size={16} className="text-accent-cyan" />
                </div>
              </div>
              <h3 className="font-mono font-bold text-sm leading-snug">{title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed flex-1">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
