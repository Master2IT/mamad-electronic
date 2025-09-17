<template>
  <div class="p-4 min-w-72 overflow-y-auto">
    <div v-for="category in categories" :key="category.id" class="mb-2">
      <!-- Main Category -->
      <div v-if="category.show_in_menu">
        <UButton
          v-if="category.children?.length"
          variant="ghost"
          class="w-full justify-between p-3"
          @click="toggleCategory(category.id)"
        >
          <span class="font-medium">{{ category.label }}</span>
          
          <UIcon
            :name="openCategories[category.id] ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            class="size-4"
          />
        </UButton>
        <NuxtLink
          v-else
          :to="category.to"
          class="block w-full p-3   font-medium hover:bg-gray-50 rounded-lg transition-colors"
        >
          {{ category.label }}
        </NuxtLink>

        <!-- Subcategories -->
        <div
          v-if="openCategories[category.id] && category.children?.length"
          class="ml-4 mt-2 space-y-1"
        >
          <div v-for="child in category.children" :key="child.id">
            <UButton
              v-if="child.children?.length"
              variant="ghost"
              class="w-full justify-between p-2  text-sm"
              @click="toggleSubCategory(child.id)"
              
            >
              <span>{{ child.label }}</span>
              <UButton variant="ghost"  :to="child.to" external>  

                  <UIcon
                  :name="openSubCategories[child.id] ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                  class="size-3"
                />
              </UButton>
            </UButton>
            <NuxtLink
              v-else
              :to="child.to"
              class="block w-full p-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
            >
              {{ child.label }}
            </NuxtLink>

            <!-- Sub-subcategories -->
            <div
              v-if="openSubCategories[child.id] && child.children?.length"
              class="ml-4 mt-1 space-y-1"
            >
              <div v-for="subChild in child.children" :key="subChild.id">
                <UButton
                  v-if="subChild.children?.length"
                  variant="ghost"
                  class="w-full justify-between p-2 text-xs"
                  @click="toggleSubSubCategory(subChild.id)"
                >
                  <span>{{ subChild.label }}</span>
                  <UIcon
                    :name="openSubSubCategories[subChild.id] ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                    class="size-3"
                  />
                </UButton>
                <NuxtLink
                  v-else
                  :to="subChild.to"
                  class="block w-full p-2 text-xs text-gray-500 hover:bg-gray-50 rounded transition-colors"
                >
                  {{ subChild.label }}
                </NuxtLink>

                <!-- Sub-sub-subcategories -->
                <div
                  v-if="openSubSubCategories[subChild.id] && subChild.children?.length"
                  class="ml-4 mt-1 space-y-1"
                >
                  <NuxtLink
                    v-for="subSubChild in subChild.children"
                    :key="subSubChild.id"
                    :to="subSubChild.to"
                    class="block w-full p-2 text-xs text-gray-400 hover:bg-gray-50 rounded transition-colors"
                  >
                    {{ subSubChild.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openCategories = ref({})
const openSubCategories = ref({})
const openSubSubCategories = ref({})

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const toggleCategory = (categoryId) => {
  openCategories.value[categoryId] = !openCategories.value[categoryId]
  // Close all subcategories when parent is closed
  if (!openCategories.value[categoryId]) {
    openSubCategories.value = {}
    openSubSubCategories.value = {}
  }
}

const toggleSubCategory = (subCategoryId) => {
  openSubCategories.value[subCategoryId] = !openSubCategories.value[subCategoryId]
  // Close all sub-subcategories when parent is closed
  if (!openSubCategories.value[subCategoryId]) {
    openSubSubCategories.value = {}
  }
}

const toggleSubSubCategory = (subSubCategoryId) => {
  openSubSubCategories.value[subSubCategoryId] = !openSubSubCategories.value[subSubCategoryId]
}
</script>