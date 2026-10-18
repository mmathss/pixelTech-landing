import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { diagnosticUrl } from '../../data/site'
import { trackEvent } from '../../utils/analytics'
export default function StudioWhatsAppCTA() {
  return (
    <aside className="pt-whatsapp">
      <MessageCircle size={23} aria-hidden="true" />
      <div>
        <strong>¿Prefieres conversar primero?</strong>
        <p>Escríbeme y coordinamos el diagnóstico por WhatsApp.</p>
      </div>
      <a
        href={diagnosticUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent('whatsapp_click', { placement: 'contact' })}
      >
        Escribir a Diego
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </aside>
  )
}
