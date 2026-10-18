import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import BrandArtwork from '../studio/BrandArtwork'
import { SupportLink } from './SupportUI'

const links = [
  ['Servicios', '#servicios'],
  ['Cómo funciona', '#proceso'],
  ['Preguntas', '#preguntas'],
  ['Contacto', '#contacto'],
]

export default function SupportHeader() {
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  const menu = useRef(null)
  useEffect(() => {
    if (!open) return
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const outside = (event) => {
      if (
        !menu.current?.contains(event.target) &&
        !toggle.current?.contains(event.target)
      )
        setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1100px)')
    const onResize = () => {
      if (desktop.matches) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', outside)
    desktop.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', outside)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])
  return (
    <header className="sp-header">
      <div className="sp-container sp-header-row">
        <a
          href="#inicio"
          className="sp-brand"
          aria-label="PixelTech, soporte técnico, inicio"
        >
          <BrandArtwork className="sp-brand-icon" />
          <span>
            <strong>
              PixelTech<span>.</span>
            </strong>
            <small>Soporte técnico</small>
          </span>
        </a>
        <nav className="sp-desktop-nav" aria-label="Navegación de soporte">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="sp-header-actions">
          <a
            className="sp-software-link"
            href="/"
            aria-label="Ir a consultoría y software"
          >
            Software <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <SupportLink placement="support_header" className="sp-header-cta">
            <span>WhatsApp</span>
          </SupportLink>
          <button
            className="sp-menu-button"
            ref={toggle}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={
              open ? 'Cerrar menú de soporte' : 'Abrir menú de soporte'
            }
            aria-expanded={open}
            aria-controls="support-menu"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        ref={menu}
        id="support-menu"
        className="sp-mobile-nav"
        aria-label="Navegación móvil de soporte"
        hidden={!open}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
        <a href="/">
          Consultoría y software <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
