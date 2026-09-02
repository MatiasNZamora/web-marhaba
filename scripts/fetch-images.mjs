// Procesa las fotos originales del local (con marco y texto quemados encima):
// recorta el marco negro y la franja de texto inferior, y genera variantes
// webp en 400/800/1600px. Fuente: scripts/raw/*, salida: public/images/*.
import { readdir, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const RAW_DIR = new URL('./raw/', import.meta.url)
const OUT_DIR = new URL('../public/images/', import.meta.url)
const WIDTHS = [400, 800, 1600]

// Recorta el 3% de borde negro y el ~35% inferior (texto a 1-2 líneas + cartel de precio).
async function cropWatermark(inputUrl) {
  const input = fileURLToPath(inputUrl)
  const meta = await sharp(input).metadata()
  const w = meta.width ?? 1600
  const h = meta.height ?? 1371
  const left = Math.round(w * 0.03)
  const top = Math.round(h * 0.03)
  const width = Math.round(w * 0.94)
  const height = Math.round(h * 0.65)
  return sharp(input).extract({ left, top, width, height })
}

async function processLogo(file) {
  await sharp(fileURLToPath(new URL(file, RAW_DIR)))
    .resize(480, null, { withoutEnlargement: true })
    .png()
    .toFile(fileURLToPath(new URL('logo.png', OUT_DIR)))
  console.log('✓ logo.png')
}

async function processDish(file) {
  const name = path.basename(file, path.extname(file))
  const cropped = await cropWatermark(new URL(file, RAW_DIR))
  const buf = await cropped.toBuffer()

  for (const width of WIDTHS) {
    await sharp(buf)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(fileURLToPath(new URL(`${name}-${width}.webp`, OUT_DIR)))
  }
  console.log(`✓ ${name} (${WIDTHS.join('/')})`)
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const files = (await readdir(RAW_DIR)).filter((f) => !f.startsWith('.'))

  for (const file of files) {
    if (file.toLowerCase().startsWith('logo')) {
      await processLogo(file)
    } else {
      await processDish(file)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
