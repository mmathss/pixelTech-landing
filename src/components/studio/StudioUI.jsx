import { ArrowUpRight, Monitor } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'
export function Brand({ support = false }) {
  return (
    <a href="/" className="pt-brand" aria-label="PixelTech, inicio">
      <span className="pt-brand-icon">
        <Monitor size={25} strokeWidth={2.4} aria-hidden="true" />
        <span aria-hidden="true">›_</span>
      </span>
      <span>
        <strong>
          PixelTech<span className="pt-brand-dot">.</span>
        </strong>
        <small>{support ? 'Soporte técnico' : 'Consultoría & software'}</small>
      </span>
    </a>
  )
}
export function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="pt-section-intro">
      <div>
        <span className="pt-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  )
}
export function DiagnosticLink({
  children = 'Agenda un diagnóstico',
  placement = 'section',
  className = '',
  href = '/#diagnostico',
}) {
  return (
    <a
      className={`pt-button pt-button-primary ${className}`}
      href={href}
      onClick={() => trackEvent('diagnostic_click', { placement })}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  )
}
