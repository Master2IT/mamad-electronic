<template>
    <div class="my-10 h-auto">
        <Carousel :items="items" :breakpoints="{
            1024: {
                slidesPerView: 6,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 5,
            },
        }">
            <template #default="{ item }">
                <ShopCategoryCard :image="item.image" :name="item.name" :to="item.to" />
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