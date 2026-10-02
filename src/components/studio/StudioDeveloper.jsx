import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { techStackData } from '../../data/techStack'

const categories = [
  'Backend',
  'Bases de Datos',
  'Frontend',
  'Cloud & DevOps',
  'IA & Tooling',
]

export default function StudioDeveloper() {
  const [selectedCategory, setSelectedCategory] = useState('Backend')

  const filteredTechnologies = techStackData.filter(
    (tech) => tech.category === selectedCategory
  )

  return (
    <section
      id="desarrollador"
      className="w-full bg-surface-container-low py-space-xl px-gutter shadow-[0_4px_0_0_#191b23] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg scroll-mt-20" id="stack">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="inline-flex items-center gap-1 font-label-md text-label-md text-primary uppercase">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>&gt; TECH_STACK_MATRIX // CORE_SKILLS</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-background tracking-tight">
              Tecnologías &amp; Stack Principal
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Herramientas, frameworks y motores de base de datos que domino para construir soluciones de software de alto rendimiento, código limpio y arquitectura cloud.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 self-start md:self-end bg-inverse-surface text-secondary-fixed font-mono text-xs font-bold px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_#191b23]">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span>DOMINIO_AUDITADO_2026</span>
          </div>
        </motion.div>

        {/* Filter Categories Tabs */}
        <motion.div
          className="flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            const count = techStackData.filter((t) => t.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-secondary-fixed text-black font-black shadow-[3px_3px_0px_#191b23] -translate-x-0.5 -translate-y-0.5'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-[2px_2px_0px_#191b23]'
                }`}
              >
                {cat} <span className="opacity-70 text-[10px]">({count})</span>
              </button>
            )
          })}
        </motion.div>

        {/* Animated Tech Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5"
        >
          <AnimatePresence>
            {filteredTechnologies.map((tech, i) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group bg-surface-container-lowest p-4 border-2 border-black shadow-[3px_3px_0px_#191b23] hover:shadow-[5px_5px_0px_#191b23] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col items-center text-center justify-between gap-3 cursor-default"
              >
                {/* SVG Icon with Neo-Brutalist Frame */}
                <div
                  className="w-14 h-14 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#191b23] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200"
                  style={{ backgroundColor: tech.bg }}
                >
                  {tech.icon}
                </div>

                {/* Tech Details */}
                <div className="flex flex-col items-center gap-1 w-full">
                  <span className="font-headline-sm text-sm uppercase text-on-surface font-extrabold group-hover:text-primary transition-colors leading-tight">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 border border-black/10 w-full truncate font-bold">
                    {tech.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Developer Verification & Repositories Console Banner */}
        <motion.div
          className="bg-inverse-surface text-inverse-on-surface p-space-md border-2 border-black shadow-[5px_5px_0px_#191b23] flex flex-col md:flex-row items-center justify-between gap-space-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-secondary-fixed text-black border-2 border-black shadow-[2px_2px_0px_#000]">
              <span className="material-symbols-outlined text-[24px]">terminal</span>
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-secondary-fixed font-bold">
                root@pixeltech:~# git verify --author=@mmathss
              </span>
              <span className="font-headline-sm text-sm sm:text-base text-white uppercase tracking-tight">
                Diego Matías — Código Limpio, Testing &amp; Repositorios Públicos
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-stretch sm:self-auto justify-end">
            <a
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-secondary-fixed text-black font-mono text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              href="https://github.com/mmathss"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>GitHub @mmathss</span>
            </a>
            <a
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-primary-container text-on-primary font-mono text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              href="https://linkedin.com/in/dmarevalo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">link</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
