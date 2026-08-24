<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-base text-zinc-500">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>