<template>
  <div
    v-for="category in categories"
    :key="category.id"
    class="relative pb-2"
    @mouseenter="openMenu(category.id)"
    @mouseleave="closeMenu(category.id)"
  >
    <UButton
      :key="category.id"
      v-if="category.children?.length && category.show_in_menu"
      variant="ghost"
      class="flex items-center gap-2"
      :class="{ 'text-primary-500': isActiveCategory(category) }"
    >
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
      class="absolute top-full right-0 z-50 mt-1 min-h-[300px] w-[1200px] rounded-lg border border-neutral-100 bg-white p-4 shadow-lg"
    >
      <div class="flex min-h-[250px]">
        <!-- Parent Categories Column -->
        <div class="min-w-[300px] border-l border-neutral-300 pl-3">
          <UButton
            :to="child.to"
            external
            variant="ghost"
            v-for="child in category.children"
            :key="child.id"
            @mouseenter="activeCategory = child"
            class="hover:bg-transparent text-neutral-800 hover:text-primary-500 flex cursor-pointer items-center justify-between gap-2 rounded-lg p-2 transition-colors"
            :class="{ 'text-primary-500': activeCategory?.id === child.id }"
          >
            <h3 class="text-sm font-medium">
              {{ child.label }}
            </h3>
            <UIcon
              v-if="child.children?.length"
              name="i-lucide-chevron-left"
              class="size-5 text-gray-400"
            />
          </UButton>
        </div>

        <!-- Subcategories Column -->
        <div
          v-if="activeCategory && activeCategory?.children?.length"
          class="min-w-[300px] p-4 border-l border-neutral-300 pl-3 bg-primary-100"
        >
          <ul class="space-y-2">
            <li v-for="sub in activeCategory.children" :key="sub.id">
              <UButton
                :to="sub.to"
                external
                variant="ghost"
                @mouseenter="activeSubCategory = sub"
                class="hover:text-primary-500 hover:bg-transparent flex justify-between items-center w-full text-start text-sm text-gray-600 transition-colors"
                :class="{ 'text-primary-500': activeSubCategory?.id === sub.id }"
              >
                {{ sub.label }}
                <UIcon
                  v-if="sub.children?.length"
                  name="i-lucide-chevron-left"
                  class="size-5 text-gray-400"
                />
              </UButton>
            </li>
          </ul>
        </div>

        <!-- Sub-Subcategories Column -->
        <div
          v-if="activeSubCategory && activeSubCategory?.children?.length"
          class="min-w-[300px] p-4 border-l border-neutral-300 pl-3"
        >
          <ul class="space-y-2">
            <li v-for="sub in activeSubCategory.children" :key="sub.id">
              <UButton
                :to="sub.to"
                external
                variant="ghost"
                @mouseenter="activeSubSubCategory = sub"
                class="hover:text-primary-500 flex justify-between items-center hover:bg-transparent w-full text-start text-sm text-gray-600 transition-colors"
                :class="{ 'text-primary-500': activeSubSubCategory?.id === sub.id }"
              >
                {{ sub.label }}
                <UIcon
                  v-if="sub.children?.length"
                  name="i-lucide-chevron-left"
                  class="size-5 text-gray-400"
                />
              </UButton>
            </li>
          </ul>
        </div>

        <!-- Sub-Sub-Subcategories Column -->
        <div
          v-if="activeSubSubCategory && activeSubSubCategory?.children?.length"
          class="min-w-[300px] p-4"
        >
          <ul class="space-y-2">
            <li v-for="sub in activeSubSubCategory.children" :key="sub.id">
              <UButton
                :to="sub.to"
                external
                variant="ghost"
                class="hover:text-primary-500 flex justify-between items-center hover:bg-transparent w-full text-start text-sm text-gray-600 transition-colors"
              >
                {{ sub.label }}
                <UIcon
                  v-if="sub.children?.length"
                  name="i-lucide-chevron-left"
                  class="size-5 text-gray-400"
                />
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
const activeSubCategory = ref(null)
const activeSubSubCategory = ref(null)
let closeTimeouts = {}

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

const isActiveCategory = (category) => {
  if (!activeCategory.value) return false
  
  // Check if this category contains the active category
  return category.children?.some(child => child.id === activeCategory.value.id)
}

watch(activeSubCategory, (newVal) => {
  console.log('newVal: ', newVal)
})

const openMenu = (categoryId) => {
  if (closeTimeouts[categoryId]) {
    clearTimeout(closeTimeouts[categoryId])
    closeTimeouts[categoryId] = null
  }
  openMenus.value[categoryId] = true
  const category = props.categories.find((cat) => cat.id === categoryId)
  activeCategory.value = category?.children?.[0] || null
}

const closeMenu = (categoryId) => {
  closeTimeouts[categoryId] = setTimeout(() => {
    openMenus.value[categoryId] = false
    activeCategory.value = null
    activeSubCategory.value = null
    activeSubSubCategory.value = null
  }, 250)
}

const cancelClose = (categoryId) => {
  if (closeTimeouts[categoryId]) {
    clearTimeout(closeTimeouts[categoryId])
    closeTimeouts[categoryId] = null
  }
}
</script>
