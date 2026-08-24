<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" :width="size" :height="size" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 24 }
})
</script>