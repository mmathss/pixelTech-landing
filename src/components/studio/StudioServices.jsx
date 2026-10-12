import { motion } from 'framer-motion'

export default function StudioServices() {
  const solutions = [
    {
      code: 'SOLUCION_01',
      icon: 'dashboard_customize',
      iconBg: 'bg-primary-container text-on-primary',
      title: 'Sistemas de Gestión & Paneles (ERP / CRM)',
      desc: 'Control integral de tu negocio en una sola pantalla: inventarios, ventas, compras, caja chica, cuentas por cobrar y seguimiento de clientes adaptado exactamente a tu flujo.',
      tags: ['Gestión Interna', 'Inventario', 'Caja & Ventas', 'Paneles de Control'],
    },
    {
      code: 'SOLUCION_02',
      icon: 'language',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Plataformas Web & Portales de Clientes',
      desc: 'Portales corporativos y plataformas interactivas donde tus clientes pueden registrarse, ver catálogos, cotizar o hacer seguimiento a sus pedidos las 24 horas del día.',
      tags: ['Portales Web', 'Alta Conversión', 'Catálogos Digitales', 'Apps Web'],
    },
    {
      code: 'SOLUCION_03',
      icon: 'sync_alt',
      iconBg: 'bg-primary-container text-on-primary',
      title: 'Automatización de Procesos & Conexiones',
      desc: 'Conectamos tus canales (WhatsApp, facturación electrónica, pasarelas de pago y bases de datos) para que la información se registre automáticamente sin digitadores manuales.',
      tags: ['Automatización', 'Conexión de APIs', 'Cero Errores', 'Integraciones'],
    },
    {
      code: 'SOLUCION_04',
      icon: 'build_circle',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Rescate & Modernización de Software',
      desc: '¿Tienes un sistema existente lento, con fallas constantes o abandonado por tu programador anterior? Auditamos el código, corregimos errores y lo actualizamos al máximo rendimiento.',
      tags: ['Auditoría Técnica', 'Optimización', 'Corrección de Bugs', 'Soporte Continuo'],
    },
    {
      code: 'SOLUCION_05',
      icon: 'analytics',
      iconBg: 'bg-primary-container text-on-primary',
      title: 'Bases de Datos Seguras & Reportes',
      desc: 'Diseño y optimización de bases de datos para que la gerencia tome decisiones con números exactos en tiempo real: márgenes reales, rentabilidad y proyecciones sin demoras.',
      tags: ['SQL Seguro', 'Reportes Gerenciales', 'Analítica de Negocio', 'Datos Protegidos'],
    },
    {
      code: 'SOLUCION_06',
      icon: 'cloud_done',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Cloud & Puesta en Marcha en Servidores',
      desc: 'Configuración segura en la nube (AWS / Docker) o en tus propios servidores locales, con respaldos automáticos y disponibilidad continua para que tu operación nunca se detenga.',
      tags: ['Nube & Local', 'Backups Automáticos', 'Alta Disponibilidad', 'Seguridad'],
    },
  ]

  return (
    <section id="soluciones" className="w-full bg-surface py-space-xl px-4 sm:px-gutter lg:px-8 scroll-mt-20">
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
            <div className="inline-flex items-center gap-1 font-mono text-xs text-primary uppercase font-bold">
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
              <span>&gt; CATÁLOGO_DE_SOLUCIONES // QUÉ_CONSTRUIMOS</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg uppercase text-on-background">
              Soluciones de Software que Generan Retorno
            </h2>
          </div>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            No vendemos líneas de código; construimos herramientas que aumentan la productividad de tu equipo y potencian el crecimiento de tu empresa.
          </p>
        </motion.div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {solutions.map((s, i) => (
            <motion.div
              key={s.code}
              className="bg-surface-container-lowest p-5 sm:p-6 border-3 border-black shadow-[4px_4px_0px_#191b23] flex flex-col justify-between gap-5 group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className={`p-2 border-2 border-black shadow-[2px_2px_0px_#191b23] ${s.iconBg}`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {s.icon}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] bg-surface-container px-2 py-0.5 text-on-surface-variant font-bold border border-black/10">
                    {s.code}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl uppercase text-on-surface group-hover:text-primary transition-colors font-black leading-tight">
                  {s.title}
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] bg-surface-container px-2 py-0.5 border border-black/15 font-semibold text-on-surface"
                  >
                    #{tag}
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
