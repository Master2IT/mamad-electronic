<script setup>
const carouselConfig = {
    itemsToShow: 5,
    gap: 5,
    wrapAround: true,
    transition: 500,
    autoplay: 3000,
    pauseAutoplayOnHover: true,
    snapAlign: 'right'
}
</script>

<template>
    <Carousel v-bind="carouselConfig">
        <slot></slot>

        <template #addons>
            <Navigation />
            <!-- <Pagination /> -->
        </template>
    </Carousel>
</template>