import { useState } from 'react'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    tipo: 'Laptop',
    servicio: 'Diagnóstico General',
    descripcion: '',
  })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    window.open(buildWhatsAppUrl(form), '_blank')
  }

  const inputClass =
    'w-full bg-slate-100 border-2 border-black p-2.5 text-sm focus:bg-white focus:outline-none focus:ring-0 focus:border-brand-blue font-medium'

  return (
    <section className="py-16 bg-brand-blue relative" id="contacto">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <motion.div
          className="bg-brand-darkblue border-4 border-black p-6 sm:p-10 shadow-brutal-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left info panel */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="bg-brand-neon text-black font-mono text-xs font-black uppercase px-2.5 py-1 border border-black shadow-brutal-sm inline-block mb-3">
                  Contacto Directo
                </span>
                <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-4">
                  ¿Problemas con tu PC o Laptop?
                </h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Envíanos un mensaje detallando la falla de tu equipo y te responderemos inmediatamente con una estimación previa o diagnóstico inicial.
                </p>

                <div className="space-y-4 text-sm font-bold">
                  {[
                    { icon: 'fa-brands fa-whatsapp', text: '+51 937 718 698' },
                    { icon: 'fa-solid fa-clock', text: 'Lunes a Sábado: 8:00 AM - 8:00 PM' },
                    { icon: 'fa-solid fa-location-dot', text: 'Servicio a Domicilio y en Taller' },
                    { icon: 'fa-solid fa-map-pin', text: 'Huacho, Lima — Perú' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-brand-neon text-black border border-black flex items-center justify-center text-sm shadow-[2px_2px_0px_#000]">
                        <i className={icon} />
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
                <img
                  alt="PixelTech mini"
                  className="w-12 h-12 object-contain bg-brand-neon p-1 border border-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE5uQIPmkLqJImHHI0lEIYCFTF27yfAR05v8ukKyMK-GsYg61EB26topmnYpR3UkdrWH8AVJKMdz0j9Q3S3d_DeKg-QIS-8vSHsr0hD-eu58j9sHIbqRnzswEVbVN-gB48umnOJcKAWZPfpyEsRpW0esa2cqqIhWOY_SNR86SCLTBkx8x78YhHXV4AljLrleKLnGjHZkWqE5DEcDqRq2o25ub7YsmypyYDPk9BNQdDLiMnMBAJ-3s3IJCIrz8D_Q8TqA"
                />
                <p className="text-xs text-blue-200">
                  Respaldo seguro de datos y garantía por escrito en cada servicio.
                </p>
              </div>
            </div>

            {/* Right form panel */}
            <div className="lg:col-span-7 bg-white text-black p-6 border-[3px] border-black shadow-brutal">
              <h4 className="text-xl font-black uppercase tracking-tight mb-1 text-black">
                Solicitar Diagnóstico Rápido
              </h4>
              <p className="text-xs text-neutral-600 mb-5">Completa el formulario para enviarte la respuesta vía WhatsApp.</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1" htmlFor="nombre">
                    Tu Nombre Completo *
                  </label>
                  <input
                    className={inputClass}
                    id="nombre"
                    name="nombre"
                    placeholder="Ej. Juan Pérez"
                    required
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase mb-1" htmlFor="tipo">
                      Tipo de Equipo *
                    </label>
                    <select
                      className={inputClass}
                      id="tipo"
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                    >
                      <option value="Laptop">Laptop / Notebook</option>
                      <option value="PC de Escritorio">PC de Escritorio / Torre</option>
                      <option value="PC Todo en Uno (All-in-One)">All-in-One</option>
                      <option value="Disco / Memoria">Disco Duro o SSD Externo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase mb-1" htmlFor="servicio">
                      Servicio de Interés
                    </label>
                    <select
                      className={inputClass}
                      id="servicio"
                      name="servicio"
                      value={form.servicio}
                      onChange={handleChange}
                    >
                      <option value="Diagnóstico General">Diagnóstico General</option>
                      <option value="Formateo e Instalación">Formateo de Sistema</option>
                      <option value="Repotenciación SSD/RAM">Repotenciación SSD / RAM</option>
                      <option value="Limpieza y Mantenimiento">Limpieza y Pasta Térmica</option>
                      <option value="Recuperación de Archivos">Recuperación de Datos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase mb-1" htmlFor="descripcion">
                    ¿Qué problema presenta el equipo? *
                  </label>
                  <textarea
                    className={inputClass}
                    id="descripcion"
                    name="descripcion"
                    placeholder="Describe brevemente: no enciende, pantalla azul, lentitud extrema..."
                    required
                    rows={3}
                    value={form.descripcion}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="brutal-btn-neon w-full bg-brand-neon hover:bg-brand-neonHover text-black py-3.5 px-4 font-black uppercase text-sm border-2 border-black shadow-brutal flex items-center justify-center gap-2"
                  type="submit"
                >
                  <i className="fa-brands fa-whatsapp text-lg text-emerald-800" />
                  Enviar Consulta Directa por WhatsApp
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
