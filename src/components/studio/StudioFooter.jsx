export default function StudioFooter() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface mt-space-xl shadow-[0_-4px_0_0_#191b23]">
      <div className="max-w-7xl mx-auto px-gutter py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-lg">
        {/* Col 1 */}
        <div className="md:col-span-5 flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm uppercase text-secondary-fixed">
              PixelTech
            </span>
            <span className="font-label-sm text-label-sm px-space-xs py-0.5 bg-primary-container text-on-primary">
              v2.4_PROD
            </span>
          </div>
          <p className="font-body-md text-body-md text-outline-variant max-w-md">
            Estudio de desarrollo de software a medida, arquitectura escalable y soluciones de alta disponibilidad con precisión neo-brutalista retro-tech.
          </p>
          <div className="flex items-center gap-space-xs mt-space-xs">
            <span className="w-2.5 h-2.5 bg-secondary-fixed inline-block"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
              Sistemas Operativos 100% Online
            </span>
          </div>
        </div>

        {/* Col 2 */}
        <div className="md:col-span-3 flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">
            &gt; Terminal_Nav
          </span>
          <div className="flex flex-col gap-space-xs text-outline-variant font-label-md text-label-md">
            <a className="hover:text-secondary-fixed transition-colors" href="#inicio">
              &gt; Inicio
            </a>
            <a className="hover:text-secondary-fixed transition-colors" href="#servicios">
              &gt; Servicios
            </a>
            <a className="hover:text-secondary-fixed transition-colors" href="#stack">
              &gt; Stack &amp; Arq
            </a>
            <a className="hover:text-secondary-fixed transition-colors" href="#desarrollador">
              &gt; Desarrollador
            </a>
          </div>
        </div>

        {/* Col 3 */}
        <div className="md:col-span-4 flex flex-col gap-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">
            &gt; Conexiones_Remotas
          </span>
          <div className="flex flex-col gap-space-xs">
            <a
              className="inline-flex items-center justify-between p-space-sm bg-inverse-surface shadow-[3px_3px_0px_#000000] text-inverse-on-surface hover:bg-primary-container hover:text-on-primary transition-all font-label-sm text-label-sm"
              href="https://github.com/mmathss"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                GitHub
              </span>
              <span className="text-secondary-fixed">@mmathss</span>
            </a>
            <a
              className="inline-flex items-center justify-between p-space-sm bg-inverse-surface shadow-[3px_3px_0px_#000000] text-inverse-on-surface hover:bg-primary-container hover:text-on-primary transition-all font-label-sm text-label-sm"
              href="https://linkedin.com/in/dmarevalo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px]">lan</span>
                LinkedIn
              </span>
              <span className="text-secondary-fixed">/in/dmarevalo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="bg-on-background py-space-md">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline-variant">
          <span>© 2026 PixelTech Studio. Código y Arquitectura por Diego Arévalo.</span>
          <span className="text-secondary-fixed uppercase">LATAM / PERÚ // SYSTEM_OK</span>
        </div>
      </div>
    </footer>
  )
}
