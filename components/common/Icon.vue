<template>
    <ClientOnly>
        <img :src="iconSrc" v-if="iconSrc" :width="size" :height="size" v-bind="$attrs" />
        <span v-else class="icon-fallback">{{ name }}</span>
    </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { name, size } = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: [String, Number],
        default: '24'
    }
});

const iconSrc = ref(null);

const loadIcon = async () => {
    try {
        // Dynamic import of the SVG icon
        const icon = await import(`~/assets/icons/${name}.svg`);
        iconSrc.value = icon.default;
    } catch (error) {
        console.error(`Failed to load icon: ${name}`, error);
    }
};

onMounted(() => {
    loadIcon();
});
</script>

<style scoped>
.icon-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: v-bind('`${size}px`');
    height: v-bind('`${size}px`');
    background-color: #f0f0f0;
    border-radius: 4px;
    font-size: 10px;
    color: #666;
}
</style>