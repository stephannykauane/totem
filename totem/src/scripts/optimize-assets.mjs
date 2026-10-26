#!/usr/bin/env node
import sharp from 'sharp'
import { readdirSync, readFileSync, writeFileSync, unlinkSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const DIR = 'src/assets'
const MAX_EDGE = 2048
const QUALITY = 82
let before = 0, after = 0

for (const f of readdirSync(DIR)) {
  const ext = extname(f).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue
  const src = join(DIR, f)
  const out = join(DIR, basename(f, extname(f)) + '.webp')
  before += statSync(src).size
  await sharp(src)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(out)
  after += statSync(out).size
  unlinkSync(src)
}

const fix = (dir) => {
  for (const f of readdirSync(dir)) {
    if (!/\.(js|vue)$/.test(f)) continue
    const p = join(dir, f)
    const s = readFileSync(p, 'utf8')
    const t = s.replace(/(['"`][^'"`\n]*)\.(png|jpe?g)(['"`])/gi, '$1.webp$3')
    if (t !== s) writeFileSync(p, t)
  }
}
fix('src/data')
fix('src/components')

const mb = (n) => (n / 1048576).toFixed(1) + ' MB'
console.log(`OK: ${mb(before)} -> ${mb(after)}`)