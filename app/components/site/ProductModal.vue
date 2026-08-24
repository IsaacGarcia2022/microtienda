<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <div class="absolute inset-0 bg-black/60" @click="$emit('close')"></div>

      <div class="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-3xl sm:rounded-3xl">
        <button
          type="button"
          class="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
          aria-label="Cerrar detalle"
          @click="$emit('close')"
        >
          <IconClose :size="22" />
        </button>

        <div class="overflow-y-auto">
          <div class="grid sm:grid-cols-2">
            <div class="bg-zinc-100">
              <div class="relative aspect-square w-full">
                <img
                  :src="images[imgIndex]"
                  :alt="item.name"
                  class="h-full w-full object-cover"
                />

                <span
                  v-if="item.badge"
                  class="absolute left-3 top-3 rounded-full bg-[color:var(--primary)] px-3 py-1 text-xs font-semibold text-white shadow-sm"
                >
                  {{ item.badge }}
                </span>

                <div v-if="outOfStock" class="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span class="rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-900">Agotado</span>
                </div>

                <button
                  v-if="images.length > 1"
                  type="button"
                  class="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                  aria-label="Imagen anterior"
                  @click="prev"
                >
                  <IconChevronLeft :size="22" />
                </button>
                <button
                  v-if="images.length > 1"
                  type="button"
                  class="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                  aria-label="Siguiente imagen"
                  @click="next"
                >
                  <IconChevronRight :size="22" />
                </button>

                <div v-if="images.length > 1" class="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 sm:hidden">
                  <span
                    v-for="(_, i) in images"
                    :key="i"
                    class="h-1.5 rounded-full transition-all"
                    :class="i === imgIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60'"
                  ></span>
                </div>
              </div>

              <div v-if="images.length > 1" class="hidden gap-2 border-t border-zinc-100 bg-white p-3 sm:flex">
                <button
                  v-for="(img, i) in images"
                  :key="img"
                  type="button"
                  class="h-16 w-16 shrink-0 overflow-hidden rounded-lg transition"
                  :class="i === imgIndex ? 'ring-2 ring-[color:var(--primary)]' : 'opacity-60 hover:opacity-100'"
                  @click="imgIndex = i"
                >
                  <img :src="img" :alt="`Vista ${i + 1} de ${item.name}`" class="h-full w-full object-cover" />
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-4 p-5 sm:p-6">
              <div>
                <h2 class="text-xl font-bold text-zinc-900 sm:text-2xl">{{ item.name }}</h2>
                <p class="mt-1 text-lg font-bold text-[color:var(--primary)]">{{ price }}</p>
              </div>

              <p v-if="item.longDescription || item.description" class="text-sm leading-relaxed text-zinc-600">
                {{ item.longDescription || item.description }}
              </p>

              <dl v-if="item.details?.length" class="divide-y divide-zinc-100 rounded-xl border border-zinc-100">
                <div v-for="d in item.details" :key="d[0]" class="flex items-baseline justify-between gap-4 px-4 py-2.5">
                  <dt class="text-sm text-zinc-500">{{ d[0] }}</dt>
                  <dd class="text-right text-sm font-medium text-zinc-900">{{ d[1] }}</dd>
                </div>
              </dl>

              <div v-for="(opts, dim) in item.variants" :key="dim" class="flex flex-col gap-2">
                <p class="text-sm font-semibold text-zinc-900">{{ dim }}</p>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="opt in opts"
                    :key="opt"
                    type="button"
                    class="min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition"
                    :class="selection[dim] === opt
                      ? 'border-transparent bg-[color:var(--primary)] text-white shadow-sm'
                      : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'"
                    @click="toggleVariant(dim, opt)"
                  >
                    {{ opt }}
                  </button>
                </div>
              </div>

              <a
                v-if="!outOfStock"
                :href="wa"
                target="_blank"
                rel="noopener"
                class="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <IconWhatsapp :size="20" />
                Pedir por WhatsApp
              </a>
              <div
                v-else
                class="mt-auto inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-500"
              >
                Agotado
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { formatPrice, waLinkItemVariant } from '~/utils/stores'
import IconClose from '~/components/ui/IconClose.vue'
import IconChevronLeft from '~/components/ui/IconChevronLeft.vue'
import IconChevronRight from '~/components/ui/IconChevronRight.vue'
import IconWhatsapp from '~/components/ui/IconWhatsapp.vue'

const props = defineProps({
  store: { type: Object, required: true },
  item: { type: Object, required: true }
})

const emit = defineEmits(['close'])

const imgIndex = ref(0)
const selection = reactive({})

const images = computed(() => (props.item.images?.length ? props.item.images : [props.item.image]))
const outOfStock = computed(() => props.item.stock === false)
const price = formatPrice(props.store, props.item.price)
const wa = computed(() => waLinkItemVariant(props.store, props.item, selection))

function next() {
  imgIndex.value = (imgIndex.value + 1) % images.value.length
}

function prev() {
  imgIndex.value = (imgIndex.value - 1 + images.value.length) % images.value.length
}

function toggleVariant(dim, opt) {
  selection[dim] = selection[dim] === opt ? null : opt
}

watch(() => props.item, () => {
  imgIndex.value = 0
  for (const key of Object.keys(selection)) {
    delete selection[key]
  }
})

function onKeydown(e) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>