import { motion } from 'framer-motion'

const reasons = [
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Ficha de Ingreso y Custodia',
    description: 'Registramos el número de serie, estado estético y componentes al recibir tu equipo en el taller.',
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    title: 'Presupuesto Previo Aprobado',
    description: 'Evaluamos en banco y te informamos el costo exacto antes de desmontar o reemplazar piezas. Cero sorpresas.',
  },
  {
    icon: 'fa-solid fa-camera',
    title: 'Fotos del Proceso por WhatsApp',
    description: 'Te enviamos fotografías del estado interno de tu equipo (polvo acumulado, pasta térmica seca o fallas visibles).',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Protocolo de Privacidad',
    description: 'Tus archivos personales permanecen intactos. Si se requiere formateo, coordinamos el respaldo de tu información.',
  },
  {
    icon: 'fa-solid fa-desktop',
    title: 'Prueba en Banco al Entregar',
    description: 'Encendemos y verificamos el equipo junto a ti en el taller para confirmar que todo funciona correctamente.',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Garantía Escrita de 30 Días',
    description: 'Respaldo documentado por 30 días calendario sobre el servicio técnico y mano de obra realizada.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-brand-darkblue border-b-4 border-black relative overflow-hidden" id="por-que-elegirnos">
      <div className="absolute right-0 top-0 w-24 h-24 pixel-checker opacity-10 border-l-2 border-black" />
      <div className="absolute left-0 bottom-0 w-24 h-24 pixel-checker-neon opacity-10 border-r-2 border-black" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-block bg-white text-black font-pixel font-bold text-sm uppercase px-4 py-1.5 border-2 border-black shadow-brutal-sm mb-4">
            Confianza y Seguridad
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Protocolo de Taller y Custodia
          </h2>
          <div className="w-24 h-1.5 bg-brand-neon mt-3 border border-black" />
          <p className="text-blue-100 mt-4 max-w-2xl text-base">
            Dejas tu herramienta de trabajo o estudio en buenas manos. Así cuidamos y reparamos cada equipo en Huacho:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              className="bg-brand-blue border-3 border-black p-6 flex items-start gap-5 shadow-brutal group hover:-translate-y-1 transition-transform"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 shrink-0 bg-brand-neon text-black border-2 border-black flex items-center justify-center text-xl shadow-brutal-sm group-hover:scale-110 transition-transform">
                <i className={icon} />
              </div>
              <div>
                <h3 className="font-black text-base text-white uppercase tracking-tight mb-1.5 group-hover:text-brand-neon transition-colors">
                  {title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            className="brutal-btn-neon inline-flex items-center gap-3 bg-brand-neon text-black px-8 py-4 font-black uppercase text-base border-[3px] border-black shadow-brutal"
            href="https://wa.me/51937718698?text=Hola%20PixelTech,%20solicito%20diagn%C3%B3stico%20t%C3%A9cnico"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-2xl text-emerald-800" />
            Solicitar Servicio Ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
