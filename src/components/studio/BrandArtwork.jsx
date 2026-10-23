import symbol from '../../assets/brand/pixeltech-symbol-96.webp'
import symbolRetina from '../../assets/brand/pixeltech-symbol-192.webp'
import mascot from '../../assets/brand/pixeltech-mascot-96.webp'
import mascotRetina from '../../assets/brand/pixeltech-mascot-192.webp'

export default function BrandArtwork({ className = '', relaxed = false }) {
  return (
    <img
      className={className}
      src={relaxed ? mascot : symbol}
      srcSet={relaxed ? `${mascot} 1x, ${mascotRetina} 2x` : `${symbol} 1x, ${symbolRetina} 2x`}
      width="46"
      height="44"
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  )
}
