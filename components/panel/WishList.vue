<template>
  <div class="flex w-full flex-col gap-5 p-5">
    <div>
      <h1 class="text-2xl font-bold mb-1">علاقه مندی ها</h1>
      <p class="text-gray-600">مواردی که لیست شده</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
      <template v-if="loading">
        <div v-for="i in 8" :key="i" class="animate-pulse">
          <div class="bg-gray-200 rounded-md h-[350px]  mb-3">
            <div class="p-4 w-full">
              <div class="bg-gray-300 h-[200px] w-full rounded-md mb-4"></div>
              <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
              <div class="bg-gray-300 h-3 w-1/2 rounded mb-3"></div>
              <div class="bg-gray-300 h-8 w-full rounded"></div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <CommonProductCard v-for="product in favorites" :key="product.id" :type="2" :product="product" show-review />
      </template>
    </div>
  </div>
</template>

<script setup>
import { getFavorite } from '~/api/customer-api';
const favorites = ref([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true
  try {
    favorites.value = await getFavorite()
  } catch (error) {
    console.error('Error fetching favorites:', error)
  } finally {
    loading.value = false
  }
})
</script>