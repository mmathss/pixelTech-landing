import { motion } from 'framer-motion'
import devProfileImg from '../../assets/studio/developer_profile.png'

export default function StudioTrust() {
  const guarantees = [
    {
      icon: 'key',
      title: 'Código 100% Propio',
      desc: 'El software y los datos son de tu empresa. Sin mensualidades de alquiler forzoso ni trampas de retención.',
    },
    {
      icon: 'connect_without_contact',
      title: 'Trato Directo 1 a 1',
      desc: 'Hablas directamente con el ingeniero que diseña y programa tu solución, sin ejecutivos de cuenta intermediarios.',
    },
    {
      icon: 'architecture',
      title: 'Arquitectura Escalable',
      desc: 'Diseñado bajo estándares corporativos para procesar miles de registros diarios sin colapsar ni ponerse lento.',
    },
    {
      icon: 'price_check',
      title: 'Presupuestos Cerrados',
      desc: 'Sin costos ocultos de última hora. Definimos el alcance por etapas para que mantengas tu presupuesto bajo control.',
    },
  ]

  return (
    <section id="respaldo" className="w-full bg-surface-container-low py-space-xl px-4 sm:px-gutter lg:px-8 border-b-4 border-black shadow-[0_4px_0_0_#191b23] scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col gap-space-xs max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-primary uppercase font-bold">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span>&gt; RESPALDO_TÉCNICO // INGENIERÍA_SIN_INTERMEDIARIOS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg uppercase text-on-background tracking-tight">
            Ingeniería Sólida, Sin Agencias Infladas
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Muchas agencias cobran tarifas elevadas para luego subcontratar a programadores inexpertos. En PixelTech Studio trabajas directamente con el ingeniero responsable de tu arquitectura.
          </p>
        </motion.div>

        {/* Lead Engineer Authority Profile Card */}
        <motion.div
          className="bg-surface-container-lowest p-5 sm:p-8 border-3 border-black shadow-[6px_6px_0px_#191b23] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column: Engineer Photo & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start gap-3">
            <div className="relative w-full max-w-[260px] sm:max-w-none bg-surface-container border-2 border-black shadow-[4px_4px_0px_#191b23] overflow-hidden group">
              <img
                src={devProfileImg}
                alt="Diego Arévalo - Fundador & AI Software Engineer"
                className="w-full h-72 sm:h-80 object-contain object-top group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black text-secondary-fixed px-2 py-0.5 font-mono text-[10px] font-bold flex items-center gap-1.5 shadow-[1.5px_1.5px_0px_#000]">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                <span>DISPONIBLE PARA PROYECTOS</span>
              </div>
            </div>

            <div className="flex flex-col text-center sm:text-left w-full">
              <span className="font-headline-sm text-xl uppercase font-black text-on-surface">
                Diego Arévalo
              </span>
              <span className="font-mono text-xs text-primary font-bold">
                AI Software Engineer &amp; Fundador
              </span>
            </div>
          </div>

          {/* Right Column: Background, Experience & Guarantees */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <div className="inline-flex items-center gap-2 self-start bg-inverse-surface text-secondary-fixed px-2.5 py-1 font-mono text-[11px] font-bold border border-black shadow-[2px_2px_0px_#000]">
                <span>&gt; TRAYECTORIA CORPORATIVA COMPROBADA</span>
              </div>

              <h3 className="font-headline-sm text-lg sm:text-2xl uppercase font-black text-on-surface tracking-tight leading-snug">
                Experiencia en sistemas de alta exigencia aplicada a tu negocio
              </h3>

              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Experiencia en desarrollo y soporte sobre sistemas core corporativos del sector asegurador (INDRA PERÚ / Proyecto MAPFRE) y consultoría tecnológica (Digital Compass). Combinamos arquitectura de software de nivel empresarial, bases de datos optimizadas y desarrollo ágil asistido por inteligencia artificial para entregarte soluciones rápidas, seguras y sin fallas.
              </p>
            </div>

            {/* 4 Guarantees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-black/10">
              {guarantees.map((g) => (
                <div
                  key={g.title}
                  className="bg-surface-container-low p-3.5 border-2 border-black shadow-[2px_2px_0px_#191b23] flex items-start gap-2.5"
                >
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                    {g.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs uppercase font-black text-on-surface">
                      {g.title}
                    </span>
                    <span className="font-body-md text-[11px] sm:text-xs text-on-surface-variant leading-normal mt-0.5">
                      {g.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification & Social Links */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-xs">
              <span className="text-on-surface-variant font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                Auditoría pública &amp; repositorios de código abiertos:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/mmathss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-highest hover:bg-secondary-fixed hover:text-black border border-black shadow-[1.5px_1.5px_0px_#191b23] font-bold transition-colors"
                >
                  <span>GitHub @mmathss</span>
                </a>
                <a
                  href="https://linkedin.com/in/dmarevalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-primary-container text-on-primary hover:bg-primary border border-black shadow-[1.5px_1.5px_0px_#191b23] font-bold transition-colors"
                >
                  <span>LinkedIn /in/dmarevalo</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
