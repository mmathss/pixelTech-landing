import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Shield, Zap, Heart } from 'lucide-react'

const TERMINAL_LINES = [
  '> Inicializando PixelTech...',
  '> Cargando módulos de soporte...',
  '> Sistema listo. [OK]',
  '> pixeltech_core.exe v2.4 [ACTIVE]',
]

const TRUST_BADGES = [
  { Icon: Shield, label: 'Garantía 100%' },
  { Icon: Zap,    label: 'Atención Inmediata' },
  { Icon: Heart,  label: 'Trato Amigable' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function TerminalWidget() {
  const [lines, setLines] = useState([])

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      if (i < TERMINAL_LINES.length) {
        setLines((prev) => [...prev, TERMINAL_LINES[i]])
        i++
      } else {
        clearInterval(id)
      }
    }, 700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-black border border-accent-cyan/30 rounded-lg p-5 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-accent-cyan/20">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-accent-green" />
        <span className="text-text-muted text-xs ml-2">pixeltech_core.exe</span>
      </div>
      <div className="min-h-[110px] space-y-1">
        {lines.map((line, i) => (
          <p key={i} className="text-accent-green text-xs">{line}</p>
        ))}
        <span className="text-accent-green text-xs cursor-blink">█</span>
      </div>
      <div className="mt-4 pt-3 border-t border-accent-cyan/20 grid grid-cols-3 gap-2 text-center">
        {[
          { label: 'STATUS',  value: 'ACTIVE' },
          { label: 'VERSION', value: 'v2.4'   },
          { label: 'UPTIME',  value: '99.9%'  },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-text-muted text-[10px] uppercase">{label}</p>
            <p className="text-accent-cyan text-xs font-bold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-container mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <motion.div
          className="lg:col-span-3 space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className="font-mono text-accent-green text-sm">
            &gt;_ SOPORTE TÉCNICO EN COMPUTADORAS
          </motion.p>

          <motion.h1 variants={item} className="font-mono font-bold text-5xl lg:text-6xl leading-tight">
            Soporte<br />
            <span className="text-accent-cyan">Técnico</span>
          </motion.h1>

          <motion.p variants={item} className="font-mono text-accent-green text-sm">
            &gt; Soluciones rápidas, seguras y confiables para laptops y PCs de escritorio.
          </motion.p>

          <motion.p variants={item} className="text-gray-400 text-base leading-relaxed max-w-lg">
            ¿Tu PC va lento, tiene virus o no enciende? PixelTech diagnostica y repotencia tu equipo.
            Servicio a domicilio y en taller. Lunes a Sábado, 8:00 AM – 8:00 PM.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/51937718698"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent-green text-black font-mono font-bold px-6 py-3 rounded hover:bg-accent-cyan transition-colors"
            >
              <MessageCircle size={18} />
              Escribir al WhatsApp
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 border border-accent-cyan text-accent-cyan font-mono font-bold px-6 py-3 rounded hover:bg-accent-cyan hover:text-black transition-colors"
            >
              <ChevronDown size={18} />
              Ver Servicios
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-6">
            {TRUST_BADGES.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <Icon size={14} className="text-accent-cyan" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TerminalWidget />
        </motion.div>
      </div>
    </section>
  )
}
