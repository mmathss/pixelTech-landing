export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-blue/95 backdrop-blur-md border-b-4 border-black px-4 lg:px-8 py-3.5 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a className="flex items-center gap-3.5 group" href="#">
          <div className="relative bg-brand-neon p-1.5 border-2 border-black shadow-brutal-sm group-hover:rotate-3 transition-transform">
            <img
              alt="PixelTech Logo"
              className="w-10 h-10 object-contain brightness-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi7HD58bsBAWk669-QI4zMAwFk9tf4G4JV_ugtHX4CXrICMHQZKnki98m7LKAyrbsUpzDpl4jXtMYJgOA0MrH04Vima0I9xmfBX6XhY6nFgq3M9gFFl-mM2tNzsCv3l4kPnYLjE0H1pFQ-74ZL5D9Q_v-r0bwDIvucP59rhG8oVuZyAkryT_d0ALzH9j5VGEJdMcf__tG_UVOq3zIzT6a4XggxBgIZkg3iplgRvK28hBO95iX-iU4f34pZYg0V37bjQA"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-pixel text-brand-neon text-lg md:text-xl tracking-tight uppercase drop-shadow-[2px_2px_0px_#000]">
                PixelTech
              </span>
              <span className="bg-white text-black text-[10px] font-extrabold px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
                PRO
              </span>
            </div>
            <span className="text-xs text-white/90 font-medium tracking-wide uppercase">
              Soporte Técnico
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-bold uppercase tracking-wider">
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Por Qué Elegirnos', href: '#por-que-elegirnos' },
            { label: 'Contacto', href: '#contacto' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white hover:text-brand-neon transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-neon after:transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="brutal-btn-neon flex items-center gap-2 bg-brand-neon text-black font-extrabold px-4 py-2 text-sm uppercase border-2 border-black shadow-brutal"
            href="https://wa.me/51937718698?text=Hola%20PixelTech,%20necesito%20soporte%20t%C3%A9cnico%20para%20mi%20computadora"
            target="_blank"
            rel="noreferrer"
          >
            <span className="w-6 h-6 bg-[#25D366] text-white flex items-center justify-center text-sm rounded-sm shrink-0">
              <i className="fa-brands fa-whatsapp" />
            </span>
            Contactar
          </a>
        </div>
      </div>
    </header>
  )
}
