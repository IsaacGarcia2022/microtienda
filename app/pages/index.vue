<script setup>
import { getAllStores } from '~/utils/stores'

const stores = getAllStores()

useHead({
  title: 'MicroTienda — Catálogos web para micro vendedores',
  meta: [
    { name: 'description', content: 'Catálogos web móviles que convierten visitantes en pedidos por WhatsApp. Demo de tiendas para micro vendedores y profesionales independientes.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-zinc-50">
    <header class="border-b border-zinc-200 bg-white">
      <div class="container-x flex h-16 items-center justify-between">
        <span class="text-lg font-bold text-zinc-900">MicroTienda</span>
        <span class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">Demo · 3 tiendas</span>
      </div>
    </header>

    <main class="container-x py-14 sm:py-20">
      <div class="max-w-2xl">
        <h1 class="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Catálogos web que convierten visitantes en pedidos por WhatsApp
        </h1>
        <p class="mt-4 text-lg text-zinc-600">
          Estas son las tiendas demo del servicio. Cada una es una página móvil donde el cliente elige un producto y el pedido llega directo a tu WhatsApp.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="s in stores"
          :key="s.slug"
          :to="`/tienda/${s.slug}`"
          class="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            class="flex aspect-[16/9] items-center justify-center"
            :style="{ background: `linear-gradient(135deg, ${s.theme.primary}, ${s.theme.dark})` }"
          >
            <img :src="s.logo" :alt="s.name" class="h-16 w-16 rounded-2xl object-cover shadow-lg" />
          </div>
          <div class="p-5">
            <h2 class="text-lg font-bold text-zinc-900">{{ s.name }}</h2>
            <p class="mt-1 text-sm text-zinc-500">{{ s.tagline }}</p>
            <span class="mt-3 inline-flex items-center gap-1 text-sm font-semibold" :style="{ color: s.theme.primary }">
              Ver tienda →
            </span>
          </div>
        </NuxtLink>
      </div>
    </main>

    <footer class="border-t border-zinc-200 bg-white py-8">
      <div class="container-x text-center text-sm text-zinc-500">
        © {{ new Date().getFullYear() }} MicroTienda · Hecho para micro vendedores
      </div>
    </footer>
  </div>
</template>