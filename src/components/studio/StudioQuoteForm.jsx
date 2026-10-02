import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const solutionOptions = [
  {
    id: 'web',
    label: 'Página o Plataforma Web',
    icon: 'desktop_windows',
    sub: 'Portales, catálogos y paneles de gestión',
  },
  {
    id: 'desktop',
    label: 'Sistema de Escritorio',
    icon: 'laptop_windows',
    sub: 'Software para Windows, inventarios y caja',
  },
  {
    id: 'backend',
    label: 'Backend & Conexión de APIs',
    icon: 'dns',
    sub: 'Lógica interna, pasarelas y servicios',
  },
  {
    id: 'database',
    label: 'Bases de Datos & Reportes',
    icon: 'database',
    sub: 'Organización de datos, SQL y consultas',
  },
  {
    id: 'improve',
    label: 'Mejorar o Reparar Sistema',
    icon: 'build',
    sub: 'Corrección de fallas, lentitud o mejoras',
  },
  {
    id: 'consulting',
    label: 'Asesoría o Idea Inicial',
    icon: 'lightbulb',
    sub: 'Orientación técnica, alcance y costos',
  },
]

const urgencyOptions = [
  'Urgente (En menos de 7 días)',
  'Plazo regular (2 a 4 semanas)',
  'Solo cotización preliminar',
]

