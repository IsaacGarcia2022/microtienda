<template>
  <article class="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition hover:shadow-md">
    <button
      type="button"
      class="relative block w-full text-left"
      :aria-label="`Ver más sobre ${item.name}`"
      @click="$emit('view', item)"
    >
      <img
        :src="item.image"
        :alt="item.name"
        class="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <span
        v-if="item.badge"
        class="absolute left-3 top-3 rounded-full bg-[color:var(--primary)] px-3 py-1 text-xs font-semibold text-white shadow-sm"
      >
        {{ item.badge }}
      </span>
      <span
        class="absolute inset-x-3 bottom-3 inline-flex min-h-10 items-center justify-center rounded-full bg-white/95 text-sm font-semibold text-zinc-900 opacity-0 shadow-sm backdrop-blur transition group-hover:opacity-100"
      >
        Ver más
      </span>
    </button>

    <div class="flex flex-1 flex-col gap-2 p-4">
      <button
        type="button"
        class="flex items-baseline justify-between gap-2 text-left"
        @click="$emit('view', item)"
      >
        <h3 class="line-clamp-1 text-sm font-semibold text-zinc-900 hover:text-[color:var(--primary)] sm:text-base">
          {{ item.name }}
        </h3>
        <span class="shrink-0 text-sm font-bold text-[color:var(--primary)]">
          {{ price }}
        </span>
      </button>
      <p class="line-clamp-2 text-xs leading-relaxed text-zinc-500 sm:text-sm">
        {{ item.description }}
      </p>

      <div class="mt-auto flex items-center gap-2 pt-1">
        <a
          :href="wa"
          target="_blank"
          rel="noopener"
          aria-label="Pedir por WhatsApp"
          class="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[color:var(--primary)] text-white transition hover:opacity-90"
        >
          <IconWhatsapp :size="20" />
        </a>
        <button
          type="button"
          :aria-label="`Ver más sobre ${item.name}`"
          class="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-300 hover:text-[color:var(--primary)]"
          @click="$emit('view', item)"
        >
          <IconInfo :size="20" />
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { formatPrice, waLinkItem } from '~/utils/stores'
import IconWhatsapp from '~/components/ui/IconWhatsapp.vue'
import IconInfo from '~/components/ui/IconInfo.vue'

const props = defineProps({
  store: { type: Object, required: true },
  item: { type: Object, required: true }
})

defineEmits(['view'])

const price = formatPrice(props.store, props.item.price)
const wa = waLinkItem(props.store, props.item)
</script>