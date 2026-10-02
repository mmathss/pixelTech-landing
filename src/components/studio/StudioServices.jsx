import { motion } from 'framer-motion'

export default function StudioServices() {
  const services = [
    {
      code: 'CORE_SRV_01',
      icon: 'web',
      iconBg: 'bg-primary-container text-on-primary',
      title: 'Plataformas Web & Dashboards',
      desc: 'Portales web modernos, paneles administrativos y aplicaciones interactivas con diseño limpio, navegación intuitiva y carga instantánea.',
      tags: ['React', 'Angular', 'TypeScript', 'Web Apps'],
    },
    {
      code: 'CORE_SRV_02',
      icon: 'desktop_windows',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Sistemas de Escritorio & Gestión',
      desc: 'Software a medida para Windows: control de inventarios, puntos de venta, facturación o herramientas internas que operan de forma local y estable.',
      tags: ['Desktop', 'Windows', 'Gestión', 'C#'],
    },
    {
      code: 'CORE_SRV_03',
      icon: 'dns',
      iconBg: 'bg-primary-container text-on-primary',
      title: 'Backend & APIs a Medida',
      desc: 'Desarrollo de la lógica de negocio y APIs seguras que procesan tus datos, conectan tus aplicaciones y garantizan estabilidad sin caídas.',
      tags: ['Java', 'Spring Boot', 'APIs REST', 'Microservicios'],
    },
    {
      code: 'CORE_SRV_04',
      icon: 'database',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Bases de Datos & Optimización',
      desc: 'Diseño, ordenamiento y consultas optimizadas para que la información de tu empresa esté siempre protegida, organizada y responda sin demoras.',
      tags: ['SQL Server', 'PostgreSQL', 'Oracle DB', 'MongoDB'],
    },
    {
      code: 'CORE_SRV_05',
      icon: 'cloud',
      iconBg: 'bg-primary-container text-on-primary',
      title: 'Cloud & Despliegue en Servidores',
      desc: 'Configuración y puesta en marcha de tus aplicaciones en la nube con Docker y AWS, asegurando disponibilidad las 24 horas y copias de seguridad.',
      tags: ['AWS', 'Docker', 'Nube', 'Producción'],
    },
    {
      code: 'CORE_SRV_06',
      icon: 'healing',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Modernización & Reparación de Sistemas',
      desc: '¿Tienes un sistema existente lento, con errores o desactualizado? Analizamos el código, solucionamos fallas y lo actualizamos para que rinda al máximo.',
      tags: ['Mantenimiento', 'Optimización', 'Refactor', 'Solución de Bugs'],
    },
  ]

  return (
    <section id="servicios" className="w-full bg-surface py-space-xl px-gutter scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-1 font-label-md text-label-md text-primary uppercase">
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
              <span>&gt; CATALOGO_DE_SOLUCIONES</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-background">
              Servicios de Software a Medida
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Soluciones digitales diseñadas para resolver problemas reales de tu negocio, con código limpio, alto rendimiento y trato directo.
          </p>
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {services.map((s, i) => (
            <motion.div
              key={s.code}
              className="bg-surface-container-lowest p-space-lg shadow-[4px_4px_0px_#191b23] flex flex-col justify-between gap-space-md group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className={`p-2 shadow-[2px_2px_0px_#191b23] ${s.iconBg}`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {s.icon}
                    </span>
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 text-on-surface-variant">
                    {s.code}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {s.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
