import sharp from 'sharp'
import fs from 'node:fs/promises'

// Deterministic web exports. Original artwork stays untouched beside them.
const exports = [
  ...[96, 192, 512].map((width) => ({
    input: 'src/assets/brand/pixeltech-symbol.png',
    output: `src/assets/brand/pixeltech-symbol-${width}.webp`,
    width,
    crop: { left: 134, top: 141, width: 1009, height: 963 },
    lossless: true,
  })),
  ...[640, 960].map((width) => ({
    input: 'src/assets/nuvora/nuvora-symbol.png',
    output: `src/assets/nuvora/nuvora-symbol-${width}.webp`,
    width,
  })),
  {
    input: 'src/assets/nuvora/nuvora-wordmark.png',
    output: 'src/assets/nuvora/nuvora-wordmark-568.webp',
    width: 568,
    crop: { left: 133, top: 291, width: 1518, height: 307 },
    lossless: true,
  },
]
for (const asset of exports) {
  let image = sharp(asset.input)
  if (asset.crop) image = image.extract(asset.crop)
  await image
    .resize({ width: asset.width, withoutEnlargement: true })
    .webp({
      quality: 85,
      alphaQuality: 90,
      effort: 6,
      lossless: asset.lossless || false,
    })
    .toFile(asset.output)
  const { size } = await fs.stat(asset.output)
  console.log(`${asset.output}: ${(size / 1024).toFixed(1)} KiB`)
}
