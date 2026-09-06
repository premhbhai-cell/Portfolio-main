import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const outputDir = path.join(root, 'public', 'assets')
const images = [
  { source: 'myportfile.png', output: 'myprofile.webp', width: 1120, quality: 84 },
]

await mkdir(outputDir, { recursive: true })

await Promise.all(images.map(async ({ source, output, width, quality }) => {
  await sharp(path.join(root, source))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(path.join(outputDir, output))
}))

console.log(`Optimized ${images.length} images into ${path.relative(root, outputDir)}`)
