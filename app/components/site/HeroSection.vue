<template>
  <section id="inicio" class="relative overflow-hidden bg-zinc-950">
    <div class="container-x grid gap-8 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
      <div class="relative z-10">
        <p
          v-if="store.hero.eyebrow"
          class="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
          :style="{ color: 'var(--primary)', backgroundColor: 'color-mix(in srgb, var(--primary) 12%, transparent)' }"
        >
          {{ store.hero.eyebrow }}
        </p>
        <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {{ store.hero.title }}
        </h1>
        <p v-if="store.hero.subtitle" class="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {{ store.hero.subtitle }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#catalog"
            class="inline-flex min-h-11 items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:opacity-90"
          >
            {{ store.hero.ctaCatalog || 'Ver catálogo' }}
          </a>
          <a
            :href="generalWa"
            target="_blank"
            rel="noopener"
            class="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <IconWhatsapp :size="18" />
            {{ store.hero.ctaWhatsapp || 'Escribir al WhatsApp' }}
          </a>
        </div>
      </div>

      <div class="relative">
        <img
          :src="store.hero.image"
          :alt="store.name"
          class="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
          loading="eager"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { waLinkGeneral } from '~/utils/stores'
import IconWhatsapp from '~/components/ui/IconWhatsapp.vue'

const props = defineProps({
  store: { type: Object, required: true }
})

const generalWa = waLinkGeneral(props.store)
</script>