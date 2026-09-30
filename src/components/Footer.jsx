export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">

          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-black p-1 border border-brand-neon shadow-brutal-sm">
                <img
                  alt="PixelTech Logo Footer"
                  className="w-8 h-8 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZpK8iRi_c1IN5jthYoV6kiJUpOSaAUN77bIBy9PU9HepKb5p4n78z8Ev5gsbib33GqGRYlUkGRVTxD552y1M59h1hYWxOK7vGKODOMy_-924yvniAhuW55TzRa0FrHfrK6l5UgD9iUR1PIoWSOkgqtwzhlcAWBQBFpAIasHSgcMdT7scs5pNzN5-VxzhIiEgXEcRKwxncHp6gdGh4q3PMIgAAOzDR4khOXRM7gVrBlrn7NpPNwIMopuUYQ33A8JE_Hw"
                />
              </div>
              <span className="font-pixel text-brand-neon text-xl font-bold uppercase">PixelTech</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Soporte técnico integral para computadoras, laptops y estaciones de trabajo. Especialistas en formateo, repotenciación con SSD y mantenimiento de alto nivel.
            </p>
            <div className="text-xs font-mono text-brand-neon">
              &gt; TU EQUIPO EN BUENAS MANOS
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase text-brand-neon tracking-wider">Enlaces Rápidos</h4>
            <ul className="text-xs space-y-2 text-neutral-300">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Catálogo de Servicios', href: '#servicios' },
                { label: 'Nuestras Garantías', href: '#garantia' },
                { label: 'Solicitar Diagnóstico', href: '#contacto' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a className="hover:text-brand-neon transition-colors" href={href}>
                    &gt; {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase text-brand-neon tracking-wider">Canal de Atención</h4>
            <div className="bg-neutral-900 border-2 border-neutral-700 p-3.5 space-y-2">
              <p className="text-xs text-neutral-300 font-mono">WhatsApp Soporte Técnico:</p>
              <a
                className="flex items-center gap-2 text-xl font-extrabold text-brand-neon hover:underline font-mono"
                href="https://wa.me/51937718698"
                target="_blank"
                rel="noreferrer"
              >
                <span className="w-7 h-7 bg-[#25D366] text-white flex items-center justify-center text-base rounded-sm shrink-0">
                  <i className="fa-brands fa-whatsapp" />
                </span>
                +51 937 718 698
              </a>
              <p className="text-[11px] text-neutral-400">Atención rápida y presupuestos sin compromiso.</p>
              <p className="text-[11px] text-neutral-500 font-mono pt-1">
                <i className="fa-solid fa-map-pin mr-1" />Huacho, Lima — Perú
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © 2026 <strong>PixelTech Soporte Técnico</strong>. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block w-16 h-2 pixel-checker opacity-40" />
            <span>Soluciones rápidas, seguras y confiables</span>
            <span className="inline-block w-16 h-2 pixel-checker-neon opacity-40" />
          </div>
        </div>
      </div>
    </footer>
  )
}
