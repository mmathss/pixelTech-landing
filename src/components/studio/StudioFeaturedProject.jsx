import { useEffect, useRef } from 'react'
import wordmark from '../../assets/nuvora/nuvora-wordmark-568.webp'
import symbol from '../../assets/nuvora/nuvora-symbol-640.webp'
import symbolLarge from '../../assets/nuvora/nuvora-symbol-960.webp'

export default function StudioFeaturedProject() {
  const artwork = useRef(null)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const element = artwork.current
    if (preference.matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        element.classList.add('pt-nuvora-animate')
        observer.disconnect()
      },
      { threshold: 0.4 },
    )
    observer.observe(element)
    const stop = () => {
      if (preference.matches) element.classList.remove('pt-nuvora-animate')
    }
    preference.addEventListener('change', stop)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', stop)
      element.classList.remove('pt-nuvora-animate')
    }
  }, [])
  return (
    <article className="pt-featured-project" aria-labelledby="nuvora-title">
      <div className="pt-featured-copy">
        <span className="pt-eyebrow">Proyecto destacado / Producto propio</span>
        <img
          className="pt-nuvora-wordmark"
          src={wordmark}
          width="284"
          height="58"
          alt="Nuvora"
          decoding="async"
        />
        <h3 id="nuvora-title">
          Una vista clara
          <br />
          de tu inventario.
        </h3>
        <dl className="pt-project-story pt-featured-story">
          <div>
            <dt>El problema</dt>
            <dd>El stock repartido entre archivos dificulta saber qué hay y qué reponer.</dd>
          </div>
          <div>
            <dt>La propuesta de Nuvora</dt>
            <dd>Reunir productos, existencias y movimientos en una sola herramienta.</dd>
          </div>
        </dl>
        <div className="pt-nuvora-status">
          <span aria-hidden="true" />
          Actualmente en desarrollo
        </div>
        <p className="pt-featured-note">Producto propio. Diseño e implementación en curso.</p>
      </div>
      <div className="pt-featured-art" aria-hidden="true" ref={artwork}>
        <div className="pt-featured-art-top">
          <span>NUVORA / INVENTARIO</span>
          <span>01</span>
        </div>
        <img
          src={symbol}
          srcSet={`${symbol} 640w, ${symbolLarge} 960w`}
          sizes="(max-width: 540px) calc(100vw - 84px), (max-width: 850px) 40vw, 560px"
          width="960"
          height="640"
          alt=""
          loading="eager"
          fetchPriority="low"
          decoding="async"
        />
        <div className="pt-featured-art-bottom">
          <span>Una identidad. Un producto en construcción.</span>
          <div className="pt-nuvora-colors">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </article>
  )
}
