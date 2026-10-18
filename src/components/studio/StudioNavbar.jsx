import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/site'
import { Brand, DiagnosticLink } from './StudioUI'
export default function StudioNavbar() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return (
    <header className="pt-header">
      <div className="pt-container pt-nav">
        <Brand />
        <nav className="pt-desktop-nav" aria-label="Navegación principal">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="pt-nav-actions">
          <DiagnosticLink placement="navigation" className="pt-nav-cta">
            Conversemos
          </DiagnosticLink>
          <button
            ref={menuButton}
            className="pt-menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="pt-mobile-nav"
          aria-label="Navegación móvil"
        >
          {[
            ...navLinks,
            ['Diagnóstico sin costo', '/#diagnostico'],
            ['Soporte técnico', '/soporte/'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
