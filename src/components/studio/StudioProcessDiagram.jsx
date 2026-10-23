import { useEffect, useRef, useState } from 'react'
import { ShoppingBag, Package, Users, Workflow, Check } from 'lucide-react'

export default function StudioProcessDiagram() {
  const diagram = useRef(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        setStarted(true)
        observer.disconnect()
      },
      { threshold: 0.25 },
    )
    observer.observe(diagram.current)
    return () => observer.disconnect()
  }, [])

  return (
    <figure
      ref={diagram}
      className={`pt-flow${started ? ' pt-flow-running' : ''}`}
      role="img"
      aria-label="Diagrama: pedidos, inventario y clientes se conectan a través de PixelTech para organizar la información y dar claridad a la operación."
    >
      <div aria-hidden="true">
        <div className="pt-flow-intro">
          <span>DE LAS TAREAS AL SISTEMA</span>
          <h3>Tu operación, conectada.</h3>
        </div>
        <div className="pt-flow-sources">
          {[
            [ShoppingBag, 'Pedidos'],
            [Package, 'Inventario'],
            [Users, 'Clientes'],
          ].map(([Icon, label]) => (
            <div className="pt-flow-source" key={label}>
              <Icon size={23} strokeWidth={1.65} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <svg
          className="pt-flow-connectors"
          viewBox="0 0 480 58"
          preserveAspectRatio="none"
          focusable="false"
        >
          <g className="pt-flow-tracks">
            <path d="M80 0V25Q80 32 88 32H232Q240 32 240 40V58" />
            <path d="M240 0V58" />
            <path d="M400 0V25Q400 32 392 32H248Q240 32 240 40V58" />
          </g>
          <g className="pt-flow-packets" aria-hidden="true">
            <path pathLength="1" d="M80 0V25Q80 32 88 32H232Q240 32 240 40V58" />
            <path pathLength="1" d="M240 0V58" />
            <path pathLength="1" d="M400 0V25Q400 32 392 32H248Q240 32 240 40V58" />
          </g>
          <g className="pt-flow-signals">
            <path
              pathLength="1"
              d="M80 0V25Q80 32 88 32H232Q240 32 240 40V58"
            />
            <path pathLength="1" d="M240 0V58" />
            <path
              pathLength="1"
              d="M400 0V25Q400 32 392 32H248Q240 32 240 40V58"
            />
          </g>
        </svg>
        <div className="pt-flow-hub">
          <span className="pt-flow-hub-icon">
            <Workflow size={25} strokeWidth={1.6} />
          </span>
          <div>
            <strong>PixelTech</strong>
            <span>Entender · Conectar · Construir</span>
          </div>
        </div>
        <svg
          className="pt-flow-output-line"
          viewBox="0 0 20 34"
          focusable="false"
        >
          <path className="pt-flow-track" d="M10 0V34" />
          <path className="pt-flow-output-signal" pathLength="1" d="M10 0V34" />
        </svg>
        <div className="pt-flow-result">
          <span className="pt-flow-result-icon">
            <Check size={21} strokeWidth={2} />
          </span>
          <div>
            <strong>Información conectada</strong>
            <span>Una operación más clara.</span>
          </div>
        </div>
      </div>
    </figure>
  )
}
