<template>
  <section id="como-comprar" class="bg-zinc-50 py-14 sm:py-20">
    <div class="container-x">
      <SectionHeading :title="store.howItWorks.title" :subtitle="store.howItWorks.subtitle" />

      <ol class="mt-10 grid gap-6 sm:grid-cols-3">
        <li
          v-for="(step, i) in store.howItWorks.steps"
          :key="i"
          class="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
            :style="{ backgroundColor: 'var(--primary)' }"
          >
            {{ i + 1 }}
          </span>
          <h3 class="mt-4 text-base font-semibold text-zinc-900">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-500">
            {{ step.text }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '~/components/site/SectionHeading.vue'

defineProps({
  store: { type: Object, required: true }
})
</script>