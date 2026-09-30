import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, Shield, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const DEVICE_TYPES = ['Laptop/Notebook', 'PC Escritorio/Torre', 'All-in-One', 'Disco Externo']
const SERVICE_OPTIONS = [
  'Diagnóstico General',
  'Formateo',
  'Repotenciación SSD/RAM',
  'Limpieza',
  'Recuperación de Datos',
]

const INFO_ITEMS = [
  { Icon: Phone,  text: '+51 937 718 698',                                    href: 'tel:+51937718698' },
  { Icon: Clock,  text: 'Lunes a Sábado: 8:00 AM – 8:00 PM' },
  { Icon: MapPin, text: 'Servicio a Domicilio y en Taller' },
  { Icon: Shield, text: 'Respaldo seguro de datos y garantía por escrito' },
]

const inputClass =
  'w-full bg-black border border-accent-cyan/30 text-white font-mono text-sm px-4 py-3 rounded focus:outline-none focus:border-accent-cyan transition-colors placeholder-gray-600'

const labelClass = 'block font-mono text-xs text-accent-green mb-1 uppercase tracking-wider'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', tipo: '', servicio: '', descripcion: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nombre.trim() || !form.descripcion.trim()) {
      setError('Nombre y descripción del problema son requeridos.')
      return
    }
    window.open(buildWhatsAppUrl(form), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info column */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-mono text-accent-green text-xs mb-2">&gt;_ CONTACTO</p>
            <h2 className="font-mono font-bold text-3xl lg:text-4xl">
              ¿Problemas con tu PC o <span className="text-accent-cyan">Laptop?</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Envíanos un mensaje describiendo la falla. Recibirás diagnóstico inicial o presupuesto sin compromiso.
          </p>
          <div className="space-y-4">
            {INFO_ITEMS.map(({ Icon, text, href }) => (
              <div key={text} className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-accent-cyan/10 mt-0.5 flex-shrink-0">
                  <Icon size={14} className="text-accent-cyan" />
                </div>
                {href ? (
                  <a href={href} className="font-mono text-sm text-gray-300 hover:text-accent-cyan transition-colors">
                    {text}
                  </a>
                ) : (
                  <p className="font-mono text-sm text-gray-300">{text}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-bg-card rounded-lg p-8 border border-accent-cyan/20">
            <h3 className="font-mono font-bold text-lg mb-6 text-accent-cyan">
              Solicitar Diagnóstico Rápido
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className={labelClass}>
                  Nombre Completo <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Tipo de Equipo</label>
                <select name="tipo" value={form.tipo} onChange={handleChange} className={inputClass}>
                  <option value="">Seleccionar...</option>
                  {DEVICE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}>Servicio de Interés</label>
                <select name="servicio" value={form.servicio} onChange={handleChange} className={inputClass}>
                  <option value="">Seleccionar...</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Descripción del Problema <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe el problema de tu equipo..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && (
                <p className="font-mono text-red-400 text-xs">{error}</p>
              )}

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent-green text-black font-mono font-bold py-4 rounded-lg"
                whileHover={{ scale: 1.01, backgroundColor: '#00ffff' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={18} />
                Enviar Consulta Directa por WhatsApp
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
