<template>
    <swiper :modules="modules" :slides-per-view="slidesPerView" :space-between="spaceBetween" :navigation="navigation"
        :pagination="pagination" :autoplay="autoplay" :scrollbar="{ draggable: true }" :breakpoints="breakpoints"
        :loop="loop">
        <slot></slot>
    </swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/vue';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const modules = [Navigation, Pagination, A11y, Scrollbar];

const { autoplay, breakpoints, loop, navigation, pagination, slidesPerView, spaceBetween } = defineProps({
    slidesPerView: {
        type: [Number, String],
        default: 5
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
</script>