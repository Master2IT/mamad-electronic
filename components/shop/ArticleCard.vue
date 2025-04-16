<template>
    <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div class="relative">
            <NuxtImg :src="article.image" :alt="article.name"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            </div>
        </div>

        <div class="p-4">
            <h3
                class="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                {{ article.name }}
            </h3>
        </div>
    </div>
</template>

<script setup>
defineProps({
    article: {
        type: Object,
        required: true,
        default: () => ({
            id: '',
            name: '',
            image: ''
        })
    }
})
</script>
