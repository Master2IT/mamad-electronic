<template>
    <div class="my-10 h-auto">
        <Carousel :items="items" :breakpoints="{
            1280: {
                slidesPerView: 6,
                spaceBetween: 5,
            },
        }">
            <template #default="{ item }">
                <ShopCategoryCard :image="item.image" :name="item.name" />
            </template>
        </Carousel>
    </div>
</template>
<script setup>
import Carousel from '@/components/common/Carousel/Carousel.vue'

defineProps({
    items: {
        type: Array,
        required: true
    },
})
</script>