<template>
  <section id="catalog" class="py-14 sm:py-20">
    <div class="container-x">
      <SectionHeading :title="store.catalog.title" :subtitle="store.catalog.subtitle" />

      <div class="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Categorías">
        <button
          v-for="category in ['Todos', ...store.categories]"
          :key="category"
          type="button"
          class="min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition"
          :class="activeCategory === category
            ? 'border-transparent bg-[color:var(--primary)] text-white shadow-sm'
            : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        <ProductCard
          v-for="item in filteredItems"
          :key="item.id"
          :store="store"
          :item="item"
          @view="openItem"
        />
      </div>
    </div>

    <ProductModal
      v-if="activeItem"
      :store="store"
      :item="activeItem"
      @close="activeItem = null"
    />
  </section>
</template>

<script setup>
import SectionHeading from '~/components/site/SectionHeading.vue'
import ProductCard from '~/components/site/ProductCard.vue'
import ProductModal from '~/components/site/ProductModal.vue'

const props = defineProps({
  store: { type: Object, required: true }
})

const activeCategory = ref('Todos')
const activeItem = ref(null)

function openItem(item) {
  activeItem.value = item
}

const filteredItems = computed(() => {
  if (activeCategory.value === 'Todos') return props.store.catalog.items
  return props.store.catalog.items.filter((i) => i.category === activeCategory.value)
})
</script>