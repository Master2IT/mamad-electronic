<template>
  <div class="my-10 h-auto">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-2xl text-primary-700 font-black">{{ title }}</h2>
      <UButton variant="link" :href="link" class="flex items-center gap-1">
        مشاهده همه
        <ChevronLeft class="w-4 h-4" />
      </UButton>
    </div>
    <UAccordion :items="items" :ui="{
      item: 'bg-white rounded-md shadow-xs p-2 px-5 mb-2',
    }" />
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

interface FAQItem {
  id: number | string;
  question: string;
  answer: string;
}

defineProps({
  items: {
    type: Array as PropType<FAQItem[]>,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>