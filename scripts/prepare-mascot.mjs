import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

// Keep the supplied artwork untouched; align feet and heads for CSS sprite playback.
const source = fileURLToPath(new URL('../src/assets/mascot/Hoja de sprites de robot CRT neón.png', import.meta.url))
const output = fileURLToPath(new URL('../src/assets/mascot/robot-crt-sprites.webp', import.meta.url))
const layers = []
for (let row = 0; row < 4; row++) {
  for (let column = 0; column < 8; column++) {
    const frame = sharp(source).extract({ left: column * 192, top: row * 256, width: 192, height: 256 })
    const { data, info } = await frame.clone().raw().toBuffer({ resolveWithObject: true })
    let top = 256
    let bottom = 0
    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < 192; x++) {
        if (data[(y * 192 + x) * info.channels + 3] > 180) {
          top = Math.min(top, y)
          bottom = Math.max(bottom, y)
        }
      }
    }
    let headLeft = 192
    let headRight = 0
    for (let y = top; y < Math.min(top + 60, 256); y++) {
      for (let x = 0; x < 192; x++) {
        if (data[(y * 192 + x) * info.channels + 3] > 180) {
          headLeft = Math.min(headLeft, x)
          headRight = Math.max(headRight, x)
        }
      }
    }
    layers.push({
      input: await frame.png().toBuffer(),
      left: column * 224 + Math.round(112 - (headLeft + headRight) / 2),
      top: row * 280 + 264 - bottom,
    })
  }
}
const aligned = await sharp({ create: { width: 1792, height: 1120, channels: 4, background: '#00000000' } })
  .composite(layers).png().toBuffer()
await sharp(aligned).resize(896, 560, { kernel: 'nearest' })
  .webp({ quality: 90, alphaQuality: 100 }).toFile(output)
console.log(`Prepared mascot: ${output}`)
