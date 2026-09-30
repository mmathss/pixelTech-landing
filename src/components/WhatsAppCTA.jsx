import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppCTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-accent-green/10 via-accent-cyan/10 to-accent-green/10 border-y border-accent-cyan/20">
      <motion.div
        className="max-w-container mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-accent-green text-xs mb-3">&gt;_ CONTACTO DIRECTO</p>
        <h2 className="font-mono font-bold text-3xl lg:text-4xl mb-4">
          ¿Listo para resolver tu problema?
        </h2>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
          Escríbenos ahora y recibe atención inmediata. Respondemos en minutos.
        </p>
        <motion.a
          href="https://wa.me/51937718698"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent-green text-black font-mono font-bold px-8 py-4 rounded-lg text-base"
          whileHover={{ scale: 1.05, backgroundColor: '#00ffff' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <MessageCircle size={22} />
          Escribir por WhatsApp — +51 937 718 698
        </motion.a>
      </motion.div>
    </section>
  )
}
