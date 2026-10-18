import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { buildSupportInquiryUrl as supportUrl } from '../../utils/whatsapp'
import { trackEvent } from '../../utils/analytics'

export function SupportLink({
  children = 'Consultar por WhatsApp',
  message = 'Hola PixelTech, necesito soporte técnico en Huacho. Quisiera coordinar una revisión de mi equipo.',
  placement = 'support',
  className = '',
  ...props
}) {
  return (
    <a
      {...props}
      className={`sp-button ${className}`}
      href={supportUrl(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent('whatsapp_click', { placement })}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

export function SupportIntro({ eyebrow, title, children }) {
  return (
    <div className="sp-intro">
      <div>
        <span className="sp-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  )
}
