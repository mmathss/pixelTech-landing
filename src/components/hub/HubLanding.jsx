import { motion } from 'framer-motion'
import logoImg from '../../assets/studio/pixelTech_logo.png'

export default function HubLanding({ onSelectView }) {
  return (
    <div className="min-h-screen bg-brand-blue tech-grid-bg text-white font-sans flex flex-col justify-between selection:bg-brand-neon selection:text-black">
      {/* Top Status Marquee Bar */}
      <header className="bg-black text-brand-neon border-b-4 border-black py-2.5 px-4 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-brand-neon animate-pulse"></span>
            <span>PIXELTECH // SERVICIOS TECNOLÓGICOS</span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <span>ATENCIÓN ACTIVA</span>
            <span className="text-brand-neon hidden sm:inline">LIMA, PERÚ &amp; REMOTO</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-10 sm:py-16 px-4 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Introduction */}
        <motion.div
          className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand Logo Box */}
          <div className="flex items-center gap-3 bg-white p-2 border-3 border-black shadow-[4px_4px_0px_#000] mb-2">
            <div className="bg-brand-neon p-1 border-2 border-black">
              <img
                src={logoImg}
                alt="PixelTech Logo"
                className="w-8 h-8 object-contain brightness-0"
              />
            </div>
            <span className="font-pixel text-black text-xl sm:text-2xl uppercase tracking-tight">
              PixelTech
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-black text-brand-neon px-3.5 py-1 border-2 border-brand-neon shadow-brutal-sm font-mono text-xs uppercase font-bold tracking-wider">
            <span>&gt;_ ELIGE EL SERVICIO QUE NECESITAS</span>
          </div>

          <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-black leading-none text-white drop-shadow-[3px_3px_0px_#000]">
            ¿En qué podemos ayudarte hoy?
          </h1>

          <p className="text-blue-100 text-sm sm:text-base max-w-xl leading-relaxed font-medium">
            Diseñamos y construimos la plataforma web que tu negocio necesita, o reparamos y repotenciamos tus equipos de cómputo.
          </p>
        </motion.div>

        {/* 2 Big Master Selection Cards (Studio First, Pro Second) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto w-full">
          {/* Card 1: PixelTech Studio (Desarrollo) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group bg-surface-container-lowest text-on-surface border-4 border-black p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#004bd6] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col gap-5">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="bg-primary-container text-on-primary font-mono text-xs font-black px-2.5 py-1 border-2 border-black shadow-brutal-sm uppercase">
                  DESARROLLO DE SOFTWARE
                </span>
                <span className="text-primary font-mono text-xs font-bold">
                  PROYECTOS A MEDIDA
                </span>
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary-fixed text-black border-3 border-black shadow-brutal-sm flex items-center justify-center shrink-0 group-hover:rotate-3 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    code
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-black uppercase text-on-background tracking-tight leading-tight group-hover:text-primary transition-colors">
                    PixelTech Studio
                  </h2>
                  <p className="text-primary font-mono text-xs uppercase font-bold tracking-wide mt-0.5">
                    Diseñamos y Construimos Web &amp; Sistemas
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Diseñamos y construimos plataformas web, sistemas de gestión interna y herramientas digitales a la medida de tu negocio, con entregas ágiles y código de alta calidad.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2 text-xs font-semibold text-on-surface border-t border-b border-surface-variant py-3.5">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Páginas web modernas, catálogos y paneles de administración</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sistemas a medida, bases de datos y conexión de servicios</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Desarrollo ágil acelerado y enfocado en los objetivos de tu empresa</span>
                </li>
              </ul>
            </div>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={() => onSelectView('studio')}
              className="mt-6 w-full py-3.5 px-6 bg-primary-container text-on-primary font-headline-sm text-sm sm:text-base font-black uppercase tracking-wide flex items-center justify-center gap-2 border-3 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              <span>Quiero una Web o Sistema</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </motion.div>

          {/* Card 2: PixelTech Pro (Soporte Técnico) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group bg-brand-darkblue border-4 border-black p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#DFFF00] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col gap-5">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="bg-brand-neon text-black font-mono text-xs font-black px-2.5 py-1 border-2 border-black shadow-brutal-sm uppercase">
                  SOPORTE TÉCNICO
                </span>
                <span className="text-brand-neon font-mono text-xs font-bold">
                  TALLER &amp; A DOMICILIO
                </span>
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-neon text-black border-3 border-black shadow-brutal-sm flex items-center justify-center shrink-0 group-hover:rotate-3 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    computer
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight group-hover:text-brand-neon transition-colors">
                    PixelTech Pro
                  </h2>
                  <p className="text-brand-neon font-mono text-xs uppercase font-bold tracking-wide mt-0.5">
                    Mantenimiento y Reparación de PCs
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-blue-100 text-sm leading-relaxed">
                ¿Tu computadora está lenta, calienta mucho o no prende? Te ayudamos con diagnósticos claros, limpieza de virus, repuestos originales y repotenciación con garantía.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2 text-xs font-semibold text-white/95 border-t border-b border-white/10 py-3.5">
                <li className="flex items-center gap-2">
                  <span className="text-brand-neon font-bold">✓</span>
                  <span>Mantenimiento preventivo, limpieza interna y pasta térmica</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-neon font-bold">✓</span>
                  <span>Aumento de velocidad con discos sólidos (SSD) y memoria RAM</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-neon font-bold">✓</span>
                  <span>Formateo limpio, rescate de archivos y reparación de fallas</span>
                </li>
              </ul>
            </div>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={() => onSelectView('soporte')}
              className="mt-6 w-full py-3.5 px-6 bg-brand-neon text-black font-headline-sm text-sm sm:text-base font-black uppercase tracking-wide flex items-center justify-center gap-2 border-3 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              <span>Quiero Reparar mi PC</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer / Direct Contact Ribbon */}
      <footer className="border-t-4 border-black bg-black py-4 px-4 text-center select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-outline-variant">
          <span>© 2026 PixelTech. Servicios Tecnológicos &amp; Desarrollo de Software por Diego Arévalo.</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mmathss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors"
            >
              GitHub @mmathss
            </a>
            <span>//</span>
            <a
              href="https://linkedin.com/in/dmarevalo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors"
            >
              LinkedIn /in/dmarevalo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
