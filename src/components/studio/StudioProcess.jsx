import { motion } from 'framer-motion'

export default function StudioProcess() {
  const steps = [
    {
      num: '01',
      phase: 'FASE_01 // DIAGNÓSTICO',
      title: 'Diagnóstico Inicial (Sin Costo)',
      desc: 'Conversamos 20 minutos para entender la operación de tu negocio, detectar pérdidas de tiempo y definir qué necesitas resolver, sin compromisos ni venta de cosas innecesarias.',
      deliverable: 'Mapeo de requerimientos prioritarios',
      icon: 'support_agent',
    },
    {
      num: '02',
      phase: 'FASE_02 // PROTOTIPO',
      title: 'Prototipo Visual & Propuesta Cerrada',
      desc: 'Diseñamos la estructura de pantallas y el flujo antes de programar. Sabes con total claridad qué vas a recibir, en qué fechas y a qué costo exacto, sin sorpresas.',
      deliverable: 'Diseño de pantallas y cronograma claro',
      icon: 'design_services',
    },
    {
      num: '03',
      phase: 'FASE_03 // ITERACIÓN',
      title: 'Entregas por Etapas (MVP en Semanas)',
      desc: 'No te hacemos esperar meses a ciegas. Cada 1 a 2 semanas pruebas módulos funcionales reales para recoger comentarios de tu equipo y afinar detalles sobre la marcha.',
      deliverable: 'Avances funcionales listos para probar',
      icon: 'splitscreen',
    },
    {
      num: '04',
      phase: 'FASE_04 // LANZAMIENTO',
      title: 'Puesta en Marcha & Soporte Continuo',
      desc: 'Migramos la data de tus archivos de Excel, capacitamos a tu personal y te acompañamos con soporte técnico garantizado para que la adopción sea un éxito total.',
      deliverable: 'Software en producción y garantía técnica',
      icon: 'verified',
    },
  ]

  return (
    <section id="proceso" className="w-full bg-secondary-fixed text-on-secondary-fixed py-space-xl px-4 sm:px-gutter lg:px-8 border-b-4 border-black shadow-[0_4px_0_0_#191b23] scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b-3 border-black pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-black tracking-wider text-black/80">
              <span className="material-symbols-outlined text-[16px]">sync_saved_locally</span>
              <span>&gt; CÓMO_TRABAJAMOS // METODOLOGÍA_ÁGIL</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg uppercase text-black tracking-tight leading-none">
              Un Proceso Claro, Sin Proyectos Eternos
            </h2>
          </div>
          <p className="font-body-md text-sm sm:text-base text-black/85 max-w-md font-medium leading-relaxed">
            Eliminamos la incertidumbre: ves resultados tangibles en semanas, no en meses, y mantienes el control total de cada etapa.
          </p>
        </motion.div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="bg-surface-container-lowest text-on-surface p-5 sm:p-6 border-3 border-black shadow-[4px_4px_0px_#191b23] flex flex-col justify-between gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#191b23] transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 bg-secondary-fixed text-black border-2 border-black flex items-center justify-center font-black shadow-[2px_2px_0px_#191b23]">
                    <span className="material-symbols-outlined text-[20px]">
                      {s.icon}
                    </span>
                  </span>
                  <span className="font-mono text-xs font-black bg-black text-secondary-fixed px-2 py-0.5">
                    {s.num}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                  {s.phase}
                </span>

                <h3 className="font-headline-sm text-lg uppercase text-on-surface font-black leading-tight">
                  {s.title}
                </h3>

                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-black/10 flex flex-col gap-1">
                <span className="font-mono text-[9px] text-on-surface-variant uppercase font-bold">
                  ENTREGABLE DE LA FASE:
                </span>
                <span className="font-mono text-[11px] text-primary font-bold">
                  ✓ {s.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
