<template>
  <footer class="border-t border-zinc-200 bg-zinc-50">
    <div class="container-x py-10">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <img :src="store.logo" :alt="store.name" class="h-10 w-10 rounded-xl object-cover" />
            <span class="text-base font-bold text-zinc-900">{{ store.name }}</span>
          </div>
          <p class="mt-3 text-sm text-zinc-500">{{ store.tagline }}</p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-zinc-900">Horarios</h3>
          <p class="mt-3 flex items-center gap-2 text-sm text-zinc-600">
            <IconClock :size="16" class="shrink-0" />
            {{ store.contact.hours }}
          </p>
          <p class="mt-2 flex items-center gap-2 text-sm text-zinc-600">
            <IconPhone :size="16" class="shrink-0" />
            {{ store.contact.phone }}
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-zinc-900">Zona de cobertura</h3>
          <p class="mt-3 flex items-start gap-2 text-sm text-zinc-600">
            <IconMapPin :size="16" class="mt-0.5 shrink-0" />
            {{ store.location.zones || store.location.address }}
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-zinc-900">Redes sociales</h3>
          <div class="mt-3 flex items-center gap-3">
            <a
              v-if="store.contact.social?.instagram"
              :href="store.contact.social.instagram"
              target="_blank"
              rel="noopener"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:text-[color:var(--primary)]"
              :aria-label="`Instagram de ${store.name}`"
            >
              <IconInstagram :size="20" />
            </a>
            <a
              v-if="store.contact.social?.tiktok"
              :href="store.contact.social.tiktok"
              target="_blank"
              rel="noopener"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:text-[color:var(--primary)]"
              :aria-label="`TikTok de ${store.name}`"
            >
              <IconTiktok :size="20" />
            </a>
            <a
              v-if="store.contact.social?.facebook"
              :href="store.contact.social.facebook"
              target="_blank"
              rel="noopener"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:text-[color:var(--primary)]"
              :aria-label="`Facebook de ${store.name}`"
            >
              <IconFacebook :size="20" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-zinc-200 pt-6 text-center">
        <p class="text-xs text-zinc-500">
          © {{ year }} {{ store.name }} · {{ store.contact.hours }}
        </p>
        <p class="mt-1 text-xs text-zinc-400">Hecho con ♥ para microemprendedores</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconClock from '~/components/ui/IconClock.vue'
import IconPhone from '~/components/ui/IconPhone.vue'
import IconMapPin from '~/components/ui/IconMapPin.vue'
import IconInstagram from '~/components/ui/IconInstagram.vue'
import IconTiktok from '~/components/ui/IconTiktok.vue'
import IconFacebook from '~/components/ui/IconFacebook.vue'

const props = defineProps({
  store: { type: Object, required: true }
})

const year = new Date().getFullYear()
</script>