import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'Marzo 2026 — Actualidad',
    isCurrent: true,
    role: 'AI Software Engineer & Software Development',
    company: 'Digital Compass Consulting',
    desc: 'Diseño e implementación de soluciones de software asistidas por inteligencia artificial para acelerar el desarrollo y validación de funcionalidades. Desarrollo fullstack y backend integrando Java/Spring, Angular, Docker y AWS, utilizando herramientas avanzadas como Claude Code, Antigravity y Codex.',
    tags: ['AI Software', 'Java / Spring', 'Angular', 'AWS', 'Docker', 'Claude Code'],
  },
  {
    period: 'Diciembre 2025 — Marzo 2026',
    isCurrent: false,
    role: 'Desarrollo de Software Corporativo',
    company: 'INDRA PERÚ (Proyecto MAPFRE)',
    desc: 'Trabajo en entorno empresarial enterprise para el sector asegurador. Análisis y soporte sobre la arquitectura de los sistemas core de MAPFRE (TRON y Tronweb), utilizando el stack tecnológico corporativo en Oracle PL/SQL, Java y Angular.',
    tags: ['Java', 'Angular', 'Oracle PL/SQL', 'Sistemas Core', 'Entorno Enterprise'],
  },
  {
    period: 'Octubre 2025 — Diciembre 2025',
    isCurrent: false,
    role: 'Analista de Soporte N1 & Bases de Datos',
    company: 'Digital Compass Consulting',
    desc: 'Monitoreo operativo de sistemas corporativos, validación de datos mediante consultas complejas en SQL Server y MySQL, triaje de incidentes y reproducción de casos en ambientes de prueba (QA/Test) para asegurar la continuidad del servicio.',
    tags: ['SQL Server', 'MySQL', 'QA & Testing', 'Soporte N1', 'Validación de Procesos'],
  },
]

export default function StudioTimeline() {
  return (
    <section id="trayectoria" className="w-full bg-surface py-space-xl px-gutter scroll-mt-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col gap-space-xs text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1 font-label-md text-label-md text-primary uppercase">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            <span>&gt; ROADMAP_PROFESIONAL // HISTORIAL_DE_EXPERIENCIA</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-background tracking-tight">
            Trayectoria &amp; Experiencia
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Mi recorrido en empresas de consultoría tecnológica, proyectos corporativos del sector asegurador y desarrollo de software moderno con herramientas de IA.
          </p>
        </motion.div>

        {/* Git Log / Commit Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-4 border-black ml-2 sm:ml-4 flex flex-col gap-8 sm:gap-10 pt-2 pb-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              className="relative flex flex-col gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              {/* Git Node Indicator on the line */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 border-2 border-black shadow-[2px_2px_0px_#191b23] flex items-center justify-center ${
                  exp.isCurrent ? 'bg-secondary-fixed text-black' : 'bg-surface-container-highest text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[14px] sm:text-[16px]">
                  {exp.isCurrent ? 'terminal' : 'commit'}
                </span>
              </div>

              {/* Card Container */}
              <div className="bg-surface-container-lowest p-5 sm:p-6 border-2 border-black shadow-[4px_4px_0px_#191b23] hover:shadow-[6px_6px_0px_#191b23] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                {/* Header ribbon inside card */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="bg-surface-container-highest text-on-surface font-mono text-xs uppercase font-extrabold px-2.5 py-1 border border-black shadow-[1.5px_1.5px_0px_#191b23]">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 bg-secondary-fixed text-black font-mono text-[10px] sm:text-xs font-black px-2 py-0.5 border border-black">
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>ACTUALIDAD</span>
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">
                    {exp.company}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-headline-sm text-lg sm:text-xl uppercase text-on-surface font-black tracking-tight mb-2">
                  {exp.role}
                </h3>

                {/* Description */}
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
                  {exp.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] bg-surface-container px-2 py-0.5 border border-black/15 font-semibold text-on-surface"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
