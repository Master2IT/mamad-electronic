<template>
    <div dir="rtl" class=" p-6 md:p-8 mx-auto  text-right font-[YourPersianFontName]">
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
          نقد وبررسی
        </h2>
      </div>
      <div  v-for="(item) in items" :key="item.id" class="border-b my-2 p-4">
        <h2 class="text-2xl md:text-2xl font-bold text-gray-900 mb-2">
        {{item.title}}
        </h2>
        <p class="text-base md:text-lg text-gray-700 leading-relaxed">
          {{ item.description}}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface ReviewItem{
    id: number | string,
    title: string,
    description: string
  }
  defineProps<{
    items: ReviewItem[]
  }>();
  </script>
 