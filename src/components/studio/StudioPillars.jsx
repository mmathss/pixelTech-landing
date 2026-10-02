import { motion } from 'framer-motion'

export default function StudioPillars() {
  const pillars = [
    {
      num: '01',
      icon: 'hub',
      title: 'Estructura Sólida & Escalable',
      desc: 'Sistemas web y de escritorio diseñados para soportar el crecimiento de tu empresa sin perder velocidad ni estabilidad.',
      tag: '> ALTO RENDIMIENTO',
    },
    {
      num: '02',
      icon: 'verified_user',
      title: 'Software Seguro & Confiable',
      desc: 'Control estricto de accesos, protección de tus datos y pruebas exhaustivas antes de cada entrega para prevenir fallas.',
      tag: '> MÁXIMA SEGURIDAD',
    },
    {
      num: '03',
      icon: 'psychology',
      title: 'Desarrollo Acelerado con IA',
      desc: 'Flujos de trabajo ágiles asistidos por herramientas de IA para reducir tiempos de entrega y entregar software limpio en plazos breves.',
      tag: '> ENTREGAS ÁGILES',
    },
    {
      num: '04',
      icon: 'cloud_sync',
      title: 'Listo para Producción',
      desc: 'Puesta en marcha garantizada desde el primer día, ya sea instalado en tus computadoras de oficina o publicado en la nube.',
      tag: '> PUESTA EN MARCHA',
    },
  ]

  return (
    <section className="w-full bg-secondary-fixed text-on-secondary-fixed py-space-lg px-gutter shadow-[0_4px_0_0_#191b23]">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        {/* Subtitle marker */}
        <motion.div
          className="flex items-center justify-between border-b-2 border-on-secondary-fixed pb-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-label-md text-label-md uppercase tracking-wider font-bold">
            &gt;&gt; CÓMO TRABAJAMOS // COMPROMISO DE CALIDAD
          </span>
          <span className="font-label-sm text-label-sm uppercase bg-on-secondary-fixed text-secondary-fixed px-space-xs py-0.5 font-bold">
            GARANTÍA TÉCNICA
          </span>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="bg-surface-container-lowest text-on-surface p-space-md shadow-[4px_4px_0px_#191b23] flex flex-col justify-between gap-space-sm hover:translate-y-[-2px] transition-transform"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    {p.icon}
                  </span>
                  <span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-surface-variant font-bold text-on-surface-variant">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary uppercase leading-tight font-extrabold">
                  {p.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {p.desc}
                </p>
              </div>
              <div className="pt-space-xs border-t border-surface-variant">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  {p.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
