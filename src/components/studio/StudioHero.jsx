import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function StudioHero() {
  return (
    <section id="inicio" className="relative w-full bg-surface-container-low px-4 sm:px-gutter lg:px-8 py-8 sm:py-space-xl overflow-hidden shadow-[0_4px_0_0_#191b23]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
        {/* Left Column: Client-Centric Copy & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-space-md"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Console Terminal Prompt Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 self-start bg-inverse-surface text-inverse-on-surface px-2.5 py-1 border border-black shadow-[2px_2px_0px_#191b23] max-w-full"
          >
            <span className="w-2 h-2 bg-secondary-fixed animate-pulse shrink-0"></span>
            <span className="font-mono text-[10px] sm:text-xs text-secondary-fixed uppercase tracking-wider">
              &gt;_ SISTEMAS A MEDIDA &amp; SOLUCIONES DIGITALES
            </span>
          </motion.div>

          {/* Chunky Retro Headline with Neon Box */}
          <motion.div variants={fadeUp} className="flex flex-col gap-1 sm:gap-2">
            <h1 className="font-headline-xl text-[28px] xs:text-3xl sm:text-5xl lg:text-headline-xl text-on-background uppercase tracking-tight leading-[1.05]">
              SOFTWARE QUE ORDENA TU NEGOCIO
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-headline-xl text-2xl xs:text-3xl sm:text-5xl lg:text-headline-xl px-2.5 py-0.5 sm:px-space-sm sm:py-1 border-2 sm:border-3 border-black shadow-[3px_3px_0px_#191b23] sm:shadow-[4px_4px_0px_#191b23] uppercase transform rotate-1 hover:rotate-0 transition-transform">
                Y MULTIPLICA TUS VENTAS
              </span>
            </div>
          </motion.div>

          {/* Value Proposition Description */}
          <motion.p
            variants={fadeUp}
            className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Diseñamos plataformas web, paneles de control y sistemas a medida que eliminan tareas manuales en Excel, previenen errores operativos y ponen tu empresa a competir con tecnología propia.
          </motion.p>

          {/* CTA Buttons Neo-brutalist */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-space-md pt-space-xs"
          >
            {/* Primary Cyber CTA */}
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-space-lg sm:py-space-sm bg-secondary-fixed text-on-secondary-fixed font-mono text-xs sm:text-sm uppercase font-black border-2 border-black shadow-[3px_3px_0px_#191b23] sm:shadow-[4px_4px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#191b23] transition-all text-center"
              href="#cotizacion"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>Cotizar Proyecto</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            {/* Secondary / White Button */}
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-space-lg sm:py-space-sm bg-surface-container-lowest text-on-surface font-mono text-xs sm:text-sm uppercase font-black border-2 border-black shadow-[3px_3px_0px_#191b23] sm:shadow-[4px_4px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#191b23] transition-all text-center"
              href="#soluciones"
            >
              <span className="material-symbols-outlined text-[18px]">apps</span>
              <span>Ver Soluciones</span>
            </a>
          </motion.div>

          {/* Business Guarantee Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs pt-space-xs"
          >
            <div className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-2 py-1 sm:px-space-sm sm:py-1 border border-black shadow-[2px_2px_0px_#191b23]">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-primary">check_circle</span>
              <span className="font-mono text-[10px] sm:text-xs font-bold">Cero Alquiler Forzado</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-2 py-1 sm:px-space-sm sm:py-1 border border-black shadow-[2px_2px_0px_#191b23]">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-primary">bolt</span>
              <span className="font-mono text-[10px] sm:text-xs font-bold">Entregas en Semanas (MVP)</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-2 py-1 sm:px-space-sm sm:py-1 border border-black shadow-[2px_2px_0px_#191b23]">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-primary">handshake</span>
              <span className="font-mono text-[10px] sm:text-xs font-bold">Trato Directo con el Ingeniero</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Retro Interactive Business Dashboard Mockup */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          <div className="w-full max-w-md bg-surface-container-lowest border-3 border-black shadow-[6px_6px_0px_#191b23]">
            {/* Window Title Bar */}
            <div className="bg-primary text-on-primary px-space-sm py-1.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 bg-secondary-fixed inline-block"></span>
                <span className="font-label-sm text-label-sm tracking-wide">sistema_empresa.exe [EN PRODUCCIÓN]</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">_</span>
                <span className="w-3 h-3 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">□</span>
                <span className="w-3 h-3 bg-error text-on-error font-label-sm text-label-sm flex items-center justify-center font-bold">×</span>
              </div>
            </div>

            {/* Window Inner Canvas */}
            <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-surface-container-lowest">
              {/* Status Ribbon */}
              <div className="flex items-center justify-between bg-surface-container px-3 py-1.5 font-mono text-[11px] border border-black/15">
                <span className="text-on-surface-variant font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  OPERACIÓN 100% ONLINE
                </span>
                <span className="text-primary font-black uppercase">KPIs EN TIEMPO REAL</span>
              </div>

              {/* Business Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Metric 1 */}
                <div className="bg-surface-container-lowest p-3 border-2 border-black shadow-[2px_2px_0px_#191b23] flex flex-col">
                  <span className="font-mono text-[10px] text-on-surface-variant font-bold uppercase">
                    Ventas del Mes
                  </span>
                  <span className="font-headline-sm text-xl text-primary font-black mt-0.5">
                    +38.4%
                  </span>
                  <span className="font-mono text-[9px] text-emerald-700 bg-emerald-100 px-1 py-0.5 mt-1 self-start font-bold">
                    ↑ CRECIMIENTO
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="bg-surface-container-lowest p-3 border-2 border-black shadow-[2px_2px_0px_#191b23] flex flex-col">
                  <span className="font-mono text-[10px] text-on-surface-variant font-bold uppercase">
                    Tiempo Ahorrado
                  </span>
                  <span className="font-headline-sm text-xl text-black font-black mt-0.5">
                    ~18 hrs/sem
                  </span>
                  <span className="font-mono text-[9px] text-secondary-fixed-dim bg-secondary-fixed/20 px-1 py-0.5 mt-1 self-start font-bold">
                    ⚡ PROCESOS AUTOMÁTICOS
                  </span>
                </div>
              </div>

              {/* Real-time Operation Log / Terminal feed */}
              <div className="bg-[#101114] text-white p-3 border-2 border-black shadow-[2px_2px_0px_#191b23] font-mono text-[11px] flex flex-col gap-1.5">
                <div className="flex items-center justify-between pb-1 border-b border-white/10 text-secondary-fixed text-[10px] font-bold">
                  <span>&gt; LOG_DE_ACTIVIDAD_EN_VIVO</span>
                  <span className="animate-pulse">ACTIVO</span>
                </div>
                <div className="flex items-start gap-1.5 text-white/90">
                  <span className="text-secondary-fixed font-bold">[09:41]</span>
                  <span>Pedido #1084 facturado y sincronizado en caja</span>
                </div>
                <div className="flex items-start gap-1.5 text-white/90">
                  <span className="text-secondary-fixed font-bold">[09:43]</span>
                  <span>Alerta automática de stock mínimo enviada a compras</span>
                </div>
                <div className="flex items-start gap-1.5 text-white/90">
                  <span className="text-secondary-fixed font-bold">[09:45]</span>
                  <span>Reporte gerencial consolidado sin errores</span>
                </div>
              </div>

              {/* Ownership & Trust Badge */}
              <div className="bg-secondary-fixed text-black p-2.5 border-2 border-black shadow-[2px_2px_0px_#191b23] flex items-center justify-between text-xs font-mono font-black uppercase">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Propiedad 100% de tu Empresa</span>
                </div>
                <span className="text-[10px] bg-black text-white px-1.5 py-0.5">SIN ATADURAS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
