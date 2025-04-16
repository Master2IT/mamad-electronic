<template>
    <div class="my-10 h-auto">
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-xl md:text-2xl text-primary-700 font-black">{{ title }}</h2>
            <UButton variant="link" :href="link" class="flex items-center gap-1">
                مشاهده همه
                <ChevronLeft class="w-4 h-4" />
            </UButton>
        </div>
        <UCarousel v-slot="{ item }" align="start" skipSnaps :items="items" autoHeight class="w-full" arrows loop
            :autoplay="{ delay: 2000 }"
            :ui="{ item: 'basis-1/2 md:basis-1/6', prev: 'left-0 right-auto', next: 'right-0 left-auto' }">
            <div class="py-1">
                <NuxtImg :key="item.id || index" class="w-full h-[100px] sm:h-[120px] md:h-[150px] object-contain"
                    :src="item.image" :sizes="'sm:50vw md:33vw lg:16.67vw'" loading="lazy"
                    :alt="item.name || 'Brand logo'" />
            </div>
        </UCarousel>
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