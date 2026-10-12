import { motion } from 'framer-motion'

export default function StudioProblems() {
  const problems = [
    {
      num: '01',
      icon: 'table_chart_view',
      title: 'El Caos del Excel & Papel',
      desc: 'Tus pedidos, cotizaciones e inventario viven en hojas de cálculo desincronizadas, fórmulas rotas o en la memoria de una sola persona, generando errores constantes y pérdidas de información.',
      tag: 'ERROR COMÚN',
    },
    {
      num: '02',
      icon: 'money_off',
      title: 'Sistemas Enlatados que Cobran de Más',
      desc: 'Pagas mensualidades caras en dólares por plataformas genéricas que tu equipo no entiende y de las que solo usas el 20%, obligando a tu negocio a adaptarse al sistema y no al revés.',
      tag: 'COSTO INÚTIL',
    },
    {
      num: '03',
      icon: 'visibility_off',
      title: 'Cero Control en Tiempo Real',
      desc: 'Llegas a fin de mes sin saber con exactitud tus márgenes, el stock crítico o qué área rinde mejor. Tomas decisiones a ciegas en lugar de basarte en números automáticos.',
      tag: 'FALTA DE VISIBILIDAD',
    },
  ]

  return (
    <section className="w-full bg-surface-container-high py-space-xl px-4 sm:px-gutter lg:px-8 border-b-4 border-black shadow-[0_4px_0_0_#191b23]">
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
            <span className="material-symbols-outlined text-[16px]">warning</span>
            <span>&gt; CUELLOS_DE_BOTELLA // EL COSTO DE NO DIGITALIZARSE</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg uppercase text-on-background tracking-tight">
            ¿Tu empresa sigue atrapada en procesos manuales?
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            La mayoría de empresas en crecimiento pierden cientos de horas hombre y miles de soles al año por depender de herramientas desarticuladas que frenan su escalabilidad:
          </p>
        </motion.div>

        {/* 3 Problems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              className="bg-surface-container-lowest p-5 sm:p-6 border-3 border-black shadow-[4px_4px_0px_#191b23] flex flex-col justify-between gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#191b23] transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 bg-rose-100 text-rose-700 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#191b23]">
                    <span className="material-symbols-outlined text-[24px]">
                      {p.icon}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 bg-rose-100 text-rose-800 border border-black/20 font-black">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface uppercase font-black leading-tight">
                  {p.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-on-surface-variant">
                <span>IMPACTO OPERATIVO</span>
                <span className="text-rose-700">FRENOS &amp; ERRORES</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The PixelTech Solution Contrast Banner */}
        <motion.div
          className="bg-secondary-fixed text-black p-5 sm:p-7 border-3 border-black shadow-[6px_6px_0px_#191b23] flex flex-col md:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start gap-3.5">
            <span className="w-12 h-12 bg-black text-secondary-fixed border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
              <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase font-black tracking-wider text-black/80">
                &gt; LA SOLUCIÓN PIXELTECH STUDIO
              </span>
              <h3 className="font-headline-sm text-lg sm:text-2xl uppercase font-black tracking-tight leading-tight">
                Software construido 100% para tu forma de trabajar
              </h3>
              <p className="font-body-md text-sm text-black/90 max-w-3xl leading-relaxed">
                El software a medida no es un lujo: es la inversión que te permite operar como una empresa grande, con cero mensualidades forzadas y control total de tu información.
              </p>
            </div>
          </div>

          <a
            href="#soluciones"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-black text-white font-mono text-xs sm:text-sm font-black uppercase px-5 py-3 border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all"
          >
            <span>Ver Cómo te Ayudamos</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
