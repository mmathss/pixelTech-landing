import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

// Keep the supplied artwork untouched; align feet and heads for CSS sprite playback.
const source = fileURLToPath(new URL('../src/assets/mascot/Hoja de sprites de robot CRT neón.png', import.meta.url))
const output = fileURLToPath(new URL('../src/assets/mascot/robot-crt-sprites.webp', import.meta.url))
const { data: sheet, info: sheetInfo } = await sharp(source).raw().toBuffer({ resolveWithObject: true })
const layers = []
for (let row = 0; row < 4; row++) {
  // The generated artwork crosses its nominal 192px cells. Split only in
  // transparent gutters so pointing and waving hands remain intact.
  const boundaries = [0]
  for (let column = 1; column < 8; column++) {
    let start = -1
    let best = null
    for (let x = column * 192 - 56; x <= column * 192 + 56; x++) {
      let occupied = false
      for (let y = row * 256; y < (row + 1) * 256; y++) {
        if (sheet[(y * sheetInfo.width + x) * 4 + 3] > 100) {
          occupied = true
          break
        }
      }
      if (!occupied && start < 0) start = x
      if ((occupied || x === column * 192 + 56) && start >= 0) {
        const end = occupied ? x - 1 : x
        if (!best || end - start > best[1] - best[0]) best = [start, end]
        start = -1
      }
    }
    if (!best) throw new Error(`No transparent gutter in row ${row + 1}, column ${column + 1}`)
    boundaries.push(Math.round((best[0] + best[1]) / 2))
  }
  boundaries.push(sheetInfo.width)
  for (let column = 0; column < 8; column++) {
    const width = boundaries[column + 1] - boundaries[column]
    const frame = sharp(source).extract({ left: boundaries[column], top: row * 256, width, height: 256 })
    const { data, info } = await frame.clone().raw().toBuffer({ resolveWithObject: true })
    let top = 256
    let bottom = 0
    let left = width
    let right = 0
    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < width; x++) {
        if (data[(y * width + x) * info.channels + 3] > 100) {
          top = Math.min(top, y)
          bottom = Math.max(bottom, y)
          left = Math.min(left, x)
          right = Math.max(right, x)
        }
      }
    }
    let headLeft = width
    let headRight = 0
    for (let y = top; y < Math.min(top + 60, 256); y++) {
      for (let x = 0; x < width; x++) {
        if (data[(y * width + x) * info.channels + 3] > 180) {
          headLeft = Math.min(headLeft, x)
          headRight = Math.max(headRight, x)
        }
      }
    }
    const cropLeft = Math.max(0, left - 4)
    const cropTop = Math.max(0, top - 4)
    const cropWidth = Math.min(width, right + 5) - cropLeft
    const cropHeight = Math.min(256, bottom + 5) - cropTop
    const tileLeft = Math.round(128 - (headLeft + headRight) / 2 + cropLeft)
    const tileTop = 264 - bottom + cropTop
    if (tileLeft < 8 || tileLeft + cropWidth > 248 || tileTop < 8 || tileTop + cropHeight > 272) {
      throw new Error(`Insufficient padding for row ${row + 1}, column ${column + 1}`)
    }
    // A separate extraction avoids applying two extracts to the same Sharp input.
    const input = await sharp(source).extract({
      left: boundaries[column] + cropLeft, top: row * 256 + cropTop,
      width: cropWidth, height: cropHeight,
    }).png().toBuffer()
    layers.push({ input, left: column * 256 + tileLeft, top: row * 280 + tileTop })
  }
}
const aligned = await sharp({ create: { width: 2048, height: 1120, channels: 4, background: '#00000000' } })
  .composite(layers).png().toBuffer()
await sharp(aligned).resize(1024, 560, { kernel: 'nearest' })
  .webp({ quality: 90, alphaQuality: 100 }).toFile(output)
console.log(`Prepared mascot: ${output}`)
