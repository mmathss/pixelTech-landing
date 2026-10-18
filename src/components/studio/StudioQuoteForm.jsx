import { useState } from 'react'
import { ArrowUpRight, CheckCircle, LoaderCircle } from 'lucide-react'
import { site } from '../../data/site'
import { trackEvent } from '../../utils/analytics'
import StudioWhatsAppCTA from './StudioWhatsAppCTA'
export default function StudioQuoteForm() {
  const [form, setForm] = useState({
    clientName: '',
    clientEmail: '',
    projectDesc: '',
    solutionType: 'No sé qué solución necesito',
    website: '',
  })
  const [status, setStatus] = useState('idle')
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value })
  const submit = async (event) => {
    event.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: AbortSignal.timeout(20000),
      })
      const result = await response.json()
      if (!response.ok || result.success !== true)
        throw new Error('No se pudo enviar')
      setStatus('success')
      trackEvent('lead_submitted', { placement: 'diagnostic_form' })
    } catch {
      setStatus('error')
      trackEvent('lead_error', { placement: 'diagnostic_form' })
    }
  }
  return (
    <section id="diagnostico" className="pt-section pt-contact-section">
      <div className="pt-container">
        <div className="pt-contact-grid">
          <div className="pt-contact-copy">
            <span className="pt-eyebrow">
              07 / El siguiente paso es una conversación
            </span>
            <h2>Cuéntame qué está frenando tu negocio.</h2>
            <p>
              No necesitas un documento técnico ni saber qué herramienta pedir.
              Coordinaremos una conversación de 20 minutos para entender el
              contexto y definir un siguiente paso.
            </p>
            <ul className="pt-check-list">
              <li>Primera conversación sin costo ni compromiso</li>
              <li>Contacto directo con Diego Arévalo</li>
              <li>Una recomendación inicial para avanzar</li>
            </ul>
            <p className="pt-small-note">
              Si el caso requiere un análisis más profundo, acordaremos su
              alcance y costo antes de realizarlo.
            </p>
          </div>
          <div className="pt-contact-card">
            <div className="pt-contact-card-bar">
              nuevo_mensaje.exe<span aria-hidden="true">↗</span>
            </div>
            {status === 'success' ? (
              <div className="pt-form-success" role="status">
                <CheckCircle size={38} />
                <h3>Tu mensaje llegó.</h3>
                <p>
                  Diego revisará tu consulta y te responderá al correo indicado
                  para coordinar la conversación.
                </p>
                <button
                  className="pt-button"
                  onClick={() => {
                    setStatus('idle')
                    setForm({
                      clientName: '',
                      clientEmail: '',
                      projectDesc: '',
                      solutionType: 'No sé qué solución necesito',
                      website: '',
                    })
                  }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="pt-form">
                <label htmlFor="clientName">
                  Tu nombre
                  <input
                    id="clientName"
                    name="clientName"
                    value={form.clientName}
                    onChange={update}
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="¿Cómo te llamas?"
                  />
                </label>
                <label htmlFor="clientEmail">
                  Correo de contacto
                  <input
                    id="clientEmail"
                    name="clientEmail"
                    type="email"
                    value={form.clientEmail}
                    onChange={update}
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="nombre@empresa.com"
                  />
                </label>
                <label htmlFor="projectDesc">
                  ¿Qué te gustaría resolver?
                  <textarea
                    id="projectDesc"
                    name="projectDesc"
                    value={form.projectDesc}
                    onChange={update}
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={4}
                    placeholder="Por ejemplo: llevamos el inventario en varios Excel y nos cuesta saber qué productos reponer."
                  />
                </label>
                <label htmlFor="solutionType">
                  ¿En qué punto estás?{' '}
                  <span className="pt-optional">Opcional</span>
                  <select
                    id="solutionType"
                    name="solutionType"
                    value={form.solutionType}
                    onChange={update}
                  >
                    <option>No sé qué solución necesito</option>
                    <option>Quiero ordenar un proceso</option>
                    <option>Quiero conectar herramientas</option>
                    <option>Quiero construir una solución</option>
                    <option>Quiero mejorar un sistema existente</option>
                  </select>
                </label>
                <div className="pt-honeypot" aria-hidden="true">
                  <label htmlFor="website">
                    Deja este campo vacío
                    <input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={update}
                    />
                  </label>
                </div>
                {status === 'error' && (
                  <div role="alert" className="pt-form-error">
                    No se pudo enviar tu mensaje. Tus datos siguen aquí: intenta
                    nuevamente o{' '}
                    <a href={`mailto:${site.email}`}>escríbeme por correo</a>.
                  </div>
                )}
                <p className="pt-form-privacy">
                  Usaré estos datos para responder tu consulta y coordinar el
                  diagnóstico.{' '}
                  <a href="/privacidad/">Cómo tratamos tu información</a>.
                </p>
                <button
                  type="submit"
                  className="pt-button pt-button-primary"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <LoaderCircle size={18} className="pt-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Solicitar diagnóstico de 20 minutos
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        <StudioWhatsAppCTA />
      </div>
    </section>
  )
}
