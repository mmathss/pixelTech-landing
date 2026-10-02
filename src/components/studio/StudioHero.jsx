import { motion } from 'framer-motion'
import devProfileImg from '../../assets/studio/developer_profile.png'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function StudioHero() {
  return (
    <section id="inicio" className="relative w-full bg-surface-container-low px-gutter py-space-xl overflow-hidden shadow-[0_4px_0_0_#191b23]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-space-md"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Console Terminal Prompt Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-space-xs self-start bg-inverse-surface text-inverse-on-surface px-space-sm py-1 shadow-[3px_3px_0px_#191b23]"
          >
            <span className="inline-block w-2 h-2 bg-secondary-fixed animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
              &gt;_ DESARROLLO DE SOFTWARE &amp; APLICACIONES
            </span>
          </motion.div>

          {/* Chunky Retro Headline with Neon Box */}
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <h1 className="font-headline-xl text-headline-xl text-on-background uppercase tracking-tight leading-none">
              DESARROLLO DE
            </h1>
            <div className="flex flex-wrap items-center gap-space-sm">
              <span className="font-headline-xl text-headline-xl text-on-background uppercase tracking-tight leading-none">
                SOFTWARE
              </span>
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-headline-xl text-headline-xl px-space-sm py-1 shadow-[4px_4px_0px_#191b23] uppercase transform rotate-1 hover:rotate-0 transition-transform">
                A MEDIDA
              </span>
            </div>
          </motion.div>

          {/* Technical Description */}
          <motion.p
            variants={fadeUp}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Construyo plataformas web modernas, sistemas de escritorio y soluciones digitales a la medida de tu negocio. Desde la idea inicial hasta el sistema funcionando en producción, con soluciones prácticas, rápidas y código de alta calidad.
          </motion.p>

          {/* CTA Buttons Neo-brutalist */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-space-md pt-space-xs"
          >
            {/* Primary Cyber CTA */}
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase shadow-[4px_4px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#191b23] transition-all"
              href="#cotizacion"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>Cotizar Proyecto</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            {/* Ghost / White Button */}
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-surface-container-lowest text-on-surface font-label-md text-label-md uppercase shadow-[4px_4px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#191b23] transition-all"
              href="#servicios"
            >
              <span className="material-symbols-outlined text-[18px]">account_tree</span>
              <span>Explorar Servicios</span>
            </a>
          </motion.div>

          {/* Technical Guarantee Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-space-xs pt-space-sm"
          >
            <div className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-space-sm py-1 shadow-[2px_2px_0px_#191b23]">
              <span className="material-symbols-outlined text-[16px] text-primary">desktop_windows</span>
              <span className="font-label-sm text-label-sm">Web &amp; Escritorio</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-space-sm py-1 shadow-[2px_2px_0px_#191b23]">
              <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
              <span className="font-label-sm text-label-sm">Sistemas Rápidos &amp; Seguros</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-space-sm py-1 shadow-[2px_2px_0px_#191b23]">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              <span className="font-label-sm text-label-sm">Código Limpio &amp; Escalable</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Retro Interactive Window with Diego's Portfolio Photo */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          <div className="w-full max-w-md bg-surface-container-lowest shadow-[6px_6px_0px_#191b23]">
            {/* Window Title Bar */}
            <div className="bg-primary text-on-primary px-space-sm py-1.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 bg-secondary-fixed inline-block"></span>
                <span className="font-label-sm text-label-sm tracking-wide">developer_profile.exe [ACTIVE]</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">_</span>
                <span className="w-3 h-3 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">□</span>
                <span className="w-3 h-3 bg-error text-on-error font-label-sm text-label-sm flex items-center justify-center font-bold">×</span>
              </div>
            </div>

            {/* Window Inner Canvas */}
            <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
              {/* Technical Status Ribbon */}
              <div className="flex items-center justify-between bg-surface-container px-space-sm py-1 font-label-sm text-label-sm">
                <span className="text-on-surface-variant">ESTADO: ACTIVO</span>
                <span className="text-primary font-bold">PERÚ &amp; REMOTO</span>
              </div>

              {/* Profile Image Container */}
              <div className="relative overflow-hidden bg-on-background shadow-[3px_3px_0px_#191b23] group">
                <img
                  alt="Diego Matías - Software Developer"
                  className="w-full h-80 object-contain object-top group-hover:scale-[1.02] transition-transform duration-300"
                  src={devProfileImg}
                />
                {/* Floating Live Badge */}
                <div className="absolute bottom-2 left-2 bg-on-background text-secondary-fixed px-space-sm py-0.5 font-label-sm text-label-sm flex items-center gap-1 shadow-[2px_2px_0px_#000000]">
                  <span className="w-2 h-2 bg-secondary-fixed animate-ping"></span>
                  <span>DISPONIBLE PARA PROYECTOS</span>
                </div>
              </div>

              {/* Developer Identity Box */}
              <div className="bg-surface-container p-space-sm shadow-[2px_2px_0px_#191b23] flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Diego Matias</span>
                  <span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-primary-container text-on-primary">DESARROLLADOR</span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Desarrollo de Software | Web, Backend &amp; Escritorio
                </p>
              </div>

              {/* Direct Retro Pixel Socials */}
              <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
                <a
                  className="flex items-center justify-center gap-space-xs p-space-xs bg-surface-container-high hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors font-label-sm text-label-sm shadow-[2px_2px_0px_#191b23]"
                  href="https://github.com/mmathss"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  <span>@mmathss</span>
                </a>
                <a
                  className="flex items-center justify-center gap-space-xs p-space-xs bg-surface-container-high hover:bg-primary-container hover:text-on-primary transition-colors font-label-sm text-label-sm shadow-[2px_2px_0px_#191b23]"
                  href="https://linkedin.com/in/dmarevalo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">link</span>
                  <span>/in/dmarevalo</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
