export default function PageToggle({ currentView, onViewChange }) {
  return (
    <aside
      aria-label="Selector de Vista"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] flex items-center bg-[#101114] border-2 border-black p-1.5 shadow-[5px_5px_0px_#000] select-none text-xs sm:text-sm font-sans"
    >
      {/* Botón Volver al Hub Principal */}
      <button
        type="button"
        onClick={() => onViewChange('hub')}
        title="Volver a la selección principal (Hub)"
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 font-bold uppercase transition-all duration-150 cursor-pointer bg-[#1e2025] text-gray-300 hover:text-white hover:bg-[#2c3038] border-r border-[#333] mr-1"
      >
        <span className="material-symbols-outlined text-[18px] text-[#60a5fa] leading-none">
          grid_view
        </span>
        <span className="font-mono text-xs font-bold tracking-wide">Hub</span>
      </button>

      <div className="flex items-center gap-1.5">
        {/* PixelTech Studio primero */}
        <button
          type="button"
          onClick={() => onViewChange('studio')}
          title="Landing de Desarrollo de Software"
          className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 font-bold uppercase transition-all duration-150 cursor-pointer ${
            currentView === 'studio'
              ? 'bg-[#DFFF00] text-black shadow-[2px_2px_0px_#000]'
              : 'bg-[#1e2025] text-gray-300 hover:text-white hover:bg-[#2c3038]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px] text-[#004BD6] leading-none">
            terminal
          </span>
          <span>PixelTech Studio</span>
        </button>

        {/* PixelTech Pro segundo */}
        <button
          type="button"
          onClick={() => onViewChange('soporte')}
          title="Landing de Soporte Técnico"
          className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 font-bold uppercase transition-all duration-150 cursor-pointer ${
            currentView === 'soporte'
              ? 'bg-[#004BD6] text-white shadow-[2px_2px_0px_#000]'
              : 'bg-[#1e2025] text-gray-300 hover:text-white hover:bg-[#2c3038]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px] text-[#60a5fa] leading-none">
            computer
          </span>
          <span>PixelTech Pro</span>
        </button>
      </div>
    </aside>
  )
}
