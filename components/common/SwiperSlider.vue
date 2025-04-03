<template>
    <swiper :modules="modules" :slides-per-view="slidesPerView" :space-between="spaceBetween" :navigation="navigation"
        :pagination="pagination" :autoplay="autoplay" :breakpoints="breakpoints" :loop="loop" class="custom-swiper">
        <slot></slot>
    </swiper>
</template>

<script setup>
import { Swiper } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
    slidesPerView: {
        type: [Number, String],
        default: 1
    },
    spaceBetween: {
        type: Number,
        default: 30
    },
    navigation: {
        type: Boolean,
        default: true
    },
    pagination: {
        type: [Boolean, Object],
        default: () => ({
            clickable: true
        })
    },
    autoplay: {
        type: [Boolean, Object],
        default: false
    },
    loop: {
        type: Boolean,
        default: false
    },
    breakpoints: {
        type: Object,
        default: () => ({
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        })
    }
});

const modules = [Navigation, Pagination, Autoplay, A11y];
</script>

<style>
.custom-swiper {
    width: 100%;
    height: 100%;
}
</style>