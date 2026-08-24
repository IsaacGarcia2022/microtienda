<template>
  <header class="sticky top-0 z-40 border-b border-zinc-100 bg-white/90 backdrop-blur">
    <div class="container-x flex h-16 items-center justify-between gap-4">
      <a href="#inicio" class="flex shrink-0 items-center gap-3">
        <img :src="store.logo" :alt="store.name" class="h-10 w-10 rounded-xl object-cover" />
        <span class="text-lg font-bold tracking-tight text-zinc-900">{{ store.name }}</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="link in links"
          :key="link.anchor"
          :href="`#${link.anchor}`"
          class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="generalWa"
          target="_blank"
          rel="noopener"
          class="hidden items-center gap-2 rounded-full bg-[color:var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:inline-flex"
        >
          <IconWhatsapp :size="18" />
          Pedir por WhatsApp
        </a>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 md:hidden"
          aria-label="Abrir menú"
          @click="open = !open"
        >
          <IconClose v-if="open" :size="24" />
          <IconMenu v-else :size="24" />
        </button>
      </div>
    </div>

    <div v-if="open" class="border-t border-zinc-100 bg-white md:hidden">
      <nav class="container-x flex flex-col gap-1 py-3">
        <a
          v-for="link in links"
          :key="link.anchor"
          :href="`#${link.anchor}`"
          class="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <a
          :href="generalWa"
          target="_blank"
          rel="noopener"
          class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-4 py-2.5 text-sm font-semibold text-white"
          @click="open = false"
        >
          <IconWhatsapp :size="18" />
          Pedir por WhatsApp
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { storeSectionLinks, waLinkGeneral } from '~/utils/stores'
import IconWhatsapp from '~/components/ui/IconWhatsapp.vue'
import IconMenu from '~/components/ui/IconMenu.vue'
import IconClose from '~/components/ui/IconClose.vue'

const props = defineProps({
  store: { type: Object, required: true }
})

const open = ref(false)
const links = storeSectionLinks(props.store)
const generalWa = waLinkGeneral(props.store)
</script>