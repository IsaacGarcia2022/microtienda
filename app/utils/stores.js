import ropaLuna from '~/data/stores/ropa-luna'
import saborCasero from '~/data/stores/sabor-casero'
import barberKing from '~/data/stores/barber-king'

export const stores = [ropaLuna, saborCasero, barberKing]

export function getStore(slug) {
  return stores.find((s) => s.slug === slug)
}

export function getAllStores() {
  return stores
}

export function waLink(store, message) {
  const number = String(store.whatsapp).replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function waLinkItem(store, item) {
  const message = `¡Hola ${store.name}! Me interesa: ${item.name} (${store.currency}${item.price}). ¿Está disponible?`
  return waLink(store, message)
}

export function waLinkItemVariant(store, item, selection = {}) {
  const selected = Object.entries(selection).filter(([, v]) => v)
  const variants = selected.length
    ? ` (${selected.map(([k, v]) => `${k}: ${v}`).join(', ')})`
    : ''
  const message = `¡Hola ${store.name}! Me interesa: ${item.name} (${store.currency}${item.price})${variants}. ¿Está disponible?`
  return waLink(store, message)
}

export function waLinkGeneral(store) {
  const message = `¡Hola ${store.name}! Tengo una consulta.`
  return waLink(store, message)
}

export const sectionMeta = {
  hero: { label: 'Inicio', anchor: 'inicio' },
  catalog: { label: 'Catálogo', anchor: 'catalog' },
  howItWorks: { label: 'Cómo comprar', anchor: 'como-comprar' },
  trust: { label: 'Confianza', anchor: 'confianza' },
  about: { label: 'Sobre nosotros', anchor: 'sobre' },
  location: { label: 'Ubicación', anchor: 'ubicacion' }
}

export function storeSectionLinks(store) {
  return store.sections
    .map((s) => sectionMeta[s])
    .filter(Boolean)
}

export function formatPrice(store, price) {
  return `${store.currency}${price}`
}