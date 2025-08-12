<template>
  <div
    v-for="category in categories"
    :key="category.id"
    class="relative pb-2"
    @mouseenter="openMenu(category.id)"
    @mouseleave="closeMenu(category.id)"
  >
    <UButton :key="category.id" v-if="category.children?.length" variant="ghost" class="flex items-center gap-2">
      <span class="text-[13px]">{{ category.label }}</span>
      <span>
        <UIcon name="i-lucide-chevron-down" class="size-4 align-middle" />
      </span>
    </UButton>
    <NuxtLink
      v-else
      :to="category.to"
      class="hover:text-primary-500 flex items-center gap-2 text-gray-700 transition-colors"
    >
      <span>{{ category.label }}</span>
    </NuxtLink>

    <div
      v-if="openMenus[category.id] && category.children?.length"
      class="absolute top-full right-0 z-50 mt-1 w-[1200px] rounded-lg border border-neutral-100 bg-white p-4 shadow-lg"
    >
      <div class="flex">
        <!-- Parent Categories Column -->
        <div class="w-[200px] border-l pl-2 border-neutral-300 pr-3">
          <UButton
            :to="child.to"
            external
            variant="ghost"
            v-for="child in category.children"
            :key="child.id"
            @mouseenter="activeCategory = child"
            class="hover:bg-primary-100 flex cursor-pointer items-center justify-between gap-2 rounded-lg p-2 transition-colors"
          >
            <h3 class="text-sm font-medium text-neutral-800">{{ child.label }}</h3>
            <UIcon v-if="child.children?.length" name="i-lucide-chevron-right" class="size-5 text-gray-400" />
          </UButton>
        </div>

        <!-- Subcategories Column -->
        <div v-if="activeCategory?.children?.length" class="w-2/3 p-4">
          <ul class="space-y-2">
            <li v-for="sub in activeCategory.children" :key="sub.id">
              <UButton
                :to="sub.to"
                external
                variant="ghost"
                class="hover:text-primary-500 w-full text-start text-sm text-gray-600 transition-colors"
              >
                {{ sub.label }}
              </UButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openMenus = ref({})
const activeCategory = ref(null)
let closeTimeouts = {}

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

const openMenu = (categoryId) => {
  if (closeTimeouts[categoryId]) {
    clearTimeout(closeTimeouts[categoryId])
  }
  openMenus.value[categoryId] = true
  const category = props.categories.find(cat => cat.id === categoryId)
  activeCategory.value = category?.children?.[0] || null
}

const closeMenu = (categoryId) => {
  closeTimeouts[categoryId] = setTimeout(() => {
    openMenus.value[categoryId] = false
    activeCategory.value = null
  }, 200)
}
</script>
