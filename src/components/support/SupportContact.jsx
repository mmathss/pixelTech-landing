import { useState, useSyncExternalStore } from 'react'
import { ArrowUpRight, Clock, MapPin, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { site } from '../../data/site'
import { services } from '../../data/services'
import { trackEvent } from '../../utils/analytics'
import { SupportIntro, SupportLink } from './SupportUI'

const subscribe = () => () => {}
const clientReady = () => true
const serverReady = () => false

export default function SupportContact() {
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady)
  const [form, setForm] = useState({
    nombre: '',
    tipo: 'Laptop',
    servicio: 'No sé qué servicio necesito',
    descripcion: '',
  })
  const [status, setStatus] = useState('')
  const update = (event) =>
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }))
  const url = buildWhatsAppUrl(form)
  const submit = (event) => {
    event.preventDefault()
    if (!form.nombre.trim() || !form.descripcion.trim()) {
      setStatus(
        'Escribe tu nombre y una descripción del problema para preparar la consulta.',
      )
      return
    }
    const destination = buildWhatsAppUrl({
      ...form,
      nombre: form.nombre.trim(),
      descripcion: form.descripcion.trim(),
    })
    window.open(destination, '_blank', 'noopener,noreferrer')
    setStatus(
      'Intentamos abrir WhatsApp. Revisa el mensaje y envíalo allí para iniciar la consulta. Si no se abrió, usa el enlace de abajo.',
    )
    trackEvent('whatsapp_click', { placement: 'support_form' })
  }
  return (
    <section id="contacto" className="sp-section sp-contact">
      <div className="sp-container">
        <SupportIntro
          eyebrow="06 / El siguiente paso"
          title="Cuéntanos qué le pasa."
        >
          Una descripción del problema nos ayuda a coordinar la revisión. No
          necesitas elegir una reparación por tu cuenta.
        </SupportIntro>
        <div className="sp-contact-grid">
          <div className="sp-contact-info">
            <h3>Coordinemos antes de que vengas.</h3>
            <p>
              Consulta disponibilidad y condiciones de evaluación. Te
              compartimos la ubicación del taller por WhatsApp.
            </p>
            <ul>
              <li>
                <MessageCircle size={20} aria-hidden="true" />
                <SupportLink
                  className="sp-inline-link"
                  placement="support_contact_phone"
                >
                  {site.phone}
                </SupportLink>
              </li>
              <li>
                <Clock size={20} aria-hidden="true" />
                <span>
                  Lunes a sábado · 8:00 a. m. a 8:00 p. m.
                  <small>
                    Horario de contacto. Recepción con confirmación previa.
                  </small>
                </span>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <span>
                  Huacho, Lima · Atención en taller
                  <small>Confirma ubicación y hora antes de trasladarte.</small>
                </span>
              </li>
            </ul>
            <a href="/privacidad/" className="sp-text-link">
              Cómo usamos tus datos{' '}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <noscript>
            <div className="sp-contact-form-fallback">
              <h3>Consulta directamente por WhatsApp</h3>
              <p>
                Cuéntanos qué equipo tienes y qué problema presenta para
                coordinar una revisión.
              </p>
              <SupportLink placement="support_contact_direct">
                Consultar por WhatsApp
              </SupportLink>
            </div>
          </noscript>
          <form
            hidden={!ready}
            className="sp-contact-form"
            onSubmit={submit}
            aria-labelledby="support-form-title"
          >
            <h3 id="support-form-title">Prepara tu consulta</h3>
            <p id="support-form-help">
              Completa los datos y abre WhatsApp con tu consulta preparada. El
              mensaje se envía cuando tú lo confirmas en WhatsApp.
            </p>
            <label htmlFor="support-name">
              Tu nombre <span>(obligatorio)</span>
            </label>
            <input
              id="support-name"
              name="nombre"
              autoComplete="given-name"
              required
              maxLength={100}
              value={form.nombre}
              onChange={update}
              placeholder="¿Cómo te llamas?"
            />
            <div className="sp-form-row">
              <div>
                <label htmlFor="support-type">Tipo de equipo</label>
                <select
                  id="support-type"
                  name="tipo"
                  value={form.tipo}
                  onChange={update}
                >
                  <option>Laptop</option>
                  <option>PC de escritorio</option>
                  <option>All-in-One</option>
                  <option>Disco o unidad externa</option>
                  <option>Otro equipo / no estoy seguro</option>
                </select>
              </div>
              <div>
                <label htmlFor="support-service">¿Qué necesitas?</label>
                <select
                  id="support-service"
                  name="servicio"
                  value={form.servicio}
                  onChange={update}
                >
                  <option>No sé qué servicio necesito</option>
                  {services.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="support-description">
              ¿Qué problema presenta? <span>(obligatorio)</span>
            </label>
            <textarea
              id="support-description"
              name="descripcion"
              required
              maxLength={2000}
              rows={4}
              value={form.descripcion}
              onChange={update}
              placeholder="Por ejemplo: se apaga después de unos minutos. Si sabes la marca y el modelo, inclúyelos."
            />
            <p className="sp-form-privacy">
              Usamos estos datos para atender tu consulta. Evita incluir
              contraseñas o archivos privados.{' '}
              <a href="/privacidad/">Ver privacidad</a>.
            </p>
            <button
              className="sp-button"
              type="submit"
              aria-describedby="support-form-help"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Abrir consulta en WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            {status && (
              <div className="sp-form-status">
                <p role="status">{status}</p>
                <a href={url} target="_blank" rel="noreferrer">
                  Abrir WhatsApp con mi consulta{' '}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
