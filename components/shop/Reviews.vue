<template>
  <div dir="rtl" class=" p-6 md:p-8 mx-auto  text-right font-[YourPersianFontName]">
    <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6 text-right">
      نقد وبررسی
    </h2>
    <div v-for="(item) in items" :key="item.id" class="mb-2 p-4">
      <h2 class="text-2xl md:text-2xl font-bold text-gray-900 mb-2">
        {{ item.title }}
      </h2>
      <p class="text-base md:text-lg text-gray-700 leading-relaxed">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ReviewItem {
  id: number | string,
  title: string,
  description: string
}
defineProps<{
  items: ReviewItem[]
}>();
</script>