export default function StudioQuoteForm() {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    solutionType: 'Página o Plataforma Web',
    urgency: 'Plazo regular (2 a 4 semanas)',
    projectDesc: '',
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un error al enviar el correo.')
      }

      setStatus('success')
    } catch (err) {
      console.error('Error al enviar formulario:', err)
      setStatus('error')
      setErrorMessage(
        err.message || 'No se pudo enviar el correo. Por favor intenta nuevamente o contáctanos directamente.'
      )
    }
  }

  const handleReset = () => {
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      solutionType: 'Página o Plataforma Web',
      urgency: 'Plazo regular (2 a 4 semanas)',
      projectDesc: '',
    })
    setStatus('idle')
    setErrorMessage('')
  }

  return (
    <section id="cotizacion" className="w-full bg-surface py-space-xl px-gutter scroll-mt-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
        {/* Friendly Header */}
        <motion.div
          className="flex flex-col gap-space-xs text-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1 font-mono text-xs font-bold text-primary uppercase bg-surface-container px-2.5 py-1 border border-black shadow-[2px_2px_0px_#191b23]">
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>&gt; COTIZACION_DIRECTA_EMAIL</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-background tracking-tight">
            ¿Tienes una idea o proyecto en mente?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Cuéntame qué solución necesitas construir y te responderé directamente por correo electrónico con una propuesta técnica y cotización clara.
          </p>
        </motion.div>

        {/* Client-Friendly Retro Box */}
        <motion.div
          className="bg-surface-container-lowest p-6 sm:p-8 border-2 border-black shadow-[6px_6px_0px_#191b23]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Box Top Ribbon */}
          <div className="bg-surface-container-highest px-3 py-1.5 flex items-center justify-between mb-6 font-mono text-xs text-on-surface-variant border border-black select-none">
            <span className="font-bold">PIXELTECH STUDIO // SOLICITUD DE COTIZACIÓN</span>
            <span className="text-primary font-bold hidden sm:inline">RESPUESTA EN &lt; 24 HORAS</span>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center text-center py-8 px-4 gap-4 bg-surface-container-low border-2 border-black shadow-[4px_4px_0px_#191b23]"
              >
                <div className="w-16 h-16 bg-secondary-fixed text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#191b23]">
                  <span className="material-symbols-outlined text-4xl">mark_email_read</span>
                </div>

                <div className="inline-flex items-center gap-1 font-mono text-xs font-bold text-primary uppercase bg-surface-container-highest px-2 py-0.5 border border-black">
                  &gt; ESTADO: ENVIADO_CON_EXITO
                </div>

                <h3 className="font-headline-sm text-2xl uppercase tracking-tight text-on-surface font-extrabold">
                  ¡Solicitud Enviada Correctamente!
                </h3>

                <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-lg">
                  Hemos recibido tu requerimiento de <strong>{formData.solutionType}</strong>. Te responderemos desde{' '}
                  <span className="font-mono font-bold text-primary">dmarevalo-pixeltech@outlook.com</span> directamente a{' '}
                  <span className="font-mono font-bold text-on-surface">{formData.clientEmail}</span> con una estimación de tiempos y costos.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-secondary-fixed text-black hover:bg-surface-container-highest hover:text-on-surface font-mono text-xs uppercase font-extrabold border-2 border-black shadow-[3px_3px_0px_#191b23] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    [ + Enviar otra consulta ]
                  </button>
                </div>
              </motion.div>
            ) : (
              <form key="form-body" onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Step 1: Solution Options with Blue Material Symbols */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs sm:text-sm uppercase font-bold text-on-surface flex items-center gap-1.5">
                    <span className="w-5 h-5 bg-secondary-fixed text-black flex items-center justify-center text-[10px] border border-black font-mono">
                      01
                    </span>
                    <span>Selecciona el tipo de proyecto o solución *</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                    {solutionOptions.map((opt) => {
                      const isSelected = formData.solutionType === opt.label
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, solutionType: opt.label })
                          }
                          className={`flex items-center gap-3 p-3 text-left border-2 border-black transition-all cursor-pointer font-sans text-xs sm:text-sm ${
                            isSelected
                              ? 'bg-secondary-fixed text-black font-extrabold shadow-[3px_3px_0px_#191b23] -translate-x-0.5 -translate-y-0.5'
                              : 'bg-surface-container-low text-on-surface hover:bg-surface-container shadow-[2px_2px_0px_#191b23]'
                          }`}
                        >
                          <span className="w-9 h-9 bg-surface-container-lowest border border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_#191b23] shrink-0">
                            <span className="material-symbols-outlined text-[20px] text-primary">
                              {opt.icon}
                            </span>
                          </span>
                          <div className="flex flex-col">
                            <span className="leading-tight font-bold">{opt.label}</span>
                            <span className="font-mono text-[10px] text-on-surface-variant font-medium">
                              {opt.sub}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 2: Contact Info (Name & Email) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="clientName"
                      className="font-mono text-xs sm:text-sm uppercase font-bold text-on-surface flex items-center gap-1.5"
                    >
                      <span className="w-5 h-5 bg-secondary-fixed text-black flex items-center justify-center text-[10px] border border-black font-mono">
                        02
                      </span>
                      <span>Nombre o Empresa *</span>
                    </label>
                    <input
                      id="clientName"
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) =>
                        setFormData({ ...formData, clientName: e.target.value })
                      }
                      placeholder="Ej. Carlos Mendoza / Inversiones SAC"
                      className="w-full p-3 bg-surface-container-low text-on-surface font-sans text-sm border-2 border-black shadow-[2px_2px_0px_#191b23] focus:bg-surface-container-lowest focus:outline-none focus:shadow-[4px_4px_0px_#004bd6] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="clientEmail"
                      className="font-mono text-xs sm:text-sm uppercase font-bold text-on-surface flex items-center gap-1.5"
                    >
                      <span className="w-5 h-5 bg-secondary-fixed text-black flex items-center justify-center text-[10px] border border-black font-mono">
                        03
                      </span>
                      <span>Tu Correo Electrónico *</span>
                    </label>
                    <input
                      id="clientEmail"
                      type="email"
                      required
                      value={formData.clientEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, clientEmail: e.target.value })
                      }
                      placeholder="nombre@empresa.com"
                      className="w-full p-3 bg-surface-container-low text-on-surface font-sans text-sm border-2 border-black shadow-[2px_2px_0px_#191b23] focus:bg-surface-container-lowest focus:outline-none focus:shadow-[4px_4px_0px_#004bd6] transition-all"
                    />
                  </div>
                </div>

                {/* Step 3: Phone (Optional) & Urgency */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="clientPhone"
                      className="font-mono text-xs sm:text-sm uppercase font-bold text-on-surface flex items-center gap-1.5"
                    >
                      <span className="w-5 h-5 bg-surface-container-highest text-on-surface flex items-center justify-center text-[10px] border border-black font-mono">
                        04
                      </span>
                      <span>Teléfono / WhatsApp (Opcional)</span>
                    </label>
                    <input
                      id="clientPhone"
                      type="tel"
                      value={formData.clientPhone}
                      onChange={(e) =>
                        setFormData({ ...formData, clientPhone: e.target.value })
                      }
                      placeholder="+51 999 999 999"
                      className="w-full p-3 bg-surface-container-low text-on-surface font-sans text-sm border-2 border-black shadow-[2px_2px_0px_#191b23] focus:bg-surface-container-lowest focus:outline-none focus:shadow-[4px_4px_0px_#004bd6] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="urgency"
                      className="font-mono text-xs sm:text-sm uppercase font-bold text-on-surface flex items-center gap-1.5"
                    >
                      <span className="w-5 h-5 bg-secondary-fixed text-black flex items-center justify-center text-[10px] border border-black font-mono">
                        05
                      </span>
                      <span>Plazo Estimado de Entrega</span>
                    </label>
                    <select
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) =>
                        setFormData({ ...formData, urgency: e.target.value })
                      }
                      className="w-full p-3 bg-surface-container-low text-on-surface font-sans text-sm border-2 border-black shadow-[2px_2px_0px_#191b23] focus:bg-surface-container-lowest focus:outline-none focus:shadow-[4px_4px_0px_#004bd6] transition-all"
                    >
                      {urgencyOptions.map((u) => (
                        <option key={u} value={u}>
                          {u}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Step 4: Brief Description */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="projectDesc"
                    className="font-mono text-xs sm:text-sm uppercase font-bold text-on-surface flex items-center gap-1.5"
                  >
                    <span className="w-5 h-5 bg-secondary-fixed text-black flex items-center justify-center text-[10px] border border-black font-mono">
                      06
                    </span>
                    <span>Cuéntame sobre tu idea o requerimiento principal</span>
                  </label>
                  <textarea
                    id="projectDesc"
                    rows={3}
                    value={formData.projectDesc}
                    onChange={(e) =>
                      setFormData({ ...formData, projectDesc: e.target.value })
                    }
                    placeholder="Ej. Necesitamos desarrollar una plataforma web para gestionar citas, conectar una base de datos PostgreSQL y automatizar alertas a clientes..."
                    className="w-full p-3 bg-surface-container-low text-on-surface font-sans text-sm border-2 border-black shadow-[2px_2px_0px_#191b23] focus:bg-surface-container-lowest focus:outline-none focus:shadow-[4px_4px_0px_#004bd6] transition-all"
                  ></textarea>
                </div>

                {/* Error Banner if any */}
                {status === 'error' && (
                  <div className="p-3 bg-red-100 border-2 border-red-600 text-red-900 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-[2px_2px_0px_#991b1b]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-red-600 text-base">error</span>
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={`mailto:dmarevalo-pixeltech@outlook.com?subject=Cotización PixelTech Studio: ${encodeURIComponent(formData.solutionType)}&body=${encodeURIComponent(`Cliente: ${formData.clientName}\nEmail: ${formData.clientEmail}\nPlazo: ${formData.urgency}\n\nDetalle:\n${formData.projectDesc}`)}`}
                      className="font-bold underline text-red-900 shrink-0"
                    >
                      Enviar vía cliente de correo &gt;
                    </a>
                  </div>
                )}

                {/* Reassurance Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-xs text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                    <span>Sin costos por consultar</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
                    <span>Respuesta a tu correo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
                    <span>Trato directo con el desarrollador</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-3.5 bg-secondary-fixed text-black font-headline-sm text-base sm:text-lg uppercase tracking-wide flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_#191b23] transition-all font-extrabold ${
                    status === 'loading'
                      ? 'opacity-70 cursor-wait'
                      : 'hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#191b23] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined text-[22px] animate-spin">
                        progress_activity
                      </span>
                      <span>ENVIANDO_SOLICITUD...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[22px]">send</span>
                      <span>Enviar Solicitud por Correo</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
