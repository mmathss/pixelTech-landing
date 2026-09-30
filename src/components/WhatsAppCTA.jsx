import { motion } from 'framer-motion'

export default function WhatsAppCTA() {
  return (
    <section className="py-14 bg-brand-darkblue border-b-4 border-black relative overflow-hidden">
      <div className="absolute -right-6 -bottom-6 w-32 h-32 pixel-checker opacity-10" />
      <div className="absolute -left-6 -top-6 w-32 h-32 pixel-checker-neon opacity-10" />

      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <motion.div
          className="bg-black border-4 border-black p-2 sm:p-3 shadow-brutal-neon"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white flex flex-col md:flex-row items-center justify-between border-2 border-black overflow-hidden">
            <div className="flex items-center gap-4 px-6 py-5 bg-white text-brand-blue md:border-r-4 border-black w-full md:w-auto">
              <div className="w-14 h-14 bg-brand-blue text-white flex items-center justify-center text-3xl border-2 border-black shadow-brutal-sm">
                <i className="fa-brands fa-whatsapp" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase text-black tracking-wider">Escríbeme por</p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue uppercase">WHATSAPP</h3>
              </div>
            </div>

            <a
              className="w-full md:w-auto flex-1 bg-brand-neon hover:bg-brand-neonHover text-black flex items-center justify-center md:justify-end px-6 py-5 gap-3 transition-colors group cursor-pointer"
              href="https://wa.me/51937718698?text=Hola%20PixelTech,%20deseo%20hacer%20una%20consulta"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl sm:text-5xl font-black tracking-tighter font-mono group-hover:scale-105 transition-transform">
                937 718 698
              </span>
              <span className="text-2xl font-mono text-black font-bold hidden sm:inline">&lt;</span>
            </a>
          </div>
        </motion.div>

        <p className="text-center font-bold text-sm tracking-widest text-brand-neon uppercase mt-4">
          ★ TU TECNOLOGÍA, EN BUENAS MANOS Y EN BUEN FUNCIONAMIENTO ★
        </p>
      </div>
    </section>
  )
}
