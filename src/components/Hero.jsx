import { motion } from 'framer-motion'
import supportIllustration from '../assets/brand/pixeltech-symbol.png'

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section
      className="tech-grid-bg relative pt-12 pb-20 border-b-4 border-black overflow-hidden"
      id="inicio"
    >
      <div className="absolute left-0 top-16 w-16 h-28 pixel-checker opacity-30 border-r-2 border-black hidden xl:block" />
      <div className="absolute right-0 bottom-12 w-20 h-28 pixel-checker-neon opacity-20 border-l-2 border-black hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left column */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start space-y-6"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
          >
            {/* Geo Location Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-black text-brand-neon px-3.5 py-1.5 border-2 border-brand-neon shadow-brutal-sm font-mono text-xs uppercase font-bold tracking-wider"
            >
              <span className="inline-block w-2.5 h-2.5 bg-brand-neon animate-pulse" />
              <i className="fa-solid fa-map-pin text-brand-neon text-xs" />
              <span>TALLER TÉCNICO EN HUACHO // NORTE CHICO</span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1 variants={fadeUp} className="space-y-3 w-full">
              <span className="inline-block bg-white text-brand-blue font-black text-4xl sm:text-6xl lg:text-7xl px-4 py-2 border-4 border-black shadow-brutal uppercase tracking-tight transform -rotate-1">
                Soporte
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-block bg-brand-neon text-black font-black text-4xl sm:text-6xl lg:text-7xl px-5 py-2 border-4 border-black shadow-brutal uppercase tracking-tight transform rotate-1">
                  Técnico
                </span>
                <span className="inline-block bg-brand-darkblue text-white font-mono text-xl sm:text-3xl px-3 py-1 border-2 border-black shadow-brutal-sm font-bold">
                  HUACHO
                </span>
              </div>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl font-bold text-white tracking-wide leading-relaxed max-w-xl"
            >
              <span className="text-brand-neon">&gt;</span> Reparación y
              mantenimiento profesional de computadoras y laptops.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base text-blue-100 max-w-xl font-normal leading-relaxed"
            >
              ¿Tu equipo calienta, está lento o no enciende? Atención exclusiva
              en{' '}
              <strong className="text-white font-semibold">
                taller técnico equipado
              </strong>
              . Realizamos diagnósticos con instrumental de precisión,
              mantenimiento profundo y repotenciación con total transparencia y
              garantía.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-3 w-full sm:w-auto"
            >
              <a
                className="brutal-btn-neon inline-flex items-center justify-center gap-3 bg-brand-neon text-black px-7 py-4 font-black uppercase text-base border-[3px] border-black shadow-brutal text-center"
                href="https://wa.me/51937718698?text=Hola%20PixelTech,%20necesito%20diagn%C3%B3stico%20t%C3%A9cnico%20en%20el%20taller%20de%20Huacho"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp text-2xl text-emerald-800" />
                Escribir al WhatsApp
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-slate-100 px-6 py-4 font-bold uppercase text-base border-[3px] border-black shadow-brutal transition-transform hover:-translate-y-0.5 text-center"
                href="#servicios"
              >
                <i className="fa-solid fa-screwdriver-wrench" />
                Ver Servicios &amp; Precios
              </a>
            </motion.div>

            {/* Honest Trust Badges */}
            <motion.div
              variants={fadeUp}
              className="pt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-blue-100"
            >
              <span className="flex items-center gap-1.5 bg-brand-darkblue px-3 py-1.5 border border-white/20 shadow-sm">
                <i className="fa-solid fa-shield-halved text-brand-neon" />{' '}
                Garantía Escrita 30 Días
              </span>
              <span className="flex items-center gap-1.5 bg-brand-darkblue px-3 py-1.5 border border-white/20 shadow-sm">
                <i className="fa-solid fa-camera text-brand-neon" /> Fotos del
                Proceso por WhatsApp
              </span>
              <span className="flex items-center gap-1.5 bg-brand-darkblue px-3 py-1.5 border border-white/20 shadow-sm">
                <i className="fa-solid fa-shop text-brand-neon" /> Taller Físico
                en Huacho
              </span>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-full max-w-md bg-brand-darkblue border-4 border-black p-4 shadow-brutal-neon">
              <div className="absolute -top-5 -right-3 bg-brand-neon text-black px-3.5 py-1 text-xs font-black uppercase tracking-wider border-2 border-black shadow-brutal-sm rotate-2">
                ★ Taller Especializado ★
              </div>
              <div className="bg-black text-brand-neon px-3 py-1.5 mb-3 flex items-center justify-between text-xs font-mono border border-black">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 font-bold">taller_huacho.exe</span>
                </div>
                <span>[ACTIVO]</span>
              </div>
              <div className="relative bg-brand-blue border-2 border-black p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 pixel-checker opacity-15" />
                <img
                  alt="Símbolo de PixelTech"
                  className="w-full h-auto max-h-[360px] object-contain relative z-10 drop-shadow-[0_12px_18px_rgba(0,0,0,0.4)]"
                  src={supportIllustration}
                />
              </div>
              <div className="mt-3 bg-white text-black p-2.5 border-2 border-black text-center font-bold text-xs sm:text-sm tracking-wide">
                Diagnóstico exhaustivo &amp; Aprobación previa de repuestos
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
