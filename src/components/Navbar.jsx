import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { MessageCircle, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio',            href: '#inicio'    },
  { label: 'Servicios',         href: '#servicios' },
  { label: 'Por Qué Elegirnos', href: '#por-que'   },
  { label: 'Contacto',          href: '#contacto'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 20))

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 0 20px rgba(0,255,255,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,255,0.15)' : '1px solid transparent',
      }}
    >
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-mono font-bold text-xl">
            Pixel<span className="text-accent-cyan">Tech</span>
          </span>
          <span className="font-mono text-accent-green text-xs hidden sm:block">[PRO]</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-sm text-gray-300 hover:text-accent-cyan transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/51937718698"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-accent-green text-black font-mono font-bold text-xs px-4 py-2 rounded hover:bg-accent-cyan transition-colors"
        >
          <MessageCircle size={14} />
          WhatsApp: 937 718 698
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-accent-cyan/20 px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-gray-300 hover:text-accent-cyan transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/51937718698"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-green text-black font-mono font-bold text-xs px-4 py-2 rounded w-fit"
          >
            <MessageCircle size={14} />
            WhatsApp: 937 718 698
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
