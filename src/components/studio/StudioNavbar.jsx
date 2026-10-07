import { useState, useEffect } from 'react'
import logoImg from '../../assets/studio/pixelTech_logo.png'

const navLinks = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Tecnologías', href: '#stack', id: 'stack' },
  { label: 'Trayectoria', href: '#trayectoria', id: 'trayectoria' },
  { label: 'Contacto', href: '#cotizacion', id: 'cotizacion' },
]

export default function StudioNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b-4 border-black shadow-md select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        {/* Brand Block */}
        <a className="flex items-center gap-2 group shrink-0" href="#inicio">
          <div className="bg-secondary-fixed p-1.5 border-2 border-black shadow-[2px_2px_0px_#191b23] group-hover:rotate-3 transition-transform shrink-0">
            <img
              alt="PixelTech Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain brightness-0"
              src={logoImg}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-pixel text-black text-base sm:text-xl tracking-tight uppercase drop-shadow-[1.5px_1.5px_0px_#DFFF00]">
                PixelTech
              </span>
              <span className="bg-secondary-fixed text-black text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_#191b23] uppercase">
                STUDIO
              </span>
            </div>
            <span className="hidden sm:block text-[11px] font-mono text-on-surface-variant font-bold tracking-wider uppercase">
              Desarrollo de Software
            </span>
          </div>
        </a>

        {/* Desktop Nav (Visible on md and up: 768px+) */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-bold uppercase tracking-wider font-mono">
          {navLinks.map(({ label, href, id }) => {
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                className={`py-1 relative whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-primary font-black after:w-full after:bg-primary'
                    : 'text-on-surface hover:text-primary after:w-0 hover:after:w-full after:bg-primary'
                } after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:transition-all`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Cotizar CTA Button (visible en pantallas sm: 640px en adelante) */}
          <a
            className="hidden sm:inline-flex items-center gap-1.5 bg-secondary-fixed text-black font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm uppercase border-2 border-black shadow-[2px_2px_0px_#191b23] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#191b23] active:translate-x-[1px] active:translate-y-[1px] transition-all whitespace-nowrap"
            href="#cotizacion"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">terminal</span>
            <span>Cotizar</span>
          </a>

          {/* Hamburger button (Visible on screens < md: 768px) */}
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-secondary-fixed border-2 border-black shadow-[2px_2px_0px_#191b23] text-black active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px] block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t-4 border-black px-4 py-3 flex flex-col gap-2 shadow-[0_6px_0_0_#191b23]">
          {navLinks.map(({ label, href, id }) => (
            <a
              key={href}
              onClick={() => {
                setActiveSection(id)
                setMobileMenuOpen(false)
              }}
              className={`font-mono text-xs uppercase px-3 py-2.5 border-2 border-black shadow-[2px_2px_0px_#191b23] transition-colors ${
                activeSection === id
                  ? 'bg-primary-container text-on-primary font-bold'
                  : 'bg-surface-container text-on-surface hover:bg-secondary-fixed hover:text-black'
              }`}
              href={href}
            >
              &gt; {label}
            </a>
          ))}

          {/* Botón Destacado de Cotizar en móvil */}
          <a
            href="#cotizacion"
            onClick={() => {
              setActiveSection('cotizacion')
              setMobileMenuOpen(false)
            }}
            className="flex items-center justify-center gap-2 bg-secondary-fixed text-black font-mono text-xs uppercase py-3 border-2 border-black shadow-[3px_3px_0px_#191b23] font-black active:translate-x-0.5 active:translate-y-0.5 transition-all mt-1"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>Cotizar Proyecto</span>
          </a>
        </div>
      )}
    </header>
  )
}
