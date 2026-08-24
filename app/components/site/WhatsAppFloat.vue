<template>
  <a
    :href="wa"
    target="_blank"
    rel="noopener"
    class="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:#25d366] text-white shadow-xl shadow-black/25 transition hover:scale-105"
    aria-label="Escribir por WhatsApp"
  >
    <IconWhatsapp :size="30" />
  </a>
</template>

<script setup>
import { waLinkGeneral } from '~/utils/stores'
import IconWhatsapp from '~/components/ui/IconWhatsapp.vue'

const props = defineProps({
  store: { type: Object, required: true }
})

const wa = waLinkGeneral(props.store)
</script>