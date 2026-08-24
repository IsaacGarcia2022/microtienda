<template>
  <svg viewBox="0 0 24 24" fill="currentColor" :width="size" :height="size" aria-hidden="true">
    <path d="M12 2l2.586 6.586L21 11.2l-6.414 2.614L12 20.4l-2.586-6.586L3 11.2l6.414-2.614L12 2z" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 24 }
})
</script>