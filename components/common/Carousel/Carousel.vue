<template>
    <client-only>
        <swiper-container ref="containerRef" :init="false">
            <swiper-slide v-for="item in items" :key="item.id" class="py-1">
                <slot :item="item" />
            </swiper-slide>
        </swiper-container>
    </client-only>
</template>
<script setup>
const containerRef = ref(null)

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    },
    breakpoints: {
        type: Object,
        default: () => ({
            // Mobile
            320: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            // Tablet
            640: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            // Small laptop
            768: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            // Desktop
            1024: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
            // Large desktop
            1280: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        })
    }
})


useSwiper(containerRef, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: props.breakpoints,
})

</script>