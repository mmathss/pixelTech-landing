export default function Marquee() {
  return (
    <div className="w-full h-3 bg-brand-neon flex items-center justify-between overflow-hidden border-b-2 border-black">
      <div className="h-full w-32 pixel-checker opacity-40" />
      <div className="text-[10px] uppercase font-bold tracking-widest text-black hidden md:block">
        /// SOLUCIONES RÁPIDAS, SEGURAS Y CONFIABLES • ATENCIÓN INMEDIATA ///
      </div>
      <div className="h-full w-32 pixel-checker opacity-40" />
    </div>
  )
}
