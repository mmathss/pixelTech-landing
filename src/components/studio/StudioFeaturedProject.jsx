import wordmark from '../../assets/nuvora/nuvora-wordmark-568.webp'
import symbol from '../../assets/nuvora/nuvora-symbol-640.webp'
import symbolLarge from '../../assets/nuvora/nuvora-symbol-960.webp'

export default function StudioFeaturedProject() {
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
          Inventario con
          <br />
          identidad propia.
        </h3>
        <p>
          Nuvora es un proyecto propio orientado a la gestión de inventarios,
          con identidad visual y diseño de producto propios.
        </p>
        <div className="pt-nuvora-status">
          <span aria-hidden="true" />
          Actualmente en desarrollo
        </div>
        <p className="pt-featured-note">Diseño e implementación en curso.</p>
      </div>
      <div className="pt-featured-art" aria-hidden="true">
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
