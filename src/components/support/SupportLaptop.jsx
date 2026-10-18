import { useEffect, useRef } from 'react'
import {
  ClipboardList,
  Gauge,
  Power,
  Search,
  Thermometer,
  Wrench,
} from 'lucide-react'
import './SupportLaptop.css'

export default function SupportLaptop() {
  const illustration = useRef(null)

  useEffect(() => {
    const root = illustration.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!root || preference.matches || !('IntersectionObserver' in window))
      return
    const animations = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const element = entry.target
          const animation = element.animate(
            [
              { opacity: 0, transform: 'translateY(16px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 650,
              delay: Number(element.dataset.delay || 0),
              easing: 'cubic-bezier(.2,.65,.3,1)',
              fill: 'backwards',
            },
          )
          animations.add(animation)
          animation.onfinish = () => animations.delete(animation)
          observer.unobserve(element)
        }
      },
      { threshold: 0.35 },
    )
    root
      .querySelectorAll('[data-laptop-motion]')
      .forEach((element) => observer.observe(element))
    const stop = () => {
      if (!preference.matches) return
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      animations.clear()
    }
    preference.addEventListener('change', stop)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', stop)
      animations.forEach((animation) => animation.cancel())
    }
  }, [])

  return (
    <figure className="sp-laptop-art" ref={illustration}>
      <div className="sp-laptop-scene">
        <div className="sp-laptop-halo" aria-hidden="true" />
        <span className="sp-laptop-pixels" aria-hidden="true" />
        <svg
          className="sp-laptop-drawing"
          data-laptop-motion
          viewBox="0 0 520 350"
          role="img"
          aria-label="Laptop ilustrada de PixelTech, con una herramienta en pantalla"
        >
          <ellipse
            cx="260"
            cy="328"
            rx="214"
            ry="12"
            fill="#001d64"
            opacity=".45"
          />
          <path
            d="M83 34h354v8h8v221H75V42h8Z"
            fill="#dfe8f7"
            stroke="#0b1930"
            strokeWidth="4"
          />
          <path
            d="M92 52h336v189H92Z"
            fill="#062b8f"
            stroke="#0b1930"
            strokeWidth="3"
          />
          <path d="M104 64h312v165H104Z" fill="#0b1930" />
          <path
            d="M119 80h20v5h-15v15h-5Zm282 0v20h-5V85h-15v-5ZM119 213v-20h5v15h15v5Zm282 0h-20v-5h15v-15h5Z"
            fill="#5479b0"
          />
          <path
            d="M159 99h6v6h-6Zm192 68h6v6h-6ZM178 180h6v6h-6Zm164-68h6v6h-6Z"
            fill="#dfff00"
          />
          <Wrench
            x="226"
            y="91"
            width="68"
            height="68"
            color="#dfff00"
            strokeWidth="1.5"
            aria-hidden="true"
          />
          <text
            x="260"
            y="197"
            textAnchor="middle"
            fill="#f5f8ff"
            fontFamily="Silkscreen, monospace"
            fontSize="22"
          >
            Tu equipo
          </text>
          <path d="M249 251h22" stroke="#6c809b" strokeWidth="3" />
          <path
            d="M75 263h370l56 44v8l-13 9H32l-13-9v-8Z"
            fill="#b2c5e1"
            stroke="#0b1930"
            strokeWidth="4"
            strokeLinejoin="bevel"
          />
          <path d="M89 274h342l25 21H64Z" fill="#718eaf" />
          <path
            d="M105 281h309M89 288h342"
            stroke="#dfe8f7"
            strokeWidth="2"
            strokeDasharray="13 5"
          />
          <path
            d="M224 301h72l8 9h-88Z"
            fill="#dfe8f7"
            stroke="#718eaf"
            strokeWidth="2"
          />
          <path d="M20 312h194m91 0h195" stroke="#718eaf" strokeWidth="2" />
        </svg>
        <span
          className="sp-laptop-symptom sp-laptop-slow"
          data-laptop-motion
          data-delay="120"
        >
          <Gauge size={20} aria-hidden="true" />
          Lentitud
        </span>
        <span
          className="sp-laptop-symptom sp-laptop-heat"
          data-laptop-motion
          data-delay="240"
        >
          <Thermometer size={20} aria-hidden="true" />
          Temperatura
        </span>
        <span
          className="sp-laptop-symptom sp-laptop-power"
          data-laptop-motion
          data-delay="360"
        >
          <Power size={20} aria-hidden="true" />
          No enciende
        </span>
      </div>
      <figcaption>De la falla a un plan claro.</figcaption>
      <ol className="sp-laptop-flow" aria-label="Etapas de atención">
        {[
          [Search, 'Diagnóstico'],
          [ClipboardList, 'Presupuesto'],
          [Wrench, 'Reparación'],
        ].map(([Icon, text], index) => (
          <li key={text} data-laptop-motion data-delay={index * 110}>
            <Icon size={19} aria-hidden="true" />
            <span>{text}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
