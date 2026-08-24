<template>
  <section id="sobre" class="bg-zinc-50 py-14 sm:py-20">
    <div class="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
      <img
        :src="store.about.image"
        :alt="store.about.title"
        class="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
        loading="lazy"
      />
      <div>
        <h2 class="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {{ store.about.title }}
        </h2>
        <p class="mt-4 text-base leading-relaxed text-zinc-600">
          {{ store.about.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  store: { type: Object, required: true }
})
</script>