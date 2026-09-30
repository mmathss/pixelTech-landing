import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Award, Smile } from 'lucide-react'

const FEATURES = [
  { Icon: Zap,         title: 'Atención Rápida',      description: 'Diagnóstico y solución en el menor tiempo posible.' },
  { Icon: ShieldCheck, title: 'Trabajo Garantizado',   description: 'Garantía por escrito en cada servicio realizado.' },
  { Icon: Award,       title: 'Experiencia en Rubro',  description: 'Años de experiencia en hardware y software para PCs y laptops.' },
  { Icon: Smile,       title: 'Trato Respetuoso',      description: 'Explicaciones claras, sin tecnicismos. Tu tranquilidad primero.' },
]

export default function Features() {
  return (
    <section id="por-que" className="py-16 px-6 border-y border-accent-cyan/10">
      <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map(({ Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-bg-card rounded-lg p-6 border border-accent-cyan/20 hover:border-accent-cyan/50 transition-colors cursor-default"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded bg-accent-cyan/10">
                <Icon size={20} className="text-accent-cyan" />
              </div>
              <h3 className="font-mono font-bold text-sm">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
