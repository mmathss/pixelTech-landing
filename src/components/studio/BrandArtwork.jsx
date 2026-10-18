import symbol from '../../assets/brand/pixeltech-symbol-96.webp'
import symbolRetina from '../../assets/brand/pixeltech-symbol-192.webp'

export default function BrandArtwork({ className = '' }) {
  return (
    <img
      className={className}
      src={symbol}
      srcSet={`${symbol} 1x, ${symbolRetina} 2x`}
      width="46"
      height="44"
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  )
}
