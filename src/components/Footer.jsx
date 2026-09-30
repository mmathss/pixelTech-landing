import { MessageCircle } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Inicio',                href: '#inicio'    },
  { label: 'Catálogo de Servicios', href: '#servicios' },
  { label: 'Nuestras Garantías',    href: '#por-que'   },
  { label: 'Solicitar Diagnóstico', href: '#contacto'  },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-accent-cyan/20 pt-16 pb-8 px-6">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="font-mono font-bold text-2xl">
                Pixel<span className="text-accent-cyan">Tech</span>
              </span>
              <span className="font-mono text-accent-green text-xs ml-2">[PRO]</span>
            </div>
            <p className="font-mono text-accent-green text-xs">&gt; TU EQUIPO EN BUENAS MANOS</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soporte técnico para computadoras, laptops y equipos de trabajo. Especialistas en formateo y upgrades SSD.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono font-bold text-xs text-accent-cyan uppercase tracking-widest mb-4">
              Acceso Rápido
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-mono text-sm text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    &gt; {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-bold text-xs text-accent-cyan uppercase tracking-widest mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/51937718698"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <MessageCircle size={14} className="text-accent-green" />
                +51 937 718 698
              </a>
              <p className="font-mono text-xs text-gray-500">Lunes a Sábado: 8:00 AM – 8:00 PM</p>
              <p className="font-mono text-xs text-gray-500">Respuestas rápidas por WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-cyan/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-gray-500">
            © 2026 PixelTech Soporte Técnico. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs text-gray-600">
            Soluciones rápidas, seguras y confiables
          </p>
        </div>
      </div>
    </footer>
  )
}
