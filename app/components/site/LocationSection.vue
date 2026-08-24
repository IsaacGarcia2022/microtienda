<template>
  <section id="ubicacion" class="py-14 sm:py-20">
    <div class="container-x">
      <SectionHeading :title="store.location.title" />

      <div class="mx-auto mt-8 max-w-xl rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--primary)]" :style="{ backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)' }">
          <IconMapPin :size="26" />
        </div>
        <p class="mt-4 font-semibold text-zinc-900">{{ store.location.address }}</p>
        <p v-if="store.location.zones" class="mt-1 text-sm text-zinc-500">{{ store.location.zones }}</p>
        <a
          :href="store.location.mapLink"
          target="_blank"
          rel="noopener"
          class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <IconMapPin :size="18" />
          Cómo llegar
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '~/components/site/SectionHeading.vue'
import IconMapPin from '~/components/ui/IconMapPin.vue'

defineProps({
  store: { type: Object, required: true }
})
</script>