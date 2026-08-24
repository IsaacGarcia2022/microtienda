import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const stores = [
  (await import(path.join(root, 'app/data/stores/ropa-luna.js'))).default,
  (await import(path.join(root, 'app/data/stores/sabor-casero.js'))).default,
  (await import(path.join(root, 'app/data/stores/barber-king.js'))).default
]

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
}

function mix(hexA, hexB, t) {
  const a = hexToRgb(hexA)
  const b = hexToRgb(hexB)
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t))
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`
}

function shade(hex, t) {
  const target = t >= 0 ? '#ffffff' : '#000000'
  return mix(hex, target, Math.abs(t))
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function svg({ width, height, bg1, bg2, text, sub, radius = 0 }) {
  const gradientId = `g${Math.random().toString(36).slice(2, 7)}`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" rx="${radius}" fill="url(#${gradientId})"/>
  <circle cx="${width - width * 0.15}" cy="${height * 0.18}" r="${Math.min(width, height) * 0.22}" fill="#ffffff" opacity="0.12"/>
  <circle cx="${width * 0.1}" cy="${height * 0.85}" r="${Math.min(width, height) * 0.28}" fill="#ffffff" opacity="0.08"/>
  ${text ? `<text x="50%" y="${height / 2 - 4}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.round(Math.min(width, height) * 0.055)}" font-weight="700" fill="#ffffff">${esc(text)}</text>` : ''}
  ${sub ? `<text x="50%" y="${height / 2 + Math.round(Math.min(width, height) * 0.055)}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.round(Math.min(width, height) * 0.028)}" fill="#ffffff" opacity="0.85">${esc(sub)}</text>` : ''}
</svg>`
}

for (const store of stores) {
  const dir = path.join(root, 'public/images', store.slug)
  mkdirSync(dir, { recursive: true })
  const primary = store.theme.primary
  const dark = store.theme.dark

  const write = (file, content) => writeFileSync(path.join(dir, file), content)

  const initial = store.name.replace(/[^A-Za-z0-9À-ÿ ]/g, '').trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  write('logo.svg', svg({ width: 400, height: 400, bg1: primary, bg2: shade(primary, -0.35), text: initial, sub: store.name, radius: 48 }))
  write('hero.svg', svg({ width: 1200, height: 900, bg1: shade(primary, 0.15), bg2: dark, text: store.hero.title, sub: store.tagline }))
  write('about.svg', svg({ width: 800, height: 600, bg1: shade(primary, 0.1), bg2: shade(primary, -0.3), text: store.about.title }))

  store.catalog.items.forEach((item, i) => {
    const paths = item.images?.length ? item.images : [item.image]
    paths.forEach((imgPath, j) => {
      const file = path.basename(imgPath)
      const bg1 = mix(primary, shade(primary, -0.4), ((i + j) % 3) * 0.25)
      const bg2 = mix(primary, shade(primary, -0.55), ((i + j) % 3) * 0.25)
      write(file, svg({
        width: 800,
        height: 800,
        bg1,
        bg2,
        text: item.name,
        sub: j === 0 ? `${store.currency}${item.price}` : `Vista ${j + 1}`,
        radius: 24
      }))
    })
  })

  store.trust.testimonials.forEach((t, i) => {
    const nameParts = t.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('')
    write(`avatar-${i + 1}.svg`, svg({ width: 200, height: 200, bg1: shade(primary, 0.2), bg2: shade(primary, -0.25), text: nameParts, radius: 100 }))
  })

  console.log(`✓ ${store.slug} (${dir})`)
}

console.log('Listo. Reemplaza estas imágenes con las fotos reales de tus clientes.')