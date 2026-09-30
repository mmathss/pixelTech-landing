const TEXT = '★ TU TECNOLOGÍA, EN BUENAS MANOS Y EN BUEN FUNCIONAMIENTO ★'

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-black border-b border-accent-cyan/20 py-2">
      <div className="animate-marquee">
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            className="text-accent-green font-mono text-xs font-medium px-10 whitespace-nowrap"
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
