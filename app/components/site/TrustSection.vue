<template>
  <section id="confianza" class="py-14 sm:py-20">
    <div class="container-x">
      <SectionHeading :title="store.trust.title" />

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <div class="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <h3 class="flex items-center gap-2 text-base font-semibold text-zinc-900">
            <IconTruck :size="20" class="text-[color:var(--primary)]" />
            {{ store.trust.shipping.title }}
          </h3>
          <ul class="mt-4 divide-y divide-zinc-100">
            <li
              v-for="zone in store.trust.shipping.zones"
              :key="zone.zone"
              class="flex items-center justify-between gap-4 py-3"
            >
              <span class="text-sm font-medium text-zinc-700">{{ zone.zone }}</span>
              <span class="text-sm font-bold text-zinc-900">{{ zone.price }}</span>
            </li>
          </ul>
          <p v-if="store.trust.shipping.note" class="mt-3 text-xs leading-relaxed text-zinc-500">
            {{ store.trust.shipping.note }}
          </p>
        </div>

        <div class="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <h3 class="flex items-center gap-2 text-base font-semibold text-zinc-900">
            <IconWallet :size="20" class="text-[color:var(--primary)]" />
            Métodos de pago
          </h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="method in store.trust.paymentMethods"
              :key="method"
              class="inline-flex min-h-10 items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700"
            >
              <IconCheck :size="16" class="text-[color:var(--primary)]" />
              {{ method }}
            </li>
          </ul>
        </div>
      </div>

      <div v-if="store.trust.testimonials?.length" class="mt-10">
        <h3 class="text-center text-lg font-semibold text-zinc-900">Lo que dicen nuestros clientes</h3>
        <div class="mt-6 grid gap-6 sm:grid-cols-3">
          <figure
            v-for="t in store.trust.testimonials"
            :key="t.name"
            class="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
          >
            <div class="flex items-center gap-1 text-[color:var(--primary)]" aria-label="Calificación">
              <IconStar v-for="s in t.rating" :key="s" :size="16" />
            </div>
            <blockquote class="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
              “{{ t.text }}”
            </blockquote>
            <figcaption class="mt-4 flex items-center gap-3">
              <img :src="t.avatar" :alt="t.name" class="h-10 w-10 rounded-full object-cover" loading="lazy" />
              <span class="text-sm font-semibold text-zinc-900">{{ t.name }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '~/components/site/SectionHeading.vue'
import IconTruck from '~/components/ui/IconTruck.vue'
import IconWallet from '~/components/ui/IconWallet.vue'
import IconCheck from '~/components/ui/IconCheck.vue'
import IconStar from '~/components/ui/IconStar.vue'

defineProps({
  store: { type: Object, required: true }
})
</script>