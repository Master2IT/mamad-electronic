<template>
    <div class="my-10 h-auto">
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl text-primary-700 font-black">{{ title }}</h2>
            <UButton variant="link" :href="link" class="flex items-center gap-1">
                مشاهده همه
                <ChevronLeft class="w-4 h-4" />
            </UButton>
        </div>
        <Carousel :items="items" :breakpoints="{
            1280: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        }">
            <template #default="{ item }">
                <div class="py-1">
                    <NuxtImg :key="item.id || index" class="w-full h-[100px] sm:h-[120px] md:h-[100px] object-contain"
                        :src="item.image" :sizes="'sm:50vw md:33vw lg:16.67vw'" loading="lazy"
                        :alt="item.name || 'Brand logo'" />
                </div>
            </template>
        </Carousel>
    </div>
</template>
<script setup>
import { ChevronLeft } from 'lucide-vue-next'
import Carousel from '@/components/common/Carousel/Carousel.vue'

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