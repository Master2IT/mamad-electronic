<template>
    <div class="my-10 h-auto">
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl text-primary-700 font-black">{{ title }}</h2>
            <UButton variant="link" :href="link" class="flex items-center gap-1">
                مشاهده همه
                <ChevronLeft class="w-4 h-4" />
            </UButton>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 place-items-center">
            <NuxtImg v-for="(item, index) in items.slice(0, 6)" :key="item.id || index"
                class="w-[150px] h-[150px] object-contain" :src="item.image" loading="lazy"
                :alt="item.name || 'Brand logo'" />
        </div>
    </div>
</template>
<script setup>
import { ChevronLeft } from 'lucide-vue-next'

defineProps({
    items: {
        type: Array,
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