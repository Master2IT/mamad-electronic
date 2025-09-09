<template>
  <div dir="rtl" class="bg-white md:p-8 mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6 text-right">
      مشخصات
    </h2>

    <div class="space-y-2" v-for="(item) in items" :key="item.id">
      <!-- Specification Row 1 -->
      <div class=" w-full flex justify-between items-center bg-gray-100 p-3 md:p-4 rounded mb-2">
        <span class="text-sm font-medium text-gray-700">{{ item.attribute_title }}</span>
        <span class="text-sm md:text-base font-medium text-gray-900 text-left" dir="ltr">{{ item.attribute_item_title }}</span>
      </div>
    </div>

    <!-- Show More Button -->
    <div class="mt-6 flex justify-start items-center cursor-pointer group">
       <span class="text-sm font-medium text-purple-600 group-hover:text-purple-800 transition-colors">
         نمایش بیشتر
       </span>
      <ChevronDown class="size-5 text-purple-600 "/>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ChevronDown} from "lucide-vue-next"
defineProps<{
  items: any[]
}>();
</script>
