import { motion } from 'framer-motion'

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
      desc: 'Hablas directamente con el responsable técnico que diseña y programa tu solución, sin ejecutivos de cuenta intermediarios.',
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
            Muchas agencias cobran tarifas elevadas para luego delegar a terceros sin experiencia. En PixelTech Studio trabajas directamente con el responsable de tu arquitectura técnica.
          </p>
        </motion.div>

        {/* Technical Direction Profile Card */}
        <motion.div
          className="bg-surface-container-lowest p-5 sm:p-8 border-3 border-black shadow-[6px_6px_0px_#191b23] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column: Tech Direction Terminal Monitor */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start gap-4">
            <div className="w-full bg-inverse-surface border-2 border-black shadow-[4px_4px_0px_#191b23] p-5 font-mono text-xs flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30 text-outline-variant">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block"></span>
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full inline-block"></span>
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block"></span>
                </span>
                <span className="text-[10px] text-secondary-fixed">SYS_CORE v2.4</span>
              </div>
              <div className="text-secondary-fixed font-bold">
                &gt; PixelTech Studio // Lead_Dev
              </div>
              <p className="text-inverse-on-surface text-[11px] leading-relaxed">
                Ingeniería de software con estándares corporativos, clean code, arquitectura cloud y entrega iterativa.
              </p>
              <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between text-[10px] text-outline-variant">
                <span>ESTADO:</span>
                <span className="text-secondary-fixed font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                  DISPONIBLE PARA PROYECTOS
                </span>
              </div>
            </div>

            <div className="flex flex-col text-center sm:text-left w-full">
              <span className="font-headline-sm text-xl uppercase font-black text-on-surface">
                Dirección Técnica
              </span>
              <span className="font-mono text-xs text-primary font-bold">
                Arquitectura &amp; Desarrollo de Software
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

            {/* Verification & Guarantees Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-black/10 font-mono text-xs">
              <span className="text-on-surface-variant font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                Metodología ágil, entregas continuas y código documentado.
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-surface-container-highest border border-black shadow-[1.5px_1.5px_0px_#191b23] font-bold text-[11px]">
                  Sprint Semanal
                </span>
                <span className="px-2.5 py-1 bg-secondary-fixed text-black border border-black shadow-[1.5px_1.5px_0px_#191b23] font-bold text-[11px]">
                  Garantía 30 Días
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
