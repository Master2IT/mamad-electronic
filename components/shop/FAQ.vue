<template>
<div class="join join-vertical bg-base-100 w-full">
  <div v-for="(item) in items" :key="item.id" class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" :checked="true" />
    <div class="collapse-title font-semibold">{{ item.question }}</div>
    <div class="collapse-content text-sm">{{ item.answer }}</div>
  </div>
</div>
</template>

<script setup lang="ts">
interface FAQItem {
  id: number | string;
  question: string;
  answer: string;
}

defineProps<{
  items: FAQItem[]
}>();
</script>