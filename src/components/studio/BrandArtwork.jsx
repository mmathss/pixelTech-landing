import wordmark from '../../assets/brand/pixeltech-wordmark.png'
import symbol from '../../assets/brand/pixeltech-symbol.png'

// The viewBox frames the supplied originals without altering their pixels.
export default function BrandArtwork({ variant = 'symbol', className = '' }) {
  const full = variant === 'wordmark'
  return (
    <svg
      className={className}
      viewBox={full ? '238 182 1696 359' : '134 141 1009 963'}
      width={full ? 238 : 46}
      height={full ? 50 : 44}
      aria-hidden="true"
      focusable="false"
    >
      <image
        href={full ? wordmark : symbol}
        width={full ? 2172 : 1278}
        height={full ? 724 : 1230}
      />
    </svg>
  )
}
