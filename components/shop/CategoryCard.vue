<template>
    <nuxt-link external :to="to" class="w-full sm:w-[185px] h-[195px] bg-white shadow-xs flex flex-col items-center justify-center gap-5">
        <NuxtImg class="w-[100px] h-[100px] object-contain" :src="image" loading="lazy" :alt="name" />
        <span class="font-bold text-center text-lg">{{ name }}</span>
    </nuxt-link>
</template>
<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
})
</script>