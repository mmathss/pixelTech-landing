import wordmark from '../../assets/nuvora/nuvora-wordmark.png'
import symbol from '../../assets/nuvora/nuvora-symbol.png'

export default function StudioFeaturedProject() {
  return (
    <article className="pt-featured-project" aria-labelledby="nuvora-title">
      <div className="pt-featured-copy">
        <span className="pt-eyebrow">Proyecto destacado / Producto propio</span>
        <svg
          className="pt-nuvora-wordmark"
          viewBox="133 291 1518 307"
          width="284"
          height="58"
          role="img"
          aria-label="Nuvora"
        >
          <image href={wordmark} width="1774" height="887" />
        </svg>
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
        <img src={symbol} width="1536" height="1024" alt="" loading="lazy" />
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
