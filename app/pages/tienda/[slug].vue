<script setup>
import { getStore } from '~/utils/stores'
import StoreHeader from '~/components/site/StoreHeader.vue'
import StoreFooter from '~/components/site/StoreFooter.vue'
import WhatsAppFloat from '~/components/site/WhatsAppFloat.vue'
import HeroSection from '~/components/site/HeroSection.vue'
import CatalogSection from '~/components/site/CatalogSection.vue'
import HowItWorksSection from '~/components/site/HowItWorksSection.vue'
import TrustSection from '~/components/site/TrustSection.vue'
import AboutSection from '~/components/site/AboutSection.vue'
import LocationSection from '~/components/site/LocationSection.vue'

const route = useRoute()

const store = getStore(route.params.slug)

if (!store) {
  throw createError({ statusCode: 404, statusMessage: 'Tienda no encontrada', fatal: true })
}

useHead(() => ({
  title: `${store.name} — ${store.tagline}`,
  meta: [
    { name: 'description', content: store.hero.subtitle },
    { name: 'theme-color', content: store.theme.primary }
  ]
}))

const sectionMap = {
  hero: HeroSection,
  catalog: CatalogSection,
  howItWorks: HowItWorksSection,
  trust: TrustSection,
  about: AboutSection,
  location: LocationSection
}

const themeVars = computed(() => ({
  '--primary': store.theme.primary,
  '--secondary': store.theme.secondary,
  '--dark': store.theme.dark
}))
</script>

<template>
  <div :style="themeVars">
    <StoreHeader :store="store" />

    <main>
      <template v-for="section in store.sections" :key="section">
        <component :is="sectionMap[section]" :store="store" />
      </template>
    </main>

    <StoreFooter :store="store" />
    <WhatsAppFloat :store="store" />
  </div>
</template>