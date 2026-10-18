import { ArrowUpRight } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'
import BrandArtwork from './BrandArtwork'
export function Brand({ support = false, inverse = false }) {
  return (
    <a
      href="/"
      className={`pt-brand${inverse ? ' pt-brand-inverse' : ''}`}
      aria-label="PixelTech, inicio"
    >
      {!inverse && (
        <BrandArtwork variant="wordmark" className="pt-brand-wordmark" />
      )}
      <span className="pt-brand-compact">
        <BrandArtwork className="pt-brand-symbol" />
        <span aria-hidden="true">
          <strong>
            PixelTech<span className="pt-brand-dot">.</span>
          </strong>
          <small>
            {support ? 'Soporte técnico' : 'Consultoría & software'}
          </small>
        </span>
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
